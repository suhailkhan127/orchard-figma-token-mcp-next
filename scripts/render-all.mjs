// Per-frame Figma renderer — one API call per frame (fast return, incremental, resumable).
// Usage: node scripts/render-all.mjs  [outdir]
// Reads scripts/frames.json + .env (FIGMA_TOKEN, FIGMA_FILE_KEY). Skips already-downloaded files.
import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const root = new URL('..', import.meta.url);
const envTxt = fs.readFileSync(new URL('.env', root), 'utf8');
const env = Object.fromEntries(envTxt.split(/\r?\n/).filter(l => l && !l.startsWith('#')).map(l => {
  const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
}));
const TOKEN = env.FIGMA_TOKEN, KEY = env.FIGMA_FILE_KEY;
const manifestArg = process.argv[2] || 'scripts/frames.json';
const frames = JSON.parse(fs.readFileSync(manifestArg, 'utf8'));
const OUT = process.argv[3] || '_HTML/_Screenshots';
fs.mkdirSync(OUT, { recursive: true });

function getOnce(url, headers = {}) {
  return new Promise((res, rej) => {
    const req = https.get(url, { headers }, r => {
      if (r.statusCode >= 300 && r.statusCode < 400 && r.headers.location) return res(getOnce(r.headers.location, headers));
      const chunks = []; r.on('data', c => chunks.push(c));
      r.on('end', () => res({ status: r.statusCode, buf: Buffer.concat(chunks) }));
      r.on('error', rej);
    });
    req.on('error', rej);
    req.setTimeout(120000, () => req.destroy(new Error('timeout')));
  });
}
async function get(url, headers = {}, tries = 4) {
  let last;
  for (let i = 0; i < tries; i++) {
    try { return await getOnce(url, headers); }
    catch (e) { last = e; await new Promise(r => setTimeout(r, 1500 * (i + 1))); }
  }
  throw last;
}

let ok = 0, have = 0, fail = 0;
for (const f of frames) {
  const file = path.join(OUT, `${f.name}.png`);
  if (fs.existsSync(file) && fs.statSync(file).size > 2048) { console.log(`HAVE  ${f.name}.png`); have++; continue; }
  try {
    const api = `https://api.figma.com/v1/images/${KEY}?ids=${encodeURIComponent(f.id)}&format=png&scale=${f.scale}`;
    const meta = await get(api, { 'X-Figma-Token': TOKEN });
    const j = JSON.parse(meta.buf.toString());
    if (meta.status !== 200 || j.err) { console.log(`FAIL  ${f.name} -> API ${meta.status} ${j.err || ''}`); fail++; continue; }
    const url = j.images[f.id];
    if (!url) { console.log(`NULL  ${f.name} (${f.id}) -> render returned null (retry lower scale)`); fail++; continue; }
    const img = await get(url);
    if (img.status !== 200) { console.log(`FAIL  ${f.name} -> download http ${img.status}`); fail++; continue; }
    fs.writeFileSync(file, img.buf);
    console.log(`OK    ${f.name}.png  (${(img.buf.length / 1024).toFixed(0)} KB) @${f.scale}`);
    ok++;
  } catch (e) { console.log(`ERR   ${f.name} (${f.id}) -> ${e.message}`); fail++; }
}
console.log(`\nDONE  ok=${ok} have=${have} fail=${fail} total=${frames.length}`);

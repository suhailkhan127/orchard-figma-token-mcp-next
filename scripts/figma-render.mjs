// Figma artboard renderer — no Python/Pillow. Usage:
//   node scripts/figma-render.mjs <scale> <outdir> <name=nodeId> [name=nodeId ...]
// Reads FIGMA_TOKEN + FIGMA_FILE_KEY from .env. Batches the image-URL request,
// then downloads each PNG. Figma caps render dimension ~32768px; pass scale 1 for tall frames.
import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const envTxt = fs.readFileSync(new URL('../.env', import.meta.url), 'utf8');
const env = Object.fromEntries(envTxt.split(/\r?\n/).filter(l => l && !l.startsWith('#')).map(l => {
  const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
}));
const TOKEN = env.FIGMA_TOKEN, KEY = env.FIGMA_FILE_KEY;

const [scale, outdir, ...pairs] = process.argv.slice(2);
if (!scale || !outdir || !pairs.length) { console.error('args: <scale> <outdir> <name=nodeId>...'); process.exit(1); }
fs.mkdirSync(outdir, { recursive: true });

const map = pairs.map(p => { const i = p.indexOf('='); return { name: p.slice(0, i), id: p.slice(i + 1) }; });

function getOnce(url, headers = {}) {
  return new Promise((res, rej) => {
    const req = https.get(url, { headers }, r => {
      if (r.statusCode >= 300 && r.statusCode < 400 && r.headers.location) return res(getOnce(r.headers.location, headers));
      const chunks = []; r.on('data', c => chunks.push(c));
      r.on('end', () => res({ status: r.statusCode, buf: Buffer.concat(chunks) }));
      r.on('error', rej);
    });
    req.on('error', rej);
    req.setTimeout(90000, () => req.destroy(new Error('timeout')));
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

const ids = map.map(m => m.id).join(',');
const api = `https://api.figma.com/v1/images/${KEY}?ids=${encodeURIComponent(ids)}&format=png&scale=${scale}`;
const { status, buf } = await get(api, { 'X-Figma-Token': TOKEN });
const j = JSON.parse(buf.toString());
if (status !== 200 || j.err) { console.error('API error', status, j.err); process.exit(1); }

for (const m of map) {
  const file = path.join(outdir, `${m.name}.png`);
  if (fs.existsSync(file) && fs.statSync(file).size > 1024) { console.log(`HAVE  ${m.name}.png (skip)`); continue; }
  const url = j.images[m.id];
  if (!url) { console.log(`SKIP  ${m.name} (${m.id}) -> null (too large? render failed)`); continue; }
  try {
    const img = await get(url);
    if (img.status !== 200) { console.log(`FAIL  ${m.name} (${m.id}) -> http ${img.status}`); continue; }
    fs.writeFileSync(file, img.buf);
    console.log(`OK    ${m.name}.png  (${(img.buf.length / 1024).toFixed(0)} KB)`);
  } catch (e) { console.log(`ERR   ${m.name} (${m.id}) -> ${e.message}`); }
}

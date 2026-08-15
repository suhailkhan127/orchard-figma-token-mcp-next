// Discover image-fill nodes for each inner-page frame. Writes scripts/inner-images.json
// = { slug: [ {name, id, w, h, y} sorted by y ] }.  Also builds a flat download manifest.
import fs from 'node:fs';
import https from 'node:https';

const env = Object.fromEntries(fs.readFileSync(new URL('../.env', import.meta.url), 'utf8')
  .split(/\r?\n/).filter(l => l && !l.startsWith('#')).map(l => { const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }));
const TOKEN = env.FIGMA_TOKEN, KEY = env.FIGMA_FILE_KEY;

const FRAMES = {
  'inset': '1168:125',
  'how-to-choose-orthodontist': '1906:1002',
  'how-remote-monitoring-works': '1901:54',
  'booking': '1271:417',
  'contact': '1279:218',
  'pricing': '1226:2',
  'smile-gallery': '1434:298',
  'before-after': '1492:1196',
  'meet-team': '1491:215',
  'meet-dr-saqud': '1434:763',
  'blog': '1492:4',
  'blog-detail': '1492:520',
  'dentist-referral': '1434:1299',
  'thank-you': '1492:1630',
};

function getJSON(url, headers) {
  return new Promise((res, rej) => {
    https.get(url, { headers }, r => { const c = []; r.on('data', d => c.push(d)); r.on('end', () => { try { res(JSON.parse(Buffer.concat(c).toString())); } catch (e) { rej(e); } }); }).on('error', rej);
  });
}

const out = {}; const flat = [];
for (const [slug, id] of Object.entries(FRAMES)) {
  try {
    const j = await getJSON(`https://api.figma.com/v1/files/${KEY}/nodes?ids=${encodeURIComponent(id)}&depth=8`, { 'X-Figma-Token': TOKEN });
    const root = j.nodes[id].document;
    const y0 = (root.absoluteBoundingBox || {}).y || 0;
    const imgs = [];
    (function walk(n) {
      const b = n.absoluteBoundingBox;
      if (b && (n.fills || []).some(f => f.type === 'IMAGE') && b.width > 40 && b.height > 40) {
        imgs.push({ id: n.id, name: (n.name || '').replace(/[^\w]+/g, '-').slice(0, 20), y: Math.round(b.y - y0), w: Math.round(b.width), h: Math.round(b.height) });
      }
      (n.children || []).forEach(walk);
    })(root);
    imgs.sort((a, b) => a.y - b.y);
    // de-dup exact same y+size (design duplicates)
    const seen = new Set();
    const uniq = imgs.filter(im => { const k = im.y + 'x' + im.w + 'x' + im.h; if (seen.has(k)) return false; seen.add(k); return true; });
    uniq.forEach((im, i) => { im.file = `${slug}-${String(i + 1).padStart(2, '0')}`; flat.push({ name: `${slug}/${im.file}`, id: im.id, w: im.w, h: im.h }); });
    out[slug] = uniq;
    console.log(`${slug}: ${uniq.length} images (${imgs.length} raw)`);
  } catch (e) { console.log(`${slug}: ERROR ${e.message}`); out[slug] = []; }
}
fs.writeFileSync('scripts/inner-images.json', JSON.stringify(out, null, 1));
fs.writeFileSync('scripts/inner-flat.json', JSON.stringify(flat, null, 1));
console.log(`\nTOTAL images to fetch: ${flat.length}`);

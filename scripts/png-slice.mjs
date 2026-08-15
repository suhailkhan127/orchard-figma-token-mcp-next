// Pure-Node horizontal PNG band slicer (no Pillow/ImageMagick).
// Usage: node scripts/png-slice.mjs <input.png> <outdir> <prefix> [bandHeightPx=1500]
// Decodes IDAT (zlib), un-filters scanlines, re-encodes each band as its own PNG (filter 0).
// Handles 8-bit RGB (colortype 2) and RGBA (colortype 6). Names: prefix_NN_START-END.png
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const [input, outdir, prefix, bandArg] = process.argv.slice(2);
if (!input || !outdir || !prefix) { console.error('args: <input.png> <outdir> <prefix> [bandHeightPx]'); process.exit(1); }
const BAND = parseInt(bandArg || '1500', 10);
fs.mkdirSync(outdir, { recursive: true });

// ---- CRC32 ----
const crcTable = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1); t[n] = c >>> 0; } return t; })();
function crc32(buf) { let c = 0xFFFFFFFF; for (let i = 0; i < buf.length; i++) c = crcTable[(c ^ buf[i]) & 0xFF] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; }
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length, 0);
  const t = Buffer.from(type, 'ascii');
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(Buffer.concat([t, data])), 0);
  return Buffer.concat([len, t, data, crc]);
}

// ---- parse ----
const png = fs.readFileSync(input);
if (png.readUInt32BE(0) !== 0x89504E47) { console.error('not a PNG'); process.exit(1); }
let off = 8, width, height, bitDepth, colorType, idat = [];
while (off < png.length) {
  const len = png.readUInt32BE(off); const type = png.toString('ascii', off + 4, off + 8);
  const data = png.subarray(off + 8, off + 8 + len);
  if (type === 'IHDR') { width = data.readUInt32BE(0); height = data.readUInt32BE(4); bitDepth = data[8]; colorType = data[9]; }
  else if (type === 'IDAT') idat.push(data);
  else if (type === 'IEND') break;
  off += 12 + len;
}
if (bitDepth !== 8 || (colorType !== 2 && colorType !== 6)) { console.error(`unsupported PNG: bitDepth=${bitDepth} colorType=${colorType}`); process.exit(1); }
const ch = colorType === 6 ? 4 : 3;
const raw = zlib.inflateSync(Buffer.concat(idat), { maxOutputLength: 2000 * 1024 * 1024 });
const stride = width * ch;

// ---- un-filter into pixel buffer (no filter bytes) ----
const px = Buffer.alloc(height * stride);
function paeth(a, b, c) { const p = a + b - c, pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c); return pa <= pb && pa <= pc ? a : pb <= pc ? b : c; }
for (let y = 0; y < height; y++) {
  const ft = raw[y * (stride + 1)];
  const rin = y * (stride + 1) + 1, rout = y * stride, prev = rout - stride;
  for (let x = 0; x < stride; x++) {
    const v = raw[rin + x];
    const a = x >= ch ? px[rout + x - ch] : 0;
    const b = y > 0 ? px[prev + x] : 0;
    const c = (x >= ch && y > 0) ? px[prev + x - ch] : 0;
    let out;
    switch (ft) {
      case 0: out = v; break;
      case 1: out = v + a; break;
      case 2: out = v + b; break;
      case 3: out = v + ((a + b) >> 1); break;
      case 4: out = v + paeth(a, b, c); break;
      default: console.error('bad filter', ft, 'row', y); process.exit(1);
    }
    px[rout + x] = out & 0xFF;
  }
}

// ---- emit bands ----
const sig = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
let n = 0;
for (let y0 = 0; y0 < height; y0 += BAND) {
  const y1 = Math.min(y0 + BAND, height), bh = y1 - y0;
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0); ihdr.writeUInt32BE(bh, 4); ihdr[8] = 8; ihdr[9] = colorType; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  const rows = Buffer.alloc(bh * (stride + 1));
  for (let y = 0; y < bh; y++) { rows[y * (stride + 1)] = 0; px.copy(rows, y * (stride + 1) + 1, (y0 + y) * stride, (y0 + y) * stride + stride); }
  const out = Buffer.concat([sig, chunk('IHDR', ihdr), chunk('IDAT', zlib.deflateSync(rows, { level: 6 })), chunk('IEND', Buffer.alloc(0))]);
  const name = `${prefix}_${String(n).padStart(2, '0')}_${y0}-${y1}.png`;
  fs.writeFileSync(path.join(outdir, name), out);
  console.log(`  ${name}  ${width}x${bh}  (${(out.length / 1024).toFixed(0)} KB)`);
  n++;
}
console.log(`sliced ${input} -> ${n} bands of ${BAND}px (source ${width}x${height}, ${ch}ch)`);

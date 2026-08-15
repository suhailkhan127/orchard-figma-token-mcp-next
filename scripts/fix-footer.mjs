// Replace the footer__top block (Orchard logo + inline SVG socials) with the
// design-matching tio logo + exported Figma social icons, across every page.
import fs from 'node:fs';
const DIR = new URL('../_HTML/', import.meta.url);

const NEW = `<div class="footer__top">
      <a class="footer__logo" href="index.html"><img src="images/tio-logo.svg" alt="tio"></a>
      <div class="footer__social">
        <a href="#" aria-label="Instagram"><img src="images/social/ig.svg" alt=""></a>
        <a href="#" aria-label="YouTube"><img src="images/social/youtube.svg" alt=""></a>
        <a href="#" aria-label="Facebook"><img src="images/social/facebook.svg" alt=""></a>
        <a href="#" aria-label="X (Twitter)"><img src="images/social/x.svg" alt=""></a>
      </div>
    </div>`;

const files = fs.readdirSync(DIR).filter(f => f.endsWith('.html'));
let done = 0;
for (const f of files) {
  const path = new URL(f, DIR);
  let html = fs.readFileSync(path, 'utf8');
  // match footer__top ... up to (but not including) footer__bottom
  const re = /<div class="footer__top">[\s\S]*?(?=\s*<div class="footer__bottom">)/;
  if (!re.test(html)) { console.log(`SKIP ${f} (no footer__top)`); continue; }
  html = html.replace(re, NEW);
  fs.writeFileSync(path, html);
  console.log(`OK ${f}`);
  done++;
}
console.log(`\nUpdated ${done} footers.`);

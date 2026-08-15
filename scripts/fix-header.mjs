// Rewrite the <header> block in every page to the new structure:
// utility row moved INSIDE .navbar (right-aligned, above nav+CTA), no top bar / no border.
// Preserves each file's existing is-solid state and applies the correct nav active highlight.
import fs from 'node:fs';

const DIR = new URL('../_HTML/', import.meta.url);
const caret = '<svg class="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>';
const A = (active, key, extra = '') => `class="nav__link${active === key ? ' active' : ''}"${extra}`;

const utility = `      <div class="navbar__utility">
        <div class="langmenu">
          <button class="langmenu__toggle" aria-expanded="false" aria-haspopup="true">
            <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18"/></svg>
            Language ${caret}
          </button>
          <div class="langmenu__panel">
            <a href="#">🇪🇸 Spanish</a><a href="#">🇵🇹 Portuguese</a><a href="#">🇸🇦 Arabic (Saudi Arabia)</a><a href="#">🇨🇳 Chinese (Mandarin)</a>
          </div>
        </div>
        <a href="dentist-referral.html"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="8" r="2.2"/><path d="M15.5 14.3c2.4.6 4.5 2.7 4.5 5.7"/></svg> Dentist Referrals</a>
        <a href="#"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z"/></svg> Patient Info</a>
        <a class="topbar__phone" href="tel:02086497500"><svg class="ico" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1z"/></svg> 020 8649 7500</a>
      </div>`;

const nav = (active) => `        <nav class="nav" aria-label="Primary">
          <div class="nav__item has-dropdown">
            <a ${A(active, 'treatments')} href="#">Treatments ${caret}</a>
            <div class="dropdown"><a href="how-to-choose-orthodontist.html">Invisalign®</a><a href="inset.html">Damon Braces</a><a href="inset.html">NHS Braces</a><a href="inset.html">Carriere Motion</a><a href="how-remote-monitoring-works.html">AI Monitoring</a><a href="inset.html">Cosmetic Dentistry</a></div>
          </div>
          <div class="nav__item"><a ${A(active, 'pricing')} href="pricing.html">Pricing</a></div>
          <div class="nav__item"><a ${A(active, 'smile-gallery')} href="smile-gallery.html">Smile Gallery</a></div>
          <div class="nav__item has-dropdown">
            <a ${A(active, 'for-patients')} href="#">For Patients ${caret}</a>
            <div class="dropdown"><a href="booking.html">New Patients</a><a href="pricing.html">Finance Options</a><a href="inset.html">FAQs</a></div>
          </div>
          <div class="nav__item has-dropdown">
            <a ${A(active, 'about')} href="#">About Us ${caret}</a>
            <div class="dropdown"><a href="meet-team.html">Meet the Team</a><a href="meet-team.html">Award Winning Team</a><a href="blog.html">Blog</a></div>
          </div>
          <div class="nav__item"><a ${A(active, 'contact')} href="contact.html">Contact Us</a></div>
        </nav>`;

const header = (solid, active) => `<header class="site-header${solid ? ' is-solid' : ''}">
  <div class="container navbar">
    <a class="brand" href="index.html" aria-label="Orchard Orthodontics home"><img src="images/logo.svg" alt="Orchard Orthodontics"></a>
    <div class="navbar__right">
${utility}
      <div class="navbar__bottom">
${nav(active)}
        <a class="btn btn--green btn--sm header__cta" href="booking.html">Free Consultation</a>
      </div>
    </div>
    <button class="burger" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu"><span></span><span></span><span></span></button>
  </div>
</header>`;

const ACTIVE = {
  'inset': 'treatments', 'how-to-choose-orthodontist': 'treatments', 'how-remote-monitoring-works': 'treatments',
  'pricing': 'pricing', 'smile-gallery': 'smile-gallery', 'contact': 'contact',
};

const files = fs.readdirSync(DIR).filter(f => f.endsWith('.html') && f !== '_template.html');
let done = 0;
for (const f of files) {
  const slug = f.replace('.html', '');
  const path = new URL(f, DIR);
  let html = fs.readFileSync(path, 'utf8');
  const m = html.match(/<header class="site-header([^"]*)">[\s\S]*?<\/header>/);
  if (!m) { console.log(`SKIP ${f} (no header found)`); continue; }
  const solid = /is-solid/.test(m[1]);
  const active = ACTIVE[slug] || '';
  html = html.replace(m[0], header(solid, active));
  fs.writeFileSync(path, html);
  console.log(`OK ${f}  (solid:${solid} active:${active || '-'})`);
  done++;
}
// also _template.html (keep its is-solid=true default, no active)
{
  const path = new URL('_template.html', DIR);
  let html = fs.readFileSync(path, 'utf8');
  const m = html.match(/<header class="site-header([^"]*)">[\s\S]*?<\/header>/);
  if (m) { html = html.replace(m[0], header(true, '')); fs.writeFileSync(path, html); console.log('OK _template.html'); done++; }
}
console.log(`\nRewrote ${done} headers.`);

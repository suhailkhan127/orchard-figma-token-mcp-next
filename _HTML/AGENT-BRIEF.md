# Orchard Orthodontics — Page Build Brief (read fully before building)

You are building ONE static HTML page for the Orchard Orthodontics site. The design system,
shared chrome, and reusable components already exist. **Match your assigned Figma screenshot**,
composing from the existing CSS. Do NOT reinvent styling.

## Paths (all under `C:\Users\Saad\Desktop\orchard-figma-mcp-nextjs\_HTML\`)
- Chrome shell to copy: `_template.html` (has header, mobile menu, Visit Us band, footer, widgets, scripts)
- Shared CSS (DO NOT EDIT): `styles.css`  ·  Shared JS (DO NOT EDIT): `main.js`
- Your screenshot: `_Screenshots/<name>.png`  (tall pages also have `_Screenshots/_crops/<name>_NN_*.png`)
- Reference for patterns & quality bar: `index.html` (the finished homepage — study how it composes sections)
- Output: write `<slug>.html` in `_HTML/`

## Hard rules
1. **Copy `_template.html` verbatim** for everything OUTSIDE `<main>`. Replace `__TITLE__`, `__DESC__`,
   `__SLUG__`. Fill `<main id="main">…</main>` with your page sections. Keep Visit Us + footer as-is
   (they are already in the template) UNLESS your screenshot clearly has no Visit band — then keep it anyway
   (every page ends with Visit + footer; it's the site standard).
2. **Reuse existing classes** (see vocabulary below). Only add NEW rules in a single inline `<style>` in
   `<head>`, namespaced under your body class (e.g. `.page-booking .xyz{}`). **Never edit `styles.css`.**
3. **Images = placeholders.** For every photo use `<div class="ph ph--dark"></div>` (dark sections) or
   `<div class="ph"></div>` (light), sized by the container. Add an HTML comment with a short description
   AND the aspect ratio, e.g. `<!-- IMG: patient headshot 4:3 -->`. A central image pass will swap these later.
   Exception: you MAY reuse existing real images in `images/home/*.png` and `images/icons/*.svg` when they fit.
4. **Real copy** from the screenshot (en-GB spelling). Where the Figma shows lorem ipsum, write short,
   on-brand neutral English copy instead (never leave lorem). Prices in £. Phone 020 8649 7500.
5. Set `<body class="page-<slug>">`. Add `active` to the matching top-nav `.nav__link` if one fits.
6. Internal links use clean `.html` (e.g. `booking.html`, `pricing.html`). Keep `is-solid` on the header
   (inner pages have a solid navy header from the top) UNLESS your page opens with a full-bleed photo hero
   like the homepage — then remove `is-solid`.
7. Match section order, headings, and layout of the screenshot top-to-bottom. Keep spacing generous
   (sections use `.section` = 96px padding, or the component's own padding).

## Design tokens (already in styles.css :root)
Font **Outfit**. `--c01`#25435C navy · `--c02`#435D75 · `--c03`#4D9F22 green · `--c04`#BFE560 lime ·
`--ct`#333 ink. Gradients `--cg01`(green) `--cg02`(navy). Container **1304px** (`.container`). Radius: buttons 32px, cards 24px.

## Reusable class vocabulary (compose from these — see index.html for live examples)
- **Type:** `h1`/`.h1` (64px light, `<strong>` = 600), `h2`(48px), `.eyebrow`(green uppercase label), `h4`,`h5`,`p`.
- **Buttons:** `.btn .btn--green` (primary), `.btn--navy`, `.btn--white` (on dark), `.btn--outline`, add `.btn--sm`.
- **Layout:** `.container`, `.section` (vertical padding), `.text-center`, `.sechead` (centered heading block).
- **Inner hero:** `.inset-hero`(navy band; add `.is-center` for centered) → `.inset-hero__bg`(faded photo),
  `.inset-hero__grid` (text left / `.inset-hero__media` right), `.crumb` (breadcrumb). H1 white.
- **Side-by-side:** `.sbs` (text `.sbs__body` + `.sbs__media`); add `.sbs--rev` to swap sides. Alternate per row.
- **Cards grid:** `.cards`(3-col; `.cards--2`,`.cards--4`) of `.card`>`.card__media`+`.card__body`(h3,.card__meta,p).
- **Before/After:** `.ba` with two `img` + `.ba__tag--b`/`.ba__tag--a`.
- **FAQ accordion:** `.faq`>`.faq__item`(add `is-open` to first)>`.faq__q`(button, `<span class="plus"></span>`)+`.faq__a`>`div`. JS wires it.
- **CTA band:** `.cta`>`.container`>`.cta__card`(grid: `.cta__media` + `.cta__body`). Navy, white text. Reuse from index.html.
- **Prose:** `.prose` (max-width 780, for blog article / legal text).
- **Dark feature grid:** see homepage `.why`/`.whyitem` (staggered icon grid) if your page has one.
- **Reveal animation:** add `class="reveal"` (or `reveal--left`/`reveal--right`) to sections/cards to fade-in on scroll.

## Placeholder helper (add to your inline <style> if you use dark placeholders)
`.ph--dark{background:linear-gradient(135deg,#24384a,#101c26)}`  (light `.ph` already exists)

## Consultation/contact/referral forms
Build a clean styled form with `.site-form` (define in your inline style): inputs full-width, radius 10px,
1px `var(--hairline)` border, padding 14px; labels 14px; submit = `.btn .btn--green`. `action="#"` for now
(PRM wiring is a later step). Fields per the screenshot (name, email, phone, location select, message, etc.).

Deliver the finished `<slug>.html`. Report the slug and the section list you built.

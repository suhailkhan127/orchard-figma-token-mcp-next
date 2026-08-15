# Image-wiring brief — swap placeholders for real Figma images

You wire ONE page's real images into its HTML. Only edit that one `<slug>.html` file. Never touch
`styles.css`, `main.js`, the chrome (header/footer/Visit/mobile-menu), or any other page.

## Inputs
- Page file: `_HTML/<slug>.html`
- Available images: `_HTML/IMAGE-MAP.md` → find your page's section. Images are listed **top-to-bottom**
  as they appear on the Figma page, each with `[WxH, ratio]` and the original figma layer name.
  They live at `images/inner/<slug>/<file>.png`.
- Your visual reference: `_Screenshots/<slug>.png` (for `inset`, use the crops `_Screenshots/_crops/inset_00_*.png` … `inset_10_*.png`).

## Method
1. Read `<slug>.html`, your IMAGE-MAP section, and your screenshot(s).
2. Find every image placeholder in the HTML — elements with class `ph` (e.g. `<div class="ph"></div>`,
   `<div class="ph ph--dark ..."></div>`) and any element carrying an `<!-- IMG: description ratio -->` comment
   (e.g. `.inset-hero__media`, `.sbs__media`, `.card__media`, `.cta__media`, `.ba` images, section `__bg` divs).
3. **Match** each placeholder to the best image by: (a) vertical order — placeholders top-to-bottom ≈ images
   top-to-bottom; (b) **aspect ratio** — compare the placeholder's IMG-comment ratio to the image `ratio`;
   (c) the figma layer-name hint (e.g. "before"/"after", "Yeshim"=clinic wide shot, portrait names = people).
   Wide images (ratio > 1.5) are usually **section backgrounds**; ~1.0 squares and tall (<0.8) are content photos/portraits.
4. Insert `<img src="images/inner/<slug>/<file>.png" alt="<short en-GB alt>" loading="lazy">` as the **first child**
   of the placeholder element. **Keep the element's existing classes.** Reuse an image on more than one slot if the
   design clearly repeats it and you're short.
5. Add this ONCE to the page's existing inline `<style>` (namespaced to your body class):
   ```
   .page-<slug> .ph{overflow:hidden;position:relative}
   .page-<slug> .ph>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0}
   .page-<slug> .ph>.playbtn,.page-<slug> .ph>.playbtn__label,.page-<slug> .ph>.ba__tag{z-index:2}
   ```
   (Elements that already have their own `__media img{}` rule in styles.css — like `.inset-hero__media`,
   `.sbs__media`, `.card__media`, `.cta__media` — need no extra CSS; just insert the `<img>`.)
6. **Before/After `.ba`:** put the "before" figma image in the `.ba__before` slot and the "after" image in the
   other slot. Keep the `.ba__tag--b`/`.ba__tag--a` labels on top.
7. **Full-bleed backgrounds** (`.inset-hero__bg`, `.why__bg`-style, `.ph--dark` section backdrops): use a wide
   clinic/reception image; it sits behind content (keep low opacity if the section already dims it).
8. If a placeholder has **no** sensible match (e.g. a decorative graphic, or you've run out of images), leave it
   as-is. Do NOT invent image paths. Icons (emoji or `images/icons/*.svg`) are NOT images to swap — leave them.

## Rules
- en-GB descriptive `alt` text (empty `alt=""` for purely decorative backgrounds).
- Do not change layout, copy, or classes beyond inserting `<img>` + the one CSS block above.
- After wiring, sanity-check the file is still well-formed.
- Report: how many placeholders you filled, and any you deliberately left empty (with why).

# Orchard Orthodontics — Build / QA Order

Reorder rows to set priority (top = built first). Tick boxes as you go.
**Phase 1 (design system) always runs first** regardless of this list.
QA gate = pixel-match vs screenshot at **1440 / 1024 / 768 / 390** (via Chrome MCP).

| # | Page | Route | Figma frame | Built | QA | Notes |
|---|------|-------|-------------|:---:|:---:|-------|
| 0 | Design System | — (reference) | `design-system` 1168:527 | [ ] | — | Tokens/type/spacing source of truth |
| 1 | Home | `/` | `homepage` 1899:25 (+ Rev06 care `2190:25`) | [ ] | [ ] | Build LAST per convention? confirm |
| 2 | Inset (generic treatment) | `/treatments/...` | `inset` 1168:125 | [ ] | [ ] | TALL 19876px — cropped into `_crops/` |
| 3 | How to choose an orthodontist | `/how-to-choose-an-orthodontist` | `how-to-choose-orthodontist` 1906:1002 | [ ] | [ ] | Inset content variant |
| 4 | How remote monitoring works | `/ai-monitoring` (?) | `how-remote-monitoring-works` 1901:54 | [ ] | [ ] | Inset content variant |
| 5 | Booking | `/book-a-consultation` | `booking` 1271:417 | [ ] | [ ] | Consultation form (bform) |
| 6 | Contact | `/contact` | `contact` 1279:218 | [ ] | [ ] | 3 addresses + map |
| 7 | Pricing (Costs) | `/pricing` | `pricing` 1226:2 | [ ] | [ ] | |
| 8 | Smile Gallery | `/smile-gallery` | `smile-gallery` 1434:298 | [ ] | [ ] | Before/after grid |
| 9 | Before & After | `/before-and-after` (?) | `before-after` 1492:1196 | [ ] | [ ] | May merge w/ Smile Gallery — confirm |
| 10 | Meet the Team | `/team` | `meet-team` 1491:215 + popup `1491:508` | [ ] | [ ] | Bio modal built into page |
| 11 | Meet Dr. Saqud | `/team/[slug]` | `meet-dr-saqud` 1434:763 | [ ] | [ ] | Full bio page template |
| 12 | Blog | `/blog` | `blog` 1492:4 | [ ] | [ ] | Listing + pagination |
| 13 | Blog Detail | `/blog/[slug]` | `blog-detail` 1492:520 (+ noimage `1492:1008`) | [ ] | [ ] | 2 variants |
| 14 | Dentist Referral | `/dentist-referral` | `dentist-referral` 1434:1299 | [ ] | [ ] | Referral form + uploads |
| 15 | Thank You | `/thank-you` | `thank-you` 1492:1630 | [ ] | [ ] | Post-form confirmation |

**Reusable blocks** (build once in Phase 1 / first use, reuse everywhere):
Header + mega-menu (`homepage-menu`), sticky header (`homepage-menu-sticky`), mobile menu
(`homepage-mobile-menu`), footer + 3-location map, Video Testimonial section (`video-testimonial`),
CTA / Instagram / follow bands.

**Live-site nav (orchardortho.com):** Treatments (Invisalign · Damon Braces · NHS Braces ·
Carriere Motion · AI Monitoring · Cosmetic Dentistry) · Pricing · Smile Gallery · For Patients ·
Award Winning Team · Blog · Charity · Contact Us.

**RESOLVED at review (2026-08-13):**
- Homepage canonical = **Rev05 (1899:25) + Rev06 CareSection (2190:25)** swapped in.
- `Location`, `Patient Form`, `Charity` → **DROPPED** (no Figma frame; Contact carries the 3 addresses). Building **15 pages**.

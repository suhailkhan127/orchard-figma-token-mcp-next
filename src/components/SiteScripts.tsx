"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Ports the vanilla _HTML/main.js interactions into a client component.
 * The markup is server-rendered (JSX chrome/pages); this attaches the same
 * DOM behaviour after hydration: sticky header, dropdowns, language menu,
 * mobile menu, FAQ accordion, Visit location picker (+ map switch), carousels,
 * scroll-reveal. Re-runs per pathname so it re-binds on client navigation.
 */
export default function SiteScripts() {
  const pathname = usePathname();
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];
    const on = (el: EventTarget, ev: string, fn: EventListener, opts?: AddEventListenerOptions) => {
      el.addEventListener(ev, fn, opts);
      cleanups.push(() => el.removeEventListener(ev, fn, opts));
    };

    // sticky header
    const header = document.querySelector(".site-header");
    if (header && !header.classList.contains("is-solid")) {
      const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
      onScroll();
      on(window, "scroll", onScroll, { passive: true });
    }

    // desktop dropdowns
    const items = Array.from(document.querySelectorAll(".nav__item.has-dropdown"));
    const closeAll = () => items.forEach((i) => i.classList.remove("is-open"));
    items.forEach((item) => {
      const link = item.querySelector(".nav__link");
      if (!link) return;
      on(link, "click", (e) => {
        if (item.querySelector(".dropdown")) {
          e.preventDefault();
          const open = item.classList.contains("is-open");
          closeAll();
          item.classList.toggle("is-open", !open);
        }
      });
    });
    on(document, "click", (e) => {
      if (!(e.target as HTMLElement).closest(".nav__item")) closeAll();
    });

    // language menu
    const lm = document.querySelector(".langmenu");
    if (lm) {
      const toggle = lm.querySelector(".langmenu__toggle");
      if (toggle) on(toggle, "click", (e) => { e.stopPropagation(); lm.classList.toggle("is-open"); });
      on(document, "click", () => lm.classList.remove("is-open"));
    }

    // mobile menu
    const burger = document.querySelector(".burger");
    const menu = document.getElementById("mobile-menu");
    if (burger && menu) {
      const openMenu = (state: boolean) => {
        burger.classList.toggle("is-active", state);
        menu.classList.toggle("is-open", state);
        burger.setAttribute("aria-expanded", state ? "true" : "false");
        document.body.style.overflow = state ? "hidden" : "";
      };
      on(burger, "click", () => openMenu(!menu.classList.contains("is-open")));
      menu.querySelectorAll(".mobile-menu__item.has-sub > .mobile-menu__link").forEach((a) => {
        on(a, "click", (e) => { e.preventDefault(); a.parentElement?.classList.toggle("is-open"); });
      });
      menu.querySelectorAll(".mobile-menu__sub a, .mobile-menu__cta a").forEach((a) => {
        on(a, "click", () => openMenu(false));
      });
      on(document, "keydown", (e) => { if ((e as KeyboardEvent).key === "Escape") openMenu(false); });
    }

    // esc closes dropdowns/langmenu
    on(document, "keydown", (e) => {
      if ((e as KeyboardEvent).key === "Escape") { closeAll(); lm?.classList.remove("is-open"); }
    });

    // FAQ accordion
    document.querySelectorAll(".faq__q").forEach((q) => {
      on(q, "click", () => {
        const item = q.closest(".faq__item");
        const a = item?.querySelector(".faq__a") as HTMLElement | null;
        if (!item || !a) return;
        const isOpen = item.classList.toggle("is-open");
        q.setAttribute("aria-expanded", isOpen ? "true" : "false");
        a.style.maxHeight = isOpen ? a.scrollHeight + "px" : "0";
      });
    });

    // Visit location picker (+ map switch)
    const VISIT_MAPS: Record<string, string> = {
      croydon: "114-118 Cherry Orchard Road Croydon CR0 6BA",
      brixton: "8 Brixton Hill London SW2 1EG",
      guildford: "Dental & Implant Centre 6 Faraday Road Guildford GU1 1EA",
    };
    const pick = document.querySelector(".locpick");
    if (pick) {
      const wrap = pick.closest(".visit");
      const iframe = wrap?.querySelector(".visit__map iframe") as HTMLIFrameElement | null;
      const btns = Array.from(pick.querySelectorAll(".locpick__btn"));
      btns.forEach((btn) => {
        on(btn, "click", () => {
          btns.forEach((b) => b.classList.remove("is-active"));
          btn.classList.add("is-active");
          const key = btn.getAttribute("data-loc") || "";
          wrap?.querySelectorAll("[data-loc-panel]").forEach((p) => {
            (p as HTMLElement).hidden = p.getAttribute("data-loc-panel") !== key;
          });
          if (iframe && VISIT_MAPS[key]) {
            iframe.src = "https://www.google.com/maps?q=" + encodeURIComponent(VISIT_MAPS[key]) + "&output=embed";
          }
        });
      });
    }

    // carousels
    document.querySelectorAll("[data-carousel]").forEach((grid) => {
      const scope = grid.closest("section") || document;
      const prev = scope.querySelector("[data-prev]");
      const next = scope.querySelector("[data-next]");
      if (!prev || !next) return;
      const step = () => {
        const c = grid.querySelector(":scope > *");
        return c ? (c as HTMLElement).getBoundingClientRect().width + 24 : 320;
      };
      on(prev, "click", () => grid.scrollBy({ left: -step(), behavior: "smooth" }));
      on(next, "click", () => grid.scrollBy({ left: step(), behavior: "smooth" }));
    });

    // meet-team bio modal
    const modal = document.getElementById("bioModal");
    if (modal) {
      const text = document.getElementById("bioModalText");
      const dialog = modal.querySelector(".bio-modal__dialog") as HTMLElement | null;
      const openModal = (card: Element) => {
        const full = card.querySelector(".tcard__full");
        if (!full || !text) return;
        const clone = full.cloneNode(true) as HTMLElement;
        clone.querySelector(".tcard__media-full")?.remove();
        text.innerHTML = clone.innerHTML;
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        if (dialog) dialog.scrollTop = 0;
      };
      const closeModal = () => {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
      };
      document.querySelectorAll(".tcard").forEach((card) => on(card, "click", () => openModal(card)));
      modal.querySelectorAll("[data-bio-close]").forEach((el) => on(el, "click", closeModal));
      on(document, "keydown", (e) => { if ((e as KeyboardEvent).key === "Escape" && modal.classList.contains("is-open")) closeModal(); });
    }

    // before/after treatment filter pills
    const pills = Array.from(document.querySelectorAll(".ba-pill"));
    if (pills.length) {
      const cases = Array.from(document.querySelectorAll(".ba-case"));
      pills.forEach((btn) => on(btn, "click", () => {
        pills.forEach((p) => p.classList.remove("is-active"));
        btn.classList.add("is-active");
        const f = btn.getAttribute("data-filter");
        cases.forEach((c) => c.classList.toggle("is-hidden", !(f === "all" || c.getAttribute("data-cat") === f)));
      }));
    }

    // video lightbox — click any .playbtn opens a popup that autoplays the video
    const playBtns = document.querySelectorAll(".playbtn");
    if (playBtns.length) {
      const VID = "/videos/orchard-hero-bg-video.mp4";
      const box = document.createElement("div");
      box.className = "vlightbox";
      box.innerHTML =
        '<div class="vlightbox__overlay" data-vclose></div>' +
        '<div class="vlightbox__inner">' +
        '<button class="vlightbox__close" data-vclose aria-label="Close">&times;</button>' +
        '<video class="vlightbox__video" controls playsinline></video>' +
        "</div>";
      document.body.appendChild(box);
      const video = box.querySelector("video") as HTMLVideoElement;
      const closeBox = () => {
        video.pause();
        video.removeAttribute("src");
        video.load();
        box.classList.remove("is-open");
        document.body.style.overflow = "";
      };
      const openBox = (src: string) => {
        video.src = src;
        box.classList.add("is-open");
        document.body.style.overflow = "hidden";
        const p = video.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
      };
      box.querySelectorAll("[data-vclose]").forEach((el) => on(el, "click", closeBox));
      on(document, "keydown", (e) => { if ((e as KeyboardEvent).key === "Escape") closeBox(); });
      playBtns.forEach((btn) => on(btn, "click", (e) => { e.preventDefault(); e.stopPropagation(); openBox(VID); }));
      cleanups.push(() => box.remove());
    }

    // ensure hero background video autoplays (muted)
    document.querySelectorAll<HTMLVideoElement>(".hero__bg video").forEach((v) => {
      v.muted = true;
      v.setAttribute("muted", "");
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    });

    // scroll reveal
    const els = Array.from(document.querySelectorAll(".reveal"));
    if (reduced || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("visible"));
    } else {
      const io = new IntersectionObserver(
        (entries) => entries.forEach((en) => {
          if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
        }),
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      els.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    return () => cleanups.forEach((fn) => fn());
    // re-bind after client-side navigation (layout persists across routes)
  }, [pathname]);

  return null;
}

/* ==========================================================================
   Orchard Orthodontics — shared interactivity (vanilla, no deps)
   ========================================================================== */
(function () {
  'use strict';
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    stickyHeader();
    desktopDropdowns();
    languageMenu();
    mobileMenu();
    faqAccordion();
    locationPicker();
    carousels();
    treatTabs();
    heroVideo();
    videoLightbox();
    scrollReveal();
  }

  /* ---- treatments tabs (switch heading/description + image) ---- */
  function treatTabs() {
    document.querySelectorAll('.treat').forEach(function (sec) {
      var tabs = sec.querySelectorAll('.treat__tab');
      var panels = sec.querySelectorAll('.treat__panel');
      var imgs = sec.querySelectorAll('.treat__img');
      tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
          var i = tab.getAttribute('data-tab');
          tabs.forEach(function (t) { t.classList.toggle('is-active', t === tab); });
          panels.forEach(function (p) { p.classList.toggle('is-active', p.getAttribute('data-panel') === i); });
          imgs.forEach(function (im) { im.classList.toggle('is-active', im.getAttribute('data-img') === i); });
        });
      });
    });
  }

  /* ---- video lightbox (click any .playbtn -> popup autoplay) ---- */
  function videoLightbox() {
    var playBtns = document.querySelectorAll('.playbtn');
    if (!playBtns.length) return;
    var VID = '/videos/orchard-hero-bg-video.mp4';
    var box = document.createElement('div');
    box.className = 'vlightbox';
    box.innerHTML = '<div class="vlightbox__overlay" data-vclose></div>' +
      '<div class="vlightbox__inner">' +
      '<button class="vlightbox__close" data-vclose aria-label="Close">&times;</button>' +
      '<video class="vlightbox__video" controls playsinline></video>' +
      '</div>';
    document.body.appendChild(box);
    var video = box.querySelector('video');
    function close() { video.pause(); video.removeAttribute('src'); video.load(); box.classList.remove('is-open'); document.body.style.overflow = ''; }
    function open(src) { video.src = src; box.classList.add('is-open'); document.body.style.overflow = 'hidden'; var p = video.play(); if (p && p.catch) p.catch(function () {}); }
    box.querySelectorAll('[data-vclose]').forEach(function (el) { el.addEventListener('click', close); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
    playBtns.forEach(function (btn) { btn.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); open(VID); }); });
  }

  /* ---- ensure hero background video autoplays (muted) ---- */
  function heroVideo() {
    document.querySelectorAll('.hero__bg video').forEach(function (v) {
      v.muted = true;
      v.setAttribute('muted', '');
      var p = v.play();
      if (p && typeof p.catch === 'function') p.catch(function () {});
    });
  }

  /* ---- carousels/sliders (pair each .nav-arrows with the grid before it) ---- */
  function carousels() {
    document.querySelectorAll('.nav-arrows').forEach(function (arrows) {
      var prev = arrows.querySelector('[data-prev]'), next = arrows.querySelector('[data-next]');
      if (!prev || !next) return;
      var scope = arrows.closest('section') || document;
      var grid = null;
      scope.querySelectorAll('[class*="grid"], .cards').forEach(function (g) {
        if (g.compareDocumentPosition(arrows) & Node.DOCUMENT_POSITION_FOLLOWING) grid = g;
      });
      if (!grid) return;
      grid.classList.add('is-slider');
      // duplicate items until there's at least one full item of scroll room, so the arrows always move
      var oneItem = function () { var c = grid.firstElementChild; return c ? c.getBoundingClientRect().width : 300; };
      var guard = 0;
      while (grid.scrollWidth - grid.clientWidth < oneItem() && grid.children.length && guard++ < 4) {
        Array.prototype.slice.call(grid.children).forEach(function (k) { grid.appendChild(k.cloneNode(true)); });
      }
      var step = function () { var c = grid.firstElementChild; return c ? c.getBoundingClientRect().width + 24 : 320; };
      prev.addEventListener('click', function () { grid.scrollBy({ left: -step(), behavior: 'smooth' }); });
      next.addEventListener('click', function () { grid.scrollBy({ left: step(), behavior: 'smooth' }); });
    });
  }

  /* ---- sticky header: solid after scroll ---- */
  function stickyHeader() {
    var header = document.querySelector('.site-header');
    if (!header) return; // toggle .scrolled on all pages (mobile hides top utility row on scroll)
    var onScroll = function () {
      header.classList.toggle('scrolled', window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---- desktop nav dropdowns (hover + click for touch/keyboard) ---- */
  function desktopDropdowns() {
    var items = document.querySelectorAll('.nav__item.has-dropdown');
    items.forEach(function (item) {
      var link = item.querySelector('.nav__link');
      if (!link) return;
      link.addEventListener('click', function (e) {
        if (item.querySelector('.dropdown')) {
          e.preventDefault();
          var open = item.classList.contains('is-open');
          closeAll(items);
          item.classList.toggle('is-open', !open);
        }
      });
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.nav__item')) closeAll(items);
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeAll(items); });
  }
  function closeAll(items) { items.forEach(function (i) { i.classList.remove('is-open'); }); }

  /* ---- language dropdown (topbar) ---- */
  function languageMenu() {
    var lm = document.querySelector('.langmenu');
    if (!lm) return;
    var toggle = lm.querySelector('.langmenu__toggle');
    toggle.addEventListener('click', function (e) { e.stopPropagation(); lm.classList.toggle('is-open'); });
    document.addEventListener('click', function () { lm.classList.remove('is-open'); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') lm.classList.remove('is-open'); });
  }

  /* ---- mobile menu overlay ---- */
  function mobileMenu() {
    var burger = document.querySelector('.burger');
    var menu = document.getElementById('mobile-menu');
    if (!burger || !menu) return;
    var open = function (state) {
      burger.classList.toggle('is-active', state);
      menu.classList.toggle('is-open', state);
      burger.setAttribute('aria-expanded', state ? 'true' : 'false');
      document.body.style.overflow = state ? 'hidden' : '';
    };
    burger.addEventListener('click', function () { open(!menu.classList.contains('is-open')); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') open(false); });
    // sub-accordions inside mobile menu
    menu.querySelectorAll('.mobile-menu__item.has-sub > .mobile-menu__link').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        a.parentElement.classList.toggle('is-open');
      });
    });
    // close when a real link is tapped
    menu.querySelectorAll('.mobile-menu__sub a, .mobile-menu__cta a').forEach(function (a) {
      a.addEventListener('click', function () { open(false); });
    });
  }

  /* ---- FAQ accordion ---- */
  function faqAccordion() {
    document.querySelectorAll('.faq__q').forEach(function (q) {
      q.addEventListener('click', function () {
        var item = q.closest('.faq__item');
        var a = item.querySelector('.faq__a');
        var isOpen = item.classList.toggle('is-open');
        q.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        a.style.maxHeight = isOpen ? a.scrollHeight + 'px' : 0;
      });
    });
  }

  /* ---- Visit Us location picker (switches address panel AND the map) ---- */
  var VISIT_MAPS = {
    croydon: '114-118 Cherry Orchard Road Croydon CR0 6BA',
    brixton: '8 Brixton Hill London SW2 1EG',
    guildford: 'Dental & Implant Centre 6 Faraday Road Guildford GU1 1EA'
  };
  function locationPicker() {
    var pick = document.querySelector('.locpick');
    if (!pick) return;
    var wrap = pick.closest('.visit');
    var iframe = wrap.querySelector('.visit__map iframe');
    var btns = pick.querySelectorAll('.locpick__btn');
    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        btns.forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        var key = btn.getAttribute('data-loc');
        wrap.querySelectorAll('[data-loc-panel]').forEach(function (p) {
          p.hidden = p.getAttribute('data-loc-panel') !== key;
        });
        if (iframe && VISIT_MAPS[key]) {
          iframe.src = 'https://www.google.com/maps?q=' + encodeURIComponent(VISIT_MAPS[key]) + '&output=embed';
        }
      });
    });
  }

  /* ---- scroll reveal ---- */
  function scrollReveal() {
    var els = document.querySelectorAll('.reveal');
    if (reduced || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (el) { io.observe(el); });
  }
})();

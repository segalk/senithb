// ---------- Footer year ----------
document.querySelectorAll('#year').forEach(function (el) {
  el.textContent = new Date().getFullYear();
});

// ---------- Theme toggle (dark by default) ----------
var themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  var setTheme = function (theme) {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    try { localStorage.setItem('theme', theme); } catch (e) {}
    themeToggle.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
    themeToggle.setAttribute('aria-label', theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme');
  };
  themeToggle.addEventListener('click', function () {
    var isLight = document.documentElement.getAttribute('data-theme') === 'light';
    setTheme(isLight ? 'dark' : 'light');
  });
  // Sync aria state with whatever the anti-flash inline script already applied.
  setTheme(document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark');
}

// ---------- Header scroll state ----------
var header = document.getElementById('siteHeader');
function updateHeaderState() {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 12);
}
updateHeaderState();
window.addEventListener('scroll', updateHeaderState, { passive: true });

// ---------- Mobile nav toggle ----------
var navToggle = document.getElementById('navToggle');
if (navToggle) {
  navToggle.addEventListener('click', function () {
    var isOpen = document.body.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  document.querySelectorAll('#navList a').forEach(function (link) {
    link.addEventListener('click', function () {
      document.body.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ---------- Sliding nav active-state indicator ----------
// A single shared bar positioned over whichever link is .active, so it
// eases smoothly between nav items instead of the old per-link underline
// jump-cutting. Runs on load/resize, and again whenever scroll-spy (below)
// changes which link is active.
var navIndicator = document.getElementById('navIndicator');
var updateNavIndicator = function () {
  if (!navIndicator) return;
  var activeLink = document.querySelector('#navList a.active');
  if (!activeLink || window.innerWidth <= 860) {
    navIndicator.style.opacity = '0';
    return;
  }
  var navRect = navIndicator.parentElement.getBoundingClientRect();
  var linkRect = activeLink.getBoundingClientRect();
  navIndicator.style.left = (linkRect.left - navRect.left) + 'px';
  navIndicator.style.width = linkRect.width + 'px';
  navIndicator.style.opacity = '1';
};
if (navIndicator) {
  updateNavIndicator();
  window.addEventListener('resize', updateNavIndicator, { passive: true });
  window.addEventListener('load', updateNavIndicator);
}

// ---------- Scroll-spy active nav link ----------
var sections = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));
// The Contact CTA is excluded: it points at #contact like any other link, but
// it's a pill button, and letting scroll-spy mark it .active would slide the
// nav underline indicator underneath it.
var navLinks = Array.prototype.slice.call(document.querySelectorAll('#navList a:not(.nav-cta)'));
if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var id = entry.target.getAttribute('id');
      navLinks.forEach(function (link) {
        link.classList.toggle('active', link.getAttribute('href') === '#' + id);
      });
      updateNavIndicator();
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
  sections.forEach(function (section) { spy.observe(section); });
}

// ---------- Work filters ----------
// ---------- Work grid order ----------
// The grid's order is declared per card with data-order rather than by where the
// card happens to sit in index.html, so a card added later lands where it is
// meant to instead of wherever it was pasted. Source order is kept in sync, so
// this is a guard rather than the mechanism -- with JavaScript off the markup is
// already right. Runs before the scroll-reveal setup further down, which numbers
// the stagger by DOM position and would otherwise cascade in the old order.
var workGrid = document.getElementById('workGrid');
if (workGrid) {
  Array.prototype.slice.call(workGrid.children)
    .sort(function (a, b) {
      return (+a.getAttribute('data-order') || 0) - (+b.getAttribute('data-order') || 0);
    })
    .forEach(function (card) { workGrid.appendChild(card); });
}

var filterButtons = Array.prototype.slice.call(document.querySelectorAll('.filter-btn'));
var workCards = Array.prototype.slice.call(document.querySelectorAll('.work-card'));
if (filterButtons.length && workCards.length) {
  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterButtons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.getAttribute('data-filter');
      workCards.forEach(function (card) {
        var show = filter === 'all' || card.getAttribute('data-category') === filter;
        card.classList.toggle('hidden', !show);
      });
    });
  });
}

// ---------- UX Evangelizing carousel ----------
var evangelizingSlides = Array.prototype.slice.call(document.querySelectorAll('.evangelizing-slide'));
var evangelizingDotsWrap = document.getElementById('evangelizingDots');
if (evangelizingSlides.length && evangelizingDotsWrap) {
  var slideIndex = 0;
  evangelizingSlides.forEach(function (_, i) {
    var dot = document.createElement('button');
    if (i === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', 'Show slide ' + (i + 1));
    dot.addEventListener('click', function () { showSlide(i); });
    evangelizingDotsWrap.appendChild(dot);
  });
  var evangelizingDots = Array.prototype.slice.call(evangelizingDotsWrap.children);

  function showSlide(i) {
    slideIndex = i;
    evangelizingSlides.forEach(function (slide, idx) { slide.classList.toggle('active', idx === i); });
    evangelizingDots.forEach(function (dot, idx) { dot.classList.toggle('active', idx === i); });
  }

  var evangelizingPrev = document.getElementById('evangelizingPrev');
  var evangelizingNext = document.getElementById('evangelizingNext');
  if (evangelizingPrev) {
    evangelizingPrev.addEventListener('click', function () {
      showSlide((slideIndex - 1 + evangelizingSlides.length) % evangelizingSlides.length);
    });
  }
  if (evangelizingNext) {
    evangelizingNext.addEventListener('click', function () {
      showSlide((slideIndex + 1) % evangelizingSlides.length);
    });
  }

  setInterval(function () {
    showSlide((slideIndex + 1) % evangelizingSlides.length);
  }, 6000);
}

// ---------- Scroll reveal (staggered cascade) ----------
// Content is visible by default (see .reveal in style.css); we only arm the
// hide-until-revealed behavior once we know IntersectionObserver exists and
// the visitor hasn't asked for reduced motion, so nothing ever depends on
// this script to become visible.
var revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (revealEls.length && 'IntersectionObserver' in window && !prefersReducedMotion) {
  document.querySelectorAll('[data-reveal-group]').forEach(function (group) {
    Array.prototype.slice.call(group.querySelectorAll('.reveal')).forEach(function (el, i) {
      el.style.setProperty('--reveal-i', i);
    });
  });

  document.body.classList.add('reveal-armed');

  var reveal = function (el) {
    el.classList.add('in-view');
  };

  // threshold MUST be 0. A fractional threshold asks for a share of the
  // element's AREA to be on screen, which an element taller than the viewport
  // can never supply: .project-content is ~5400px on a 390px-wide phone, so at
  // a 0.15 threshold its best possible ratio is 0.145 and the callback never
  // fired -- the entire case-study body stayed at opacity 0 on mobile while
  // being fine on desktop, where the taller viewport cleared the same bar.
  // Zero-height elements had the same problem. With threshold 0 any overlap
  // counts, so the trigger no longer depends on how tall the element is; the
  // negative rootMargin is what keeps the "reveals as it comes up" feel.
  var revealObserver = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        reveal(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0, rootMargin: '0px 0px -12% 0px' });
  revealEls.forEach(function (el) { revealObserver.observe(el); });

  // Failsafe. A decorative animation should never be the only thing between a
  // reader and the content, so anything that has been scrolled to but is still
  // hidden gets shown regardless of what the observer did. Runs once images
  // have settled (late loads shift layout on slow mobile connections) and
  // again shortly after.
  var sweep = function () {
    document.querySelectorAll('.reveal:not(.in-view)').forEach(function (el) {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        reveal(el);
        revealObserver.unobserve(el);
      }
    });
  };
  // Deliberately not on scroll: that would force a layout every frame on the
  // very devices this is meant to help, and the observer stays subscribed
  // until it fires, so it already covers anything that shifts later.
  window.addEventListener('load', sweep);
  setTimeout(sweep, 3000);
}

// ---------- Hero typewriter ----------
// Types out each headline character by character, pauses, deletes it, and
// moves to the next — looping forever. Screen readers get a static
// sr-only sentence instead (see index.html); the animated span is
// aria-hidden so AT users aren't read constantly-mutating text.
var heroTypewriterEl = document.getElementById('heroTypewriter');
var heroCursorEl = document.getElementById('heroCursor');
if (heroTypewriterEl && heroCursorEl) {
  var heroSentences = [
    { text: 'Making complex systems feel obvious.', accent: 'feel' },
    { text: 'Building design systems that let good ideas scale.', accent: 'scale' },
    { text: "Logos that carry a brand's whole story in one mark.", accent: 'story' }
  ];

  if (prefersReducedMotion) {
    // No animation: show the first headline as static text.
    heroTypewriterEl.innerHTML = heroSentences[0].text.replace(
      heroSentences[0].accent,
      '<span class="accent">' + heroSentences[0].accent + '</span>'
    );
  } else {
    var HERO_TYPE_SPEED = 55;
    var HERO_DELETE_SPEED = 30;
    var HERO_PAUSE_AFTER_TYPE = 1800;
    var HERO_PAUSE_AFTER_DELETE = 400;

    var heroSentenceIndex = 0;
    var heroCharIndex = 0;
    var heroIsDeleting = false;

    var heroEscapeDiv = document.createElement('div');
    function heroEscapeHtml(str) {
      heroEscapeDiv.textContent = str;
      return heroEscapeDiv.innerHTML;
    }

    function heroRenderRevealed(fullText, revealLength, accentWord) {
      var revealed = fullText.slice(0, revealLength);
      var accentStart = fullText.indexOf(accentWord);
      var accentEnd = accentStart + accentWord.length;

      if (accentStart === -1 || revealLength <= accentStart) {
        return heroEscapeHtml(revealed);
      }

      var before = revealed.slice(0, accentStart);
      var accentPart = revealed.slice(accentStart, Math.min(revealLength, accentEnd));
      var after = revealed.slice(accentEnd);

      return heroEscapeHtml(before) +
        '<span class="accent">' + heroEscapeHtml(accentPart) + '</span>' +
        heroEscapeHtml(after);
    }

    function heroTick() {
      var current = heroSentences[heroSentenceIndex];
      var fullText = current.text;

      heroTypewriterEl.innerHTML = heroRenderRevealed(fullText, heroCharIndex, current.accent);

      var delay;

      if (!heroIsDeleting) {
        heroCursorEl.classList.add('typing');
        heroCharIndex++;
        delay = HERO_TYPE_SPEED;

        if (heroCharIndex > fullText.length) {
          heroCharIndex = fullText.length;
          heroIsDeleting = true;
          heroCursorEl.classList.remove('typing');
          delay = HERO_PAUSE_AFTER_TYPE;
        }
      } else {
        heroCursorEl.classList.add('typing');
        heroCharIndex--;
        delay = HERO_DELETE_SPEED;

        if (heroCharIndex < 0) {
          heroCharIndex = 0;
          heroIsDeleting = false;
          heroSentenceIndex = (heroSentenceIndex + 1) % heroSentences.length;
          heroCursorEl.classList.remove('typing');
          delay = HERO_PAUSE_AFTER_DELETE;
        }
      }

      setTimeout(heroTick, delay);
    }

    heroTick();
  }
}

// ---------- Hero CTA: smooth-scroll to Work ----------
// (The scroll-cue chevron below the CTA is decorative only — a visual
// "more below" indicator, not a second clickable path — so it has no
// handler here.)
var workSection = document.getElementById('work');
var heroCta = document.getElementById('heroCta');
if (workSection && heroCta) {
  heroCta.addEventListener('click', function (e) {
    e.preventDefault();
    workSection.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
  });
}

// ---------- Image lightbox ----------
// Opens a full-size view for any ".lightbox-trigger" (gallery thumbnails,
// inline diagram figures). Closes via the (X) button, a backdrop click, or
// Escape, and returns focus to the element that opened it.
var lightbox = document.getElementById('lightbox');
if (lightbox) {
  var lightboxContent = lightbox.querySelector('.lightbox-content');
  var lightboxImage = document.getElementById('lightboxImage');
  var lightboxCaption = document.getElementById('lightboxCaption');
  var lightboxClose = document.getElementById('lightboxClose');
  var lightboxLastTrigger = null;

  function onLightboxKeydown(e) {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'Tab') {
      // The close button is the only focusable element in the dialog while
      // it's open, so keep focus trapped there instead of tabbing out to
      // the page underneath.
      e.preventDefault();
      lightboxClose.focus();
    }
  }

  // Two rAFs, not one: a single rAF can land in the same paint as the
  // hidden -> visible change, so the browser jumps straight to the end
  // state instead of animating from it. Waiting a full extra frame
  // guarantees the start state has actually been painted first.
  function nextFrame(fn) {
    requestAnimationFrame(function () {
      requestAnimationFrame(fn);
    });
  }

  function openLightbox(trigger) {
    var src = trigger.dataset.lightboxSrc;
    if (!src) return;
    lightboxLastTrigger = trigger;
    lightboxImage.alt = trigger.dataset.lightboxAlt || '';
    if (trigger.dataset.lightboxCaption) {
      lightboxCaption.textContent = trigger.dataset.lightboxCaption;
      lightboxCaption.hidden = false;
    } else {
      lightboxCaption.textContent = '';
      lightboxCaption.hidden = true;
    }

    lightbox.hidden = false;
    document.body.classList.add('lightbox-open');
    document.addEventListener('keydown', onLightboxKeydown);

    // The backdrop dims in right away so the click feels instant. The
    // content (image + caption + close button) is held at opacity 0 until
    // the image has actually finished loading — see the onload handler
    // below — so it always fades/scales in already at its real size
    // instead of appearing small/wrong-sized and snapping once the image
    // data arrives. That size-snap was the source of the visible jerk.
    nextFrame(function () {
      lightbox.classList.add('is-open');
    });

    lightboxContent.classList.remove('is-ready');
    lightboxImage.onload = lightboxImage.onerror = function () {
      lightboxImage.onload = lightboxImage.onerror = null;
      nextFrame(function () {
        lightboxContent.classList.add('is-ready');
        lightboxClose.focus();
      });
    };
    lightboxImage.src = src;
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightboxContent.classList.remove('is-ready');
    document.body.classList.remove('lightbox-open');
    document.removeEventListener('keydown', onLightboxKeydown);
    lightboxImage.onload = lightboxImage.onerror = null;
    window.setTimeout(function () {
      lightbox.hidden = true;
      lightboxImage.src = '';
    }, prefersReducedMotion ? 0 : 250);
    if (lightboxLastTrigger) {
      lightboxLastTrigger.focus();
      lightboxLastTrigger = null;
    }
  }

  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('.lightbox-trigger');
    if (trigger) {
      e.preventDefault();
      openLightbox(trigger);
      return;
    }
    if (e.target.closest('[data-lightbox-close]')) closeLightbox();
  });

  lightboxClose.addEventListener('click', closeLightbox);
}

// ---------- Tech marquee: keep the track wider than the viewport ----------
// The marquee scrolls the track left by exactly one set, then restarts. That
// restart is only invisible while the content still reaches the right edge at
// the moment it happens — i.e. while (copies - 1) x setWidth >= viewportWidth.
// Two copies are hard-coded in the HTML, which covers a viewport up to one set
// wide (~1362px). Anything wider and a blank strip opens up at the right edge
// for the tail of each cycle, then snaps back full on restart.
//
// So: measure one set, clone until there is enough track to cover the viewport,
// and pin the animation distance to that measured width rather than a
// percentage of a track whose size now varies.
(function () {
  var track = document.querySelector('.tech-marquee-track');
  if (!track) return;
  var viewport = track.parentElement;
  var template = track.querySelector('.tech-marquee-set');
  if (!template) return;

  function fit() {
    var setWidth = template.getBoundingClientRect().width;
    var viewportWidth = viewport.getBoundingClientRect().width;
    if (!setWidth || !viewportWidth) return;

    // +1 for the copy that scrolls away during the cycle, +1 more as slack so
    // the seam is never exactly on the edge at fractional zoom levels.
    var needed = Math.max(2, Math.ceil(viewportWidth / setWidth) + 2);
    // Only ever add. Removing copies mid-animation would visibly re-jig the
    // row, and a few extra spans cost nothing.
    for (var i = track.children.length; i < needed; i++) {
      track.appendChild(template.cloneNode(true));
    }
    track.style.setProperty('--marquee-shift', setWidth + 'px');
  }

  // Inter loads with display=swap, so a set's width changes when the real face
  // arrives. Measuring before that pins the shift to the fallback font's
  // metrics and the loop lands slightly off.
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(fit);
  }
  fit();

  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(fit, 150);
  }, { passive: true });
})();

// ---------- Hero dot mesh ----------
// A faint grid of dots behind the hero; dots near the pointer swell with
// distance falloff and ease back when it leaves.
//
// Cost control: only dots inside the pointer's influence box are ever touched,
// and each is repainted through its own small clearRect rather than redrawing
// the whole canvas. Two sets are tracked — `elevated` (dots currently above
// base, so they can be released when the pointer moves on) and `dirty` (dots
// still easing, so still needing paint). Splitting them lets the rAF loop stop
// once everything settles, including while the pointer sits still.
(function () {
  var canvas = document.getElementById('dotMesh');
  var host = canvas && canvas.parentElement;
  if (!canvas || !host || !canvas.getContext) return;
  var ctx = canvas.getContext('2d');

  var SPACING = 26;    // px between dots
  var BASE_R = 1.0;    // resting radius
  var MAX_R = 3.2;     // radius directly under the pointer
  var RADIUS = 120;    // influence radius
  var EASE = 0.16;     // per-frame approach to target
  var SETTLE = 0.008;  // below this delta a dot counts as at rest

  var dpr = 1, W = 0, H = 0, cols = 0, rows = 0, ox = 0, oy = 0;
  var dots = [], dirty = new Set(), elevated = new Set();
  var px = -1e5, py = -1e5, raf = 0;
  var rgb = '245,245,245', aLo = 0.075, aHi = 0.42;

  // Hover has no meaning on touch, and reduced motion opts out of the
  // interaction entirely — the static mesh still renders in both cases.
  function interactive() {
    return !prefersReducedMotion &&
      !(window.matchMedia && window.matchMedia('(pointer: coarse)').matches);
  }

  function readPalette() {
    var cs = getComputedStyle(document.documentElement);
    rgb = (cs.getPropertyValue('--dot-rgb') || '245,245,245').trim();
    aLo = parseFloat(cs.getPropertyValue('--dot-alpha')) || 0.075;
    aHi = parseFloat(cs.getPropertyValue('--dot-alpha-hi')) || 0.42;
  }

  function paint(d) {
    var k = (d.r - BASE_R) / (MAX_R - BASE_R);
    ctx.fillStyle = 'rgba(' + rgb + ',' + (aLo + (aHi - aLo) * k) + ')';
    ctx.beginPath();
    ctx.arc(d.x, d.y, d.r, 0, 6.2832);
    ctx.fill();
  }

  function redrawAll() {
    ctx.clearRect(0, 0, W, H);
    for (var i = 0; i < dots.length; i++) paint(dots[i]);
  }

  function build() {
    var rect = host.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = Math.round(rect.width);
    H = Math.round(rect.height);
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    cols = Math.floor(W / SPACING) + 1;
    rows = Math.floor(H / SPACING) + 1;
    ox = (W - (cols - 1) * SPACING) / 2;
    oy = (H - (rows - 1) * SPACING) / 2;

    dots = new Array(cols * rows);
    for (var j = 0, i = 0; j < rows; j++) {
      for (var c = 0; c < cols; c++, i++) {
        dots[i] = { x: ox + c * SPACING, y: oy + j * SPACING, r: BASE_R, t: BASE_R };
      }
    }
    dirty.clear();
    elevated.clear();
    readPalette();
    redrawAll();
  }

  function mark() {
    elevated.forEach(function (d) { d.t = BASE_R; dirty.add(d); });
    elevated.clear();
    if (px < -1e4) return;
    var c0 = Math.max(0, Math.floor((px - RADIUS - ox) / SPACING));
    var c1 = Math.min(cols - 1, Math.ceil((px + RADIUS - ox) / SPACING));
    var r0 = Math.max(0, Math.floor((py - RADIUS - oy) / SPACING));
    var r1 = Math.min(rows - 1, Math.ceil((py + RADIUS - oy) / SPACING));
    for (var j = r0; j <= r1; j++) {
      for (var c = c0; c <= c1; c++) {
        var d = dots[j * cols + c];
        if (!d) continue;
        var dx = d.x - px, dy = d.y - py, d2 = dx * dx + dy * dy;
        if (d2 > RADIUS * RADIUS) continue;
        var f = 1 - Math.sqrt(d2) / RADIUS;
        f = f * f * (3 - 2 * f); // smoothstep, so the cluster has no hard edge
        d.t = BASE_R + (MAX_R - BASE_R) * f;
        elevated.add(d);
        if (d.r !== d.t) dirty.add(d);
      }
    }
  }

  function frame() {
    var pad = MAX_R + 1.5, box = pad * 2, settled = [];
    dirty.forEach(function (d) {
      d.r += (d.t - d.r) * EASE;
      if (Math.abs(d.t - d.r) < SETTLE) { d.r = d.t; settled.push(d); }
      ctx.clearRect(d.x - pad, d.y - pad, box, box);
      paint(d);
    });
    for (var i = 0; i < settled.length; i++) dirty.delete(settled[i]);
    raf = dirty.size ? requestAnimationFrame(frame) : 0;
  }

  function kick() { if (!raf) raf = requestAnimationFrame(frame); }

  host.addEventListener('pointermove', function (e) {
    if (!interactive()) return;
    var r = host.getBoundingClientRect();
    px = e.clientX - r.left;
    py = e.clientY - r.top;
    mark();
    kick();
  }, { passive: true });

  host.addEventListener('pointerleave', function () {
    px = py = -1e5;
    mark();
    kick();
  }, { passive: true });

  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(build, 150);
  }, { passive: true });

  // The theme toggle swaps the palette tokens, so the mesh has to repaint.
  var themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      setTimeout(function () { readPalette(); redrawAll(); }, 0);
    });
  }

  build();
  // Inter loads with display=swap; a late font swap can reflow the hero and
  // change its height, so re-measure once it settles.
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(build);
})();


// ---------- Contact form (Formspree) ----------
// Submits over fetch so the visitor never leaves the page, and reports the
// outcome in a modal. The <form action> is a real Formspree endpoint, so with
// JavaScript off the browser posts normally and Formspree renders its own
// confirmation page instead.
var contactForm = document.getElementById('contactForm');
if (contactForm) {
  var submitBtn = document.getElementById('submitBtn');
  var submitLabel = document.getElementById('submitLabel');
  var sentModal = document.getElementById('sentModal');
  var failModal = document.getElementById('failModal');
  var failReason = document.getElementById('failReason');
  var echoEmail = document.getElementById('echoEmail');
  var mailtoFallback = document.getElementById('mailtoFallback');
  var contactFields = ['name', 'email', 'subject', 'message'];
  var modalOpener = null;

  var val = function (id) {
    var el = document.getElementById(id);
    return el ? el.value.trim() : '';
  };

  function openModal(dialog) {
    document.body.classList.add('modal-open');
    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
    } else {
      // No <dialog> support: fall back to a plain visible block rather than
      // leaving the visitor with no confirmation at all.
      dialog.setAttribute('open', '');
    }
  }

  // Runs for every route out of the dialog -- close button, backdrop, and the
  // Escape key, which fires 'close' natively without going through our code.
  function afterClose() {
    document.body.classList.remove('modal-open');
    // Focus can't go back to whatever was focused when the dialog opened: the
    // submit button was disabled mid-send, which drops focus to <body>. Send
    // it to the button itself so the keyboard lands back on the form.
    var target = (modalOpener && modalOpener.isConnected && !modalOpener.disabled)
      ? modalOpener : submitBtn;
    if (target && target.focus) target.focus();
  }

  function closeModal(dialog) {
    if (typeof dialog.close === 'function') dialog.close();  // fires 'close'
    else { dialog.removeAttribute('open'); afterClose(); }
  }

  [sentModal, failModal].forEach(function (dialog) {
    if (!dialog) return;
    dialog.querySelectorAll('[data-close]').forEach(function (btn) {
      btn.addEventListener('click', function () { closeModal(dialog); });
    });
    // A modal dialog's ::backdrop routes its clicks to the dialog element, so
    // a click whose target is the dialog rather than .modal-inner is a
    // backdrop hit. This only works while the dialog is actually centred --
    // see the margin note in the stylesheet.
    dialog.addEventListener('click', function (e) {
      if (e.target === dialog) closeModal(dialog);
    });
    dialog.addEventListener('close', afterClose);
  });

  // Hands back everything they typed, already in their mail client, so a
  // failed send is recoverable rather than lost work.
  function buildMailto() {
    if (!mailtoFallback) return;
    var body = 'Name: ' + val('c-name');
    if (val('c-topic')) body += '\nTopic: ' + val('c-topic');
    body += '\n\n' + val('c-message');
    mailtoFallback.href = 'mailto:senithb.41@gmail.com'
      + '?subject=' + encodeURIComponent(val('c-subject') || 'Website enquiry')
      + '&body=' + encodeURIComponent(body);
  }

  function setBusy(busy) {
    submitBtn.disabled = busy;
    submitBtn.setAttribute('aria-busy', String(busy));
    submitLabel.textContent = busy ? 'Sending\u2026' : 'Send message';
    var spinner = submitBtn.querySelector('.spinner');
    if (busy && !spinner) {
      var s = document.createElement('span');
      s.className = 'spinner';
      submitBtn.insertBefore(s, submitLabel);
    } else if (!busy && spinner) {
      spinner.remove();
    }
  }

  function markField(id, bad) {
    document.getElementById('f-' + id).classList.toggle('has-error', bad);
    document.getElementById('c-' + id).setAttribute('aria-invalid', String(bad));
  }

  // Validate on blur, not on every keystroke: flagging a half-typed address
  // as wrong is just noise.
  contactFields.forEach(function (f) {
    var el = document.getElementById('c-' + f);
    el.addEventListener('blur', function () { markField(f, !el.checkValidity()); });
  });

  function fail(message) {
    if (failReason && message) failReason.textContent = message;
    buildMailto();
    openModal(failModal);
  }

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // Captured before setBusy() disables the button and focus falls to <body>.
    modalOpener = submitBtn;

    var firstBad = null;
    contactFields.forEach(function (f) {
      var el = document.getElementById('c-' + f);
      var bad = !el.checkValidity();
      markField(f, bad);
      if (bad && !firstBad) firstBad = el;
    });
    if (firstBad) { firstBad.focus(); return; }

    // Regression net. The endpoint is configured, but if it is ever reset to
    // the placeholder, an honest failure with a working mailto beats posting
    // messages into the void.
    if (contactForm.action.indexOf('YOUR_FORM_ID') !== -1) {
      fail('The contact form isn\u2019t connected yet. Please email me directly \u2014 the link below is already filled in.');
      return;
    }

    setBusy(true);
    fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm),
      headers: { Accept: 'application/json' }
    }).then(function (res) {
      if (res.ok) {
        if (echoEmail) echoEmail.textContent = val('c-email') || 'your inbox';
        openModal(sentModal);
        contactForm.reset();
        contactFields.forEach(function (f) { markField(f, false); });
        return;
      }
      return res.json().then(function (data) {
        var msg = data && data.errors && data.errors.length
          ? data.errors.map(function (x) { return x.message; }).join(' ')
          : null;
        fail(msg);
      }, function () { fail(null); });
    }).catch(function () {
      // Offline, DNS, blocked request — anything that never reached Formspree.
      fail('I couldn\u2019t reach the server. Check your connection, or email me directly \u2014 the link below is already filled in.');
    }).then(function () {
      setBusy(false);
    });
  });
}

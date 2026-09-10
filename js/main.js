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
var navLinks = Array.prototype.slice.call(document.querySelectorAll('#navList a'));
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

  var revealObserver = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
  revealEls.forEach(function (el) { revealObserver.observe(el); });
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

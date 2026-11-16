/**
 * GlobeHire – Core UI, Theme, Navigation, Animations & Interactions
 */
(function () {
  'use strict';

  // 1. Theme Management
  const THEME_KEY = 'globehire_theme';

  function getPreferredTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  function applyTheme(theme) {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem(THEME_KEY, theme);
    updateThemeIcons(theme);
  }

  function updateThemeIcons(theme) {
    document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
      const sunIcon = btn.querySelector('.icon-sun');
      const moonIcon = btn.querySelector('.icon-moon');
      if (sunIcon && moonIcon) {
        if (theme === 'dark') {
          sunIcon.classList.remove('hidden');
          moonIcon.classList.add('hidden');
        } else {
          sunIcon.classList.add('hidden');
          moonIcon.classList.remove('hidden');
        }
      }
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    });
  }

  function initTheme() {
    applyTheme(getPreferredTheme());
    document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
        applyTheme(current === 'dark' ? 'light' : 'dark');
      });
    });
  }

  // 2. Active Navigation Link Highlighting
  function initActiveNav() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('a[data-nav-link]').forEach((link) => {
      const href = link.getAttribute('href');
      if (href === path || (path === '' && href === 'index.html')) {
        link.classList.add('text-royal-600', 'dark:text-gold-400', 'font-semibold');
        link.classList.remove('text-slate-700', 'dark:text-slate-200');
      }
    });
  }

  // 3. Sticky Header Scroll Elevation
  function initStickyHeader() {
    const header = document.getElementById('site-header');
    if (!header) return;
    const onScroll = () => {
      if (window.scrollY > 24) {
        header.classList.add('shadow-glass', 'border-slate-200/80', 'dark:border-white/10');
      } else {
        header.classList.remove('shadow-glass');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // 4. Mobile Hamburger Drawer
  function initMobileMenu() {
    const openBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('mobile-menu-close');
    const drawer = document.getElementById('mobile-menu-drawer');
    const backdrop = document.getElementById('mobile-menu-backdrop');
    if (!openBtn || !drawer) return;

    function openMenu() {
      drawer.classList.remove('translate-x-full');
      if (backdrop) backdrop.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      openBtn.setAttribute('aria-expanded', 'true');
    }

    function closeMenu() {
      drawer.classList.add('translate-x-full');
      if (backdrop) backdrop.classList.add('hidden');
      document.body.style.overflow = '';
      openBtn.setAttribute('aria-expanded', 'false');
    }

    openBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (backdrop) backdrop.addEventListener('click', closeMenu);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
  }

  // 5. AOS Scroll Animation Initialization
  function initAOS() {
    if (window.AOS) {
      window.AOS.init({
        duration: 750,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
      });
    }
  }

  // 6. Animated Counters
  function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    const animateCounter = (el) => {
      if (el.dataset.counted === 'true') return;
      el.dataset.counted = 'true';
      const target = parseFloat(el.dataset.counter);
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      const decimals = (el.dataset.counter.split('.')[1] || '').length;
      const duration = 1800;
      const startTime = performance.now();

      function step(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = target * eased;
        el.textContent =
          prefix +
          (decimals > 0 ? current.toFixed(decimals) : Math.floor(current).toLocaleString()) +
          suffix;
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent =
            prefix +
            (decimals > 0 ? target.toFixed(decimals) : target.toLocaleString()) +
            suffix;
        }
      }
      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    counters.forEach((counter) => observer.observe(counter));
  }

  // 7. Subtle Parallax Background Effect
  function initParallax() {
    const elements = document.querySelectorAll('[data-parallax]');
    if (!elements.length) return;

    const onScroll = () => {
      const scrollY = window.scrollY;
      elements.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax) || 0.15;
        const rect = el.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          const offset = (rect.top - window.innerHeight / 2) * speed;
          el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0) scale(1.06)`;
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // 8. Testimonial Slider (Home 1)
  function initTestimonialSlider() {
    const slider = document.getElementById('testimonial-slider');
    if (!slider) return;
    const slides = slider.querySelectorAll('[data-slide]');
    const dots = document.querySelectorAll('[data-slide-dot]');
    const prevBtn = document.getElementById('testimonial-prev');
    const nextBtn = document.getElementById('testimonial-next');
    if (!slides.length) return;

    let current = 0;
    let timer = null;

    function showSlide(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => {
        if (i === current) {
          slide.classList.remove('hidden', 'opacity-0', 'translate-x-4');
          slide.classList.add('opacity-100', 'translate-x-0');
        } else {
          slide.classList.add('hidden', 'opacity-0', 'translate-x-4');
          slide.classList.remove('opacity-100', 'translate-x-0');
        }
      });
      dots.forEach((dot, i) => {
        if (i === current) {
          dot.classList.add('bg-gold-500', 'w-8');
          dot.classList.remove('bg-slate-300', 'dark:bg-slate-700', 'w-2.5');
        } else {
          dot.classList.remove('bg-gold-500', 'w-8');
          dot.classList.add('bg-slate-300', 'dark:bg-slate-700', 'w-2.5');
        }
      });
    }

    function startAuto() {
      stopAuto();
      timer = setInterval(() => showSlide(current + 1), 6500);
    }

    function stopAuto() {
      if (timer) clearInterval(timer);
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        showSlide(current - 1);
        startAuto();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        showSlide(current + 1);
        startAuto();
      });
    }
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        showSlide(i);
        startAuto();
      });
    });

    showSlide(0);
    startAuto();
  }

  // 9. Back to Top Button
  function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 10. Footer Newsletter Form
  function initNewsletterForm() {
    const form = document.getElementById('footer-newsletter-form');
    if (!form) return;
    const input = form.querySelector('input[type="email"]');
    const msg = document.getElementById('footer-newsletter-msg');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = (input.value || '').trim();
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
      if (!valid) {
        if (msg) {
          msg.textContent = 'Please enter a valid email address.';
          msg.className = 'mt-2 text-xs text-rose-400';
        }
        return;
      }
      if (msg) {
        msg.textContent = 'Subscribed! Global job alerts will be sent to your inbox (Demo).';
        msg.className = 'mt-2 text-xs text-emerald-400';
      }
      input.value = '';
    });
  }

  // 11. Global Image Fallback Handling
  function initImageFallbacks() {
    const applyFallback = (img) => {
      if (img.dataset.fallbackApplied === 'true') return;
      img.dataset.fallbackApplied = 'true';
      const label = (img.getAttribute('alt') || 'GlobeHire Global Careers').slice(0, 42);
      const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
          <defs>
            <linearGradient id="fb" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#0A1128"/>
              <stop offset="55%" stop-color="#3B1D82"/>
              <stop offset="100%" stop-color="#5B21B6"/>
            </linearGradient>
          </defs>
          <rect width="800" height="500" fill="url(#fb)"/>
          <circle cx="400" cy="210" r="64" fill="none" stroke="#D4AF37" stroke-width="2.5" stroke-opacity="0.7"/>
          <ellipse cx="400" cy="210" rx="32" ry="64" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-opacity="0.35"/>
          <line x1="336" y1="210" x2="464" y2="210" stroke="#FFFFFF" stroke-width="1.5" stroke-opacity="0.35"/>
          <text x="400" y="318" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="22" font-weight="600">${label.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</text>
          <text x="400" y="348" text-anchor="middle" fill="#D4AF37" font-family="sans-serif" font-size="14" letter-spacing="2">GLOBEHIRE INTERNATIONAL</text>
        </svg>
      `.trim();
      img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
    };

    document.querySelectorAll('img').forEach((img) => {
      img.addEventListener('error', () => applyFallback(img));
      if (img.complete && img.naturalWidth === 0 && img.src) {
        applyFallback(img);
      }
    });
  }

  // 12. Home 1 Hero Search Redirect
  function initHomeHeroSearch() {
    const form = document.getElementById('hero-job-search-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const role = encodeURIComponent((document.getElementById('hero-role')?.value || '').trim());
      const country = encodeURIComponent(document.getElementById('hero-country')?.value || '');
      const category = encodeURIComponent(document.getElementById('hero-category')?.value || '');
      const params = new URLSearchParams();
      if (role) params.set('q', decodeURIComponent(role));
      if (country) params.set('country', decodeURIComponent(country));
      if (category) params.set('industry', decodeURIComponent(category));
      const qs = params.toString();
      window.location.href = 'jobs.html' + (qs ? '?' + qs : '#listings');
    });
  }

  // 1b. RTL / LTR Direction Management
  const DIR_KEY = 'globehire_dir';

  function getPreferredDir() {
    const saved = localStorage.getItem(DIR_KEY);
    return saved === 'rtl' ? 'rtl' : 'ltr';
  }

  function applyDirection(dir) {
    document.documentElement.setAttribute('dir', dir);
    localStorage.setItem(DIR_KEY, dir);
    document.querySelectorAll('[data-dir-toggle]').forEach((btn) => {
      const isRtl = dir === 'rtl';
      btn.setAttribute('aria-pressed', isRtl ? 'true' : 'false');
      btn.setAttribute('aria-label', isRtl ? 'Switch to LTR layout' : 'Switch to RTL layout');
      btn.setAttribute('title', isRtl ? 'Switch to LTR' : 'Switch to RTL');
      btn.classList.toggle('ring-2', isRtl);
      btn.classList.toggle('ring-royal-500', isRtl);
      btn.classList.toggle('dark:ring-gold-400', isRtl);
      const icon = btn.querySelector('.dir-arrows-icon');
      if (icon) {
        icon.classList.toggle('text-royal-600', isRtl);
        icon.classList.toggle('dark:text-gold-400', isRtl);
      }
    });
  }

  function initDirection() {
    applyDirection(getPreferredDir());
    document.querySelectorAll('[data-dir-toggle]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('dir') === 'rtl' ? 'rtl' : 'ltr';
        applyDirection(current === 'rtl' ? 'ltr' : 'rtl');
      });
    });
  }

  // Boot
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initDirection();
    initActiveNav();
    initStickyHeader();
    initMobileMenu();
    initAOS();
    initCounters();
    initParallax();
    initTestimonialSlider();
    initBackToTop();
    initNewsletterForm();
    initImageFallbacks();
    initHomeHeroSearch();
  });
})();


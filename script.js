'use strict';

// ===================================
// Mobile navigation toggle
// ===================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close mobile nav when any link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close mobile nav on outside click
  document.addEventListener('click', e => {
    if (navLinks.classList.contains('open') &&
        !navLinks.contains(e.target) &&
        !navToggle.contains(e.target)) {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// ===================================
// Nav shadow on scroll
// ===================================
const nav = document.getElementById('nav');

if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

// ===================================
// Fade-up scroll animations
// ===================================
const fadeElements = document.querySelectorAll('.fade-up');

if (fadeElements.length > 0) {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.25,
      rootMargin: '0px 0px -80px 0px'
    });

    fadeElements.forEach(el => observer.observe(el));
  } else {
    // Fallback: show all immediately
    fadeElements.forEach(el => el.classList.add('visible'));
  }
}

// ===================================
// Form submission
// ===================================
const form = document.getElementById('signupForm');
const confirmation = document.getElementById('formConfirmation');

if (form && confirmation) {
  form.addEventListener('submit', async e => {
    e.preventDefault();

    const submitBtn = form.querySelector('[type="submit"]');
    const originalText = submitBtn.textContent;

    // Client-side required field validation
    let isValid = true;
    form.querySelectorAll('[required]').forEach(field => {
      const empty = !field.value.trim();
      field.classList.toggle('error', empty);
      if (empty) {
        isValid = false;
        field.addEventListener('input', () => field.classList.remove('error'), { once: true });
      }
    });

    if (!isValid) {
      const firstError = form.querySelector('.error');
      if (firstError) firstError.focus();
      return;
    }

    submitBtn.textContent = 'Lähetetään\u2026';
    submitBtn.disabled = true;

    // If action URL is still a placeholder, show confirmation without a network call
    if (form.action.includes('placeholder')) {
      showConfirmation();
      return;
    }

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });

      if (response.ok) {
        showConfirmation();
      } else {
        throw new Error(`HTTP ${response.status}`);
      }
    } catch {
      submitBtn.textContent = 'Virhe — yritä uudelleen';
      submitBtn.disabled = false;
    }
  });

  function showConfirmation() {
    if (window.goatcounter && window.goatcounter.count) {
      window.goatcounter.count({ path: 'ilmoittautuminen', title: 'Ilmoittaudu-lomake lähetetty', event: true });
    }
    form.hidden = true;
    confirmation.hidden = false;
    confirmation.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

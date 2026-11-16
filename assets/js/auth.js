/**
 * GlobeHire – Login & Signup Authentication UI (Frontend Demo)
 */
(function () {
  'use strict';

  function initPasswordToggles() {
    document.querySelectorAll('[data-toggle-password]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetId = btn.dataset.togglePassword;
        const input = document.getElementById(targetId);
        if (!input) return;
        const isPassword = input.type === 'password';
        input.type = isPassword ? 'text' : 'password';
        const eyeOpen = btn.querySelector('.eye-open');
        const eyeClosed = btn.querySelector('.eye-closed');
        if (eyeOpen && eyeClosed) {
          eyeOpen.classList.toggle('hidden', isPassword);
          eyeClosed.classList.toggle('hidden', !isPassword);
        }
        btn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
      });
    });
  }

  function initSocialButtons() {
    document.querySelectorAll('[data-social-auth]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const provider = btn.dataset.socialAuth;
        const feedback = document.getElementById('auth-feedback');
        if (feedback) {
          feedback.textContent = `${provider} OAuth sign-in is a frontend demo preview. Please use the form or explore job openings.`;
          feedback.className = 'p-3.5 rounded-xl text-xs sm:text-sm bg-royal-500/10 text-royal-700 dark:text-royal-300 border border-royal-500/25';
          feedback.classList.remove('hidden');
        }
      });
    });
  }

  function initLoginForm() {
    const form = document.getElementById('login-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const identifier = (document.getElementById('login-identifier')?.value || '').trim();
      const password = document.getElementById('login-password')?.value || '';
      const feedback = document.getElementById('auth-feedback');

      if (!identifier || password.length < 6) {
        if (feedback) {
          feedback.textContent = 'Please enter a valid email/phone and a password (min. 6 characters).';
          feedback.className = 'p-3.5 rounded-xl text-xs sm:text-sm bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/25';
          feedback.classList.remove('hidden');
        }
        return;
      }

      if (feedback) {
        feedback.textContent = 'Login successful (Frontend Demo)! Redirecting to Job Openings...';
        feedback.className = 'p-3.5 rounded-xl text-xs sm:text-sm bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25';
        feedback.classList.remove('hidden');
      }
      setTimeout(() => {
        window.location.href = 'jobs.html';
      }, 1200);
    });
  }

  function initSignupForm() {
    const form = document.getElementById('signup-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = (document.getElementById('signup-name')?.value || '').trim();
      const email = (document.getElementById('signup-email')?.value || '').trim();
      const phone = (document.getElementById('signup-phone')?.value || '').trim();
      const password = document.getElementById('signup-password')?.value || '';
      const confirm = document.getElementById('signup-confirm-password')?.value || '';
      const terms = document.getElementById('signup-terms')?.checked;
      const feedback = document.getElementById('auth-feedback');

      const errors = [];
      if (name.length < 2) errors.push('Full Name is required.');
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Valid Email Address is required.');
      if (phone.length < 6) errors.push('Valid Phone Number is required.');
      if (password.length < 8) errors.push('Password must be at least 8 characters.');
      if (password !== confirm) errors.push('Passwords do not match.');
      if (!terms) errors.push('You must accept the Terms & Conditions.');

      if (errors.length) {
        if (feedback) {
          feedback.innerHTML = errors.join('<br>');
          feedback.className = 'p-3.5 rounded-xl text-xs sm:text-sm bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/25';
          feedback.classList.remove('hidden');
        }
        return;
      }

      if (feedback) {
        feedback.textContent = 'Candidate account created (Frontend Demo)! Redirecting to Login...';
        feedback.className = 'p-3.5 rounded-xl text-xs sm:text-sm bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25';
        feedback.classList.remove('hidden');
      }
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 1400);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initPasswordToggles();
    initSocialButtons();
    initLoginForm();
    initSignupForm();
  });
})();


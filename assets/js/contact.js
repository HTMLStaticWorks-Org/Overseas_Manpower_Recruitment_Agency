/**
 * GlobeHire – Contact & Application Form Validation (Frontend Demo)
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-application-form');
    if (!form) return;

    const resumeInput = document.getElementById('contact-resume');
    const resumeLabel = document.getElementById('contact-resume-label');
    const feedback = document.getElementById('contact-form-feedback');

    if (resumeInput && resumeLabel) {
      resumeInput.addEventListener('change', () => {
        const file = resumeInput.files && resumeInput.files[0];
        if (file) {
          resumeLabel.textContent = `Selected: ${file.name} (${Math.round(file.size / 1024)} KB)`;
          resumeLabel.classList.add('text-royal-600', 'dark:text-gold-400', 'font-medium');
        } else {
          resumeLabel.textContent = 'PDF, DOC, or DOCX (Max 5MB)';
          resumeLabel.classList.remove('text-royal-600', 'dark:text-gold-400', 'font-medium');
        }
      });
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fullName = (document.getElementById('contact-name')?.value || '').trim();
      const email = (document.getElementById('contact-email')?.value || '').trim();
      const phone = (document.getElementById('contact-phone')?.value || '').trim();
      const currentCountry = (document.getElementById('contact-current-country')?.value || '').trim();
      const destination = document.getElementById('contact-destination')?.value || '';
      const category = document.getElementById('contact-category')?.value || '';
      const experience = document.getElementById('contact-experience')?.value || '';
      const message = (document.getElementById('contact-message')?.value || '').trim();

      const errors = [];
      if (fullName.length < 2) errors.push('Full Name is required.');
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('A valid Email Address is required.');
      if (phone.length < 6) errors.push('Phone Number with country code is required.');
      if (!currentCountry) errors.push('Current Country is required.');
      if (!destination) errors.push('Please select a Preferred Destination.');
      if (!category) errors.push('Please select an Interested Job Category.');
      if (!experience) errors.push('Please select your Experience level.');
      if (message.length < 10) errors.push('Please provide a brief message (at least 10 characters).');

      if (errors.length) {
        if (feedback) {
          feedback.innerHTML = `<strong class="block mb-1">Please check the following:</strong><ul class="list-disc pl-5 space-y-0.5">${errors.map((err) => `<li>${err}</li>`).join('')}</ul>`;
          feedback.className = 'p-4 rounded-xl text-sm bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/25';
          feedback.classList.remove('hidden');
        }
        return;
      }

      if (feedback) {
        feedback.innerHTML = `<strong>Application & Enquiry Submitted (Frontend Demo)!</strong><p class="mt-1">Thank you, ${fullName.replace(/</g, '&lt;')}. Our international recruitment desk has logged your interest for <strong>${category}</strong> in <strong>${destination}</strong>.</p>`;
        feedback.className = 'p-4 rounded-xl text-sm bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25';
        feedback.classList.remove('hidden');
      }
      form.reset();
      if (resumeLabel) {
        resumeLabel.textContent = 'PDF, DOC, or DOCX (Max 5MB)';
        resumeLabel.classList.remove('text-royal-600', 'dark:text-gold-400', 'font-medium');
      }
    });
  });
})();


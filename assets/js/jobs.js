/**
 * GlobeHire – Job Openings Search, Filters & Application Modal (Frontend Demo)
 */
(function () {
  'use strict';

  const JOBS_DATA = [
    {
      id: 'GH-101',
      title: 'Senior Civil Site Engineer',
      employer: 'Al-Futtaim Infrastructure Group',
      country: 'UAE',
      city: 'Dubai',
      industry: 'Construction & Engineering',
      experience: '5+ Years',
      expLevel: 'Senior',
      type: 'Full-Time',
      salaryMin: 4200,
      salaryMax: 5800,
      salaryLabel: '$4,200 – $5,800 / mo',
      description: 'Lead large-scale commercial tower and transit infrastructure execution, coordinating structural teams, QA/QC inspections, and HSE compliance.',
      requirements: ['B.Sc. in Civil Engineering', '5+ yrs GCC high-rise or infrastructure experience', 'AutoCAD & Primavera P6 proficiency', 'Valid UAE or international driving license'],
      badge: 'Urgent Hiring'
    },
    {
      id: 'GH-102',
      title: 'Registered ICU Care Nurse',
      employer: 'Berlin Charité Partner Clinics',
      country: 'Germany',
      city: 'Berlin & Munich',
      industry: 'Healthcare & Nursing',
      experience: '3+ Years',
      expLevel: 'Mid-Level',
      type: 'Full-Time',
      salaryMin: 3600,
      salaryMax: 4700,
      salaryLabel: '$3,600 – $4,700 / mo',
      description: 'Provide specialized critical care nursing in modern university-affiliated hospitals with full relocation, language bridging, and recognition support.',
      requirements: ['B.Sc. Nursing / Diploma with valid license', 'Min. 2–3 years ICU or ER experience', 'B1/B2 German readiness (training provided)', 'Clean professional standing certificate'],
      badge: 'Relocation Included'
    },
    {
      id: 'GH-103',
      title: 'Executive Sous Chef – 5-Star Resort',
      employer: 'Lusail Marina Hospitality',
      country: 'Qatar',
      city: 'Doha',
      industry: 'Hospitality & Hotels',
      experience: '4+ Years',
      expLevel: 'Mid-Level',
      type: 'Full-Time',
      salaryMin: 2800,
      salaryMax: 3900,
      salaryLabel: '$2,800 – $3,900 / mo',
      description: 'Oversee multi-cuisine fine dining kitchen operations, menu engineering, HACCP food safety standards, and brigade mentorship for a luxury beachfront property.',
      requirements: ['Culinary Arts Diploma or equivalent', '4+ yrs in 5-star hotel or luxury resort kitchens', 'Strong HACCP & inventory management skills', 'Fluent English communication'],
      badge: 'Accommodation + Meals'
    },
    {
      id: 'GH-104',
      title: 'Offshore Process & Piping Technician',
      employer: 'Aramco Tier-1 Energy Partners',
      country: 'Saudi Arabia',
      city: 'Jubail & Dammam',
      industry: 'Oil & Gas',
      experience: '5+ Years',
      expLevel: 'Senior',
      type: 'Contract',
      salaryMin: 4500,
      salaryMax: 6200,
      salaryLabel: '$4,500 – $6,200 / mo',
      description: 'Execute preventive maintenance, pressure testing, and turnaround shutdown support on upstream petrochemical and gas processing units.',
      requirements: ['Diploma in Mechanical / Chemical Engineering', '5+ yrs offshore or refinery piping experience', 'BOSIET / H2S safety certification preferred', 'Ability to read P&IDs and isometric drawings'],
      badge: 'Tax-Free Package'
    },
    {
      id: 'GH-105',
      title: 'CNC Assembly Specialist',
      employer: 'Baltic Precision Manufacturing Sp. z o.o.',
      country: 'Poland',
      city: 'Wrocław',
      industry: 'Manufacturing & Factory',
      experience: '2+ Years',
      expLevel: 'Mid-Level',
      type: 'Full-Time',
      salaryMin: 1800,
      salaryMax: 2500,
      salaryLabel: '$1,800 – $2,500 / mo',
      description: 'Operate and calibrate 5-axis CNC milling centers and automated automotive component lines in an EU-certified smart factory.',
      requirements: ['Technical trade certificate or vocational diploma', '2+ yrs CNC Fanuc/Siemens operation', 'Blueprint reading & micrometer inspection', 'EU work permit sponsorship included'],
      badge: 'EU Work Permit'
    },
    {
      id: 'GH-106',
      title: 'Heavy Trailer & Fleet Logistics Driver',
      employer: 'Gulf Express Freight & Ports',
      country: 'Kuwait',
      city: 'Kuwait City',
      industry: 'Driving & Logistics',
      experience: '3+ Years',
      expLevel: 'Mid-Level',
      type: 'Full-Time',
      salaryMin: 1500,
      salaryMax: 2100,
      salaryLabel: '$1,500 – $2,100 / mo',
      description: 'Operate heavy-duty articulated trailers for port-to-warehouse container transport across Kuwait and GCC cross-border corridors.',
      requirements: ['Valid Heavy Vehicle Commercial License', '3+ yrs accident-free articulated truck driving', 'Basic English & GPS navigation literacy', 'Clean medical & police clearance'],
      badge: 'Visa + Housing'
    },
    {
      id: 'GH-107',
      title: 'Cloud & DevOps Engineer',
      employer: 'Apex FinTech Asia Pte Ltd',
      country: 'Singapore',
      city: 'Marina Bay',
      industry: 'IT & Technology',
      experience: '4+ Years',
      expLevel: 'Senior',
      type: 'Full-Time',
      salaryMin: 5500,
      salaryMax: 7800,
      salaryLabel: '$5,500 – $7,800 / mo',
      description: 'Architect resilient multi-region Kubernetes clusters, CI/CD pipelines, and zero-trust cloud security controls for a regulated digital banking platform.',
      requirements: ['B.Sc. in Computer Science or related field', '4+ yrs AWS/GCP, Terraform & Kubernetes', 'Experience with SOC2 / MAS TRM compliance', 'Employment Pass (EP) sponsorship provided'],
      badge: 'EP Sponsorship'
    },
    {
      id: 'GH-108',
      title: 'MEP & HVAC Facility Supervisor',
      employer: 'Muscat Integrated Facilities LLC',
      country: 'Oman',
      city: 'Muscat',
      industry: 'Facility Management',
      experience: '3+ Years',
      expLevel: 'Mid-Level',
      type: 'Full-Time',
      salaryMin: 2000,
      salaryMax: 2800,
      salaryLabel: '$2,000 – $2,800 / mo',
      description: 'Supervise a 25-technician MEP maintenance crew overseeing chiller plants, BMS automation, and electrical systems in commercial complexes.',
      requirements: ['Diploma in Electrical / Mechanical Engineering', '3+ yrs commercial HVAC & BMS maintenance', 'Strong team scheduling & vendor coordination', 'GCC experience is an advantage'],
      badge: 'Immediate Start'
    },
    {
      id: 'GH-109',
      title: 'Industrial PLC Electrician',
      employer: 'Kuala Lumpur Smart Grid Corp',
      country: 'Malaysia',
      city: 'Kuala Lumpur',
      industry: 'Manufacturing & Factory',
      experience: '2+ Years',
      expLevel: 'Entry-Mid',
      type: 'Full-Time',
      salaryMin: 1600,
      salaryMax: 2300,
      salaryLabel: '$1,600 – $2,300 / mo',
      description: 'Install, troubleshoot, and maintain high-voltage switchgear, motor control centers, and automated PLC production machinery.',
      requirements: ['Electrical Wireman / Technician Certificate', '2+ yrs industrial automation or factory maintenance', 'Knowledge of Siemens/Allen-Bradley PLCs', 'Willingness to work rotating shifts'],
      badge: 'Flight + Housing'
    },
    {
      id: 'GH-110',
      title: 'Allied Health Physiotherapist',
      employer: 'Manama Royal Medical Center',
      country: 'Bahrain',
      city: 'Manama',
      industry: 'Healthcare & Nursing',
      experience: '2+ Years',
      expLevel: 'Mid-Level',
      type: 'Full-Time',
      salaryMin: 2600,
      salaryMax: 3500,
      salaryLabel: '$2,600 – $3,500 / mo',
      description: 'Deliver post-operative orthopedic and sports rehabilitation therapy in a JCI-accredited private hospital setting.',
      requirements: ['B.Sc. in Physiotherapy', '2+ yrs clinical hospital experience', 'NHRA licensing eligibility', 'Compassionate patient communication'],
      badge: 'NHRA Support'
    },
    {
      id: 'GH-111',
      title: 'Structural Steel Welder (6G Certified)',
      employer: 'Riyadh Vision Mega-Projects',
      country: 'Saudi Arabia',
      city: 'Riyadh',
      industry: 'Construction & Engineering',
      experience: '2+ Years',
      expLevel: 'Entry-Mid',
      type: 'Contract',
      salaryMin: 1400,
      salaryMax: 2000,
      salaryLabel: '$1,400 – $2,000 / mo',
      description: 'Perform structural TIG/MIG/SMAW welding on commercial stadium and transit steel frameworks under international AWS standards.',
      requirements: ['6G Welding Trade Certification', '2+ yrs structural or pipeline welding', 'Ability to pass radiographic/ultrasonic tests', 'Physically fit for site work'],
      badge: 'Free Accommodation'
    },
    {
      id: 'GH-112',
      title: 'Front Office & Guest Executive',
      employer: 'Palm Jumeirah Luxury Suites',
      country: 'UAE',
      city: 'Dubai',
      industry: 'Hospitality & Hotels',
      experience: '1+ Year',
      expLevel: 'Entry-Mid',
      type: 'Full-Time',
      salaryMin: 1700,
      salaryMax: 2400,
      salaryLabel: '$1,700 – $2,400 / mo',
      description: 'Manage VIP guest arrivals, concierge coordination, and Opera PMS reservations for an international luxury waterfront resort.',
      requirements: ['Degree/Diploma in Hospitality Management', '1–3 yrs luxury hotel front-office experience', 'Opera PMS familiarity', 'Excellent English; additional languages a plus'],
      badge: 'Service Charge + Tips'
    }
  ];

  function matchesSalaryRange(job, range) {
    if (!range) return true;
    if (range === 'under-2000') return job.salaryMin < 2000;
    if (range === '2000-4000') return job.salaryMax >= 2000 && job.salaryMin <= 4000;
    if (range === '4000-plus') return job.salaryMax >= 4000;
    return true;
  }

  function renderJobs(jobs) {
    const grid = document.getElementById('jobs-grid');
    const countEl = document.getElementById('jobs-count');
    const emptyEl = document.getElementById('jobs-empty');
    if (!grid) return;

    if (countEl) {
      countEl.textContent = `${jobs.length} Verified ${jobs.length === 1 ? 'Position' : 'Positions'} Available`;
    }

    if (!jobs.length) {
      grid.innerHTML = '';
      if (emptyEl) emptyEl.classList.remove('hidden');
      return;
    }

    if (emptyEl) emptyEl.classList.add('hidden');

    grid.innerHTML = jobs
      .map(
        (job) => `
      <article class="group rounded-2xl bg-white dark:bg-navy-800/90 border border-slate-200 dark:border-white/10 p-6 shadow-sm hover:shadow-premium hover:border-royal-500/40 dark:hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between" data-aos="fade-up">
        <div>
          <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-royal-500/10 text-royal-700 dark:bg-royal-500/20 dark:text-royal-300">
              ${job.industry}
            </span>
            <span class="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-gold-500/15 text-gold-600 dark:text-gold-400 border border-gold-500/25">
              ${job.badge}
            </span>
          </div>

          <h3 title="${job.title}" class="font-display text-lg font-bold text-navy-900 dark:text-white group-hover:text-royal-600 dark:group-hover:text-gold-400 truncate transition-colors">
            ${job.title}
          </h3>
          <p title="${job.employer}" class="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300 truncate">
            ${job.employer}
          </p>

          <div class="mt-4 grid grid-cols-2 gap-2.5 text-xs text-slate-600 dark:text-slate-300">
            <div class="flex items-center gap-1.5 bg-slate-50 dark:bg-navy-900/70 px-3 py-2 rounded-lg">
              <svg class="w-4 h-4 text-royal-600 dark:text-gold-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <span class="truncate font-medium">${job.country} (${job.city})</span>
            </div>
            <div class="flex items-center gap-1.5 bg-slate-50 dark:bg-navy-900/70 px-3 py-2 rounded-lg">
              <svg class="w-4 h-4 text-royal-600 dark:text-gold-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span class="truncate font-semibold text-navy-900 dark:text-white">${job.salaryLabel}</span>
            </div>
            <div class="flex items-center gap-1.5 bg-slate-50 dark:bg-navy-900/70 px-3 py-2 rounded-lg">
              <svg class="w-4 h-4 text-royal-600 dark:text-gold-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              <span>Exp: ${job.experience}</span>
            </div>
            <div class="flex items-center gap-1.5 bg-slate-50 dark:bg-navy-900/70 px-3 py-2 rounded-lg">
              <svg class="w-4 h-4 text-royal-600 dark:text-gold-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>${job.type}</span>
            </div>
          </div>

          <p class="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            ${job.description}
          </p>

          <div class="mt-4 pt-4 border-t border-slate-100 dark:border-white/10">
            <p class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Key Requirements</p>
            <ul class="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              ${job.requirements
                .map(
                  (req) => `
                <li class="flex items-start gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0"></span>
                  <span>${req}</span>
                </li>`
                )
                .join('')}
            </ul>
          </div>
        </div>

        <div class="mt-6 pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between gap-3">
          <span class="text-xs font-mono text-slate-400">Ref: ${job.id}</span>
          <button type="button" data-apply-job="${job.id}" class="btn-shimmer inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-navy-900 dark:bg-royal-600 hover:bg-royal-700 dark:hover:bg-royal-500 text-white text-sm font-semibold transition-all shadow-sm hover:shadow-glow-purple">
            <span>Apply Now</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>
        </div>
      </article>
    `
      )
      .join('');

    grid.querySelectorAll('[data-apply-job]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const job = JOBS_DATA.find((j) => j.id === btn.dataset.applyJob);
        openApplyModal(job);
      });
    });
  }

  function openApplyModal(job) {
    const modal = document.getElementById('job-apply-modal');
    if (!modal) return;
    const titleEl = document.getElementById('modal-job-title');
    const metaEl = document.getElementById('modal-job-meta');
    const hiddenJob = document.getElementById('modal-job-id');
    const feedback = document.getElementById('modal-apply-feedback');

    if (titleEl) titleEl.textContent = job ? `Apply: ${job.title}` : 'Submit General Application';
    if (metaEl) metaEl.textContent = job ? `${job.employer} • ${job.country} (${job.salaryLabel})` : 'Our recruitment specialists will match your profile with verified international employers.';
    if (hiddenJob) hiddenJob.value = job ? `${job.id} – ${job.title} (${job.country})` : 'General Overseas Application';
    if (feedback) {
      feedback.classList.add('hidden');
      feedback.textContent = '';
    }

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  function closeApplyModal() {
    const modal = document.getElementById('job-apply-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }

  function initJobsPage() {
    const grid = document.getElementById('jobs-grid');
    if (!grid) return;

    const titleInput = document.getElementById('filter-title');
    const heroSearchInput = document.getElementById('jobs-hero-search');
    const countrySelect = document.getElementById('filter-country');
    const industrySelect = document.getElementById('filter-industry');
    const expSelect = document.getElementById('filter-experience');
    const typeSelect = document.getElementById('filter-type');
    const salarySelect = document.getElementById('filter-salary');
    const resetBtn = document.getElementById('reset-filters-btn');
    const emptyResetBtn = document.getElementById('empty-reset-btn');

    // Read query params from URL (e.g., from Home 1 or Home 2 links)
    const params = new URLSearchParams(window.location.search);
    if (params.get('q') && titleInput) titleInput.value = params.get('q');
    if (params.get('country') && countrySelect) countrySelect.value = params.get('country');
    if (params.get('industry') && industrySelect) industrySelect.value = params.get('industry');

    function applyFilters() {
      const q = (titleInput?.value || '').trim().toLowerCase();
      const country = countrySelect?.value || '';
      const industry = industrySelect?.value || '';
      const exp = expSelect?.value || '';
      const type = typeSelect?.value || '';
      const salary = salarySelect?.value || '';

      const filtered = JOBS_DATA.filter((job) => {
        const matchQ =
          !q ||
          job.title.toLowerCase().includes(q) ||
          job.employer.toLowerCase().includes(q) ||
          job.industry.toLowerCase().includes(q) ||
          job.country.toLowerCase().includes(q);
        const matchCountry = !country || job.country === country;
        const matchIndustry = !industry || job.industry === industry;
        const matchExp = !exp || job.expLevel === exp;
        const matchType = !type || job.type === type;
        const matchSalary = matchesSalaryRange(job, salary);
        return matchQ && matchCountry && matchIndustry && matchExp && matchType && matchSalary;
      });

      renderJobs(filtered);
    }

    if (heroSearchInput && titleInput) {
      heroSearchInput.addEventListener('input', () => {
        titleInput.value = heroSearchInput.value;
        applyFilters();
      });
    }

    const heroSearchForm = document.getElementById('jobs-hero-form');
    if (heroSearchForm) {
      heroSearchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (heroSearchInput && titleInput) {
          titleInput.value = heroSearchInput.value;
        }
        applyFilters();
        document.getElementById('listings')?.scrollIntoView({ behavior: 'smooth' });
      });
    }

    [titleInput, countrySelect, industrySelect, expSelect, typeSelect, salarySelect].forEach((el) => {
      if (el) {
        el.addEventListener('input', applyFilters);
        el.addEventListener('change', applyFilters);
      }
    });

    function resetAll() {
      if (titleInput) titleInput.value = '';
      if (heroSearchInput) heroSearchInput.value = '';
      if (countrySelect) countrySelect.value = '';
      if (industrySelect) industrySelect.value = '';
      if (expSelect) expSelect.value = '';
      if (typeSelect) typeSelect.value = '';
      if (salarySelect) salarySelect.value = '';
      applyFilters();
    }

    if (resetBtn) resetBtn.addEventListener('click', resetAll);
    if (emptyResetBtn) emptyResetBtn.addEventListener('click', resetAll);

    // Quick category cards in Section 4 filter listings
    document.querySelectorAll('[data-quick-industry]').forEach((card) => {
      card.addEventListener('click', () => {
        if (industrySelect) {
          industrySelect.value = card.dataset.quickIndustry;
          applyFilters();
          document.getElementById('listings')?.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Modal wiring
    document.getElementById('open-general-apply')?.addEventListener('click', () => openApplyModal(null));
    document.getElementById('close-apply-modal')?.addEventListener('click', closeApplyModal);
    document.getElementById('job-apply-modal')?.addEventListener('click', (e) => {
      if (e.target.id === 'job-apply-modal') closeApplyModal();
    });

    const modalForm = document.getElementById('modal-apply-form');
    if (modalForm) {
      modalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = (document.getElementById('modal-name')?.value || '').trim();
        const email = (document.getElementById('modal-email')?.value || '').trim();
        const phone = (document.getElementById('modal-phone')?.value || '').trim();
        const feedback = document.getElementById('modal-apply-feedback');

        if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || phone.length < 6) {
          if (feedback) {
            feedback.textContent = 'Please fill in your full name, a valid email address, and phone number.';
            feedback.className = 'p-3 rounded-xl text-sm bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20';
            feedback.classList.remove('hidden');
          }
          return;
        }

        if (feedback) {
          feedback.textContent = 'Application received (Frontend Demo)! Our international recruitment desk will review your profile.';
          feedback.className = 'p-3 rounded-xl text-sm bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20';
          feedback.classList.remove('hidden');
        }
        modalForm.reset();
      });
    }

    applyFilters();
  }

  document.addEventListener('DOMContentLoaded', initJobsPage);
})();


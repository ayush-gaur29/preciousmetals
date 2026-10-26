import { COMPANY, SERVICES } from './data.js';

const FB = '<svg viewBox="0 0 24 24" class="w-4 h-4" fill="currentColor" aria-hidden="true"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>';
const IG = '<svg viewBox="0 0 24 24" class="w-4 h-4" fill="currentColor" aria-hidden="true"><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>';

const LOGO = (light = true) => `
  <a href="index.html" class="flex items-center gap-3 shrink-0" aria-label="Precious Metals Consulting LLC — Home">
    <img src="icon.svg" alt="" class="w-9 h-9 rounded-[10px]" />
    <span class="leading-none">
      <span class="block font-display font-semibold text-[15px] tracking-tight ${light ? 'text-white' : 'text-jet'}">Precious Metals</span>
      <span class="block text-[10px] tracking-[.22em] uppercase mt-1 ${light ? 'text-silver' : 'text-silver-600'}">Consulting LLC</span>
    </span>
  </a>`;

const NAV = [
  { href: 'index.html', label: 'Home', key: 'home' },
  { href: 'about.html', label: 'About Us', key: 'about' },
  { href: 'services.html', label: 'Services', key: 'services', dropdown: true },
  { href: 'index.html#testimonials', label: 'Testimonials', key: 'testimonials' },
  { href: 'gallery.html', label: 'Gallery', key: 'gallery' }
];

export function renderLayout(page) {
  // Top utility bar + header
  const header = document.createElement('div');
  header.innerHTML = `
  <div id="progress" aria-hidden="true"></div>
  <header id="site-header" class="fixed top-0 inset-x-0 z-50 ${page !== 'home' ? '' : ''}">
    <div class="container-x h-full flex items-center justify-between gap-6">
      ${LOGO(true)}
      <nav class="hidden lg:flex items-center gap-8" aria-label="Primary">
        ${NAV.map(n => n.dropdown ? `
          <div class="dropdown" data-dropdown>
            <button class="nav-link inline-flex items-center gap-1 ${page === n.key ? 'active' : ''}" aria-expanded="false" aria-haspopup="true">
              ${n.label}<i data-lucide="chevron-down" class="chev w-4 h-4"></i>
            </button>
            <div class="dropdown-panel" role="menu">
              <div class="rounded-2xl p-3 bg-[#12151C] border border-white/10 shadow-[0_30px_60px_-20px_rgba(0,0,0,.6)]">
                <div class="grid grid-cols-2 gap-1">
                  ${SERVICES.map(s => `
                    <a role="menuitem" href="services.html#${s.id}" class="group flex items-start gap-3 rounded-xl p-3 hover:bg-white/5 transition-colors">
                      <span class="w-9 h-9 shrink-0 rounded-lg bg-cerulean/15 text-cerulean-300 grid place-items-center group-hover:bg-rose/15 group-hover:text-rose transition-colors"><i data-lucide="${s.icon}" class="w-4 h-4"></i></span>
                      <span class="min-w-0">
                        <span class="block text-sm font-medium text-white">${s.title}</span>
                        <span class="block text-xs text-silver mt-0.5 line-clamp-1">${s.short}</span>
                      </span>
                    </a>`).join('')}
                  <a role="menuitem" href="services.html" class="col-span-2 mt-1 flex items-center justify-between rounded-xl px-4 py-3 bg-cerulean/10 hover:bg-cerulean/20 text-sm text-white transition-colors">
                    <span>View all services</span><i data-lucide="arrow-right" class="w-4 h-4"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>` : `
          <a href="${n.href}" class="nav-link ${page === n.key ? 'active' : ''}" data-key="${n.key}">${n.label}</a>`).join('')}
      </nav>
      <div class="flex items-center gap-3">
        <a href="${COMPANY.phoneHref}" class="hidden xl:inline-flex items-center gap-2 text-sm text-silver hover:text-white transition-colors"><i data-lucide="phone" class="w-4 h-4"></i>${COMPANY.phone}</a>
        <a href="contact.html" class="btn btn-primary hidden sm:inline-flex !min-h-[42px] !px-5 text-sm">Contact us<i data-lucide="arrow-up-right"></i></a>
        <button id="burger" class="burger lg:hidden w-11 h-11 rounded-full border border-white/15 grid place-items-center" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
          <span class="block"><span></span><span></span></span>
        </button>
      </div>
    </div>
  </header>

  <div id="mobile-menu" aria-hidden="true">
    <div class="scrim" data-close></div>
    <aside class="sheet text-white" role="dialog" aria-modal="true" aria-label="Menu">
      <div class="flex items-center justify-between px-6 h-[76px] border-b border-white/10 shrink-0">
        ${LOGO(true)}
        <button class="w-11 h-11 rounded-full border border-white/15 grid place-items-center" data-close aria-label="Close menu"><i data-lucide="x" class="w-5 h-5"></i></button>
      </div>
      <nav class="px-6 py-6 flex-1" aria-label="Mobile">
        ${NAV.map((n, i) => n.dropdown ? `
          <div class="m-item border-b border-white/10" style="transition-delay:${.08 + i * .05}s">
            <button class="w-full flex items-center justify-between py-4 font-display text-2xl" data-msub aria-expanded="false">
              <span class="${page === n.key ? 'text-cerulean-300' : ''}">${n.label}</span><i data-lucide="plus" class="w-5 h-5 transition-transform"></i>
            </button>
            <div class="m-sub"><div>
              <div class="pb-4 grid gap-1">
                <a href="services.html" class="py-2 text-silver-300 hover:text-white text-sm">All services</a>
                ${SERVICES.map(s => `<a href="services.html#${s.id}" class="py-2 flex items-center gap-3 text-silver-300 hover:text-white text-sm"><i data-lucide="${s.icon}" class="w-4 h-4 text-cerulean-300"></i>${s.title}</a>`).join('')}
              </div>
            </div></div>
          </div>` : `
          <a href="${n.href}" class="m-item flex items-center justify-between py-4 border-b border-white/10 font-display text-2xl ${page === n.key ? 'text-cerulean-300' : ''}" style="transition-delay:${.08 + i * .05}s">${n.label}<i data-lucide="arrow-up-right" class="w-5 h-5 text-silver-500"></i></a>`).join('')}
        <a href="contact.html" class="m-item flex items-center justify-between py-4 border-b border-white/10 font-display text-2xl ${page === 'contact' ? 'text-cerulean-300' : ''}" style="transition-delay:.38s">Contact Us<i data-lucide="arrow-up-right" class="w-5 h-5 text-silver-500"></i></a>
      </nav>
      <div class="m-item px-6 pb-8 space-y-3" style="transition-delay:.45s">
        <a href="${COMPANY.phoneHref}" class="flex items-center gap-3 text-sm text-silver-300"><i data-lucide="phone" class="w-4 h-4 text-cerulean-300"></i>${COMPANY.phone}</a>
        <a href="mailto:${COMPANY.email}" class="flex items-center gap-3 text-sm text-silver-300 break-all"><i data-lucide="mail" class="w-4 h-4 text-cerulean-300 shrink-0"></i>${COMPANY.email}</a>
        <a href="contact.html" class="btn btn-primary w-full mt-4">Schedule a consultation<i data-lucide="arrow-right"></i></a>
      </div>
    </aside>
  </div>`;
  document.body.prepend(...header.children);

  // Footer
  const footer = document.createElement('footer');
  footer.className = 'bg-jet text-soft relative overflow-hidden';
  footer.innerHTML = `
    <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full bg-cerulean/20 blur-[120px] pointer-events-none"></div>
    <div class="container-x relative pt-20 pb-10">
      <div class="grid gap-12 lg:grid-cols-12">
        <div class="lg:col-span-4">
          ${LOGO(true)}
          <p class="mt-6 text-silver text-sm leading-relaxed max-w-sm">Transforming Resources into Opportunities — connecting investors with diamond mining, gold extraction, and real estate opportunities in Angola.</p>
          <div class="mt-6 flex gap-3">
            <a href="${COMPANY.facebook}" target="_blank" rel="noopener" aria-label="Facebook" class="w-11 h-11 rounded-full border border-white/15 grid place-items-center text-silver hover:text-white hover:border-rose hover:bg-rose/10 transition-colors">${FB}</a>
            <a href="${COMPANY.instagram}" target="_blank" rel="noopener" aria-label="Instagram" class="w-11 h-11 rounded-full border border-white/15 grid place-items-center text-silver hover:text-white hover:border-rose hover:bg-rose/10 transition-colors">${IG}</a>
          </div>
        </div>
        <div class="lg:col-span-2 sm:col-span-1">
          <h4 class="text-xs tracking-[.18em] uppercase text-silver-500 font-sans font-semibold">Quick Links</h4>
          <ul class="mt-5 space-y-3 text-sm">
            ${[['index.html', 'Home'], ['about.html', 'About Us'], ['services.html', 'Services'], ['gallery.html', 'Gallery'], ['contact.html', 'Contact Us']].map(([h, l]) => `<li><a href="${h}" class="text-silver-300 hover:text-white transition-colors">${l}</a></li>`).join('')}
          </ul>
        </div>
        <div class="lg:col-span-2">
          <h4 class="text-xs tracking-[.18em] uppercase text-silver-500 font-sans font-semibold">Services</h4>
          <ul class="mt-5 space-y-3 text-sm">
            ${[['diamond-mining', 'Diamond Mining'], ['prospection', 'Prospection'], ['real-estate', 'Real Estate'], ['construction', 'Construction'], ['tourism', 'Tourism'], ['hospitality', 'Hospitality']].map(([h, l]) => `<li><a href="services.html#${h}" class="text-silver-300 hover:text-white transition-colors">${l}</a></li>`).join('')}
            <li><a href="services.html" class="text-cerulean-300 hover:text-white transition-colors">&amp; More…</a></li>
          </ul>
        </div>
        <div class="lg:col-span-4 grid gap-10 sm:grid-cols-2 lg:grid-cols-1">
          <div>
            <h4 class="text-xs tracking-[.18em] uppercase text-silver-500 font-sans font-semibold">Subscribe Now</h4>
            <p class="mt-5 text-sm text-silver">Subscribe to our newsletter to get our latest updates &amp; news.</p>
            <form id="newsletter" class="mt-4 flex gap-2" novalidate>
              <label for="nl-email" class="sr-only">Email Address</label>
              <input id="nl-email" type="email" required placeholder="Email Address" class="field field-dark flex-1 min-w-0 !rounded-full !min-h-[48px] !py-0 !px-5" />
              <button class="btn btn-primary !px-4 shrink-0" aria-label="Submit"><i data-lucide="arrow-right"></i></button>
            </form>
          </div>
          <div>
            <h4 class="text-xs tracking-[.18em] uppercase text-silver-500 font-sans font-semibold">Contact Us</h4>
            <ul class="mt-5 space-y-3 text-sm">
              <li><a href="${COMPANY.phoneHref}" class="flex items-center gap-3 text-silver-300 hover:text-white"><i data-lucide="phone" class="w-4 h-4 text-cerulean-300"></i>${COMPANY.phone}</a></li>
              <li><a href="mailto:${COMPANY.email}" class="flex items-center gap-3 text-silver-300 hover:text-white break-all"><i data-lucide="mail" class="w-4 h-4 shrink-0 text-cerulean-300"></i>${COMPANY.email}</a></li>
              <li class="flex items-start gap-3 text-silver-300"><i data-lucide="map-pin" class="w-4 h-4 shrink-0 mt-0.5 text-cerulean-300"></i>${COMPANY.address}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="metal-rule mt-16"></div>
      <div class="pt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between text-xs text-silver-500">
        <p>© 2025 Precious Metals Consulting LLC. All Rights Reserved.</p>
        <a href="#top" class="inline-flex items-center gap-2 hover:text-white transition-colors" data-top>Back to top<i data-lucide="arrow-up" class="w-3.5 h-3.5"></i></a>
      </div>
    </div>`;
  document.body.append(footer);

  // Lightbox + toast
  const extras = document.createElement('div');
  extras.innerHTML = `
    <div id="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer">
      <button class="absolute top-4 right-4 w-12 h-12 rounded-full border border-white/20 text-white grid place-items-center hover:bg-white/10" data-lb-close aria-label="Close"><i data-lucide="x" class="w-5 h-5"></i></button>
      <button class="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 text-white grid place-items-center hover:bg-white/10" data-lb-prev aria-label="Previous"><i data-lucide="chevron-left" class="w-5 h-5"></i></button>
      <img alt="Gallery image" />
      <button class="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 text-white grid place-items-center hover:bg-white/10" data-lb-next aria-label="Next"><i data-lucide="chevron-right" class="w-5 h-5"></i></button>
    </div>
    <div id="toast" role="status" aria-live="polite">
      <div class="flex items-center gap-3 rounded-full bg-jet text-white pl-3 pr-5 py-3 border border-white/10 text-sm">
        <span class="w-7 h-7 rounded-full bg-rose grid place-items-center shrink-0"><i data-lucide="check" class="w-4 h-4"></i></span>
        <span id="toast-msg">Done</span>
      </div>
    </div>`;
  document.body.append(...extras.children);
}

export function ctaBand(title, highlight, button = 'Contact Us') {
  return `
  <section class="bg-soft py-20 sm:py-24">
    <div class="container-x">
      <div class="reveal relative overflow-hidden rounded-[28px] bg-cerulean text-white px-6 sm:px-12 lg:px-16 py-14 sm:py-16 isolate">
        <div class="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_10%,rgba(255,77,141,.35),transparent_45%),radial-gradient(ellipse_at_0%_100%,rgba(11,13,18,.55),transparent_55%)]"></div>
        <div class="absolute -right-16 -bottom-24 w-80 h-80 rounded-full border border-white/15 -z-10"></div>
        <div class="absolute -right-4 -bottom-12 w-56 h-56 rounded-full border border-white/20 -z-10"></div>
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <h2 class="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl leading-[1.05] max-w-2xl">${title}<br><span class="text-white/70">${highlight}</span></h2>
          <a href="contact.html" class="btn bg-white text-jet hover:bg-soft self-start lg:self-auto">${button}<i data-lucide="arrow-up-right"></i></a>
        </div>
      </div>
    </div>
  </section>`;
}

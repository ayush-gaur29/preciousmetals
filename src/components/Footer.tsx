import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, ArrowUp } from 'lucide-react';
import { COMPANY } from '../data';
import { useToast } from '../context/ToastContext';
import { dataService } from '../lib/dataService';
import { validateEmail, scrollToTop } from '../lib/utils';

const FB_ICON = (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
  </svg>
);

const IG_ICON = (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
    <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
  </svg>
);

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  const { showToast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !validateEmail(email)) {
      setIsInvalid(true);
      return;
    }

    setIsInvalid(false);
    const res = await dataService.submitNewsletter({ email });
    setEmail('');
    showToast(res.message);
  };

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact Us' },
  ];

  const serviceLinks = [
    { to: '/services#diamond-mining', label: 'Diamond Mining' },
    { to: '/services#prospection', label: 'Prospection' },
    { to: '/services#real-estate', label: 'Real Estate' },
    { to: '/services#construction', label: 'Construction' },
    { to: '/services#tourism', label: 'Tourism' },
    { to: '/services#hospitality', label: 'Hospitality' },
  ];

  return (
    <footer className="bg-jet text-soft relative overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full bg-cerulean/20 blur-[120px] pointer-events-none" />

      <div className="container-x relative pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <Link
              to="/"
              className="inline-flex items-center shrink-0"
              aria-label="Precious Metals Consulting LLC — Home"
            >
              <img
                src="/assets/Precious_Metals_Logo.png"
                alt="Precious Metals Consulting LLC"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="mt-6 text-silver text-sm leading-relaxed max-w-sm">
              Transforming Resources into Opportunities — connecting investors
              with diamond mining, gold extraction, and real estate opportunities in
              Angola.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={COMPANY.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full border border-white/15 grid place-items-center text-silver hover:text-white hover:border-rose hover:bg-rose/10 transition-colors"
              >
                {FB_ICON}
              </a>
              <a
                href={COMPANY.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full border border-white/15 grid place-items-center text-silver hover:text-white hover:border-rose hover:bg-rose/10 transition-colors"
              >
                {IG_ICON}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="text-xs tracking-[.18em] uppercase text-silver-500 font-sans font-semibold">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-silver-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-xs tracking-[.18em] uppercase text-silver-500 font-sans font-semibold">
              Services
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {serviceLinks.map((s) => (
                <li key={s.to}>
                  <Link
                    to={s.to}
                    className="text-silver-300 hover:text-white transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-cerulean-300 hover:text-white transition-colors"
                >
                  &amp; More…
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe & Contact */}
          <div className="lg:col-span-4 grid gap-10 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <h4 className="text-xs tracking-[.18em] uppercase text-silver-500 font-sans font-semibold">
                Subscribe Now
              </h4>
              <p className="mt-5 text-sm text-silver">
                Subscribe to our newsletter to get our latest updates &amp; news.
              </p>
              <form
                id="newsletter"
                className="mt-4 flex gap-2"
                onSubmit={handleSubscribe}
                noValidate
              >
                <label htmlFor="nl-email" className="sr-only">
                  Email Address
                </label>
                <input
                  id="nl-email"
                  type="email"
                  required
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (isInvalid) setIsInvalid(false);
                  }}
                  className={`field field-dark flex-1 min-w-0 !rounded-full !min-h-[48px] !py-0 !px-5 ${
                    isInvalid ? 'invalid' : ''
                  }`}
                />
                <button
                  type="submit"
                  className="btn btn-primary !px-4 shrink-0"
                  aria-label="Submit newsletter subscription"
                >
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </form>
            </div>

            <div>
              <h4 className="text-xs tracking-[.18em] uppercase text-silver-500 font-sans font-semibold">
                Contact Us
              </h4>
              <ul className="mt-5 space-y-3.5 text-sm">
                <li>
                  <a
                    href={COMPANY.executivePhoneHref}
                    className="flex items-start gap-3 text-silver-300 hover:text-white transition-colors group"
                  >
                    <Phone className="w-4 h-4 shrink-0 mt-0.5 text-cerulean-300 group-hover:text-rose transition-colors" />
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider text-silver-500 font-medium">
                        USA Executive Desk
                      </span>
                      <span className="text-white font-medium">
                        {COMPANY.executivePhone}
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${COMPANY.executiveEmail}`}
                    className="flex items-start gap-3 text-silver-300 hover:text-white transition-colors group"
                  >
                    <Mail className="w-4 h-4 shrink-0 mt-0.5 text-rose group-hover:text-cerulean-300 transition-colors" />
                    <div className="min-w-0">
                      <span className="block text-[11px] uppercase tracking-wider text-silver-500 font-medium">
                        Executive Email
                      </span>
                      <span className="text-white font-medium break-all">
                        {COMPANY.executiveEmail}
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="flex items-start gap-3 text-silver-300 hover:text-white transition-colors group"
                  >
                    <Mail className="w-4 h-4 shrink-0 mt-0.5 text-cerulean-300 group-hover:text-rose transition-colors" />
                    <div className="min-w-0">
                      <span className="block text-[11px] uppercase tracking-wider text-silver-500 font-medium">
                        General Business Email
                      </span>
                      <span className="text-silver-300 break-all">
                        {COMPANY.email}
                      </span>
                    </div>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-silver-300">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-cerulean-300" />
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-silver-500 font-medium">
                      USA Headquarters
                    </span>
                    <span className="block text-white font-medium">Minneapolis–St. Paul, MN</span>
                    <span className="block text-xs text-silver-400 mt-0.5">{COMPANY.address}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Institutional Confidentiality Notice & Letterhead */}
        <div className="mt-12 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-silver-300 flex items-center justify-between flex-wrap gap-4">
          <p className="flex items-start sm:items-center gap-2.5 max-w-3xl">
            <span className="w-2 h-2 rounded-full bg-rose inline-block shrink-0 mt-1 sm:mt-0" />
            <span>
              <strong className="text-white">Institutional Requirement:</strong> Mutual Non-Disclosure Agreement (NDA) required prior to the release of confidential mineral project dossiers.
            </span>
          </p>
          <a
            href="/letterhead.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cerulean-300 hover:text-white transition-colors underline underline-offset-4 text-xs shrink-0"
          >
            Corporate Letterhead (Print / PDF) ↗
          </a>
        </div>

        <div className="metal-rule mt-16" />

        <div className="pt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between text-xs text-silver-500">
          <p>© 2025 Precious Metals Consulting LLC. All Rights Reserved.</p>
          <button
            onClick={() => scrollToTop()}
            className="inline-flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

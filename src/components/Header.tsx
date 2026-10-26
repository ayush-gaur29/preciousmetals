import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Phone, ArrowUpRight, ArrowRight } from 'lucide-react';
import { COMPANY, SERVICES } from '../data';
import { IconRenderer } from './IconRenderer';
import { MobileMenu } from './MobileMenu';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { useHeaderScrolled } from '../hooks/useHeaderScrolled';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const progress = useScrollProgress();
  const isScrolled = useHeaderScrolled(20);

  // Close dropdown on click outside or escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDropdownOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { to: '/', label: 'Home', key: 'home', exact: true },
    { to: '/about', label: 'About Us', key: 'about' },
    { to: '/services', label: 'Services', key: 'services', dropdown: true },
    { to: '/#testimonials', label: 'Testimonials', key: 'testimonials' },
    { to: '/gallery', label: 'Gallery', key: 'gallery' },
  ];

  const isActive = (item: { to: string; exact?: boolean; dropdown?: boolean }) => {
    if (item.exact) return location.pathname === '/';
    if (item.dropdown) return location.pathname === '/services';
    return location.pathname === item.to;
  };

  return (
    <>
      {/* Scroll Reading Progress Bar */}
      <div
        id="progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      <header
        id="site-header"
        className={`fixed top-0 inset-x-0 z-50 ${isScrolled ? 'scrolled' : ''}`}
      >
        <div className="container-x h-full flex items-center justify-between gap-6">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0"
            aria-label="Precious Metals Consulting LLC — Home"
          >
            <img src="/icon.svg" alt="" className="w-9 h-9 rounded-[10px]" />
            <span className="leading-none">
              <span className="block font-display font-semibold text-[15px] tracking-tight text-white">
                Precious Metals
              </span>
              <span className="block text-[10px] tracking-[.22em] uppercase mt-1 text-silver">
                Consulting LLC
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {navItems.map((n) =>
              n.dropdown ? (
                <div
                  key={n.key}
                  ref={dropdownRef}
                  className={`dropdown ${dropdownOpen ? 'open' : ''}`}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`nav-link inline-flex items-center gap-1 ${
                      isActive(n) ? 'active' : ''
                    }`}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                  >
                    {n.label}
                    <ChevronDown className="chev w-4 h-4" />
                  </button>

                  <div className="dropdown-panel" role="menu">
                    <div className="rounded-2xl p-3 bg-[#12151C] border border-white/10 shadow-[0_30px_60px_-20px_rgba(0,0,0,.6)]">
                      <div className="grid grid-cols-2 gap-1">
                        {SERVICES.map((s) => (
                          <Link
                            key={s.id}
                            role="menuitem"
                            to={`/services#${s.id}`}
                            onClick={() => setDropdownOpen(false)}
                            className="group flex items-start gap-3 rounded-xl p-3 hover:bg-white/5 transition-colors"
                          >
                            <span className="w-9 h-9 shrink-0 rounded-lg bg-cerulean/15 text-cerulean-300 grid place-items-center group-hover:bg-rose/15 group-hover:text-rose transition-colors">
                              <IconRenderer name={s.icon} className="w-4 h-4" />
                            </span>
                            <span className="min-w-0">
                              <span className="block text-sm font-medium text-white">
                                {s.title}
                              </span>
                              <span className="block text-xs text-silver mt-0.5 line-clamp-1">
                                {s.short}
                              </span>
                            </span>
                          </Link>
                        ))}

                        <Link
                          role="menuitem"
                          to="/services"
                          onClick={() => setDropdownOpen(false)}
                          className="col-span-2 mt-1 flex items-center justify-between rounded-xl px-4 py-3 bg-cerulean/10 hover:bg-cerulean/20 text-sm text-white transition-colors"
                        >
                          <span>View all services</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={n.key}
                  to={n.to}
                  className={`nav-link ${isActive(n) ? 'active' : ''}`}
                >
                  {n.label}
                </Link>
              )
            )}
          </nav>

          {/* Right Header Controls */}
          <div className="flex items-center gap-3">
            <a
              href={COMPANY.phoneHref}
              className="hidden xl:inline-flex items-center gap-2 text-sm text-silver hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              {COMPANY.phone}
            </a>
            <Link
              to="/contact"
              className="btn btn-primary hidden sm:inline-flex !min-h-[42px] !px-5 text-sm"
            >
              Contact us
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Link>
            <button
              id="burger"
              className="burger lg:hidden w-11 h-11 rounded-full border border-white/15 grid place-items-center hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="block">
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ArrowUpRight, ArrowRight, Plus, Phone, Mail } from 'lucide-react';
import { COMPANY, SERVICES } from '../data';
import { IconRenderer } from './IconRenderer';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      setServicesExpanded(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen, onClose]);

  const navLinks = [
    { to: '/', label: 'Home', key: 'home' },
    { to: '/about', label: 'About Us', key: 'about' },
    { to: '/services', label: 'Services', key: 'services', dropdown: true },
    { to: '/#testimonials', label: 'Testimonials', key: 'testimonials' },
    { to: '/gallery', label: 'Gallery', key: 'gallery' },
  ];

  return (
    <div
      id="mobile-menu"
      className={isOpen ? 'open' : ''}
      aria-hidden={!isOpen}
    >
      <div className="scrim" onClick={onClose} />
      <aside
        className="sheet text-white"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="flex items-center justify-between px-6 h-[76px] border-b border-white/10 shrink-0">
          <Link
            to="/"
            onClick={onClose}
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
          <button
            className="w-11 h-11 rounded-full border border-white/15 grid place-items-center hover:bg-white/10 transition-colors"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="px-6 py-6 flex-1 overflow-y-auto" aria-label="Mobile">
          {navLinks.map((n, i) =>
            n.dropdown ? (
              <div
                key={n.key}
                className="m-item border-b border-white/10"
                style={{ transitionDelay: `${0.08 + i * 0.05}s` }}
              >
                <button
                  className="w-full flex items-center justify-between py-4 font-display text-2xl"
                  onClick={() => setServicesExpanded(!servicesExpanded)}
                  aria-expanded={servicesExpanded}
                >
                  <span
                    className={
                      location.pathname === '/services' ? 'text-cerulean-300' : ''
                    }
                  >
                    {n.label}
                  </span>
                  <Plus
                    className={`w-5 h-5 transition-transform duration-300 ${
                      servicesExpanded ? 'rotate-45' : ''
                    }`}
                  />
                </button>
                <div className={`m-sub ${servicesExpanded ? 'open' : ''}`}>
                  <div>
                    <div className="pb-4 grid gap-1">
                      <Link
                        to="/services"
                        onClick={onClose}
                        className="py-2 text-silver-300 hover:text-white text-sm"
                      >
                        All services
                      </Link>
                      {SERVICES.map((s) => (
                        <Link
                          key={s.id}
                          to={`/services#${s.id}`}
                          onClick={onClose}
                          className="py-2 flex items-center gap-3 text-silver-300 hover:text-white text-sm"
                        >
                          <IconRenderer
                            name={s.icon}
                            className="w-4 h-4 text-cerulean-300"
                          />
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={n.key}
                to={n.to}
                onClick={onClose}
                className={`m-item flex items-center justify-between py-4 border-b border-white/10 font-display text-2xl ${
                  location.pathname === n.to ? 'text-cerulean-300' : ''
                }`}
                style={{ transitionDelay: `${0.08 + i * 0.05}s` }}
              >
                {n.label}
                <ArrowUpRight className="w-5 h-5 text-silver-500" />
              </Link>
            )
          )}
          <Link
            to="/contact"
            onClick={onClose}
            className={`m-item flex items-center justify-between py-4 border-b border-white/10 font-display text-2xl ${
              location.pathname === '/contact' ? 'text-cerulean-300' : ''
            }`}
            style={{ transitionDelay: '0.38s' }}
          >
            Contact Us
            <ArrowUpRight className="w-5 h-5 text-silver-500" />
          </Link>
        </nav>

        <div
          className="m-item px-6 pb-8 space-y-3 shrink-0"
          style={{ transitionDelay: '0.45s' }}
        >
          <a
            href={COMPANY.phoneHref}
            className="flex items-center gap-3 text-sm text-silver-300 hover:text-white"
          >
            <Phone className="w-4 h-4 text-cerulean-300" />
            {COMPANY.phone}
          </a>
          <a
            href={`mailto:${COMPANY.email}`}
            className="flex items-center gap-3 text-sm text-silver-300 hover:text-white break-all"
          >
            <Mail className="w-4 h-4 text-cerulean-300 shrink-0" />
            {COMPANY.email}
          </a>
          <Link
            to="/contact"
            onClick={onClose}
            className="btn btn-primary w-full mt-4"
          >
            Schedule a consultation
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </aside>
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data';
import { IconRenderer } from '../components/IconRenderer';
import { CtaBand } from '../components/CtaBand';
import { useReveal } from '../hooks/useReveal';
import { scrollToAnchor } from '../lib/utils';

export const ServicesPage: React.FC = () => {
  useReveal();

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero pt-[76px]">
        <div
          className="absolute -z-10 top-[-40%] right-[-10%] w-[700px] h-[700px] rounded-full blur-[90px]"
          style={{
            background: 'radial-gradient(circle,rgba(0,123,167,.5),transparent 65%)',
          }}
        />
        <div
          className="absolute -z-10 bottom-[-50%] left-[10%] w-[420px] h-[420px] rounded-full blur-[90px]"
          style={{
            background: 'radial-gradient(circle,rgba(255,77,141,.16),transparent 65%)',
          }}
        />
        <div className="grid-lines" />
        <div className="container-x py-20 sm:py-28 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <nav
              className="text-sm text-silver flex items-center gap-2 reveal"
              aria-label="Breadcrumb"
            >
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white">Services</span>
            </nav>
            <h1
              className="mt-6 font-display font-semibold text-5xl sm:text-7xl lg:text-8xl leading-[.98] reveal"
              style={{ '--d': '.06s' } as React.CSSProperties}
            >
              Our <span className="text-gradient">Services</span>
            </h1>
          </div>
          <p
            className="lg:col-span-5 text-silver-300 text-lg reveal"
            style={{ '--d': '.12s' } as React.CSSProperties}
          >
            Explore profitable ventures in diamond mining, real estate,
            construction, and hospitality with our expert consulting.
          </p>
        </div>

        {/* Jump Index Navigation */}
        <div className="border-t border-white/10">
          <div
            className="container-x py-4 flex gap-2 overflow-x-auto no-scrollbar"
            id="jump"
            style={{ scrollbarWidth: 'none' }}
          >
            {SERVICES.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToAnchor(s.id)}
                className="chip shrink-0 border border-white/10 text-silver-300 hover:text-white hover:border-cerulean-300 transition-colors cursor-pointer"
              >
                <IconRenderer name={s.icon} className="w-3.5 h-3.5" />
                {s.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED SERVICE ROWS */}
      <section className="bg-soft py-20 sm:py-28">
        <div className="container-x" id="svc-list">
          {SERVICES.map((s, i) => {
            const flip = i % 2 === 1;
            const dark = i % 3 === 0;

            return (
              <article
                key={s.id}
                id={s.id}
                className="svc-row group py-14 sm:py-20 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center"
              >
                <div className={`lg:col-span-6 ${flip ? 'lg:order-2' : ''}`}>
                  <div className="tile aspect-[4/3] img-reveal relative">
                    <img src={s.img} alt={s.title} loading="lazy" />
                    <span
                      className={`absolute top-4 left-4 chip ${
                        dark
                          ? 'bg-jet/80 text-white'
                          : 'glass-light text-jet'
                      } backdrop-blur shadow-sm`}
                    >
                      <IconRenderer
                        name={s.icon}
                        className={`w-3.5 h-3.5 ${
                          dark ? 'text-rose' : 'text-cerulean'
                        }`}
                      />
                      {s.title}
                    </span>
                  </div>
                </div>

                <div className={`lg:col-span-6 ${flip ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-4 reveal">
                    <span className="num font-display text-5xl sm:text-6xl font-semibold text-silver-300">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-r from-silver-300 to-transparent" />
                  </div>
                  <h2 className="mt-6 font-display font-semibold text-3xl sm:text-4xl leading-tight reveal text-jet">
                    {s.title}
                    {s.sub && (
                      <span className="block text-lg sm:text-xl font-normal text-silver-600 mt-2">
                        {s.sub}
                      </span>
                    )}
                  </h2>
                  <p className="mt-4 text-lg text-cerulean-700 font-medium reveal">
                    {s.short}
                  </p>
                  <p className="mt-5 text-silver-700 leading-relaxed reveal">
                    {s.long}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3 reveal">
                    <Link to="/contact" className="btn btn-dark">
                      Schedule a consultation
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* AT A GLANCE OVERVIEW */}
      <section className="bg-white py-20 sm:py-28 border-t border-silver-200">
        <div className="container-x">
          <p className="eyebrow text-cerulean reveal">
            <span className="dot" />
            At a glance
          </p>
          <h2 className="mt-5 font-display font-semibold text-4xl sm:text-5xl leading-[1.05] reveal">
            Every service, <span className="text-gradient-dark">one partner</span>.
          </h2>
          <div
            id="glance"
            className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {SERVICES.map((s, i) => (
              <button
                key={s.id}
                onClick={() => scrollToAnchor(s.id)}
                className="svc-card reveal p-7 flex flex-col min-h-[220px] text-left cursor-pointer"
                style={{ '--d': `${(i % 3) * 0.05}s` } as React.CSSProperties}
              >
                <div className="flex items-start justify-between">
                  <span className="svc-icon w-12 h-12 rounded-xl bg-cerulean-50 text-cerulean grid place-items-center">
                    <IconRenderer name={s.icon} className="w-5 h-5" />
                  </span>
                  <ArrowUpRight className="arrow w-5 h-5 text-silver-500" />
                </div>
                <h3 className="mt-auto pt-8 font-display font-semibold text-xl text-jet">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-silver-600">{s.short}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <CtaBand
        title="Ready to Invest?"
        highlight="Contact Precious Metals Consulting LLC"
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
};

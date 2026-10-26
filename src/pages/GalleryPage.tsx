import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Maximize2, ArrowUpRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { CtaBand } from '../components/CtaBand';
import { useReveal } from '../hooks/useReveal';
import { useLightbox } from '../context/LightboxContext';

export const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const { openLightbox } = useLightbox();

  const filteredItems =
    filter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.cat === filter);

  useReveal(filter);

  const allImages = filteredItems.map((item) => item.src);

  const filterTabs = [
    { key: 'all', label: 'All Visuals' },
    { key: 'mining', label: 'Diamond & Mining' },
    { key: 'operations', label: 'Operations & Prospection' },
    { key: 'infrastructure', label: 'Real Estate & Infra' },
  ];

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero pt-[76px]">
        <div
          className="absolute -z-10 top-[-30%] right-[-10%] w-[650px] h-[650px] rounded-full blur-[90px]"
          style={{
            background: 'radial-gradient(circle,rgba(0,123,167,.5),transparent 65%)',
          }}
        />
        <div
          className="absolute -z-10 bottom-[-40%] left-[10%] w-[450px] h-[450px] rounded-full blur-[90px]"
          style={{
            background: 'radial-gradient(circle,rgba(255,77,141,.2),transparent 65%)',
          }}
        />
        <div className="grid-lines" />
        <div className="container-x py-14 sm:py-20 lg:py-24 grid lg:grid-cols-12 gap-8 lg:gap-10 items-end">
          <div className="lg:col-span-8">
            <nav
              className="text-xs sm:text-sm text-silver flex items-center gap-2 reveal"
              aria-label="Breadcrumb"
            >
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white">Gallery</span>
            </nav>
            <h1
              className="mt-4 sm:mt-6 font-display font-semibold text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.02] reveal"
              style={{ '--d': '.06s' } as React.CSSProperties}
            >
              Our <span className="text-gradient">Gallery</span>
            </h1>
          </div>
          <p
            className="lg:col-span-4 text-silver-300 text-base sm:text-lg reveal"
            style={{ '--d': '.12s' } as React.CSSProperties}
          >
            Witness our ground operations, mining ventures, refined mineral
            resources, and premium infrastructure developments throughout
            Angola.
          </p>
        </div>

        {/* Category Filters */}
        <div className="border-t border-white/10">
          <div
            className="container-x py-4 flex gap-3 overflow-x-auto no-scrollbar"
            id="filters"
            style={{ scrollbarWidth: 'none' }}
          >
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`ftab cursor-pointer ${filter === tab.key ? 'active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="bg-soft py-20 sm:py-28">
        <div className="container-x">
          <div
            id="gallery-container"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item, i) => (
              <article
                key={item.title + i}
                onClick={() => openLightbox(allImages, i)}
                className="g-item group reveal rounded-3xl bg-white border border-silver-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
                style={{ '--d': `${(i % 3) * 0.05}s` } as React.CSSProperties}
              >
                <div
                  className="tile block aspect-[4/3] bg-jet/5 relative overflow-hidden"
                  aria-label={`Enlarge image ${item.title}`}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-jet/0 group-hover:bg-jet/35 transition-colors duration-300 flex items-center justify-center">
                    <span className="w-12 h-12 rounded-full bg-white/95 text-jet grid place-items-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-md">
                      <Maximize2 className="w-5 h-5" />
                    </span>
                  </div>
                  <span className="absolute top-4 left-4 chip glass-light text-jet text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-sm">
                    {item.cat === 'mining'
                      ? 'Diamond & Mining'
                      : item.cat === 'operations'
                      ? 'Operations'
                      : 'Infrastructure'}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-display font-semibold text-lg text-jet group-hover:text-cerulean transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-silver-600 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="mt-4 pt-4 border-t border-silver-200/60 flex items-center justify-between text-xs font-medium text-cerulean">
                    <span className="inline-flex items-center gap-1.5 text-silver-700">
                      Precious Metals Consulting LLC
                    </span>
                    <span className="text-silver hover:text-cerulean flex items-center gap-1">
                      Click to view
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <CtaBand
        title="Partner in Mining & Infrastructure"
        highlight="Schedule a Confidential Briefing Today"
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
};

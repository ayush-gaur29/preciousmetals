import React from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  ShieldCheck,
  Briefcase,
  Landmark,
  Users,
  Cpu,
  Globe2,
  MapPin,
  Compass,
} from 'lucide-react';
import { CtaBand } from '../components/CtaBand';
import { useReveal } from '../hooks/useReveal';

export const AboutPage: React.FC = () => {
  useReveal();

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero pt-[76px]">
        <div
          className="orb orb-a absolute rounded-full blur-[80px] -z-10"
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle,rgba(0,123,167,.5),transparent 65%)',
            top: '-30%',
            left: '-10%',
          }}
        />
        <div
          className="absolute -z-10 bottom-[-40%] right-[5%] w-[420px] h-[420px] rounded-full blur-[90px]"
          style={{
            background: 'radial-gradient(circle,rgba(255,77,141,.18),transparent 65%)',
          }}
        />
        <div className="grid-lines" />
        <div className="container-x py-14 sm:py-20 lg:py-24">
          <nav
            className="text-xs sm:text-sm text-silver flex items-center gap-2 reveal"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">About Us</span>
          </nav>
          <h1
            className="mt-4 sm:mt-6 font-display font-semibold text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.02] reveal"
            style={{ '--d': '.06s' } as React.CSSProperties}
          >
            About <span className="text-gradient">Us</span>
          </h1>
          <p
            className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-silver-300 reveal"
            style={{ '--d': '.12s' } as React.CSSProperties}
          >
            Precious Metals Consulting LLC — Empowering Global Investments in
            Africa.
          </p>
        </div>
      </section>

      {/* EMPOWERING */}
      <section className="bg-soft py-24 sm:py-32">
        <div className="container-x grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <p className="eyebrow text-cerulean reveal">
              <span className="dot" />
              Precious Metals Consulting LLC
            </p>
            <h2 className="mt-5 font-display font-semibold text-4xl sm:text-5xl leading-[1.05] reveal">
              Empowering Global{' '}
              <span className="text-gradient-dark">Investments</span> in Africa
            </h2>
            <div className="metal-rule my-9 reveal" />
            <div className="space-y-5 text-silver-700 leading-relaxed">
              <p className="reveal text-lg text-jet">
                At Precious Metals Consulting LLC, we specialize in diamond
                mining, real estate, construction, oil extraction, and hospitality
                investments in Angola and beyond. With a strong network of industry
                professionals and government contacts, we guide entrepreneurs and
                investors through profitable opportunities while ensuring compliance
                with local and international regulations.
              </p>
              <p className="reveal">
                With years of experience in precious metals, mining, and
                infrastructure development, we help businesses navigate the
                complexities of resource extraction, prospecting, and property
                investments. Our team ensures that every project is executed with
                strategic planning, ethical sourcing, and sustainable practices.
              </p>
              <p className="reveal">
                We assist both startups and established enterprises in selecting
                reputable partners and navigating due diligence procedures. Whether
                you are entering the diamond, gold, oil, or construction industry,
                our insights and connections help you streamline operations and
                maximize profitability.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 grid grid-cols-5 gap-4">
            <div className="col-span-3 tile aspect-[3/4] img-reveal">
              <img
                src="https://preciousmetalsconsultingllc.com/wp-content/uploads/2025/02/image-28.png"
                alt="Precious Metals Consulting operations"
              />
            </div>
            <div className="col-span-2 flex flex-col gap-4 pt-12">
              <div className="tile aspect-[3/4] img-reveal">
                <img
                  src="https://preciousmetalsconsultingllc.com/wp-content/uploads/2025/02/image-29.png"
                  alt="Precious Metals Consulting project"
                />
              </div>
              <div className="rounded-[22px] bg-jet text-white p-5 reveal">
                <ShieldCheck className="w-5 h-5 text-rose" />
                <p className="mt-4 text-sm text-silver-300 leading-snug">
                  Compliance with local and international regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION (DARK) */}
      <section className="relative bg-jet text-soft py-24 sm:py-32 overflow-hidden isolate">
        <div className="absolute -z-10 left-1/2 top-0 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-cerulean/25 blur-[140px]" />
        <div className="container-x">
          <div className="max-w-4xl">
            <p className="eyebrow text-cerulean-300 reveal">
              <span className="dot" />
              Our Mission
            </p>
            <h2 className="mt-5 font-display font-semibold text-4xl sm:text-6xl leading-[1.03] reveal">
              A Vision for <span className="text-gradient">Economic Growth</span>
            </h2>
            <p className="mt-10 font-display text-2xl sm:text-3xl leading-snug text-soft reveal">
              Our mission is to bridge the gap between investors and Africa’s
              emerging markets.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-4">
            <div className="svc-dark p-7 reveal">
              <Briefcase className="w-6 h-6 text-cerulean-300" />
              <h3 className="mt-8 font-display font-semibold text-xl text-white">
                Job creation
              </h3>
            </div>
            <div
              className="svc-dark p-7 reveal"
              style={{ '--d': '.06s' } as React.CSSProperties}
            >
              <Landmark className="w-6 h-6 text-cerulean-300" />
              <h3 className="mt-8 font-display font-semibold text-xl text-white">
                Infrastructure expansion
              </h3>
            </div>
            <div
              className="svc-dark p-7 reveal"
              style={{ '--d': '.12s' } as React.CSSProperties}
            >
              <Users className="w-6 h-6 text-rose" />
              <h3 className="mt-8 font-display font-semibold text-xl text-white">
                Community upliftment
              </h3>
            </div>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-10 text-silver-300 leading-relaxed">
            <p className="reveal">
              We believe in fostering economic development by supporting businesses
              that contribute to job creation, infrastructure expansion, and
              community upliftment.
            </p>
            <p
              className="reveal"
              style={{ '--d': '.06s' } as React.CSSProperties}
            >
              At Precious Metals Consulting LLC, we take pride in delivering
              reliable, high-quality consulting services tailored to the needs of
              government and private sector clients. Our approach combines market
              intelligence, risk assessment, and hands-on expertise to drive
              successful business ventures in Angola’s thriving industries.
            </p>
          </div>
        </div>
      </section>

      {/* INNOVATION */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-x">
          <div className="tile aspect-[16/9] sm:aspect-[21/9] img-reveal relative">
            <img
              src="/assets/landscape.png"
              alt="Aerial view of a mining landscape in southern Africa"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-jet/70 to-transparent" />
            <div className="absolute left-6 sm:left-12 bottom-6 sm:bottom-12 max-w-md text-white">
              <p className="eyebrow text-cerulean-300">
                <span className="dot" />
                Resource Management
              </p>
              <p className="hidden sm:block mt-3 font-display text-2xl lg:text-3xl leading-tight">
                Precision, sustainability, and profitability.
              </p>
            </div>
          </div>

          <div className="mt-16 grid lg:grid-cols-12 gap-10">
            <h2 className="lg:col-span-5 font-display font-semibold text-4xl sm:text-5xl leading-[1.05] reveal">
              Driving Innovation in{' '}
              <span className="text-gradient-dark">Resource Management</span>
            </h2>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              <div className="rounded-[22px] border border-silver-200 bg-soft p-7 reveal">
                <span className="w-11 h-11 rounded-xl bg-cerulean text-white grid place-items-center">
                  <Cpu className="w-5 h-5" />
                </span>
                <p className="mt-6 text-silver-700 leading-relaxed">
                  At Precious Metals Consulting LLC, we leverage cutting-edge
                  technologies and best practices to optimize resource extraction,
                  project management, and market expansion. From diamond and gold
                  mining to oil extraction and real estate development, we ensure
                  that every venture is handled with precision, sustainability,
                  and profitability.
                </p>
              </div>
              <div
                className="rounded-[22px] border border-silver-200 bg-soft p-7 reveal"
                style={{ '--d': '.08s' } as React.CSSProperties}
              >
                <span className="w-11 h-11 rounded-xl bg-jet text-rose grid place-items-center">
                  <Globe2 className="w-5 h-5" />
                </span>
                <p className="mt-6 text-silver-700 leading-relaxed">
                  We understand the complexities of operating in international
                  markets, which is why we provide comprehensive business
                  consulting, staff training, and investment strategies tailored to
                  our clients’ goals. Whether you’re looking to expand into
                  hospitality, tourism, or commercial real estate, our expertise
                  and extensive industry network ensure a seamless and rewarding
                  investment journey.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4">
            <div className="tile aspect-[4/3] img-reveal">
              <img
                src="https://preciousmetalsconsultingllc.com/wp-content/uploads/2025/02/image-10-1.png"
                alt="Resource management project"
                loading="lazy"
              />
            </div>
            <div className="tile aspect-[4/3] img-reveal">
              <img
                src="https://preciousmetalsconsultingllc.com/wp-content/uploads/2025/02/image-9-1.png"
                alt="Resource management project"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC PARTNERSHIPS & INSTITUTIONAL ALLIANCES */}
      <section className="bg-white py-24 sm:py-32 border-t border-silver-200">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="eyebrow text-cerulean reveal">
              <span className="dot" />
              Institutional Credibility &amp; Trust
            </p>
            <h2 className="mt-5 font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.04] text-jet reveal">
              Strategic Partnerships &amp;{' '}
              <span className="text-gradient-dark">Institutional Alliances</span>
            </h2>
            <div className="metal-rule my-8 reveal" />
            <blockquote className="text-xl sm:text-2xl font-display font-medium text-jet leading-snug reveal border-l-4 border-cerulean pl-6 py-3 italic bg-soft rounded-r-2xl">
              “Decades-long alliances with ministerial bodies, state-owned mining entities, and strategic institutional partners.”
            </blockquote>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            <div className="rounded-[24px] border border-silver-200 bg-soft p-8 reveal flex flex-col justify-between">
              <div>
                <span className="w-12 h-12 rounded-xl bg-cerulean text-white grid place-items-center">
                  <Landmark className="w-6 h-6" />
                </span>
                <h3 className="mt-6 font-display font-semibold text-2xl text-jet">
                  Ministerial Bodies
                </h3>
                <p className="mt-4 text-silver-700 leading-relaxed text-sm">
                  Decades of established relationships navigating sovereign resource
                  frameworks, mining concession compliance, and official regulatory
                  clearances in Angola.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-silver-200/80 text-xs font-semibold text-cerulean uppercase tracking-wider">
                Sovereign Frameworks
              </div>
            </div>

            <div
              className="rounded-[24px] border border-silver-200 bg-soft p-8 reveal flex flex-col justify-between"
              style={{ '--d': '.06s' } as React.CSSProperties}
            >
              <div>
                <span className="w-12 h-12 rounded-xl bg-jet text-rose grid place-items-center">
                  <ShieldCheck className="w-6 h-6" />
                </span>
                <h3 className="mt-6 font-display font-semibold text-2xl text-jet">
                  State-Owned Entities
                </h3>
                <p className="mt-4 text-silver-700 leading-relaxed text-sm">
                  Direct liaison with national mineral institutions and state
                  operators to unlock vetted diamond concessions, gold extraction,
                  and sustainable infrastructure development.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-silver-200/80 text-xs font-semibold text-rose uppercase tracking-wider">
                Concession Access
              </div>
            </div>

            <div
              className="rounded-[24px] border border-silver-200 bg-soft p-8 reveal flex flex-col justify-between"
              style={{ '--d': '.12s' } as React.CSSProperties}
            >
              <div>
                <span className="w-12 h-12 rounded-xl bg-cerulean text-white grid place-items-center">
                  <Globe2 className="w-6 h-6" />
                </span>
                <h3 className="mt-6 font-display font-semibold text-2xl text-jet">
                  Institutional Partners
                </h3>
                <p className="mt-4 text-silver-700 leading-relaxed text-sm">
                  Connecting institutional and private capital from the USA and
                  Europe into high-yield resource ventures with ethical standards
                  and rigorous due diligence.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-silver-200/80 text-xs font-semibold text-cerulean uppercase tracking-wider">
                Global Capital
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNATIONAL PRESENCE */}
      <section className="bg-jet text-white py-24 sm:py-32 relative overflow-hidden isolate">
        <div className="absolute -z-10 right-0 top-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-cerulean/20 blur-[130px]" />
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="eyebrow text-cerulean-300 reveal">
              <span className="dot" />
              Global Footprint
            </p>
            <h2 className="mt-5 font-display font-semibold text-4xl sm:text-6xl leading-[1.03] reveal">
              Our <span className="text-gradient">International Presence</span>
            </h2>
            <p className="mt-6 text-silver-300 text-lg leading-relaxed reveal">
              Clearly distinguishing sovereign liaison on the African continent,
              transatlantic headquarters in the United States, and strategic
              business connections across European commercial capitals.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            <div className="rounded-[24px] bg-white/5 border border-white/10 p-8 reveal backdrop-blur">
              <span className="w-12 h-12 rounded-xl bg-cerulean/20 text-cerulean-300 grid place-items-center">
                <MapPin className="w-6 h-6" />
              </span>
              <p className="mt-6 text-xs uppercase tracking-wider font-semibold text-cerulean-300">
                USA Headquarters
              </p>
              <h3 className="mt-2 font-display font-semibold text-2xl text-white">
                Minneapolis–St. Paul
              </h3>
              <p className="mt-1 text-sm text-silver">Minnesota, United States</p>
              <p className="mt-4 text-xs text-silver-400 border-t border-white/10 pt-4">
                Corporate headquarters, governance &amp; USA Executive Desk.
              </p>
            </div>

            <div
              className="rounded-[24px] bg-white/5 border border-rose/30 p-8 reveal backdrop-blur"
              style={{ '--d': '.06s' } as React.CSSProperties}
            >
              <span className="w-12 h-12 rounded-xl bg-rose/20 text-rose grid place-items-center">
                <Compass className="w-6 h-6" />
              </span>
              <p className="mt-6 text-xs uppercase tracking-wider font-semibold text-rose-300">
                International Liaison
              </p>
              <h3 className="mt-2 font-display font-semibold text-2xl text-white">
                Luanda, Angola
              </h3>
              <p className="mt-1 text-sm text-silver">Southern Africa</p>
              <p className="mt-4 text-xs text-silver-400 border-t border-white/10 pt-4">
                Direct on-site operational liaison with mining concessions &amp; ministerial entities.
              </p>
            </div>

            <div
              className="rounded-[24px] bg-white/5 border border-white/10 p-8 reveal backdrop-blur"
              style={{ '--d': '.12s' } as React.CSSProperties}
            >
              <span className="w-12 h-12 rounded-xl bg-cerulean/20 text-cerulean-300 grid place-items-center">
                <Globe2 className="w-6 h-6" />
              </span>
              <p className="mt-6 text-xs uppercase tracking-wider font-semibold text-cerulean-300">
                International Business Connections
              </p>
              <h3 className="mt-2 font-display font-semibold text-2xl text-white">
                Lisbon &amp; London
              </h3>
              <p className="mt-1 text-sm text-silver">Portugal &amp; United Kingdom</p>
              <p className="mt-4 text-xs text-silver-400 border-t border-white/10 pt-4">
                Strategic European capital syndication &amp; institutional partner networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXECUTIVE ENGAGEMENT */}
      <CtaBand
        title="Executive Engagement"
        highlight="Let's Discuss Your Next Strategic Concession or Capital Development."
        buttonText="Schedule a Consultation"
        buttonHref="/contact"
      />
    </>
  );
};

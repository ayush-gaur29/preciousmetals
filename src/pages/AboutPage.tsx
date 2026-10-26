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
        <div className="container-x py-20 sm:py-28">
          <nav
            className="text-sm text-silver flex items-center gap-2 reveal"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">About Us</span>
          </nav>
          <h1
            className="mt-6 font-display font-semibold text-5xl sm:text-7xl lg:text-8xl leading-[.98] reveal"
            style={{ '--d': '.06s' } as React.CSSProperties}
          >
            About <span className="text-gradient">Us</span>
          </h1>
          <p
            className="mt-6 max-w-2xl text-lg text-silver-300 reveal"
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

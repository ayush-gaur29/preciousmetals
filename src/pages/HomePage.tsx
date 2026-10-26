import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowDownRight,
  ArrowUpRight,
  Compass,
  Network,
  ShieldCheck,
  MapPin,
  Award,
  Scale,
  Sparkles,
  PhoneCall,
  Send,
  Maximize2,
} from 'lucide-react';
import { SERVICES, GALLERY, TESTIMONIALS } from '../data';
import { ParticleCanvas } from '../components/ParticleCanvas';
import { Marquee } from '../components/Marquee';
import { TestimonialSlider } from '../components/TestimonialSlider';
import { CtaBand } from '../components/CtaBand';
import { IconRenderer } from '../components/IconRenderer';
import { useReveal } from '../hooks/useReveal';
import { useLightbox } from '../context/LightboxContext';
import { useToast } from '../context/ToastContext';
import { dataService } from '../lib/dataService';
import { validateEmail } from '../lib/utils';

export const HomePage: React.FC = () => {
  useReveal();
  const { openLightbox } = useLightbox();
  const { showToast } = useToast();

  // Consultation form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const handleConsultationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: boolean } = {};

    if (!name.trim()) newErrors.name = true;
    if (!email.trim() || !validateEmail(email)) newErrors.email = true;
    if (!msg.trim()) newErrors.msg = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const res = await dataService.submitConsultation({
      name,
      email,
      message: msg,
    });

    setName('');
    setEmail('');
    setMsg('');
    showToast(res.message);
  };

  const galleryImages = GALLERY.slice(1, 7);
  const galleryShapes = [
    'md:row-span-2 aspect-[3/4] md:aspect-auto',
    'aspect-square',
    'aspect-square',
    'md:row-span-2 aspect-[3/4] md:aspect-auto',
    'aspect-square',
    'aspect-square',
  ];

  const bentoSpans = [
    'md:col-span-6 lg:col-span-7 lg:row-span-2',
    'md:col-span-3 lg:col-span-5',
    'md:col-span-3 lg:col-span-5',
    'md:col-span-3 lg:col-span-4',
    'md:col-span-3 lg:col-span-4',
    'md:col-span-6 lg:col-span-4',
    'md:col-span-2 lg:col-span-4',
    'md:col-span-2 lg:col-span-4',
    'md:col-span-2 lg:col-span-4',
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero min-h-[100svh] flex items-center pt-[76px]">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="orb orb-c" />
        <div className="grid-lines" />
        <ParticleCanvas />

        <div className="container-x py-14 lg:py-20 grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow text-cerulean-300 reveal">
              <span className="dot" />
              Precious Metals Consulting LLC
            </p>
            <h1
              className="mt-6 font-display font-semibold text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-[4.6rem] xl:text-[5.2rem] reveal"
              style={{ '--d': '.08s' } as React.CSSProperties}
            >
              Transforming <span className="text-gradient">Resources</span>
              <br className="hidden sm:block" /> into{' '}
              <span className="italic font-light text-silver-300">Opportunities</span>
            </h1>
            <p
              className="mt-7 text-base sm:text-lg text-silver-300 max-w-xl leading-relaxed reveal"
              style={{ '--d': '.16s' } as React.CSSProperties}
            >
              At Precious Metals Consulting LLC, we connect investors with diamond
              mining, gold extraction, and real estate opportunities in Angola. With
              expertise in prospection, extraction, and marketing, we ensure seamless
              operations and profitable ventures, guiding businesses in both
              government and private sectors.
            </p>
            <div
              className="mt-9 flex flex-col sm:flex-row gap-3 reveal"
              style={{ '--d': '.24s' } as React.CSSProperties}
            >
              <Link to="/contact" className="btn btn-primary">
                Schedule a consultation
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link to="/services" className="btn btn-ghost-light">
                Learn more
                <ArrowDownRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <ul
              className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-silver reveal"
              style={{ '--d': '.32s' } as React.CSSProperties}
            >
              <li className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-cerulean-300" />
                Expert Investment Guidance
              </li>
              <li className="flex items-center gap-2">
                <Network className="w-4 h-4 text-cerulean-300" />
                Strong Industry Networks
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cerulean-300" />
                Trusted &amp; Secure Partnerships
              </li>
            </ul>
          </div>

          <div
            className="lg:col-span-5 relative reveal"
            style={{ '--d': '.2s' } as React.CSSProperties}
          >
            <div className="hero-visual aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] in">
              <img
                src="/assets/hero.png"
                alt="Polished silver, gold and rough diamonds on a brushed metal surface"
              />
              <div className="sheen" />
            </div>
            <div className="glass absolute -bottom-6 left-4 right-4 sm:left-auto sm:-left-8 sm:right-auto sm:w-72 rounded-2xl p-4 flex items-center gap-4 shadow-xl">
              <span className="w-11 h-11 rounded-xl bg-cerulean grid place-items-center shrink-0 text-white">
                <MapPin className="w-5 h-5" />
              </span>
              <div className="min-w-0">
                <p className="text-[11px] uppercase tracking-[.16em] text-silver">
                  Focus region
                </p>
                <p className="font-display font-medium text-white">Africa · Angola</p>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[11px] tracking-[.2em] uppercase text-silver-500 hover:text-white transition-colors"
        >
          Scroll
          <span className="w-px h-10 bg-gradient-to-b from-silver-500 to-transparent" />
        </a>
      </section>

      {/* MARQUEE */}
      <Marquee />

      {/* ABOUT SECTION */}
      <section id="about" className="bg-soft py-24 sm:py-32">
        <div className="container-x grid lg:grid-cols-12 gap-14 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative">
              <div className="img-reveal tile aspect-[3/4]">
                <img
                  src="/assets/diamond.png"
                  alt="Rough uncut diamond above a brushed silver surface"
                />
              </div>
              <div className="hidden sm:block absolute -right-6 -bottom-8 w-44 aspect-square tile border-[6px] border-soft img-reveal shadow-lg">
                <img
                  src="https://preciousmetalsconsultingllc.com/wp-content/uploads/2025/02/image-29.png"
                  alt="Precious Metals Consulting project"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pt-6">
            <p className="eyebrow text-cerulean reveal">
              <span className="dot" />
              Precious Metals Consulting LLC
            </p>
            <h2 className="mt-5 font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.04] reveal">
              About Our <span className="text-gradient-dark">Company</span>
            </h2>
            <div className="metal-rule my-10 reveal" />
            <p className="text-xl sm:text-2xl leading-snug text-jet font-display reveal">
              At Precious Metals Consulting LLC, we specialize in strategic
              investment opportunities across diamond mining, real estate,
              construction, oil extraction, and tourism in Africa, particularly
              Angola.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-8 text-silver-700 leading-relaxed">
              <p className="reveal">
                With years of experience and a strong network of industry
                professionals, we help entrepreneurs and businesses navigate complex
                markets and maximize their returns. Our expertise extends to
                prospection, extraction, and marketing of precious stones, ensuring
                that our clients have access to the most profitable and ethical
                opportunities.
              </p>
              <p
                className="reveal"
                style={{ '--d': '.08s' } as React.CSSProperties}
              >
                We also provide staff training and business consulting services,
                allowing companies to build a skilled and knowledgeable workforce
                that drives long-term success. By bridging the gap between government
                and private sector opportunities, we empower investors to explore
                untapped markets, establish sustainable business ventures, and
                expand their global footprint.
              </p>
            </div>

            <div className="mt-12 grid sm:grid-cols-3 gap-3">
              <div className="reveal rounded-2xl bg-white border border-silver-200 p-6">
                <Award className="w-6 h-6 text-cerulean" />
                <p className="mt-6 font-display font-semibold text-lg">Excellence</p>
              </div>
              <div
                className="reveal rounded-2xl bg-white border border-silver-200 p-6"
                style={{ '--d': '.06s' } as React.CSSProperties}
              >
                <Scale className="w-6 h-6 text-cerulean" />
                <p className="mt-6 font-display font-semibold text-lg">Integrity</p>
              </div>
              <div
                className="reveal rounded-2xl bg-jet text-white p-6"
                style={{ '--d': '.12s' } as React.CSSProperties}
              >
                <Sparkles className="w-6 h-6 text-rose" />
                <p className="mt-6 font-display font-semibold text-lg">Innovation</p>
              </div>
            </div>

            <p className="mt-6 text-sm text-silver-600 reveal">
              At Precious Metals Consulting LLC, we are committed to delivering
              excellence, integrity, and innovation in every project we undertake.
            </p>

            <div className="mt-10 flex flex-wrap gap-3 reveal">
              <Link to="/contact" className="btn btn-dark">
                Contact us
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Link>
              <Link to="/about" className="btn btn-ghost-dark">
                More about us
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES BENTO */}
      <section
        id="services"
        className="relative bg-jet text-soft py-24 sm:py-32 overflow-hidden isolate"
      >
        <div className="absolute -z-10 top-0 right-0 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-cerulean/20 blur-[140px]" />
        <div className="container-x">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <p className="eyebrow text-cerulean-300 reveal">
                <span className="dot" />
                Precious Metals Consulting LLC
              </p>
              <h2 className="mt-5 font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.04] reveal">
                Our <span className="text-gradient">Services</span>
              </h2>
            </div>
            <Link
              to="/services"
              className="btn btn-ghost-light self-start lg:self-auto reveal"
            >
              View all services
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div
            id="bento"
            className="mt-14 grid gap-4 md:grid-cols-6 lg:grid-cols-12 auto-rows-[minmax(0,auto)]"
          >
            {SERVICES.map((s, i) => {
              if (i === 0) {
                return (
                  <Link
                    key={s.id}
                    to={`/services#${s.id}`}
                    className={`reveal group relative tile min-h-[420px] lg:min-h-0 ${bentoSpans[i]} border border-white/10`}
                  >
                    <img
                      src={s.img}
                      alt={s.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-jet via-jet/50 to-transparent" />
                    <div className="absolute inset-0 bg-cerulean/0 group-hover:bg-cerulean/10 transition-colors duration-500" />
                    <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
                      <span className="chip bg-rose/15 text-rose-300 border border-rose/30">
                        <IconRenderer name={s.icon} className="w-3.5 h-3.5" />
                        Featured · {s.sub}
                      </span>
                      <h3 className="mt-5 font-display font-semibold text-3xl sm:text-4xl text-white">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-silver-300 max-w-md">{s.short}</p>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white">
                        Explore service
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </span>
                    </div>
                  </Link>
                );
              }

              if (i < 3) {
                return (
                  <Link
                    key={s.id}
                    to={`/services#${s.id}`}
                    className={`reveal group svc-dark ${bentoSpans[i]} p-3 flex gap-4 items-stretch`}
                    style={{ '--d': `${i * 0.05}s` } as React.CSSProperties}
                  >
                    <div className="tile w-28 sm:w-36 shrink-0 !rounded-2xl">
                      <img
                        src={s.img}
                        alt={s.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="py-3 pr-3 flex flex-col min-w-0">
                      <span className="w-9 h-9 rounded-lg bg-cerulean/15 text-cerulean-300 grid place-items-center">
                        <IconRenderer name={s.icon} className="w-4 h-4" />
                      </span>
                      <h3 className="mt-auto pt-6 font-display font-semibold text-lg sm:text-xl leading-tight text-white">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm text-silver line-clamp-2">
                        {s.short}
                      </p>
                    </div>
                  </Link>
                );
              }

              return (
                <Link
                  key={s.id}
                  to={`/services#${s.id}`}
                  className={`reveal group svc-dark ${bentoSpans[i]} p-6 sm:p-7 flex flex-col min-h-[220px]`}
                  style={{ '--d': `${(i % 3) * 0.05}s` } as React.CSSProperties}
                >
                  <div className="flex items-start justify-between">
                    <span className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-cerulean-300 grid place-items-center group-hover:text-rose group-hover:border-rose/40 transition-colors">
                      <IconRenderer name={s.icon} className="w-5 h-5" />
                    </span>
                    <span className="font-display text-sm text-silver-600">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-auto pt-8 font-display font-semibold text-xl text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-silver">{s.short}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONSULTATION SECTION */}
      <section
        id="consultation"
        className="bg-white py-24 sm:py-32 relative overflow-hidden"
      >
        <div className="absolute inset-x-0 top-0 h-[55%] bg-[linear-gradient(180deg,#E8F4F9,transparent)] pointer-events-none" />
        <div className="container-x relative grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <p className="eyebrow text-cerulean reveal">
              <span className="dot" />
              Schedule a Consultation
            </p>
            <h2 className="mt-5 font-display font-semibold text-4xl sm:text-5xl leading-[1.05] reveal">
              Invest in Africa’s{' '}
              <span className="text-gradient-dark">Diamond Future</span>
              <br />
              <span className="text-silver-600 font-normal">
                Partner with Us Today!
              </span>
            </h2>
            <p className="mt-7 text-lg text-silver-700 leading-relaxed max-w-xl reveal">
              Unlock unparalleled opportunities in diamond mining, real estate,
              oil extraction, and more with expert guidance. Let Precious Metals
              Consulting LLC help you navigate investments with confidence and
              strategic insight.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-xl">
              <div className="reveal rounded-2xl border border-silver-200 bg-soft p-6">
                <p className="text-xs uppercase tracking-[.16em] text-silver-600 font-semibold">
                  Satisfaction Level
                </p>
                <p className="mt-3 font-display font-semibold text-4xl text-jet">
                  99<span className="text-rose">%</span>
                </p>
                <div className="mt-4 h-1.5 rounded-full bg-silver-200 overflow-hidden">
                  <div className="h-full w-[99%] rounded-full bg-gradient-to-r from-cerulean to-rose" />
                </div>
              </div>

              <a
                href="tel:+16513924757"
                className="reveal group rounded-2xl bg-jet text-white p-6 flex flex-col justify-between"
                style={{ '--d': '.08s' } as React.CSSProperties}
              >
                <span className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[.16em] text-silver font-semibold">
                    USA Executive Desk
                  </span>
                  <PhoneCall className="w-5 h-5 text-cerulean-300 group-hover:text-rose transition-colors" />
                </span>
                <span className="mt-6 font-display font-semibold text-2xl text-white">
                  +1 651-392-4757
                </span>
              </a>
            </div>
          </div>

          <div
            className="lg:col-span-6 reveal"
            style={{ '--d': '.1s' } as React.CSSProperties}
          >
            <form
              onSubmit={handleConsultationSubmit}
              noValidate
              className="rounded-[28px] bg-soft border border-silver-200 p-6 sm:p-10 shadow-sm"
            >
              <h3 className="font-display font-semibold text-2xl text-jet">
                Schedule Your Consultation Today
              </h3>
              <p className="mt-2 text-sm text-silver-600">
                Share a few details and our team will reach out.
              </p>

              <div className="mt-8 grid gap-5">
                <div>
                  <label className="label" htmlFor="c-name">
                    Name
                  </label>
                  <input
                    id="c-name"
                    required
                    placeholder="Your full name"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors({ ...errors, name: false });
                    }}
                    className={`field ${errors.name ? 'invalid' : ''}`}
                  />
                </div>

                <div>
                  <label className="label" htmlFor="c-email">
                    Email
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: false });
                    }}
                    className={`field ${errors.email ? 'invalid' : ''}`}
                  />
                </div>

                <div>
                  <label className="label" htmlFor="c-msg">
                    Message
                  </label>
                  <textarea
                    id="c-msg"
                    required
                    placeholder="Tell us about your investment interests"
                    value={msg}
                    onChange={(e) => {
                      setMsg(e.target.value);
                      if (errors.msg) setErrors({ ...errors, msg: false });
                    }}
                    className={`field ${errors.msg ? 'invalid' : ''}`}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full sm:w-auto sm:justify-self-start"
                >
                  Submit
                  <Send className="w-4 h-4 ml-1" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section id="gallery" className="bg-soft py-24 sm:py-32">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-cerulean reveal">
                <span className="dot" />
                Our Work
              </p>
              <h2 className="mt-5 font-display font-semibold text-4xl sm:text-5xl leading-[1.05] reveal">
                Our <span className="text-gradient-dark">Gallery</span>
              </h2>
            </div>
            <Link
              to="/gallery"
              className="btn btn-ghost-dark self-start md:self-auto reveal"
            >
              Open full gallery
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div
            id="gallery-grid"
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
          >
            {galleryImages.map((imgSrc, i) => (
              <div
                key={i}
                onClick={() => openLightbox(galleryImages, i)}
                className={`tile group reveal ${galleryShapes[i]} bg-silver-200 cursor-pointer`}
                style={{ '--d': `${i * 0.05}s` } as React.CSSProperties}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    openLightbox(galleryImages, i);
                  }
                }}
                aria-label={`View gallery image ${i + 1}`}
              >
                <img
                  src={imgSrc}
                  alt={`Precious Metals Consulting gallery image ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <span className="absolute inset-0 bg-jet/0 group-hover:bg-jet/40 transition-colors duration-500 grid place-items-center">
                  <span className="w-12 h-12 rounded-full bg-white/90 text-jet grid place-items-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        id="testimonials"
        className="bg-white py-24 sm:py-32 border-t border-silver-200"
      >
        <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4">
            <p className="eyebrow text-cerulean reveal">
              <span className="dot" />
              Testimonial
            </p>
            <h2 className="mt-5 font-display font-semibold text-4xl sm:text-5xl leading-[1.05] reveal">
              What Clients <span className="text-gradient-dark">Say</span> About Us
            </h2>
          </div>
          <div className="lg:col-span-8 reveal">
            <TestimonialSlider testimonials={TESTIMONIALS} />
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <CtaBand
        title="Empower Your Workforce"
        highlight="Get Expert Training Now!"
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
};

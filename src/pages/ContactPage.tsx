import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Compass,
  Send,
} from 'lucide-react';
import { COMPANY, FAQS } from '../data';
import { CtaBand } from '../components/CtaBand';
import { useReveal } from '../hooks/useReveal';
import { useToast } from '../context/ToastContext';
import { dataService } from '../lib/dataService';
import { validateEmail } from '../lib/utils';

export const ContactPage: React.FC = () => {
  useReveal();
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'diamond-mining',
    scale: 'exploratory',
    timeframe: 'immediate',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: boolean } = {};

    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.email.trim() || !validateEmail(formData.email)) newErrors.email = true;
    if (!formData.message.trim()) newErrors.message = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const res = await dataService.submitConsultation(formData);

    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'diamond-mining',
      scale: 'exploratory',
      timeframe: 'immediate',
      message: '',
    });

    showToast(res.message);
  };

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero pt-[76px]">
        <div
          className="absolute -z-10 top-[-30%] right-[-10%] w-[650px] h-[650px] rounded-full blur-[90px]"
          style={{
            background: 'radial-gradient(circle,rgba(0,123,167,.55),transparent 65%)',
          }}
        />
        <div
          className="absolute -z-10 bottom-[-40%] left-[10%] w-[450px] h-[450px] rounded-full blur-[90px]"
          style={{
            background: 'radial-gradient(circle,rgba(255,77,141,.2),transparent 65%)',
          }}
        />
        <div className="grid-lines" />
        <div className="container-x py-20 sm:py-28 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <nav
              className="text-sm text-silver flex items-center gap-2 reveal"
              aria-label="Breadcrumb"
            >
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white">Contact Us</span>
            </nav>
            <h1
              className="mt-6 font-display font-semibold text-5xl sm:text-7xl lg:text-8xl leading-[.98] reveal"
              style={{ '--d': '.06s' } as React.CSSProperties}
            >
              Contact <span className="text-gradient">Our Team</span>
            </h1>
          </div>
          <p
            className="lg:col-span-4 text-silver-300 text-lg reveal"
            style={{ '--d': '.12s' } as React.CSSProperties}
          >
            Ready to explore high-yield diamond mining, real estate
            acquisitions, or resource extraction in Angola? Connect with our
            senior consultants today.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT & FORM */}
      <section className="bg-soft py-20 sm:py-32">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Company Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <p className="eyebrow text-cerulean reveal">
                  <span className="dot" />
                  Direct Advisory
                </p>
                <h2 className="mt-4 font-display font-semibold text-3xl sm:text-4xl text-jet leading-tight reveal">
                  Let's Discuss Your{' '}
                  <span className="text-gradient-dark">Next Venture</span>
                </h2>
                <p className="mt-4 text-silver-700 leading-relaxed reveal">
                  Whether you are an institutional fund, private investor, or
                  enterprise exploring mining concessions in Angola, our advisors
                  provide strategic clarity, regulatory roadmaps, and secure
                  execution.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
                <a
                  href={COMPANY.phoneHref}
                  className="reveal group p-6 rounded-2xl bg-white border border-silver-200 hover:border-cerulean-300 hover:shadow-lg transition-all flex items-start gap-4"
                >
                  <span className="w-12 h-12 rounded-xl bg-cerulean/10 text-cerulean grid place-items-center shrink-0 group-hover:bg-cerulean group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider font-semibold text-silver-500">
                      Call Us Directly
                    </p>
                    <p className="mt-1 font-display font-semibold text-lg text-jet">
                      {COMPANY.phone}
                    </p>
                    <p className="mt-0.5 text-xs text-silver-600">
                      Monday – Friday: 9am – 6pm CST
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY.email}`}
                  className="reveal group p-6 rounded-2xl bg-white border border-silver-200 hover:border-cerulean-300 hover:shadow-lg transition-all flex items-start gap-4"
                >
                  <span className="w-12 h-12 rounded-xl bg-cerulean/10 text-cerulean grid place-items-center shrink-0 group-hover:bg-cerulean group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider font-semibold text-silver-500">
                      Email Inquiries
                    </p>
                    <p className="mt-1 font-display font-semibold text-sm sm:text-base text-jet break-all">
                      {COMPANY.email}
                    </p>
                    <p className="mt-0.5 text-xs text-silver-600">
                      Response within 24 business hours
                    </p>
                  </div>
                </a>

                <div className="reveal p-6 rounded-2xl bg-white border border-silver-200 flex items-start gap-4">
                  <span className="w-12 h-12 rounded-xl bg-cerulean/10 text-cerulean grid place-items-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider font-semibold text-silver-500">
                      Headquarters
                    </p>
                    <p className="mt-1 font-display font-semibold text-base text-jet">
                      PO Box 211712
                    </p>
                    <p className="text-sm text-silver-700">
                      Eagan, MN 55121 USA
                    </p>
                  </div>
                </div>

                <div className="reveal p-6 rounded-2xl bg-jet text-white border border-white/10 flex items-start gap-4 shadow-xl">
                  <span className="w-12 h-12 rounded-xl bg-rose/20 text-rose grid place-items-center shrink-0">
                    <Compass className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider font-semibold text-rose-300">
                      Operations Hub
                    </p>
                    <p className="mt-1 font-display font-semibold text-base text-white">
                      Luanda &amp; Lunda Norte, Angola
                    </p>
                    <p className="text-xs text-silver-300 mt-0.5">
                      Direct on-site liaisons with mining concessions &amp;
                      government authorities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Consultation Form */}
            <div className="lg:col-span-7">
              <div className="rounded-[28px] bg-white border border-silver-200 p-8 sm:p-12 shadow-sm reveal">
                <div className="flex items-center gap-3 text-rose">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose animate-ping" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-rose">
                    Confidential Inquiries
                  </span>
                </div>
                <h3 className="mt-3 font-display font-semibold text-2xl sm:text-3xl text-jet">
                  Schedule a Consultation
                </h3>
                <p className="mt-2 text-sm text-silver-600">
                  Complete the form below to receive investment prospectuses and
                  scheduling options.
                </p>

                <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="label" htmlFor="cf-name">
                        Full Name *
                      </label>
                      <input
                        id="cf-name"
                        required
                        placeholder="Alexander Vance"
                        autoComplete="name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: false });
                        }}
                        className={`field ${errors.name ? 'invalid' : ''}`}
                      />
                    </div>
                    <div>
                      <label className="label" htmlFor="cf-email">
                        Work Email *
                      </label>
                      <input
                        id="cf-email"
                        type="email"
                        required
                        placeholder="alexander@group.com"
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: false });
                        }}
                        className={`field ${errors.email ? 'invalid' : ''}`}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="label" htmlFor="cf-phone">
                        Phone Number
                      </label>
                      <input
                        id="cf-phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="field"
                      />
                    </div>
                    <div>
                      <label className="label" htmlFor="cf-service">
                        Primary Sector of Interest
                      </label>
                      <select
                        id="cf-service"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="field"
                      >
                        <option value="diamond-mining">Diamond Mining (Angola)</option>
                        <option value="prospection">
                          Geological Prospection &amp; Survey
                        </option>
                        <option value="extraction">
                          Extractions &amp; Marketing of Stones
                        </option>
                        <option value="real-estate">
                          Real Estate &amp; Land Acquisition
                        </option>
                        <option value="construction">
                          Infrastructure &amp; Construction
                        </option>
                        <option value="oil-extraction">
                          Oil &amp; Energy Extraction
                        </option>
                        <option value="hospitality">Hospitality &amp; Tourism</option>
                        <option value="staff-training">
                          Staff &amp; Workforce Training
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="label" htmlFor="cf-scale">
                        Planned Investment Scale
                      </label>
                      <select
                        id="cf-scale"
                        value={formData.scale}
                        onChange={(e) =>
                          setFormData({ ...formData, scale: e.target.value })
                        }
                        className="field"
                      >
                        <option value="exploratory">
                          Exploratory / Initial Assessment
                        </option>
                        <option value="250k-1m">$250,000 – $1,000,000</option>
                        <option value="1m-5m">$1,000,000 – $5,000,000</option>
                        <option value="5m+">$5,000,000+</option>
                      </select>
                    </div>
                    <div>
                      <label className="label" htmlFor="cf-timeframe">
                        Target Timeframe
                      </label>
                      <select
                        id="cf-timeframe"
                        value={formData.timeframe}
                        onChange={(e) =>
                          setFormData({ ...formData, timeframe: e.target.value })
                        }
                        className="field"
                      >
                        <option value="immediate">
                          Immediate (Next 30–60 Days)
                        </option>
                        <option value="q1q2">Next 3–6 Months</option>
                        <option value="annual">Strategic 12-Month Plan</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="label" htmlFor="cf-msg">
                      Project Description &amp; Requirements *
                    </label>
                    <textarea
                      id="cf-msg"
                      required
                      placeholder="Please outline your objectives, target concessions or assets, and specific consulting needs..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message)
                          setErrors({ ...errors, message: false });
                      }}
                      className={`field ${errors.message ? 'invalid' : ''}`}
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="btn btn-primary w-full sm:w-auto !min-h-[52px] !px-8 text-base cursor-pointer"
                    >
                      Submit Consultation Request
                      <Send className="w-4 h-4 ml-1" />
                    </button>
                    <p className="text-xs text-silver-500 text-center sm:text-right">
                      Strict non-disclosure standards observed.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* FAQ SECTION */}
          <div className="mt-24 pt-16 border-t border-silver-200">
            <div className="max-w-3xl mx-auto text-center">
              <p className="eyebrow text-cerulean reveal">
                <span className="dot" />
                Due Diligence &amp; Advisory
              </p>
              <h2 className="mt-4 font-display font-semibold text-3xl sm:text-4xl text-jet reveal">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="mt-12 max-w-3xl mx-auto space-y-4">
              {FAQS.map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-white rounded-2xl border border-silver-200 p-6 reveal"
                >
                  <summary className="font-display font-semibold text-lg text-jet cursor-pointer list-none flex items-center justify-between">
                    <span>{faq.question}</span>
                    <span className="w-8 h-8 rounded-full bg-soft grid place-items-center text-cerulean group-open:rotate-180 transition-transform duration-300">
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </summary>
                  <p className="mt-4 text-silver-700 leading-relaxed text-sm">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <CtaBand
        title="Ready to Invest in Africa’s Prime Markets?"
        highlight="Speak Directly with our Senior Directors"
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
};

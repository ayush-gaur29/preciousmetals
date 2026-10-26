import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface CtaBandProps {
  title: string;
  highlight: string;
  buttonText?: string;
  buttonHref?: string;
}

export const CtaBand: React.FC<CtaBandProps> = ({
  title,
  highlight,
  buttonText = 'Contact Us',
  buttonHref = '/contact',
}) => {
  return (
    <section className="bg-soft py-20 sm:py-24">
      <div className="container-x">
        <div className="reveal relative overflow-hidden rounded-[28px] bg-cerulean text-white px-6 sm:px-12 lg:px-16 py-14 sm:py-16 isolate shadow-xl">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_10%,rgba(255,77,141,.35),transparent_45%),radial-gradient(ellipse_at_0%_100%,rgba(11,13,18,.55),transparent_55%)]" />
          <div className="absolute -right-16 -bottom-24 w-80 h-80 rounded-full border border-white/15 -z-10" />
          <div className="absolute -right-4 -bottom-12 w-56 h-56 rounded-full border border-white/20 -z-10" />
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl leading-[1.05] max-w-2xl">
              {title}
              <br />
              <span className="text-white/70">{highlight}</span>
            </h2>
            <Link
              to={buttonHref}
              className="btn bg-white text-jet hover:bg-soft self-start lg:self-auto font-medium"
            >
              {buttonText}
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

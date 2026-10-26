import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import type { Testimonial } from '../types';

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const count = testimonials.length;

  const goTo = useCallback((index: number) => {
    setCurrentIndex((index + count) % count);
  }, [count]);

  const next = useCallback(() => {
    goTo(currentIndex + 1);
  }, [currentIndex, goTo]);

  const prev = useCallback(() => {
    goTo(currentIndex - 1);
  }, [currentIndex, goTo]);

  const startAutoPlay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      timerRef.current = setInterval(() => {
        next();
      }, 7000);
    }
  }, [next]);

  const stopAutoPlay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [startAutoPlay, stopAutoPlay]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(diff) > 40) {
      if (diff < 0) {
        next();
      } else {
        prev();
      }
    }
    setTouchStartX(null);
  };

  return (
    <div
      className="relative rounded-[28px] bg-jet text-white overflow-hidden isolate"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <div className="absolute -z-10 -top-24 -right-24 w-80 h-80 rounded-full bg-cerulean/30 blur-[90px]" />
      <div className="absolute -z-10 -bottom-24 left-10 w-60 h-60 rounded-full bg-rose/15 blur-[90px]" />

      <div
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="t-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((t, idx) => {
            const initials = t.name
              .split(' ')
              .map((w) => w[0])
              .join('')
              .replace('.', '');

            return (
              <figure
                key={idx}
                className="t-slide px-7 sm:px-12 pt-10 sm:pt-14 pb-8"
                aria-hidden={idx !== currentIndex}
              >
                <Quote className="w-10 h-10 text-rose" />
                <blockquote className="mt-6 font-display text-xl sm:text-2xl lg:text-[1.7rem] leading-snug text-soft">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span className="w-12 h-12 rounded-full bg-gradient-to-br from-cerulean to-cerulean-700 grid place-items-center font-display font-semibold text-white">
                    {initials}
                  </span>
                  <span>
                    <span className="block font-semibold text-white">{t.name}</span>
                    <span className="block text-sm text-silver">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between px-7 sm:px-12 pb-8 sm:pb-10">
        <div className="flex gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`t-dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => goTo(idx)}
              aria-label={`Show testimonial ${idx + 1}`}
              aria-current={idx === currentIndex}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full border border-white/15 grid place-items-center hover:bg-white/10 transition-colors"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="w-4 h-4 text-white" />
          </button>
          <button
            onClick={next}
            className="w-11 h-11 rounded-full border border-white/15 grid place-items-center hover:bg-rose hover:border-rose transition-colors"
            aria-label="Next testimonial"
          >
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

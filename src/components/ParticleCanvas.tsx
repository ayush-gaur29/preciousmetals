import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  hue: 'rose' | 'blue' | 'silver';
  a: number;
  t: number;
}

export const ParticleCanvas: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let particles: Particle[] = [];
    let isVisible = true;

    const col = {
      blue: '92,200,240',
      silver: '220,228,238',
      rose: '255,120,170',
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(Math.min(60, w / 22));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.6 + 0.3,
        vx: (Math.random() - 0.5) * 0.12,
        vy: -(Math.random() * 0.18 + 0.04),
        hue: Math.random() < 0.12 ? 'rose' : Math.random() < 0.5 ? 'blue' : 'silver',
        a: Math.random() * 0.5 + 0.2,
        t: Math.random() * 6.28,
      }));
    };

    const io = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    io.observe(canvas);

    const tick = () => {
      if (isVisible && w > 0 && h > 0) {
        ctx.clearRect(0, 0, w, h);
        for (const p of particles) {
          p.x += p.vx;
          p.y += p.vy;
          p.t += 0.02;

          if (p.y < -5) {
            p.y = h + 5;
            p.x = Math.random() * w;
          }
          if (p.x < -5) p.x = w + 5;
          if (p.x > w + 5) p.x = -5;

          const a = p.a * (0.6 + 0.4 * Math.sin(p.t));
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${col[p.hue]},${a})`;
          ctx.fill();
        }
      }
      animId = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener('resize', resize);
    tick();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      io.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="particles"
      aria-hidden="true"
      className={className}
    />
  );
};

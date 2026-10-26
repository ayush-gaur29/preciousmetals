import { createIcons, icons } from 'https://cdn.jsdelivr.net/npm/lucide@0.469.0/+esm';
import { renderLayout } from './layout.js';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function boot(page, beforeIcons) {
  renderLayout(page);
  if (beforeIcons) beforeIcons();
  createIcons({ icons, attrs: { 'stroke-width': 1.75 } });
  initHeader(page);
  initDropdown();
  initMobileMenu();
  initReveal();
  initLightbox();
  initForms();
  initParticles();
  initSlider();
  document.querySelectorAll('[data-top]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); }));
  // Handle hash after dynamic render
  if (location.hash) {
    const el = document.querySelector(location.hash);
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'auto' }), 60);
  }
}

function initHeader() {
  const h = document.getElementById('site-header');
  const bar = document.getElementById('progress');
  const onScroll = () => {
    const y = window.scrollY;
    h.classList.toggle('scrolled', y > 20);
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initDropdown() {
  document.querySelectorAll('[data-dropdown]').forEach(dd => {
    const btn = dd.querySelector('button');
    let t;
    const open = () => { clearTimeout(t); dd.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); };
    const close = () => { t = setTimeout(() => { dd.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }, 120); };
    dd.addEventListener('mouseenter', open);
    dd.addEventListener('mouseleave', close);
    btn.addEventListener('click', () => dd.classList.contains('open') ? (clearTimeout(t), dd.classList.remove('open'), btn.setAttribute('aria-expanded', 'false')) : open());
    dd.addEventListener('focusout', e => { if (!dd.contains(e.relatedTarget)) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') { dd.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); } });
    document.addEventListener('click', e => { if (!dd.contains(e.target)) { dd.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); } });
  });
}

function initMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const burger = document.getElementById('burger');
  const set = (o) => {
    menu.classList.toggle('open', o);
    menu.setAttribute('aria-hidden', String(!o));
    burger.setAttribute('aria-expanded', String(o));
    document.documentElement.style.overflow = o ? 'hidden' : '';
  };
  burger.addEventListener('click', () => set(true));
  menu.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', () => set(false)));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => set(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') set(false); });
  addEventListener('resize', () => { if (innerWidth >= 1024) set(false); });
  menu.querySelectorAll('[data-msub]').forEach(b => b.addEventListener('click', () => {
    const sub = b.nextElementSibling;
    const o = !sub.classList.contains('open');
    sub.classList.toggle('open', o);
    b.setAttribute('aria-expanded', String(o));
    b.querySelector('svg').style.transform = o ? 'rotate(45deg)' : '';
  }));
}

function initReveal() {
  const els = document.querySelectorAll('.reveal, .img-reveal, .hero-visual');
  if (reduce || !('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
  }), { threshold: .12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(e => io.observe(e));
}

export function toast(msg) {
  const t = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  t.classList.add('show');
  clearTimeout(t._h);
  t._h = setTimeout(() => t.classList.remove('show'), 3600);
}

function initForms() {
  const validEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  document.querySelectorAll('form[data-validate], #newsletter').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      let ok = true;
      form.querySelectorAll('[required]').forEach(f => {
        const bad = !f.value.trim() || (f.type === 'email' && !validEmail(f.value.trim()));
        f.classList.toggle('invalid', bad);
        if (bad) ok = false;
      });
      if (!ok) { const first = form.querySelector('.invalid'); first && first.focus(); return; }
      form.reset();
      toast(form.id === 'newsletter' ? 'Thanks for subscribing.' : 'Thank you — your message has been received. We’ll be in touch soon.');
    });
    form.querySelectorAll('[required]').forEach(f => f.addEventListener('input', () => f.classList.remove('invalid')));
  });
}

let lbList = [], lbIdx = 0;
function initLightbox() {
  const lb = document.getElementById('lightbox');
  const img = lb.querySelector('img');
  const show = i => { lbIdx = (i + lbList.length) % lbList.length; img.src = lbList[lbIdx]; };
  const close = () => { lb.classList.remove('open'); document.documentElement.style.overflow = ''; };
  document.addEventListener('click', e => {
    const a = e.target.closest('[data-lb]');
    if (!a) return;
    e.preventDefault();
    lbList = [...document.querySelectorAll('[data-lb]')].filter(x => x.offsetParent !== null).map(x => x.getAttribute('data-lb'));
    show(lbList.indexOf(a.getAttribute('data-lb')));
    lb.classList.add('open');
    document.documentElement.style.overflow = 'hidden';
  });
  lb.querySelector('[data-lb-close]').addEventListener('click', close);
  lb.querySelector('[data-lb-prev]').addEventListener('click', () => show(lbIdx - 1));
  lb.querySelector('[data-lb-next]').addEventListener('click', () => show(lbIdx + 1));
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(lbIdx - 1);
    if (e.key === 'ArrowRight') show(lbIdx + 1);
  });
}

function initParticles() {
  const c = document.getElementById('particles');
  if (!c || reduce) return;
  const ctx = c.getContext('2d');
  let w, h, dpr, parts = [];
  const resize = () => {
    dpr = Math.min(devicePixelRatio || 1, 2);
    w = c.clientWidth; h = c.clientHeight;
    c.width = w * dpr; c.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round(Math.min(60, w / 22));
    parts = Array.from({ length: n }, () => ({
      x: Math.random() * w, y: Math.random() * h, r: Math.random() * 1.6 + .3,
      vx: (Math.random() - .5) * .12, vy: -(Math.random() * .18 + .04),
      hue: Math.random() < .12 ? 'rose' : (Math.random() < .5 ? 'blue' : 'silver'), a: Math.random() * .5 + .2, t: Math.random() * 6.28
    }));
  };
  const col = { blue: '92,200,240', silver: '220,228,238', rose: '255,120,170' };
  let visible = true;
  new IntersectionObserver(([e]) => visible = e.isIntersecting).observe(c);
  const tick = () => {
    if (visible) {
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.x += p.vx; p.y += p.vy; p.t += .02;
        if (p.y < -5) { p.y = h + 5; p.x = Math.random() * w; }
        if (p.x < -5) p.x = w + 5; if (p.x > w + 5) p.x = -5;
        const a = p.a * (.6 + .4 * Math.sin(p.t));
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.283);
        ctx.fillStyle = `rgba(${col[p.hue]},${a})`; ctx.fill();
      }
    }
    requestAnimationFrame(tick);
  };
  resize(); addEventListener('resize', resize); tick();
}

function initSlider() {
  const root = document.querySelector('[data-slider]');
  if (!root) return;
  const track = root.querySelector('.t-track');
  const slides = track.children.length;
  const dots = root.querySelectorAll('.t-dot');
  let i = 0, timer;
  const go = n => {
    i = (n + slides) % slides;
    track.style.transform = `translateX(-${i * 100}%)`;
    dots.forEach((d, k) => { d.classList.toggle('active', k === i); d.setAttribute('aria-current', k === i ? 'true' : 'false'); });
    [...track.children].forEach((s, k) => s.setAttribute('aria-hidden', String(k !== i)));
  };
  const auto = () => { clearInterval(timer); if (!reduce) timer = setInterval(() => go(i + 1), 7000); };
  root.querySelector('[data-prev]').addEventListener('click', () => { go(i - 1); auto(); });
  root.querySelector('[data-next]').addEventListener('click', () => { go(i + 1); auto(); });
  dots.forEach((d, k) => d.addEventListener('click', () => { go(k); auto(); }));
  let sx = null;
  track.addEventListener('touchstart', e => sx = e.touches[0].clientX, { passive: true });
  track.addEventListener('touchend', e => { if (sx == null) return; const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 40) { go(i + (dx < 0 ? 1 : -1)); auto(); } sx = null; });
  root.addEventListener('mouseenter', () => clearInterval(timer));
  root.addEventListener('mouseleave', auto);
  go(0); auto();
}

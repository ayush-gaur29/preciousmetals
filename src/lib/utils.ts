/**
 * Common Helper Utilities
 */

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function scrollToTop(smooth: boolean = true): void {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion || !smooth ? 'auto' : 'smooth',
  });
}

export function scrollToAnchor(id: string): void {
  const cleanId = id.startsWith('#') ? id.slice(1) : id;
  const element = document.getElementById(cleanId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export interface CompanyInfo {
  name: string;
  phone: string;
  phoneHref: string;
  email: string;
  executiveEmail: string;
  executivePhone: string;
  executivePhoneHref: string;
  address: string;
  headquarters: string;
  operationsHub: string;
  facebook: string;
  instagram: string;
}

export interface Service {
  id: string;
  title: string;
  sub?: string;
  icon: string;
  short: string;
  long: string;
  img: string;
}

export interface GalleryItem {
  src: string;
  title: string;
  cat: 'mining' | 'operations' | 'infrastructure';
  desc: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ConsultationSubmission {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  scale?: string;
  timeframe?: string;
  message: string;
}

export interface NewsletterSubmission {
  email: string;
}

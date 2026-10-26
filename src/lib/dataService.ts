import {
  COMPANY,
  SERVICES,
  GALLERY_ITEMS,
  TESTIMONIALS,
  FAQS,
} from '../data';
import type {
  CompanyInfo,
  Service,
  GalleryItem,
  Testimonial,
  FaqItem,
  ConsultationSubmission,
  NewsletterSubmission,
} from '../types';

/**
 * Data Service Abstraction Layer
 *
 * Keeps UI components isolated from data sources. Currently serves the local
 * prototype dataset and will seamlessly transition to Supabase RPC / table queries
 * when backend credentials are provided.
 */
export const dataService = {
  async getCompanyInfo(): Promise<CompanyInfo> {
    return Promise.resolve(COMPANY);
  },

  async getServices(): Promise<Service[]> {
    return Promise.resolve(SERVICES);
  },

  async getServiceById(id: string): Promise<Service | undefined> {
    const service = SERVICES.find((s) => s.id === id);
    return Promise.resolve(service);
  },

  async getGalleryItems(category: string = 'all'): Promise<GalleryItem[]> {
    if (category === 'all') {
      return Promise.resolve(GALLERY_ITEMS);
    }
    return Promise.resolve(GALLERY_ITEMS.filter((item) => item.cat === category));
  },

  async getTestimonials(): Promise<Testimonial[]> {
    return Promise.resolve(TESTIMONIALS);
  },

  async getFaqs(): Promise<FaqItem[]> {
    return Promise.resolve(FAQS);
  },

  async submitConsultation(
    data: ConsultationSubmission
  ): Promise<{ success: boolean; message: string }> {
    console.info('[DataService] Consultation submitted:', data);
    // In future: await supabase.from('consultations').insert([data]);
    return Promise.resolve({
      success: true,
      message: 'Thank you — your message has been received. We’ll be in touch soon.',
    });
  },

  async submitNewsletter(
    data: NewsletterSubmission
  ): Promise<{ success: boolean; message: string }> {
    console.info('[DataService] Newsletter subscription:', data);
    // In future: await supabase.from('newsletter_subscribers').insert([data]);
    return Promise.resolve({
      success: true,
      message: 'Thanks for subscribing.',
    });
  },
};

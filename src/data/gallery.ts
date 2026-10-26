import type { GalleryItem } from '../types';

const U = 'https://preciousmetalsconsultingllc.com/wp-content/uploads/';

export const GALLERY: string[] = [
  U + '2025/02/image-28.png',
  U + '2025/02/image-36.png',
  U + '2025/02/image-37.png',
  U + '2025/02/image-38.png',
  U + '2025/02/image-39.png',
  U + '2025/02/image-40.png',
  U + '2025/02/image-41.png',
  U + '2025/02/image-42.png',
  U + '2025/02/image-43.png',
  U + '2025/02/image-29.png',
  U + '2025/02/image-10-1.png',
  U + '2025/02/image-9-1.png',
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: '/assets/hero.png',
    title: 'Precious Metals & Uncut Rough Diamonds',
    cat: 'mining',
    desc: 'Sustainably sourced rough stones and polished precious metals ready for global marketing.',
  },
  {
    src: '/assets/diamond.png',
    title: 'Natural Gemstone Extractions',
    cat: 'mining',
    desc: 'High-purity raw diamonds from prime Angolan mineral concessions.',
  },
  {
    src: '/assets/landscape.png',
    title: 'Angola Mineral Concession Aerial Survey',
    cat: 'operations',
    desc: 'Geological mapping and terrain analysis for mining expansion.',
  },
  {
    src: GALLERY[0],
    title: 'Heavy Equipment & Extraction Site',
    cat: 'operations',
    desc: 'Modern alluvial mining machinery operating with precision and regulatory compliance.',
  },
  {
    src: GALLERY[9],
    title: 'On-Site Evaluation & Mineral Sampling',
    cat: 'operations',
    desc: 'Technical team conducting density and carats grading protocols in the field.',
  },
  {
    src: GALLERY[1],
    title: 'High-Purity Rough Diamond Batch',
    cat: 'mining',
    desc: 'Kimberlite & alluvial diamond lot ready for certification and export.',
  },
  {
    src: GALLERY[2],
    title: 'Industrial Sorting & Quality Verification',
    cat: 'mining',
    desc: 'State-of-the-art optical sorters evaluating diamond transparency and clarity.',
  },
  {
    src: GALLERY[3],
    title: 'Gold Prospecting & Washing Operations',
    cat: 'operations',
    desc: 'High-efficiency recovery operations adhering to environmental best practices.',
  },
  {
    src: GALLERY[10],
    title: 'Prime Urban Commercial Development',
    cat: 'infrastructure',
    desc: 'Strategic real estate assets providing high-yield returns in growing economic corridors.',
  },
  {
    src: GALLERY[11],
    title: 'Modern Industrial & Logistics Center',
    cat: 'infrastructure',
    desc: 'Supporting international supply chains and energy distribution networks.',
  },
  {
    src: GALLERY[4],
    title: 'Refinery & Stone Preparation Facilities',
    cat: 'operations',
    desc: 'End-to-end processing pipeline ensuring maximum yield and stone integrity.',
  },
  {
    src: GALLERY[5],
    title: 'Executive Resort & Hospitality Development',
    cat: 'infrastructure',
    desc: 'Luxury hospitality ventures catering to international investors and high-end tourism.',
  },
];

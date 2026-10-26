# Precious Metals Consulting LLC

A pixel-faithful, responsive React + TypeScript web application built with Vite and Tailwind CSS, converting the reference design into a maintainable, component-driven project architecture with future Supabase readiness.

---

## 💎 Features & Capabilities

- **Faithful Design System**: Deep Jet Black (`#0B0D12`), Cerulean Blue (`#007BA7`), and Neon Rose (`#FF4D8D`) micro-accents with Space Grotesk display headings and Inter body typography.
- **Interactive Component Architecture**:
  - **Dynamic Header & Navigation**: Glassmorphic elevation on scroll, interactive 2-column Services dropdown, phone shortcut, and responsive mobile slide-out sheet with animated accordions.
  - **Reading Scroll Progress**: Smooth gradient progress indicator tracking page scroll position.
  - **Particle Canvas**: High-performance HTML5 Canvas simulation with floating luminescent particles across the Hero section.
  - **Infinite Marquee**: Fluid ticker cycling through core service disciplines and precious mineral tags.
  - **Bento Grid**: Asymmetric layout showcasing featured and secondary services with hover transitions.
  - **Testimonial Slider**: Accessible carousel with auto-play (7s), touch-swipe gestures, dot navigation, and hover-pause.
  - **Lightbox Modal**: Fullscreen modal with image navigation (Prev, Next, Escape/Arrow key bindings) and backdrop dismissal.
  - **Interactive Consultation & Newsletter Forms**: Input validation, error states, and animated toast confirmation alerts.
  - **Jump Navigation & Filtering**: Smooth hash scrolling for detailed service rows and category-based tabs for the gallery.
- **Future Supabase Readiness**:
  - Fully decoupled data layer in `src/lib/dataService.ts`.
  - Reusable TypeScript interfaces in `src/types/`.
  - Integration boundary with environment variables in `src/lib/supabase.ts`.

---

## 📁 Project Structure

```text
preciousmetals/
├── public/
│   ├── assets/               # Static image assets (hero, diamond, landscape)
│   ├── icon.svg              # Gemstone brand SVG favicon & logo
│   └── favicon.svg
├── src/
│   ├── assets/               # Bundled assets & illustrations
│   ├── components/           # Reusable UI components
│   │   ├── CtaBand.tsx       # Radial-glow call-to-action banner
│   │   ├── Footer.tsx        # Footer with links, newsletter, and back-to-top
│   │   ├── Header.tsx        # Sticky header with mega dropdown & mobile trigger
│   │   ├── IconRenderer.tsx  # Dynamic Lucide icon mapping
│   │   ├── Marquee.tsx       # Looping ticker
│   │   ├── MobileMenu.tsx    # Slide-out drawer sheet with sub-accordions
│   │   ├── ParticleCanvas.tsx# Ambient floating particle simulation
│   │   ├── ScrollToTop.tsx   # Route change and hash anchor scroll handler
│   │   └── TestimonialSlider.tsx # Interactive client testimonial carousel
│   ├── context/
│   │   ├── LightboxContext.tsx # Fullscreen modal image viewer context
│   │   └── ToastContext.tsx    # Global alert/toast feedback context
│   ├── data/                 # Centralized prototype data
│   │   ├── company.ts        # Company contact details and metadata
│   │   ├── faq.ts            # Advisory FAQs
│   │   ├── gallery.ts        # Image arrays and categorized portfolio entries
│   │   ├── services.ts       # Service definitions, icons, descriptions, and media
│   │   ├── testimonials.ts   # Client testimonials and quotes
│   │   └── index.ts          # Barrel export
│   ├── hooks/                # Custom React hooks
│   │   ├── useHeaderScrolled.ts # Header scroll detection
│   │   ├── useReveal.ts         # IntersectionObserver scroll reveal animations
│   │   └── useScrollProgress.ts # Top scrollbar percentage calculator
│   ├── layouts/
│   │   └── RootLayout.tsx    # Shared shell with Header, Footer, and Providers
│   ├── lib/                  # Shared utilities and integration boundary
│   │   ├── dataService.ts    # Abstracted data access layer (Supabase-ready)
│   │   ├── supabase.ts       # Supabase client configuration stub
│   │   └── utils.ts          # Email validation and scroll helpers
│   ├── pages/                # Website page views
│   │   ├── AboutPage.tsx     # Mission, vision, and resource management
│   │   ├── ContactPage.tsx   # Direct advisory, form, and FAQ
│   │   ├── GalleryPage.tsx   # Filterable image grid and lightbox triggers
│   │   ├── HomePage.tsx      # Landing page, bento services, preview grids
│   │   └── ServicesPage.tsx  # Service jump index, alternating detailed rows
│   ├── types/                # Reusable TypeScript interfaces
│   │   └── index.ts          # Type declarations for entities and forms
│   ├── App.tsx               # Client-side router configuration
│   ├── index.css             # Tailwind directives and custom design tokens
│   └── main.tsx              # Application entry point
├── tailwind.config.js        # Tailwind CSS theme extension
├── postcss.config.js         # PostCSS configuration
├── vite.config.ts            # Vite configuration
└── package.json              # Project dependencies and build scripts
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (or yarn / pnpm)

### Installation
Dependencies are already installed. If setting up on a new environment, run:
```bash
npm install
```

### Running Locally (Development Server)
To start the Vite dev server with Hot Module Replacement (HMR):
```bash
npm run dev
```
The application will be accessible at [http://localhost:5173/](http://localhost:5173/).

### Building for Production
To validate TypeScript types and generate the optimized production bundle:
```bash
npm run build
```
Build output is saved to the `dist/` directory.

### Previewing the Production Build
To preview the generated production build locally:
```bash
npm run preview
```

---

## 🔌 Future Supabase Integration Guide

1. Install `@supabase/supabase-js`:
   ```bash
   npm install @supabase/supabase-js
   ```
2. Create a `.env.local` file with your credentials:
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```
3. Initialize the client in `src/lib/supabase.ts` and replace local array returns with Supabase queries in `src/lib/dataService.ts`. All UI components already consume `dataService`, so no visual or layout code needs to be altered.

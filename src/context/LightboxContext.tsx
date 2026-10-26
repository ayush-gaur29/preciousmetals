import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxContextType {
  openLightbox: (images: string[], initialIndex?: number) => void;
  closeLightbox: () => void;
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export const LightboxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openLightbox = useCallback((imageList: string[], initialIndex: number = 0) => {
    setImages(imageList);
    setCurrentIndex(initialIndex);
    setIsOpen(true);
    document.documentElement.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
    document.documentElement.style.overflow = '';
  }, []);

  const nextImage = useCallback(() => {
    if (images.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    if (images.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeLightbox, nextImage, prevImage]);

  return (
    <LightboxContext.Provider value={{ openLightbox, closeLightbox }}>
      {children}
      <div
        id="lightbox"
        role="dialog"
        aria-modal="true"
        aria-label="Image viewer"
        className={isOpen ? 'open' : ''}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeLightbox();
        }}
      >
        <button
          className="absolute top-4 right-4 w-12 h-12 rounded-full border border-white/20 text-white grid place-items-center hover:bg-white/10 transition-colors"
          onClick={closeLightbox}
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {images.length > 1 && (
          <button
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 text-white grid place-items-center hover:bg-white/10 transition-colors"
            onClick={prevImage}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {images.length > 0 && (
          <img
            src={images[currentIndex]}
            alt={`Enlarged view ${currentIndex + 1}`}
            className="select-none"
          />
        )}

        {images.length > 1 && (
          <button
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 text-white grid place-items-center hover:bg-white/10 transition-colors"
            onClick={nextImage}
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </LightboxContext.Provider>
  );
};

export const useLightbox = (): LightboxContextType => {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error('useLightbox must be used within a LightboxProvider');
  }
  return context;
};

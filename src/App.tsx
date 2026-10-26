import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="about.html" element={<Navigate to="/about" replace />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services.html" element={<Navigate to="/services" replace />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="gallery.html" element={<Navigate to="/gallery" replace />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="contact.html" element={<Navigate to="/contact" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';
import { ToastProvider } from '../context/ToastContext';
import { LightboxProvider } from '../context/LightboxContext';

export const RootLayout: React.FC = () => {
  return (
    <ToastProvider>
      <LightboxProvider>
        <ScrollToTop />
        <Header />
        <main id="content">
          <Outlet />
        </main>
        <Footer />
      </LightboxProvider>
    </ToastProvider>
  );
};

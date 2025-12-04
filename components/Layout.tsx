import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { PrivacyPolicy, Offer } from './LegalPages';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [modalPage, setModalPage] = useState<'privacy' | 'terms' | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer 
        onOpenPrivacy={() => setModalPage('privacy')}
        onOpenTerms={() => setModalPage('terms')}
      />

      {/* Modals */}
      {modalPage === 'privacy' && <PrivacyPolicy onClose={() => setModalPage(null)} />}
      {modalPage === 'terms' && <Offer onClose={() => setModalPage(null)} />}
    </div>
  );
};
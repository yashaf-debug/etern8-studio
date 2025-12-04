import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { PrivacyPolicy, Offer } from './components/LegalPages';

// Pages
import Home from './pages/Home';
import PhotoProduction from './pages/PhotoProduction';
import VideoProduction from './pages/VideoProduction';
import WebProduction from './pages/WebProduction';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [modalPage, setModalPage] = useState<'privacy' | 'terms' | null>(null);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen w-full bg-black text-white font-sans selection:bg-electric selection:text-white relative flex flex-col">
        
        {/* Global Noise Overlay */}
        <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.05] bg-noise"></div>

        <Header />
        
        <main className="flex-grow w-full relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/photo" element={<PhotoProduction />} />
            <Route path="/video" element={<VideoProduction />} />
            <Route path="/web" element={<WebProduction />} />
          </Routes>
        </main>

        <Footer 
          onOpenPrivacy={() => setModalPage('privacy')}
          onOpenTerms={() => setModalPage('terms')}
        />

        {/* Modals */}
        {modalPage === 'privacy' && <PrivacyPolicy onClose={() => setModalPage(null)} />}
        {modalPage === 'terms' && <Offer onClose={() => setModalPage(null)} />}

      </div>
    </Router>
  );
};

export default App;
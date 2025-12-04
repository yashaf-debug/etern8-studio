import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Header is always fixed with blur now as per requirement
  const headerStyles = "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b bg-black/80 backdrop-blur-xl border-white/10";

  const navLinks = [
    { name: 'Photo', href: '/photo' },
    { name: 'Video', href: '/video' },
    { name: 'Web', href: '/web' },
  ];

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={headerStyles}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="font-display font-extrabold text-xl md:text-2xl tracking-tighter text-white z-50 relative" onClick={closeMenu}>
          ETERN8
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`text-sm font-medium transition-colors font-mono uppercase tracking-widest cursor-pointer ${
                location.pathname === link.href ? 'text-white' : 'text-neutral-500 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* Right Side Actions */}
        <div className="flex items-center gap-3 md:gap-4 z-50">
          
          {/* Persistent CTA (Visible on Mobile & Desktop) */}
          <a href="https://t.me/yashaf" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-black hover:bg-neutral-200 px-3 py-1.5 md:px-5 md:py-2 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2 cursor-pointer hover:shadow-lg hover:shadow-white/20 rounded-sm">
              <span className="hidden md:inline">Связаться</span>
              <span className="md:hidden">START</span>
              <ArrowUpRight size={14} />
            </button>
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-white p-1"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black fixed top-0 left-0 right-0 pt-24 px-6 pb-6 overflow-hidden z-40 flex flex-col"
          >
            <nav className="flex flex-col gap-6 mt-10">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href}
                  onClick={closeMenu}
                  className="text-5xl font-display font-black text-white hover:text-electric transition-colors uppercase tracking-tighter"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            
            <div className="mt-auto pb-10">
              <p className="text-neutral-500 font-mono text-xs mb-4 uppercase tracking-widest">Контакты</p>
              <a href="https://t.me/yashaf" className="block text-xl text-white font-bold mb-2">@yashaf</a>
              <a href="mailto:hello@etern8.tech" className="block text-sm text-neutral-400">hello@etern8.tech</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
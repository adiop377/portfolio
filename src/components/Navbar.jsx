import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 w-full z-[1000] transition-all duration-300"
        style={{
          padding: scrolled ? '15px clamp(1rem, 5vw, 5%)' : '25px clamp(1rem, 5vw, 5%)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: scrolled ? 'rgba(10, 10, 12, 0.8)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
        }}
      >
        {/* Logo */}
        <div className="text-[clamp(1.2rem,3vw,1.5rem)] font-bold font-heading z-50 relative">
          <span className="text-white">AR/</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">PORTFOLIO</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link font-medium text-sm lg:text-base text-zinc-400 hover:text-white transition-colors relative">
              {link.name}
              <span className="nav-indicator absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden relative z-50 text-white p-2 rounded-lg bg-white/5 border border-white/10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} className="text-cyan-400" /> : <Menu size={24} />}
        </button>

        <style>{`
          .nav-link:hover .nav-indicator { width: 100%; }
        `}</style>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 + 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-black uppercase tracking-widest text-white hover:text-cyan-400 transition-colors"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {link.name}
              </motion.a>
            ))}
            
            {/* Mobile Status Indicator */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-10 flex items-center gap-3 text-xs text-zinc-500 uppercase tracking-widest"
            >
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse shadow-[0_0_10px_purple]" />
              System Active
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

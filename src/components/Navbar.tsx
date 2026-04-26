"use client";
import { useState, useEffect } from 'react';
import { Menu, X, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Energy Storage', href: '#' },
    { name: 'About Us', href: '#' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 pt-4 pointer-events-none">
      <motion.div 
        layout
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`pointer-events-auto w-full transition-all duration-300 flex items-center justify-between ${
          isScrolled 
            ? 'max-w-5xl bg-brand-bg/85 backdrop-blur-xl border border-white/10 rounded-full py-3 px-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)] mt-2' 
            : 'max-w-7xl bg-transparent py-4 px-6 rounded-none'
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-brand-secondary/10 flex items-center justify-center border border-brand-secondary/30 group-hover:bg-brand-secondary/20 transition-colors">
            <Sun className="w-6 h-6 text-brand-secondary" />
          </div>
          <span className="font-heading font-bold text-xl md:text-2xl tracking-tight text-white group-hover:text-brand-secondary transition-colors">
            IDEAL<span className="font-light opacity-80 hidden sm:inline">ENERGY</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-secondary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
          <button className="bg-brand-accent hover:bg-yellow-400 text-brand-primary font-bold py-2 px-5 rounded-full transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,193,7,0.4)] text-sm">
            Get Quote
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-brand-secondary transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </motion.div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-brand-bg/95 backdrop-blur-xl md:hidden flex flex-col pointer-events-auto"
          >
            <div className="p-6 flex justify-between items-center border-b border-white/10">
              <div className="flex items-center gap-2">
                <Sun className="w-6 h-6 text-brand-secondary" />
                <span className="font-heading font-bold text-xl text-white">
                  IDEAL<span className="font-light">ENERGY</span>
                </span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-brand-secondary p-2"
              >
                <X className="w-7 h-7" />
              </button>
            </div>
            
            <div className="flex flex-col px-6 py-8 gap-6 flex-grow">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-2xl font-heading font-semibold text-white hover:text-brand-secondary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-auto pb-8">
                <button className="w-full bg-brand-accent text-brand-primary font-bold py-4 rounded-xl text-lg hover:bg-yellow-400 transition-colors shadow-lg">
                  Get an Estimate Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

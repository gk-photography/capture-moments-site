import React, { useState, useEffect } from 'react';
import { Camera, Menu, X, Instagram, Facebook, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2 group">
          <Camera className={`w-8 h-8 transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`} />
          <span className={`text-xl font-bold tracking-tighter transition-colors ${isScrolled ? 'text-foreground' : 'text-white'}`}>
            GK PHOTOGRAPHY
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-muted-foreground' : 'text-white/80'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-4 ml-4">
            <Instagram className={`w-5 h-5 cursor-pointer hover:text-primary transition-colors ${isScrolled ? 'text-muted-foreground' : 'text-white/80'}`} />
            <Facebook className={`w-5 h-5 cursor-pointer hover:text-primary transition-colors ${isScrolled ? 'text-muted-foreground' : 'text-white/80'}`} />
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-foreground' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-foreground' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-foreground hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center space-x-6 pt-4 border-t border-border">
                <Instagram className="w-6 h-6 text-muted-foreground hover:text-primary cursor-pointer" />
                <Facebook className="w-6 h-6 text-muted-foreground hover:text-primary cursor-pointer" />
                <Twitter className="w-6 h-6 text-muted-foreground hover:text-primary cursor-pointer" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
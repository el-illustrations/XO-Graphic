import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ThemeToggle } from '@/components/ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-secondary/95 backdrop-blur-md border-b border-muted/20' 
          : 'bg-secondary/50 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Graphics */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="cursor-pointer relative"
            onClick={() => scrollToSection('hero')}
          >
            <div className="relative">
              {/* Animated background graphics */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-full blur-sm animate-pulse"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-transparent rounded-full opacity-50"></div>
              
              <img 
                src="/XO_Logo-removebg-preview.png" 
                alt="XO Graphics Logo" 
                className="h-14 w-auto relative z-10"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const textLogo = document.createElement('div');
                  textLogo.innerHTML = '<span class="text-white font-display font-bold text-xl">XO Graphics</span>';
                  target.parentNode?.appendChild(textLogo);
                }}
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-ping"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary/60 rounded-full animate-pulse"></div>
            </div>
          </motion.div>

          {/* Navigation with Graphics */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { label: 'Home', id: 'hero' },
              { label: 'Web Dev', id: 'web-development' },
              { label: 'Templates', id: 'canva-templates' },
              { label: 'Contact', id: 'contact' }
            ].map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  color: 'hsl(var(--primary))'
                }}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-primary transition-all duration-300 font-medium relative group font-display"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                
                {/* Decorative hover effect */}
                <div className="absolute -inset-2 bg-primary/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </motion.button>
            ))}
          </div>

          {/* Theme Toggle and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {/* Mobile Menu Button with Graphics */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2 text-white hover:text-primary transition-colors duration-300 relative"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="relative z-10">
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </motion.button>
          </div>
        </div>
      </nav>
      
      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
    </motion.header>
  );
};

export default Header;
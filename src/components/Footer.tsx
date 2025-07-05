import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Award, Users } from 'lucide-react';

const Footer = () => {
  const openPrivacyPolicy = () => {
    window.open('/privacy-policy', '_blank', 'noopener,noreferrer');
  };

  const openTermsOfService = () => {
    window.open('/terms-of-service', '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="py-16 px-4 bg-secondary relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <img 
              src="/lovable-uploads/xo-graphics-logo.png" 
              alt="XO Graphics Logo" 
              className="h-12 w-auto mb-4 opacity-90 brightness-0 invert"
              onError={(e) => {
                // Fallback to text logo if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const textLogo = document.createElement('div');
                textLogo.innerHTML = '<span class="text-white font-display font-bold text-xl">XO Graphics</span>';
                target.parentNode?.appendChild(textLogo);
              }}
            />
            <p className="text-secondary-foreground/80 text-sm mb-6 max-w-md">
              Designs that Click. Websites that Stick. We create stunning digital experiences that elevate your brand and engage your audience.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Award, text: "Premium Quality" },
                { icon: Users, text: "Client Focused" },
                { icon: Clock, text: "24/7 Support" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 text-xs text-secondary-foreground/60"
                >
                  <item.icon size={14} className="text-primary" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display font-semibold text-secondary-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              {[
                'Web Development',
                'UI/UX Design',
                'Canva Templates',
                'Digital Posters',
                'Brand Identity'
              ].map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5, color: 'hsl(var(--primary))' }}
                  transition={{ duration: 0.2 }}
                  className="cursor-pointer hover:text-primary"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display font-semibold text-secondary-foreground mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-secondary-foreground/70">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 cursor-pointer hover:text-primary transition-colors duration-300"
              >
                <Mail size={16} className="text-primary" />
                <a href="mailto:xographics1017@gmail.com" className="hover:text-primary">
                  xographics1017@gmail.com
                </a>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 cursor-pointer hover:text-primary transition-colors duration-300"
              >
                <Phone size={16} className="text-primary" />
                <a href="https://wa.me/918072888570" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  +91 80728 88570
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-secondary-foreground/10 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-xs text-secondary-foreground/60">
              © 2024 XO Graphics. All rights reserved.
            </div>
            <div className="flex space-x-6 text-xs text-secondary-foreground/60">
              <motion.button 
                whileHover={{ color: 'hsl(var(--primary))' }} 
                className="cursor-pointer hover:text-primary transition-colors duration-300"
                onClick={openPrivacyPolicy}
              >
                Privacy Policy
              </motion.button>
              <motion.button 
                whileHover={{ color: 'hsl(var(--primary))' }} 
                className="cursor-pointer hover:text-primary transition-colors duration-300"
                onClick={openTermsOfService}
              >
                Terms of Service
              </motion.button>
              <motion.span whileHover={{ color: 'hsl(var(--primary))' }} className="cursor-pointer">Sitemap</motion.span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating particles in footer */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-particle-light rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
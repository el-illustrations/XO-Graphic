import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('web-development');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.img 
            src="/XO_Logo-removebg-preview.png" 
            alt="XO Graphics" 
            className="mx-auto h-32 md:h-48 w-auto mb-4"
            whileHover={{ 
              scale: 1.05,
              filter: 'drop-shadow(0 0 20px hsl(var(--primary)))'
            }}
            transition={{ duration: 0.3 }}
            onError={(e) => {
              // Fallback to text if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const textFallback = document.createElement('div');
              textFallback.innerHTML = '<h1 class="text-6xl md:text-8xl font-display font-bold text-secondary mb-4 neon-glow-text">XO Graphics</h1>';
              target.parentNode?.appendChild(textFallback);
            }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium"
        >
          Designs that Click. Websites that Stick.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            onClick={scrollToNext}
            size="lg"
            className="neon-glow bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            Explore Our Work
          </Button>
        </motion.div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-particle-light rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
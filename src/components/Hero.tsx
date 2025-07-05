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
          <motion.h1 
            className="text-6xl md:text-8xl font-display font-bold text-secondary mb-4 neon-glow-text"
            whileHover={{ 
              scale: 1.05,
              textShadow: '0 0 20px hsl(var(--primary))'
            }}
            transition={{ duration: 0.3 }}
          >
            XO Graphics
          </motion.h1>
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
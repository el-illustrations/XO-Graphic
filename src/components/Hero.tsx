import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('web-development');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-center overflow-hidden">
      {/* Enhanced Background Graphics */}
      <div className="absolute inset-0">
        {/* Main gradient background - darker */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/80 to-background/60"></div>
        
        {/* Animated geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-gradient-to-r from-primary/20 to-transparent rotate-12 animate-bounce"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <motion.div
                key={i}
                className="border border-primary/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{
                  duration: 3,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content - Left Aligned */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
        <div className="flex items-center min-h-screen">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <motion.h1 
                className="text-6xl md:text-8xl font-display font-bold text-secondary dark:text-white mb-4 neon-glow-text"
                whileHover={{ 
                  scale: 1.05,
                  textShadow: '0 0 30px hsl(var(--primary))'
                }}
                transition={{ duration: 0.3 }}
              >
                XO Graphics
              </motion.h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium font-serif"
            >
              Designs that Click. Websites that Stick.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={scrollToNext}
                size="lg"
                className="neon-glow bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 font-display"
              >
                Explore Our Work
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 border-primary/50 hover:border-primary font-display"
              >
                Get In Touch
              </Button>
            </motion.div>
          </div>
          
          {/* Right side decorative elements */}
          <div className="hidden md:block w-1/3 lg:w-1/2 relative">
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {/* Large decorative circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-primary/30 rounded-full animate-spin-slow"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-primary/20 rounded-full animate-pulse"></div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute top-20 right-20 w-8 h-8 bg-primary rounded-full"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-32 right-32 w-6 h-6 bg-primary/60 rounded-full"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
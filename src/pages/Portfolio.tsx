import React from 'react';
import CustomCursor from '@/components/CustomCursor';
import ParticleBackground from '@/components/ParticleBackground';
import Hero from '@/components/Hero';
import WebDevelopment from '@/components/WebDevelopment';
import CanvaTemplates from '@/components/CanvaTemplates';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Portfolio = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <CustomCursor />
      <ParticleBackground />
      
      <main className="relative z-10">
        <Hero />
        <WebDevelopment />
        <CanvaTemplates />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Portfolio;
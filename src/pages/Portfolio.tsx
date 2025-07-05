import React from 'react';
import CustomCursor from '@/components/CustomCursor';
import ParticleBackground from '@/components/ParticleBackground';
import SmokyBackground from '@/components/SmokyBackground';
import Header from '@/components/Header';
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
      <SmokyBackground />
      <Header />
      
      <main className="relative z-10">
        <section id="hero">
          <Hero />
        </section>
        <section id="web-development">
          <WebDevelopment />
        </section>
        <section id="canva-templates">
          <CanvaTemplates />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default Portfolio;
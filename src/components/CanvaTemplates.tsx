import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Edit, Eye, Download } from 'lucide-react';
import MagneticCard from '@/components/MagneticCard';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const CanvaTemplates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);

  const templates = [
    {
      title: "Business Flyers",
      description: "Professional flyer templates for business promotion and marketing campaigns.",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=300&h=400&fit=crop",
      category: "Marketing",
      previewUrl: "https://www.canva.com/design/DAFxxx/preview",
      downloadUrl: "/templates/business-flyers.zip",
      canvaUrl: "https://canva.com/templates/business-flyers"
    },
    {
      title: "Social Media Posts",
      description: "Eye-catching Instagram and Facebook post templates for social media engagement.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=400&fit=crop",
      category: "Social Media",
      previewUrl: "https://www.canva.com/design/DAFyyy/preview",
      downloadUrl: "/templates/social-media-posts.zip",
      canvaUrl: "https://canva.com/templates/social-media"
    },
    {
      title: "Business Cards",
      description: "Modern business card designs that make a lasting professional impression.",
      image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=300&h=400&fit=crop",
      category: "Branding",
      previewUrl: "https://www.canva.com/design/DAFzzz/preview",
      downloadUrl: "/templates/business-cards.zip",
      canvaUrl: "https://canva.com/templates/business-cards"
    },
    {
      title: "Event Posters",
      description: "Dynamic poster templates for events, concerts, and special occasions.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=300&h=400&fit=crop",
      category: "Events",
      previewUrl: "https://www.canva.com/design/DAFaaa/preview",
      downloadUrl: "/templates/event-posters.zip",
      canvaUrl: "https://canva.com/templates/events"
    },
    {
      title: "Digital Brochures",
      description: "Interactive digital brochure templates for product showcases and services.",
      image: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=300&h=400&fit=crop",
      category: "Marketing",
      previewUrl: "https://www.canva.com/design/DAFbbb/preview",
      downloadUrl: "/templates/digital-brochures.zip",
      canvaUrl: "https://canva.com/templates/brochures"
    },
    {
      title: "Logo Templates",
      description: "Customizable logo templates for startups and established businesses.",
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=300&h=400&fit=crop",
      category: "Branding",
      previewUrl: "https://www.canva.com/design/DAFccc/preview",
      downloadUrl: "/templates/logo-templates.zip",
      canvaUrl: "https://canva.com/templates/logos"
    }
  ];

  const handleDownload = (template: any) => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = template.downloadUrl;
    link.download = `${template.title.replace(/\s+/g, '-').toLowerCase()}.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="canva-templates" className="py-20 px-4 bg-muted/20 dark:bg-muted/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="font-display font-bold text-4xl md:text-5xl mb-4 text-secondary dark:text-white"
          >
            Editable Canva Templates & Digital Posters
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-3xl mx-auto font-serif"
          >
            We provide editable flyers, posters, business cards, and digital templates – 
            similar to Etsy printable products. Ready-to-customize designs for your brand.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {templates.map((template, index) => (
            <motion.div key={index} variants={itemVariants}>
              <MagneticCard 
                className="h-full"
                sensitivity={0.35}
                magneticRange={140}
                glowIntensity={0.5}
              >
                <Card className="glass-card portfolio-card border-muted/30 overflow-hidden h-full backdrop-blur-md">
                  <div className="relative overflow-hidden">
                    <img
                      src={template.image}
                      alt={template.title}
                      className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="px-2 py-1 text-xs rounded-full font-medium bg-primary text-primary-foreground font-display">
                        {template.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg font-display font-semibold text-secondary dark:text-white">
                      {template.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground font-serif">
                      {template.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex gap-2">
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1 neon-glow font-display"
                      onClick={() => window.open(template.canvaUrl, '_blank')}
                    >
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Now
                    </Button>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="flex-1 font-display"
                          onClick={() => setSelectedTemplate(template)}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Preview
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <DialogHeader>
                          <DialogTitle className="font-display">{selectedTemplate?.title}</DialogTitle>
                          <DialogDescription className="font-serif">
                            {selectedTemplate?.description}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="mt-4">
                          <img
                            src={selectedTemplate?.image}
                            alt={selectedTemplate?.title}
                            className="w-full h-96 object-cover rounded-lg"
                          />
                          <div className="flex gap-4 mt-4">
                            <Button
                              onClick={() => window.open(selectedTemplate?.canvaUrl, '_blank')}
                              className="neon-glow font-display"
                            >
                              <Edit className="w-4 h-4 mr-2" />
                              Edit in Canva
                            </Button>
                            <Button
                              variant="outline"
                              onClick={() => handleDownload(selectedTemplate)}
                              className="font-display"
                            >
                              <Download className="w-4 h-4 mr-2" />
                              Download Template
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardFooter>
                </Card>
              </MagneticCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CanvaTemplates;
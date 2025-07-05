import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Edit, Eye } from 'lucide-react';

const CanvaTemplates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const templates = [
    {
      title: "Business Flyers",
      description: "Professional flyer templates for business promotion and marketing campaigns.",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=300&h=400&fit=crop",
      category: "Marketing"
    },
    {
      title: "Social Media Posts",
      description: "Eye-catching Instagram and Facebook post templates for social media engagement.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=400&fit=crop",
      category: "Social Media"
    },
    {
      title: "Business Cards",
      description: "Modern business card designs that make a lasting professional impression.",
      image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=300&h=400&fit=crop",
      category: "Branding"
    },
    {
      title: "Event Posters",
      description: "Dynamic poster templates for events, concerts, and special occasions.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=300&h=400&fit=crop",
      category: "Events"
    },
    {
      title: "Digital Brochures",
      description: "Interactive digital brochure templates for product showcases and services.",
      image: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=300&h=400&fit=crop",
      category: "Marketing"
    },
    {
      title: "Logo Templates",
      description: "Customizable logo templates for startups and established businesses.",
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=300&h=400&fit=crop",
      category: "Branding"
    }
  ];

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
    <section id="canva-templates" className="py-20 px-4 bg-muted/20">
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
            className="font-display font-bold text-4xl md:text-5xl mb-4 text-secondary"
          >
            Editable Canva Templates & Digital Posters
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
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
              <Card className="portfolio-card bg-card border-muted overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-1 text-xs rounded-full font-medium bg-primary text-primary-foreground">
                      {template.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg font-display font-semibold text-secondary">
                    {template.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {template.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex gap-2">
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1 neon-glow"
                    onClick={() => window.open('https://canva.com', '_blank')}
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Now
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="flex-1"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CanvaTemplates;
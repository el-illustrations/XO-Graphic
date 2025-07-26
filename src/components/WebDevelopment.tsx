import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import MagneticCard from '@/components/MagneticCard';
import VideoPreview from '@/components/VideoPreview';

const WebDevelopment = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Personal Portfolio",
      description: "Modern single-page portfolio showcasing creative work with smooth animations and responsive design.",
      videoSrc: "/videos/portfolio-preview.mp4", // You'll need to add this video
      posterSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      liveUrl: "https://graphic-portfolio-hariram.web.app/",
      status: "Live"
    },
    {
      title: "Nakshathra Resorts",
      description: "Luxury resort website featuring stunning visuals, booking system, and immersive user experience.",
      videoSrc: "/videos/nakshathra-preview.mp4", // You'll need to add this video
      posterSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      liveUrl: "https://nakshathraresorts.web.app/#",
      status: "Live"
    },
    {
      title: "FC Meena Turf",
      description: "Sports facility website with booking features, gallery, and facility information for football enthusiasts.",
      videoSrc: "/videos/fc-meena-preview.mp4", // You'll need to add this video
      posterSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      liveUrl: "https://fc-meena-turf.web.app/",
      status: "Live"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="web-development" className="py-20 px-4">
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
            Static Website Development
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto font-serif"
          >
            I create modern single-page websites for personal and business branding with cutting-edge design and smooth animations.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <MagneticCard 
                className="h-full"
                sensitivity={0.3}
                magneticRange={120}
                glowIntensity={0.4}
              >
                <Card className="glass-card border-muted/30 overflow-hidden backdrop-blur-md h-full">
                  <div className="relative overflow-hidden">
                    <VideoPreview
                      src={project.videoSrc}
                      poster={project.posterSrc}
                      className="w-full h-48"
                    />
                    <div className="absolute top-2 right-2">
                      <span className={`px-2 py-1 text-xs rounded-full font-medium font-display ${
                        project.status === 'Live' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg font-display font-semibold text-secondary dark:text-white">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground font-serif">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button
                      variant={project.status === 'Live' ? 'default' : 'secondary'}
                      size="sm"
                      className={`${project.status === 'Live' ? 'neon-glow' : ''} font-display`}
                      onClick={() => project.status === 'Live' && window.open(project.liveUrl, '_blank')}
                      disabled={project.status !== 'Live'}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live
                    </Button>
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

export default WebDevelopment;
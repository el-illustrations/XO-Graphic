import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Mail } from 'lucide-react';
import { Instagram } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactMethods = [
    {
      name: "WhatsApp",
      description: "Chat with us instantly for quick responses",
      url: "https://wa.me/918072888570",
      icon: MessageCircle,
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600"
    },
    {
      name: "Instagram",
      description: "Follow us for latest updates and designs",
      url: "https://www.instagram.com/_xographics_/",
      icon: Instagram,
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      hoverColor: "hover:from-purple-600 hover:to-pink-600"
    },
    {
      name: "Email",
      description: "Send us detailed project requirements",
      url: "mailto:xographics1017@gmail.com",
      icon: Mail,
      color: "bg-primary",
      hoverColor: "hover:bg-primary/90"
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
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
            Let's Create Something Amazing
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Ready to bring your vision to life? Get in touch and let's discuss your next project.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {contactMethods.map((method, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="portfolio-card bg-card border-muted overflow-hidden h-full">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-2 text-secondary">
                    {method.name}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-sm">
                    {method.description}
                  </p>
                  <Button
                    className={`w-full neon-glow ${method.color} ${method.hoverColor} text-white border-0`}
                    onClick={() => window.open(method.url, '_blank')}
                  >
                    Contact via {method.name}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional particles for contact section */}
        <div className="relative mt-16">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-particle-medium rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 50}px`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0.1, 0.6, 0.1],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
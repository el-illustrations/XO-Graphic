import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const SmokyBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      opacity: number;
      life: number;
      maxLife: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = () => {
      return {
        x: Math.random() * canvas.width,
        y: canvas.height + 50,
        radius: Math.random() * 60 + 20,
        vx: (Math.random() - 0.5) * 0.5,
        vy: -Math.random() * 0.8 - 0.2,
        opacity: 0,
        life: 0,
        maxLife: Math.random() * 300 + 200
      };
    };

    const updateParticles = () => {
      // Add new particles more frequently
      if (Math.random() < 0.05) {
        particles.push(createParticle());
      }

      particles = particles.filter(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        // Enhanced fade in and out
        if (particle.life < particle.maxLife * 0.2) {
          particle.opacity = particle.life / (particle.maxLife * 0.2) * 0.3;
        } else if (particle.life > particle.maxLife * 0.8) {
          particle.opacity = (particle.maxLife - particle.life) / (particle.maxLife * 0.2) * 0.3;
        } else {
          particle.opacity = 0.25;
        }

        return particle.life < particle.maxLife && particle.y > -100;
      });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.radius
        );
        gradient.addColorStop(0, `rgba(209, 209, 209, ${particle.opacity * 2})`);
        gradient.addColorStop(0.5, `rgba(227, 227, 227, ${particle.opacity * 1.5})`);
        gradient.addColorStop(1, `rgba(209, 209, 209, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{ mixBlendMode: 'multiply' }}
      />
      
      {/* Additional floating smoke elements */}
      <div className="fixed inset-0 pointer-events-none z-[1]">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-particle-light/20 to-particle-medium/10 blur-xl"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.2, 1],
              opacity: [0.6, 0.3, 0.6],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default SmokyBackground;
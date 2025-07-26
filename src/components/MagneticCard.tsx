import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface MagneticCardProps {
  children: React.ReactNode;
  className?: string;
  sensitivity?: number;
  magneticRange?: number;
  glowIntensity?: number;
}

const MagneticCard: React.FC<MagneticCardProps> = ({
  children,
  className = '',
  sensitivity = 0.4,
  magneticRange = 150,
  glowIntensity = 0.3,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;

    let animationId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - cardCenterX;
      const distanceY = e.clientY - cardCenterY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      // Update mouse position for glow effect
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });

      if (distance < magneticRange) {
        const strength = Math.max(0, 1 - distance / magneticRange);
        const moveX = distanceX * sensitivity * strength;
        const moveY = distanceY * sensitivity * strength;
        
        // 3D transform calculations
        const rotateX = (distanceY / rect.height) * 15 * strength;
        const rotateY = -(distanceX / rect.width) * 15 * strength;
        const scale = 1 + strength * 0.08;

        // Smooth animation using GSAP
        gsap.to(card, {
          x: moveX,
          y: moveY,
          rotateX: rotateX,
          rotateY: rotateY,
          scale: scale,
          duration: 0.4,
          ease: 'power2.out',
        });

        // Glow effect
        gsap.to(glow, {
          opacity: strength * glowIntensity,
          scale: 1 + strength * 0.1,
          duration: 0.3,
          ease: 'power2.out',
        });

        setIsHovered(true);
      } else if (isHovered) {
        // Reset animation
        gsap.to(card, {
          x: 0,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
        });

        gsap.to(glow, {
          opacity: 0,
          scale: 1,
          duration: 0.4,
          ease: 'power2.out',
        });

        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
      });

      gsap.to(glow, {
        opacity: 0,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out',
      });

      setIsHovered(false);
    };

    // Use requestAnimationFrame for smooth performance
    const smoothMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(animationId);
      animationId = requestAnimationFrame(() => handleMouseMove(e));
    };

    document.addEventListener('mousemove', smoothMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', smoothMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, [sensitivity, magneticRange, glowIntensity, isHovered]);

  return (
    <div
      ref={cardRef}
      className={`
        relative transform-gpu perspective-1000 
        ${className}
      `}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Glow effect */}
      <div
        ref={glowRef}
        className="absolute inset-0 rounded-lg opacity-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
            hsl(var(--primary) / 0.4) 0%, 
            hsl(var(--primary) / 0.2) 30%, 
            transparent 70%)`,
          filter: 'blur(20px)',
        }}
      />
      
      {/* Animated border */}
      <div 
        className={`absolute inset-0 rounded-lg transition-opacity duration-300 pointer-events-none ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: `linear-gradient(45deg, 
            hsl(var(--primary) / 0.6), 
            transparent, 
            hsl(var(--primary) / 0.6))`,
          padding: '2px',
        }}
      >
        <div className="w-full h-full bg-card rounded-lg" />
      </div>

      {/* Ripple effect */}
      {isHovered && (
        <div 
          className="absolute rounded-full pointer-events-none animate-ping"
          style={{
            left: mousePosition.x - 10,
            top: mousePosition.y - 10,
            width: '20px',
            height: '20px',
            background: 'hsl(var(--primary) / 0.3)',
          }}
        />
      )}

      {/* Shadow pulse */}
      <div 
        className={`absolute inset-0 rounded-lg transition-all duration-300 pointer-events-none ${
          isHovered ? 'shadow-2xl shadow-primary/20' : 'shadow-lg'
        }`}
        style={{
          filter: isHovered ? 'drop-shadow(0 0 20px hsl(var(--primary) / 0.3))' : 'none',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default MagneticCard;
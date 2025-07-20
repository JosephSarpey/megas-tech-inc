/* eslint-disable jsx-a11y/alt-text */
"use client";

import { useRef, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import gsap from 'gsap';

interface GlassmorphicImageProps extends Omit<ImageProps, 'ref'> {
  containerClassName?: string;
  glassIntensity?: number;
  tiltIntensity?: number;
}

const GlassmorphicImage = ({
  containerClassName = '',
  glassIntensity = 0.2,
  tiltIntensity = 10,
  className = '',
  ...props
}: GlassmorphicImageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !overlayRef.current) return;

    const container = containerRef.current;
    const overlay = overlayRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return;
      
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      // Tilt effect
      gsap.to(container, {
        rotateY: x * tiltIntensity,
        rotateX: -y * tiltIntensity,
        duration: 1.5,
        ease: 'power2.out'
      });

      // Light reflection effect
      gsap.to(overlay, {
        background: `radial-gradient(
          circle at ${x * 50 + 50}% ${y * 50 + 50}%, 
          rgba(255, 255, 255, ${glassIntensity * 1.5}) 0%, 
          rgba(255, 255, 255, ${glassIntensity * 0.5}) 40%, 
          rgba(255, 255, 255, 0) 70%
        )`,
        duration: 1.5,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(container, {
        rotateY: 0,
        rotateX: 0,
        duration: 1,
        ease: 'elastic.out(1, 0.5)'
      });
      
      gsap.to(overlay, {
        background: `rgba(255, 255, 255, ${glassIntensity * 0.5})`,
        duration: 1,
        ease: 'power2.out'
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [glassIntensity, tiltIntensity]);

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${containerClassName}`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      <div className="relative w-full h-full">
        <Image
          ref={imageRef}
          className={`w-full h-full object-cover transition-transform duration-300 ${className}`}
          {...props}
        />
        <div 
          ref={overlayRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `rgba(255, 255, 255, ${glassIntensity * 0.5})`,
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: 'inherit',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        />
      </div>
    </div>
  );
};

export default GlassmorphicImage;

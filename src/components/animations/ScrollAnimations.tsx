"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimations = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero section animation
    if (heroRef.current) {
      gsap.from(heroRef.current.querySelectorAll('h1, p, div'), {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });

      // Image reveal animation
      gsap.from(heroRef.current.querySelector('img'), {
        scale: 0.9,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
        delay: 0.3
      });
    }

    // Stats counter animation
    if (statsRef.current) {
      const statItems = statsRef.current.querySelectorAll('.stat-item');
      
      statItems.forEach((item, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'back.out(1.7)'
        });
      });
    }

    // Team cards animation
    if (teamRef.current) {
      const teamCards = teamRef.current.querySelectorAll('.team-card');
      
      teamCards.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          x: index % 2 === 0 ? -50 : 50,
          opacity: 0,
          rotationY: 10,
          duration: 0.8,
          delay: index * 0.15,
          ease: 'power3.out'
        });
      });
    }

    // Image parallax effect
    const parallaxImages = document.querySelectorAll('.parallax-image');
    parallaxImages.forEach((image) => {
      gsap.to(image, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: image,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });

  }, []);

  // This component doesn't render anything itself
  return null;
};

export default ScrollAnimations;

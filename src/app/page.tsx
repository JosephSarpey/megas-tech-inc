"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '@/components/ui/Button';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import BackToTop from '@/components/ui/BackToTop';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperRef>(null);

  // Array of background images for the carousel
  const heroImages = [
    '/hero-bg-1.jpeg',
    '/hero-bg-2.jpeg',
    '/hero-bg-3.webp',
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate elements in sequence
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      // Add null check for headingRef.current
      const headingSpans = headingRef.current?.querySelectorAll('span');
      const subheading = subheadingRef.current;
      const cta = ctaRef.current;
      
      if (headingSpans) {
        tl.fromTo(
          Array.from(headingSpans),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'back.out(1.7)',
          }
        );
      }

      if (subheading) {
        tl.fromTo(
          subheading,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.4'
        );
      }

      if (cta) {
        tl.fromTo(
          cta,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.4'
        );
      }

      // Parallax effect
      if (heroRef.current) {
        gsap.to(heroRef.current, {
          y: '15%',
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative flex items-center justify-center min-h-screen pt-16 -mt-16 overflow-hidden"
      >
        {/* Background Carousel */}
        <div className="absolute inset-0 -z-10">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, EffectFade]}
            effect="fade"
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            speed={1000}
            className="w-full h-full"
          >
            {heroImages.map((image, index) => (
              <SwiperSlide key={index} className="relative w-full h-full">
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '100%',
                    transform: 'translateZ(0)' // Force GPU acceleration
                  }}
                >
                  <div className="absolute inset-0 bg-black/50"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Overlay elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-secondary/30"></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
          
          {/* Animated elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent/10 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-accent/10 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 
              ref={headingRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              <span className="block">Innovative</span>
              <span className="block text-accent neon-text">Technology</span>
              <span className="block">Solutions</span>
            </h1>
            
            <p 
              ref={subheadingRef}
              className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
            >
              Transforming ideas into digital reality with cutting-edge web development, 
              stunning UI/UX design, and expert tech consulting.
            </p>
            
            <div ref={ctaRef} className="flex flex-col sm:flex-row justify-center gap-4 relative z-20">
              <Button 
                as="a"
                href="/services" 
                variant="primary" 
                size="lg"
                className="group relative z-10"
                withArrow
              >
                Our Services
              </Button>
              <Link 
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium rounded-full border border-white/30 bg-transparent text-white hover:bg-accent/10 hover:border-accent hover:text-accent transition-all duration-300 group"
              >
                About Us
                <FiArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-20 relative z-10">
              <a 
                href="#services" 
                className="inline-flex flex-col items-center text-gray-300 hover:text-accent transition-colors duration-300"
                aria-label="Scroll down"
              >
                <span className="text-sm mb-2">Scroll Down</span>
                <div className="w-10 h-16 rounded-full border-2 border-gray-400 flex justify-center p-1">
                  <div className="w-1 h-4 bg-accent rounded-full animate-bounce"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative py-20 md:py-28 lg:py-36 bg-primary">
        <Projects />
      </section>
      <Services />
      <Testimonials />
      <Contact />
      <BackToTop />
    </main>
  );
}

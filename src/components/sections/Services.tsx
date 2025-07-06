"use client";

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiCode, FiLayers, FiTool, FiMessageSquare, FiArrowRight } from 'react-icons/fi';
import Button from '@/components/ui/Button';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <FiCode className="w-8 h-8" />,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies to deliver exceptional user experiences and robust functionality.',
    features: ['React/Next.js', 'Node.js', 'RESTful APIs', 'Database Design'],
  },
  {
    icon: <FiLayers className="w-8 h-8" />,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces designed with the user in mind to drive engagement and conversions.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'UI Development'],
  },
  {
    icon: <FiTool className="w-8 h-8" />,
    title: 'Maintenance & Support',
    description: 'Ongoing support and maintenance to keep your digital products running smoothly and securely.',
    features: ['Performance Optimization', 'Security Updates', 'Bug Fixes', 'Technical Support'],
  },
  {
    icon: <FiMessageSquare className="w-8 h-8" />,
    title: 'Tech Consulting',
    description: 'Expert guidance to help you make informed technology decisions for your business.',
    features: ['Technology Audit', 'Solution Architecture', 'Digital Strategy', 'Team Training'],
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    return () => {
      cardsRef.current = [];
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Animate cards
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: index * 0.15,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="relative bg-gray-900 overflow-hidden py-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/30 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-accent bg-accent/10 rounded-full mb-4">
            Our Services
          </span>
          <h2 ref={headingRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Comprehensive <span className="text-accent">Tech Solutions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            We offer a wide range of technology services to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={el => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group relative bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:scale-105 hover:shadow-accent/10 overflow-hidden"
            >
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center bg-accent/10 text-accent rounded-xl mb-6 relative z-10">
                {service.icon}
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg className="w-4 h-4 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  href="/services" 
                  variant="ghost" 
                  size="sm"
                  className="group-hover:text-accent group-hover:pl-1 transition-all duration-300"
                >
                  Learn more
                  <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button 
            href="/services" 
            variant="accent" 
            size="lg"
            className="group"
            withArrow
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

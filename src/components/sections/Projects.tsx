/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '@/components/ui/Button';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A scalable online store with seamless checkout and modern UI.",
    image: "/project1.jpg",
    link: "#"
  },
  {
    title: "SaaS Dashboard",
    description: "A robust analytics dashboard for business insights.",
    image: "/project2.jpg",
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio with interactive animations and responsive design.",
    image: "/project3.jpg",
    link: "#"
  }
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    return () => {
      cardsRef.current = [];
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    <div ref={sectionRef} className="relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full filter blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-accent bg-accent/10 rounded-full mb-4">
            Our Projects
          </span>
          <h2 ref={headingRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Recent <span className="text-accent">Work</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Explore some of our latest projects showcasing our expertise in web development, design, and technology solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              ref={el => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group block bg-white/10 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-accent/20 transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-56 bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <span className="inline-flex items-center text-accent font-semibold group-hover:underline">
                  View Project
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button 
            href="/projects" 
            variant="accent" 
            size="lg"
            className="group"
            withArrow
          >
            View All Projects
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
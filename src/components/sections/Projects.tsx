/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef, useEffect } from "react";
import { animate, stagger } from "animejs";
import { useInView } from "react-intersection-observer";
import Button from "@/components/ui/Button";
import { LuArrowRight, LuExternalLink } from "react-icons/lu";

const projects = [
  {
    title: "Finance Management System",
    description:
      "A comprehensive financial OS for savings and loans. Features robust loan management, customer tracking, and real-time financial reporting.",
    image: "/unique-susu.jpg",
    link: "/projects/finance-management-system",
    tag: "FinTech",
  },
  {
    title: "Online Coffee Shop",
    description:
      "A modern coffee roasters e-commerce storefront with smooth GSAP animations and a highly optimized checkout flow.",
    image: "/safari-roast.jpg",
    link: "/projects/safari-roast",
    tag: "E-Commerce",
  },
  {
    title: "Scalable E-Commerce Platform",
    description:
      "A high-conversion online platform designed for scale with seamless payment integrations and a modern UI architecture.",
    image: "/vestraversa.jpg",
    link: "/projects/ecommerce-platform",
    tag: "Web App",
  },
];

const Projects = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    return () => {
      cardsRef.current = [];
    };
  }, []);

  useEffect(() => {
    if (inView) {
      // Set initial state
      if (headerRef.current) {
        headerRef.current.style.opacity = "0";
      }
      cardsRef.current.forEach((card) => {
        if (card) card.style.opacity = "0";
      });

      if (headerRef.current) {
        animate(headerRef.current, {
          y: [20, 0],
          opacity: [0, 1],
          duration: 700,
          ease: "outCubic",
        });
      }

      const validCards = cardsRef.current.filter(
        (card): card is HTMLDivElement => card !== null,
      );
      if (validCards.length > 0) {
        animate(validCards, {
          y: [24, 0],
          opacity: [0, 1],
          duration: 600,
          delay: stagger(120),
          ease: "outCubic",
        });
      }
    }
  }, [inView]);

  return (
    <div ref={sectionRef} className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div ref={headerRef} className="text-center mb-16">
        <span className="label-pill mb-4 inline-flex shadow-[0_0_20px_rgba(16,185,129,0.15)]">
          Our Projects
        </span>
        <h2
          className="text-white mb-4"
          style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
        >
          Recent <span className="text-accent">Work</span>
        </h2>
        <p className="text-[#A1A1AA] text-lg max-w-2xl mx-auto leading-relaxed">
          Explore some of the works we delivered to our clients.
        </p>
      </div>

      {/* Moving Wheel / Marquee */}
      <div className="relative w-full overflow-hidden py-10 flex group/marquee">
        {/* We use two containers to ensure seamless looping */}
        <div className="flex w-max animate-marquee gap-6 group-hover/marquee:[animation-play-state:paused]">
          {[...projects, ...projects, ...projects, ...projects].map(
            (project, index) => (
              <div
                key={`${project.title}-${index}`}
                className="w-[320px] md:w-[450px] shrink-0"
                ref={(el) => {
                  if (el && index < projects.length)
                    cardsRef.current[index] = el;
                }}
              >
                <a
                  href={project.link}
                  className="group flex flex-col h-[400px] bg-[#121214] border border-white/5 rounded-[24px] overflow-hidden transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] relative"
                >
                  {/* Glowing gradient accent on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Image Container */}
                  <div className="relative w-full h-[220px] shrink-0 overflow-hidden bg-[#0A0A0A]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    {/* Tag badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex px-3 py-1.5 rounded-full text-[0.6875rem] uppercase tracking-wider font-bold bg-[#121214]/80 backdrop-blur-md text-white border border-white/10 shadow-sm">
                        {project.tag}
                      </span>
                    </div>
                    {/* External link icon */}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#121214]/80 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm translate-y-2 group-hover:translate-y-0">
                      <LuExternalLink className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between relative z-10 bg-[#121214]">
                    <div>
                      <h3
                        className="text-xl md:text-2xl font-bold text-white mb-2 tracking-[-0.01em] transition-colors duration-200 group-hover:text-accent line-clamp-1"
                        style={{
                          fontFamily: "var(--font-plus-jakarta), sans-serif",
                        }}
                      >
                        {project.title}
                      </h3>
                      <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                      View Case Study
                      <LuArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              </div>
            ),
          )}
        </div>

        {/* Duplicate container for seamless loop */}
        <div
          className="flex w-max animate-marquee gap-6 group-hover/marquee:[animation-play-state:paused]"
          aria-hidden="true"
          style={{ paddingLeft: "1.5rem" }}
        >
          {[...projects, ...projects, ...projects, ...projects].map(
            (project, index) => (
              <div
                key={`dup-${project.title}-${index}`}
                className="w-[320px] md:w-[450px] shrink-0"
              >
                <a
                  href={project.link}
                  className="group flex flex-col h-[400px] bg-[#121214] border border-white/5 rounded-[24px] overflow-hidden transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] relative"
                  tabIndex={-1}
                >
                  {/* Glowing gradient accent on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Image Container */}
                  <div className="relative w-full h-[220px] shrink-0 overflow-hidden bg-[#0A0A0A]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    {/* Tag badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex px-3 py-1.5 rounded-full text-[0.6875rem] uppercase tracking-wider font-bold bg-[#121214]/80 backdrop-blur-md text-white border border-white/10 shadow-sm">
                        {project.tag}
                      </span>
                    </div>
                    {/* External link icon */}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#121214]/80 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm translate-y-2 group-hover:translate-y-0">
                      <LuExternalLink className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between relative z-10 bg-[#121214]">
                    <div>
                      <h3
                        className="text-xl md:text-2xl font-bold text-white mb-2 tracking-[-0.01em] transition-colors duration-200 group-hover:text-accent line-clamp-1"
                        style={{
                          fontFamily: "var(--font-plus-jakarta), sans-serif",
                        }}
                      >
                        {project.title}
                      </h3>
                      <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                      View Case Study
                      <LuArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              </div>
            ),
          )}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center relative z-10">
        <Button
          as="a"
          href="/projects"
          variant="outline"
          size="lg"
          className="rounded-full px-8 backdrop-blur-sm border-white/10 hover:border-accent hover:bg-accent/5"
        >
          View All Projects
        </Button>
      </div>
    </div>
  );
};

export default Projects;

"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  LuCode,
  LuLayers,
  LuWrench,
  LuMessageSquare,
  LuArrowRight,
} from "react-icons/lu";
import Button from "@/components/ui/Button";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <LuCode className="w-5 h-5" />,
    title: "Web Development",
    description:
      "We build custom websites and web apps that look great, run fast, and do exactly what you need them to do.",
    features: ["React/Next.js", "Node.js", "RESTful APIs", "Database Design"],
    href: "/services/web-development",
    accent: "#10B981",
    size: "large", // spans 2 columns on desktop
  },
  {
    icon: <LuLayers className="w-5 h-5" />,
    title: "UI/UX Design",
    description:
      "We design beautiful and easy-to-use interfaces that keep your customers happy and coming back for more.",
    features: ["User Research", "Wireframing", "Prototyping", "UI Development"],
    href: "/services/ui-ux-design",
    accent: "#10B981",
    size: "large",
  },
  {
    icon: <LuWrench className="w-5 h-5" />,
    title: "Maintenance & Support",
    description:
      "We keep your website or app running smoothly and securely so you can focus on your business without worry.",
    features: [
      "Performance Optimization",
      "Security Updates",
      "Bug Fixes",
      "Technical Support",
    ],
    href: "/services/maintenance",
    accent: "#10B981",
    size: "small",
  },
  {
    icon: <LuMessageSquare className="w-5 h-5" />,
    title: "Tech Consulting",
    description:
      "We offer expert advice to help you choose the right technology and strategies for your business goals.",
    features: [
      "Technology Audit",
      "Solution Architecture",
      "Digital Strategy",
      "Team Training",
    ],
    href: "/services/tech-consulting",
    accent: "#10B981",
    size: "small",
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    return () => {
      cardsRef.current = [];
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      style={{ background: "var(--bg-primary)" }}
      className="py-20 md:py-28"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="label-pill mb-4 inline-flex shadow-[0_0_20px_rgba(16,185,129,0.15)]">Our Services</span>
          <h2
            className="text-white mb-4 text-4xl md:text-5xl tracking-tight font-bold"
            style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
          >
            Premium <span className="text-accent">Tech Services</span>
          </h2>
          <p className="text-[#A1A1AA] text-lg max-w-2xl mx-auto leading-relaxed">
            Simple and powerful technology solutions to help your business 
            grow online.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="block group"
              aria-label={`View ${service.title} service`}
            >
              <div
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="h-full bg-[#121214] border border-white/5 rounded-[24px] p-8 transition-all duration-300 group-hover:border-accent/40 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] relative overflow-hidden"
              >
                {/* Hover accent glow — top-left corner */}
                <div
                  className="absolute -top-12 -left-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none"
                  style={{ background: `${service.accent}18` }}
                />

                {/* Icon */}
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-xl mb-5 text-white relative z-10"
                  style={{ background: service.accent }}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3
                    className="text-[1.125rem] font-semibold text-white mb-2 tracking-[-0.01em]"
                    style={{
                      fontFamily: "var(--font-plus-jakarta), sans-serif",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[#A1A1AA] text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-white/5 text-[#A1A1AA] border border-white/10"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA Link */}
                  <div className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-all duration-200 group-hover:gap-2.5">
                    Learn more
                    <LuArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Button as="a" href="/services" variant="outline" size="lg" withArrow>
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

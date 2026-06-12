"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { LuArrowRight, LuCheck } from "react-icons/lu";
import AnimatedBackground from "@/components/animations/AnimatedBackground";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const pillRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const proofRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        pillRef.current,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45 },
      )
        .fromTo(
          headRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75, ease: "power2.out" },
          "-=0.15",
        )
        .fromTo(
          subRef.current,
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.35",
        )
        .fromTo(
          ctaRef.current,
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.55 },
          "-=0.3",
        )
        .fromTo(
          proofRef.current,
          { y: 10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          "-=0.25",
        );
    });

    return () => ctx.revert();
  }, []);

  const socialProofs = [
    "Web Development",
    "UI/UX Design",
    "Tech Consulting",
    "E-Commerce",
  ];

  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "PostgreSQL",
    "MongoDB",
    "REST APIs",
    "Git",
    "GitHub",
    "Python",
    "Figma",
    "Docker",
    "AI",
    "etc..",
  ];

  return (
    <AnimatedBackground>
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: "clamp(7rem, 14vw, 11rem)",
          paddingBottom: "clamp(5rem, 10vw, 8rem)",
          background: `
            radial-gradient(ellipse 80% 50% at 50% -5%,
              rgba(16,185,129,0.15) 0%,
              transparent 65%)
          `,
        }}
      >
        {/* Fine dot grid — same as Dovetail's subtle texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, black 30%, transparent 100%)",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
          {/* ── Dark Aura for Contrast ── */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[900px] h-[600px] bg-[#0A0A0B]/80 blur-[80px] rounded-full pointer-events-none -z-10"
            aria-hidden="true"
          />
          <div className="max-w-4xl mx-auto text-center w-full">
            {/* ── Label Pill ── */}
            <div ref={pillRef} className="mb-7">
              <span className="label-pill">Quality Tech Services</span>
            </div>

            {/* ── Display Heading ── */}
            <h1
              ref={headRef}
              className="text-balance"
              style={{
                fontFamily: "var(--font-plus-jakarta), sans-serif",
                fontSize: "clamp(2.75rem, 6.5vw, 5.25rem)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                color: "#FFFFFF",
                textShadow: "0 4px 32px rgba(0,0,0,0.6)",
              }}
            >
              Premium{" "}
              <span
                style={{
                  position: "relative",
                  display: "inline-block",
                  color: "#10B981",
                }}
              >
                Technology
                {/* Dovetail-style offset underline stroke */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 260 14"
                  fill="none"
                  preserveAspectRatio="none"
                  style={{
                    position: "absolute",
                    bottom: "-6px",
                    left: 0,
                    width: "100%",
                    height: "10px",
                  }}
                >
                  <path
                    d="M4 9 C60 3, 140 3, 256 9"
                    stroke="#10B981"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.5"
                  />
                </svg>
              </span>{" "}
              &amp; Custom Software
            </h1>

            {/* ── Subheading ── */}
            <p
              ref={subRef}
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                lineHeight: 1.65,
                color: "#D4D4D8",
                maxWidth: "620px",
                margin: "1.75rem auto 0",
                textShadow: "0 2px 16px rgba(0,0,0,0.8)",
              }}
            >
              We build, scale, and maintain high-performance digital products
              for growing businesses. Elevate your brand with elite software
              engineering and stunning UI/UX design.
            </p>

            {/* ── CTAs ── */}
            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row items-center justify-center gap-3"
              style={{ marginTop: "2.5rem" }}
            >
              <Button
                as="a"
                href="/contact/sales"
                variant="primary"
                size="lg"
                withArrow
              >
                Start Your Project
              </Button>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 2rem",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                className="group hover:border-white/20 hover:bg-white/10"
              >
                Book a Consultation
                <LuArrowRight
                  style={{
                    width: "16px",
                    height: "16px",
                    transition: "transform 0.2s ease",
                  }}
                  className="group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            {/* ── Social-proof capability tags — Dovetail style ── */}
            <div
              ref={proofRef}
              className="flex flex-wrap items-center justify-center gap-2.5"
              style={{ marginTop: "2.5rem" }}
            >
              {socialProofs.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5"
                  style={{
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    color: "#A1A1AA",
                  }}
                >
                  <LuCheck
                    style={{
                      width: "13px",
                      height: "13px",
                      color: "#10B981",
                      flexShrink: 0,
                    }}
                  />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* ── Technologies Marquee ── */}
          <div
            className="w-full max-w-5xl mx-auto overflow-hidden relative"
            style={{ marginTop: "5rem" }}
          >
            {/* Gradient masks for fading edges */}
            <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#0A0A0B] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#0A0A0B] to-transparent z-10 pointer-events-none" />

            <div className="flex group">
              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="flex shrink-0 animate-marquee gap-10 md:gap-20 pr-10 md:pr-20 group-hover:[animation-play-state:paused]"
                >
                  {technologies.map((tech, j) => (
                    <div
                      key={j}
                      className="flex items-center justify-center whitespace-nowrap text-[#71717A] hover:text-white transition-colors duration-300 cursor-default"
                      style={{
                        fontFamily: "var(--font-plus-jakarta), sans-serif",
                        fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                        fontWeight: 700,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
}

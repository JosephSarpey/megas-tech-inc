"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LuCode, LuServer } from "react-icons/lu";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-24 relative overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 about-item">
          <span className="label-pill mb-6 inline-flex shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            About Us
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
            style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
          >
            Crafting{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
              Excellence
            </span>
          </h2>
          <p className="text-lg text-[#A1A1AA] leading-relaxed max-w-2xl mx-auto">
            At Megas Tech Inc, we build digital products that people love to
            use. Our team of skilled developers and designers work together to
            turn your ideas into reliable, easy-to-use software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Box 1 */}
          <div className="about-item p-8 rounded-2xl bg-[#121214]/50 border border-white/10 hover:border-accent/30 transition-colors">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
              <LuCode className="w-6 h-6 text-accent" />
            </div>
            <h3
              className="text-xl font-bold text-white mb-3"
              style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
            >
              Our Mission
            </h3>
            <p className="text-[#A1A1AA] leading-relaxed">
              To help businesses grow by providing powerful technology that
              saves time, improves daily work, and gives your customers a great
              experience.
            </p>
          </div>

          {/* Box 2 */}
          <div className="about-item p-8 rounded-2xl bg-[#121214]/50 border border-white/10 hover:border-accent/30 transition-colors">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
              <LuServer className="w-6 h-6 text-accent" />
            </div>
            <h3
              className="text-xl font-bold text-white mb-3"
              style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
            >
              Our Approach
            </h3>
            <p className="text-[#A1A1AA] leading-relaxed">
              We mix technical skills with smart planning. From the first sketch
              to the final launch, we make sure everything we build helps your
              business succeed.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center about-item">
          <a
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-200 shadow-lg"
          >
            Learn more about us
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";
import Button from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

import { testimonials } from "@/data/testimonials";

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleTouchStart = (e: React.TouchEvent) =>
    setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) =>
    setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) nextTestimonial();
    if (touchStart - touchEnd < -50) prevTestimonial();
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
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
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const renderStars = (rating: number) =>
    Array(5)
      .fill(0)
      .map((_, i) => (
        <FiStar
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-amber-400 fill-current" : "text-white/10"}`}
        />
      ));

  const active = testimonials[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-20 md:py-28 overflow-hidden"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-14">
          <span className="label-pill mb-4 inline-flex">Client Stories</span>
          <h2
            className="text-white mb-4"
            style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
          >
            What Our Clients Say
          </h2>
          <p className="text-[#A1A1AA] text-lg max-w-2xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our clients
            have to say about working with us.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-3xl mx-auto">
          <div
            className="bg-[#121214] border border-white/10 rounded-card shadow-card p-8 md:p-10 transition-all duration-500"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Large quote mark */}
            <div
              className="text-7xl leading-none font-serif text-[#333333] select-none mb-4"
              aria-hidden="true"
            >
              &ldquo;
            </div>

            {/* Quote */}
            <p className="text-white text-lg md:text-xl leading-relaxed mb-8 font-medium">
              {active.content}
            </p>

            {/* Author */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ background: active.color }}
                >
                  {active.initials}
                </div>
                <div>
                  <div
                    className="font-semibold text-white text-sm"
                    style={{
                      fontFamily: "var(--font-plus-jakarta), sans-serif",
                    }}
                  >
                    {active.name}
                  </div>
                  <div className="text-[#A1A1AA] text-xs mt-0.5">
                    {active.role}
                  </div>
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-0.5">
                {renderStars(active.rating)}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            {/* Dot indicators */}
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-accent w-5"
                      : "bg-white/20 w-1.5 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#A1A1AA] hover:text-white hover:border-white/20 hover:bg-white/10 hover:shadow-xs transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <FiChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#A1A1AA] hover:text-white hover:border-white/20 hover:bg-white/10 hover:shadow-xs transition-all duration-200"
                aria-label="Next testimonial"
              >
                <FiChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button as="a" href="/testimonials" variant="outline" size="lg">
            Share Your Experience
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

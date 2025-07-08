"use client";

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import Button from '@/components/ui/Button';

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  icon: React.ReactNode;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Mr.Ebenezer Amakeh',
    role: 'CEO at Vestra Versa',
    content: 'Working with MEGAS TECH INC. was a game-changer for our business. Their innovative solutions helped us increase our online presence significantly.',
    rating: 5,
    icon: <FaUserCircle className="w-12 h-12 text-accent/80" />
  },
  {
    id: 2,
    name: 'Mr. Theophilus Arthur',
    role: 'CEO of Teebel Global Travel Consultancy',
    content: 'The team at MEGAS TECH INC. delivered beyond our expectations. Their attention to detail and technical expertise is unmatched in the industry.',
    rating: 5,
    icon: <FaUserCircle className="w-12 h-12 text-accent/80" />
  },
  {
    id: 3,
    name: 'Miss Elizabeth Obeng',
    role: 'Assistant Managing Director',
    content: 'Their development team is incredibly responsive and professional. They transformed our ideas into a beautiful, functional product.',
    rating: 4,
    icon: <FaUserCircle className="w-12 h-12 text-accent/80" />
  },
  {
    id: 4,
    name: 'Mr. Dermolahu',
    role: 'Founder & CEO of Dermolahu Draughtmanship & Construction Works',
    content: 'MEGAS TECH INC. built our e-commerce platform from scratch. The results have been outstanding, with a significantly huge increase in sales.',
    rating: 5,
    icon: <FaUserCircle className="w-12 h-12 text-accent/80" />
  }
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  // Handle touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextTestimonial();
    }

    if (touchStart - touchEnd < -50) {
      prevTestimonial();
    }
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // GSAP animations
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

      // Animate testimonials
      const cards = gsap.utils.toArray<Element>('.testimonial-card');
      cards.forEach((card, i: number) => {
        gsap.fromTo(
          card,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: i * 0.1,
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Render star rating
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <FiStar
          key={i}
          className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
        />
      ));
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-36 bg-gray-50 dark:bg-gray-900 overflow-hidden"
      id="testimonials"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg items-center justify-center text-gray-700 dark:text-gray-200 hover:text-accent dark:hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg items-center justify-center text-gray-700 dark:text-gray-200 hover:text-accent dark:hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            aria-label="Next testimonial"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonials Carousel */}
          <div
            ref={carouselRef}
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4 testimonial-card"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-10 h-full">
                    <div className="flex items-center mb-4">
                      <div className="mr-4">
                        {testimonial.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <div className="mb-6">
                      <div className="flex mb-2">{renderStars(testimonial.rating)}</div>
                      <p className="text-gray-700 dark:text-gray-300 italic">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === activeIndex ? 'bg-accent' : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Button
            as="a"
            href="/testimonials"
            variant="accent"
            size="lg"
            className="mx-auto"
          >
            Share Your Experience
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
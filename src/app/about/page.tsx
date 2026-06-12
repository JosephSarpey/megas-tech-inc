"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, Variants } from "framer-motion";
import { FiUsers, FiCode, FiLayers, FiCheckCircle } from "react-icons/fi";
import Image from "next/image";
import { AiFillThunderbolt } from "react-icons/ai";
import { GiFlyingTarget } from "react-icons/gi";
import { LuCodesandbox, LuFileSearch } from "react-icons/lu";
import { TbFileAnalytics } from "react-icons/tb";
import Button from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const About = () => {
  const pillRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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
          imageRef.current,
          { y: 20, opacity: 0, scale: 0.98 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8 },
          "-=0.4",
        );
    });

    return () => ctx.revert();
  }, []);

  const stats = [
    { id: 1, name: "Projects Completed", value: "10+", icon: FiLayers },
    { id: 2, name: "Happy Clients", value: "5+", icon: FiUsers },
    { id: 3, name: "Technologies", value: "10+", icon: FiCode },
  ];

  const team = [
    {
      name: "Our Team",
      role: "Passionate Innovators",
      image: "/team1.jpg",
      bio: "A dedicated group of professionals with diverse expertise in technology and business solutions.",
    },
    {
      name: "Our Mission",
      role: "Driving Innovation",
      image: "/team2.jpg",
      bio: "To deliver cutting-edge solutions that help businesses thrive in the digital age.",
    },
    {
      name: "Our Vision",
      role: "Shaping the Future",
      image: "/team3.jpg",
      bio: "To be at the forefront of technological innovation and digital transformation.",
    },
  ];

  const approach = [
    {
      title: "Discovery & Strategy",
      description:
        "We start by deeply understanding your business goals and challenges to craft a tailored strategy.",
      icon: <LuFileSearch className="w-5 h-5" />,
    },
    {
      title: "Design & Development",
      description:
        "Our team brings your vision to life with clean, efficient code and intuitive design.",
      icon: <LuCodesandbox className="w-5 h-5" />,
    },
    {
      title: "Deployment & Growth",
      description:
        "We don't just build and leave - we ensure your solution grows with your business.",
      icon: <TbFileAnalytics className="w-5 h-5" />,
    },
  ];

  const whyUs = [
    {
      title: "Agile & Flexible",
      description:
        "As a startup, we adapt quickly to your needs and market changes, ensuring you get the most effective solutions.",
      icon: <AiFillThunderbolt className="w-5 h-5" />,
    },
    {
      title: "Cutting-Edge",
      description:
        "We leverage the latest technologies and methodologies to deliver innovative solutions that give you a competitive edge.",
      icon: <FiCheckCircle className="w-5 h-5" />,
    },
    {
      title: "Personalized Service",
      description:
        "You're not just another client. We provide dedicated attention and tailor our services to your specific goals.",
      icon: <GiFlyingTarget className="w-5 h-5" />,
    },
  ];

  return (
    <main className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: "clamp(7rem, 14vw, 11rem)",
          paddingBottom: "clamp(5rem, 10vw, 8rem)",
          background: `
            radial-gradient(ellipse 80% 50% at 50% -5%,
              rgba(16,185,129,0.15) 0%,
              transparent 65%),
            var(--bg-primary)
          `,
        }}
      >
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

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            {/* Left Text Content */}
            <div className="relative z-10 max-w-2xl">
              <div ref={pillRef} className="mb-7">
                <span className="label-pill">Our Story</span>
              </div>

              <h1
                ref={headRef}
                className="text-balance"
                style={{
                  fontFamily: "var(--font-plus-jakarta), sans-serif",
                  fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  lineHeight: 1.05,
                  color: "#FFFFFF",
                }}
              >
                About{" "}
                <span
                  style={{
                    position: "relative",
                    display: "inline-block",
                    color: "#10B981",
                  }}
                >
                  Us
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
                </span>
              </h1>

              <p
                ref={subRef}
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                  lineHeight: 1.65,
                  color: "#A1A1AA",
                  marginTop: "1.75rem",
                }}
              >
                We&apos;re a team of passionate developers, designers, and
                strategists dedicated to building exceptional digital
                experiences.
              </p>
            </div>

            {/* Right Hero Image */}
            <div className="mt-12 lg:mt-0 relative" ref={imageRef}>
              <div className="relative mx-auto w-full rounded-[24px] shadow-[0_0_40px_rgba(16,185,129,0.15)] overflow-hidden border border-white/10 group">
                {/* Glow behind image */}
                <div className="absolute inset-0 bg-accent/20 mix-blend-overlay group-hover:bg-accent/10 transition-colors duration-500 z-10" />
                <Image
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  src="/about-hero.jpg"
                  alt="Our team working together"
                  width={600}
                  height={400}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="py-12 sm:py-16 relative z-10"
        style={{ background: "var(--bg-primary)" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "24px",
              overflow: "hidden",
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(12px)",
            }}
          >
            {stats.map((stat, i) => (
              <motion.div
                variants={fadeInUp}
                key={stat.id}
                className="group relative"
                style={{
                  padding: "2rem 1.5rem",
                  textAlign: "center",
                  borderRight:
                    i < stats.length - 1
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "none",
                }}
              >
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-300 pointer-events-none" />
                <div
                  style={{
                    fontFamily: "var(--font-plus-jakarta), sans-serif",
                    fontSize: "clamp(2rem, 3vw, 2.5rem)",
                    fontWeight: 800,
                    color: "#FFFFFF",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "#A1A1AA",
                    lineHeight: 1.3,
                  }}
                >
                  {stat.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section
        className="relative py-16 sm:py-24"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
          <div className="relative px-4 sm:px-6 lg:px-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative pt-64 pb-10 rounded-[24px] overflow-hidden border border-white/5 group"
            >
              <Image
                className="absolute inset-0 h-full w-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                src="/office.webp"
                alt="Our office"
                width={500}
                height={700}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent" />

              <div className="relative px-8">
                <span className="label-pill mb-6 inline-flex shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                  Established June 2025
                </span>
                <blockquote
                  className="relative text-xl font-medium text-white max-w-sm"
                  style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
                >
                  <p>
                    &quot;We believe in the power of technology to transform
                    businesses and create meaningful connections.&quot;
                  </p>
                </blockquote>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 sm:mt-16 lg:mt-0 px-4 sm:px-6 lg:px-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <h2
                className="text-3xl sm:text-4xl font-extrabold text-white mb-6 tracking-tight"
                style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
              >
                Our Story
              </h2>
              <div
                className="prose prose-lg text-[#A1A1AA] space-y-6"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                <p>
                  Founded in 2025, Megas Tech Inc. started with a simple
                  mission: to create exceptional digital experiences that make a
                  difference. What began as a small team of passionate
                  technologists has grown into a full-service digital agency
                  serving clients worldwide.
                </p>
                <p>
                  Our journey has been marked by innovation, creativity, and an
                  unwavering commitment to excellence. We&apos;ve had the
                  privilege of working with startups, established businesses,
                  and everything in between, helping them navigate the
                  ever-changing digital landscape.
                </p>
                <p>
                  Today, we continue to push boundaries and challenge the status
                  quo, always striving to deliver solutions that not only meet
                  but exceed our clients&apos; expectations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team / Core Values Section */}
      <section
        className="py-20 sm:py-32"
        style={{ background: "var(--bg-primary)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
              style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
            >
              Our Core Values
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-[#A1A1AA]">
              Guiding principles that shape our culture and drive our success.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                className="group relative h-full flex flex-col bg-[#121214] border border-white/5 rounded-[24px] overflow-hidden transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]"
              >
                {/* Hover accent glow */}
                <div
                  className="absolute -top-12 -left-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none z-0"
                  style={{ background: "#10B98118" }}
                />

                <div className="h-48 overflow-hidden relative z-10">
                  <Image
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121214] to-transparent opacity-80" />
                </div>
                <div className="p-8 relative z-10 flex flex-col flex-grow">
                  <h3
                    className="text-xl font-semibold text-white tracking-[-0.01em]"
                    style={{
                      fontFamily: "var(--font-plus-jakarta), sans-serif",
                    }}
                  >
                    {member.name}
                  </h3>
                  <p className="mt-1 text-accent font-medium text-sm">
                    {member.role}
                  </p>
                  <p className="mt-4 text-[#A1A1AA] text-sm leading-relaxed flex-grow">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section
        className="py-20 sm:py-32 relative"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
              style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
            >
              Our Approach
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-[#A1A1AA]">
              How we turn your ideas into reality
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {approach.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative h-full flex flex-col bg-[#121214] border border-white/5 rounded-[24px] p-8 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] overflow-hidden"
              >
                <div
                  className="absolute -top-12 -left-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none z-0"
                  style={{ background: "#10B98118" }}
                />

                <div className="w-12 h-12 flex items-center justify-center rounded-xl mb-6 text-white relative z-10 bg-accent">
                  {step.icon}
                </div>

                <div className="relative z-10 flex flex-col flex-grow">
                  <h3
                    className="text-xl font-semibold text-white tracking-[-0.01em] mb-3"
                    style={{
                      fontFamily: "var(--font-plus-jakarta), sans-serif",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[#A1A1AA] text-sm leading-relaxed flex-grow">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose a Startup */}
      <section
        className="py-20 sm:py-32 relative"
        style={{ background: "var(--bg-primary)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
              style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
            >
              Why Choose a Startup?
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-[#A1A1AA]">
              Fresh perspectives, agile approach, and dedicated focus on your
              success
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {whyUs.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative h-full flex flex-col bg-[#121214] border border-white/5 rounded-[24px] p-8 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] overflow-hidden"
              >
                <div
                  className="absolute -top-12 -left-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none z-0"
                  style={{ background: "#10B98118" }}
                />

                <div className="w-12 h-12 flex items-center justify-center rounded-xl mb-6 text-accent relative z-10 bg-white/5 border border-white/10 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>

                <div className="relative z-10 flex flex-col flex-grow">
                  <h3
                    className="text-xl font-semibold text-white tracking-[-0.01em] mb-3"
                    style={{
                      fontFamily: "var(--font-plus-jakarta), sans-serif",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-[#A1A1AA] text-sm leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-24 relative border-t border-white/5"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
            style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
          >
            Ready to start your project?
          </h2>
          <p className="mt-4 text-lg text-[#A1A1AA] mb-8">
            We&apos;d love to hear about your project and how we can help bring
            your ideas to life.
          </p>
          <div className="flex justify-center">
            <Button
              as="a"
              href="/contact"
              variant="primary"
              size="lg"
              withArrow
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

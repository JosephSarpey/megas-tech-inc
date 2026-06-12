/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiTwitter,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import Button from "@/components/ui/Button";
import HCaptcha from "@hcaptcha/react-hcaptcha";

gsap.registerPlugin(ScrollTrigger);

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const contactInfo = [
  {
    icon: <FiMail className="w-4 h-4" />,
    label: "Email Us",
    value: "themegastechinc@gmail.com",
    href: "mailto:themegastechinc@gmail.com",
  },
  {
    icon: <FiPhone className="w-4 h-4" />,
    label: "Call Us",
    value: "0553288566",
    href: "tel:+233553288566",
  },
  {
    icon: <FiMapPin className="w-4 h-4" />,
    label: "Visit Us",
    value: "Kasoa new market road, opposite soccer bet, Central Region, Ghana",
    href: null,
  },
];

const socials = [
  { name: "Twitter", icon: <FiTwitter className="w-4 h-4" />, url: "#" },
  { name: "GitHub", icon: <FiGithub className="w-4 h-4" />, url: "https://github.com/JosephSarpey" },
  { name: "LinkedIn", icon: <FiLinkedin className="w-4 h-4" />, url: "#" },
];

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [token, setToken] = useState("");
  const captchaRef = useRef<HCaptcha>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7,
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        infoRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, delay: 0.1,
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        formCardRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, delay: 0.2,
          scrollTrigger: {
            trigger: formCardRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const onSubmit = async (data: FormData) => {
    if (!token) {
      setSubmitStatus({ success: false, message: "Please complete the captcha." });
      return;
    }
    try {
      setIsSubmitting(true);
      setSubmitStatus(null);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, token }),
      });

      const contentType = response.headers.get("content-type");
      let responseData;
      if (contentType && contentType.includes("application/json")) {
        responseData = await response.json();
      } else {
        throw new Error("Server returned an invalid response");
      }

      if (!response.ok) throw new Error(responseData.message || "Something went wrong");

      setSubmitStatus({
        success: true,
        message: "Your message has been sent successfully! We'll get back to you soon.",
      });
      reset();
      setToken("");
      captchaRef.current?.resetCaptcha();
    } catch (error: any) {
      setSubmitStatus({
        success: false,
        message: error.message || "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 md:py-28"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-14">
          <span className="label-pill mb-4 inline-flex">Get In Touch</span>
          <h2
            className="text-white mb-4"
            style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif' }}
          >
            Contact <span className="text-accent">Us</span>
          </h2>
          <p className="text-[#A1A1AA] text-lg max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss how we can help your business? Drop us a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start max-w-5xl mx-auto">

          {/* Contact Information — left 2/5 */}
          <div ref={infoRef} className="lg:col-span-2 space-y-6">
            <div>
              <h3
                className="text-lg font-semibold text-white mb-2"
                style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif' }}
              >
                Contact Information
              </h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                Fill out the form or reach out to us directly. We&apos;re here
                to help and answer any questions you might have.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-accent/8 text-accent border border-accent/20">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#A1A1AA] uppercase tracking-wide mb-0.5">
                      {info.label}
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm text-white hover:text-accent transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm text-[#A1A1AA] leading-snug">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <div className="text-xs font-semibold text-[#A1A1AA] uppercase tracking-wide mb-3">
                Follow Us
              </div>
              <div className="flex items-center gap-2">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#A1A1AA] hover:text-white hover:border-accent/30 hover:bg-accent/5 transition-all duration-200"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form — right 3/5 */}
          <div
            ref={formCardRef}
            className="lg:col-span-3 bg-[#121214] border border-white/10 rounded-card shadow-card p-7 md:p-8"
          >
            {submitStatus && (
              <div
                className={`p-4 mb-6 rounded-lg text-sm font-medium border ${
                  submitStatus.success
                    ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                    : "bg-red-50 border-red-200 text-red-700"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
              suppressHydrationWarning
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#A1A1AA] mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    {...register("name", { required: "Name is required" })}
                    className={`w-full px-3.5 py-2.5 bg-[#0A0A0A] border text-white placeholder-[#71717A] rounded-input text-sm transition-all duration-200 focus:outline-none focus:ring-[3px] focus:ring-accent/15 ${
                      errors.name ? "border-red-400 focus:border-red-400" : "border-white/10 focus:border-accent"
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#A1A1AA] mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className={`w-full px-3.5 py-2.5 bg-[#0A0A0A] border text-white placeholder-[#71717A] rounded-input text-sm transition-all duration-200 focus:outline-none focus:ring-[3px] focus:ring-accent/15 ${
                      errors.email ? "border-red-400 focus:border-red-400" : "border-white/10 focus:border-accent"
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#A1A1AA] mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  {...register("subject", { required: "Subject is required" })}
                  className={`w-full px-3.5 py-2.5 bg-[#0A0A0A] border text-white placeholder-[#71717A] rounded-input text-sm transition-all duration-200 focus:outline-none focus:ring-[3px] focus:ring-accent/15 ${
                    errors.subject ? "border-red-400 focus:border-red-400" : "border-white/10 focus:border-accent"
                  }`}
                  placeholder="How can we help?"
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#A1A1AA] mb-1.5">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  {...register("message", { required: "Message is required" })}
                  className={`w-full px-3.5 py-2.5 bg-[#0A0A0A] border text-white placeholder-[#71717A] rounded-input text-sm transition-all duration-200 focus:outline-none focus:ring-[3px] focus:ring-accent/15 resize-none ${
                    errors.message ? "border-red-400 focus:border-red-400" : "border-white/10 focus:border-accent"
                  }`}
                  placeholder="Tell us about your project..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                )}
              </div>

              {/* Captcha */}
              <div className="relative" style={{ transform: "translateZ(0)" }}>
                <div
                  style={{
                    minHeight: "78px",
                    transform: "scale(0.9)",
                    transformOrigin: "0 0",
                  }}
                >
                  <HCaptcha
                    sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!}
                    onVerify={(t) => setToken(t)}
                    ref={captchaRef}
                  />
                </div>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                disabled={isSubmitting}
                className="mt-1"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <FiSend className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

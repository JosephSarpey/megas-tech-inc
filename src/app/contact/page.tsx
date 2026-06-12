/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | MEGAS TECH INC",
  description:
    "Get in touch with our team. We&apos;d love to hear from you about your project or any questions you might have.",
};

export default function Contact() {
  return (
    <div
      className="min-h-screen pt-32 pb-24"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black 30%, transparent 100%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="label-pill mb-6 inline-flex shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            Get in Touch
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
            style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
          >
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
              Us
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[#A1A1AA] leading-relaxed">
            Have a question or want to work together? We'd love to hear from
            you. Reach out and let's start a conversation.
          </p>
        </div>

        {/* Contact Form Wrapper */}
        <div className="max-w-7xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

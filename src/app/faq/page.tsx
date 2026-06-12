import { Metadata } from "next";
import FAQList from "./FAQList";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | MEGAS TECH INC",
  description:
    "Find answers to common questions about our services, pricing, and how we can help your business grow.",
};

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
  category: "general" | "services" | "pricing" | "support";
}

const faqs: FAQItem[] = [
  // General Questions
  {
    question: "What services does MEGAS TECH INC provide?",
    answer:
      "We offer a wide range of technology services including web development, mobile app development, UI/UX design, cloud solutions, IT consulting, and digital transformation services tailored to your business needs.",
    category: "general",
  },
  {
    question: "How can I get started with your services?",
    answer:
      "Getting started is easy! Simply contact us through our contact form or give us a call. Our team will schedule a consultation to understand your requirements and propose the best solutions for your business.",
    category: "general",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We work with businesses across various industries including healthcare, finance, education, e-commerce, real estate, and more. Our solutions are tailored to meet the specific needs of each industry.",
    category: "general",
  },

  // Services
  {
    question: "What technologies do you use for web development?",
    answer:
      "We use modern web technologies including React.js, Next.js, Node.js, TypeScript, and various backend technologies. Our stack is chosen based on the specific requirements of each project.",
    category: "services",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes, we offer various support and maintenance packages to ensure your digital solutions continue to perform optimally. Our team is always available to assist with updates, security patches, and feature enhancements.",
    category: "services",
  },

  // Pricing
  {
    question: "How do you determine project pricing?",
    answer:
      "Project costs are determined based on several factors including project scope, complexity, timeline, and specific requirements. We provide transparent pricing after an initial consultation and project assessment.",
    category: "pricing",
  },
  {
    question: "Do you offer flexible payment options?",
    answer:
      "Yes, we offer flexible payment plans to accommodate different budgets. We typically break payments into milestones throughout the project lifecycle.",
    category: "pricing",
  },

  // Support
  {
    question: "What is your response time for support requests?",
    answer:
      "Our standard response time is within 24 hours for general inquiries. For critical issues, we offer priority support with faster response times as part of our service level agreements (SLAs).",
    category: "support",
  },
  {
    question: "Do you provide training for the solutions you develop?",
    answer:
      "Absolutely! We provide comprehensive training and documentation to ensure your team is comfortable using and maintaining the solutions we develop for you.",
    category: "support",
  },
];

const categories = [
  { id: "all", name: "All Questions" },
  { id: "general", name: "General" },
  { id: "services", name: "Services" },
  { id: "pricing", name: "Pricing" },
  { id: "support", name: "Support" },
];

export default function FAQPage() {
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
            Knowledge Base
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
            style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
          >
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
              Questions
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[#A1A1AA] leading-relaxed">
            Find answers to common questions about our services, pricing, and
            how we can help your business grow.
          </p>
        </div>

        {/* FAQ Component */}
        <FAQList faqs={faqs} categories={categories} />

        {/* Still Have Questions CTA */}
        <div className="mt-32 max-w-4xl mx-auto bg-gradient-to-r from-[#121214] to-[#121214]/50 border border-white/10 rounded-[24px] p-10 md:p-12 flex flex-col items-center text-center relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10">
            <h3
              className="text-3xl font-bold text-white mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
            >
              Still have questions?
            </h3>
            <p className="text-[#A1A1AA] mb-8 text-lg">
              Can&apos;t find the answer you&apos;re looking for? Our team is
              happy to help you out.
            </p>
            <Button
              as="a"
              href="/contact"
              variant="primary"
              size="lg"
              withArrow
            >
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

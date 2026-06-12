/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { LuCheck } from "react-icons/lu";
import Button from "@/components/ui/Button";

export default function Pricing() {
  const [isMonthly, setIsMonthly] = useState(false);

  const tiers = [
    {
      name: "Starter",
      description:
        "Essential web presence and development for small businesses.",
      priceProject: "$2,500+",
      priceMonthly: "$1,500",
      billingProject: "per project",
      billingMonthly: "/mo",
      features: [
        "Custom UI/UX Design",
        "Frontend Development (React/Next.js)",
        "Basic SEO Setup",
        "Responsive & Mobile-First",
        "1 Month Post-Launch Support",
      ],
      cta: "Start Project",
      href: "/contact",
      popular: false,
    },
    {
      name: "Pro",
      description:
        "Full-stack development and platform building for growing companies.",
      priceProject: "$8,000+",
      priceMonthly: "$3,500",
      billingProject: "per project",
      billingMonthly: "/mo",
      features: [
        "Everything in Starter",
        "Backend API Development",
        "Database Architecture",
        "Advanced State Management",
        "Performance Optimization",
        "3 Months Post-Launch Support",
      ],
      cta: "Get Started",
      href: "/contact",
      popular: true,
    },
    {
      name: "Enterprise",
      description:
        "Custom architecture and dedicated engineering retainers for scale.",
      priceProject: "Custom",
      priceMonthly: "Custom",
      billingProject: "",
      billingMonthly: "",
      features: [
        "Everything in Pro",
        "Cloud Infrastructure Setup",
        "Dedicated Tech Lead",
        "Custom CI/CD Pipelines",
        "24/7 Priority Support",
        "Service Level Agreement (SLA)",
      ],
      cta: "Contact Sales",
      href: "/contact/sales",
      popular: false,
    },
  ];

  return (
    <div
      className="min-h-screen pt-32 pb-24"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="label-pill mb-6 inline-flex shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            Pricing Plans
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
            style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
          >
            Transparent pricing for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
              elite engineering
            </span>
          </h1>
          <p className="text-lg text-[#A1A1AA] leading-relaxed">
            Choose the perfect engagement model for your business. Whether you
            need a single project delivered or an ongoing engineering partner.
          </p>

          {/* Toggle */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <span
              className={`text-sm font-medium transition-colors ${!isMonthly ? "text-white" : "text-[#A1A1AA]"}`}
            >
              Project-based
            </span>
            <button
              onClick={() => setIsMonthly(!isMonthly)}
              className="relative inline-flex h-7 w-14 items-center rounded-full bg-white/10 border border-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#0A0A0B]"
            >
              <span className="sr-only">Toggle billing cycle</span>
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-accent transition-transform duration-200 ease-in-out ${
                  isMonthly ? "translate-x-8" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`text-sm font-medium transition-colors ${isMonthly ? "text-white" : "text-[#A1A1AA]"}`}
            >
              Monthly Retainer
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
          {/* Background glow for the Popular card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md h-[400px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col p-8 rounded-card border transition-all duration-300 ${
                tier.popular
                  ? "bg-[#121214] border-accent shadow-[0_0_30px_rgba(16,185,129,0.15)] md:-mt-4 md:mb-4"
                  : "bg-[#0A0A0B]/80 backdrop-blur-xl border-white/10 hover:border-white/20"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-accent text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3
                  className="text-xl font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
                >
                  {tier.name}
                </h3>
                <p className="text-sm text-[#A1A1AA] h-10">
                  {tier.description}
                </p>
              </div>

              <div className="mb-8 flex-grow">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-extrabold text-white tracking-tight">
                    {isMonthly ? tier.priceMonthly : tier.priceProject}
                  </span>
                  <span className="text-sm font-medium text-[#A1A1AA]">
                    {isMonthly ? tier.billingMonthly : tier.billingProject}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <LuCheck className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#E4E4E7] leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                as="a"
                href={tier.href}
                variant={tier.popular ? "primary" : "secondary"}
                size="lg"
                className="w-full justify-center"
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Enterprise/Custom Section below */}
        <div className="mt-20 max-w-4xl mx-auto bg-gradient-to-r from-[#121214] to-[#121214]/50 border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3
              className="text-2xl font-bold text-white mb-2"
              style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
            >
              Not sure which plan is right for you?
            </h3>
            <p className="text-[#A1A1AA]">
              Let's discuss your specific needs and create a custom proposal.
            </p>
          </div>
          <Button
            as="a"
            href="/contact"
            variant="outline"
            size="lg"
            className="whitespace-nowrap rounded-full"
          >
            Talk to our team
          </Button>
        </div>
      </div>
    </div>
  );
}

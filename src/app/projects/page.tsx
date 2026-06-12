/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import ProjectsList from "@/components/projects/ProjectsList";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Our Projects | MEGAS TECH INC",
  description:
    "Explore our portfolio of successful projects and see how we help businesses transform through technology.",
};

export default function Projects() {
  return (
    <div
      className="min-h-screen pt-32 pb-24"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="label-pill mb-6 inline-flex shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            Portfolio
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
            style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
          >
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
              Projects
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[#A1A1AA] leading-relaxed">
            Explore some of our recent work and see how we've helped our clients
            achieve their business goals through innovative technology
            solutions.
          </p>
        </div>

        <ProjectsList />

        {/* CTA */}
        <div className="mt-32 max-w-4xl mx-auto bg-gradient-to-r from-[#121214] to-[#121214]/50 border border-white/10 rounded-[24px] p-8 md:p-12 flex flex-col items-center text-center relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10">
            <h2
              className="text-3xl font-bold text-white mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
            >
              Have a project in mind?
            </h2>
            <p className="text-[#A1A1AA] mb-8 text-lg">
              Let's build something amazing together. Get in touch to discuss
              your project requirements.
            </p>
            <Button
              as="a"
              href="/contact"
              variant="primary"
              size="lg"
              withArrow
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

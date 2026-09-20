import { Metadata } from "next";
import Button from "@/components/ui/Button";
import { LuShield, LuPodcast } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Cybersecurity | MEGAS TECH INC",
  description:
    "Enterprise-grade cybersecurity services and awareness training to protect your digital footprint.",
};

export default function Cybersecurity() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="label-pill mb-4 inline-flex shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            Digital Defense
          </span>
          <h1
            className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl tracking-tight font-bold"
            style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
          >
            Uncompromising <span className="text-accent">Cybersecurity</span>
          </h1>
          <p className="text-[#A1A1AA] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Protecting your business requires a proactive approach. We provide
            state-of-the-art security services and cutting-edge awareness
            training to ensure your organization remains impenetrable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Services Card */}
          <div className="bg-[#121214] border border-white/5 rounded-3xl p-8 lg:p-12 transition-all duration-300 hover:border-white/10 hover:shadow-[0_0_40px_rgba(16,185,129,0.05)] group">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-accent group-hover:scale-110 transition-transform duration-300">
              <LuShield className="w-8 h-8" />
            </div>
            <h2
              className="text-2xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
            >
              Security Services
            </h2>
            <p className="text-[#A1A1AA] mb-8 leading-relaxed">
              Comprehensive threat modeling, penetration testing, and incident
              response to harden your digital infrastructure against emerging
              threats.
            </p>
            <Button
              as="a"
              href="/cybersecurity/services"
              variant="outline"
              withArrow
            >
              Explore Services
            </Button>
          </div>

          {/* Awareness Card */}
          <div className="bg-[#121214] border border-white/5 rounded-3xl p-8 lg:p-12 transition-all duration-300 hover:border-white/10 hover:shadow-[0_0_40px_rgba(16,185,129,0.05)] group">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-accent group-hover:scale-110 transition-transform duration-300">
              <LuPodcast className="w-8 h-8" />
            </div>
            <h2
              className="text-2xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
            >
              Cyber Awareness
            </h2>
            <p className="text-[#A1A1AA] mb-8 leading-relaxed">
              Tune into our exclusive podcast and video-blog series. Learn
              directly from security experts on how to train your team against
              AI-driven threats.
            </p>
            <Button
              as="a"
              href="/cybersecurity/awareness"
              variant="primary"
              withArrow
            >
              Listen & Learn
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

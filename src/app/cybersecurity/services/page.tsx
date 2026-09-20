import { Metadata } from "next";
import Button from "@/components/ui/Button";
import {
  LuShieldCheck,
  LuServerCrash,
  LuKey,
  LuActivity,
} from "react-icons/lu";

export const metadata: Metadata = {
  title: "Cybersecurity Services | MEGAS TECH INC",
  description: "Proactive digital defense and security auditing services.",
};

const services = [
  {
    icon: <LuShieldCheck className="w-8 h-8" />,
    title: "Penetration Testing",
    description:
      "Simulated cyber attacks on your computer system to check for exploitable vulnerabilities, ensuring your defense mechanisms are robust.",
  },
  {
    icon: <LuServerCrash className="w-8 h-8" />,
    title: "Incident Response",
    description:
      "Rapid identification, containment, and mitigation of security breaches. We help you recover quickly and minimize operational downtime.",
  },
  {
    icon: <LuKey className="w-8 h-8" />,
    title: "Access Management & Authentication",
    description:
      "Implementing Zero-Trust architectures, multi-factor authentication, and strict identity verification to protect sensitive resources.",
  },
  {
    icon: <LuActivity className="w-8 h-8" />,
    title: "Continuous Monitoring",
    description:
      "24/7 proactive threat detection and real-time network traffic analysis to catch malicious activity before it causes harm.",
  },
];

export default function CybersecurityServices() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <Button
            as="a"
            href="/cybersecurity"
            variant="ghost"
            size="sm"
            className="mb-8"
          >
            &larr; Back to Cybersecurity
          </Button>
          <h1
            className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl tracking-tight font-bold"
            style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
          >
            Security <span className="text-accent">Services</span>
          </h1>
          <p className="text-[#A1A1AA] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade defense strategies tailored to your unique
            infrastructure. We focus on proactive hardening rather than reactive
            patches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-32">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#121214] border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-colors"
            >
              <div className="text-accent mb-6 bg-white/5 w-14 h-14 rounded-xl flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-[#A1A1AA] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center bg-[#121214] border border-white/5 rounded-[24px] p-12 md:p-20 relative overflow-hidden max-w-4xl mx-auto">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative z-10">
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight"
              style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
            >
              Secure your infrastructure today.
            </h2>
            <p className="text-[#A1A1AA] mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              Don&apos;t wait for a breach to happen. Contact our security
              experts for a comprehensive risk assessment.
            </p>
            <Button
              as="a"
              href="/contact/sales"
              variant="primary"
              size="lg"
              withArrow
            >
              Request Assessment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

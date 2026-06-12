import { Metadata } from 'next';
import ServicesList from '@/components/services/ServicesList';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Premium Tech Services | MEGAS TECH INC',
  description: 'Explore our comprehensive suite of Next-Gen digital services and modules designed to scale your business.',
};

export default function Services() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="label-pill mb-4 inline-flex shadow-[0_0_20px_rgba(16,185,129,0.15)]">Platform Capabilities</span>
          <h1 
            className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl tracking-tight font-bold"
            style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
          >
            Premium <span className="text-accent">Tech Services</span>
          </h1>
          <p className="text-[#A1A1AA] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Elite software engineering, design, and infrastructure modules to help your business
            scale rapidly in the modern digital landscape.
          </p>
        </div>

        <ServicesList />

        <div className="mt-32 text-center bg-[#121214] border border-white/5 rounded-[24px] p-12 md:p-20 relative overflow-hidden max-w-5xl mx-auto">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10">
            <h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight"
              style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
            >
              Ready to accelerate your growth?
            </h2>
            <p className="text-[#A1A1AA] mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              Let&apos;s discuss how we can integrate our technology solutions into your ecosystem to drive exceptional results.
            </p>
            <Button
              href="/contact/sales"
              variant="primary"
              size="lg"
              withArrow
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

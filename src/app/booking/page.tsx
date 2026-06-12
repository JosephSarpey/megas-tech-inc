import { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Book a Plan | MEGAS TECH INC',
  description: 'Book your selected plan and get started with our services.',
};

type SearchParams = {
  plan?: 'starter' | 'professional' | 'enterprise';
  service?: string;
};

const planTitles = {
  starter: 'Starter Plan',
  professional: 'Professional Plan',
  enterprise: 'Enterprise Solution'
};

export default async function BookingPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const { plan, service } = await searchParams;
  const isSalesInquiry = true; 
  
  const getPlanMessage = () => {
    const serviceName = service ? `${service} ` : '';
    const planName = plan ? planTitles[plan as keyof typeof planTitles] || plan : '';
    
    if (plan && service) {
      return `You're signing up for our ${serviceName}${planName}. Let us know more about your project!`;
    } else if (plan) {
      return `You've selected our ${planName}. Share some details about your business needs.`;
    } else if (service) {
      return `Interested in our ${serviceName}service? Let's discuss your requirements.`;
    }
    return 'Tell us about your project and we\'ll get back to you shortly.';
  };

  return (
    <div className="min-h-screen pt-32 pb-24" style={{ background: 'var(--bg-primary)' }}>
      {/* Background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, black 30%, transparent 100%)',
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="label-pill mb-6 inline-flex shadow-[0_0_20px_rgba(16,185,129,0.15)]">Get Started</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif' }}>
            Book <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
              {plan ? `${planTitles[plan as keyof typeof planTitles] || 'Your Plan'}` : 'Your Project'}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[#A1A1AA] leading-relaxed">
            {getPlanMessage()}
          </p>
        </div>

        {/* Form Section */}
        <div className="max-w-4xl mx-auto relative group">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none transition-all duration-500 group-hover:bg-accent/10" />
          
          <div className="bg-[#121214] border border-white/5 p-8 md:p-12 rounded-[24px] shadow-2xl relative z-10 backdrop-blur-xl transition-all duration-300 hover:border-accent/30">
            <ContactForm 
              isSalesInquiry={isSalesInquiry} 
              selectedPlan={plan}
              serviceName={service}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
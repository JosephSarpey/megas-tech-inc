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
    <div className="min-h-screen bg-gray-900 text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            {plan ? `Book ${planTitles[plan as keyof typeof planTitles] || 'Your Plan'}` : 'Get Started'}
          </h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {getPlanMessage()}
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-xl p-6 sm:p-8">
          <ContactForm 
            isSalesInquiry={isSalesInquiry} 
            selectedPlan={plan}
            serviceName={service}
          />
        </div>
      </div>
    </div>
  );
}
import { Metadata } from 'next';
import FAQList from './FAQList';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | MEGAS TECH INC',
  description: 'Find answers to common questions about our services, pricing, and how we can help your business grow.',
};

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
  category: 'general' | 'services' | 'pricing' | 'support';
}

const faqs: FAQItem[] = [
  // General Questions
  {
    question: 'What services does MEGAS TECH INC provide?',
    answer: 'We offer a wide range of technology services including web development, mobile app development, UI/UX design, cloud solutions, IT consulting, and digital transformation services tailored to your business needs.',
    category: 'general',
  },
  {
    question: 'How can I get started with your services?',
    answer: 'Getting started is easy! Simply contact us through our contact form or give us a call. Our team will schedule a consultation to understand your requirements and propose the best solutions for your business.',
    category: 'general',
  },
  {
    question: 'What industries do you serve?',
    answer: 'We work with businesses across various industries including healthcare, finance, education, e-commerce, real estate, and more. Our solutions are tailored to meet the specific needs of each industry.',
    category: 'general',
  },
  
  // Services
  {
    question: 'What technologies do you use for web development?',
    answer: 'We use modern web technologies including React.js, Next.js, Node.js, TypeScript, and various backend technologies. Our stack is chosen based on the specific requirements of each project.',
    category: 'services',
  },
  {
    question: 'Do you provide ongoing support after project completion?',
    answer: 'Yes, we offer various support and maintenance packages to ensure your digital solutions continue to perform optimally. Our team is always available to assist with updates, security patches, and feature enhancements.',
    category: 'services',
  },
  
  // Pricing
  {
    question: 'How do you determine project pricing?',
    answer: 'Project costs are determined based on several factors including project scope, complexity, timeline, and specific requirements. We provide transparent pricing after an initial consultation and project assessment.',
    category: 'pricing',
  },
  {
    question: 'Do you offer flexible payment options?',
    answer: 'Yes, we offer flexible payment plans to accommodate different budgets. We typically break payments into milestones throughout the project lifecycle.',
    category: 'pricing',
  },
  
  // Support
  {
    question: 'What is your response time for support requests?',
    answer: 'Our standard response time is within 24 hours for general inquiries. For critical issues, we offer priority support with faster response times as part of our service level agreements (SLAs).',
    category: 'support',
  },
  {
    question: 'Do you provide training for the solutions you develop?',
    answer: 'Absolutely! We provide comprehensive training and documentation to ensure your team is comfortable using and maintaining the solutions we develop for you.',
    category: 'support',
  },
];

const categories = [
  { id: 'all', name: 'All Questions' },
  { id: 'general', name: 'General' },
  { id: 'services', name: 'Services' },
  { id: 'pricing', name: 'Pricing' },
  { id: 'support', name: 'Support' },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our services and how we can help your business grow.
          </p>
        </div>

        <FAQList faqs={faqs} categories={categories} />

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-gray-300 mb-6">
            Can&apos;t find the answer you&apos;re looking for? Our team is happy to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent focus:ring-offset-gray-900 transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

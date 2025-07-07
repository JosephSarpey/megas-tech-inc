import { Metadata } from 'next';
import ServicesList from '@/components/services/ServicesList';

export const metadata: Metadata = {
  title: 'Our Services | MEGAS TECH INC',
  description: 'Explore our comprehensive range of technology services designed to transform your business.',
};

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer a comprehensive range of technology services to help your business thrive in the digital age.
          </p>
        </div>

        <ServicesList />

        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to start your project?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help you achieve your business goals with our technology solutions.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent/90 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}

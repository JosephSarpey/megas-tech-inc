import { FiCode, FiLayers, FiSmartphone, FiGlobe } from 'react-icons/fi';
import ServicePage from '@/components/services/ServicePage';
import Image from 'next/image';

export const metadata = {
  title: 'Web Development Services | MEGAS TECH INC',
  description: 'Custom web development solutions tailored to your business needs. From responsive websites to complex web applications, we build digital experiences that drive results.',
};

export default function WebDevelopmentPage() {
  return (
    <ServicePage
      title="Web Development"
      description="We create stunning, high-performance websites and web applications that deliver exceptional user experiences and drive business growth."
      features={[
        {
          title: 'Custom Web Applications',
          description: 'Tailored solutions built with modern frameworks to meet your specific business requirements.',
          icon: <FiCode className="h-6 w-6" />,
        },
        {
          title: 'E-Commerce Solutions',
          description: 'Secure and scalable online stores that convert visitors into customers.',
          icon: <FiLayers className="h-6 w-6" />,
        },
        {
          title: 'Responsive Design',
          'description': 'Websites that look and function perfectly on all devices and screen sizes.',
          icon: <FiSmartphone className="h-6 w-6" />,
        },
        {
          title: 'SEO Optimization',
          description: 'Built with search engine best practices to improve your online visibility.',
          icon: <FiGlobe className="h-6 w-6" />,
        },
      ]}
      ctaText="Start Your Project"
      ctaHref="/contact?service=web-development"
    >
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900">Our Web Development Expertise</h3>
        <p className="text-gray-600">
          Our team of experienced developers specializes in creating custom web solutions using the latest technologies and industry best practices.
        </p>
        <div className="relative h-64 w-full rounded-lg overflow-hidden">
          <Image
            src="/images/web-development.jpg"
            alt="Web Development"
            fill
            className="object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h4 className="font-semibold text-gray-900">Technologies We Use</h4>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li>• React.js / Next.js</li>
              <li>• Node.js / Express</li>
              <li>• TypeScript</li>
              <li>• MongoDB / PostgreSQL</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h4 className="font-semibold text-gray-900">Our Process</h4>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li>• Discovery & Planning</li>
              <li>• UI/UX Design</li>
              <li>• Development</li>
              <li>• Testing & Launch</li>
            </ul>
          </div>
        </div>
      </div>
    </ServicePage>
  );
}

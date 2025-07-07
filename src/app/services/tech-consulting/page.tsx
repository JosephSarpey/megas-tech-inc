import { FiTrendingUp, FiTarget, FiPieChart, FiUsers } from 'react-icons/fi';
import ServicePage from '@/components/services/ServicePage';
import Image from 'next/image';

export const metadata = {
  title: 'Technology Consulting Services | MEGAS TECH INC',
  description: 'Strategic technology consulting to help your business leverage the right technologies for growth and innovation.',
};

export default function TechConsultingPage() {
  return (
    <ServicePage
      title="Tech Consulting"
      description="Expert guidance to help you make informed technology decisions and implement solutions that drive business growth."
      features={[
        {
          title: 'Digital Strategy',
          description: 'Comprehensive technology roadmaps aligned with your business objectives.',
          icon: <FiTarget className="h-6 w-6" />,
        },
        {
          title: 'Technology Assessment',
          description: 'In-depth analysis of your current tech stack and recommendations for improvement.',
          icon: <FiPieChart className="h-6 w-6" />,
        },
        {
          title: 'Digital Transformation',
          description: 'Guidance through your digital transformation journey with minimal disruption.',
          icon: <FiTrendingUp className="h-6 w-6" />,
        },
        {
          title: 'Team Augmentation',
          description: 'Access to expert consultants to supplement your existing team.',
          icon: <FiUsers className="h-6 w-6" />,
        },
      ]}
      ctaText="Schedule a Consultation"
      ctaHref="/contact?service=tech-consulting"
    >
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900">Our Consulting Approach</h3>
        <p className="text-gray-600">
          We take a holistic approach to technology consulting, ensuring that every recommendation aligns with your business goals and delivers measurable results.
        </p>
        <div className="relative h-64 w-full rounded-lg overflow-hidden">
          <Image
            src="/images/tech-consulting.jpg"
            alt="Technology Consulting"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="mt-6 space-y-6">
          <div>
            <h4 className="font-semibold text-lg text-gray-900 mb-2">Our Expertise</h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Cloud Architecture
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Digital Transformation
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                IT Strategy
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                System Integration
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Security & Compliance
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Data Analytics
              </li>
            </ul>
          </div>
          
          <div className="bg-primary/5 p-6 rounded-lg">
            <h4 className="font-semibold text-lg text-gray-900 mb-3">Why Choose Our Consulting Services?</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">•</span>
                <span>Industry experts with proven track records</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">•</span>
                <span>Practical, actionable recommendations</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">•</span>
                <span>Focus on delivering measurable business value</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">•</span>
                <span>Vendor-agnostic advice</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ServicePage>
  );
}

import { FiEdit3, FiLayers, FiSearch, FiTrendingUp, FiCheckCircle } from 'react-icons/fi';
import ServicePage from '@/components/services/ServicePage';
import Image from 'next/image';

export const metadata = {
  title: 'Content Management Services | MEGAS TECH INC',
  description: 'Professional content management solutions to help your business create, manage, and optimize digital content effectively.',
};

export default function ContentManagementPage() {
  return (
    <ServicePage
      title="Content Management"
      description="Streamline your digital content with our comprehensive content management solutions that make creating, managing, and optimizing content simple and efficient."
      features={[
        {
          title: 'Content Strategy',
          description: 'Comprehensive content planning and strategy development to align with your business goals and audience needs.',
          icon: <FiEdit3 className="h-6 w-6" />,
        },
        {
          title: 'CMS Implementation',
          description: 'Seamless integration of content management systems tailored to your specific requirements.',
          icon: <FiLayers className="h-6 w-6" />,
        },
        {
          title: 'SEO Optimization',
          description: 'Content optimization to improve search engine visibility and drive organic traffic.',
          icon: <FiSearch className="h-6 w-6" />,
        },
        {
          title: 'Content Analytics',
          description: 'Detailed analytics and reporting to measure content performance and ROI.',
          icon: <FiTrendingUp className="h-6 w-6" />,
        },
      ]}
      ctaText="Get Started with CMS"
      ctaHref="/contact?service=content-management"
    >
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900">Expert Content Management</h3>
        <p className="text-gray-600">
          Our content management solutions empower your team to create, edit, and manage digital content with ease. We implement user-friendly CMS platforms that streamline your content workflow.
        </p>
        <div className="relative h-64 w-full rounded-lg overflow-hidden">
          <Image
            src="/images/content-management.jpg"
            alt="Content Management"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h4 className="font-semibold text-gray-900">Our Solutions</h4>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li>• Custom CMS Development</li>
              <li>• Content Migration</li>
              <li>• Workflow Automation</li>
              <li>• Multi-channel Publishing</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h4 className="font-semibold text-gray-900">Our Process</h4>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li>• Content Audit & Strategy</li>
              <li>• System Implementation</li>
              <li>• Team Training</li>
              <li>• Ongoing Support</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <h4 className="text-lg font-semibold text-gray-900">Why Choose Our CMS Solutions?</h4>
          <ul className="space-y-2 text-gray-600">
            {[
              'User-friendly interfaces for non-technical teams',
              'Scalable solutions that grow with your business',
              'SEO-optimized content structure',
              'Secure and reliable platforms',
              'Seamless third-party integrations',
              'Dedicated support and maintenance'
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <FiCheckCircle className="text-accent mt-1 mr-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ServicePage>
  );
}
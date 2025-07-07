import { FiLayout, FiSmartphone, FiUsers, FiCheckCircle } from 'react-icons/fi';
import ServicePage from '@/components/services/ServicePage';
import Image from 'next/image';

export const metadata = {
  title: 'UI/UX Design Services | MEGAS TECH INC',
  description: 'Beautiful, intuitive, and user-centered designs that create meaningful digital experiences and drive engagement.',
};

export default function UIDesignPage() {
  return (
    <ServicePage
      title="UI/UX Design"
      description="We craft intuitive and visually stunning user experiences that engage your audience and drive conversions."
      features={[
        {
          title: 'User-Centered Design',
          description: 'Interfaces designed with your users in mind, ensuring ease of use and satisfaction.',
          icon: <FiUsers className="h-6 w-6" />,
        },
        {
          title: 'Responsive Interfaces',
          description: 'Seamless experiences across all devices and screen sizes.',
          icon: <FiSmartphone className="h-6 w-6" />,
        },
        {
          title: 'Visual Design',
          description: 'Stunning visuals that reflect your brand and captivate your audience.',
          icon: <FiLayout className="h-6 w-6" />,
        },
        {
          title: 'Usability Testing',
          description: 'Rigorous testing to ensure your design meets user needs and expectations.',
          icon: <FiCheckCircle className="h-6 w-6" />,
        },
      ]}
      ctaText="Start Your Design Project"
      ctaHref="/contact?service=ui-ux-design"
    >
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900">Our Design Process</h3>
        <p className="text-gray-600">
          We follow a proven design process to create interfaces that are not only beautiful but also highly functional and user-friendly.
        </p>
        <div className="relative h-64 w-full rounded-lg overflow-hidden">
          <Image
            src="/images/ui-ux-design.jpg"
            alt="UI/UX Design"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-4 mt-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="font-bold">1</span>
            </div>
            <div className="ml-4">
              <h4 className="font-semibold text-gray-900">Research & Discovery</h4>
              <p className="mt-1 text-sm text-gray-600">Understanding your users, business goals, and market landscape.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="font-bold">2</span>
            </div>
            <div className="ml-4">
              <h4 className="font-semibold text-gray-900">Wireframing</h4>
              <p className="mt-1 text-sm text-gray-600">Creating the blueprint for your digital product&apos;s structure and flow.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="font-bold">3</span>
            </div>
            <div className="ml-4">
              <h4 className="font-semibold text-gray-900">Visual Design</h4>
              <p className="mt-1 text-sm text-gray-600">Bringing your brand to life with stunning visuals and interactions.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="font-bold">4</span>
            </div>
            <div className="ml-4">
              <h4 className="font-semibold text-gray-900">Prototyping & Testing</h4>
              <p className="mt-1 text-sm text-gray-600">Validating designs with real users to ensure optimal experience.</p>
            </div>
          </div>
        </div>
      </div>
    </ServicePage>
  );
}

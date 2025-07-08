import { FiLayers, FiPenTool, FiMonitor, FiCheckCircle } from 'react-icons/fi';
import ServicePage from '@/components/services/ServicePage';
import Image from 'next/image';

export const metadata = {
  title: 'Graphic Design Services | MEGAS TECH INC',
  description: 'Professional graphic design services that bring your brand to life with stunning visuals and creative solutions.',
};

export default function GraphicDesignPage() {
  return (
    <ServicePage
      title="Graphic Design"
      description="Transform your brand with our creative graphic design services. From logos to marketing materials, we create visually stunning designs that make an impact."
      features={[
        {
          title: 'Brand Identity',
          description: 'Logo design, color palettes, and brand guidelines that define your unique identity.',
          icon: <FiLayers className="h-6 w-6" />,
        },
        {
          title: 'Print Design',
          description: 'Business cards, brochures, flyers, and other print materials that make an impact.',
          icon: <FiPenTool className="h-6 w-6" />,
        },
        {
          title: 'Digital Graphics',
          description: 'Social media graphics, banners, and digital ads that capture attention online.',
          icon: <FiMonitor className="h-6 w-6" />,
        }
      ]}
      ctaText="Start Your Design Project"
      ctaHref="/contact?service=graphic-design"
    >
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900">Creative Design Solutions</h3>
        <p className="text-gray-600">
          Our talented designers combine creativity with strategy to deliver designs that not only look amazing but also effectively communicate your brand message and drive engagement.
        </p>
        <div className="relative h-64 w-full rounded-lg overflow-hidden">
          <Image
            src="/images/graphic-design.jpg"
            alt="Graphic Design"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h4 className="font-semibold text-gray-900">Design Specialties</h4>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li>• Logo & Brand Identity</li>
              <li>• Print & Digital Marketing</li>
              <li>• Social Media Graphics</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h4 className="font-semibold text-gray-900">Our Process</h4>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li>• Discovery & Research</li>
              <li>• Concept Development</li>
              <li>• Design & Refinement</li>
              <li>• Final Delivery</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <h4 className="text-lg font-semibold text-gray-900">Why Choose Our Design Services?</h4>
          <ul className="space-y-2 text-gray-600">
            {[
              'Experienced designers with a keen eye for detail',
              'Custom solutions tailored to your brand',
              'Fast turnaround times without compromising quality',
              'Multiple revision rounds to ensure your satisfaction',
              'Modern and clean design aesthetics',
              'Responsive designs that work across all platforms'
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
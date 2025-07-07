import { FiServer, FiShield, FiZap, FiGlobe } from 'react-icons/fi';
import ServicePage from '@/components/services/ServicePage';
import Image from 'next/image';

export const metadata = {
  title: 'Web Hosting Services | MEGAS TECH INC',
  description: 'Reliable and high-performance web hosting solutions to keep your website fast, secure, and always online.',
};

export default function WebHostingPage() {
  return (
    <ServicePage
      title="Web Hosting"
      description="Fast, secure, and reliable web hosting solutions that ensure your website is always available and performing at its best."
      features={[
        {
          title: '99.9% Uptime',
          description: 'Our robust infrastructure ensures your website stays online with minimal downtime.',
          icon: <FiServer className="h-6 w-6" />,
        },
        {
          title: 'Enhanced Security',
          description: 'Enterprise-grade security measures to protect your website from threats.',
          icon: <FiShield className="h-6 w-6" />,
        },
        {
          title: 'Lightning Fast',
          description: 'SSD-powered servers and optimized configurations for blazing fast load times.',
          icon: <FiZap className="h-6 w-6" />,
        },
        {
          title: 'Global CDN',
          description: 'Content delivered quickly to users worldwide through our global CDN network.',
          icon: <FiGlobe className="h-6 w-6" />,
        },
      ]}
      ctaText="Get Started with Hosting"
      ctaHref="/contact?service=web-hosting"
    >
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900">Premium Web Hosting Solutions</h3>
        <p className="text-gray-600">
          Our hosting services are designed to provide the perfect balance of performance, security, and reliability for websites of all sizes.
        </p>
        <div className="relative h-64 w-full rounded-lg overflow-hidden">
          <Image
            src="/images/web-hosting.jpg"
            alt="Web Hosting"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-900">Shared Hosting</h4>
            <p className="text-sm text-gray-600">Perfect for small to medium websites with moderate traffic.</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-900">VPS Hosting</h4>
            <p className="text-sm text-gray-600">Dedicated resources for growing websites and applications.</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-900">Dedicated Servers</h4>
            <p className="text-sm text-gray-600">Maximum performance and control for high-traffic websites.</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-900">WordPress Hosting</h4>
            <p className="text-sm text-gray-600">Optimized specifically for WordPress websites.</p>
          </div>
        </div>
      </div>
    </ServicePage>
  );
}

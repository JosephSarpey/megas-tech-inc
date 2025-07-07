import { FiShield, FiClock, FiServer, FiTool } from 'react-icons/fi';
import ServicePage from '@/components/services/ServicePage';
import Image from 'next/image';

export const metadata = {
  title: 'Website & Application Maintenance | MEGAS TECH INC',
  description: 'Proactive maintenance and support services to keep your digital assets running smoothly and securely.',
};

export default function MaintenancePage() {
  return (
    <ServicePage
      title="Maintenance & Support"
      description="Keep your digital assets running at peak performance with our comprehensive maintenance and support services."
      features={[
        {
          title: 'Regular Updates',
          description: 'Keep your software up-to-date with the latest features and security patches.',
          icon: <FiClock className="h-6 w-6" />,
        },
        {
          title: 'Security Monitoring',
          description: '24/7 monitoring to protect your applications from threats and vulnerabilities.',
          icon: <FiShield className="h-6 w-6" />,
        },
        {
          title: 'Performance Optimization',
          description: 'Continuous improvements to ensure your applications run at optimal speed.',
          icon: <FiServer className="h-6 w-6" />,
        },
        {
          title: 'Technical Support',
          description: 'Expert assistance whenever you need it to resolve issues quickly.',
          icon: <FiTool className="h-6 w-6" />,
        },
      ]}
      ctaText="Get Maintenance Support"
      ctaHref="/contact?service=maintenance"
    >
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900">Comprehensive Maintenance Plans</h3>
        <p className="text-gray-600">
          Our maintenance services are designed to provide peace of mind, ensuring your digital presence remains secure, up-to-date, and performing at its best.
        </p>
        <div className="relative h-64 w-full rounded-lg overflow-hidden">
          <Image
            src="/images/maintenance.jpg"
            alt="Website Maintenance"
            fill
            className="object-cover"
          />
        </div>

        <div className="mt-6 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h4 className="font-semibold text-lg text-gray-900 mb-4">Our Maintenance Services Include:</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>Software updates and patches</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>Security monitoring and updates</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>Performance optimization</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>Backup management</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>Bug fixes and troubleshooting</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>Content updates</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>Uptime monitoring</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>Technical support</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 p-6 rounded-lg">
            <h4 className="font-semibold text-lg text-gray-900 mb-3">Why Regular Maintenance Matters</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">•</span>
                <div>
                  <span className="font-medium">Security:</span> Protect against vulnerabilities and cyber threats
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">•</span>
                <div>
                  <span className="font-medium">Performance:</span> Ensure fast loading times and smooth operation
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">•</span>
                <div>
                  <span className="font-medium">Reliability:</span> Minimize downtime and technical issues
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">•</span>
                <div>
                  <span className="font-medium">User Experience:</span> Keep your site or app running smoothly for visitors
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ServicePage>
  );
}

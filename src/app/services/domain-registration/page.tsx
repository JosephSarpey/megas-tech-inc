import { FiSearch, FiShield, FiGlobe, FiClock } from 'react-icons/fi';
import ServicePage from '@/components/services/ServicePage';
import Image from 'next/image';

export const metadata = {
  title: 'Domain Registration Services | MEGAS TECH INC',
  description: 'Secure your perfect domain name with our easy and affordable domain registration services.',
};

export default function DomainRegistrationPage() {
  return (
    <ServicePage
      title="Domain Registration"
      description="Find and register the perfect domain name for your business with our easy-to-use domain registration services."
      features={[
        {
          title: 'Domain Search',
          description: 'Quickly find available domain names with our intuitive search tool.',
          icon: <FiSearch className="h-6 w-6" />,
        },
        {
          title: 'Domain Privacy',
          description: 'Protect your personal information with our domain privacy protection.',
          icon: <FiShield className="h-6 w-6" />,
        },
        {
          title: 'TLD Options',
          description: 'Wide variety of TLDs including .com, .net, .org, and many more.',
          icon: <FiGlobe className="h-6 w-6" />,
        },
        {
          title: 'Auto-Renewal',
          description: 'Never lose your domain with our automatic renewal service.',
          icon: <FiClock className="h-6 w-6" />,
        },
      ]}
      ctaText="Search Domains"
      ctaHref="/contact?service=domain-registration"
    >
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900">Find Your Perfect Domain</h3>
        <p className="text-gray-600">
          Your domain name is your online identity. Secure it today with our reliable domain registration services.
        </p>
        <div className="relative h-64 w-full rounded-lg overflow-hidden">
          <Image
            src="/images/domain-registration.jpg"
            alt="Domain Registration"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-900">Domain Management Tools</h4>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Easy domain transfer process</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>DNS management</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Email forwarding</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Subdomain creation</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Domain locking for security</span>
            </li>
          </ul>
        </div>
      </div>
    </ServicePage>
  );
}

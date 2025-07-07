import { FiShoppingCart, FiCreditCard, FiTruck, FiBarChart2 } from 'react-icons/fi';
import ServicePage from '@/components/services/ServicePage';
import Image from 'next/image';

export const metadata = {
  title: 'E-Commerce Solutions | MEGAS TECH INC',
  description: 'Build and grow your online store with our comprehensive e-commerce solutions.',
};

export default function ECommercePage() {
  return (
    <ServicePage
      title="E-Commerce Solutions"
      description="Transform your online business with our powerful and scalable e-commerce solutions designed to drive sales and enhance customer experience."
      features={[
        {
          title: 'Online Store Setup',
          description: 'Beautiful, mobile-optimized online stores that convert visitors into customers.',
          icon: <FiShoppingCart className="h-6 w-6" />,
        },
        {
          title: 'Secure Payments',
          description: 'Multiple payment gateway integrations with top-tier security standards.',
          icon: <FiCreditCard className="h-6 w-6" />,
        },
        {
          title: 'Inventory Management',
          description: 'Easily manage products, categories, and stock levels in real-time.',
          icon: <FiTruck className="h-6 w-6" />,
        },
        {
          title: 'Analytics & Reporting',
          description: 'Gain insights into your sales, customers, and marketing performance.',
          icon: <FiBarChart2 className="h-6 w-6" />,
        },
      ]}
      ctaText="Launch Your Store"
      ctaHref="/contact?service=e-commerce"
    >
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900">Complete E-Commerce Solutions</h3>
        <p className="text-gray-600">
          From small boutique shops to large online marketplaces, we create e-commerce experiences that drive results and grow your business.
        </p>
        <div className="relative h-64 w-full rounded-lg overflow-hidden">
          <Image
            src="/images/ecommerce-solutions.jpg"
            alt="E-Commerce Solutions"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Platforms We Work With</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                <span>Shopify</span>
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                <span>WooCommerce</span>
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                <span>Magento</span>
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                <span>Custom Solutions</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                <span>Mobile-Responsive Design</span>
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                <span>SEO Optimization</span>
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                <span>Secure Checkout</span>
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                <span>Order Management</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ServicePage>
  );
}

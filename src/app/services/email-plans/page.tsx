import { Metadata } from 'next';
import { FiMail, FiCheck, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Email Hosting Plans | MEGAS TECH INC',
  description: 'Professional email hosting solutions for businesses of all sizes. Get reliable, secure, and feature-rich email services.',
};

const plans = [
  {
    name: 'Starter',
    price: '$2.99',
    period: '/mailbox/month',
    description: 'Perfect for small businesses and individuals',
    features: [
      '5GB Storage',
      '1 Email Domain',
      '10 Email Accounts',
      'Webmail Access',
      'Spam Protection',
      'Mobile Access'
    ],
    featured: false
  },
  {
    name: 'Business',
    price: '$5.99',
    period: '/mailbox/month',
    description: 'Ideal for growing businesses',
    features: [
      '25GB Storage',
      '5 Email Domains',
      'Unlimited Email Accounts',
      'Webmail & IMAP/POP3',
      'Advanced Spam Protection',
      'Mobile & Desktop Access',
      'Email Forwarding',
      'Auto-Responders'
    ],
    featured: true
  },
  {
    name: 'Enterprise',
    price: '$12.99',
    period: '/mailbox/month',
    description: 'For large organizations with advanced needs',
    features: [
      'Unlimited Storage',
      'Unlimited Domains',
      'Unlimited Email Accounts',
      'All Business Features',
      'Priority Support',
      'Email Archiving',
      'Email Encryption',
      'API Access',
      '99.9% Uptime SLA'
    ],
    featured: false
  }
];

export default function EmailPlans() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
            <FiMail className="w-8 h-8 text-accent" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Email Hosting Plans</h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional email hosting with your domain name. Secure, reliable, and packed with features to keep your business connected.
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-xl overflow-hidden border ${plan.featured ? 'border-accent transform scale-105 shadow-lg shadow-accent/20' : 'border-gray-700'}`}
            >
              {plan.featured && (
                <div className="bg-accent text-white text-center py-2 font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8 bg-gray-800 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <FiCheck className="text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={"/contact?service=email-plans&plan=" + plan.name.toLowerCase()}
                  className="mt-auto w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent/90 transition-colors duration-300"
                >
                  Get Started
                  <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Why Choose Our Email Hosting?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Reliable & Secure</h3>
              <p className="text-gray-300">
                Our enterprise-grade infrastructure ensures 99.9% uptime and robust security measures to protect your communications.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Easy to Use</h3>
              <p className="text-gray-300">
                Intuitive webmail interface and easy setup with your favorite email clients on any device.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
              <p className="text-gray-300">
                Our dedicated support team is available around the clock to assist you with any questions or issues.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Scalable Solutions</h3>
              <p className="text-gray-300">
                Easily upgrade or downgrade your plan as your business grows and your needs change.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Have Questions About Our Email Plans?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team is here to help you choose the perfect email hosting solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent/90 transition-colors duration-300"
            >
              Contact Sales
              <FiArrowRight className="ml-2" />
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-base font-medium rounded-md text-white hover:bg-gray-800 transition-colors duration-300"
            >
              View FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

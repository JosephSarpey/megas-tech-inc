import { FiCheck } from 'react-icons/fi';
import Link from 'next/link';

type PricingTier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
  href: string;
};

const Pricing = () => {
  const pricingTiers: PricingTier[] = [
    {
      name: 'Starter',
      price: '$999',
      description: 'Perfect for small businesses getting started',
      features: [
        '5-10 Page Website',
        'Responsive Design',
        'Basic SEO',
        'Contact Form',
        '1 Month Support',
      ],
      cta: 'Get Started',
      href: '/booking?plan=starter',
    },
    {
      name: 'Professional',
      price: '$2,999',
      description: 'Ideal for growing businesses',
      popular: true,
      features: [
        '10-15 Page Website',
        'E-commerce Functionality',
        'Advanced SEO',
        'Content Management System',
        '3 Months Support',
        'Admin Analytics',
      ],
      cta: 'Get Professional',
      href: '/booking?plan=professional',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large scale solutions',
      features: [
        'Custom Web Application',
        'API Integration',
        'Priority Support',
        'Dedicated Account Manager',
        'Ongoing Maintenance',
        'Advanced Security',
        'Custom Development',
      ],
      cta: 'Contact Sales',
      href: '/booking?plan=enterprise',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            Choose the perfect plan for your business needs. No hidden fees.
          </p>
        </div>

        <div className="mt-16 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 lg:max-w-6xl lg:mx-auto">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative border rounded-2xl shadow-sm divide-y ${
                tier.popular
                  ? 'border-accent bg-white ring-2 ring-accent/20'
                  : 'border-gray-200 bg-white'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-white text-xs font-semibold px-4 py-1 rounded-full">
                    Most popular
                  </span>
                </div>
              )}
              <div className="p-6">
                <h2 className="text-lg font-medium text-gray-900">{tier.name}</h2>
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">
                    {tier.price}
                  </span>
                  <span className="ml-1 text-xl font-semibold">
                    {tier.price !== 'Custom' ? '/project' : ''}
                  </span>
                </p>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <Link
                  href={tier.href}
                  className={`mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium ${
                    tier.popular
                      ? 'bg-accent text-white hover:bg-accent/90'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                  What&apos;s included
                </h3>
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex">
                      <FiCheck
                        className="flex-shrink-0 h-5 w-5 text-green-500"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base text-gray-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white shadow rounded-lg p-6">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Need something custom?</h2>
              <p className="mt-2 text-gray-600">
                We can create a custom solution tailored to your specific requirements.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link
                href="/contact/sales"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent/90"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-900">Frequently asked questions</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, bank transfers, and PayPal. For enterprise plans, we also accept checks and ACH transfers.'
              },
              {
                question: 'Can I upgrade or downgrade later?',
                answer: 'Absolutely! You can upgrade or downgrade your plan at any time. We will corporate the difference.'
              },
              {
                question: 'Is there a money-back guarantee?',
                answer: 'Yes, we offer a 14-day money-back guarantee on all our plans. If you are not satisfied, we will give you a full refund.'
              },
              {
                question: 'How does the free trial work?',
                answer: 'Start your free trial and get full access to all features. No credit card required. Cancel anytime during the trial period.'
              },
              {
                question: 'What kind of support do you offer?',
                answer: 'We offer email and chat support with a 24-hour response time. Priority support is available for enterprise customers.'
              },
              {
                question: 'Do you offer discounts for non-profits?',
                answer: 'Yes, we offer special pricing for registered non-profit organizations. Contact our sales team for more information.'
              }
            ].map((faq, index) => (
              <div key={index} className="pt-6">
                <dt className="text-lg font-medium text-gray-900">{faq.question}</dt>
                <dd className="mt-2 text-base text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

import { FiCheck, FiTag } from 'react-icons/fi';
import Link from 'next/link';

type PricingTier = {
  name: string;
  price: string;
  originalPrice?: string; // For showing strikethrough original price
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
  href: string;
  billing?: string;
  isPromo?: boolean; // Flag to show promotional badge
};

type ServicePricing = {
  title: string;
  description: string;
  tiers: PricingTier[];
};

const Pricing = () => {
  const isPromoActive = true; // You can control this with a feature flag or time-based

  const services: ServicePricing[] = [
    {
      title: 'Full Stack Development',
      description: 'End-to-end web application development with both frontend and backend components',
      tiers: [
        {
          name: 'Basic',
          price: isPromoActive ? '$3,999' : '$4,999',
          originalPrice: isPromoActive ? '$4,999' : undefined,
          description: 'Ideal for MVPs and small applications',
          features: [
            'Basic UI/UX Design',
            'Frontend + Backend Development',
            'Basic API Integration',
            'Database Setup',
            '1 Month Support',
          ],
          cta: 'Get Started',
          href: '/booking?service=fullstack&plan=basic',
          isPromo: isPromoActive,
        },
        {
          name: 'Professional',
          price: isPromoActive ? '$7,999' : '$9,999',
          originalPrice: isPromoActive ? '$9,999' : undefined,
          description: 'For growing businesses with more complex needs',
          popular: true,
          features: [
            'Custom UI/UX Design',
            'Advanced Frontend + Backend',
            'RESTful API Development',
            'Database Design & Optimization',
            'Authentication System',
            '3 Months Support',
          ],
          cta: 'Get Professional',
          href: '/booking?service=fullstack&plan=professional',
          isPromo: isPromoActive,
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          description: 'Large-scale applications with complex requirements',
          features: [
            'Custom Architecture',
            'Microservices',
            'Advanced Security',
            'Scalability Planning',
            'Dedicated Team',
            'Ongoing Maintenance',
          ],
          cta: 'Contact Sales',
          href: '/booking?service=fullstack&plan=enterprise',
        },
      ],
    },
    {
      title: 'Backend Development',
      description: 'Robust server-side solutions and API development',
      tiers: [
        {
          name: 'Basic',
          price: isPromoActive ? '$1,999' : '$2,999',
          originalPrice: isPromoActive ? '$2,999' : undefined,
          description: 'Simple backend services',
          features: [
            'REST API Development',
            'Database Integration',
            'Basic Authentication',
            '1 Month Support',
          ],
          cta: 'Get Started',
          href: '/booking?service=backend&plan=basic',
          isPromo: isPromoActive,
        },
        {
          name: 'Professional',
          price: isPromoActive ? '$4,999' : '$6,999',
          originalPrice: isPromoActive ? '$6,999' : undefined,
          description: 'Advanced backend solutions',
          features: [
            'GraphQL/REST API',
            'Database Design',
            'Advanced Authentication',
            'Caching',
            '3 Months Support',
          ],
          cta: 'Get Professional',
          href: '/booking?service=backend&plan=professional',
          isPromo: isPromoActive,
        },
      ],
    },
    {
      title: 'Frontend Development',
      description: 'Beautiful, responsive, and interactive user interfaces',
      tiers: [
        {
          name: 'Basic',
          price: isPromoActive ? '$999' : '$1,999',
          originalPrice: isPromoActive ? '$1,999' : undefined,
          description: 'Simple frontend development',
          features: [
            'Responsive Design',
            'Basic Animations',
            'API Integration',
            '1 Month Support',
          ],
          cta: 'Get Started',
          href: '/booking?service=frontend&plan=basic',
          isPromo: isPromoActive,
        },
        {
          name: 'Professional',
          price: isPromoActive ? '$2,999' : '$4,999',
          originalPrice: isPromoActive ? '$4,999' : undefined,
          description: 'Advanced frontend solutions',
          features: [
            'Custom UI/UX Design',
            'Advanced Animations',
            'State Management',
            'Performance Optimization',
            '3 Months Support',
          ],
          cta: 'Get Professional',
          href: '/booking?service=frontend&plan=professional',
          isPromo: isPromoActive,
        },
      ],
    },
    {
      title: 'Web Hosting',
      description: 'Reliable and scalable hosting solutions for your website',
      tiers: [
        {
          name: 'Starter',
          price: isPromoActive ? '$9' : '$19',
          originalPrice: isPromoActive ? '$19' : undefined,
          description: 'Perfect for small websites and blogs',
          billing: '/month',
          features: [
            '10 GB SSD Storage',
            'Unmetered Bandwidth',
            'Free SSL Certificate',
            '1 Website',
            'Free Domain for 1 Year',
          ],
          cta: 'Get Started',
          href: '/booking?service=hosting&plan=starter',
          isPromo: isPromoActive,
        },
        {
          name: 'Business',
          price: isPromoActive ? '$19' : '$39',
          originalPrice: isPromoActive ? '$39' : undefined,
          description: 'Ideal for growing businesses',
          billing: '/month',
          popular: true,
          features: [
            '50 GB SSD Storage',
            'Unmetered Bandwidth',
            'Free SSL Certificate',
            'Unlimited Websites',
            'Free Domain for 1 Year',
            'Daily Backups',
          ],
          cta: 'Get Business',
          href: '/booking?service=hosting&plan=business',
          isPromo: isPromoActive,
        },
      ],
    },
    {
      title: 'Domain Registration',
      description: 'Secure your perfect domain name with our competitive pricing',
      tiers: [
        {
          name: '.com',
          price: isPromoActive ? '$6.99' : '$12.99',
          originalPrice: isPromoActive ? '$12.99' : undefined,
          description: 'The most popular domain extension worldwide',
          billing: '/year',
          features: [
            'Free WHOIS Privacy',
            'Domain Lock',
            'Auto-Renewal',
            'Email Forwarding',
            'DNS Management'
          ],
          cta: 'Register',
          href: '/booking?service=domain&tld=com',
          popular: true,
          isPromo: isPromoActive,
        },
        {
          name: '.net',
          price: isPromoActive ? '$7.99' : '$15.99',
          originalPrice: isPromoActive ? '$15.99' : undefined,
          description: 'Great for technology and network services',
          billing: '/year',
          features: [
            'Free WHOIS Privacy',
            'Domain Lock',
            'Auto-Renewal',
            'Email Forwarding',
            'DNS Management'
          ],
          cta: 'Register',
          href: '/booking?service=domain&tld=net',
          isPromo: isPromoActive,
        },
        {
          name: '.io',
          price: isPromoActive ? '$19.99' : '$39.99',
          originalPrice: isPromoActive ? '$39.99' : undefined,
          description: 'Popular among tech startups and developers',
          billing: '/year',
          features: [
            'Free WHOIS Privacy',
            'Domain Lock',
            'Auto-Renewal',
            'Email Forwarding',
            'DNS Management'
          ],
          cta: 'Register',
          href: '/booking?service=domain&tld=io',
          isPromo: isPromoActive,
        },
        {
          name: '.org',
          price: isPromoActive ? '$7.99' : '$14.99',
          originalPrice: isPromoActive ? '$14.99' : undefined,
          description: 'Ideal for non-profits and organizations',
          billing: '/year',
          features: [
            'Free WHOIS Privacy',
            'Domain Lock',
            'Auto-Renewal',
            'Email Forwarding',
            'DNS Management'
          ],
          cta: 'Register',
          href: '/booking?service=domain&tld=org',
          isPromo: isPromoActive,
        },
        {
          name: '.online',
          price: isPromoActive ? '$14.99' : '$29.99',
          originalPrice: isPromoActive ? '$29.99' : undefined,
          description: 'Perfect for digital businesses and services',
          billing: '/year',
          features: [
            'Free WHOIS Privacy',
            'Domain Lock',
            'Auto-Renewal',
            'Email Forwarding',
            'DNS Management'
          ],
          cta: 'Register',
          href: '/booking?service=domain&tld=online',
          isPromo: isPromoActive,
        },
        {
          name: '.shop',
          price: isPromoActive ? '$12.99' : '$24.99',
          originalPrice: isPromoActive ? '$24.99' : undefined,
          description: 'Designed for e-commerce and retail businesses',
          billing: '/year',
          features: [
            'Free WHOIS Privacy',
            'Domain Lock',
            'Auto-Renewal',
            'Email Forwarding',
            'DNS Management',
            'E-commerce Ready'
          ],
          cta: 'Register',
          href: '/booking?service=domain&tld=shop',
          isPromo: isPromoActive,
        }
      ]
    },
    {
      title: 'Email Plans',
      description: 'Professional email hosting with your domain name',
      tiers: [
        {
          name: 'Starter',
          price: '$1.49',
          originalPrice: '$2.99',
          description: 'Perfect for individuals and small businesses',
          billing: '/mailbox/month',
          features: [
            '5GB Storage per Mailbox',
            'Email on your domain',
            'Webmail Access',
            'IMAP/POP3 Support',
            'Email Forwarding',
            'Spam & Virus Protection',
            'Mobile & Desktop Access',
            'Basic Support'
          ],
          cta: 'Get Started',
          href: '/booking?service=email&plan=starter',
          isPromo: true,
          popular: false
        },
        {
          name: 'Premium',
          price: '$2.99',
          originalPrice: '$4.99',
          description: 'Ideal for growing businesses with more needs',
          billing: '/mailbox/month',
          popular: true,
          features: [
            '50GB Storage per Mailbox',
            'Email on your domain',
            'Webmail Access',
            'IMAP/POP3 Support',
            'Email Forwarding',
            'Advanced Spam & Virus Protection',
            'Mobile & Desktop Access',
            'Priority Support',
            'Email Archiving',
            'Shared Calendars & Contacts'
          ],
          cta: 'Get Premium',
          href: '/booking?service=email&plan=premium',
          isPromo: true
        },
        {
          name: 'Enterprise',
          price: '$7.99',
          originalPrice: '$12.99',
          description: 'For businesses with advanced email needs',
          billing: '/mailbox/month',
          features: [
            'Unlimited Storage',
            'Email on your domain',
            'Webmail Access',
            'IMAP/POP3 Support',
            'Email Forwarding',
            'Advanced Spam & Virus Protection',
            'Mobile & Desktop Access',
            '24/7 Priority Support',
            'Email Archiving & eDiscovery',
            'Shared Calendars & Contacts',
            'Custom Email Retention Policies',
            'Advanced Security & Compliance',
            'Email Encryption',
            'Unlimited Aliases',
            'API Access'
          ],
          cta: 'Contact Sales',
          href: '/booking?service=email&plan=enterprise',
          isPromo: true
        }
      ]
    },
    {
      title: 'Maintenance & Support',
      description: 'Keep your website running smoothly with our maintenance plans',
      tiers: [
        {
          name: 'Basic',
          price: isPromoActive ? '$49' : '$99',
          originalPrice: isPromoActive ? '$99' : undefined,
          description: 'Essential maintenance for small websites',
          billing: '/month',
          features: [
            'Weekly Backups',
            'Uptime Monitoring',
            'Security Updates',
            'Email Support',
          ],
          cta: 'Get Started',
          href: '/booking?service=maintenance&plan=basic',
          isPromo: isPromoActive,
        },
        {
          name: 'Premium',
          price: isPromoActive ? '$149' : '$249',
          originalPrice: isPromoActive ? '$249' : undefined,
          description: 'Comprehensive support for business websites',
          billing: '/month',
          popular: true,
          features: [
            'Daily Backups',
            '24/7 Monitoring',
            'Security Updates & Patches',
            'Priority Support',
            'Monthly Performance Report',
          ],
          cta: 'Get Premium',
          href: '/booking?service=maintenance&plan=premium',
          isPromo: isPromoActive,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Our Development Services
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Choose the right service and plan that fits your project needs
          </p>
          {isPromoActive && (
            <div className="mt-6 space-y-3">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                🎉 Special Launch Offer: Save up to 40% on all plans! Limited time only.
              </div>
              <p className="text-sm text-gray-500">
                * Promotional pricing is valid for the first year only. Standard rates apply after the first year.
              </p>
            </div>
          )}
        </div>

        {services.map((service, serviceIndex) => (
          <div key={serviceIndex} className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{service.title}</h2>
            <p className="text-gray-600 mb-8">{service.description}</p>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {service.tiers.map((tier, tierIndex) => (
                <div
                  key={`${service.title}-${tierIndex}`}
                  className={`relative border rounded-2xl shadow-sm divide-y ${
                    tier.popular
                      ? 'border-accent bg-white ring-2 ring-accent/20'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-accent text-white text-xs font-semibold px-4 py-1 rounded-full">
                        Most popular
                      </span>
                    </div>
                  )}
                  {tier.isPromo && !tier.popular && (
                    <div className="absolute -top-3 right-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        <FiTag className="mr-1 h-3 w-3" /> Limited Time
                      </span>
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900">{tier.name}</h3>
                    <p className="mt-2 text-sm text-gray-500">{tier.description}</p>
                    <p className="mt-4 flex items-baseline text-gray-900">
                      {tier.originalPrice && (
                        <span className="text-lg font-normal text-gray-500 line-through mr-2">
                          {tier.originalPrice}
                        </span>
                      )}
                      <span className="text-4xl font-extrabold">{tier.price}</span>
                      <span className="ml-1 text-lg font-semibold">
                        {tier.billing || (tier.price !== 'Custom' ? '/project' : '')}
                      </span>
                    </p>
                    <ul className="mt-6 space-y-4">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex">
                          <FiCheck className="flex-shrink-0 h-5 w-5 text-green-500" />
                          <span className="ml-3 text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Link
                        href={tier.href}
                        className="block w-full bg-accent text-white text-center py-3 px-6 rounded-md hover:bg-accent/90 transition-colors"
                      >
                        {tier.cta}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Custom Solution Section */}
        <div className="mt-16 bg-white shadow rounded-lg p-6 mb-20">
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
      </div>
    </div>
  );
};

export default Pricing;

import { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';
import { FiCheckCircle, FiUsers, FiShield, FiHeadphones, FiClock } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Sales Inquiry | MEGAS TECH INC',
  description: 'Contact our sales team to discuss how we can help grow your business.',
};

export default function SalesContact() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Sales Inquiry</h1>
          <div className="w-16 sm:w-20 h-1 bg-accent mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            Ready to take your business to the next level? Our sales team is here to help you find the perfect solution.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-5 sm:p-8 border border-gray-700/50 overflow-hidden">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-accent">Get in Touch</h2>
            <p className="mb-5 sm:mb-6 text-gray-300 text-sm sm:text-base">
              Fill out the form and one of our sales representatives will contact you within 24 hours to discuss your project requirements.
            </p>
            <div className="relative">
              <ContactForm isSalesInquiry={true} />
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <h3 className="text-xl font-semibold mb-6 text-accent flex items-center">
                <FiCheckCircle className="mr-2 text-green-500" />
                Why Choose Us?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-500/20 text-green-400">
                      <FiUsers className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-300 font-medium">Expert Team</p>
                    <p className="text-gray-400 text-sm">Our experienced professionals deliver top-notch solutions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-500/20 text-green-400">
                      <FiShield className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-300 font-medium">Proven Results</p>
                    <p className="text-gray-400 text-sm">We deliver measurable results for our clients.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-500/20 text-green-400">
                      <FiHeadphones className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-300 font-medium">24/7 Support</p>
                    <p className="text-gray-400 text-sm">Round-the-clock assistance for all your needs.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <h3 className="text-xl font-semibold mb-6 text-accent flex items-center">
                <FiClock className="mr-2 text-green-500" />
                Our Process
              </h3>
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20 text-green-400 text-sm font-medium">1</div>
                    <div className="w-px h-full bg-gray-700 mt-2"></div>
                  </div>
                  <div className="pb-6">
                    <p className="text-gray-300 font-medium">Initial Consultation</p>
                    <p className="text-gray-400 text-sm">We will discuss your project requirements and goals.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20 text-green-400 text-sm font-medium">2</div>
                    <div className="w-px h-full bg-gray-700 mt-2"></div>
                  </div>
                  <div className="pb-6">
                    <p className="text-gray-300 font-medium">Custom Solution</p>
                    <p className="text-gray-400 text-sm">We will create a tailored proposal for your business.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20 text-green-400 text-sm font-medium">3</div>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Implementation</p>
                    <p className="text-gray-400 text-sm">Our team will bring your solution to life.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

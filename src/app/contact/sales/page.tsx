import { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';
import { FiCheckCircle, FiUsers, FiShield, FiHeadphones, FiClock } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Sales Inquiry | MEGAS TECH INC',
  description: 'Contact our sales team to discuss how we can help grow your business.',
};

export default function SalesContact() {
  return (
    <div className="min-h-screen pt-32 pb-24" style={{ background: 'var(--bg-primary)' }}>
      {/* Background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, black 30%, transparent 100%)',
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="label-pill mb-6 inline-flex shadow-[0_0_20px_rgba(16,185,129,0.15)]">Sales</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif' }}>
            Talk to <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">Sales</span>
          </h1>
          <p className="text-lg md:text-xl text-[#A1A1AA] leading-relaxed">
            Ready to take your business to the next level? Our sales team is here to help you find the perfect solution.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Form Side */}
          <div className="lg:col-span-7 relative group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none transition-all duration-500 group-hover:bg-accent/10" />
            
            <div className="bg-[#121214] border border-white/5 p-8 md:p-10 rounded-[24px] shadow-2xl relative z-10 backdrop-blur-xl transition-all duration-300 hover:border-accent/30">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif' }}>Get in Touch</h2>
              <p className="mb-10 text-[#A1A1AA] text-lg">
                Fill out the form and one of our sales representatives will contact you within 24 hours.
              </p>
              <div className="relative">
                <ContactForm isSalesInquiry={true} />
              </div>
            </div>
          </div>
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#121214] border border-white/5 p-8 rounded-[24px] transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.05)]">
              <h3 className="text-xl font-bold mb-6 text-white tracking-tight flex items-center" style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif' }}>
                <FiCheckCircle className="mr-3 text-accent" />
                Why Choose Us?
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                      <FiUsers className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-white font-medium mb-1">Expert Team</p>
                    <p className="text-[#A1A1AA] text-sm leading-relaxed">Our experienced professionals deliver top-notch solutions.</p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                      <FiShield className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-white font-medium mb-1">Proven Results</p>
                    <p className="text-[#A1A1AA] text-sm leading-relaxed">We deliver measurable results for our clients.</p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                      <FiHeadphones className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-white font-medium mb-1">24/7 Support</p>
                    <p className="text-[#A1A1AA] text-sm leading-relaxed">Round-the-clock assistance for all your needs.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-[#121214] border border-white/5 p-8 rounded-[24px] transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.05)]">
              <h3 className="text-xl font-bold mb-6 text-white tracking-tight flex items-center" style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif' }}>
                <FiClock className="mr-3 text-accent" />
                Our Process
              </h3>
              <div className="space-y-0 relative">
                {/* Connecting Line */}
                <div className="absolute left-5 top-8 bottom-8 w-px bg-white/10" />
                
                <div className="flex relative z-10 mb-8">
                  <div className="flex flex-col items-center mr-6">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0A0A0B] border-2 border-accent text-accent font-bold">1</div>
                  </div>
                  <div className="pt-2">
                    <p className="text-white font-medium mb-1">Initial Consultation</p>
                    <p className="text-[#A1A1AA] text-sm leading-relaxed">We discuss your project requirements and goals.</p>
                  </div>
                </div>
                
                <div className="flex relative z-10 mb-8">
                  <div className="flex flex-col items-center mr-6">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0A0A0B] border-2 border-accent text-accent font-bold">2</div>
                  </div>
                  <div className="pt-2">
                    <p className="text-white font-medium mb-1">Custom Solution</p>
                    <p className="text-[#A1A1AA] text-sm leading-relaxed">We create a tailored proposal for your business.</p>
                  </div>
                </div>
                
                <div className="flex relative z-10">
                  <div className="flex flex-col items-center mr-6">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0A0A0B] border-2 border-accent text-accent font-bold">3</div>
                  </div>
                  <div className="pt-2">
                    <p className="text-white font-medium mb-1">Implementation</p>
                    <p className="text-[#A1A1AA] text-sm leading-relaxed">Our team brings your solution to life.</p>
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

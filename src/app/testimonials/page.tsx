import { Metadata } from 'next';
import TestimonialForm from '@/components/testimonials/TestimonialForm';

export const metadata: Metadata = {
  title: 'Testimonials | MEGAS TECH INC',
  description: 'Read what our clients say about our services and share your experience with us.',
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Testimonials</h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See what our clients say about our services. We value your feedback!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-6">Share Your Experience</h2>
            <TestimonialForm />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-6">What Our Clients Say</h2>
            <div className="space-y-6">
              {/* Testimonials will be displayed here */}
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-2xl">★★★★★</div>
                </div>
                <p className="text-gray-300 mb-4">
                  &quot;MEGAS TECH INC delivered exceptional service. Their team was professional, responsive, and delivered beyond our expectations.&quot;
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                    JD
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-white">John Doe</h4>
                    <p className="text-sm text-gray-400">CEO, Tech Solutions</p>
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

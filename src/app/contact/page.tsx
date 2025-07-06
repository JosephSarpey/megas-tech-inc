import { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | MEGAS TECH',
  description: 'Get in touch with our team. We&apos;d love to hear from you about your project or any questions you might have.',
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a question or want to work together? We&apos;d love to hear from you.
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}

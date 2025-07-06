"use client";

import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';
import { useState } from 'react';
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    },
  },
};

type ContactFormProps = {
  isSalesInquiry?: boolean;
};

export default function ContactForm({ isSalesInquiry = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: isSalesInquiry ? 'Sales Inquiry' : '',
    message: isSalesInquiry ? 'I\'m interested in learning more about your services.' : '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSuccess(true);
    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="text-center p-8 bg-gray-800 rounded-lg"
      >
        <FiCheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-white mb-2">Thank You!</h3>
        <p className="text-gray-300">
          {isSalesInquiry 
            ? "We've received your sales inquiry. Our team will contact you shortly to discuss your project."
            : "Your message has been sent successfully. We'll get back to you soon!"}
        </p>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="space-y-6"
      >
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6">
            {isSalesInquiry ? 'Sales Inquiry' : 'Get in Touch'}
          </h2>
          <p className="text-gray-300">
            {isSalesInquiry
              ? "Interested in our services? Fill out the form and our sales team will get back to you shortly."
              : "Have a question or want to work together? Fill out the form and we'll get back to you as soon as possible."}
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
              <FiMail className="w-5 h-5" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-white">Email Us</h3>
              <p className="text-gray-300">contact@megastech.com</p>
              <p className="text-gray-400 text-sm mt-1">We will respond within 24 hours</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
              <FiPhone className="w-5 h-5" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-white">Call Us</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
              <p className="text-gray-400 text-sm mt-1">Mon-Fri, 9am-6pm EST</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
              <FiMapPin className="w-5 h-5" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-white">Visit Us</h3>
              <p className="text-gray-300">123 Tech Street</p>
              <p className="text-gray-300">San Francisco, CA 94107</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ delay: 0.2 }}
        className="bg-gray-800 p-8 rounded-lg shadow-lg"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              required
            />
          </div>

          {!isSalesInquiry && (
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                required
              />
            </div>
          )}

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
              {isSalesInquiry ? 'Tell us about your project' : 'Your Message'} *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              required
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent hover:bg-accent/90 text-white font-medium py-3 px-6 rounded-md transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <FiSend className="w-4 h-4" />
                  <span>{isSalesInquiry ? 'Send Sales Inquiry' : 'Send Message'}</span>
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
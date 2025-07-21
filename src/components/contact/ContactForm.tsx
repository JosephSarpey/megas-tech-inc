"use client";

import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { useState, useRef, useCallback } from 'react';
import { motion, Variants } from "framer-motion";
import HCaptcha from '@hcaptcha/react-hcaptcha';
import Button from '../ui/Button';

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
  selectedPlan?: 'starter' | 'professional' | 'enterprise';
  serviceName?: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
  captcha?: string;
  form?: string;
};

export default function ContactForm({ isSalesInquiry = false, selectedPlan, serviceName }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: isSalesInquiry ? 'Sales Inquiry' : '',
    message: getDefaultMessage(),
    plan: selectedPlan || '',
    service: serviceName || '',
    token: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const captchaRef = useRef<HCaptcha>(null);

  function getDefaultMessage() {
    if (isSalesInquiry) {
      if (selectedPlan && serviceName) {
        const formattedService = serviceName.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
        const planName = selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1);
        return `I'm interested in the ${formattedService} - ${planName} plan. ` +
               'Please provide more information about the next steps.';
      } else if (selectedPlan) {
        const planName = selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1);
        return `I'm interested in the ${planName} plan. ` +
               'Please provide more information about the next steps.';
      } else if (serviceName) {
        const formattedService = serviceName.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
        return `I'm interested in your ${formattedService} service. ` +
               'Please provide more information.';
      }
      return "I'm interested in learning more about your services.";
    }
    return '';
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const onCaptchaVerify = useCallback((token: string) => {
    setFormData(prev => ({
      ...prev,
      token
    }));
    
    if (errors.captcha) {
      setErrors(prev => ({
        ...prev,
        captcha: undefined
      }));
    }
  }, [errors.captcha]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    if (!formData.token) {
      newErrors.captcha = 'Please complete the captcha';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      // Check if the response is JSON
      const contentType = response.headers.get('content-type');
      let data;
      
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        const text = await response.text();
        console.error('Non-JSON response:', text);
        throw new Error('Server returned an invalid response');
      }
      
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
      
      setIsSuccess(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: isSalesInquiry ? 'Sales Inquiry' : '',
        message: getDefaultMessage(),
        plan: selectedPlan || '',
        service: serviceName || '',
        token: ''
      });
      
      // Reset captcha
      captchaRef.current?.resetCaptcha();
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors(prev => ({
        ...prev,
        form: 'Failed to send message. Please try again later or contact support.'
      }));
    } finally {
      setIsSubmitting(false);
    }
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
              Full Name {errors.name && <span className="text-red-500">*</span>}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 bg-gray-700 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                errors.name ? 'border-red-500' : 'border-gray-600'
              }`}
              placeholder="Your name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <FiAlertCircle className="mr-1" /> {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email Address {errors.email && <span className="text-red-500">*</span>}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 bg-gray-700 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                errors.email ? 'border-red-500' : 'border-gray-600'
              }`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <FiAlertCircle className="mr-1" /> {errors.email}
              </p>
            )}
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

          {selectedPlan && (
            <div className="mb-4 p-4 bg-gray-700/50 rounded-lg border border-accent/20">
              <p className="text-sm text-gray-300">
                <span className="font-medium">Selected Plan:</span> {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)}
              </p>
              <input type="hidden" name="plan" value={selectedPlan} />
            </div>
          )}

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
              {isSalesInquiry ? 'Tell us about your project' : 'Your Message'} {errors.message && <span className="text-red-500">*</span>}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-2 bg-gray-700 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                errors.message ? 'border-red-500' : 'border-gray-600'
              }`}
              placeholder="Your message..."
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <FiAlertCircle className="mr-1" /> {errors.message}
              </p>
            )}
          </div>

          <div className="mt-6 relative" style={{ transform: 'translateZ(0)' }}>
            <div 
              className="w-full overflow-visible" 
              style={{ 
                minHeight: '78px',
                transform: 'scale(0.9)',
                transformOrigin: '0 0'
              }}
            >
              <HCaptcha
                sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!}
                onVerify={onCaptchaVerify}
                ref={captchaRef}
              />
              {errors.captcha && (
                <p className="mt-1 text-sm text-red-400">{errors.captcha}</p>
              )}
            </div>
          </div>

          {errors.form && (
            <div className="mb-4 p-3 bg-red-900/30 border border-red-500 rounded-md">
              <p className="text-red-400 text-sm">{errors.form}</p>
            </div>
          )}
          
          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              className={`w-full ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <FiSend className="mr-2" />
                  {isSalesInquiry ? 'Send Inquiry' : 'Send Message'}
                </span>
              )}
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
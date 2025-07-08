"use client";

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

const fadeInUp = {
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

type FormErrors = {
  name?: string;
  email?: string;
  position?: string;
  company?: string;
  rating?: string;
  testimonial?: string;
  captcha?: string;
  form?: string;
};

export default function TestimonialForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    company: '',
    rating: '',
    testimonial: '',
    token: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const captchaRef = useRef<HCaptcha>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

  const handleCaptchaVerify = (token: string) => {
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
  };

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
    
    if (!formData.rating) {
      newErrors.rating = 'Please select a rating';
    }
    
    if (!formData.testimonial.trim()) {
      newErrors.testimonial = 'Testimonial is required';
    } else if (formData.testimonial.trim().length < 20) {
      newErrors.testimonial = 'Testimonial must be at least 20 characters';
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
      // Here you would typically send the form data to your backend
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSuccess(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        position: '',
        company: '',
        rating: '',
        testimonial: '',
        token: ''
      });
      
      // Reset captcha
      captchaRef.current?.resetCaptcha();
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors(prev => ({
        ...prev,
        form: 'Failed to submit testimonial. Please try again later.'
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
        className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 text-center"
      >
        <div className="flex justify-center mb-4">
          <FiCheckCircle className="w-12 h-12 text-green-500" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Thank You!</h3>
        <p className="text-gray-300">
          Your testimonial has been submitted successfully. We appreciate your feedback!
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="space-y-6"
    >
      {errors.form && (
        <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-lg flex items-start">
          <FiAlertCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
          <span>{errors.form}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-gray-700 border ${errors.name ? 'border-red-500' : 'border-gray-600'} rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition-colors`}
            placeholder="John Doe"
          />
          {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-gray-700 border ${errors.email ? 'border-red-500' : 'border-gray-600'} rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition-colors`}
            placeholder="john@example.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="position" className="block text-sm font-medium text-gray-300 mb-1">
            Position
          </label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition-colors"
            placeholder="e.g., CEO, Developer"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
            Company (Optional)
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition-colors"
            placeholder="Company Name"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Rating <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => {
                setFormData(prev => ({
                  ...prev,
                  rating: star.toString()
                }));
                if (errors.rating) {
                  setErrors(prev => ({
                    ...prev,
                    rating: undefined
                  }));
                }
              }}
              className={`text-2xl ${formData.rating && parseInt(formData.rating) >= star ? 'text-yellow-400' : 'text-gray-500'}`}
            >
              ★
            </button>
          ))}
        </div>
        {errors.rating && <p className="mt-1 text-sm text-red-400">{errors.rating}</p>}
      </div>

      <div>
        <label htmlFor="testimonial" className="block text-sm font-medium text-gray-300 mb-1">
          Your Testimonial <span className="text-red-500">*</span>
        </label>
        <textarea
          id="testimonial"
          name="testimonial"
          value={formData.testimonial}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-3 bg-gray-700 border ${errors.testimonial ? 'border-red-500' : 'border-gray-600'} rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition-colors`}
          placeholder="Share your experience with us..."
        ></textarea>
        {errors.testimonial && <p className="mt-1 text-sm text-red-400">{errors.testimonial}</p>}
      </div>

      <div className="pt-2">
        <HCaptcha
          sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || 'your-site-key'}
          onVerify={handleCaptchaVerify}
          ref={captchaRef}
        />
        {errors.captcha && <p className="mt-1 text-sm text-red-400">{errors.captcha}</p>}
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent hover:bg-accent/90 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </>
          ) : (
            'Submit Testimonial'
          )}
        </button>
      </div>
    </motion.form>
  );
}

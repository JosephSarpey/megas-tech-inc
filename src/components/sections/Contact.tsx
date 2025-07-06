"use client";

import { useRef, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiMail, FiPhone, FiMapPin, FiSend, FiTwitter, FiGithub, FiLinkedin, FiDribbble } from 'react-icons/fi';
import Button from '@/components/ui/Button';

gsap.registerPlugin(ScrollTrigger);

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Animate form elements
      gsap.utils.toArray<HTMLElement>('.form-element').forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: i * 0.1,
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      setSubmitStatus(null);
      
      // Here you would typically send the form data to your backend or email service
      // For example, using EmailJS, Formspree, or your own API endpoint
      console.log('Form submitted:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus({
        success: true,
        message: 'Your message has been sent successfully! We\'ll get back to you soon.',
      });
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        success: false,
        message: 'Something went wrong. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="relative py-20 md:py-28 lg:py-36 bg-secondary">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-accent/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-accent bg-accent/10 rounded-full mb-4">
            Get In Touch
          </span>
          <h2 ref={headingRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Contact <span className="text-accent">Us</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Have a project in mind or want to discuss how we can help your business? Drop us a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="form-element">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-gray-300 mb-8">
                Fill out the form or reach out to us directly. We&apos;re here to help and answer any questions you might have.
              </p>
            </div>

            <div className="space-y-6">
              <div className="form-element flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email Us</h4>
                  <a href="mailto:info@megastech.com" className="text-gray-400 hover:text-accent transition-colors">
                    info@megastech.com
                  </a>
                </div>
              </div>

              <div className="form-element flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <FiPhone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Call Us</h4>
                  <a href="tel:+1234567890" className="text-gray-400 hover:text-accent transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="form-element flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Visit Us</h4>
                  <p className="text-gray-400">
                    123 Tech Street<br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>
            </div>

            <div className="form-element pt-4">
              <h4 className="text-white font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { name: 'Twitter', icon: <FiTwitter className="text-lg" />, url: '#' },
                  { name: 'GitHub', icon: <FiGithub className="text-lg" />, url: '#' },
                  { name: 'LinkedIn', icon: <FiLinkedin className="text-lg" />, url: '#' },
                  { name: 'Dribbble', icon: <FiDribbble className="text-lg" />, url: '#' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-accent/10 text-gray-300 hover:text-accent flex items-center justify-center transition-colors border border-white/10 hover:border-accent/30"
                    aria-label={social.name}
                  >
                    <span className="sr-only">{social.name}</span>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 form-element">
            {submitStatus && (
              <div 
                className={`p-4 mb-6 rounded-lg ${
                  submitStatus.success 
                    ? 'bg-green-900/30 border border-green-500/30 text-green-200' 
                    : 'bg-red-900/30 border border-red-500/30 text-red-200'
                }`}
              >
                {submitStatus.message}
              </div>
            )}
            
            <form 
              ref={formRef} 
              onSubmit={handleSubmit(onSubmit)} 
              className="space-y-6"
              suppressHydrationWarning
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      {...register('name', { required: 'Name is required' })}
                      className={`w-full px-4 py-3 bg-white/5 border ${
                        errors.name ? 'border-red-500' : 'border-white/10'
                      } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-colors`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      className={`w-full px-4 py-3 bg-white/5 border ${
                        errors.email ? 'border-red-500' : 'border-white/10'
                      } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-colors`}
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    {...register('subject', { required: 'Subject is required' })}
                    className={`w-full px-4 py-3 bg-white/5 border ${
                      errors.subject ? 'border-red-500' : 'border-white/10'
                    } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-colors`}
                    placeholder="How can we help you?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    rows={5}
                    {...register('message', { required: 'Message is required' })}
                    className={`w-full px-4 py-3 bg-white/5 border ${
                      errors.message ? 'border-red-500' : 'border-white/10'
                    } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-colors resize-none`}
                    placeholder="Tell us about your project..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                  )}
                </div>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <FiSend className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="mt-20 h-80 md:h-96 w-full relative">
        <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent z-10"></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.158170040841!2d-122.3999726846826!3d37.78688297975772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807f4d2f8d1d%3A0x5f5f5f5f5f5f5f5f!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="opacity-70 hover:opacity-100 transition-opacity"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;

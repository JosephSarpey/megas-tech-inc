"use client";

import { ReactNode } from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { motion, Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

type ServicePageProps = {
  title: string;
  description: string;
  features: {
    title: string;
    description: string;
    icon: ReactNode;
  }[];
  ctaText?: string;
  ctaHref?: string;
  children?: ReactNode;
};

export default function ServicePage({
  title,
  description,
  features,
  ctaText = 'Get Started',
  ctaHref = '/contact',
  children,
}: ServicePageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
        className="text-center mb-16"
      >
        <motion.h1 
          variants={fadeInUp}
          className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p 
          variants={fadeInUp}
          className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto"
        >
          {description}
        </motion.p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <motion.h2 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl font-bold text-gray-900 mb-6"
          >
            What We Offer
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className="flex p-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex-shrink-0">
                  <motion.div 
                    className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {feature.icon}
                  </motion.div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-base text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            className="mt-10"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href={ctaHref}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-all duration-300 transform hover:-translate-y-1"
            >
              {ctaText}
              <motion.span 
                animate={{ x: [0, 4, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5,
                  ease: 'easeInOut'
                }}
                className="ml-2"
              >
                <FiArrowRight className="h-5 w-5" />
              </motion.span>
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          {children}
        </motion.div>
      </div>

      <motion.div 
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-primary/5 p-8 rounded-xl mt-16"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to get started with {title}?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today to discuss how we can help you achieve your goals.
          </p>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-all duration-300 transform hover:-translate-y-1"
            >
              Get in Touch
              <motion.span 
                animate={{ x: [0, 4, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5,
                  ease: 'easeInOut'
                }}
                className="ml-2"
              >
                <FiArrowRight className="h-5 w-5" />
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

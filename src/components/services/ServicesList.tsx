/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { motion, Variants } from "framer-motion";
import { FiTool, FiCode, FiServer, FiDatabase, FiSmartphone, FiCloud, FiShoppingCart, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
    icon: <FiCode className="w-8 h-8 text-accent-default" />,
    href: '/services/web-development',
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive user interfaces and experiences that engage users and drive conversions.',
    icon: <FiTool className="w-8 h-8 text-accent-default" />,
    href: '/services/ui-ux-design',
  },
  {
    title: 'Tech Consulting',
    description: 'Expert guidance and strategic planning to help you make informed technology decisions.',
    icon: <FiTool className="w-8 h-8 text-accent-default" />,
    href: '/services/tech-consulting',
  },
  {
    title: 'Maintenance',
    description: 'Ongoing support and updates to keep your digital products running smoothly and securely.',
    icon: <FiServer className="w-8 h-8 text-accent-default" />,
    href: '/services/maintenance',
  },
  {
    title: 'Web Hosting',
    description: 'Affordable and reliable web hosting solutions to ensure your website is always accessible.',
    icon: <FiCloud className="w-8 h-8 text-accent-default" />,
    href: '/services/web-hosting',
  },
  {
    title: 'Domain Registration',
    description: 'Secure and affordable domain registration to establish your online presence.',
    icon: <FiDatabase className="w-8 h-8 text-accent-default" />,
    href: '/services/domain-registration',
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Secure and scalable online stores that convert visitors into customers.',
    icon: <FiShoppingCart className="w-8 h-8 text-accent-default" />,
    href: '/services/e-commerce',
  }
]; 

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    },
  },
};

const stagger: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ServicesList() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
    >
      {services.map((service) => (
        <motion.div
          key={service.title}
          variants={fadeInUp}
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-accent-default/30 transition-all duration-300 flex flex-col h-full"
        >
          <div className="flex-1">
            <div className="w-12 h-12 rounded-lg bg-accent-default/10 flex items-center justify-center mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
            <p className="text-gray-300 mb-4">{service.description}</p>
          </div>
          <div className="mt-4">
            <Link
              href={service.href}
              className="inline-flex items-center text-accent-default hover:text-accent-light transition-colors text-sm font-medium group"
            >
              Learn more
              <FiArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

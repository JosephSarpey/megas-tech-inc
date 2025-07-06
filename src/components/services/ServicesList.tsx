"use client";

import { motion, Variants } from "framer-motion";
import { FiTool, FiCode, FiServer, FiDatabase, FiSmartphone, FiCloud } from 'react-icons/fi';

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
    icon: <FiCode className="w-8 h-8 text-accent" />,
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android that engage users and drive business growth.',
    icon: <FiSmartphone className="w-8 h-8 text-accent" />,
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure and services to power your applications and business processes.',
    icon: <FiCloud className="w-8 h-8 text-accent" />,
  },
  {
    title: 'Database Design',
    description: 'Efficient database architecture and management solutions tailored to your specific data needs.',
    icon: <FiDatabase className="w-8 h-8 text-accent" />,
  },
  {
    title: 'DevOps Services',
    description: 'Streamlined development and operations with CI/CD pipelines, containerization, and infrastructure as code.',
    icon: <FiServer className="w-8 h-8 text-accent" />,
  },
  {
    title: 'Technical Consulting',
    description: 'Expert guidance and strategic planning to help you make informed technology decisions.',
    icon: <FiTool className="w-8 h-8 text-accent" />,
  },
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
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {services.map((service) => (
        <motion.div
          key={service.title}
          variants={fadeInUp}
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-accent/30 transition-colors duration-300"
        >
          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
            {service.icon}
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
          <p className="text-gray-300">{service.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

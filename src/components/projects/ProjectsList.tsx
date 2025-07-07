"use client";

import { motion, Variants } from "framer-motion";
import { FiExternalLink, FiGithub, FiCode, FiArrowRight } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product catalog, cart, and payment integration.',
    tags: ['React', 'Express.js', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    github: '#',
    demo: 'https://www.vestraversa.com',
    link: '/projects/ecommerce-platform'
  },
  {
    id: 2,
    title: 'Travel Agency Website',
    description: 'A travel agency website with interactive animations and responsive design.',
    tags: ['Next.js', 'TypeScript', 'Paystack', 'Tailwind CSS'],
    github: '#',
    demo: 'https://teebel-global-travel-consultancy.vercel.app/',
    link: '/projects/travel-agency'
  },
  {
    id: 3,
    title: 'Construction Website',
    description: 'A modern construction website with smooth animations and responsive design.',
    tags: ['React', 'Framer Motion', 'Tailwind CSS'], 
    github: '#',
    demo: 'https://dermolahu-draughtmanship-construction-works.vercel.app/',
    link: '/projects/construction'
  },
];

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

const stagger: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ProjectsList() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {projects.map((project) => (
        <motion.div
          key={project.id}
          variants={fadeInUp}
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-accent/30 transition-colors duration-300 h-full flex flex-col"
        >
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <FiCode className="w-6 h-6 text-accent" />
              <div className="flex space-x-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <FiGithub className="w-5 h-5" />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent transition-colors"
                    aria-label="Live Demo"
                  >
                    <FiExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-700/50">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium bg-gray-700/50 text-gray-200 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            className="mt-4 inline-flex items-center text-accent hover:text-accent/80 transition-colors text-sm font-medium group"
          >
            View Project
            <FiArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      ))}
    </motion.div>
  );
}

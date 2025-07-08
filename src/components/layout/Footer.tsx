"use client";

import Link from 'next/link';
import { FiGithub, FiTwitter, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { motion } from 'framer-motion';

const currentYear = new Date().getFullYear();

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      target: '_blank',
      icon: <FiGithub className="w-5 h-5" />,
      href: 'https://github.com/JosephSarpey',
    },
    {
      name: 'Twitter',
      target: '_blank', 
      icon: <FiTwitter className="w-5 h-5" />,
      href: 'https://twitter.com/megastech',
    },
    {
      name: 'LinkedIn',
      target: '_blank',
      icon: <FiLinkedin className="w-5 h-5" />,
      href: 'https://linkedin.com/company/megastech',
    },
    {
      name: 'Email',
      target: '_blank',
      icon: <FiMail className="w-5 h-5" />,
      href: 'mailto:contact@megastech.inc',
    },
  ];

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
        { name: 'FAQ', href: '/faq' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Web Development', href: '/services/web-development' },
        { name: 'UI/UX Design', href: '/services/ui-ux-design' },
        { name: 'Tech Consulting', href: '/services/tech-consulting' },
        { name: 'Maintenance', href: '/services/maintenance' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
      ],
    },
  ];

  return (
    <footer className="bg-primary text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-accent text-2xl font-bold">MEGAS</span>
              <span className="text-white text-2xl font-light">TECH</span>
              <span className="text-accent text-xl font-bold">INC.</span>
            </div>
            <p className="text-gray-400">
              Transforming ideas into digital reality with cutting-edge technology solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition-colors duration-200"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4 text-lg">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-accent transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMapPin className="text-accent mt-1 mr-3 flex-shrink-0" />
                <span>123 Tech Street, Silicon Valley, CA 94025</span>
              </li>
              <li className="flex items-center">
                <FiMail className="text-accent mr-3" />
                <a href="mailto:contact@megastech.inc" className="hover:text-accent transition-colors duration-200">
                  contact@megastech.inc
                </a>
              </li>
              <li className="flex items-center">
                <FiPhone className="text-accent mr-3" />
                <a href="tel:+11234567890" className="hover:text-accent transition-colors duration-200">
                  +1 (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} MEGAS TECH INC. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-500 hover:text-accent text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-accent text-sm transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-accent text-sm transition-colors duration-200">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiCode, FiLayers, FiTool, FiMessageSquare, FiMail } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/', icon: <FiLayers className="w-5 h-5" /> },
    { name: 'Services', href: '/services', icon: <FiTool className="w-5 h-5" /> },
    { name: 'Projects', href: '/projects', icon: <FiCode className="w-5 h-5" /> },
    { name: 'Blog', href: '/blog', icon: <FiMessageSquare className="w-5 h-5" /> },
    { name: 'Contact', href: '/contact', icon: <FiMail className="w-5 h-5" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full bg-primary/90 backdrop-blur-md py-4 fixed top-0 left-0 z-50 transition-all duration-300 ${
      scrolled ? 'shadow-lg' : ''
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-accent text-2xl font-bold">MEGAS</span>
            <span className="text-white text-2xl font-light">TECH</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 flex items-center space-x-2 ${
                  pathname === link.href
                    ? 'text-accent bg-accent/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="text-accent">{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2 bg-accent text-primary font-medium rounded-md hover:bg-accent/90 transition-all duration-200 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FiX className="block h-6 w-6" />
              ) : (
                <FiMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-primary/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center px-3 py-3 text-base font-medium rounded-md ${
                    pathname === link.href
                      ? 'text-accent bg-accent/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="mr-3 text-accent">{link.icon}</span>
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="w-full flex items-center justify-center px-4 py-3 mt-2 text-base font-medium rounded-md bg-accent text-primary hover:bg-accent/90 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

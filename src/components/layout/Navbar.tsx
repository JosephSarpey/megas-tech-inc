"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiCode, FiLayers, FiTool, FiMessageSquare, FiMail, FiChevronDown, FiDollarSign, FiInfo } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface NavLinkItem {
  name: string;
  href: string;
}

interface NavLink {
  name: string;
  href?: string;
  icon: React.ReactNode;
  isDropdown?: boolean;
  items?: NavLinkItem[];
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks: NavLink[] = [
    { name: 'Home', href: '/', icon: <FiLayers className="w-5 h-5" /> },
    { name: 'Services', href: '/services', icon: <FiTool className="w-5 h-5" /> },
    { name: 'Pricing', href: '/pricing', icon: <FiDollarSign className="w-5 h-5" /> },
    { 
      name: 'Contact', 
      icon: <FiMail className="w-5 h-5" />,
      isDropdown: true,
      items: [
        { name: 'General Inquiry', href: '/contact' },
        { name: 'Sales Team', href: '/contact/sales' },
      ]
    },
  ];

  const moreLinks: NavLink[] = [
    { name: 'Projects', href: '/projects', icon: <FiCode className="w-5 h-5" /> },
    { name: 'About Us', href: '/about', icon: <FiInfo className="w-4 h-4" /> },
    { name: 'Blog', href: '/blog', icon: <FiMessageSquare className="w-4 h-4" /> },
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest('.dropdown-container')) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(prev => prev === name ? null : name);
  };

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
              link.isDropdown ? (
                <div key={link.name} className="relative dropdown-container">
                  <button 
                    onClick={() => toggleDropdown(link.name)}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 flex items-center space-x-2 ${
                      link.items?.some(item => pathname === item.href)
                        ? 'text-accent bg-accent/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="text-accent">{link.icon}</span>
                    <span>{link.name}</span>
                    <FiChevronDown className={`w-4 h-4 transition-transform ${openDropdown === link.name ? 'transform rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {openDropdown === link.name && link.items && link.items.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 z-50"
                      >
                        <div className="py-1">
                          {link.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href || '#'}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 flex items-center space-x-2 ${
                    pathname === link.href
                      ? 'text-accent bg-accent/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="text-accent">{link.icon}</span>
                  <span>{link.name}</span>
                </Link>
              )
            ))}
            
            {/* More Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => toggleDropdown('more')}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 flex items-center space-x-2 ${
                  moreLinks.some(link => pathname === link.href)
                    ? 'text-accent bg-accent/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>More</span>
                <FiChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'more' ? 'transform rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {openDropdown === 'more' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 z-50"
                  >
                    <div className="py-1">
                      {moreLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href || '#'}
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                          onClick={() => setOpenDropdown(null)}
                        >
                          <span className="text-accent">{link.icon}</span>
                          <span>{link.name}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link
              href="/contact"
              className="ml-2 px-6 py-2 bg-accent text-primary font-medium rounded-md hover:bg-accent/90 transition-all duration-200 flex items-center space-x-2"
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

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                link.isDropdown ? (
                  <div key={link.name}>
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        link.items?.some(item => pathname === item.href)
                          ? 'bg-accent/10 text-accent'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span>{link.name}</span>
                      <FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === link.name ? 'transform rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {openDropdown === link.name && link.items && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-gray-700 z-50"
                          onMouseLeave={() => setOpenDropdown(null)}
                        >
                          <div className="py-1">
                            {link.items.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className={`px-4 py-2 text-sm flex items-center space-x-2 ${
                                  pathname === item.href
                                    ? 'bg-accent/10 text-accent'
                                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                }`}
                                onClick={() => setOpenDropdown(null)}
                              >
                                <span>{item.name}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href || '#'}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      pathname === link.href
                        ? 'bg-accent/10 text-accent'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-accent">{link.icon}</span>
                      <span>{link.name}</span>
                    </div>
                  </Link>
                )
              ))}
              
              {/* Mobile More Links */}
              <div className="border-t border-gray-800 my-2 pt-2">
                {moreLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href || '#'}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      pathname === link.href
                        ? 'bg-accent/10 text-accent'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-accent">{link.icon}</span>
                      <span>{link.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

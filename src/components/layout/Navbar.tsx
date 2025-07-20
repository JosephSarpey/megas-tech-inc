"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX, FiCode, FiLayers, FiTool, FiMessageSquare, FiMail, FiChevronDown, FiDollarSign, FiInfo, FiHelpCircle, FiBriefcase, FiUser, FiArrowRight } from 'react-icons/fi';
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
    { name: 'Testimonials', href: '/testimonials', icon: <FiUser className="w-4 h-4" /> },
    { name: 'FAQs', href: '/faq', icon: <FiHelpCircle className="w-4 h-4" /> },
    { name: 'Careers', href: '/careers', icon: <FiBriefcase className="w-4 h-4" /> },
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
      const target = event.target as HTMLElement;
      // Close dropdowns when clicking outside
      if (!target.closest('.dropdown-container')) {
        setOpenDropdown(null);
      }
      // Close mobile menu when clicking outside
      if (isOpen && !target.closest('.mobile-menu-container') && !target.closest('button[aria-expanded]')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(prev => prev === name ? null : name);
  };

  return (
    <header className={`w-full bg-primary/90 backdrop-blur-md py-2 fixed top-0 left-0 z-50 transition-all duration-300 ${
      scrolled ? 'shadow-lg' : ''
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <Link href="/" className="flex items-center h-8">
            <Image 
              src="/megas_logo.png" 
              alt="MEGAS TECH INC" 
              width={120} 
              height={32} 
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              link.isDropdown ? (
                <div key={link.name} className="relative dropdown-container">
                  <button 
                    onClick={() => toggleDropdown(link.name)}
                    className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 flex items-center space-x-1.5 ${
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
                              className="block px-3 py-1.5 text-sm text-gray-300 hover:bg-gray-700"
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
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 flex items-center space-x-1.5 ${
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
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 flex items-center space-x-1.5 ${
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
                          className="block px-3 py-1.5 text-sm text-gray-300 hover:bg-gray-700 flex items-center space-x-2"
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
              href="/pricing"
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
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
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
          <div className="fixed inset-0 z-30 md:hidden" onClick={() => setIsOpen(false)}>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute left-0 right-0 top-16 bg-gray-900/95 backdrop-blur-md z-40 overflow-hidden shadow-lg border-t border-gray-800 mobile-menu-container"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              role="menu"
              aria-label="Mobile menu"
            >
              <div className="px-4 py-2 space-y-1">
                {navLinks.map((link) => (
                  link.isDropdown ? (
                    <div key={link.name} className="relative">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleDropdown(link.name);
                        }}
                        onMouseDown={(e) => e.stopPropagation()}
                        className="w-full flex items-center justify-between px-3 py-2.5 text-base font-medium rounded-md transition-colors duration-200 text-gray-300 hover:bg-gray-800/50 hover:text-white"
                        aria-expanded={openDropdown === link.name}
                        aria-haspopup="true"
                        role="menuitem"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-accent">{link.icon}</span>
                          <span>{link.name}</span>
                        </div>
                        <span 
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleDropdown(link.name);
                          }}
                          onMouseDown={(e) => e.stopPropagation()}
                          className="p-1 flex items-center justify-center"
                        >
                          <FiChevronDown 
                            className={`w-4 h-4 transition-transform duration-200 ${openDropdown === link.name ? 'transform rotate-180' : ''}`} 
                            aria-hidden="true"
                          />
                        </span>
                      </button>
                      
                      <AnimatePresence>
                        {openDropdown === link.name && link.items && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.15, ease: 'easeInOut' }}
                            className="pl-8 space-y-1 mt-1"
                          >
                            {link.items.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="block px-3 py-2 text-sm rounded-md transition-colors duration-200 text-gray-300 hover:bg-gray-800/50 hover:text-white"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setIsOpen(false);
                                  setOpenDropdown(null);
                                }}
                                role="menuitem"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.name}
                      href={link.href || '#'}
                      className="flex items-center px-3 py-2.5 text-base font-medium rounded-md transition-colors duration-200 text-gray-300 hover:bg-gray-800/50 hover:text-white"
                      onClick={() => {
                        setIsOpen(false);
                        setOpenDropdown(null);
                      }}
                      role="menuitem"
                    >
                      <span className="text-accent mr-3">{link.icon}</span>
                      {link.name}
                    </Link>
                  )
                ))}
                
                {/* Mobile More Dropdown */}
                <div className="relative">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleDropdown('more');
                    }}
                    onMouseDown={(e) => e.stopPropagation()}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-base font-medium rounded-md transition-colors duration-200 text-gray-300 hover:bg-gray-800/50 hover:text-white"
                    aria-expanded={openDropdown === 'more'}
                    aria-haspopup="true"
                    role="menuitem"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-accent">
                        <FiMenu className="w-4 h-4" />
                      </span>
                      <span>More</span>
                    </div>
                    <span 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleDropdown('more');
                      }}
                      onMouseDown={(e) => e.stopPropagation()}
                      className="p-1 flex items-center justify-center"
                    >
                      <FiChevronDown 
                        className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'more' ? 'transform rotate-180' : ''}`} 
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                  
                  <AnimatePresence>
                    {openDropdown === 'more' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.15, ease: 'easeInOut' }}
                        className="pl-8 space-y-1 mt-1"
                      >
                        {moreLinks.map((link) => (
                          <Link
                            key={link.name}
                            href={link.href || '#'}
                            className="flex items-center px-3 py-2 text-sm rounded-md transition-colors duration-200 text-gray-300 hover:bg-gray-800/50 hover:text-white"
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsOpen(false);
                              setOpenDropdown(null);
                            }}
                            role="menuitem"
                          >
                            <span className="text-accent mr-3">{link.icon}</span>
                            {link.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* CTA Button */}
                <div className="mt-2 pt-2 border-t border-gray-800">
                  <Link
                    href="/pricing"
                    className="w-full flex items-center justify-center px-4 py-2.5 text-sm font-medium rounded-md text-primary bg-accent hover:bg-accent/90 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                    role="menuitem"
                  >
                    Get Started
                    <FiArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

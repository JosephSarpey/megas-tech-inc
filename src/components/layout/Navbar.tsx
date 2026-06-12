"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { LuMenu, LuX, LuChevronDown, LuArrowRight } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";

interface NavLinkItem {
  name: string;
  href: string;
  description?: string;
}

interface NavLink {
  name: string;
  href?: string;
  isDropdown?: boolean;
  items?: NavLinkItem[];
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks: NavLink[] = [
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Pricing", href: "/pricing" },
    {
      name: "Company",
      isDropdown: true,
      items: [
        {
          name: "About Us",
          href: "/about",
          description: "Our story, mission, and team",
        },
        {
          name: "Blog",
          href: "/blog",
          description: "Insights, tutorials and updates",
        },
        {
          name: "Testimonials",
          href: "/testimonials",
          description: "What our clients say",
        },
        {
          name: "Careers",
          href: "/careers",
          description: "Join the MEGAS team",
        },
      ],
    },
    {
      name: "Contact",
      isDropdown: true,
      items: [
        {
          name: "General Inquiry",
          href: "/contact",
          description: "Get in touch with us",
        },
        {
          name: "Sales Team",
          href: "/contact/sales",
          description: "Talk to our sales team",
        },
        {
          name: "FAQs",
          href: "/faq",
          description: "Common questions answered",
        },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".dropdown-container")) setOpenDropdown(null);
      if (
        isOpen &&
        !target.closest(".mobile-menu-container") &&
        !target.closest(".mobile-menu-toggle")
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const isActive = (link: NavLink): boolean => {
    if (link.href) return pathname === link.href;
    if (link.items) return link.items.some((item) => pathname === item.href);
    return false;
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0B]/90 backdrop-blur-lg border-b border-white/10 shadow-xs"
          : "bg-[#0A0A0B]/60 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center flex-shrink-0"
            aria-label="MEGAS TECH INC home"
          >
            <Image
              src="/megas_logo.png"
              alt="MEGAS TECH INC"
              width={130}
              height={36}
              className="h-9 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) =>
              link.isDropdown ? (
                <div key={link.name} className="relative dropdown-container">
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className={`flex items-center gap-1.5 px-3.5 py-2 text-[0.9375rem] font-medium rounded-lg transition-all duration-200 ${
                      isActive(link)
                        ? "text-white bg-white/10"
                        : "text-[#A1A1AA] hover:text-white hover:bg-white/5"
                    }`}
                    aria-expanded={openDropdown === link.name}
                    aria-haspopup="true"
                  >
                    {link.name}
                    <LuChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        openDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openDropdown === link.name && link.items && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-2 w-64 bg-[#121214] border border-white/10 rounded-card shadow-lg z-50 overflow-hidden"
                      >
                        <div className="p-1.5">
                          {link.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className={`block px-4 py-3 rounded-lg transition-all duration-150 group ${
                                pathname === item.href
                                  ? "bg-white/10 text-white"
                                  : "hover:bg-white/5 text-[#A1A1AA] hover:text-white"
                              }`}
                              onClick={() => setOpenDropdown(null)}
                            >
                              <div className="text-sm font-medium text-white">
                                {item.name}
                              </div>
                              {item.description && (
                                <div className="text-xs text-[#71717A] mt-0.5 leading-snug">
                                  {item.description}
                                </div>
                              )}
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
                  href={link.href || "#"}
                  className={`px-3.5 py-2 text-[0.9375rem] font-medium rounded-lg transition-all duration-200 ${
                    isActive(link)
                      ? "text-white bg-white/10"
                      : "text-[#A1A1AA] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              ),
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/contact/sales"
              className="px-3.5 py-2 text-[0.9375rem] font-medium text-[#A1A1AA] hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
            >
              Contact sales
            </Link>
            <Button href="/pricing" variant="primary" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden mobile-menu-toggle flex items-center justify-center w-10 h-10 rounded-lg text-[#A1A1AA] hover:text-white hover:bg-white/5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <LuX className="w-5 h-5" />
            ) : (
              <LuMenu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-16 bg-black/40 backdrop-blur-[2px] z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 bg-[#121214] border-b border-white/10 shadow-lg z-50 lg:hidden mobile-menu-container max-h-[calc(100vh-4rem)] overflow-y-auto"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) =>
                  link.isDropdown ? (
                    <div key={link.name}>
                      <button
                        onClick={() => toggleDropdown(link.name)}
                        className="w-full flex items-center justify-between px-4 py-3 text-[0.9375rem] font-medium text-[#A1A1AA] hover:text-white hover:bg-white/5 rounded-lg transition-all duration-150"
                        aria-expanded={openDropdown === link.name}
                      >
                        {link.name}
                        <LuChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            openDropdown === link.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === link.name && link.items && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="overflow-hidden pl-4"
                          >
                            <div className="py-1 space-y-0.5">
                              {link.items.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="block px-4 py-2.5 text-sm text-[#A1A1AA] hover:text-white hover:bg-white/5 rounded-lg transition-all duration-150"
                                  onClick={() => {
                                    setIsOpen(false);
                                    setOpenDropdown(null);
                                  }}
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
                      href={link.href || "#"}
                      className={`block px-4 py-3 text-[0.9375rem] font-medium rounded-lg transition-all duration-150 ${
                        isActive(link)
                          ? "text-white bg-white/10"
                          : "text-[#A1A1AA] hover:text-white hover:bg-white/5"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ),
                )}

                {/* Mobile CTA */}
                <div className="pt-3 mt-3 border-t border-white/10 space-y-2">
                  <Link
                    href="/contact/sales"
                    className="block px-4 py-3 text-center text-[0.9375rem] font-medium text-[#A1A1AA] hover:text-white hover:bg-white/5 rounded-lg transition-all duration-150"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact sales
                  </Link>
                  <Link
                    href="/pricing"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 text-[0.9375rem] font-semibold bg-accent text-white rounded-btn hover:bg-accent-dark transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                    <LuArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

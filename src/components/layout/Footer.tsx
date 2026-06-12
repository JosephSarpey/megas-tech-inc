"use client";

import Link from "next/link";
import Image from "next/image";
import {
  LuGithub,
  LuTwitter,
  LuLinkedin,
  LuMail,
  LuPhone,
  LuMapPin,
} from "react-icons/lu";

const currentYear = new Date().getFullYear();

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <LuGithub className="w-4 h-4" />,
      href: "https://github.com/JosephSarpey",
    },
    {
      name: "Twitter",
      icon: <LuTwitter className="w-4 h-4" />,
      href: "https://twitter.com/megastech",
    },
    {
      name: "LinkedIn",
      icon: <LuLinkedin className="w-4 h-4" />,
      href: "https://linkedin.com/company/megastech",
    },
    {
      name: "Email",
      icon: <LuMail className="w-4 h-4" />,
      href: "mailto:contact@megastech.inc",
    },
  ];

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
        { name: "FAQs", href: "/faq" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Web Development", href: "/services/web-development" },
        { name: "UI/UX Design", href: "/services/ui-ux-design" },
        { name: "Tech Consulting", href: "/services/tech-consulting" },
        { name: "Maintenance", href: "/services/maintenance" },
        { name: "Email Plans", href: "/services/email-plans" },
        { name: "E-Commerce Solutions", href: "/services/e-commerce" },
        { name: "Content Management", href: "/services/content-management" },
        { name: "Graphic Design", href: "/services/graphic-design" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
      ],
    },
  ];

  return (
    <footer className="bg-[#050505] text-[#A1A1AA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="block" aria-label="MEGAS TECH INC home">
              <Image
                src="/megas_logo.png"
                alt="MEGAS TECH INC"
                width={160}
                height={44}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-[#A1A1AA] text-sm leading-relaxed max-w-xs">
              Transforming ideas into digital reality with cutting-edge technology solutions.
            </p>

            {/* Contact info */}
            <div className="space-y-2">
              <a
                href="tel:+233553288566"
                className="flex items-center gap-2 text-sm text-[#A1A1AA] hover:text-white transition-colors duration-200"
              >
                <LuPhone className="w-3.5 h-3.5 flex-shrink-0 text-accent" />
                0553288566
              </a>
              <a
                href="mailto:themegastechinc@gmail.com"
                className="flex items-center gap-2 text-sm text-[#A1A1AA] hover:text-white transition-colors duration-200"
              >
                <LuMail className="w-3.5 h-3.5 flex-shrink-0 text-accent" />
                themegastechinc@gmail.com
              </a>
              <div className="flex items-start gap-2 text-sm text-[#A1A1AA]">
                <LuMapPin className="w-3.5 h-3.5 flex-shrink-0 text-accent mt-0.5" />
                <span>Kasoa, Central Region, Ghana</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2 pt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 text-[#A1A1AA] hover:bg-white/10 hover:text-white transition-all duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white text-sm font-semibold mb-4 tracking-[-0.01em]">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#A1A1AA] hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#71717A]">
            &copy; {currentYear} MEGAS TECH INC. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-xs text-[#71717A] hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-[#71717A] hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-xs text-[#71717A] hover:text-white transition-colors duration-200">
              Cookie Policy
            </Link>
            <Link href="/faq" className="text-xs text-[#71717A] hover:text-white transition-colors duration-200">
              FAQs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

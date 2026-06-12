"use client";

import { motion, Variants } from "framer-motion";
import { 
  LuCode, 
  LuLayoutDashboard, 
  LuWrench, 
  LuServer, 
  LuCloud, 
  LuDatabase, 
  LuMail, 
  LuShoppingCart, 
  LuFileText, 
  LuChartPie, 
  LuArrowRight 
} from "react-icons/lu";
import Link from 'next/link';

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
    icon: <LuCode className="w-5 h-5" />,
    href: '/services/web-development',
    accent: '#10B981',
    size: 'md:col-span-2 lg:col-span-2'
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive user interfaces and experiences that engage users and drive conversions.',
    icon: <LuLayoutDashboard className="w-5 h-5" />,
    href: '/services/ui-ux-design',
    accent: '#10B981',
    size: 'md:col-span-1 lg:col-span-1'
  },
  {
    title: 'Tech Consulting',
    description: 'Expert guidance and strategic planning to help you make informed technology decisions.',
    icon: <LuWrench className="w-5 h-5" />,
    href: '/services/tech-consulting',
    accent: '#10B981',
    size: 'md:col-span-1 lg:col-span-1'
  },
  {
    title: 'Maintenance & Support',
    description: 'Ongoing support and updates to keep your digital products running smoothly and securely.',
    icon: <LuServer className="w-5 h-5" />,
    href: '/services/maintenance',
    accent: '#10B981',
    size: 'md:col-span-2 lg:col-span-2'
  },
  {
    title: 'Web Hosting',
    description: 'Affordable and reliable web hosting solutions to ensure your application is always accessible and performant.',
    icon: <LuCloud className="w-5 h-5" />,
    href: '/services/web-hosting',
    accent: '#10B981',
    size: 'md:col-span-1 lg:col-span-1'
  },
  {
    title: 'Domain Registration',
    description: 'Secure and reliable domain registration to establish and protect your brand identity online.',
    icon: <LuDatabase className="w-5 h-5" />,
    href: '/services/domain-registration',
    accent: '#10B981',
    size: 'md:col-span-1 lg:col-span-1'
  },
  {
    title: 'Email Hosting',
    description: 'Professional and secure email hosting solutions tailored for enterprise communication.',
    icon: <LuMail className="w-5 h-5" />,
    href: '/services/email-plans',
    accent: '#10B981',
    size: 'md:col-span-1 lg:col-span-1'
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Secure and scalable online stores that convert visitors into loyal customers with seamless checkout.',
    icon: <LuShoppingCart className="w-5 h-5" />,
    href: '/services/e-commerce',
    accent: '#10B981',
    size: 'md:col-span-2 lg:col-span-2'
  },
  {
    title: 'Content Management',
    description: 'Effortless content creation and headless CMS integrations for your platform.',
    icon: <LuFileText className="w-5 h-5" />,
    href: '/services/content-management',
    accent: '#10B981',
    size: 'md:col-span-1 lg:col-span-1'
  },
  {
    title: 'Graphic Design',
    description: 'Professional and modern graphic design to elevate your brand presence and marketing materials.',
    icon: <LuChartPie className="w-5 h-5" />,
    href: '/services/graphic-design',
    accent: '#10B981',
    size: 'md:col-span-2 lg:col-span-3'
  }
]; 

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] // Custom ease curve for a smoother pop
    },
  },
};

const stagger: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.08,
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
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 max-w-6xl mx-auto"
    >
      {services.map((service) => (
        <motion.div
          key={service.title}
          variants={fadeInUp}
          className={`block group ${service.size}`}
        >
          <Link href={service.href} className="block h-full" aria-label={`View ${service.title} details`}>
            <div className="h-full bg-[#121214] border border-white/5 rounded-[24px] p-8 transition-all duration-300 group-hover:border-accent/40 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] relative overflow-hidden flex flex-col">
              {/* Hover accent glow — top-left corner */}
              <div
                className="absolute -top-12 -left-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none"
                style={{ background: `${service.accent}18` }}
              />
              
              {/* Icon */}
              <div
                className="w-10 h-10 flex items-center justify-center rounded-xl mb-5 text-white relative z-10"
                style={{ background: service.accent }}
              >
                {service.icon}
              </div>

              <div className="relative z-10 flex-grow flex flex-col">
                <h3 
                  className="text-[1.125rem] font-semibold text-white mb-2 tracking-[-0.01em]"
                  style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-[#A1A1AA] text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                <div className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-all duration-200 group-hover:gap-2.5">
                  Learn more
                  <LuArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}

"use client";

import { ReactNode } from "react";
import Button from "@/components/ui/Button";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

type ServicePageProps = {
  title: string;
  description: string;
  features: {
    title: string;
    description: string;
    icon: ReactNode;
  }[];
  ctaText?: string;
  ctaHref?: string;
  children?: ReactNode;
};

export default function ServicePage({
  title,
  description,
  features,
  ctaText = "Get Started",
  ctaHref = "/contact/sales",
  children,
}: ServicePageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="text-center mb-16"
      >
        <motion.div variants={fadeInUp} className="mb-6">
          <span className="label-pill inline-flex shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            Service Details
          </span>
        </motion.div>
        <motion.h1
          variants={fadeInUp}
          className="text-4xl font-bold text-white sm:text-5xl md:text-6xl tracking-tight"
          style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
        >
          {title}
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="mt-6 text-xl text-[#A1A1AA] max-w-3xl mx-auto"
        >
          {description}
        </motion.p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl font-bold text-white mb-6 tracking-tight"
            style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
          >
            What We Offer
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex p-4 rounded-lg hover:bg-[#121214] border border-transparent hover:border-white/5 transition-colors"
              >
                <div className="flex-shrink-0">
                  <motion.div
                    className="flex items-center justify-center h-12 w-12 rounded-md bg-accent text-white"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {feature.icon}
                  </motion.div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base text-[#A1A1AA]">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="mt-10"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Button as="a" href={ctaHref} variant="primary" size="lg" withArrow>
              {ctaText}
            </Button>
          </motion.div>
        </div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-[#121214] border border-white/10 p-6 rounded-xl shadow-lg hover:shadow-xl hover:border-white/20 transition-all duration-300"
        >
          {children}
        </motion.div>
      </div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-[#121214] border border-white/10 p-8 rounded-xl mt-16"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl font-bold text-white mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
          >
            Ready to get started with {title}?
          </h2>
          <p className="text-xl text-[#A1A1AA] mb-8">
            Contact us today to discuss how we can help you achieve your goals.
          </p>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Button
              as="a"
              href="/contact"
              variant="primary"
              size="lg"
              withArrow
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

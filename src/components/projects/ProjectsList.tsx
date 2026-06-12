"use client";

import { motion, Variants } from "framer-motion";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";

import { projects } from "@/data/projects";
import Image from "next/image";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
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

const getGridClass = (index: number) => {
  // Creating a vibrant Bento Grid for 6 items
  // Grid is 3 columns wide on desktop
  switch (index) {
    case 0:
      // Row 1 & 2, Col 1 & 2 (Takes up a 2x2 square)
      return "md:col-span-2 md:row-span-2";
    case 1:
      // Row 1, Col 3
      return "md:col-span-1 md:row-span-1";
    case 2:
      // Row 2, Col 3
      return "md:col-span-1 md:row-span-1";
    case 3:
      // Row 3, Col 1
      return "md:col-span-1 md:row-span-1";
    case 4:
      // Row 3, Col 2 & 3
      return "md:col-span-2 md:row-span-1";
    case 5:
      // Row 4, Col 1, 2, & 3 (Full width)
      return "md:col-span-3 md:row-span-1";
    default:
      return "md:col-span-1 md:row-span-1";
  }
};

const getImageHeightClass = (index: number) => {
  switch (index) {
    case 0:
      return "h-64 md:h-[350px]";
    case 1:
    case 2:
    case 3:
      return "h-48 md:h-[180px]";
    case 4:
      return "h-48 md:h-[180px]";
    case 5:
      return "h-64 md:h-[400px]";
    default:
      return "h-48 md:h-[180px]";
  }
};

export default function ProjectsList() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(0,_auto)] max-w-7xl mx-auto"
    >
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          variants={fadeInUp}
          className={`${getGridClass(index)}`}
        >
          <a
            href={project.link}
            className="group flex flex-col h-full bg-[#121214] border border-white/5 rounded-[24px] overflow-hidden transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] relative"
          >
            {/* Glowing gradient accent on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Image Container */}
            <div
              className={`relative w-full ${getImageHeightClass(index)} overflow-hidden bg-[#0A0A0A] shrink-0`}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={500}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-[1.03]"
              />
              {/* Tag badge */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex px-3 py-1.5 rounded-full text-[0.6875rem] uppercase tracking-wider font-bold bg-[#121214]/80 backdrop-blur-md text-white border border-white/10 shadow-sm">
                  {project.technologies[0]}
                </span>
              </div>
              {/* External link icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#121214]/80 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm translate-y-2 group-hover:translate-y-0">
                <FiExternalLink className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between relative z-10 bg-[#121214]">
              <div>
                <h3
                  className={`${index === 5 ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"} font-bold text-white mb-3 tracking-[-0.01em] transition-colors duration-200 group-hover:text-accent`}
                  style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
                >
                  {project.title}
                </h3>
                <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies
                    .slice(1, index === 5 ? 6 : 4)
                    .map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium bg-white/5 text-[#A1A1AA] border border-white/10 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  {project.technologies.length > (index === 5 ? 6 : 4) && (
                    <span className="px-2 py-1 text-xs font-medium bg-white/5 text-[#A1A1AA] border border-white/10 rounded-full">
                      +{project.technologies.length - (index === 5 ? 6 : 4)}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-white/5 flex items-center gap-2 text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                View Project Details
                <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </a>
        </motion.div>
      ))}
    </motion.div>
  );
}

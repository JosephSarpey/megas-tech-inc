"use client";

import { motion, Variants } from "framer-motion";
import { FiMapPin, FiClock, FiDollarSign } from "react-icons/fi";
import Button from "@/components/ui/Button";

type JobOpening = {
  id: string;
  title: string;
  type: string;
  location: string;
  salary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
};

const jobOpenings: JobOpening[] = [
  {
    id: "fe-dev",
    title: "Senior Frontend Developer",
    type: "Full-time",
    location: "Remote",
    salary: "$90,000 - $130,000",
    description:
      "We are looking for an experienced Frontend Developer to join our team. You will be responsible for building user interfaces and implementing features using modern web technologies.",
    responsibilities: [
      "Develop and maintain responsive web applications using React/Next.js",
      "Collaborate with designers to implement pixel-perfect UIs",
      "Optimize applications for maximum speed and scalability",
      "Write clean, maintainable, and efficient code",
      "Participate in code reviews and team discussions",
    ],
    requirements: [
      "5+ years of experience in frontend development",
      "Proficiency in JavaScript/TypeScript, React, and Next.js",
      "Experience with state management (Redux, Context API)",
      "Strong understanding of responsive design and CSS-in-JS",
      "Familiarity with RESTful APIs and GraphQL",
    ],
  },
  {
    id: "ui-designer",
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Remote",
    salary: "$80,000 - $110,000",
    description:
      "We are seeking a talented UI/UX Designer to create amazing user experiences. The ideal candidate should have an eye for clean and artful design, possess superior UI skills and be able to translate high-level requirements into beautiful, intuitive, and functional designs.",
    responsibilities: [
      "Create user-centered designs by considering market analysis, customer feedback, and usability findings",
      "Design UI elements and tools such as navigation menus, search boxes, tabs, and widgets",
      "Develop UI mockups and prototypes that clearly illustrate how sites function and look",
      "Create original graphic designs (e.g., images, sketches, and tables)",
      "Identify and troubleshoot UX problems",
    ],
    requirements: [
      "3+ years of UI/UX design experience",
      "Portfolio of design projects",
      "Knowledge of wireframe tools (e.g., Figma, Sketch)",
      "Team spirit; strong communication skills to collaborate with various stakeholders",
      "Good time-management skills",
    ],
  },
  {
    id: "devops",
    title: "DevOps Engineer",
    type: "Full-time",
    location: "Remote",
    salary: "$100,000 - $150,000",
    description:
      "We are looking for a DevOps Engineer to help us build functional systems that improve customer experience. You will be responsible for deploying product updates, identifying production issues, and implementing integrations that meet customer needs.",
    responsibilities: [
      "Implement CI/CD pipelines for automated testing and deployment",
      "Manage cloud infrastructure (AWS/Azure/GCP)",
      "Monitor and maintain system health and performance",
      "Automate infrastructure provisioning and configuration",
      "Ensure security best practices are implemented",
    ],
    requirements: [
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Knowledge of containerization (Docker, Kubernetes)",
      "Experience with infrastructure as code (Terraform, CloudFormation)",
      "Strong background in Linux/Unix administration",
      "Experience with monitoring tools (Prometheus, Grafana, etc.)",
    ],
  },
];

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
      staggerChildren: 0.08,
    },
  },
};

export default function Careers() {
  return (
    <div
      className="min-h-screen pt-32 pb-24"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24">
        <span className="label-pill mb-6 inline-flex shadow-[0_0_20px_rgba(16,185,129,0.15)]">
          Careers
        </span>
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
        >
          Join Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
            Team
          </span>
        </h1>
        <p className="text-lg md:text-xl text-[#A1A1AA] max-w-3xl mx-auto mb-10 leading-relaxed">
          We&apos;re looking for talented individuals who are passionate about
          technology and innovation. Join us in building the future of digital
          solutions.
        </p>
        <Button
          as="a"
          href="#open-positions"
          variant="primary"
          size="lg"
          withArrow
        >
          View Open Positions
        </Button>
      </div>

      {/* Why Work With Us */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-white tracking-tight"
            style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
          >
            Why Work With Us
          </h2>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Flexible Work Environment",
              description:
                "Work from anywhere with our remote-first policy and flexible working hours.",
            },
            {
              title: "Competitive Compensation",
              description:
                "We offer competitive salaries, stock options, and comprehensive benefits.",
            },
            {
              title: "Continuous Learning",
              description:
                "Access to learning resources, conferences, and training programs.",
            },
            {
              title: "Cutting-Edge Technology",
              description:
                "Work with the latest technologies and tools in the industry.",
            },
            {
              title: "Impactful Work",
              description:
                "Build products that make a real difference in people's lives.",
            },
            {
              title: "Great Team",
              description:
                "Collaborate with talented, passionate, and supportive colleagues.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative h-full flex flex-col bg-[#121214] border border-white/5 rounded-[24px] p-8 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] overflow-hidden"
            >
              <div
                className="absolute -top-12 -left-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none z-0"
                style={{ background: "#10B98118" }}
              />
              <div className="relative z-10 flex flex-col flex-grow">
                <h3
                  className="text-xl font-semibold mb-3 text-white tracking-[-0.01em]"
                  style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-[#A1A1AA] text-sm leading-relaxed flex-grow">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Open Positions */}
      <div
        id="open-positions"
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-white tracking-tight"
            style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
          >
            Open Positions
          </h2>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          {jobOpenings.map((job) => (
            <motion.div
              key={job.id}
              variants={fadeInUp}
              className="group relative bg-[#121214] rounded-[24px] overflow-hidden border border-white/5 hover:border-accent/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] p-8 md:p-10"
            >
              <div
                className="absolute -top-24 -left-24 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl pointer-events-none z-0"
                style={{ background: "#10B98118" }}
              />

              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-4">
                  <h3
                    className="text-2xl font-bold text-white tracking-tight"
                    style={{
                      fontFamily: "var(--font-plus-jakarta), sans-serif",
                    }}
                  >
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
                    <span className="flex items-center text-[#A1A1AA] bg-white/5 px-3 py-1.5 rounded-full">
                      <FiMapPin className="mr-1.5" /> {job.location}
                    </span>
                    <span className="flex items-center text-[#A1A1AA] bg-white/5 px-3 py-1.5 rounded-full">
                      <FiClock className="mr-1.5" /> {job.type}
                    </span>
                    <span className="flex items-center text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full">
                      <FiDollarSign className="mr-1.5" /> {job.salary}
                    </span>
                  </div>
                </div>

                <p className="text-[#A1A1AA] text-lg mb-8 leading-relaxed">
                  {job.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <div>
                    <h4 className="font-semibold text-white mb-4 tracking-wide text-sm uppercase">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-3">
                      {job.responsibilities.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start text-[#A1A1AA] text-sm"
                        >
                          <span className="text-accent mr-3 mt-1 text-xs">
                            ●
                          </span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-4 tracking-wide text-sm uppercase">
                      Requirements
                    </h4>
                    <ul className="space-y-3">
                      {job.requirements.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start text-[#A1A1AA] text-sm"
                        >
                          <span className="text-accent mr-3 mt-1 text-xs">
                            ●
                          </span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex justify-end pt-6 border-t border-white/5">
                  <Button
                    as="a"
                    href={`/careers/apply?position=${encodeURIComponent(job.title)}`}
                    variant="outline"
                    withArrow
                  >
                    Apply for this position
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Match Section */}
        <div className="mt-20 max-w-4xl mx-auto bg-gradient-to-r from-[#121214] to-[#121214]/50 border border-white/10 rounded-[24px] p-10 md:p-12 flex flex-col items-center text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3
              className="text-2xl font-bold text-white mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
            >
              Don&apos;t see a role that fits?
            </h3>
            <p className="text-[#A1A1AA] mb-8 max-w-xl mx-auto text-lg leading-relaxed">
              We&apos;re always looking for talented individuals to join our
              team. Send us your resume and tell us how you can contribute to
              our mission.
            </p>
            <Button as="a" href="/contact" variant="primary">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { motion, Variants } from "framer-motion";
import { FiCalendar, FiClock, FiTag, FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import Button from "@/components/ui/Button";

const posts = [
  {
    id: 1,
    title: "Getting Started with Next.js 14",
    excerpt:
      "Learn the fundamentals of building modern web applications with Next.js 14 and React Server Components.",
    date: "June 15, 2023",
    readTime: "8 min read",
    category: "Web Development",
    slug: "getting-started-with-nextjs-14",
  },
  {
    id: 2,
    title: "The Future of AI in Software Development",
    excerpt:
      "Exploring how artificial intelligence is transforming the way we build and deploy software applications.",
    date: "May 28, 2023",
    readTime: "10 min read",
    category: "Artificial Intelligence",
    slug: "future-of-ai-in-software-development",
  },
  {
    id: 3,
    title: "Mastering TypeScript for React",
    excerpt:
      "A comprehensive guide to using TypeScript with React for type-safe and maintainable code.",
    date: "May 10, 2023",
    readTime: "12 min read",
    category: "Development",
    slug: "mastering-typescript-for-react",
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
      staggerChildren: 0.1,
    },
  },
};

export default function BlogPostList() {
  return (
    <div className="space-y-16">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {posts.map((post) => (
          <motion.article
            key={post.id}
            variants={fadeInUp}
            className="group relative h-full flex flex-col bg-[#121214] border border-white/5 rounded-[24px] p-8 overflow-hidden transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]"
          >
            {/* Background Glow */}
            <div
              className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none z-0"
              style={{ background: "#10B98118" }}
            />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center space-x-2 text-sm text-[#A1A1AA] mb-4">
                <span className="flex items-center">
                  <FiCalendar className="mr-1.5 w-4 h-4" />
                  {post.date}
                </span>
                <span>•</span>
                <span className="flex items-center">
                  <FiClock className="mr-1.5 w-4 h-4" />
                  {post.readTime}
                </span>
              </div>

              <h3
                className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors tracking-tight"
                style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
              >
                {post.title}
              </h3>

              <p className="text-[#A1A1AA] mb-8 leading-relaxed flex-grow">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap items-center justify-between pt-6 border-t border-white/5">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[0.6875rem] font-bold uppercase tracking-wider bg-accent/10 text-accent border border-accent/20">
                  <FiTag className="mr-1.5 w-3 h-3" />
                  {post.category}
                </span>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 duration-300"
                >
                  Read more
                  <FiArrowRight className="ml-1.5 w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <div className="text-center relative z-10">
        <Button
          href="/blog/archive"
          variant="outline"
          size="lg"
          className="rounded-full px-8 backdrop-blur-sm border-white/10 hover:border-accent hover:bg-accent/5"
        >
          View All Articles
        </Button>
      </div>
    </div>
  );
}

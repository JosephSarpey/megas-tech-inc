"use client";

import { motion, Variants } from "framer-motion";
import { FiCalendar, FiClock, FiTag, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

const posts = [
  {
    id: 1,
    title: 'Getting Started with Next.js 14',
    excerpt: 'Learn the fundamentals of building modern web applications with Next.js 14 and React Server Components.',
    date: 'June 15, 2023',
    readTime: '8 min read',
    category: 'Web Development',
    slug: 'getting-started-with-nextjs-14',
  },
  {
    id: 2,
    title: 'The Future of AI in Software Development',
    excerpt: 'Exploring how artificial intelligence is transforming the way we build and deploy software applications.',
    date: 'May 28, 2023',
    readTime: '10 min read',
    category: 'Artificial Intelligence',
    slug: 'future-of-ai-in-software-development',
  },
  {
    id: 3,
    title: 'Mastering TypeScript for React',
    excerpt: 'A comprehensive guide to using TypeScript with React for type-safe and maintainable code.',
    date: 'May 10, 2023',
    readTime: '12 min read',
    category: 'Development',
    slug: 'mastering-typescript-for-react',
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
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
    <div className="space-y-8">
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
            className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-accent/30 transition-colors duration-300"
          >
            <div className="p-6">
              <div className="flex items-center space-x-2 text-sm text-gray-400 mb-3">
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
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent transition-colors">
                {post.title}
              </h3>
              
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              
              <div className="flex flex-wrap items-center justify-between mt-6 pt-4 border-t border-gray-700/50">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
                  <FiTag className="mr-1.5 w-3.5 h-3.5" />
                  {post.category}
                </span>
                
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                >
                  Read more
                  <FiArrowRight className="ml-1.5 w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <div className="mt-12 text-center">
        <Link
          href="/blog/archive"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent/50 transition-colors"
        >
          View All Articles
          <FiArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}

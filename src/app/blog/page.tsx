import { Metadata } from 'next';
import BlogPostList from '@/components/blog/BlogPostList';

export const metadata: Metadata = {
  title: 'Blog | MEGAS TECH',
  description: 'Insights, tutorials, and updates about technology, development, and industry trends.',
};

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Our Blog</h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, tutorials, and updates about technology, development, and industry trends.
          </p>
        </div>

        <BlogPostList />
      </div>
    </div>
  );
}

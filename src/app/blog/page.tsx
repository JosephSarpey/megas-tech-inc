import { Metadata } from 'next';
import BlogPostList from '@/components/blog/BlogPostList';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Blog | MEGAS TECH INC',
  description: 'Insights, tutorials, and updates about technology, development, and industry trends.',
};

export default function Blog() {
  return (
    <div className="min-h-screen pt-32 pb-24" style={{ background: 'var(--bg-primary)' }}>
      {/* Background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, black 30%, transparent 100%)',
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="label-pill mb-6 inline-flex shadow-[0_0_20px_rgba(16,185,129,0.15)]">Insights & News</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif' }}>
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">Blog</span>
          </h1>
          <p className="text-lg md:text-xl text-[#A1A1AA] leading-relaxed">
            Insights, tutorials, and updates about technology, development, and industry trends.
          </p>
        </div>

        {/* Blog Posts Component */}
        <div className="max-w-7xl mx-auto">
          <BlogPostList />
        </div>

        {/* Newsletter CTA */}
        <div className="mt-32 max-w-4xl mx-auto bg-gradient-to-r from-[#121214] to-[#121214]/50 border border-white/10 rounded-[24px] p-10 md:p-12 flex flex-col items-center text-center relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 w-full">
            <h3 className="text-3xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif' }}>
              Subscribe to our newsletter
            </h3>
            <p className="text-[#A1A1AA] mb-8 text-lg max-w-2xl mx-auto">
              Get the latest insights, tutorials, and updates delivered straight to your inbox. No spam, just pure value.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                required
                className="flex-grow px-4 py-3 bg-[#0A0A0B] border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder:text-[#A1A1AA]"
              />
              <Button
                type="submit"
                variant="primary"
                className="whitespace-nowrap"
              >
                Subscribe Now
              </Button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

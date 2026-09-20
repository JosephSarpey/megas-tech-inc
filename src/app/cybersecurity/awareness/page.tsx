import { Metadata } from "next";
import FeaturedEpisode from "@/components/cybersecurity/FeaturedEpisode";
import PodcastGrid from "@/components/cybersecurity/PodcastGrid";
import Button from "@/components/ui/Button";
import {
  featuredContent,
  featuredTags,
  recentEpisodes,
} from "@/data/cybersecurityAwareness";

export const metadata: Metadata = {
  title: "Cybersecurity Awareness | MEGAS TECH INC",
  description:
    "Tune into our exclusive podcast and video-blog series on digital defense.",
};

export default function CybersecurityAwareness() {
  const latest = recentEpisodes[0];

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <Button
            as="a"
            href="/cybersecurity"
            variant="ghost"
            size="sm"
            className="mb-8"
          >
            &larr; Back to Cybersecurity
          </Button>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="label-pill mb-4 inline-flex shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                Awareness & Training
              </span>
              <h1
                className="text-white text-4xl md:text-5xl lg:text-6xl tracking-tight font-bold"
                style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
              >
                Cyber <span className="text-accent">Briefs</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Featured Episode */}
        <FeaturedEpisode
          category={
            latest.type === "blog" ? "BLOG POST" : "CYBERSECURITY ALERT"
          }
          title={latest.title}
          author={latest.author || "Cyber Security Brief"}
          date={latest.date || "Recent"}
          readTime={latest.duration}
          content={latest.content || featuredContent}
          tags={latest.tags || featuredTags}
          imageUrl={latest.thumbnail}
          slug={latest.slug}
        />

        {/* Previous Episodes Grid */}
        <PodcastGrid limit={3} />

        {/* Newsletter / Stay Updated */}
        <div className="mt-32 bg-[#121214] border border-white/5 rounded-3xl p-10 md:p-16 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Never Miss an Alert
          </h3>
          <p className="text-[#A1A1AA] mb-8 max-w-lg mx-auto">
            Get the latest security briefings and vulnerability alerts delivered
            straight to your inbox every week.
          </p>
          <form className="flex w-full max-w-md gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-white/5 border border-white/10 rounded-btn px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
            />
            <Button type="button" variant="primary">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

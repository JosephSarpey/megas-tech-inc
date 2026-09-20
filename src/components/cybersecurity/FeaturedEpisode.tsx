import { LuPlay } from "react-icons/lu";
import Link from "next/link";

interface FeaturedEpisodeProps {
  category: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  content: string[];
  tags: string[];
  imageUrl?: string;
  slug?: string;
}

export default function FeaturedEpisode({
  category,
  title,
  author,
  date,
  readTime,
  content,
  tags,
  imageUrl,
  slug,
}: FeaturedEpisodeProps) {
  return (
    <div className="bg-[#121214] border border-white/5 rounded-[32px] overflow-hidden mb-20 relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="grid lg:grid-cols-2 gap-0 relative z-10">
        {/* Media / Player Placeholder */}
        <div className="relative aspect-video lg:aspect-auto bg-black/40 border-b lg:border-b-0 lg:border-r border-white/5 flex items-center justify-center group overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60 transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: `url('${imageUrl || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"}')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#121214]/50 pointer-events-none hidden lg:block" />

          <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center">
            {slug ? (
              <Link
                href={`/cybersecurity/awareness/${slug}`}
                className="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:scale-110 transition-transform duration-300"
              >
                <LuPlay className="w-10 h-10 ml-1" />
              </Link>
            ) : (
              <button className="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:scale-110 transition-transform duration-300">
                <LuPlay className="w-10 h-10 ml-1" />
              </button>
            )}
            <p className="text-sm font-semibold tracking-wider uppercase text-white/70">
              Watch Latest Episode
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-6 text-sm text-[#A1A1AA] font-medium tracking-wide">
            <span className="text-accent uppercase">{category}</span>
            <span className="w-1 h-1 bg-white/20 rounded-full" />
            <span>{readTime}</span>
          </div>

          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
          >
            {title}
          </h2>

          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold text-white border border-white/5">
              CB
            </div>
            <div>
              <p className="text-white text-sm font-medium">{author}</p>
              <p className="text-[#A1A1AA] text-xs">{date}</p>
            </div>
          </div>

          <div className="space-y-4 mb-8 text-[#A1A1AA] text-[15px] leading-relaxed">
            {content.slice(0, 1).map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
            {content.length > 2 && (
              <p>
                ...{" "}
                {slug && (
                  <Link
                    href={`/cybersecurity/awareness/${slug}`}
                    className="text-accent hover:underline ml-1 font-medium"
                  >
                    View full details
                  </Link>
                )}
              </p>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-xs text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

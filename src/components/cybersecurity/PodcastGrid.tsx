import { LuPlay, LuHeadphones, LuFileText } from 'react-icons/lu';
import Link from 'next/link';
import { recentEpisodes } from '@/data/cybersecurityAwareness';

interface PodcastGridProps {
  filterType?: string;
  hideViewAll?: boolean;
  limit?: number;
}

export default function PodcastGrid({ filterType, hideViewAll = false, limit }: PodcastGridProps) {
  let episodes = filterType
    ? recentEpisodes.filter((ep) => ep.type === filterType)
    : recentEpisodes;
    
  if (limit) {
    episodes = episodes.slice(0, limit);
  }
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h3 
          className="text-2xl font-bold text-white tracking-tight"
          style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
        >
          {hideViewAll ? "All Episodes" : "Recent Episodes"}
        </h3>
        {!hideViewAll && (
          <Link href="/cybersecurity/awareness/episodes" className="text-sm font-medium text-accent hover:text-accent-dark transition-colors">
            View All Episodes &rarr;
          </Link>
        )}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {episodes.map((episode) => (
          <Link href={`/cybersecurity/awareness/${episode.slug}`} key={episode.id} className="group cursor-pointer block">
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 border border-white/5 bg-[#121214]">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                style={{ backgroundImage: `url(${episode.thumbnail})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-accent group-hover:border-accent transition-colors duration-300">
                  {episode.type === 'video' ? (
                    <LuPlay className="w-5 h-5 text-white ml-1" />
                  ) : episode.type === 'audio' ? (
                    <LuHeadphones className="w-5 h-5 text-white" />
                  ) : (
                    <LuFileText className="w-5 h-5 text-white" />
                  )}
                </div>
              </div>

              <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 backdrop-blur-md rounded-md text-xs font-medium text-white border border-white/10">
                {episode.duration}
              </div>
            </div>

            <h4 className="text-lg font-semibold text-white mb-2 line-clamp-2 leading-snug group-hover:text-accent transition-colors">
              {episode.title}
            </h4>
            <p className="text-[#A1A1AA] text-sm">
              {episode.type === 'blog' ? 'Blog Post' : `Episode ${episode.id.replace('ep-', '')}`}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

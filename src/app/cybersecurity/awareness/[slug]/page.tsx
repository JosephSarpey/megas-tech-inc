import { Metadata } from "next";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import { recentEpisodes } from "@/data/cybersecurityAwareness";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const episode = recentEpisodes.find((ep) => ep.slug === slug);

  if (!episode) {
    return { title: "Episode Not Found | MEGAS TECH INC" };
  }

  return {
    title: `${episode.title} | MEGAS TECH INC Cybersecurity`,
    description: `Listen, watch, or read our cybersecurity update: ${episode.title}`,
  };
}

export default async function EpisodePage({ params }: PageProps) {
  const { slug } = await params;
  const episode = recentEpisodes.find((ep) => ep.slug === slug);

  if (!episode) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Button
          as="a"
          href="/cybersecurity/awareness"
          variant="ghost"
          size="sm"
          className="mb-8"
        >
          &larr; Back to Briefs
        </Button>

        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="label-pill inline-flex shadow-[0_0_20px_rgba(16,185,129,0.15)] uppercase tracking-wider text-xs">
              {episode.type}
            </span>
            <span className="text-[#A1A1AA] text-sm">
              {episode.date || "Recent"}
            </span>
            <span className="text-[#A1A1AA] text-sm">&bull;</span>
            <span className="text-[#A1A1AA] text-sm">{episode.duration}</span>
          </div>
          <h1
            className="text-white text-3xl md:text-5xl tracking-tight font-bold mb-6"
            style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
          >
            {episode.title}
          </h1>
          {episode.author && (
            <div className="text-[#A1A1AA]">
              By <span className="text-white font-medium">{episode.author}</span>
            </div>
          )}
        </div>

        {/* Media / Thumbnail Section */}
        <div className="relative aspect-video rounded-3xl overflow-hidden mb-12 border border-white/10 bg-[#121214]">
          {episode.type !== "blog" && episode.mediaUrl ? (
            <iframe
              className="absolute inset-0 w-full h-full border-0"
              src={episode.mediaUrl}
              title={episode.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${episode.thumbnail})` }}
              />
              {/* Overlay for audio/video without mediaUrl */}
              {episode.type !== "blog" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                  <div className="w-20 h-20 rounded-full bg-accent/20 backdrop-blur-md flex items-center justify-center border border-accent/30 cursor-pointer hover:bg-accent/40 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="white"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Content Section */}
        <div className="prose prose-invert prose-lg max-w-none prose-p:text-[#A1A1AA] prose-p:leading-relaxed prose-headings:text-white">
          {episode.type === "blog" && episode.content ? (
            episode.content.map((paragraph, idx) => (
              <p key={idx} className="mb-6">
                {paragraph}
              </p>
            ))
          ) : !episode.mediaUrl ? (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold mb-4 text-white">
                {episode.type === "video"
                  ? "Watch the Full Video"
                  : "Listen to the Full Audio"}
              </h3>
              <p className="text-[#A1A1AA] mb-6 max-w-lg mx-auto">
                Dive deep into the security details with our expert hosts. Full transcript and additional resources will be available shortly.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="primary">
                  {episode.type === "video" ? "Play Video" : "Play Audio"}
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-[#A1A1AA] mt-8 bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Episode Resources
              </h3>
              <p>
                Dive deep into the security details with our expert hosts using the player above. Full transcript and additional resources will be available shortly.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

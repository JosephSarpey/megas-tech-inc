import { Metadata } from "next";
import PodcastGrid from "@/components/cybersecurity/PodcastGrid";
import Button from "@/components/ui/Button";
import { LuAudioLines, LuBook, LuPlay } from "react-icons/lu";

export const metadata: Metadata = {
  title: "All Episodes - Cybersecurity Awareness | MEGAS TECH INC",
  description: "Browse all of our cybersecurity awareness episodes, blogs, and videos.",
};

interface PageProps {
  searchParams: Promise<{ type?: string }>;
}

export default async function AllEpisodesPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const currentType = params.type;

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <Button
            as="a"
            href="/cybersecurity/awareness"
            variant="ghost"
            size="sm"
            className="mb-8"
          >
            &larr; Back to Briefs
          </Button>
          <div className="flex flex-col gap-2">
            <span className="label-pill inline-flex shadow-[0_0_20px_rgba(16,185,129,0.15)] w-max">
              Library
            </span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h1
                className="text-white text-4xl md:text-5xl font-bold"
                style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
              >
                All <span className="text-accent">Episodes</span>
              </h1>

              <div className="flex gap-4">
                <Button
                  as="a"
                  href="?type=audio"
                  variant={currentType === "audio" ? "primary" : "outline"}
                  size="sm"
                >
                  <LuAudioLines /> Listen
                </Button>
                <Button
                  as="a"
                  href="?type=video"
                  variant={currentType === "video" ? "primary" : "outline"}
                  size="sm"
                >
                  <LuPlay /> Watch
                </Button>
                <Button
                  as="a"
                  href="?type=blog"
                  variant={currentType === "blog" ? "primary" : "outline"}
                  size="sm"
                >
                  <LuBook /> Read
                </Button>
                {currentType && (
                  <Button
                    as="a"
                    href="/cybersecurity/awareness/episodes"
                    variant="ghost"
                    size="sm"
                  >
                    Clear Filter
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Episodes Grid */}
        <PodcastGrid hideViewAll filterType={currentType} />
      </div>
    </div>
  );
}

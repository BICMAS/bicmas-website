import { PlayCircle } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { VideoCard } from "@/components/shared/video-card";
import { SiteContainer } from "@/components/shared/site-container";
import { resources } from "@/data/site";

export function ResourcesVideoSection() {
  const videos = resources.filter((resource) => resource.type === "Video");

  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
      <SiteContainer>
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">
                <PlayCircle className="h-4 w-4" />
                YouTube Hub
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Learning Hub Videos</h2>
              <p className="mt-3 max-w-xl text-slate-600">
                Short, practical lessons for L&D leaders, managers, and operations teams—watch on demand.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {videos.map((video) => (
            <Reveal key={video.title}>
              <VideoCard
                title={video.title}
                description={video.description}
                duration={video.duration ?? "5:00"}
                href={video.href}
              />
            </Reveal>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}

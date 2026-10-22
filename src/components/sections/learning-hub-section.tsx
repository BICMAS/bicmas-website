import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { learningVideos } from "@/data/home";
import { Reveal } from "@/components/animations/reveal";
import { SiteContainer } from "@/components/shared/site-container";

export function LearningHubSection() {
  return (
    <section id="learning-hub" className="section-muted py-16 sm:py-20">
      <SiteContainer>
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">YouTube Learning Hub</h2>
              <p className="mt-2 max-w-2xl text-slate-600">
                Practical insights for L&D leaders, operations teams, and workforce transformation executives.
              </p>
            </div>
            <Link
              href="https://www.youtube.com/@bicmasinstitute"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 hover:text-cyan-600"
            >
              View all on YouTube
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {learningVideos.map((video) => (
            <Reveal key={video.title}>
              <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card transition hover:border-cyan-300/50">
                <div className="relative aspect-video bg-gradient-to-br from-navy-800 to-navy-900">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm">
                      <PlayCircle className="h-6 w-6" />
                    </span>
                  </div>
                  <span className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-0.5 text-xs font-medium text-white">
                    {video.duration}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold leading-snug text-slate-900">{video.title}</h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}

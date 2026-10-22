import Link from "next/link";
import { ArrowRight, BookOpen, FileText, Video } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SiteContainer } from "@/components/shared/site-container";

const highlights = [
  { icon: FileText, label: "Case studies & whitepapers" },
  { icon: BookOpen, label: "Expert blogs & guides" },
  { icon: Video, label: "YouTube Hub video series" }
];

export function ResourcesPageHero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 via-white to-white pb-14 pt-12 sm:pb-16 sm:pt-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.1),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.08),transparent_50%)]" />

      <SiteContainer>
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-600">Resources</p>
          </Reveal>
          <Reveal>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]">
              Practical insights for{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                workforce transformation leaders
              </span>
            </h1>
          </Reveal>
          <Reveal>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Explore blogs, case studies, webinars, whitepapers, and video lessons designed to help you build
              high-performance learning ecosystems.
            </p>
          </Reveal>
          <Reveal>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Talk to an Expert
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/solutions" className="btn-outline-cyan border-slate-300 text-slate-700">
                View Solutions
              </Link>
            </div>
          </Reveal>
        </div>

        <ul className="relative mt-14 flex flex-wrap items-center justify-center gap-3">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.label}>
                <li className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
                  <Icon className="h-4 w-4 text-cyan-600" />
                  {item.label}
                </li>
              </Reveal>
            );
          })}
        </ul>
      </SiteContainer>
    </section>
  );
}

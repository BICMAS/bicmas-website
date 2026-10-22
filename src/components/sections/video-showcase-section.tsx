import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CircleCheckBig, Play } from "lucide-react";
import { platformOutcomes } from "@/data/home";
import { Reveal } from "@/components/animations/reveal";
import { SiteContainer } from "@/components/shared/site-container";

export function VideoShowcaseSection() {
  return (
    <section id="video-showcase" className="section-dark py-16 sm:py-20">
      <SiteContainer>
        <div className="dark-panel overflow-hidden p-4 sm:p-6 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            <Reveal>
              <div className="group relative aspect-video overflow-hidden rounded-xl bg-navy-950">
                <Image
                  src="/images/hero-reference.png"
                  alt="Transforming workforce capability platform preview"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                <Link
                  href="https://www.youtube.com/@bicmasinstitute"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                  aria-label="Play platform overview video"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/50 bg-cyan-500/20 text-cyan-100 backdrop-blur-sm transition group-hover:scale-105 group-hover:bg-cyan-500/30">
                    <Play className="h-7 w-7 fill-current" />
                  </span>
                  <span className="text-sm font-medium text-slate-200">Transforming Workforce Capability</span>
                </Link>
              </div>
            </Reveal>

            <Reveal>
              <div className="px-2 py-2 lg:px-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Platform in Action</p>
                <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">See the Bicmas Platform in Action</h2>
                <ul className="mt-6 space-y-3.5">
                  {platformOutcomes.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-slate-200">
                      <CircleCheckBig className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="https://www.youtube.com/@bicmasinstitute"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline-cyan"
                  >
                    Watch Full Presentation
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200">
                    Schedule a Demo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}

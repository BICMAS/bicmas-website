import { Globe2, LineChart, ShieldCheck, Smartphone } from "lucide-react";
import { valuePillars } from "@/data/about";
import { Reveal } from "@/components/animations/reveal";
import { SectionSequence } from "@/components/animations/section-sequence";
import { SiteContainer } from "@/components/shared/site-container";

const icons = [Globe2, LineChart, ShieldCheck, Smartphone];

export function AboutValues() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <SiteContainer>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Why Choose Bicmas</h2>
            <p className="mt-4 text-slate-600">What sets our approach apart for enterprise L&D and operations leaders.</p>
          </div>
        </Reveal>

        <SectionSequence profile="dynamic" className="mt-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valuePillars.map((pillar, index) => {
              const Icon = icons[index] ?? Globe2;
              return (
                <Reveal key={pillar.title}>
                  <article
                    data-seq-item
                    className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-cyan-300/60 hover:shadow-[0_20px_40px_-28px_rgba(6,182,212,0.4)]"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600 transition group-hover:scale-105">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-slate-900">{pillar.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{pillar.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </SectionSequence>
      </SiteContainer>
    </section>
  );
}

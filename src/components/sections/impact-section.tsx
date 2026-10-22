import { Gauge, LineChart, Rocket, ShieldCheck, Users } from "lucide-react";
import { impactPillars } from "@/data/home";
import { Reveal } from "@/components/animations/reveal";
import { SiteContainer } from "@/components/shared/site-container";

const icons = [Users, ShieldCheck, LineChart, Rocket, Gauge];

export function ImpactSection() {
  return (
    <section id="impact-metrics" className="section-dark border-t border-cyan-500/10 py-16 sm:py-20">
      <SiteContainer>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">The Real Impact You Can Expect</h2>
            <p className="mt-4 text-slate-300">
              Measurable outcomes that connect learning investment to workforce performance and business results.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {impactPillars.map((pillar, index) => {
            const Icon = icons[index] ?? Gauge;
            return (
              <Reveal key={pillar.title}>
                <article className="text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{pillar.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </SiteContainer>
    </section>
  );
}

import {
  BarChart3,
  GraduationCap,
  Layers,
  MapPin,
  Smartphone,
  Sparkles
} from "lucide-react";
import { capabilityCards } from "@/data/home";
import { Reveal } from "@/components/animations/reveal";
import { SiteContainer } from "@/components/shared/site-container";

const icons = [GraduationCap, Layers, Sparkles, MapPin, Smartphone, BarChart3];

export function CapabilitiesSection() {
  return (
    <section id="platform-overview" className="section-light py-16 sm:py-20">
      <SiteContainer>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">What We Help Organisations Build</h2>
            <p className="mt-4 text-base text-slate-600">
              End-to-end digital learning capabilities designed for enterprise scale, field execution, and measurable
              workforce performance.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilityCards.map((card, index) => {
            const Icon = icons[index] ?? Layers;
            return (
              <Reveal key={card.title}>
                <article className="capability-card h-full">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-200 bg-cyan-50 text-cyan-600">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </SiteContainer>
    </section>
  );
}

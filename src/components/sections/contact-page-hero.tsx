import { Calendar, Clock, MessageSquare } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SiteContainer } from "@/components/shared/site-container";

const assurances = [
  { icon: Clock, text: "Response within 1 business day" },
  { icon: Calendar, text: "Flexible demo scheduling" },
  { icon: MessageSquare, text: "Enterprise-ready consultation" }
];

export function ContactPageHero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 via-white to-white pb-10 pt-12 sm:pb-12 sm:pt-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.1),transparent_55%)]" />

      <SiteContainer>
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-600">Contact</p>
          </Reveal>
          <Reveal>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Let&apos;s design your{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                workforce learning roadmap
              </span>
            </h1>
          </Reveal>
          <Reveal>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Share your goals and we&apos;ll help map the right enterprise learning strategy for your organisation.
            </p>
          </Reveal>
        </div>

        <ul className="relative mt-10 flex flex-wrap items-center justify-center gap-3">
          {assurances.map((item) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.text}>
                <li className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
                  <Icon className="h-4 w-4 text-cyan-600" />
                  {item.text}
                </li>
              </Reveal>
            );
          })}
        </ul>
      </SiteContainer>
    </section>
  );
}

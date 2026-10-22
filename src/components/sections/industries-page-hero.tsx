import Link from "next/link";
import { ArrowRight, Globe2, LineChart, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SiteContainer } from "@/components/shared/site-container";

const stats = [
  { icon: Globe2, label: "14+ markets supported across Africa" },
  { icon: ShieldCheck, label: "Regulated & field-ready program design" },
  { icon: LineChart, label: "Measurable workforce performance outcomes" }
];

export function IndustriesPageHero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 via-white to-white pb-14 pt-12 sm:pb-16 sm:pt-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.12),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.08),transparent_50%)]" />

      <SiteContainer>
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-600">Industries</p>
          </Reveal>
          <Reveal>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]">
              Industry-specific learning strategies for{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                operational excellence
              </span>
            </h1>
          </Reveal>
          <Reveal>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Explore tailored workforce transformation playbooks designed for your sector—from high-volume field
              operations to regulated environments and enterprise-scale delivery.
            </p>
          </Reveal>
          <Reveal>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Book a Strategy Session
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/solutions" className="btn-outline-cyan border-slate-300 text-slate-700">
                Explore Solutions
              </Link>
            </div>
          </Reveal>
        </div>

        <ul className="relative mt-14 grid gap-4 sm:grid-cols-3">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.label}>
                <li className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-left text-sm font-medium text-slate-700">{item.label}</span>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </SiteContainer>
    </section>
  );
}

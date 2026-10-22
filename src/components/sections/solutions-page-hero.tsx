import Link from "next/link";
import { ArrowRight, BarChart3, Layers, Zap } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SiteContainer } from "@/components/shared/site-container";

const stats = [
  { icon: Layers, label: "Six integrated solution pillars" },
  { icon: BarChart3, label: "Measurable ROI across every program" },
  { icon: Zap, label: "Deploy in weeks, not quarters" }
];

export function SolutionsPageHero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 via-white to-white pb-14 pt-12 sm:pb-16 sm:pt-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.12),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.08),transparent_50%)]" />

      <SiteContainer>
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-600">Solutions</p>
          </Reveal>
          <Reveal>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]">
              Enterprise learning solutions built for{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                measurable performance
              </span>
            </h1>
          </Reveal>
          <Reveal>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              From LMS platforms and readiness programs to mobile field learning and compliance—deploy the right
              capabilities for your workforce at scale.
            </p>
          </Reveal>
          <Reveal>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/industries" className="btn-outline-cyan border-slate-300 text-slate-700">
                View by Industry
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

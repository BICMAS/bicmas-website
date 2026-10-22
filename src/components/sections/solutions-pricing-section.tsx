import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SiteContainer } from "@/components/shared/site-container";
import { pricingTiers } from "@/data/solutions-page";

export function SolutionsPricingSection() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
      <SiteContainer>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">Engagement Models</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Flexible plans for every growth stage</h2>
            <p className="mt-4 text-slate-600">
              Start with core LMS capabilities and scale into multi-academy, regional deployments with dedicated
              success support.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <Reveal key={tier.name}>
              <article
                className={`relative flex h-full flex-col rounded-2xl border p-6 transition duration-300 sm:p-8 ${
                  tier.featured
                    ? "border-cyan-400 bg-white shadow-[0_24px_48px_-28px_rgba(6,182,212,0.45)]"
                    : "border-slate-200 bg-white shadow-card hover:border-cyan-200"
                }`}
              >
                {tier.featured ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                    Most Popular
                  </span>
                ) : null}
                <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{tier.description}</p>
                <p className="mt-5 text-2xl font-bold text-cyan-700">{tier.priceHint}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {tier.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2 text-sm text-slate-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                    tier.featured
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:brightness-110"
                      : "border border-slate-300 text-slate-700 hover:border-cyan-400 hover:text-cyan-700"
                  }`}
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SiteContainer } from "@/components/shared/site-container";

export function IndustriesPageCta() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <SiteContainer>
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-card sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">Partner With Bicmas</p>
                <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
                  Need a tailored playbook for your industry?
                </h2>
                <p className="mt-3 max-w-xl text-slate-600">
                  Our team will map your workforce challenges to a practical digital learning roadmap with clear
                  milestones, governance, and measurable outcomes.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link href="/contact" className="btn-primary justify-center">
                  Request Industry Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/resources" className="btn-outline-cyan justify-center border-slate-300 text-slate-700">
                  View Resources
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </SiteContainer>
    </section>
  );
}

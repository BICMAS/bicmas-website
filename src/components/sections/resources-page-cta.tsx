import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SiteContainer } from "@/components/shared/site-container";

export function ResourcesPageCta() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <SiteContainer>
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-card sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">Stay Ahead</p>
                <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
                  Want tailored guidance for your learning strategy?
                </h2>
                <p className="mt-3 max-w-xl text-slate-600">
                  Connect with our team for a consultation—we&apos;ll help you translate insights into a practical
                  enterprise roadmap.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link href="/contact" className="btn-primary justify-center">
                  Book a Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/solutions" className="btn-outline-cyan justify-center border-slate-300 text-slate-700">
                  Explore Solutions
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </SiteContainer>
    </section>
  );
}

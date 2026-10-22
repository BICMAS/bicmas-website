import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SiteContainer } from "@/components/shared/site-container";

export function AboutPageCta() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <SiteContainer>
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-card sm:p-12">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Ready to transform workforce capability with Bicmas?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Let&apos;s design a digital learning roadmap aligned to your business goals, operating model, and regional
              workforce realities.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-outline-cyan border-slate-300 text-slate-700">
                Talk to an Expert
              </Link>
            </div>
          </div>
        </Reveal>
      </SiteContainer>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Reveal } from "@/components/animations/reveal";
import { SiteContainer } from "@/components/shared/site-container";

export function CtaSection() {
  const ctaRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = ctaRef.current;
      if (!root) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.to("[data-cta-primary]", {
        scale: 1.02,
        duration: 1.4,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });
    },
    { scope: ctaRef }
  );

  return (
    <section ref={ctaRef} id="cta-banner" className="section-dark py-16 sm:py-20">
      <SiteContainer>
        <Reveal>
          <div className="mx-auto max-w-4xl rounded-2xl border border-cyan-500/15 bg-gradient-to-r from-navy-800 via-navy-900 to-navy-800 px-6 py-12 text-center sm:px-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Ready to build a more capable, confident and future-ready workforce?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
              Partner with Bicmas to design a digital learning ecosystem that scales across your organisation and delivers
              measurable business impact.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" data-cta-primary className="btn-primary">
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-outline">
                Talk to an Expert
              </Link>
            </div>
          </div>
        </Reveal>
      </SiteContainer>
    </section>
  );
}

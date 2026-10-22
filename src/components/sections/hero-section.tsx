"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRight, Globe2, PlayCircle, Smartphone } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroStats } from "@/data/home";
import { SiteContainer } from "@/components/shared/site-container";

const statIcons = [Globe2, Smartphone, Globe2];

export function HeroSection() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.timeline({ defaults: { duration: 0.7, ease: "power2.out" } })
        .from("[data-hero-eyebrow]", { y: 16, opacity: 0 })
        .from("[data-hero-title]", { y: 22, opacity: 0 }, "<0.08")
        .from("[data-hero-copy]", { y: 16, opacity: 0 }, "<0.08")
        .from("[data-hero-cta]", { y: 12, opacity: 0, stagger: 0.06 }, "<0.08")
        .from("[data-hero-image]", { y: 20, opacity: 0, scale: 0.98 }, "<0.15");

      gsap.to("[data-hero-image]", {
        y: -6,
        duration: 2.8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });
    },
    { scope: rootRef }
  );

  return (
    <section ref={rootRef} className="relative overflow-hidden section-dark pb-12 pt-10 sm:pb-16 sm:pt-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(34,211,238,0.18),transparent_50%),radial-gradient(ellipse_at_80%_20%,rgba(59,130,246,0.12),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(34,211,238,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.06)_1px,transparent_1px)] [background-size:48px_48px]" />

      <SiteContainer>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p data-hero-eyebrow className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Digital Learning. Real Impact.
            </p>
            <h1 data-hero-title className="mt-5 text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[3.25rem]">
              Transform Workforce Capability.{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Drive Business Performance.
              </span>
            </h1>
            <p data-hero-copy className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Digital learning ecosystems built for scalable workforce readiness, operational execution, and measurable
              business impact.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" data-hero-cta className="btn-primary">
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#video-showcase" data-hero-cta className="btn-outline">
                <PlayCircle className="h-4 w-4" />
                Watch Platform Overview
              </Link>
            </div>
          </div>

          <div data-hero-image className="relative will-change-transform">
            <div className="overflow-hidden rounded-2xl border border-cyan-400/25 bg-navy-800/50 p-2 shadow-glow">
              <Image
                src="/images/hero-reference.png"
                alt="Bicmas learning platform dashboard and mobile app preview"
                width={1200}
                height={800}
                priority
                className="h-auto w-full rounded-xl"
              />
            </div>
          </div>
        </div>

        <ul className="mt-12 grid gap-6 border-t border-cyan-500/15 pt-10 sm:grid-cols-3">
          {heroStats.map((item, index) => {
            const Icon = statIcons[index] ?? Globe2;
            return (
              <li key={item.label} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyan-400/25 bg-cyan-500/10 text-cyan-300">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium leading-snug text-slate-200">{item.label}</span>
              </li>
            );
          })}
        </ul>
      </SiteContainer>
    </section>
  );
}

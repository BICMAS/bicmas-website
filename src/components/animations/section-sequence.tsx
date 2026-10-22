"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

type SequenceProfile = "soft" | "dynamic" | "compact";

const profileConfig: Record<SequenceProfile, { duration: number; stagger: number; y: number }> = {
  soft: { duration: 0.75, stagger: 0.12, y: 22 },
  dynamic: { duration: 0.65, stagger: 0.1, y: 28 },
  compact: { duration: 0.55, stagger: 0.08, y: 16 }
};

export function SectionSequence({
  children,
  profile = "soft",
  className
}: {
  children: ReactNode;
  profile?: SequenceProfile;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      gsap.registerPlugin(ScrollTrigger);
      const items = Array.from(root.querySelectorAll("[data-seq-item]"));
      if (items.length === 0) return;

      const settings = profileConfig[profile];
      gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 82%",
          once: true
        },
        defaults: { ease: "power2.out", duration: settings.duration }
      }).fromTo(
        items,
        { y: settings.y, opacity: 0 },
        { y: 0, opacity: 1, stagger: settings.stagger, clearProps: "opacity,transform" }
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

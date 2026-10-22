"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Building2,
  Factory,
  HeartHandshake,
  HeartPulse,
  Landmark,
  Radio,
  ShoppingBag,
  Store,
  Truck
} from "lucide-react";
import type { Industry } from "@/data/site";

const iconMap: Record<string, LucideIcon> = {
  fmcg: ShoppingBag,
  banking: Landmark,
  manufacturing: Factory,
  retail: Store,
  ngos: HeartHandshake,
  logistics: Truck,
  telecommunications: Radio,
  healthcare: HeartPulse
};

export function IndustryCard({ industry }: { industry: Industry }) {
  const Icon = iconMap[industry.slug] ?? Building2;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/70 hover:shadow-[0_24px_48px_-28px_rgba(6,182,212,0.45)]">
      <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-cyan-400/10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between gap-4">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-blue-50 text-cyan-600 transition duration-300 group-hover:scale-105 group-hover:border-cyan-200">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
          Playbook
        </span>
      </div>

      <h3 className="relative mt-5 text-xl font-semibold text-slate-900">{industry.name}</h3>
      <p className="relative mt-1 text-xs font-medium text-cyan-700">{industry.highlight}</p>
      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-slate-600">{industry.challenge}</p>

      <Link
        href={`/industries/${industry.slug}`}
        className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 transition group-hover:gap-3 group-hover:text-cyan-600"
      >
        View industry playbook
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </article>
  );
}

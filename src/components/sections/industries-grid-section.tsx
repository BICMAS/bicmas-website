"use client";

import { useMemo, useState } from "react";
import type { Industry, IndustryCategory } from "@/data/site";
import { industries } from "@/data/site";
import { IndustryCard } from "@/components/shared/industry-card";
import { SectionSequence } from "@/components/animations/section-sequence";
import { SiteContainer } from "@/components/shared/site-container";

const filters: { label: string; value: "all" | IndustryCategory }[] = [
  { label: "All Industries", value: "all" },
  { label: "Field & Retail", value: "field" },
  { label: "Regulated", value: "regulated" },
  { label: "Enterprise", value: "enterprise" },
  { label: "Social Impact", value: "social" }
];

export function IndustriesGridSection() {
  const [activeFilter, setActiveFilter] = useState<"all" | IndustryCategory>("all");

  const filtered = useMemo(() => {
    if (activeFilter === "all") return industries;
    return industries.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="bg-white pb-20 pt-4 sm:pb-24">
      <SiteContainer>
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            Showing <span className="font-semibold text-slate-800">{filtered.length}</span> industry playbooks
          </p>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter industries">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.value;
              return (
                <button
                  key={filter.value}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold transition sm:text-sm ${
                    isActive
                      ? "border-cyan-500 bg-cyan-500 text-white shadow-[0_8px_20px_-12px_rgba(6,182,212,0.8)]"
                      : "border-slate-200 bg-white text-slate-600 hover:border-cyan-300 hover:text-cyan-700"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        <SectionSequence profile="dynamic" className="mt-10">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((industry: Industry) => (
              <div key={industry.slug} data-seq-item>
                <IndustryCard industry={industry} />
              </div>
            ))}
          </div>
        </SectionSequence>
      </SiteContainer>
    </section>
  );
}

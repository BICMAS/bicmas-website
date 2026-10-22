"use client";

import { useMemo, useState } from "react";
import type { Solution, SolutionCategory } from "@/data/site";
import { solutions } from "@/data/site";
import { SolutionCard } from "@/components/shared/solution-card";
import { SectionSequence } from "@/components/animations/section-sequence";
import { SiteContainer } from "@/components/shared/site-container";

const filters: { label: string; value: "all" | SolutionCategory }[] = [
  { label: "All Solutions", value: "all" },
  { label: "Platform & LMS", value: "platform" },
  { label: "Readiness", value: "readiness" },
  { label: "Field & Mobile", value: "field" },
  { label: "Compliance", value: "compliance" }
];

export function SolutionsGridSection() {
  const [activeFilter, setActiveFilter] = useState<"all" | SolutionCategory>("all");

  const filtered = useMemo(() => {
    if (activeFilter === "all") return solutions;
    return solutions.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="bg-white pb-12 pt-4 sm:pb-16">
      <SiteContainer>
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            Showing <span className="font-semibold text-slate-800">{filtered.length}</span> workforce solutions
          </p>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter solutions">
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
            {filtered.map((solution: Solution) => (
              <div key={solution.slug} data-seq-item>
                <SolutionCard solution={solution} />
              </div>
            ))}
          </div>
        </SectionSequence>
      </SiteContainer>
    </section>
  );
}

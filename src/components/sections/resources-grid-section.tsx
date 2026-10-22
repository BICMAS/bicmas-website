"use client";

import { useMemo, useState } from "react";
import type { Resource, ResourceType } from "@/data/site";
import { resources } from "@/data/site";
import { ResourceCard } from "@/components/shared/resource-card";
import { SectionSequence } from "@/components/animations/section-sequence";
import { SiteContainer } from "@/components/shared/site-container";

const filters: { label: string; value: "all" | ResourceType }[] = [
  { label: "All Resources", value: "all" },
  { label: "Blog", value: "Blog" },
  { label: "Case Studies", value: "Case Study" },
  { label: "Webinars", value: "Webinar" },
  { label: "Whitepapers", value: "Whitepaper" }
];

export function ResourcesGridSection() {
  const [activeFilter, setActiveFilter] = useState<"all" | ResourceType>("all");

  const docs = useMemo(() => resources.filter((r) => r.type !== "Video"), []);

  const filtered = useMemo(() => {
    if (activeFilter === "all") return docs;
    return docs.filter((item) => item.type === activeFilter);
  }, [activeFilter, docs]);

  const featured = filtered.filter((r) => r.featured);
  const rest = filtered.filter((r) => !r.featured);

  return (
    <section className="bg-white pb-12 pt-4 sm:pb-16">
      <SiteContainer>
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            Showing <span className="font-semibold text-slate-800">{filtered.length}</span> resources
          </p>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter resources">
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

        {featured.length > 0 && activeFilter === "all" ? (
          <SectionSequence profile="soft" className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600" data-seq-item>
              Featured
            </p>
            <div className="mt-4 grid gap-6 lg:grid-cols-2">
              {featured.map((resource: Resource) => (
                <div key={resource.title} data-seq-item>
                  <ResourceCard resource={resource} featured />
                </div>
              ))}
            </div>
          </SectionSequence>
        ) : null}

        <SectionSequence profile="dynamic" className="mt-10">
          <div className="grid gap-6 md:grid-cols-2">
            {(activeFilter === "all" ? rest : filtered).map((resource: Resource) => (
              <div key={resource.title} data-seq-item>
                <ResourceCard resource={resource} />
              </div>
            ))}
          </div>
        </SectionSequence>
      </SiteContainer>
    </section>
  );
}

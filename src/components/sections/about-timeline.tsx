"use client";

import { useState } from "react";
import { timelineMilestones } from "@/data/about";
import { SectionSequence } from "@/components/animations/section-sequence";
import { SiteContainer } from "@/components/shared/site-container";

export function AboutTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <SiteContainer>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">Our Journey</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Leadership & Impact Timeline</h2>
          <p className="mt-4 text-slate-600">A decade of building enterprise learning capability across Africa.</p>
        </div>

        <SectionSequence profile="soft" className="mt-12">
          <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
            <div className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0" role="tablist">
              {timelineMilestones.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={item.year}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveIndex(index)}
                    data-seq-item
                    className={`shrink-0 rounded-xl border px-5 py-4 text-left transition ${
                      isActive
                        ? "border-cyan-500 bg-white shadow-[0_8px_24px_-16px_rgba(6,182,212,0.6)]"
                        : "border-slate-200 bg-white/60 hover:border-cyan-200"
                    }`}
                  >
                    <span className={`text-2xl font-bold ${isActive ? "text-cyan-600" : "text-slate-400"}`}>{item.year}</span>
                  </button>
                );
              })}
            </div>

            <article
              data-seq-item
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-card transition duration-300"
            >
              <p className="text-sm font-semibold text-cyan-600">{timelineMilestones[activeIndex]?.year}</p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-900">{timelineMilestones[activeIndex]?.title}</h3>
              <p className="mt-4 leading-relaxed text-slate-600">{timelineMilestones[activeIndex]?.description}</p>

              <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500"
                  style={{ width: `${((activeIndex + 1) / timelineMilestones.length) * 100}%` }}
                />
              </div>
            </article>
          </div>
        </SectionSequence>
      </SiteContainer>
    </section>
  );
}

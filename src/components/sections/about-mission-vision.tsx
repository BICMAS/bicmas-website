"use client";

import { useState } from "react";
import { Eye, Target } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SiteContainer } from "@/components/shared/site-container";

const cards = [
  {
    id: "mission",
    icon: Target,
    title: "Mission",
    body: "Empower organisations to build confident, high-performing teams with digital learning that drives business outcomes."
  },
  {
    id: "vision",
    icon: Eye,
    title: "Vision",
    body: "Become Africa's most trusted enterprise learning transformation partner for workforce capability and measurable impact."
  }
];

export function AboutMissionVision() {
  const [active, setActive] = useState("mission");

  return (
    <section className="bg-white py-16 sm:py-20">
      <SiteContainer>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Our Mission & Vision</h2>
            <p className="mt-4 text-slate-600">The principles that guide how we design, deliver, and measure enterprise learning.</p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {cards.map((card) => {
            const Icon = card.icon;
            const isActive = active === card.id;
            return (
              <Reveal key={card.id}>
                <article
                  onMouseEnter={() => setActive(card.id)}
                  onFocus={() => setActive(card.id)}
                  tabIndex={0}
                  className={`cursor-default rounded-2xl border p-8 transition duration-300 ${
                    isActive
                      ? "border-cyan-300 bg-gradient-to-br from-cyan-50 to-white shadow-[0_20px_40px_-28px_rgba(6,182,212,0.45)]"
                      : "border-slate-200 bg-white shadow-card hover:border-cyan-200"
                  }`}
                >
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border transition ${
                      isActive ? "border-cyan-200 bg-cyan-100 text-cyan-700" : "border-slate-200 bg-slate-50 text-cyan-600"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold text-slate-900">{card.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{card.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </SiteContainer>
    </section>
  );
}

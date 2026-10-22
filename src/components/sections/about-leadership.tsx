import { leadershipTeam } from "@/data/about";
import { Reveal } from "@/components/animations/reveal";
import { SectionSequence } from "@/components/animations/section-sequence";
import { SiteContainer } from "@/components/shared/site-container";

export function AboutLeadership() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <SiteContainer>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">Leadership</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Guided by Enterprise Learning Experts</h2>
            <p className="mt-4 text-slate-600">A leadership team committed to workforce transformation across Africa.</p>
          </div>
        </Reveal>

        <SectionSequence profile="soft" className="mt-10">
          <div className="grid gap-6 md:grid-cols-3">
            {leadershipTeam.map((leader) => (
              <Reveal key={leader.name}>
                <article
                  data-seq-item
                  className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-card transition hover:border-cyan-300/50 hover:shadow-[0_20px_40px_-28px_rgba(6,182,212,0.35)]"
                >
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-lg font-bold text-white shadow-md transition group-hover:scale-105">
                    {leader.initials}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">{leader.name}</h3>
                  <p className="mt-1 text-sm font-medium text-cyan-700">{leader.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{leader.bio}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </SectionSequence>
      </SiteContainer>
    </section>
  );
}

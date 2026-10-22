import { MapPin, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SiteContainer } from "@/components/shared/site-container";

export function AfricaPartnershipSection() {
  return (
    <section className="section-light py-16 sm:py-20">
      <SiteContainer>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">
                Trusted by Organisations Across Africa
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                Partnering with forward-thinking organisations to build stronger, more capable workforces
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                From Lagos to Nairobi and Accra, Bicmas supports enterprise teams with digital learning infrastructure
                built for regional scale, local context, and measurable operational impact.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative mx-auto aspect-[4/3] max-w-lg">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-50 to-blue-100" />
              <div className="absolute inset-4 rounded-2xl border border-cyan-200/60 bg-white/80 shadow-card backdrop-blur-sm">
                <svg viewBox="0 0 400 320" className="h-full w-full p-6" aria-hidden>
                  <ellipse cx="200" cy="160" rx="140" ry="120" fill="#e0f2fe" />
                  <path
                    d="M120 180 Q160 120 200 140 T280 170 Q260 220 200 230 Q140 220 120 180"
                    fill="#bae6fd"
                    stroke="#22d3ee"
                    strokeWidth="1.5"
                  />
                  <circle cx="175" cy="175" r="6" fill="#06b6d4" />
                  <circle cx="220" cy="155" r="6" fill="#06b6d4" />
                  <circle cx="245" cy="190" r="6" fill="#06b6d4" />
                  <circle cx="190" cy="210" r="6" fill="#06b6d4" />
                </svg>
                <div className="absolute bottom-8 right-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/40 bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-glow">
                  <ShieldCheck className="h-8 w-8" />
                </div>
              </div>
              <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm">
                <MapPin className="h-3.5 w-3.5 text-cyan-600" />
                Pan-African delivery
              </div>
            </div>
          </Reveal>
        </div>
      </SiteContainer>
    </section>
  );
}

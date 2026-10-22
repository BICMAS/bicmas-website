import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SiteContainer } from "@/components/shared/site-container";

export function AboutAfricaImpact() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <SiteContainer>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">Impact Across Africa</p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                Delivering workforce capability where it matters most
              </h2>
              <p className="mt-5 leading-relaxed text-slate-600">
                From Lagos to Nairobi and Accra, we partner with forward-thinking organisations to build stronger, more
                capable workforces through digital learning infrastructure designed for regional realities.
              </p>
              <Link
                href="/industries"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 hover:text-cyan-600"
              >
                Explore industry playbooks
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative aspect-[4/3] max-w-lg lg:ml-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-50 to-blue-100" />
              <div className="absolute inset-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
                <svg viewBox="0 0 400 300" className="h-full w-full" aria-hidden>
                  <ellipse cx="200" cy="150" rx="130" ry="110" fill="#e0f2fe" />
                  <path
                    d="M130 170 Q170 110 210 130 T270 165 Q250 210 200 220 Q150 210 130 170"
                    fill="#bae6fd"
                    stroke="#22d3ee"
                    strokeWidth="1.5"
                  />
                  {[ [175, 165], [215, 145], [240, 180], [195, 200] ].map(([cx, cy], i) => (
                    <circle key={i} cx={cx} cy={cy} r="5" fill="#06b6d4" />
                  ))}
                </svg>
                <div className="absolute bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg">
                  <ShieldCheck className="h-7 w-7" />
                </div>
              </div>
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm">
                <MapPin className="h-3.5 w-3.5 text-cyan-600" />
                14+ African markets
              </div>
            </div>
          </Reveal>
        </div>
      </SiteContainer>
    </section>
  );
}

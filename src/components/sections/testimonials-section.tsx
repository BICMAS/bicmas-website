import { Quote } from "lucide-react";
import { testimonials } from "@/data/home";
import { Reveal } from "@/components/animations/reveal";
import { SiteContainer } from "@/components/shared/site-container";

export function TestimonialsSection() {
  return (
    <section className="section-light py-16 sm:py-20">
      <SiteContainer>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">What Our Partners Say</h2>
            <p className="mt-4 text-slate-600">Leaders across industries trust Bicmas to deliver measurable workforce outcomes.</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <Reveal key={item.author}>
              <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-card">
                <Quote className="h-8 w-8 text-cyan-500/80" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">&ldquo;{item.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-xs font-bold text-white">
                    {item.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{item.author}</p>
                    <p className="text-xs text-slate-500">{item.role}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}

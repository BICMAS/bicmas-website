import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SiteContainer } from "@/components/shared/site-container";
import { SiteFooter } from "@/components/shared/site-footer";
import { SiteHeader } from "@/components/shared/site-header";
import { FeatureGrid } from "@/components/shared/feature-grid";
import { solutions } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);
  if (!solution) return { title: "Solution" };
  return { title: `${solution.title} | Bicmas Institute`, description: solution.problem };
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);
  if (!solution) notFound();

  return (
    <>
      <SiteHeader />
      <main className="bg-white">
        <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white py-12 sm:py-16">
          <SiteContainer>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-sm font-medium text-cyan-700 hover:text-cyan-600"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Solutions
            </Link>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">{solution.highlight}</p>
            <h1 className="mt-3 text-4xl font-bold text-slate-900 sm:text-5xl">{solution.title}</h1>
            <p className="mt-5 max-w-3xl text-lg text-slate-600">{solution.problem}</p>
            <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">{solution.explanation}</p>
          </SiteContainer>
        </section>

        <section className="py-14 sm:py-16">
          <SiteContainer>
            <div className="grid gap-6 lg:grid-cols-2">
              <FeatureGrid title="Features" items={solution.features} />
              <FeatureGrid title="Benefits" items={solution.benefits} />
            </div>

            <Reveal>
              <section className="mt-10 rounded-2xl border border-slate-200 bg-gradient-to-br from-cyan-50/50 via-white to-blue-50/30 p-6 sm:p-8">
                <h2 className="text-2xl font-semibold text-slate-900">Performance Metrics</h2>
                <p className="mt-2 text-sm text-slate-600">Outcomes organisations achieve with {solution.title}</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {solution.metrics.map((metric) => (
                    <article
                      key={metric.label}
                      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-cyan-300 hover:shadow-[0_12px_32px_-20px_rgba(6,182,212,0.4)]"
                    >
                      <p className="text-3xl font-bold text-cyan-700">{metric.value}</p>
                      <p className="mt-1 text-sm text-slate-600">{metric.label}</p>
                    </article>
                  ))}
                </div>
              </section>
            </Reveal>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Book a Demo Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/resources" className="btn-outline-cyan border-slate-300 text-slate-700">
                View Related Resources
              </Link>
            </div>
          </SiteContainer>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

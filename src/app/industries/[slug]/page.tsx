import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CircleCheckBig } from "lucide-react";
import { SiteContainer } from "@/components/shared/site-container";
import { SiteFooter } from "@/components/shared/site-footer";
import { SiteHeader } from "@/components/shared/site-header";
import { industries } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) return { title: "Industry" };
  return { title: `${industry.name} Industry Solutions`, description: industry.challenge };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) notFound();

  return (
    <>
      <SiteHeader />
      <main className="bg-white">
        <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white py-12 sm:py-16">
          <SiteContainer>
            <Link href="/industries" className="inline-flex items-center gap-2 text-sm font-medium text-cyan-700 hover:text-cyan-600">
              <ArrowLeft className="h-4 w-4" />
              Back to Industries
            </Link>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">{industry.highlight}</p>
            <h1 className="mt-3 text-4xl font-bold text-slate-900 sm:text-5xl">{industry.name}</h1>
            <p className="mt-5 max-w-3xl text-lg text-slate-600">{industry.challenge}</p>
          </SiteContainer>
        </section>

        <section className="py-14 sm:py-16">
          <SiteContainer>
            <div className="grid gap-8 lg:grid-cols-2">
              <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-card">
                <h2 className="text-2xl font-semibold text-slate-900">How Bicmas Supports {industry.name}</h2>
                <p className="mt-4 leading-relaxed text-slate-600">{industry.approach}</p>
              </article>
              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
                <h2 className="text-2xl font-semibold text-slate-900">Expected Outcomes</h2>
                <ul className="mt-5 space-y-3">
                  {industry.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-3 text-slate-700">
                      <CircleCheckBig className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Book Industry Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/solutions" className="btn-outline-cyan border-slate-300 text-slate-700">
                View Related Solutions
              </Link>
            </div>
          </SiteContainer>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, BookOpen, FileText, Mic, PlayCircle, ScrollText } from "lucide-react";
import type { Resource } from "@/data/site";

const typeIcons: Record<Resource["type"], LucideIcon> = {
  Blog: BookOpen,
  "Case Study": FileText,
  Webinar: Mic,
  Whitepaper: ScrollText,
  Video: PlayCircle
};

const typeColors: Record<Resource["type"], string> = {
  Blog: "bg-blue-50 text-blue-700 border-blue-100",
  "Case Study": "bg-emerald-50 text-emerald-700 border-emerald-100",
  Webinar: "bg-violet-50 text-violet-700 border-violet-100",
  Whitepaper: "bg-amber-50 text-amber-700 border-amber-100",
  Video: "bg-cyan-50 text-cyan-700 border-cyan-100"
};

export function ResourceCard({ resource, featured = false }: { resource: Resource; featured?: boolean }) {
  const Icon = typeIcons[resource.type];
  const colorClass = typeColors[resource.type];

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/70 hover:shadow-[0_20px_40px_-28px_rgba(6,182,212,0.4)] ${
        featured ? "border-cyan-200 shadow-[0_16px_40px_-24px_rgba(6,182,212,0.35)]" : "border-slate-200 shadow-card"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${colorClass}`}>
          <Icon className="h-3 w-3" />
          {resource.type}
        </span>
        {resource.readTime ? <span className="text-xs text-slate-400">{resource.readTime}</span> : null}
      </div>

      <h3 className={`mt-4 font-semibold text-slate-900 ${featured ? "text-xl" : "text-lg"}`}>{resource.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{resource.description}</p>

      <Link
        href={resource.href}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 transition group-hover:gap-3 group-hover:text-cyan-600"
      >
        Read more
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}

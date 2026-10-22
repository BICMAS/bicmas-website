import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

export function VideoCard({
  title,
  description,
  duration,
  href
}: {
  title: string;
  description?: string;
  duration: string;
  href: string;
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition hover:border-cyan-300/60 hover:shadow-[0_20px_40px_-28px_rgba(6,182,212,0.35)]">
      <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-slate-100 via-cyan-50/50 to-blue-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15),transparent_70%)]" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white text-cyan-600 shadow-lg transition group-hover:scale-110">
          <PlayCircle className="h-8 w-8" />
        </span>
        <span className="absolute bottom-3 right-3 rounded-full border border-slate-200 bg-white/90 px-2.5 py-1 text-xs font-semibold text-slate-700 backdrop-blur-sm">
          {duration}
        </span>
      </div>
      <div className="p-5 sm:p-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-600">Video Lesson</p>
        <h3 className="mt-2 text-base font-semibold text-slate-900 sm:text-lg">{title}</h3>
        {description ? <p className="mt-2 line-clamp-2 text-sm text-slate-600">{description}</p> : null}
        <Link
          href={href}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 transition group-hover:gap-3"
        >
          Watch now
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

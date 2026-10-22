import { CircleCheckBig } from "lucide-react";

export function FeatureGrid({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3 text-sm text-slate-700 transition hover:border-cyan-200 hover:bg-cyan-50/40"
          >
            <CircleCheckBig className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

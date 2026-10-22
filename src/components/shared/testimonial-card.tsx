export function TestimonialCard({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <article className="enterprise-surface p-6">
      <p className="text-sm text-slate-200">{quote}</p>
      <p className="mt-4 text-sm font-semibold text-white">{author}</p>
      <p className="text-xs text-slate-400">{role}</p>
    </article>
  );
}

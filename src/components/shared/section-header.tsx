export function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="mb-8">
      <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-3xl text-slate-300">{subtitle}</p> : null}
    </header>
  );
}

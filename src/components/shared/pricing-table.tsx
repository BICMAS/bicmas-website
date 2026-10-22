type PricingTier = {
  name: string;
  description: string;
  priceHint: string;
  highlights: string[];
};

export function PricingTable({ tiers }: { tiers: PricingTier[] }) {
  return (
    <section className="py-16 sm:py-20">
      <div className="grid gap-6 lg:grid-cols-3">
        {tiers.map((tier) => (
          <article key={tier.name} className="enterprise-surface p-6">
            <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
            <p className="mt-2 text-sm text-slate-300">{tier.description}</p>
            <p className="mt-5 text-xl font-bold text-cyan-300">{tier.priceHint}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              {tier.highlights.map((highlight) => (
                <li key={highlight}>- {highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

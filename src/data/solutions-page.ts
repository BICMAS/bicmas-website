export type PricingTier = {
  name: string;
  description: string;
  priceHint: string;
  highlights: string[];
  featured?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Foundation",
    description: "For teams starting their digital learning transformation.",
    priceHint: "From $2,500 / month",
    highlights: ["Core LMS setup", "Up to 1,000 learners", "Standard analytics"]
  },
  {
    name: "Growth",
    description: "For organizations scaling readiness and compliance programs.",
    priceHint: "From $6,500 / month",
    highlights: ["Multi-academy support", "Advanced dashboards", "Manager workflows"],
    featured: true
  },
  {
    name: "Enterprise",
    description: "For large operations requiring regional scale and governance.",
    priceHint: "Custom engagement",
    highlights: ["Regional deployment", "Custom integrations", "Dedicated success team"]
  }
];

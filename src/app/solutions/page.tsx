import type { Metadata } from "next";
import { SolutionsGridSection } from "@/components/sections/solutions-grid-section";
import { SolutionsPageCta } from "@/components/sections/solutions-page-cta";
import { SolutionsPageHero } from "@/components/sections/solutions-page-hero";
import { SolutionsPricingSection } from "@/components/sections/solutions-pricing-section";
import { SiteFooter } from "@/components/shared/site-footer";
import { SiteHeader } from "@/components/shared/site-header";

export const metadata: Metadata = {
  title: "Workforce Solutions | Bicmas Institute",
  description:
    "Enterprise LMS, workforce readiness, mobile learning, compliance training, digital academies, and field enablement."
};

export default function SolutionsPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white">
        <SolutionsPageHero />
        <SolutionsGridSection />
        <SolutionsPricingSection />
        <SolutionsPageCta />
      </main>
      <SiteFooter />
    </>
  );
}

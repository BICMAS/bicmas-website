import type { Metadata } from "next";
import { IndustriesGridSection } from "@/components/sections/industries-grid-section";
import { IndustriesPageCta } from "@/components/sections/industries-page-cta";
import { IndustriesPageHero } from "@/components/sections/industries-page-hero";
import { SiteFooter } from "@/components/shared/site-footer";
import { SiteHeader } from "@/components/shared/site-header";

export const metadata: Metadata = {
  title: "Industries | Bicmas Institute",
  description:
    "Customized learning transformation for FMCG, banking, manufacturing, retail, NGOs, logistics, telecommunications, and healthcare."
};

export default function IndustriesPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white">
        <IndustriesPageHero />
        <IndustriesGridSection />
        <IndustriesPageCta />
      </main>
      <SiteFooter />
    </>
  );
}

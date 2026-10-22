import type { Metadata } from "next";
import { ResourcesGridSection } from "@/components/sections/resources-grid-section";
import { ResourcesPageCta } from "@/components/sections/resources-page-cta";
import { ResourcesPageHero } from "@/components/sections/resources-page-hero";
import { ResourcesVideoSection } from "@/components/sections/resources-video-section";
import { SiteFooter } from "@/components/shared/site-footer";
import { SiteHeader } from "@/components/shared/site-header";

export const metadata: Metadata = {
  title: "Resources | Bicmas Institute",
  description: "Blogs, case studies, webinars, whitepapers, and YouTube Hub learning videos."
};

export default function ResourcesPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white">
        <ResourcesPageHero />
        <ResourcesGridSection />
        <ResourcesVideoSection />
        <ResourcesPageCta />
      </main>
      <SiteFooter />
    </>
  );
}

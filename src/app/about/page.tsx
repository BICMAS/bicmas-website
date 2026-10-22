import type { Metadata } from "next";
import { AboutAfricaImpact } from "@/components/sections/about-africa-impact";
import { AboutLeadership } from "@/components/sections/about-leadership";
import { AboutMissionVision } from "@/components/sections/about-mission-vision";
import { AboutPageCta } from "@/components/sections/about-page-cta";
import { AboutPageHero } from "@/components/sections/about-page-hero";
import { AboutTimeline } from "@/components/sections/about-timeline";
import { AboutValues } from "@/components/sections/about-values";
import { SiteFooter } from "@/components/shared/site-footer";
import { SiteHeader } from "@/components/shared/site-header";

export const metadata: Metadata = {
  title: "About Us | Bicmas Institute",
  description: "Company story, mission, vision, leadership, impact across Africa, and why organisations choose Bicmas."
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white">
        <AboutPageHero />
        <AboutMissionVision />
        <AboutTimeline />
        <AboutValues />
        <AboutLeadership />
        <AboutAfricaImpact />
        <AboutPageCta />
      </main>
      <SiteFooter />
    </>
  );
}

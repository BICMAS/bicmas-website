import { AfricaPartnershipSection } from "@/components/sections/africa-partnership-section";
import { CapabilitiesSection } from "@/components/sections/capabilities-section";
import { CtaSection } from "@/components/sections/cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ImpactSection } from "@/components/sections/impact-section";
import { LearningHubSection } from "@/components/sections/learning-hub-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { VideoShowcaseSection } from "@/components/sections/video-showcase-section";
import { SiteFooter } from "@/components/shared/site-footer";
import { SiteHeader } from "@/components/shared/site-header";
import { solutions, industries } from "@/data/site";

export default function HomePage() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Bicmas Institute",
    url: "https://bicmasinstitute.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://bicmasinstitute.com/resources?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bicmas Institute",
    url: "https://bicmasinstitute.com",
    email: "hello@bicmasinstitute.com",
    areaServed: "Africa",
    sameAs: ["https://www.youtube.com/@bicmasinstitute"],
    knowsAbout: [...solutions.map((s) => s.title), ...industries.map((i) => i.name)]
  };

  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <CapabilitiesSection />
        <VideoShowcaseSection />
        <ImpactSection />
        <AfricaPartnershipSection />
        <LearningHubSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <SiteFooter />
    </>
  );
}

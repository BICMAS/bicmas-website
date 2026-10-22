import type { Metadata } from "next";
import { ContactForm } from "@/components/shared/contact-form";
import { ContactInfoPanel } from "@/components/sections/contact-info-panel";
import { ContactPageHero } from "@/components/sections/contact-page-hero";
import { SiteContainer } from "@/components/shared/site-container";
import { SiteFooter } from "@/components/shared/site-footer";
import { SiteHeader } from "@/components/shared/site-header";
import { Reveal } from "@/components/animations/reveal";

export const metadata: Metadata = {
  title: "Contact Us | Bicmas Institute",
  description:
    "Book a demo consultation, reach our regional offices in Lagos, Nairobi, and Accra, or contact Bicmas for enterprise LMS enquiries."
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white">
        <ContactPageHero />

        <section className="pb-16 sm:pb-20">
          <SiteContainer>
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
              <Reveal>
                <ContactForm />
              </Reveal>
              <Reveal>
                <ContactInfoPanel />
              </Reveal>
            </div>
          </SiteContainer>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

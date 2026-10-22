import Link from "next/link";
import { Facebook, Linkedin, Youtube } from "lucide-react";
import { SiteContainer } from "@/components/shared/site-container";

const footerLinks = {
  "Enterprise LMS": [
    { label: "Platform Overview", href: "/solutions/enterprise-lms" },
    { label: "Learning Analytics", href: "/solutions/enterprise-lms" },
    { label: "Compliance Training", href: "/solutions/compliance-training" }
  ],
  Industries: [
    { label: "FMCG", href: "/industries/fmcg" },
    { label: "Banking", href: "/industries/banking" },
    { label: "Retail", href: "/industries/retail" },
    { label: "Healthcare", href: "/industries/healthcare" }
  ],
  Resources: [
    { label: "Blog", href: "/resources" },
    { label: "Case Studies", href: "/resources" },
    { label: "Webinars", href: "/resources" },
    { label: "Learning Hub", href: "/resources" }
  ]
};

export function SiteFooter() {
  return (
    <footer className="border-t border-cyan-500/10 bg-[#01040f] py-14">
      <SiteContainer>
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 text-sm font-bold text-cyan-300">
                B
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white">Bicmas Institute</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Enterprise learning ecosystems that improve workforce capability, compliance, and measurable business outcomes
              across Africa.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="https://www.youtube.com/@bicmasinstitute" aria-label="YouTube" className="text-slate-400 hover:text-cyan-300">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-cyan-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-slate-400 hover:text-cyan-300">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-white">{title}</h3>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-slate-400 transition hover:text-cyan-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold text-white">Get in Touch</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="mailto:hello@bicmasinstitute.com" className="hover:text-cyan-300">
                  hello@bicmasinstitute.com
                </a>
              </li>
              <li>
                <a href="https://bicmasinstitute.com" className="hover:text-cyan-300">
                  www.bicmasinstitute.com
                </a>
              </li>
              <li className="leading-relaxed">
                12 Admiralty Way, Lekki Phase 1
                <br />
                Lagos, Nigeria
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-slate-500 sm:text-left">
          © {new Date().getFullYear()} Bicmas Institute. All rights reserved.
        </p>
      </SiteContainer>
    </footer>
  );
}

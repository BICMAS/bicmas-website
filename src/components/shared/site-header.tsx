"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { SiteContainer } from "@/components/shared/site-container";

type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

type NavItem = NavLink & {
  hasDropdown?: boolean;
  children?: NavLink[];
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Enterprise LMS", 
    href: "/solutions/enterprise-lms", 
    hasDropdown: true,
    children: [
      { label: "Platform Overview", href: "/solutions/enterprise-lms" },
      { label: "Learning Analytics", href: "/solutions/enterprise-lms" },
      { label: "Compliance Training", href: "/solutions/compliance-training" }
    ]
  },
  { label: "Industries", href: "/industries" },
  {
    label: "Resources",
    href: "/resources",
    hasDropdown: true,
    children: [
      { label: "Blog", href: "/resources" },
      { label: "Case Studies", href: "/resources" },
      { label: "Webinars", href: "/resources" },
      { label: "Whitepapers", href: "/resources" },
      { label: "YouTube Hub", href: "https://www.youtube.com/@bicmasinstitute", external: true }
    ]
  },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" }
];

function NavDropdown({ item }: { item: NavItem }) {
  if (!item.children?.length) {
    return (
      <Link href={item.href} className="inline-flex items-center gap-1 whitespace-nowrap text-sm text-slate-200 transition hover:text-cyan-300">
        {item.label}
        {item.hasDropdown ? <ChevronDown className="h-3.5 w-3.5 opacity-70" /> : null}
      </Link>
    );
  }

  return (
    <div className="group relative">
      <Link
        href={item.href}
        className="inline-flex items-center gap-1 whitespace-nowrap text-sm text-slate-200 transition hover:text-cyan-300"
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown className="h-3.5 w-3.5 opacity-70 transition group-hover:rotate-180" />
      </Link>
      <div className="invisible absolute left-0 top-full z-50 min-w-[12.5rem] pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <ul className="rounded-xl border border-cyan-500/15 bg-navy-900 py-2 shadow-glow" role="menu">
          {item.children.map((child) => (
            <li key={child.label} role="none">
              <Link
                href={child.href}
                target={child.external ? "_blank" : undefined}
                rel={child.external ? "noreferrer" : undefined}
                role="menuitem"
                className="block px-4 py-2.5 text-sm text-slate-200 transition hover:bg-cyan-500/10 hover:text-cyan-300"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-500/10 bg-navy-950/95 backdrop-blur-xl">
      <SiteContainer>
        <div className="flex h-[4.25rem] items-center justify-between gap-4">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 text-sm font-bold text-cyan-300">
              B
            </span>
            <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-white sm:block">
              Bicmas Institute
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-10 xl:flex">
            {navItems.map((item) =>
              item.children?.length ? (
                <NavDropdown key={item.label} item={item} />
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="inline-flex items-center gap-1 whitespace-nowrap text-sm text-slate-200 transition hover:text-cyan-300"
                >
                  {item.label}
                  {item.hasDropdown ? <ChevronDown className="h-3.5 w-3.5 opacity-70" /> : null}
                </Link>
              )
            )}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Link href="/contact" className="btn-primary shrink-0 px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm">
              <span className="hidden sm:inline">Book a Demo</span>
              <span className="sm:hidden">Demo</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/20 text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-300 xl:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className={`${mobileOpen ? "flex" : "hidden"} max-h-[calc(100vh-4.25rem)] flex-col gap-1 overflow-y-auto border-t border-cyan-500/10 py-3 xl:hidden`}
        >
          {navItems.map((item) => (
            <div key={`mobile-${item.label}`}>
              <Link href={item.href} onClick={closeMobile} className="block py-1.5 text-sm font-medium text-slate-200 hover:text-cyan-300">
                {item.label}
              </Link>
              {item.children?.length ? (
                <ul className="mb-2 ml-3 space-y-1 border-l border-cyan-500/20 pl-3">
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <Link
                        href={child.href}
                        target={child.external ? "_blank" : undefined}
                        rel={child.external ? "noreferrer" : undefined}
                        onClick={closeMobile}
                        className="block py-1 text-xs text-slate-400 hover:text-cyan-300"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </nav>
      </SiteContainer>
    </header>
  );
}

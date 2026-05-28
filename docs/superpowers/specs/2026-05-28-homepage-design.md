# Bicmas Website Home Page Design Spec

Date: 2026-05-28  
Scope: Home page only (fully polished), followed by expansion to remaining pages in later phases.

## 1) Product Intent

Build a premium, enterprise-grade L&D home page for Bicmas Institute that communicates:

- Enterprise credibility
- Workforce transformation
- Digital learning innovation
- Scalability across Africa
- Mobile-first accessibility
- Conversion readiness (demo bookings and consultation requests)

The visual benchmark is the provided reference image, with a dark enterprise UI, cyan/electric accents, clean spacing, and purposeful motion.

## 2) Constraints and Decisions

- Framework: Next.js App Router + TypeScript
- Styling: Tailwind CSS with shadcn-ready component patterns
- Animation: GSAP included in the first pass
- Hero media: use the provided screenshot directly as the hero mockup image
- Scope strategy: implement home page first at high polish, then expand to other pages

## 3) Architecture

## App composition

- `src/app/page.tsx` is a composition layer only.
- Home sections are implemented as reusable components under `src/components/sections/`.
- Shared primitives (containers, wrappers, nav/footer blocks, badges, chips) live under `src/components/shared/`.
- GSAP client-side animation helpers/components live under `src/components/animations/`.
- Typed content maps and arrays live in `src/data/`.
- Shared type contracts live in `src/types/`.

## Design principles

- Reuse-first component architecture
- Mobile-first responsive behavior
- Clear visual hierarchy and conversion flow
- Section-level modularity to support later page expansion without redesign

## 4) Home Page Information Architecture

The home page will include the following sections in this order:

1. Sticky navigation bar with primary CTA (`Book a Demo`)
2. Hero section
   - Large enterprise headline
   - Supporting copy
   - Primary and secondary CTAs
   - Trust/value chips
   - Hero media frame using provided screenshot
3. Platform/value strip with icon-based capability cards
4. Video showcase with adjacent outcomes/benefits panel
5. Impact metrics section with animated counters
6. Testimonials and social proof
7. Learning hub previews (video/resource cards)
8. Conversion CTA banner
9. Structured enterprise footer

This structure maps directly to AGENTS requirements for hero, overview, solutions, impact metrics, video showcase, testimonials, learning hub, CTA, and footer.

## 5) GSAP Motion System

Motion is intentionally restrained, premium, and performance-safe.

## Planned animations

- Hero intro timeline:
  - Staggered fade-up for heading, copy, and CTA group
  - Subtle background glow movement
- Hero media entrance:
  - Soft scale + fade-in on first view
  - Optional low-amplitude floating drift
- Scroll reveal pattern for sections/cards:
  - Opacity + vertical translate only
  - Trigger once for most static content blocks
- Counter animation:
  - Numeric count-up when metrics section enters viewport
- CTA interaction micro-motion:
  - Short hover/focus transitions, no excessive displacement

## Motion safety/performance

- Animate only `transform` and `opacity`
- Use `gsap.context()` and proper cleanup in client components
- Respect `prefers-reduced-motion`
- Keep durations short and easing smooth
- Avoid high-cost continuous animations

## 6) Visual System

## Styling direction

- Deep navy / midnight backgrounds
- Cyan/electric blue accents and soft gradient highlights
- Minimal glassmorphism cards with thin glow borders
- Strong typography scale and generous spacing rhythm

## Component standards for this phase

- Rounded buttons with gradient hover transitions
- Card hover glow for interactive sections
- Clear section headings and concise enterprise copy
- Consistent iconography (Lucide React)

## 7) Content Strategy

Voice and tone:

- Professional
- Confident
- Results-driven
- Enterprise-focused

Content must avoid generic marketing filler and remain specific to business outcomes, workforce readiness, and measurable impact.

## 8) SEO, Accessibility, and Performance Requirements

## SEO

- Home metadata with title, description, and Open Graph/Twitter basics
- Semantic headings and landmark structure
- Internal-link-ready nav patterns for future page rollout

## Accessibility

- Keyboard-focusable interactive elements
- Contrast-safe text on dark backgrounds
- Descriptive alt text for media assets
- Semantically correct sectioning and CTA labels

## Performance

- Use `next/image` for hero and media thumbnails
- Keep server-component-first composition where possible
- Isolate GSAP into minimal client wrappers
- Minimize layout shifts through explicit sizing and spacing consistency

## 9) Verification Plan

Before sign-off on implementation:

1. Run lint checks and resolve introduced issues
2. Run build checks and resolve introduced issues
3. Validate mobile/tablet/desktop layout behavior
4. Confirm motion behavior and reduced-motion fallback
5. Confirm CTA paths and section hierarchy render as designed

## 10) Out of Scope for This Pass

- Full multi-page implementation (About, Solutions, Industries, Resources, Contact)
- CMS integration
- Advanced schema markup across all site pages
- Deep mega-menu behavior engineering

These items are planned for subsequent phases after the polished home page is complete.


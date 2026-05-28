# Bicmas Home Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a polished, enterprise-grade Bicmas home page in Next.js with GSAP animations and the provided screenshot as the hero mockup image.

**Architecture:** Create a reusable, section-based home page where `src/app/page.tsx` composes focused section components backed by typed data models. Keep server components as default and isolate GSAP behavior to small client animation wrappers for performance and maintainability.

**Tech Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS, GSAP, Lucide React, ESLint

---

## File Structure

### Create
- `package.json`
- `tsconfig.json`
- `next.config.ts`
- `postcss.config.mjs`
- `eslint.config.mjs`
- `.gitignore`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/globals.css`
- `src/app/robots.ts`
- `src/app/sitemap.ts`
- `src/types/home.ts`
- `src/data/home.ts`
- `src/components/shared/site-container.tsx`
- `src/components/shared/section-header.tsx`
- `src/components/shared/site-header.tsx`
- `src/components/shared/site-footer.tsx`
- `src/components/animations/reveal.tsx`
- `src/components/animations/animated-counter.tsx`
- `src/components/sections/hero-section.tsx`
- `src/components/sections/platform-overview-section.tsx`
- `src/components/sections/video-showcase-section.tsx`
- `src/components/sections/stats-section.tsx`
- `src/components/sections/testimonials-section.tsx`
- `src/components/sections/learning-hub-section.tsx`
- `src/components/sections/cta-section.tsx`
- `public/images/hero-reference.png` (copied from provided asset)

### Modify
- None (new project skeleton)

### Test/Verify
- Lint: `npm run lint`
- Build: `npm run build`

---

### Task 1: Initialize Next.js + Tailwind base

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`, `.gitignore`
- Create: `src/app/layout.tsx`, `src/app/globals.css`
- Verify: local dependency install and lint script wiring

- [ ] **Step 1: Create base package configuration**

```json
{
  "name": "bicmas-website",
  "private": true,
  "version": "0.1.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "gsap": "^3.13.0",
    "lucide-react": "^0.523.0",
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@types/node": "^22.10.0",
    "@types/react": "^19.0.2",
    "@types/react-dom": "^19.0.2",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.16.0",
    "eslint-config-next": "^15.0.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.16",
    "typescript": "^5.7.2"
  }
}
```

- [ ] **Step 2: Add base app layout and global styling foundation**

```tsx
// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bicmas Institute | Transform Workforce Capability",
  description:
    "Digital learning ecosystems for workforce readiness, operational execution, and measurable business impact.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

```css
/* src/app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-slate-950 text-slate-100 antialiased;
}
```

- [ ] **Step 3: Install dependencies**

Run: `npm install`  
Expected: dependencies installed with no errors

- [ ] **Step 4: Verify lint script boots**

Run: `npm run lint`  
Expected: either pass or actionable file-level lint errors

- [ ] **Step 5: Commit**

```bash
git add package.json tsconfig.json next.config.ts postcss.config.mjs eslint.config.mjs .gitignore src/app/layout.tsx src/app/globals.css
git commit -m "chore: initialize nextjs app foundation"
```

---

### Task 2: Define typed data contracts and homepage content

**Files:**
- Create: `src/types/home.ts`
- Create: `src/data/home.ts`

- [ ] **Step 1: Create home page type contracts**

```ts
// src/types/home.ts
export type HeroStat = { label: string };
export type PlatformCard = { title: string; description: string };
export type ImpactStat = { label: string; value: number; suffix?: string };
export type Testimonial = { quote: string; author: string; role: string };
export type LearningVideo = { title: string; duration: string };
```

- [ ] **Step 2: Populate home data constants**

```ts
// src/data/home.ts
import type { HeroStat, ImpactStat, LearningVideo, PlatformCard, Testimonial } from "@/types/home";

export const heroStats: HeroStat[] = [
  { label: "Built for Distributed Workforces" },
  { label: "Mobile-First Learning" },
  { label: "Scalable Across Africa" }
];

// ...additional structured arrays for platform cards, impact stats, testimonials, videos
```

- [ ] **Step 3: Verify typecheck via build**

Run: `npm run build`  
Expected: type checks pass for newly added types/data

- [ ] **Step 4: Commit**

```bash
git add src/types/home.ts src/data/home.ts
git commit -m "feat: add typed homepage content models"
```

---

### Task 3: Build shared layout and navigation/footer components

**Files:**
- Create: `src/components/shared/site-container.tsx`
- Create: `src/components/shared/section-header.tsx`
- Create: `src/components/shared/site-header.tsx`
- Create: `src/components/shared/site-footer.tsx`

- [ ] **Step 1: Create container and heading primitives**

```tsx
// src/components/shared/site-container.tsx
export function SiteContainer({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>;
}
```

```tsx
// src/components/shared/section-header.tsx
export function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="mb-8">
      <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-2 text-slate-300">{subtitle}</p> : null}
    </header>
  );
}
```

- [ ] **Step 2: Build sticky enterprise header and structured footer**

```tsx
// src/components/shared/site-header.tsx
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-500/20 bg-slate-950/85 backdrop-blur">
      {/* brand + nav + Book a Demo button */}
    </header>
  );
}
```

```tsx
// src/components/shared/site-footer.tsx
export function SiteFooter() {
  return (
    <footer className="border-t border-cyan-500/20 bg-slate-950 py-12">
      {/* column links + contact block */}
    </footer>
  );
}
```

- [ ] **Step 3: Run lint for shared components**

Run: `npm run lint`  
Expected: no lint errors in shared component files

- [ ] **Step 4: Commit**

```bash
git add src/components/shared/site-container.tsx src/components/shared/section-header.tsx src/components/shared/site-header.tsx src/components/shared/site-footer.tsx
git commit -m "feat: add reusable shared layout components"
```

---

### Task 4: Add GSAP animation primitives

**Files:**
- Create: `src/components/animations/reveal.tsx`
- Create: `src/components/animations/animated-counter.tsx`

- [ ] **Step 1: Implement reusable reveal wrapper with gsap.context cleanup**

```tsx
"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 });
    }, ref);
    return () => ctx.revert();
  }, []);
  return <div ref={ref}>{children}</div>;
}
```

- [ ] **Step 2: Implement animated counter component for impact metrics**

```tsx
"use client";
import { useEffect, useRef, useState } from "react";

export function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    let current = 0;
    const step = Math.max(1, Math.floor(value / 40));
    const timer = window.setInterval(() => {
      current += step;
      if (current >= value) {
        current = value;
        window.clearInterval(timer);
      }
      setDisplay(current);
    }, 25);
    return () => window.clearInterval(timer);
  }, [value]);
  return <span>{display.toLocaleString()}{suffix}</span>;
}
```

- [ ] **Step 3: Run lint and build**

Run: `npm run lint && npm run build`  
Expected: both pass

- [ ] **Step 4: Commit**

```bash
git add src/components/animations/reveal.tsx src/components/animations/animated-counter.tsx
git commit -m "feat: add gsap-based reveal and counter animations"
```

---

### Task 5: Build homepage section components

**Files:**
- Create: `src/components/sections/hero-section.tsx`
- Create: `src/components/sections/platform-overview-section.tsx`
- Create: `src/components/sections/video-showcase-section.tsx`
- Create: `src/components/sections/stats-section.tsx`
- Create: `src/components/sections/testimonials-section.tsx`
- Create: `src/components/sections/learning-hub-section.tsx`
- Create: `src/components/sections/cta-section.tsx`

- [ ] **Step 1: Build hero section with reference image frame**

```tsx
// src/components/sections/hero-section.tsx
import Image from "next/image";
import { heroStats } from "@/data/home";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-16 pt-20">
      {/* headline, CTA buttons, trust chips */}
      <Image src="/images/hero-reference.png" alt="Bicmas learning platform dashboard preview" width={1200} height={800} priority />
    </section>
  );
}
```

- [ ] **Step 2: Build remaining sections using reusable patterns**

```tsx
// example shape for each section file
export function PlatformOverviewSection() {
  return <section>{/* cards + copy + icons */}</section>;
}
```

- [ ] **Step 3: Ensure cards and CTA blocks follow enterprise visual system**

Run: `npm run dev`  
Expected: dark premium UI, glow cards, consistent spacing, responsive rendering

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/hero-section.tsx src/components/sections/platform-overview-section.tsx src/components/sections/video-showcase-section.tsx src/components/sections/stats-section.tsx src/components/sections/testimonials-section.tsx src/components/sections/learning-hub-section.tsx src/components/sections/cta-section.tsx
git commit -m "feat: implement polished homepage section components"
```

---

### Task 6: Compose homepage route + metadata + SEO resources

**Files:**
- Create: `src/app/page.tsx`
- Create: `src/app/robots.ts`
- Create: `src/app/sitemap.ts`

- [ ] **Step 1: Compose final homepage route from section components**

```tsx
// src/app/page.tsx
import { SiteHeader } from "@/components/shared/site-header";
import { SiteFooter } from "@/components/shared/site-footer";
import { HeroSection } from "@/components/sections/hero-section";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>{/* all sections in approved order */}</main>
      <SiteFooter />
    </>
  );
}
```

- [ ] **Step 2: Add robots and sitemap route handlers**

```ts
// src/app/robots.ts
export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://bicmasinstitute.com/sitemap.xml"
  };
}
```

```ts
// src/app/sitemap.ts
export default function sitemap() {
  return [{ url: "https://bicmasinstitute.com", changeFrequency: "weekly", priority: 1 }];
}
```

- [ ] **Step 3: Run full verification**

Run: `npm run lint && npm run build`  
Expected: both pass with no introduced warnings/errors

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx src/app/robots.ts src/app/sitemap.ts
git commit -m "feat: compose homepage and add baseline seo resources"
```

---

### Task 7: Add provided hero image and final polish pass

**Files:**
- Create: `public/images/hero-reference.png`
- Modify: section visual classes and spacing if needed

- [ ] **Step 1: Copy provided reference image into public assets**

Run: `cp "/Users/mac/.cursor/projects/Users-mac-Desktop-Projects-bicmas-academy-bicmas-website/assets/bicmas-ui-sample-9dc9f853-ee86-4680-bd47-a2bb1ca11860.png" "public/images/hero-reference.png"`  
Expected: image available at `/images/hero-reference.png`

- [ ] **Step 2: Verify responsive behavior at key breakpoints**

Run: `npm run dev`  
Expected: hero and all sections readable at mobile/tablet/desktop widths

- [ ] **Step 3: Run final lint/build verification**

Run: `npm run lint && npm run build`  
Expected: green checks

- [ ] **Step 4: Commit**

```bash
git add public/images/hero-reference.png src/components/sections/hero-section.tsx src/components/sections/*.tsx src/app/globals.css
git commit -m "feat: finalize homepage visuals with reference hero media"
```

---

## Plan Self-Review

- **Spec coverage:** Covered architecture, section order, GSAP integration, hero image usage, SEO routes, accessibility/performance verification.
- **Placeholder scan:** No TODO/TBD placeholders in task steps.
- **Type consistency:** Shared `home.ts` type contracts are defined before component usage in later tasks.


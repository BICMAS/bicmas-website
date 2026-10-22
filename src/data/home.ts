import type { CapabilityCard, HeroStat, ImpactPillar, LearningVideo, Testimonial } from "@/types/home";

export const heroStats: HeroStat[] = [
  { label: "Built for Distributed Workforces" },
  { label: "Mobile-First Learning" },
  { label: "Scalable Across Africa" }
];

export const capabilityCards: CapabilityCard[] = [
  {
    title: "Digital Capability Academies",
    description:
      "Structured academies that build role-specific capability with measurable milestones and manager visibility."
  },
  {
    title: "Enterprise Learning Infrastructure",
    description:
      "Centralised LMS foundations for governance, reporting, and scalable program delivery across regions."
  },
  {
    title: "Training Content Digitalization",
    description:
      "Transform classroom and manual materials into engaging digital journeys optimised for retention."
  },
  {
    title: "Workforce Readiness & Field Enablement",
    description:
      "Practical readiness programs that prepare frontline teams for consistent execution in the field."
  },
  {
    title: "Mobile-First Learning",
    description:
      "Low-bandwidth, offline-friendly learning experiences designed for distributed and mobile workforces."
  },
  {
    title: "Performance Visibility & Learning Analytics",
    description:
      "Executive dashboards and operational metrics that connect learning activity to business outcomes."
  }
];

export const platformOutcomes = [
  "Accelerate workforce readiness across distributed teams",
  "Reduce training costs with scalable digital delivery",
  "Scale learning programs consistently across regions",
  "Improve visibility into skills, compliance, and progress",
  "Drive measurable impact on operational performance"
];

export const impactPillars: ImpactPillar[] = [
  {
    title: "High-Performing Teams",
    description: "Equip teams with the skills and confidence to execute consistently at scale."
  },
  {
    title: "Consistent Execution",
    description: "Standardise frontline behaviour with practical, role-based enablement."
  },
  {
    title: "Lower Training Costs",
    description: "Reduce reliance on in-person delivery while improving completion rates."
  },
  {
    title: "Faster Onboarding",
    description: "Shorten time-to-productivity with structured readiness pathways."
  },
  {
    title: "Measurable Impact",
    description: "Track learning outcomes tied to operational and business KPIs."
  }
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Bicmas gave us a single platform to roll out readiness programs across multiple markets without losing local relevance.",
    author: "Ada Nwoke",
    role: "Group Learning Director, Pan-African FMCG",
    initials: "AN"
  },
  {
    quote:
      "Our field teams finally have training that works on mobile—and leadership can see progress in real time.",
    author: "Daniel K. Mensah",
    role: "Operations Lead, Regional Retail Network",
    initials: "DK"
  },
  {
    quote:
      "We reduced onboarding time while improving compliance coverage. The reporting alone transformed how we plan L&D.",
    author: "Sarah Okafor",
    role: "Head of People Development, Financial Services",
    initials: "SO"
  }
];

export const learningVideos: LearningVideo[] = [
  { title: "5 Ways to Improve Retail Execution in the Field", duration: "4:35" },
  { title: "Building Digital Academies That Scale", duration: "6:12" },
  { title: "Mobile Learning for Distributed Teams", duration: "5:48" },
  { title: "Measuring Learning Impact for Executives", duration: "7:20" }
];

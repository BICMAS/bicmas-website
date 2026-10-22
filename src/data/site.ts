export type SolutionCategory = "platform" | "readiness" | "field" | "compliance";

export type Solution = {
  slug: string;
  title: string;
  highlight: string;
  category: SolutionCategory;
  problem: string;
  explanation: string;
  features: string[];
  benefits: string[];
  metrics: { label: string; value: string }[];
};

export type IndustryCategory = "field" | "regulated" | "enterprise" | "social";

export type Industry = {
  slug: string;
  name: string;
  challenge: string;
  approach: string;
  outcomes: string[];
  highlight: string;
  category: IndustryCategory;
};

export type Resource = {
  title: string;
  type: "Blog" | "Case Study" | "Webinar" | "Whitepaper" | "Video";
  description: string;
  href: string;
  readTime?: string;
  duration?: string;
  featured?: boolean;
};

export type ResourceType = Resource["type"];

export const solutions: Solution[] = [
  {
    slug: "enterprise-lms",
    title: "Enterprise LMS",
    highlight: "Centralized learning operations at scale",
    category: "platform",
    problem: "Learning delivery is fragmented across teams and locations.",
    explanation: "Centralize enterprise learning operations with role-based pathways, governance, and reporting.",
    features: ["Multi-tenant academies", "Role-based pathways", "Advanced reporting", "Manager dashboards"],
    benefits: ["Faster rollout", "Higher completion rates", "Executive visibility"],
    metrics: [
      { label: "Completion uplift", value: "32%" },
      { label: "Time to deploy", value: "6 weeks" },
      { label: "Admin efficiency", value: "41%" }
    ]
  },
  {
    slug: "workforce-readiness",
    title: "Workforce Readiness",
    highlight: "Structured, measurable capability building",
    category: "readiness",
    problem: "Teams are onboarded inconsistently and readiness takes too long.",
    explanation: "Accelerate capability building with structured, measurable readiness programs.",
    features: ["Readiness scorecards", "Supervisor checklists", "Skill pathways", "Readiness analytics"],
    benefits: ["Reduced onboarding time", "Standardized readiness", "Improved execution quality"],
    metrics: [
      { label: "Onboarding reduction", value: "27%" },
      { label: "Assessment pass rate", value: "89%" },
      { label: "Field readiness", value: "2x faster" }
    ]
  },
  {
    slug: "mobile-learning",
    title: "Mobile Learning",
    highlight: "Learning that works on any device, anywhere",
    category: "field",
    problem: "Field teams cannot consistently access desktop-based training.",
    explanation: "Deliver practical learning that works reliably on low-bandwidth mobile environments.",
    features: ["Offline-friendly content", "Microlearning playlists", "Push reminders", "Mobile analytics"],
    benefits: ["Higher field adoption", "Anytime learning", "Wider workforce reach"],
    metrics: [
      { label: "Mobile engagement", value: "74%" },
      { label: "Active learners", value: "3.1x" },
      { label: "Regional coverage", value: "12 countries" }
    ]
  },
  {
    slug: "compliance-training",
    title: "Compliance Training",
    highlight: "Audit-ready certifications and attestations",
    category: "compliance",
    problem: "Audit readiness and policy adherence are difficult to verify.",
    explanation: "Operationalize compliance with tracked certifications, reminders, and audit trails.",
    features: ["Certification workflows", "Expiry alerts", "Audit exports", "Policy attestations"],
    benefits: ["Lower audit risk", "Evidence-based compliance", "Automated renewals"],
    metrics: [
      { label: "Audit prep time", value: "-45%" },
      { label: "Certification coverage", value: "96%" },
      { label: "Policy attestations", value: "100%" }
    ]
  },
  {
    slug: "digital-academies",
    title: "Digital Academies",
    highlight: "Branded academies for every business function",
    category: "platform",
    problem: "Organizations need scalable capability academies for different functions.",
    explanation: "Launch branded academies for sales, operations, leadership, and technical functions.",
    features: ["Academy templates", "Cohort learning", "Pathway milestones", "Academy scorecards"],
    benefits: ["Faster program launch", "Consistent standards", "Scalable governance"],
    metrics: [
      { label: "Academies launched", value: "18+" },
      { label: "Learner throughput", value: "2.4x" },
      { label: "Program adoption", value: "88%" }
    ]
  },
  {
    slug: "field-enablement",
    title: "Field Enablement",
    highlight: "Scenario-based training for frontline teams",
    category: "field",
    problem: "Frontline teams need practical training in fast-moving operating conditions.",
    explanation: "Deliver scenario-based, practical enablement for distributed field and retail teams.",
    features: ["Scenario drills", "Manager coaching loops", "Territory playbooks", "Execution tracking"],
    benefits: ["Stronger frontline consistency", "Reduced errors", "Improved customer experience"],
    metrics: [
      { label: "Execution consistency", value: "+29%" },
      { label: "Error reduction", value: "-22%" },
      { label: "Manager effectiveness", value: "+35%" }
    ]
  }
];

export const industries: Industry[] = [
  {
    slug: "fmcg",
    name: "FMCG",
    highlight: "Field-first distribution enablement",
    category: "field",
    challenge: "High-turnover field operations require fast, repeatable capability building.",
    approach: "Mobile-first playbooks and role-based readiness pathways for sales and distribution teams.",
    outcomes: ["Faster onboarding", "Stronger field execution", "Higher route-to-market consistency"]
  },
  {
    slug: "banking",
    name: "Banking",
    highlight: "Compliance-led workforce upskilling",
    category: "regulated",
    challenge: "Strict compliance and service quality standards require continuous upskilling.",
    approach: "Compliance-centered learning tracks with branch performance visibility.",
    outcomes: ["Audit confidence", "Improved customer service", "Reduced compliance risk"]
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    highlight: "Plant-wide safety and SOP excellence",
    category: "enterprise",
    challenge: "Operational safety and process adherence vary across plants and shifts.",
    approach: "Standardized shift-based learning and certification monitoring.",
    outcomes: ["Improved safety adherence", "Consistent SOP execution", "Reduced downtime risk"]
  },
  {
    slug: "retail",
    name: "Retail",
    highlight: "Store execution at campaign speed",
    category: "field",
    challenge: "Store teams require continuous enablement amid frequent campaign changes.",
    approach: "Microlearning bursts and manager-led readiness checks.",
    outcomes: ["Faster campaign readiness", "Higher conversion behavior", "Improved store consistency"]
  },
  {
    slug: "ngos",
    name: "NGOs",
    highlight: "Mission-aligned learning at scale",
    category: "social",
    challenge: "Distributed teams need mission-aligned, measurable learning at scale.",
    approach: "Program-based academies with low-bandwidth access and regional analytics.",
    outcomes: ["Wider training reach", "Improved program delivery", "Stronger donor reporting evidence"]
  },
  {
    slug: "logistics",
    name: "Logistics",
    highlight: "Route-ready operational training",
    category: "field",
    challenge: "Operational precision depends on consistently trained frontline staff.",
    approach: "Role and route-specific operational learning with certification controls.",
    outcomes: ["Reduced operational errors", "Higher dispatch quality", "Improved SLA performance"]
  },
  {
    slug: "telecommunications",
    name: "Telecommunications",
    highlight: "Agile product and service readiness",
    category: "enterprise",
    challenge: "Rapid product and process changes require agile workforce capability updates.",
    approach: "Blended product enablement and field readiness programs.",
    outcomes: ["Faster product readiness", "Improved service consistency", "Higher agent productivity"]
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    highlight: "Protocol-driven clinical excellence",
    category: "regulated",
    challenge: "Clinical and operational teams need strict protocol adherence.",
    approach: "Protocol-aligned digital academies with evidence-based compliance tracking.",
    outcomes: ["Improved protocol adherence", "Lower training gaps", "Stronger quality assurance"]
  }
];

export const resources: Resource[] = [
  {
    title: "How Readiness Programs Improve Frontline Performance",
    type: "Blog",
    description: "A practical framework for structuring workforce readiness at enterprise scale.",
    href: "#",
    readTime: "8 min read",
    featured: true
  },
  {
    title: "FMCG Field Enablement Case Study",
    type: "Case Study",
    description: "How a regional distributor reduced onboarding time by 27%.",
    href: "#",
    readTime: "12 min read",
    featured: true
  },
  {
    title: "Webinar: Scaling Mobile Learning Across Africa",
    type: "Webinar",
    description: "Tactics for delivering measurable learning outcomes in distributed contexts.",
    href: "#",
    readTime: "45 min session"
  },
  {
    title: "Whitepaper: Building High-Performance Learning Ecosystems",
    type: "Whitepaper",
    description: "Executive guide to digital learning operating models.",
    href: "#",
    readTime: "24 pages"
  },
  {
    title: "Learning Hub: Manager Coaching Series",
    type: "Video",
    description: "Short practical video lessons for line manager capability building.",
    href: "#",
    duration: "4:12"
  },
  {
    title: "Compliance Playbooks for Regulated Industries",
    type: "Whitepaper",
    description: "How to design certification workflows that stand up to audit scrutiny.",
    href: "#",
    readTime: "18 pages"
  },
  {
    title: "YouTube Hub: Enterprise LMS Walkthrough",
    type: "Video",
    description: "A guided tour of platform capabilities for L&D and operations leaders.",
    href: "#",
    duration: "6:30"
  }
];

export type TimelineMilestone = {
  year: string;
  title: string;
  description: string;
};

export type ValuePillar = {
  title: string;
  description: string;
};

export const timelineMilestones: TimelineMilestone[] = [
  {
    year: "2018",
    title: "Enterprise academy foundations",
    description: "Launched enterprise digital academy programs for distributed teams across key African markets."
  },
  {
    year: "2020",
    title: "Regional scale expansion",
    description: "Expanded capability delivery across multiple African markets with mobile-first learning infrastructure."
  },
  {
    year: "2022",
    title: "Readiness frameworks",
    description: "Built measurable workforce readiness frameworks for high-growth organizations in FMCG, banking, and retail."
  },
  {
    year: "2024",
    title: "Enterprise field enablement",
    description: "Scaled compliance and field enablement programs for enterprise clients with executive reporting visibility."
  }
];

export const valuePillars: ValuePillar[] = [
  {
    title: "Africa-First Delivery",
    description: "Programs designed for regional scale, local context, and distributed workforce realities."
  },
  {
    title: "Measurable Outcomes",
    description: "Learning initiatives tied to readiness, compliance, and operational performance indicators."
  },
  {
    title: "Enterprise Governance",
    description: "Structured academies, role pathways, and reporting built for large, complex organizations."
  },
  {
    title: "Practical Enablement",
    description: "Mobile-first experiences that frontline and field teams can actually use every day."
  }
];

export const leadershipTeam = [
  {
    name: "Ada Nwoke",
    role: "Chief Executive Officer",
    initials: "AN",
    bio: "Leads Bicmas strategy for enterprise learning transformation across Africa."
  },
  {
    name: "Daniel Mensah",
    role: "Head of Learning Solutions",
    initials: "DM",
    bio: "Architects workforce readiness and field enablement programs for global enterprises."
  },
  {
    name: "Sarah Okafor",
    role: "Director, Client Success",
    initials: "SO",
    bio: "Partners with L&D and operations leaders to deliver measurable program outcomes."
  }
];

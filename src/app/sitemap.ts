import type { MetadataRoute } from "next";
import { industries, solutions } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: "https://bicmasinstitute.com", changeFrequency: "weekly", priority: 1 },
    { url: "https://bicmasinstitute.com/about", changeFrequency: "monthly", priority: 0.8 },
    { url: "https://bicmasinstitute.com/solutions", changeFrequency: "weekly", priority: 0.9 },
    { url: "https://bicmasinstitute.com/industries", changeFrequency: "weekly", priority: 0.9 },
    { url: "https://bicmasinstitute.com/resources", changeFrequency: "weekly", priority: 0.8 },
    { url: "https://bicmasinstitute.com/contact", changeFrequency: "monthly", priority: 0.9 }
  ];

  const solutionRoutes = solutions.map((solution) => ({
    url: `https://bicmasinstitute.com/solutions/${solution.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  const industryRoutes = industries.map((industry) => ({
    url: `https://bicmasinstitute.com/industries/${industry.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [
    ...staticRoutes,
    ...solutionRoutes,
    ...industryRoutes
  ];
}

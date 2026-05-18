import type { MetadataRoute } from "next";
import { site, services } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.domain}`;
  const now = new Date();
  const routes = [
    "/",
    "/services",
    "/about",
    "/contact",
    "/quote",
    ...services.map((s) => `/services/${s.slug}`),
  ];
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));
}

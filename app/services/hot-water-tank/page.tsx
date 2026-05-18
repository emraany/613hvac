import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { serviceBySlug } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

const service = serviceBySlug("hot-water-tank");

export const metadata: Metadata = buildMetadata({
  title: `${service.shortTitle} in Ottawa — Install & Replacement`,
  description: service.blurb,
  path: "/services/hot-water-tank",
});

export default function HotWaterTankPage() {
  return <ServicePage service={service} />;
}

import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { serviceBySlug } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

const service = serviceBySlug("furnace");

export const metadata: Metadata = buildMetadata({
  title: `${service.shortTitle} in Ottawa — Install, Repair & Diagnostics`,
  description: service.blurb,
  path: "/services/furnace",
});

export default function FurnacePage() {
  return <ServicePage service={service} />;
}

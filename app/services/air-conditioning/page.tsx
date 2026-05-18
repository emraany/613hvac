import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { serviceBySlug } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

const service = serviceBySlug("air-conditioning");

export const metadata: Metadata = buildMetadata({
  title: `${service.shortTitle} in Ottawa — AC Install & Repair`,
  description: service.blurb,
  path: "/services/air-conditioning",
});

export default function AirConditioningPage() {
  return <ServicePage service={service} />;
}

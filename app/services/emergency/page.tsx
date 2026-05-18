import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { serviceBySlug } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

const service = serviceBySlug("emergency");

export const metadata: Metadata = buildMetadata({
  title: "24/7 Emergency HVAC Service in Ottawa",
  description: service.blurb,
  path: "/services/emergency",
});

export default function EmergencyPage() {
  return <ServicePage service={service} />;
}

import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import SectionHeading from "@/components/SectionHeading";
import ServicesGrid from "@/components/ServicesGrid";
import CTABand from "@/components/CTABand";
import Certifications from "@/components/Certifications";
import FAQ from "@/components/FAQ";
import { generalFaqs } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Residential HVAC Services in Ottawa",
  description:
    "Furnace, air conditioning, hot water tank and 24/7 emergency HVAC service across Ottawa and surrounding areas. Licensed, insured, local.",
  path: "/services",
});

export default function ServicesIndexPage() {
  return (
    <>
      <Hero
        eyebrow="Our services"
        title={
          <>
            Heating, cooling &amp; hot water —
            <span className="block text-accent-300">we do it all.</span>
          </>
        }
        subtitle="Licensed gas, refrigeration and plumbing-side work for residential homes across Ottawa. One call, one crew."
        secondaryHref="/quote"
        secondaryLabel="Get a free quote"
      />
      <TrustBar />

      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Pick a service"
            title="Four core service lines."
            intro="Click through for details, common signs you need it, FAQs and pricing notes."
          />
          <div className="mt-10">
            <ServicesGrid />
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Beyond the basics"
            title="What else we handle."
            intro="If it heats your home, cools your home, or runs on a gas line — we probably do it. Some examples:"
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Heat pumps (cold-climate certified)",
              "Ductless mini-splits",
              "Smart thermostat installs (Nest, ecobee)",
              "Whole-home humidifiers",
              "HRV / ERV ventilation",
              "Indoor air quality / HEPA filtration",
              "Gas line installs and repairs (TSSA G2)",
              "Tankless water heaters",
              "Maintenance plans for landlords",
            ].map((x) => (
              <li key={x} className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-medium text-ink">
                {x}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <Certifications />
        </div>
      </section>

      <CTABand />

      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Good to know" title="Common questions." />
          <div className="mt-8">
            <FAQ items={generalFaqs} />
          </div>
          <p className="mt-8 text-sm text-slate-600">
            Have a question we didn&apos;t answer?{" "}
            <Link href="/contact" className="font-bold text-brand underline">
              Get in touch
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import SectionHeading from "@/components/SectionHeading";
import QuoteForm from "@/components/QuoteForm";
import Offers from "@/components/Offers";
import Testimonials from "@/components/Testimonials";
import { CheckIcon, PhoneIcon } from "@/components/Icon";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Free HVAC Quote in Ottawa — Furnace, AC & Hot Water",
  description:
    "Request a free, no-pressure HVAC quote from a licensed local Ottawa technician. Furnace, AC, hot water tank, emergency service.",
  path: "/quote",
});

const promises = [
  "Free in-home quotes",
  "Flat-rate pricing in writing",
  "No high-pressure sales",
  "Licensed, insured technicians",
  "Workmanship warranty",
  "Same-day on most calls",
];

export default function QuotePage() {
  return (
    <>
      <Hero
        eyebrow="Free quote"
        title={
          <>
            Get a free, no-pressure HVAC quote —
            <span className="block text-accent-300">straight numbers, in writing.</span>
          </>
        }
        subtitle="Fill in the form and we'll get back to you fast. For emergencies, please call us instead."
        primaryLabel={`Or call ${site.phone.display}`}
      />
      <TrustBar />

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[1.05fr,1fr]">
          <div>
            <SectionHeading
              eyebrow="Our promise"
              title="No surprises. No pressure. Just straight answers."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {promises.map((p) => (
                <li key={p} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm font-semibold text-ink">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-emergency/20 bg-emergency/5 p-5">
              <p className="font-display text-base font-bold text-emergency">
                Got a true emergency?
              </p>
              <p className="mt-1 text-sm text-slate-700">
                No heat, gas smell, CO alarm, or active leak — don&apos;t fill out a form. Call us right now.
              </p>
              <a href={`tel:${site.phone.tel}`} className="btn-emergency mt-4 w-full sm:w-auto">
                <PhoneIcon className="h-5 w-5" />
                Call {site.phone.display}
              </a>
            </div>
          </div>
          <div>
            <QuoteForm />
          </div>
        </div>
      </section>

      <section className="section-tight bg-surface">
        <div className="container-page">
          <Offers />
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="What customers say"
            title="Honest reviews from real Ottawa homes."
          />
          <div className="mt-10">
            <Testimonials />
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import SectionHeading from "@/components/SectionHeading";
import QuoteForm from "@/components/QuoteForm";
import { PhoneIcon, ChatIcon, MapPinIcon } from "@/components/Icon";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact — Call, Text or Email 613 HVAC",
  description:
    "Get in touch with Ottawa's trusted HVAC crew. Call, text, or send a message — 24/7 emergency line available.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Get in touch"
        title={
          <>
            Call, text, or send a message —
            <span className="block text-accent-300">we&apos;ll get back fast.</span>
          </>
        }
        subtitle="A real person answers our line. For true emergencies — no heat, gas smell, CO alarm, active leak — please call."
      />
      <TrustBar />

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr,1.1fr]">
          <div>
            <SectionHeading eyebrow="Three ways to reach us" title="Pick what works for you." />
            <div className="mt-8 space-y-4">
              <a
                href={`tel:${site.phone.tel}`}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-white">
                  <PhoneIcon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Call us</p>
                  <p className="font-display text-2xl font-extrabold text-ink">{site.phone.display}</p>
                  <p className="text-sm text-slate-600">24/7 emergency line · {site.hours.summary}</p>
                </div>
              </a>
              <a
                href={`sms:${site.sms.tel}`}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white">
                  <ChatIcon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Text us</p>
                  <p className="font-display text-2xl font-extrabold text-ink">{site.sms.display}</p>
                  <p className="text-sm text-slate-600">Quick questions, photos of the unit, easy scheduling.</p>
                </div>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-white">
                  <MapPinIcon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Email</p>
                  <p className="font-display text-xl font-extrabold text-ink">{site.email}</p>
                  <p className="text-sm text-slate-600">Best for quotes and non-urgent questions.</p>
                </div>
              </a>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-surface p-6">
              <h3 className="font-display text-lg font-bold text-ink">Hours</h3>
              <ul className="mt-3 space-y-1 text-sm text-slate-700">
                {site.hours.weekly.map((h) => (
                  <li key={h.day}>
                    <span className="font-semibold text-ink">{h.day}</span> · {h.hours}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm font-semibold text-emergency">Emergency line answered 24/7.</p>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <div
                className="relative h-56 bg-gradient-to-br from-brand-50 via-white to-accent-50"
                aria-label="Service area map placeholder"
              >
                <div
                  className="absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(11,61,145,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(11,61,145,0.6) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                  aria-hidden
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <MapPinIcon className="h-8 w-8 text-accent" />
                  <p className="mt-2 font-display text-lg font-extrabold text-ink">
                    Serving Ottawa &amp; surrounding areas
                  </p>
                  <p className="text-sm text-slate-600">Embed a real map here when ready.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}

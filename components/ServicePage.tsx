import Link from "next/link";
import Hero from "./Hero";
import TrustBar from "./TrustBar";
import SectionHeading from "./SectionHeading";
import PhotoSlot from "./PhotoSlot";
import CTABand from "./CTABand";
import FAQ from "./FAQ";
import QuoteForm from "./QuoteForm";
import Icon from "./Icon";
import { CheckIcon } from "./Icon";
import { services, type Service } from "@/lib/site";

export default function ServicePage({ service }: { service: Service }) {
  const others = services.filter((s) => s.slug !== service.slug);
  const isEmergency = service.accent === "emergency";

  return (
    <>
      <Hero
        eyebrow={isEmergency ? "24/7 Response" : "Residential service"}
        title={
          <>
            <Icon
              name={service.icon}
              className="mb-4 inline-block h-12 w-12 text-accent-300"
            />
            <span className="block">{service.shortTitle}</span>
            <span className="block text-accent-300">in Ottawa.</span>
          </>
        }
        subtitle={service.blurb}
        bullets={service.bullets.slice(0, 4)}
        variant={isEmergency ? "emergency" : "service"}
        primaryLabel={isEmergency ? "Call 24/7 emergency line" : undefined}
      />

      <TrustBar />

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[1.1fr,1fr]">
          <div>
            <SectionHeading eyebrow="What we do" title={service.title} intro={service.intro} />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm font-medium text-ink">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <PhotoSlot label={`${service.shortTitle} — on the job`} ratio="square" />
            <div className="grid grid-cols-2 gap-4">
              <PhotoSlot label="Before" ratio="square" />
              <PhotoSlot label="After" ratio="square" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-page">
          <SectionHeading eyebrow="Watch for these" title="Signs you should call us." />
          <ul className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {service.signs.map((s) => (
              <li
                key={s}
                className="rounded-xl border border-slate-200 bg-white p-5 text-sm font-medium text-ink"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="How it works"
            title="Three steps. No surprises."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {service.process.map((step, i) => (
              <div key={step.title} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
                <span
                  className={`absolute -top-4 left-6 inline-flex h-9 w-9 items-center justify-center rounded-full font-display text-lg font-extrabold text-white ${
                    isEmergency ? "bg-emergency" : "bg-brand"
                  }`}
                >
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand variant={isEmergency ? "emergency" : "brand"} />

      <section className="section bg-surface">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr,1fr]">
          <div>
            <SectionHeading
              eyebrow="Common questions"
              title={`${service.shortTitle} FAQs`}
            />
            <div className="mt-8">
              <FAQ items={service.faqs} />
            </div>
          </div>
          <div id="quote">
            <QuoteForm />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Other services" title="Need something else? We do it all." />
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/services/${o.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                <div
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${
                    o.accent === "emergency" ? "bg-emergency/10 text-emergency" : "bg-brand/10 text-brand"
                  }`}
                >
                  <Icon name={o.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-3 text-base font-bold text-ink">{o.shortTitle}</h3>
                <p className="mt-1 text-sm text-slate-600">{o.blurb}</p>
                <span className={`mt-3 inline-flex text-sm font-bold ${o.accent === "emergency" ? "text-emergency" : "text-brand"}`}>
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

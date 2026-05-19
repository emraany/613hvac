import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import SectionHeading from "@/components/SectionHeading";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import Offers from "@/components/Offers";
import AreasServed from "@/components/AreasServed";
import Testimonials from "@/components/Testimonials";
import Certifications from "@/components/Certifications";
import CTABand from "@/components/CTABand";
import QuoteForm from "@/components/QuoteForm";
import PhotoSlot from "@/components/PhotoSlot";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow={`Ottawa · ${site.address.region}`}
        title={
          <>
            Ottawa&apos;s trusted HVAC crew —
            <span className="block text-accent-300">heating, cooling &amp; hot water done right.</span>
          </>
        }
        subtitle="Same-day service. 24/7 emergency response. Honest, upfront pricing from licensed local technicians."
        bullets={["Furnace install & repair", "AC install & service", "Hot water tanks", "24/7 emergency"]}
      />

      <TrustBar />

      <section className="section bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we do"
            title="Heating, cooling &amp; hot water — all under one roof."
            intro="One crew for everything that keeps your house warm in January and cool in July. Residential specialists across Ottawa and surrounding areas."
          />
          <div className="mt-10">
            <ServicesGrid />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why homeowners pick us"
            title="No call centers. No surprise charges. Just honest HVAC work."
          />
          <div className="mt-10">
            <WhyChooseUs />
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container-page">
          <Offers />
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Service area"
            title="Local to Ottawa — and quick to your door."
            intro="We&apos;re based right here in the 613. If you&apos;re in the city or one of the surrounding communities, we&apos;ve got you covered."
          />
          <div className="mt-8">
            <AreasServed />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Real jobs, real crews"
            title="Photos from the truck."
            intro="We&apos;ll be swapping in real photos of our installs and service calls soon. For now, here&apos;s where they&apos;ll live."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <PhotoSlot label="Furnace install" />
            <PhotoSlot label="AC condenser swap" />
            <PhotoSlot label="Hot water tank replacement" />
            <PhotoSlot label="Emergency no-heat call" />
            <PhotoSlot label="Service truck on site" />
            <PhotoSlot label="Tech at work" />
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="What customers say"
            title="5-star service. Across the 613."
            intro="A handful of recent reviews from homeowners we&apos;ve worked with."
          />
          <div className="mt-10">
            <Testimonials />
          </div>
          <p className="mt-6 text-xs text-slate-500">
            * Placeholder testimonials — swap in real customer reviews in <code className="rounded bg-slate-100 px-1 py-0.5">lib/site.ts</code>.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <Certifications />
        </div>
      </section>

      <CTABand />

      <section className="section bg-surface" id="quote">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr,1fr]">
          <div>
            <SectionHeading
              eyebrow="Get a free quote"
              title="Tell us what&apos;s going on. We&apos;ll get back to you fast."
              intro="Quotes are free, with no pressure. For true emergencies — no heat, gas smell, CO alarm, active leak — please call us instead."
            />
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-display text-lg font-bold text-ink">When to call instead</h3>
              <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-slate-700">
                <li>No heat with the house dropping below 15°C</li>
                <li>Carbon monoxide alarm sounding</li>
                <li>Any smell of natural gas</li>
                <li>Water actively leaking from a tank or unit</li>
              </ul>
              <a href={`tel:${site.phone.tel}`} className="btn-emergency mt-5 w-full sm:w-auto">
                Call now — {site.phone.display}
              </a>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>

    </>
  );
}

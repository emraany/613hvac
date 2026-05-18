import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import SectionHeading from "@/components/SectionHeading";
import PhotoSlot from "@/components/PhotoSlot";
import Certifications from "@/components/Certifications";
import AreasServed from "@/components/AreasServed";
import CTABand from "@/components/CTABand";
import WhyChooseUs from "@/components/WhyChooseUs";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "About — Local Ottawa HVAC Technicians",
  description:
    "We're a local Ottawa HVAC crew that shows up fast, talks straight, and stands behind our work. Licensed gas, refrigeration and HVAC.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About us"
        title={
          <>
            A local Ottawa HVAC crew —
            <span className="block text-accent-300">no call centers, no runaround.</span>
          </>
        }
        subtitle="We started this company to do HVAC the way homeowners actually want it: show up fast, fix it right, charge a fair price."
        primaryLabel={`Call ${site.phone.display}`}
      />
      <TrustBar />

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[1.1fr,1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="Built by techs, run by techs."
            />
            <div className="prose prose-slate mt-6 max-w-none text-slate-700">
              <p>
                {site.name} was founded right here in Ottawa with one idea: HVAC service shouldn&apos;t feel like a sales pitch. Too many homeowners get talked into replacements they don&apos;t need, charged for things they didn&apos;t ask for, or left waiting days for a call back.
              </p>
              <p>
                Our crew is made up of <strong>licensed gas technicians, certified refrigeration mechanics and HVAC installers</strong> who&apos;ve worked on Ottawa homes for years — older brick homes in the Glebe, new builds in Barrhaven, country properties out near Manotick. We&apos;ve seen it all and we&apos;ll talk you through it in plain English.
              </p>
              <p>
                When you call us, you get a real person. When we quote you, the number we say is the number you pay. When we leave, your space is cleaner than we found it. Simple as that.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <PhotoSlot label="Our service truck" ratio="square" />
            <PhotoSlot label="Crew on site" ratio="square" />
            <PhotoSlot label="Furnace install" ratio="square" />
            <PhotoSlot label="Happy customer" ratio="square" />
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-page">
          <SectionHeading eyebrow="What you can expect" title="The way we work." />
          <div className="mt-10">
            <WhyChooseUs />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <Certifications />
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Service area"
            title="The 613 and beyond."
            intro="Ottawa, Gatineau and every community in between."
          />
          <div className="mt-8">
            <AreasServed />
          </div>
        </div>
      </section>

      <CTABand
        title="Want a crew that actually shows up?"
        subtitle="Give us a call or request a free quote — we&rsquo;ll take it from there."
      />
    </>
  );
}

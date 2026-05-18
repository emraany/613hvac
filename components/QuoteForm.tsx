"use client";

import { useState } from "react";
import { site, services } from "@/lib/site";

type Props = { compact?: boolean };

export default function QuoteForm({ compact = false }: Props) {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const email = String(data.get("email") || "");
    const address = String(data.get("address") || "");
    const service = String(data.get("service") || "");
    const urgency = String(data.get("urgency") || "");
    const message = String(data.get("message") || "");

    const subject = `Quote request — ${service || "General"} — ${name}`;
    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Address: ${address}`,
      `Service: ${service}`,
      `Urgency: ${urgency}`,
      "",
      "Details:",
      message,
    ].join("\n");

    const href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8 ${
        compact ? "" : ""
      }`}
      aria-labelledby="quote-form-heading"
    >
      <h3 id="quote-form-heading" className="font-display text-2xl font-extrabold text-ink">
        Request a free quote
      </h3>
      <p className="mt-1 text-sm text-slate-600">
        Tell us what&apos;s going on and we&apos;ll get back to you fast. For true emergencies, call{" "}
        <a href={`tel:${site.phone.tel}`} className="font-bold text-brand underline">
          {site.phone.display}
        </a>
        .
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Your name" name="name" required autoComplete="name" />
        <Field label="Phone" name="phone" type="tel" required autoComplete="tel" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <Field label="Address" name="address" autoComplete="street-address" placeholder="Street, City" />

        <div className="sm:col-span-1">
          <label htmlFor="service" className="mb-1 block text-sm font-semibold text-ink">
            Service needed
          </label>
          <select
            id="service"
            name="service"
            required
            className="block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-base text-ink shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
            defaultValue=""
          >
            <option value="" disabled>Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.shortTitle}>
                {s.shortTitle}
              </option>
            ))}
            <option value="Other / Not sure">Other / Not sure</option>
          </select>
        </div>

        <div className="sm:col-span-1">
          <label className="mb-1 block text-sm font-semibold text-ink">Urgency</label>
          <div className="flex flex-wrap gap-2">
            {["Emergency", "Within 24h", "This week", "Just a quote"].map((u, i) => (
              <label
                key={u}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-ink has-[:checked]:border-brand has-[:checked]:bg-brand has-[:checked]:text-white"
              >
                <input
                  type="radio"
                  name="urgency"
                  value={u}
                  defaultChecked={i === 2}
                  className="sr-only"
                />
                {u}
              </label>
            ))}
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1 block text-sm font-semibold text-ink">
            What&apos;s going on?
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="e.g. Furnace won't stay on, makes a clicking sound. House is at 16°C."
            className="block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-base text-ink shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn-primary">
          Send my request
        </button>
        <p className="text-xs text-slate-500">
          By submitting, you agree to be contacted about your request. No spam, ever.
        </p>
      </div>

      {submitted && (
        <p className="mt-4 rounded-lg bg-brand/5 px-3 py-2 text-sm text-brand">
          Opening your email app… if nothing happens, email us directly at{" "}
          <a href={`mailto:${site.email}`} className="font-bold underline">
            {site.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-semibold text-ink">
        {label}
        {required && <span className="text-emergency" aria-hidden> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-base text-ink shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
      />
    </div>
  );
}

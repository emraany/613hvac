import Link from "next/link";
import { PhoneIcon, BoltIcon, CheckIcon } from "./Icon";
import { site } from "@/lib/site";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle: string;
  bullets?: string[];
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  variant?: "home" | "service" | "emergency";
};

export default function Hero({
  eyebrow,
  title,
  subtitle,
  bullets,
  primaryHref,
  primaryLabel,
  secondaryHref = "/quote",
  secondaryLabel = "Get a Free Quote",
  variant = "home",
}: Props) {
  const isEmergency = variant === "emergency";
  return (
    <section
      className={`relative overflow-hidden ${
        isEmergency
          ? "bg-gradient-to-br from-emergency-dark via-emergency to-brand-900"
          : "bg-gradient-to-br from-brand-900 via-brand-800 to-brand"
      } text-white`}
    >
      {/* decorative grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden
      />
      {/* accent glow */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/30 blur-3xl" aria-hidden />

      <div className="container-page relative grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[1.1fr,0.9fr] lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-emergency/95 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-white shadow-sm">
            <BoltIcon className="h-3.5 w-3.5" /> 24/7 Emergency HVAC
          </span>
          {eyebrow && (
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent-300">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-4 font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/85 sm:text-xl">{subtitle}</p>

          {bullets && (
            <ul className="mt-6 grid max-w-lg gap-2 sm:grid-cols-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm font-medium text-white/90">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent-300" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={primaryHref ?? `tel:${site.phone.tel}`}
              className="btn-primary text-base"
            >
              <PhoneIcon className="h-5 w-5" />
              {primaryLabel ?? `Call ${site.phone.display}`}
            </a>
            <Link href={secondaryHref} className="btn-outline text-base">
              {secondaryLabel}
            </Link>
          </div>

          <p className="mt-5 text-xs uppercase tracking-widest text-white/60">
            {site.hours.summary} · {site.address.display}
          </p>
        </div>

        {/* Visual / trust card */}
        <div className="relative">
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-xl backdrop-blur-sm sm:p-8">
            <p className="text-sm font-bold uppercase tracking-widest text-accent-300">Why Ottawa calls us first</p>
            <ul className="mt-4 space-y-3">
              {[
                "Same-day service on most calls",
                "Licensed gas technicians (TSSA G2)",
                "Upfront flat-rate pricing — no surprises",
                "Workmanship warranty in writing",
                "Local crew, not a national chain",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3 text-white/90">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm sm:text-base">{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 grid grid-cols-3 divide-x divide-white/10 rounded-xl bg-black/20 py-4 text-center">
              <div>
                <p className="font-display text-2xl font-extrabold text-white">24/7</p>
                <p className="text-[11px] uppercase tracking-widest text-white/60">Emergency</p>
              </div>
              <div>
                <p className="font-display text-2xl font-extrabold text-white">5★</p>
                <p className="text-[11px] uppercase tracking-widest text-white/60">Local Reviews</p>
              </div>
              <div>
                <p className="font-display text-2xl font-extrabold text-white">$0</p>
                <p className="text-[11px] uppercase tracking-widest text-white/60">Quotes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

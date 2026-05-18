import { site } from "@/lib/site";
import { ShieldIcon } from "./Icon";

export default function Certifications() {
  return (
    <div className="rounded-2xl bg-ink p-8 text-white sm:p-10">
      <div className="grid items-center gap-8 lg:grid-cols-[1fr,2fr]">
        <div>
          <p className="eyebrow text-accent-300">Licensed &amp; insured</p>
          <h3 className="mt-3 font-display text-2xl font-extrabold sm:text-3xl">
            Real credentials. Real accountability.
          </h3>
          <p className="mt-3 text-sm text-white/80">
            Gas, refrigeration and electrical work in your home should never be a gamble. Every job we do is performed by certified, insured technicians.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {site.licenses.map((l) => (
            <div
              key={l}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
            >
              <ShieldIcon className="h-5 w-5 shrink-0 text-accent-300" />
              <span className="text-sm font-semibold">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

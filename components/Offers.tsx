import Link from "next/link";
import { offers } from "@/lib/site";
import { TagIcon } from "./Icon";

export default function Offers() {
  return (
    <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-accent-600 via-accent to-accent-400 p-8 text-white shadow-cta sm:p-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/80">Limited-time offers</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
            Save on heating, cooling &amp; hot water — this season.
          </h2>
        </div>
        <Link href="/quote" className="self-start rounded-lg bg-ink px-5 py-3 text-sm font-bold text-white hover:bg-slate-800 lg:self-auto">
          Claim your offer →
        </Link>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {offers.map((o) => (
          <div key={o.title} className="rounded-xl bg-white/15 p-5 backdrop-blur-sm ring-1 ring-white/20">
            <div className="flex items-center gap-2">
              <TagIcon className="h-5 w-5 text-white" />
              <p className="font-display text-lg font-bold">{o.title}</p>
            </div>
            <p className="mt-2 text-sm text-white/90">{o.body}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs text-white/70">
        *Offers cannot be combined. Mention this page when you call. Some conditions apply.
      </p>
    </div>
  );
}

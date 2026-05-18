import { areasServed } from "@/lib/site";
import { MapPinIcon } from "./Icon";

export default function AreasServed() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
      <div className="flex flex-wrap gap-2">
        {areasServed.map((a) => (
          <span
            key={a}
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-surface px-3 py-1.5 text-sm font-medium text-ink"
          >
            <MapPinIcon className="h-3.5 w-3.5 text-accent" />
            {a.split(" (")[0]}
          </span>
        ))}
      </div>
      <p className="mt-5 text-sm text-slate-600">
        Don&apos;t see your neighbourhood? Give us a call — if you&apos;re in the Ottawa region, we&apos;ll usually still come out.
      </p>
    </div>
  );
}

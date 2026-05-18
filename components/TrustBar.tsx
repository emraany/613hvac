import { CheckIcon } from "./Icon";
import { trustBadges } from "@/lib/site";

export default function TrustBar() {
  return (
    <div className="border-y border-slate-200 bg-surface">
      <div className="container-page flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-4 text-center">
        {trustBadges.map((t) => (
          <div key={t} className="flex items-center gap-2 text-sm font-semibold text-ink">
            <CheckIcon className="h-4 w-4 text-accent" />
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

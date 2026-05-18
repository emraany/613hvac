import Icon, { type IconName } from "./Icon";
import { whyChooseUs } from "@/lib/site";

export default function WhyChooseUs() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {whyChooseUs.map((w) => (
        <div key={w.title} className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <Icon name={w.icon as IconName} className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-lg font-bold text-ink">{w.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{w.body}</p>
        </div>
      ))}
    </div>
  );
}

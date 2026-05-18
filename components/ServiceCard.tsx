import Link from "next/link";
import Icon, { type IconName } from "./Icon";

type Props = {
  href: string;
  title: string;
  blurb: string;
  icon: IconName;
  accent?: "brand" | "emergency";
};

export default function ServiceCard({ href, title, blurb, icon, accent = "brand" }: Props) {
  const isEmergency = accent === "emergency";
  return (
    <Link
      href={href}
      className={`group relative flex h-full flex-col rounded-2xl border bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lg sm:p-7 ${
        isEmergency ? "border-emergency/30 ring-1 ring-emergency/20" : "border-slate-200"
      }`}
    >
      {isEmergency && (
        <span className="absolute right-4 top-4 rounded-full bg-emergency px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
          24/7
        </span>
      )}
      <div
        className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${
          isEmergency ? "bg-emergency/10 text-emergency" : "bg-brand/10 text-brand"
        }`}
      >
        <Icon name={icon} className="h-7 w-7" />
      </div>
      <h3 className="text-xl font-bold leading-tight text-ink">{title}</h3>
      <p className="mt-2 flex-1 text-sm text-slate-600">{blurb}</p>
      <span
        className={`mt-5 inline-flex items-center gap-1 text-sm font-bold ${
          isEmergency ? "text-emergency" : "text-brand"
        }`}
      >
        Learn more
        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
      </span>
    </Link>
  );
}

import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneIcon } from "./Icon";

type Props = {
  title?: string;
  subtitle?: string;
  variant?: "brand" | "emergency";
};

export default function CTABand({
  title = "Furnace out? AC down? We can be there today.",
  subtitle = "Call now or request a free quote — a real person, not a call center.",
  variant = "brand",
}: Props) {
  const bg =
    variant === "emergency"
      ? "bg-gradient-to-r from-emergency-dark to-emergency"
      : "bg-gradient-to-r from-brand-900 via-brand-800 to-brand";
  return (
    <section className={`${bg} text-white`}>
      <div className="container-page flex flex-col items-start gap-6 py-12 sm:py-14 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-white/85">{subtitle}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={`tel:${site.phone.tel}`} className="btn-primary">
            <PhoneIcon className="h-5 w-5" />
            Call {site.phone.display}
          </a>
          <Link href="/quote" className="btn-outline">
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}

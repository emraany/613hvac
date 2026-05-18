import ServiceCard from "./ServiceCard";
import { services } from "@/lib/site";

export default function ServicesGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((s) => (
        <ServiceCard
          key={s.slug}
          href={`/services/${s.slug}`}
          title={s.shortTitle}
          blurb={s.blurb}
          icon={s.icon}
          accent={s.accent}
        />
      ))}
    </div>
  );
}

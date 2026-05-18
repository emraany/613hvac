import { testimonials } from "@/lib/site";
import { StarIcon } from "./Icon";

export default function Testimonials() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {testimonials.map((t) => (
        <figure
          key={t.name}
          className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-card"
        >
          <div className="flex gap-1 text-accent">
            {Array.from({ length: t.rating }).map((_, i) => (
              <StarIcon key={i} className="h-4 w-4" />
            ))}
          </div>
          <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink">
            &ldquo;{t.body}&rdquo;
          </blockquote>
          <figcaption className="mt-5 border-t border-slate-100 pt-4 text-sm">
            <span className="font-bold text-ink">{t.name}</span>
            <span className="text-slate-500"> · {t.location}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

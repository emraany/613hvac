type Item = { q: string; a: string };

export default function FAQ({ items }: { items: Item[] }) {
  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {items.map((it) => (
        <details key={it.q} className="group p-5 sm:p-6">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-bold text-ink sm:text-lg">
            <span>{it.q}</span>
            <span
              aria-hidden
              className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-slate-600">{it.a}</p>
        </details>
      ))}
    </div>
  );
}

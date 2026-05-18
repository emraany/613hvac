type Props = {
  label?: string;
  ratio?: "square" | "video" | "portrait" | "wide";
  className?: string;
};

const ratios: Record<NonNullable<Props["ratio"]>, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/7]",
};

export default function PhotoSlot({ label = "Real job photo coming soon", ratio = "video", className = "" }: Props) {
  return (
    <div
      className={`relative ${ratios[ratio]} w-full overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-brand-50 via-white to-accent-50 ${className}`}
      aria-label={label}
    >
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #0B3D91 0 2px, transparent 2px 12px)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
        <span className="rounded-full bg-white/80 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-brand">
          Photo placeholder
        </span>
        <span className="text-xs text-slate-500">{label}</span>
      </div>
    </div>
  );
}

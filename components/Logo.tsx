type Props = { variant?: "dark" | "light"; className?: string };

export default function Logo({ variant = "dark", className = "" }: Props) {
  const fg = variant === "light" ? "text-white" : "text-brand";
  const accent = variant === "light" ? "text-accent-300" : "text-accent";
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span
        aria-hidden
        className={`inline-flex h-9 w-9 items-center justify-center rounded-md bg-brand text-white font-display font-black text-sm shadow-sm`}
      >
        613
      </span>
      <span className="flex flex-col leading-tight">
        <span className={`font-display text-lg font-extrabold tracking-tight ${fg}`}>
          613 HVAC
        </span>
        <span className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${accent}`}>
          Ottawa Heating &amp; Cooling
        </span>
      </span>
    </div>
  );
}

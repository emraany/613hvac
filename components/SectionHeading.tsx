type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
}: Props) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignCls}`}>
      {eyebrow && <p className={`eyebrow ${light ? "text-accent-300" : ""}`}>{eyebrow}</p>}
      <h2
        className={`mt-3 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[44px] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-lg ${light ? "text-white/80" : "text-slate-600"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}

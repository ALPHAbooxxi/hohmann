import { PawPrint } from "lucide-react";
import { ReactNode } from "react";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  action?: ReactNode;
  className?: string;
};

export function SectionHeading({
  title,
  subtitle,
  align = "left",
  action,
  className = ""
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start";

  return (
    <div className={`mb-8 flex flex-col gap-3 ${alignClass} ${className}`}>
      <div className="inline-flex items-center gap-2 rounded-full border border-brand-clay/70 bg-brand-sand px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-brand-bark">
        <PawPrint size={14} aria-hidden="true" />
        Zwinger aus dem Emsland
      </div>
      <h2 className="max-w-3xl text-balance text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-3xl text-lg leading-relaxed text-brand-ink/75">{subtitle}</p>
      ) : null}
      {action}
    </div>
  );
}

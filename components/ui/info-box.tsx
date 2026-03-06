import { ReactNode } from "react";

type InfoBoxProps = {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
};

export function InfoBox({ title, icon, children }: InfoBoxProps) {
  return (
    <article className="rounded-3xl border border-brand-clay/60 bg-white/95 p-6 shadow-soft">
      <header className="mb-3 flex items-center gap-2 text-brand-barkDark">
        {icon}
        <h3 className="text-lg font-bold">{title}</h3>
      </header>
      <div className="space-y-4 text-sm leading-relaxed text-brand-ink/85">{children}</div>
    </article>
  );
}

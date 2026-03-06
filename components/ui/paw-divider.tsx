import { PawPrint } from "lucide-react";

export function PawDivider() {
  return (
    <div className="my-8 flex items-center gap-3 text-brand-bark/55" aria-hidden="true">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-clay to-transparent" />
      <PawPrint size={16} />
      <PawPrint size={16} className="-translate-y-1" />
      <PawPrint size={16} className="-translate-y-2" />
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-clay to-transparent" />
    </div>
  );
}

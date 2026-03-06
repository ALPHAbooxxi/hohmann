import Link from "next/link";
import { Heart } from "lucide-react";
import { footerItems } from "@/lib/site-data";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-brand-clay/60 bg-brand-sand/80">
      <div className="mx-auto flex w-full max-w-content flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center gap-2">
            {footerItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex rounded-full border border-brand-clay/60 px-4 py-2 text-sm font-semibold text-brand-ink/80 transition hover:border-brand-bark/50 hover:text-brand-barkDark"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-wrap items-center gap-x-1.5 text-sm text-brand-ink/65">
          <span>Copyright © {currentYear} Eveline Hohmann</span>
          <span className="opacity-40">·</span>
          <span className="flex items-center gap-1">
            erstellt mit <Heart size={14} className="fill-brand-bark text-brand-bark inline-block" /> von{" "}
            <a
              className="font-medium underline decoration-brand-clay/40 underline-offset-4 transition hover:text-brand-barkDark hover:decoration-brand-barkDark"
              href="https://www.media-wilkens.de"
              target="_blank"
              rel="noreferrer"
            >
              Media Wilkens
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

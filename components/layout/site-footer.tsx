import Link from "next/link";

import { footerItems } from "@/lib/site-data";

export function SiteFooter() {
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
        <p className="text-sm text-brand-ink/65">
          Copyright © 2019 Eveline Hohmann · Relaunch 2026 · Ursprüngliche Seite erstellt von{" "}
          <a className="underline underline-offset-4" href="https://www.autorenservices.de/" target="_blank" rel="noreferrer">
            AutorenServices.de
          </a>
        </p>
      </div>
    </footer>
  );
}

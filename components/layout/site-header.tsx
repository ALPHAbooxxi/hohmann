"use client";

import Link from "next/link";
import { Menu, PawPrint, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navItems, siteMeta } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-brand-clay/60 bg-brand-sand/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-content items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-bark text-white">
            <PawPrint size={18} aria-hidden="true" />
          </span>
          <span>
            <span className="block text-sm font-semibold tracking-[0.12em] text-brand-bark uppercase">Hovawart-Zucht</span>
            <span className="block text-base font-black text-brand-ink">{siteMeta.name}</span>
          </span>
        </Link>

        <button
          type="button"
          className="inline-flex rounded-xl border border-brand-clay p-2 text-brand-bark lg:hidden"
          onClick={() => setOpen((state) => !state)}
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? "Navigation schließen" : "Navigation öffnen"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav id="site-nav" className={`${open ? "block" : "hidden"} absolute inset-x-0 top-full border-b border-brand-clay bg-brand-sand p-4 lg:static lg:block lg:border-0 lg:bg-transparent lg:p-0`}>
          <ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-1">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`inline-flex w-full items-center rounded-full px-4 py-2 text-sm font-semibold transition lg:w-auto ${
                      active
                        ? "bg-brand-bark text-white"
                        : "text-brand-ink/80 hover:bg-brand-clay/40 hover:text-brand-barkDark"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

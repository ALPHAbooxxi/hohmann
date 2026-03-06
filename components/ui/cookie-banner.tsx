"use client";

import Link from "next/link";
import { PawPrint } from "lucide-react";
import { useEffect, useState } from "react";

import { cookieNotice } from "@/lib/site-data";

const STORAGE_KEY = "emsland-cookie-ok";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = window.localStorage.getItem(STORAGE_KEY);
    if (!accepted) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-4xl rounded-2xl border border-brand-clay bg-white/95 p-4 shadow-card backdrop-blur sm:flex sm:items-center sm:gap-4 sm:p-5">
      <div className="flex items-start gap-3 text-sm leading-relaxed text-brand-ink/85">
        <PawPrint className="mt-0.5 shrink-0 text-brand-bark" size={18} aria-hidden="true" />
        <p>
          {cookieNotice}{" "}
          <Link href="/datenschutz" className="font-semibold text-brand-bark underline underline-offset-4">
            Zur Datenschutzerklärung
          </Link>
          .
        </p>
      </div>
      <button
        type="button"
        className="mt-4 inline-flex rounded-full bg-brand-bark px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-barkDark sm:mt-0"
        onClick={() => {
          window.localStorage.setItem(STORAGE_KEY, "1");
          setVisible(false);
        }}
      >
        Akzeptieren
      </button>
    </div>
  );
}

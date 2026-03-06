import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { contact } from "@/lib/site-data";

export function ContactStrip() {
  return (
    <aside className="hidden sm:block border-b border-brand-clay/60 bg-white/80">
      <div className="mx-auto grid w-full max-w-content gap-3 px-4 py-3 text-sm sm:grid-cols-3 sm:px-6 lg:px-8">
        <Link href={contact.phoneHref} className="inline-flex items-center gap-2 text-brand-ink/80 transition hover:text-brand-barkDark">
          <Phone size={16} aria-hidden="true" className="text-brand-bark" />
          <span>{contact.phone}</span>
        </Link>
        <p className="inline-flex items-center gap-2 text-brand-ink/80">
          <MapPin size={16} aria-hidden="true" className="text-brand-bark" />
          <span>{contact.address}</span>
        </p>
        <Link href={contact.mailHref} className="inline-flex items-center gap-2 text-brand-ink/80 transition hover:text-brand-barkDark">
          <Mail size={16} aria-hidden="true" className="text-brand-bark" />
          <span>{contact.mail}</span>
        </Link>
      </div>
    </aside>
  );
}

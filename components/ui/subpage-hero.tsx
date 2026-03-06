import Image from "next/image";

import { siteMeta } from "@/lib/site-data";

type SubpageHeroProps = {
  title: string;
  text: string;
  image: string;
};

export function SubpageHero({ title, text, image }: SubpageHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-brand-clay/60 shadow-soft">
      <Image src={image} alt={title} width={1500} height={760} className="h-72 w-full object-cover sm:h-80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#2a2320]/75 via-[#2a2320]/35 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-7 text-white md:p-10">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/80">{siteMeta.name}</p>
        <h1 className="text-balance text-4xl font-black md:text-5xl">{title}</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/90 md:text-base">{text}</p>
      </div>
    </section>
  );
}

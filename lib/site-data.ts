export type NavItem = {
  href: string;
  label: string;
};

export type NewsItem = {
  title: string;
  dateLabel: string;
  excerpt: string;
  image: string;
};

export type DogProfile = {
  name: string;
  shortCode: string;
  image: string;
  traits: string;
  record: string[];
};

export type Litter = {
  litterName: string;
  date: string;
  father: string;
  mother: string;
  count: string;
  descendants: string[];
  images: string[];
};

export const siteMeta = {
  name: "Zwinger aus dem Emsland",
  claim: "Herzlich Willkommen im Zwinger aus dem Emsland.",
  description:
    "Hovawart-Zucht mit Herz, Erfahrung und verantwortungsvoller Aufzucht aus Geeste im Emsland.",
  keywords: [
    "Emsland",
    "Hovawart",
    "Hovawart Zucht",
    "Hovawarte Welpen",
    "Zwinger aus dem Emsland",
    "RZV"
  ]
};

export const navItems: NavItem[] = [
  { href: "/", label: "Startseite" },
  { href: "/aktuelles", label: "Aktuelles" },
  { href: "/unsere-zucht", label: "Unsere Zucht" },
  { href: "/unsere-hunde", label: "Unsere Hunde" },
  { href: "/unsere-wuerfe", label: "Unsere Würfe" }
];

export const footerItems: NavItem[] = [
  { href: "/impressum", label: "Impressum" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/links", label: "Links" }
];

export const contact = {
  phone: "05907-9495130",
  phoneHref: "tel:+4959079495130",
  address: "Kottenkamps-Sand 4, 49744 Geeste",
  mail: "eveline.hohmann@web.de",
  mailHref: "mailto:eveline.hohmann@web.de"
};

export const homeIntro = {
  heroImage: "/images/hero/hero-hovawarte.jpg",
  heroAlt: "Hovawarte im Garten vor dem Haus",
  lead:
    "Wir sind das Empfangskomitee: Questa aus dem Emsland (Oma) und Timba aus dem Emsland (Mama). Unser Haus, unser Garten, unser Auto und unser Frauchen erwarten interessierte Hovawart-Fans.",
  rzvText:
    "Der Rassezuchtverein für Hovawart-Hunde e.V. – kurz RZV – ist auf internationaler Ebene der älteste und mit weitem Abstand größte Zuchtverein für Hovawarte.",
  rzvLink: "https://www.hovawart.org/"
};

export const homeTeasers = [
  {
    title: "Aktuelles",
    text: "Neuigkeiten zu geplanten Würfen, Welpentreffen und Erfolgen unserer Nachzucht.",
    href: "/aktuelles",
    image: "/images/allgemein/teaser-aktuelles.jpg"
  },
  {
    title: "Unsere Zucht",
    text: "Erfahrung, Verantwortung und eine liebevolle Aufzucht vom Haus bis zum Alltagstraining.",
    href: "/unsere-zucht",
    image: "/images/allgemein/teaser-zucht.jpg"
  },
  {
    title: "Unsere Hunde",
    text: "Lernen Sie unsere aktuellen Zuchthündinnen mit Eigenschaften und Prüfungsdaten kennen.",
    href: "/unsere-hunde",
    image: "/images/hunde/teaser-hunde.jpg"
  },
  {
    title: "Unsere Würfe",
    text: "Eine vollständige Chronik unserer Würfe von A bis W – mit Linien und Entwicklung.",
    href: "/unsere-wuerfe",
    image: "/images/wuerfe/teaser-wuerfe.jpg"
  }
];

export const newsItems: NewsItem[] = [
  {
    title: "Hurra! Timba bekommt Welpen!",
    dateLabel: "voraussichtlich Anfang März 2026",
    excerpt:
      "Der X-Wurf ist auf dem Weg. Wenn Sie an einem Welpen interessiert sind, melden Sie sich bitte telefonisch oder per Mail bei uns. Linkes Foto: Bud von der Layhöhe, rechtes Foto: Timba aus dem Emsland.",
    image: "/images/wuerfe/x-wurf-planung.jpg"
  },
  {
    title: "X-Wurf aus dem Emsland",
    dateLabel: "Herbst/Winter 2025 (Planung)",
    excerpt: "Der X-Wurf aus dem Emsland ist für Herbst/Winter 2025 geplant.",
    image: "/images/wuerfe/timba-portrait.jpg"
  },
  {
    title: "Welpentreffen vom W-Wurf",
    dateLabel: "23.02.2025",
    excerpt:
      "Drei Welpen aus dem W-Wurf kamen zum DVG Hundeplatz nach Meppen. Links im Bild ist Mama Timba aus dem Emsland, mittig die drei Welpen im Alter von 6 Monaten und rechts Papa Ray.",
    image: "/images/wuerfe/w-wurf-welpentreffen.jpg"
  },
  {
    title: "Welpentreffen vom V-Wurf",
    dateLabel: "23.02.2025",
    excerpt:
      "Vier Rüden aus dem V-Wurf kamen am 23.02.2025 zum DVG Hundeplatz nach Meppen zum Welpentreffen.",
    image: "/images/wuerfe/v-wurf-welpentreffen.jpg"
  },
  {
    title: "Urus aus dem Emsland: Europasieger 2025",
    dateLabel: "Saison 2025",
    excerpt:
      "Urus aus dem Emsland wurde Europasieger 2025, German Winner 2025 und Best of Breed 2025 im In- und Ausland.",
    image: "/images/wuerfe/urus-awards.jpg"
  },
  {
    title: "Nachzuchtbeurteilung U-Wurf",
    dateLabel: "16.03.2024",
    excerpt:
      "Sechs von sieben Welpen aus dem U-Wurf haben in Delmenhorst erfolgreich an der Nachzuchtbeurteilung teilgenommen.",
    image: "/images/wuerfe/u-wurf-nachzucht.jpg"
  },
  {
    title: "Morro: Deutscher Meister und Vize-Weltmeister",
    dateLabel: "Wettkampfsaison",
    excerpt:
      "Morro aus dem Emsland wurde Deutscher Meister der Fährtenhunde und Vize-Weltmeister bei den Internationalen Fährtenhunden.",
    image: "/images/wuerfe/morro-erfolg.jpg"
  },
  {
    title: "S-Wurf Welpentreffen",
    dateLabel: "08.08.2021",
    excerpt: "Welpentreffen vom S-Wurf aus dem Emsland in Meppen.",
    image: "/images/wuerfe/s-wurf-treffen.jpg"
  },
  {
    title: "R-Wurf Welpentreffen",
    dateLabel: "12.01.2020",
    excerpt: "Welpentreffen vom R-Wurf aus dem Emsland in Bobenheim-Roxheim.",
    image: "/images/wuerfe/r-wurf-treffen.jpg"
  },
  {
    title: "ZTP von Questa",
    dateLabel: "15.09.2018",
    excerpt: "ZTP von Questa in Gummersbach.",
    image: "/images/hunde/questa-ztp.jpg"
  }
];

export const breedingStory = [
  "Mit 21 heiratete ich einen sehr verständnisvollen und großzügigen Mann, mit dem ich gute zehn Jahre in verschiedenen Ländern lebte. Wir kauften uns in Marokko aus einer französischen Zucht einen Deutschen Schäferhund, eine Hündin, die von nun an mein ständiger Begleiter war.",
  "Durch einen puren Zufall lernte ich Frau Hannelore Hass mit ihrem schwarzen Hovawart-Rüden Junker von der Kieler Förde kennen, die für viele Jahrzehnte meine beste Hovawart-Freundin wurde.",
  "Aus dem letzten Deckakt dieses Rüden bekam ich die blonde Hovawart-Hündin Arba vom Jordtmoor. Die Unterschiede zu meiner Schäferhündin waren enorm.",
  "Ihr ganzes Wesen, die Familienzugehörigkeit und ihr großes Bedürfnis aufzupassen sowie der weitaus geringere Pflegeaufwand als bei einem Schäferhund machten den Hovawart für uns zum idealen Familienhund.",
  "Wir haben uns der Zucht guter Hovawarte im Sinne des Rassestandards verschrieben: gesund, sportlich, vielseitig einsetzbar, lernfähig und schön. Die Erfahrung eines Züchters ist durch nichts zu ersetzen.",
  "Aus unseren Hovawart-Babys sind später Teilnehmer an der Deutschen Meisterschaft im VPG- und FH-Bereich geworden, genauso wie Bundessieger oder Europajugendsieger bei entsprechenden Ausstellungen.",
  "Unsere liebevolle und verantwortungsvolle Aufzucht erfolgt anfangs im Haus und erweitert sich auf Nebengebäude, Garten, Auto und kleine Spaziergänge.",
  "Wir bemühen uns sehr, den kleinen Lebewesen von der Geburt bis zur Abgabe in fürsorgliche und pflichtbewusste Hände alles beizubringen, was in diesen Wochen möglich ist.",
  "So lernen sie gebürstet, mit dem Handtuch abgetrocknet zu werden und die Öhrchen und Zähnchen zu kontrollieren. Nach der siebten Lebenswoche gehört Autofahren zu verschiedenen Orten ebenfalls zum Lehrplan der Welpen.",
  "Sie lernen viele nette Menschen auf dem Hundeplatz kennen und natürlich auch Kinder. Zu unserer Familie gehören drei Enkelkinder.",
  "Auch im neuen Zuhause geht der Lernprozess weiter und endet eigentlich nie.",
  "Dabei möchten wir Ihnen ein Hundeleben lang mit Rat und Tat zur Seite stehen, damit es Ihr absoluter Traumhund wird. Dieser Kontakt ist nie abgebrochen, ob im In- oder Ausland.",
  "Genauso wollen wir weitermachen: mit Kompetenz, viel Erfahrung und großer Liebe zu unseren Hunden und dieser Rasse."
];

export const breedingHighlights = [
  "Aufzucht im Haus",
  "Nebengebäude",
  "Garten",
  "Auto",
  "Spaziergänge"
];

export const dogProfiles: DogProfile[] = [
  {
    name: "Timba aus dem Emsland",
    shortCode: "sm",
    image: "/images/hunde/timba-aus-dem-emsland.jpg",
    traits:
      "Sehr temperamentvoll und ein kleiner Wirbelwind. Verspielt, interessiert und sehr neugierig.",
    record: [
      "Zuchtbuchnr.: VDH-HO 41150-21, B1, Augenuntersuchung am 18.09.2023 i. O.",
      "NZB am 05.11.2022 in Michelstadt",
      "JB am 25.03.2023 in Delmenhorst",
      "CACIB am 23.04.2023 in Lingen (SG 2)",
      "ZTP am 09.09.2023 in Gummersbach"
    ]
  },
  {
    name: "Questa aus dem Emsland",
    shortCode: "sm",
    image: "/images/hunde/questa-aus-dem-emsland.jpg",
    traits:
      "Temperamentvoll und verspielt, ausgesprochen freundlich, interessiert und aufmerksam.",
    record: [
      "Zuchtbuchnr.: VDH-HO 38246-16, A2, Augen- und Herzuntersuchung am 06.04.2018 i. O.",
      "NZB am 30.04.2017 in Mönchengladbach",
      "JB am 27.05.2018 in Mönchengladbach",
      "CAC am 02.09.2018 in Bremen (SG 4)",
      "ZTP am 15.09.2018 in Gummersbach"
    ]
  }
];

export const lineageCaptions = [
  "BILD 1: Meine aktuelle Zuchthündin aus meinem Q-Wurf: Questa aus dem Emsland im Alter von 2 Jahren.",
  "BILD 2: Im Juni 2015 mit meinen Hunden Motzi aus dem Emsland und Jara vom Eichenkönig. Jara ist im August 2020 im Alter von 11,5 Jahren verstorben. Motzi aus dem Emsland musste ich im Februar 2018 in ein neues Zuhause geben, da sich nach dem Tod meines Mannes die Rangordnung änderte.",
  "BILD 3: Drei frühere Generationen des Zwingers aus dem Emsland: Gana, Kimba und Coco."
];

export const litters: Litter[] = [
  {
    litterName: "W-Wurf aus dem Emsland",
    date: "27.08.2024",
    father: "Ray of Light of Loyalguards, sm",
    mother: "Timba aus dem Emsland, sm",
    count: "Rüden: 4x sm, Hündinnen: 3x sm",
    descendants: [
      "Walker: HD A2, NZB",
      "Watson: steht in Belgien",
      "Wigo: HD A2, NZB",
      "Wotan: HD A2, NZB",
      "Wanda: NZB",
      "Weela: HD B1, NZB",
      "Wilma: NZB"
    ],
    images: ["/images/wuerfe/w-wurf-a.jpg", "/images/wuerfe/w-wurf-welpentreffen.jpg"]
  },
  {
    litterName: "V-Wurf aus dem Emsland",
    date: "26.02.2024",
    father: "Bahram von Kocher und Lein, sm",
    mother: "Questa aus dem Emsland, sm",
    count: "Rüden: 5x sm, Hündinnen: 2x sm",
    descendants: [
      "Vagabund: HD A2",
      "Vamos: HD A2, NZB",
      "Varon",
      "Viktor: HD A2, NZB",
      "Vitus: HD B1, NZB",
      "Vega: HD B1, NZB",
      "Vikki"
    ],
    images: ["/images/wuerfe/v-wurf-a.jpg", "/images/wuerfe/v-wurf-welpentreffen.jpg"]
  },
  {
    litterName: "U-Wurf aus dem Emsland",
    date: "24.04.2023",
    father: "Dario vom Mühlendamm, sm",
    mother: "Questa aus dem Emsland, sm",
    count: "Rüden: 3x sm, Hündinnen: 4x sm",
    descendants: [
      "Urus: HD A2, NZB, JB, Ausstellung V1, Europasieger 2025",
      "Usaro: HD A2, NZB",
      "Uzzi: HD A2, NZB, JB n.b.",
      "Ulricka: HD A1, NZB",
      "Unka: HD-n.geröngt, Export Niederlande, NZB",
      "Urda: HD-n.geröngt, Export Niederlande",
      "Usana: HD C1, NZB"
    ],
    images: ["/images/wuerfe/u-wurf-a.jpg", "/images/wuerfe/u-wurf-nachzucht.jpg"]
  },
  {
    litterName: "T-Wurf aus dem Emsland",
    date: "26.10.2021",
    father: "Eddy vom Hagenauer Forst, sm",
    mother: "Questa aus dem Emsland, sm",
    count: "Rüden: 7x sm, Hündinnen: 5x sm",
    descendants: [
      "Tarax: Export Niederlande",
      "Taron: HD A2, Export Niederlande",
      "Tasko: HD A2",
      "Taxus: HD A2, NZB, JB, ZTP, Augen oB, Deckrüde",
      "Thor: HD B1, NZB",
      "Titus: HD A2, NZB",
      "Turbo: HD A1, Therapiehund",
      "Tammy: HD A2, NZB, JB, ZTP, Augen oB, Zuchthündin",
      "Tara: HD-n.geröngt, Export Niederlande",
      "Thisa: HD B1, NZB, JB, ZTP, Augen oB, Zuchthündin",
      "Tiera: Export Finnland, Zuchthündin",
      "Timba: HD B1, NZB, JB, ZTP, Augen oB, Zuchthündin"
    ],
    images: ["/images/wuerfe/t-wurf-a.jpg"]
  },
  {
    litterName: "S-Wurf aus dem Emsland",
    date: "28.01.2021",
    father: "Bacley vom Ilsesee, sm",
    mother: "Questa aus dem Emsland, sm",
    count: "7 Rüden: 7x sm, 1 Hündin: 1x sm",
    descendants: [
      "Sam: HD A2, NZB, JB",
      "Samson: HD A2, NZB, JB",
      "Samurai: HD B1, NZB, JB",
      "Saronn: HD A2, NZB, JB, BH",
      "Senor Mojito: HD B1, NZB, JB, ZTP",
      "Shandor: HD A2, NZB, JB",
      "Sky: HD B2",
      "Scully: HD B1, NZB, JB, ZTP, Augen oB, Zuchthündin"
    ],
    images: ["/images/wuerfe/s-wurf-a.jpg", "/images/wuerfe/s-wurf-treffen.jpg"]
  },
  {
    litterName: "R-Wurf aus dem Emsland",
    date: "08.06.2019",
    father: "Cito vom Pferdebach, sm",
    mother: "Questa aus dem Emsland, sm",
    count: "8 Rüden: 8x sm, 1 Hündin: 1x sm",
    descendants: [
      "Randalf: HD-n.geröngt",
      "Räuber: HD C1",
      "Renner: HD A2, NZB",
      "Ringo: HD B1, NZB",
      "Rocco: Export Österreich, NZB",
      "Rosko: HD B1, lebt in NL",
      "Rudi: Export Niederlande",
      "Rufus: HD B1, NZB",
      "Ronja: HD-A2, NZB"
    ],
    images: ["/images/wuerfe/r-wurf-a.jpg", "/images/wuerfe/r-wurf-treffen.jpg"]
  },
  {
    litterName: "Q-Wurf aus dem Emsland",
    date: "14.07.2016",
    father: "Arigo von den Kurpfalzjägern, sm",
    mother: "Jara vom Eichenkönig, s",
    count: "4 Rüden, 5 Hündinnen",
    descendants: [
      "Qani: HD-A2, NZB, JB, AD",
      "Quax: HD-B1, NZB, BH",
      "Querro: HD-n.geröngt, NZB",
      "Quincy: HD-A2, NZB",
      "Quarta: HD-A2, NZB",
      "Querra: HD-n.geröngt, NZB",
      "Quessa: HD-A2",
      "Questa: HD-A2, NZB, JB, ZTP, Augen oB, Zuchthündin",
      "Quinte: HD-n.geröngt, NZB"
    ],
    images: ["/images/wuerfe/q-wurf-a.jpg"]
  },
  {
    litterName: "P-Wurf aus dem Emsland",
    date: "23.02.2016",
    father: "Aramis vom Mühlengeist, sm",
    mother: "Motzi aus dem Emsland, sm",
    count: "5 Rüden, 6 Hündinnen",
    descendants: [
      "Paco: HD-B1, NZB",
      "Pelle: HD-B2, 2x NZB, JB, VPG I",
      "Pingo: HD-n.geröngt, NZB, JB",
      "Pinto: HD-B1, NZB",
      "Portos: HD-B2, NZB",
      "Pega: HD-n.geröngt",
      "Penga: HD-B2, NZB",
      "Pina: HD-A2, NZB",
      "Pixi: HD-n.geröngt",
      "Pona: HD-A1, NZB",
      "Prada: HD-A2, NZB"
    ],
    images: ["/images/wuerfe/p-wurf-a.jpg"]
  },
  {
    litterName: "O-Wurf aus dem Emsland",
    date: "10.10.2015",
    father: "Gauner vom Rehwinkel, sm",
    mother: "Jara vom Eichenkönig, s",
    count: "4 Rüden, 3 Hündinnen",
    descendants: [
      "Ontares: HD-B1, NZB, JB",
      "Orik: HD-B1, NZB, JB",
      "Ornato: HD-B1, NZB, JB, ZTP, BH, RZV-Z (Deckrüde)",
      "Otis: HD-B1, NZB, JB",
      "Olivia: HD-B1, NZB",
      "Onna: HD-B1, NZB, JB n.best.",
      "Ophelia: HD-B2, NZB"
    ],
    images: ["/images/wuerfe/o-wurf-a.jpg"]
  },
  {
    litterName: "N-Wurf aus dem Emsland",
    date: "02.03.2014",
    father: "Kalisto vom Gablitztal, sm",
    mother: "Jara vom Eichenkönig, s",
    count: "4 Rüden, 6 Hündinnen",
    descendants: [
      "Naxus: HD-A2, NZB, 2x ZTP, BH",
      "Nero: HD-A2",
      "Nestor: HD-n.geröngt, NZB, BH / Dänemark",
      "Nolan: HD-B1, NZB, JB / Belgien",
      "Nanga: HD-A2, NZB, JB n.best.",
      "Nara: HD-B1, NZB / Österreich",
      "Neela: HD-A2, NZB, JB, BH",
      "Nescha: HD-A2, NZB / Niederlande",
      "Nova: HD-A2 / Italien",
      "Nusa: HD-n.geröngt, NZB"
    ],
    images: ["/images/wuerfe/n-wurf-a.jpg"]
  },
  {
    litterName: "M-Wurf aus dem Emsland",
    date: "06.06.2012",
    father: "Antares vom Vierseitenhof, sm",
    mother: "Jara vom Eichenkönig, s",
    count: "5 Rüden, 4 Hündinnen",
    descendants: [
      "Magic: HD-A1, NZB / Schweiz",
      "Maron: HD-A1, NZB, JB",
      "Matze: HD-A1, NZB, JB",
      "Maylo: HD-A1, NZB, JB",
      "Morro: HD-A1, NZB, JB, ZTP, BH, AD, IPO I, FH 2, IPO FH (Deckrüde)",
      "Maja: HD-A1, NZB",
      "Minou: HD-A1, NZB, JB, ZTP, BH",
      "Mira: HD-A1, NZB",
      "Motzi: HD-A1, NZB, JB, ZTP, BH (Zuchthündin)"
    ],
    images: ["/images/wuerfe/m-wurf-a.jpg"]
  },
  {
    litterName: "L-Wurf aus dem Emsland",
    date: "10.11.2004",
    father: "Xymo vom Gablitztal, sm",
    mother: "Gana aus dem Emsland, s",
    count: "4 Rüden, 6 Hündinnen",
    descendants: [
      "Largo: HD-A1, NZB",
      "Leon: HD-A1, NZB, JB, ZTP, BH, IPO III, VPG I, FH 1 (Deckrüde)",
      "Lord: HD-A1, NZB, JB n.best., 2x ZTP (Deckrüde)",
      "Lümmel: HD-A1, NZB, JB, ZTP, BH, AD, IPO III, VPG III, FH 2, IPO-FH (Deckrüde)",
      "Lady: HD-A1, NZB, JB",
      "Lana: HD-A1, NZB",
      "Lea: HD-A1, NZB, JB, ZTP, BH, FH 1 (Zuchthündin)",
      "Lena: HD-A1, NZB, JB",
      "Luna: HD-A1, NZB",
      "Luzi: HD-A1"
    ],
    images: ["/images/wuerfe/l-wurf-a.jpg"]
  },
  {
    litterName: "K-Wurf aus dem Emsland",
    date: "10.03.2003",
    father: "Ambo vom Windrad, s",
    mother: "Gana aus dem Emsland, s",
    count: "3 Rüden, 6 Hündinnen",
    descendants: [
      "Karlo: HD-A1, NZB, JB, ZTP, BH, IPO I / Belgien",
      "Karon: HD-A2, NZB, JB n.best., ZTP",
      "Kirk: HD-A1, NZB, JB, ZTP n.best.",
      "Kandy: NZB / Niederlande",
      "Kashi: Frankreich (Zuchthündin)",
      "Kessi: HD-A1, NZB, JB, ZTP, BH, VPG III (Zuchthündin)",
      "Kimba: HD-A1, BH, IPO III, VPG III",
      "Kira: HD-A1, NZB, JB, ZTP, BH (Zuchthündin)",
      "Kona: HD-A1, NZB"
    ],
    images: ["/images/wuerfe/k-wurf-a.jpg"]
  },
  {
    litterName: "J-Wurf aus dem Emsland",
    date: "04.05.2002",
    father: "Etienne vom Georgenberg, sm",
    mother: "Gana aus dem Emsland, s",
    count: "3 Rüden, 5 Hündinnen",
    descendants: [
      "Jango: HD-A1, NZB, JB n.best.",
      "Jaron: HD-A1, NZB, JB n.best., BH",
      "Joschi: HD-A1, NZB",
      "Java: HD-A1, NZB, JB",
      "Jessa: HD-A2, NZB",
      "Joesi: HD-A1, NZB",
      "Jona: HD-A1, NZB",
      "Josta: HD-A1, NZB, 2x ZTP"
    ],
    images: ["/images/wuerfe/j-wurf-a.jpg"]
  },
  {
    litterName: "I-Wurf aus dem Emsland",
    date: "12.10.2000",
    father: "Dino vom Holter Berg, sm",
    mother: "Gana aus dem Emsland, s",
    count: "7 Rüden, 3 Hündinnen",
    descendants: [
      "Iaron: HD-A1, NZB, JB, ZTP, BH, AD, VPG I (Deckrüde)",
      "Icon: HD-A1, NZB",
      "Igor: HD-A1, NZB",
      "Ikaros: HD-A1, BH, VPG II",
      "Irun: HD-A1, NZB, JB n.best., BH, FH I",
      "Ivo: HD-A1, NZB",
      "Izzo: HD-n.geröngt, NZB",
      "Ibara: HD-A1, NZB, BH",
      "Inett: HD-A1, NZB, JB, BH",
      "Isha: HD-A1, NZB, JB, ZTP, BH, AD, FPr-3, UPr-3"
    ],
    images: ["/images/wuerfe/i-wurf-a.jpg"]
  },
  {
    litterName: "H-Wurf aus dem Emsland",
    date: "20.03.1998",
    father: "Andrino vom Kressbach, sm",
    mother: "Coco aus dem Emsland, s",
    count: "5 Rüden, 2 Hündinnen",
    descendants: [
      "Haron: HD-A1, NZB, JB n.best., BH, AD",
      "Harras: HD-A1, NZB, JB, ZTP, BH, AD, IPO III, VPG III (Deckrüde)",
      "Hero: HD-A1, NZB, JB, ZTP, BH, IPO III, VPG III, FH I (Deckrüde)",
      "Hesto: HD-B1, NZB",
      "Higgins: HD-A1, NZB",
      "Hanka: HD-A1, NZB, JB, ZTP n.best.",
      "Heli: HD-A1, NZB, JB, ZTP n.best., BH, FH II"
    ],
    images: ["/images/wuerfe/h-wurf-a.jpg"]
  },
  {
    litterName: "G-Wurf aus dem Emsland",
    date: "06.05.1997",
    father: "Branco vom Schlangenweiher, sm",
    mother: "Coco aus dem Emsland, s",
    count: "5 Rüden, 3 Hündinnen",
    descendants: [
      "Gajus: HD-A1, NZB",
      "Ghost: HD-A1 / Frankreich",
      "Gismo: HD-A1, NZB, 2x ZTP, BH, AD, VPG III, FH I, FPr-3, RH, RH-Tr (Deckrüde)",
      "Godan: HD-A1, NZB, JB",
      "Gringo: HD-A1, NZB",
      "Gana: HD-A1, NZB, JB, ZTP, BH, IPO II (Zuchthündin)",
      "Ginger: HD-A1, NZB",
      "Gitta: HD-A1, NZB, JB n.best."
    ],
    images: ["/images/wuerfe/g-wurf-a.jpg"]
  },
  {
    litterName: "F-Wurf aus dem Emsland",
    date: "26.05.1996",
    father: "Arco vom Starendorf, bl",
    mother: "Coco aus dem Emsland, s",
    count: "4 Rüden, 5 Hündinnen",
    descendants: [
      "Faron: HD-A1, 2x ZTP, BH, AD, IPOIII, VPG III (Deckrüde)",
      "Fasko: HD-n.geröngt",
      "Flash: HD-Frei, NZB, JB",
      "Flynn: HD-A1 / Österreich",
      "Fara: HD-A1",
      "Finni: HD-A1",
      "Flair: HD-A1, NZB, BH, AD, FPr-3",
      "Flame: HD-A1, JB n.best.",
      "Funny: HD-n.geröngt / Niederlande (Zuchthündin)"
    ],
    images: ["/images/wuerfe/f-wurf-a.jpg"]
  },
  {
    litterName: "E-Wurf aus dem Emsland",
    date: "07.08.1995",
    father: "Fendor ut'n Eekholt, bl",
    mother: "Coco aus dem Emsland, s",
    count: "3 Rüden, 3 Hündinnen",
    descendants: [
      "Earon: HD-n.geröngt, NZB",
      "Elan: HD-A1, NZB, ZTP",
      "Enzo: HD-Frei, NZB, JB, ZTP, BH, IPO III, VPG III, FH I (Deckrüde)",
      "Edna: HD-A1, NZB, JB, ZTP, BH, VPG III",
      "Esra: HD-Frei, NZB, JB, ZTP",
      "Eyla: HD-Frei, NZB"
    ],
    images: ["/images/wuerfe/e-wurf-a.jpg"]
  },
  {
    litterName: "D-Wurf aus dem Emsland",
    date: "27.05.1993",
    father: "Aurich vom Oberwald, bl",
    mother: "Iskia von Ascona, s",
    count: "8 Rüden, 1 Hündin",
    descendants: [
      "Dariem: HD-Frei, NZB, JB, ZTP, BH",
      "Darius: HD-A1, NZB, JB, BH",
      "Darko: HD-Frei",
      "Daron: HD-Frei, NZB, 2x ZTP, BH, AD, VPG III (Deckrüde)",
      "Devel: HD-A1, NZB, 2x ZTP, BH",
      "Dex: HD-A1, NZB, JB n.best.",
      "Dolf: HD-Frei, NZB, JB, ZTP, BH, VPG III (Deckrüde)",
      "Donald: HD-Frei",
      "Dara: HD-Frei, NZB, BH"
    ],
    images: ["/images/wuerfe/d-wurf-a.jpg"]
  },
  {
    litterName: "C-Wurf aus dem Emsland",
    date: "28.02.1992",
    father: "Hova Bondes Arek, bl",
    mother: "Iskia von Ascona, s",
    count: "2 Rüden, 3 Hündinnen",
    descendants: [
      "Cambo: HD-frei, NZB, JB, ZTP, BH, AD",
      "Caron: HD-M, NZB, JB, AD",
      "Cara: HD-A, NZB, JB, ZTP, BH, AD (Zuchthündin)",
      "Coco: HD-A, NZB, JB, ZTP, BH, VPG I (Zuchthündin)",
      "Cuga: HD-A, NZB, 2x ZTP, BH, AD (Zuchthündin)"
    ],
    images: ["/images/wuerfe/c-wurf-a.jpg"]
  },
  {
    litterName: "B-Wurf aus dem Emsland",
    date: "13.11.1990",
    father: "Lerry von der Birkenheide, bl",
    mother: "Iskia von Ascona, s",
    count: "7 Rüden",
    descendants: [
      "Baldo: HD-A1, JB n.best.",
      "Barco: HD-frei",
      "Baron: HD-A1, JB, ZTP, BH, AD (Deckrüde)",
      "Bautz: HD-frei, JB",
      "Bingo: HD-frei",
      "Birko: HD-L, JB, BH",
      "Bonzo: HD-n.geröngt"
    ],
    images: ["/images/wuerfe/b-wurf-a.jpg"]
  },
  {
    litterName: "A-Wurf aus dem Emsland",
    date: "23.06.1989",
    father: "Cornett vom Enzblick, bl",
    mother: "Iskia von Ascona, s",
    count: "2 Rüden",
    descendants: [
      "Aaron: HD-Frei, JB, ZTP",
      "Astor: HD-V, JB, ZTP"
    ],
    images: ["/images/wuerfe/a-wurf-a.jpg"]
  }
];

export const legalNotice = {
  ownerBlock: [
    "Dies ist eine rein private Webseite von:",
    "Eveline Hohmann",
    "Kottenkamps-Sand 4",
    "49744 Geeste",
    "Telefon: 05907 9495130",
    "Fax: 05907 9495106",
    "Handy: 0171 3128710",
    "E-Mail: eveline.hohmann@web.de"
  ],
  disclaimer:
    "Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Dienstanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Dienstanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.",
  linksLiability:
    "Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Eine permanente inhaltliche Kontrolle ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden derartige Links umgehend entfernt.",
  copyright:
    "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen."
};

export const contactPage = {
  locationText:
    "Geeste liegt zwischen Lingen und Meppen an der A31 (Autobahnabfahrt Geeste). Ein kleiner Ort im Emsland mit verschiedenen Ortsteilen in einem größeren Umfeld. Unser Wohngebiet Kottenkämpe breitet sich an einem großen Speichersee aus, umgeben von Wäldern und Feldern.",
  formLabels: [
    "Ihr Name *",
    "Ihre Telefonnummer *",
    "Ihre E-Mail-Adresse *",
    "Ihre Mitteilung",
    "Datenschutz *"
  ]
};

export const privacySections = [
  {
    title: "Geltungsbereich",
    body:
      "Diese Datenschutzerklärung klärt Nutzer über Art, Umfang und Zweck der Erhebung und Verwendung personenbezogener Daten durch den verantwortlichen Anbieter Eveline Hohmann, Kottenkamps-Sand 4, 49744 Geeste, info@emsland-hovawarte.de, auf dieser Website auf."
  },
  {
    title: "Rechtsgrundlagen",
    body:
      "Die rechtlichen Grundlagen des Datenschutzes finden sich im Bundesdatenschutzgesetz (BDSG) und im Telemediengesetz (TMG)."
  },
  {
    title: "Zugriffsdaten / Server-Logfiles",
    body:
      "Der Anbieter erhebt Daten über jeden Zugriff auf das Angebot (Serverlogfiles). Zu den Zugriffsdaten gehören Name der abgerufenen Webseite, Datei, Datum und Uhrzeit, Datenmenge, Meldung über erfolgreichen Abruf, Browsertyp, Betriebssystem, Referrer-URL, IP-Adresse und anfragender Provider. Diese Protokolldaten dienen statistischen Auswertungen sowie dem sicheren Betrieb der Seite."
  },
  {
    title: "Umgang mit personenbezogenen Daten",
    body:
      "Personenbezogene Daten werden nur erhoben, genutzt und weitergegeben, soweit dies gesetzlich erlaubt ist oder Nutzer in die Datenerhebung einwilligen."
  },
  {
    title: "Kontaktaufnahme",
    body:
      "Bei der Kontaktaufnahme (z. B. Kontaktformular oder E-Mail) werden Angaben des Nutzers zur Bearbeitung der Anfrage und für mögliche Anschlussfragen gespeichert."
  },
  {
    title: "Kommentare und Beiträge",
    body:
      "Bei Kommentaren oder Beiträgen können IP-Adressen zur Sicherheit des Anbieters gespeichert werden, falls widerrechtliche Inhalte veröffentlicht werden."
  },
  {
    title: "Einbindung von Diensten und Inhalten Dritter",
    body:
      "Bei der Einbindung externer Inhalte (z. B. YouTube, Kartenmaterial, Feeds, Grafiken) ist die Übermittlung der IP-Adresse an Drittanbieter technisch erforderlich. Auf eine mögliche weitergehende Verarbeitung durch Drittanbieter hat der Betreiber keinen Einfluss."
  },
  {
    title: "Cookies",
    body:
      "Cookies sind kleine Dateien zur Verbesserung der Benutzerfreundlichkeit und zur statistischen Auswertung. Das Speichern kann in den Browser-Einstellungen eingeschränkt oder deaktiviert werden; dadurch kann der Nutzungskomfort eingeschränkt sein."
  },
  {
    title: "Social Plugins und externe Plattformen",
    body:
      "Die ursprüngliche Seite enthält Hinweise zu Social Plugins (u. a. Facebook, Google+, Twitter) und zu Google AdSense. Zweck, Umfang und Verarbeitung richten sich nach den Datenschutzbestimmungen der jeweiligen Anbieter."
  },
  {
    title: "Widerruf, Berichtigung und Löschung",
    body:
      "Nutzer haben das Recht auf unentgeltliche Auskunft über gespeicherte personenbezogene Daten sowie auf Berichtigung, Sperrung oder Löschung, soweit keine gesetzliche Aufbewahrungspflicht entgegensteht."
  }
];

export const linkDirectory = {
  intro: "Hier finden Sie informative Links rund um den Hovawart.",
  note:
    "Wir betonen ausdrücklich, dass wir keinerlei Einfluss auf Inhalte oder Gestaltung der verlinkten Seiten haben. Die Inhalte dieser Seiten machen wir uns nicht zu Eigen.",
  links: [
    {
      label: "Rassezuchtverein für Hovawart-Hunde e.V.",
      href: "http://www.hovawart.org/"
    },
    {
      label: "Landesgruppe NRW im RZV-Hovawart",
      href: "http://www.nrw.hovawart.org/"
    },
    {
      label: "Verband für das Deutsche Hundewesen (VDH)",
      href: "http://www.vdh.de/"
    },
    {
      label: "Futter Shuttle",
      href: "https://www.futter-shuttle.de/"
    }
  ]
};

export const cookieNotice =
  "Diese Website benutzt Cookies, um Ihnen das beste Erlebnis zu ermöglichen. Weiterführende Informationen erhalten Sie in unserer Datenschutzerklärung.";

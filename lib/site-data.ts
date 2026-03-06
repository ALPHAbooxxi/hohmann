export type NavItem = {
  href: string;
  label: string;
};

export type NewsItem = {
  title: string;
  dateLabel: string;
  excerpt: string;
  image: string;
  images?: string[];
};

export type DogProfile = {
  name: string;
  shortCode: string;
  image: string;
  traits: string;
  record: string[];
};

export type ParentInfo = {
  name: string;
  image: string;
  role: "Vater" | "Mutter";
};

export type Litter = {
  litterName: string;
  date: string;
  father: string;
  mother: string;
  parents?: ParentInfo[];
  count: string;
  descendants: string[];
  images: string[];
  updates?: NewsItem[];
};

export const siteMeta = {
  name: "Zwinger aus dem Emsland",
  claim: "Hovawart-Zucht aus Geeste im Emsland",
  description:
    "Verantwortungsvolle Hovawart-Zucht in Geeste (Emsland). Entdecken Sie unsere Hunde, aktuelle Würfe und jahrzehntelange Erfahrung in der Rassezucht (RZV/VDH).",
  keywords: [
    "Hovawart Zucht Emsland",
    "Hovawart Welpen Niedersachsen",
    "Hovawart Geeste",
    "Zwinger aus dem Emsland",
    "Eveline Hohmann Hovawart",
    "RZV Hovawart Züchter",
    "Hovawart-Hunde Emsland",
    "Hunderasse Hovawart"
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
  mobile: "0171-3128710",
  mobileHref: "tel:+491713128710",
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
    title: "Hurra! Timba hat Welpen bekommen!",
    dateLabel: "01. 03. 2026",
    excerpt:
      "Am 01. 03. 2026 wurden 8 Welpen im Zwinger aus dem Emsland geboren. 3x Rüden und 5x Hündinnen. Wenn Sie an einem Welpen interessiert sind, melden Sie sich bitte telefonisch oder per Mail bei uns.",
    image: "/images/wuerfe/x_wurf_2.jpeg",
    images: [
      "/images/wuerfe/x_wurf_1.jpeg",
      "/images/wuerfe/x_wurf_2.jpeg"
    ]
  }
];

export const breedingStory = [
  "Mit 21 heiratete ich einen sehr verständnisvollen und großzügigen Mann mit dem ich gute 10 Jahre in verschiedenen Ländern lebte. Wir kauften uns in Marokko, aus einer französischen Zucht einen Deutschen Schäferhund, eine Hündin, die von nun an mein ständiger Begleiter war.",
  "Durch einen puren Zufall lernte ich Frau Hannelore Hass mit ihrem schwarzen Hovawart-Rüden Junker von der Kieler Förde kennen, die für viele Jahrzehnte meine beste Hovawart-Freundin wurde.",
  "Aus dem letzten Deckakt dieses Rüden bekam ich die blonde Hovawart-Hündin Arba vom Jordtmoor.",
  "Die Unterschiede zu meiner Schäferhündin waren enorm.",
  "Ihr ganzes Wesen, die Familienzugehörigkeit und ihr großes Bedürfnis aufzupassen sowie der weitaus geringere Pflegeaufwand als bei einem Schäferhund machten den Hovawart für uns zum idealen Familienhund.",
  "Wir haben uns der <strong>Zucht guter Hovawarte im Sinne des Rassestandards </strong>verschrieben, gesund, sportlich, vielseitig einsetzbar, lernfähig und schön. <br/><strong>Die Erfahrung eines Züchters ist durch nichts zu ersetzen.</strong>",
  "Aus unseren Hovawart-Babys sind später Teilnehmer an der Deutschen Meisterschaft im VPG und FH-Bereich geworden, genauso wie Bundessieger oder Europajugendsieger bei entsprechenden Ausstellungen.",
  "Unsere <strong>liebevolle und verantwortungsvolle Aufzucht </strong>erfolgt anfangs im Haus und erweitert sich auf Nebengebäude, Garten, Auto und kleine Spaziergänge wie aus den Fotos gut zu erkennen ist.",
  "Wir bemühen uns sehr den kleinen Lebewesen in den Wochen, von der Geburt bis zur <strong>Abgabe in fürsorgliche und pflichtbewusste Hände</strong>, alles beizubringen, was in diesen Wochen möglich ist.",
  "So lernen sie gebürstet, mit dem Handtuch abgetrocknet zu werden und die Öhrchen und Zähnchen zu kontrollieren. Nach der 7. Lebenswoche gehört Autofahren zu verschiedenen Orten ebenfalls zum Lehrplan der Welpen. Sie lernen viele nette Menschen auf dem Hundeplatz kennen und natürlich auch Kinder. Zu unserer Familie gehören 3 Enkelkinder.",
  "<strong>Auch im neuen Zuhause, geht der Lernprozess weiter und endet eigentlich nie.</strong>",
  "Dabei möchten wir ihnen ein Hundeleben lang mit Rat und Tat zur Seite stehen, damit es <span style=\"font-weight:bold;color:#000000\">Ihr absoluter </span><strong>Traumhund </strong>wird. Dieser Kontakt ist nie abgebrochen ob im In- oder Ausland.",
  "Genauso wollen wir weitermachen! Mit Kompetenz, viel Erfahrung und großer Liebe zu unseren Hunden und dieser Rasse."
];

export const breedingImages = [
  {
    src: "/images/old-site/w7e341d172226001432d247a76c8310b/Welpen_an_der_Milchleisted959.jpg",
    title: "Aufzucht im Haus"
  },
  {
    src: "/images/old-site/w7e341d172226001432d247a76c8310b/Q_Wurf_Woche7_sd959.jpg",
    title: "Nebengebäude"
  },
  {
    src: "/images/old-site/w7e341d172226001432d247a76c8310b/O-Wurf_Woche7_dd959.jpg",
    title: "Neugier"
  },
  {
    src: "/images/old-site/w7e341d172226001432d247a76c8310b/Q_Wurf_Woche7_td959.jpg",
    title: "Garten"
  },
  {
    src: "/images/old-site/w7e341d172226001432d247a76c8310b/P_Wurf_Woche8_ad959.jpg",
    title: "Auto"
  },
  {
    src: "/images/old-site/w7e341d172226001432d247a76c8310b/P_Wurf_Woche8_bd959.jpg",
    title: "Spaziergänge"
  },
  {
    src: "/images/old-site/w7e341d172226001432d247a76c8310b/DSCN0429d959.jpg",
    title: "Entdeckungstour"
  }
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
    parents: [
      { name: "Ray of Light of Loyalguards", image: "/images/old-site/Ray of Light of Loyalguards.jpg", role: "Vater" },
      { name: "Timba aus dem Emsland", image: "/images/old-site/w7e341d172226001432d247a76c8310b/timba-aus-dem-emsland.jpg", role: "Mutter" }
    ],
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
    images: [
      "/images/old-site/W-Wurf_Woche7b.jpg",
      "/images/old-site/W-Wurf_Woche5h.jpg",
      "/images/old-site/Wigo_5Wochen.jpg",
      "/images/old-site/Walker_5Wochen.jpg"
    ],
    updates: [
      {
        title: "Welpentreffen vom W-Wurf",
        dateLabel: "23.02.2025",
        excerpt:
          "Drei Welpen aus dem W-Wurf kamen zum DVG Hundeplatz nach Meppen. Links im Bild ist Mama Timba aus dem Emsland, mittig die drei Welpen im Alter von 6 Monaten und rechts Papa Ray.",
        image: "/images/wuerfe/w-wurf-welpentreffen.jpg",
        images: [
          "/images/old-site/w7e341d172226001432d247a76c8310b/w7e94060f0804003195521b48297a982/dsc_04016fbd.jpg",
          "/images/old-site/w7e341d172226001432d247a76c8310b/w7e94060f0804003195521b48297a982/DSC_0295.jpg",
          "/images/old-site/w7e341d172226001432d247a76c8310b/w7e94060f0804003195521b48297a982/dsc_0061a.jpg",
          "/images/old-site/w7e341d172226001432d247a76c8310b/w7e94060f0804003195521b48297a982/DSC_0419.jpg",
          "/images/old-site/w7e341d172226001432d247a76c8310b/w7e94060f0804003195521b48297a982/DSC_0425.jpg",
          "/images/old-site/w7e341d172226001432d247a76c8310b/w7e94060f0804003195521b48297a982/DSC_0025.jpg",
          "/images/old-site/w7e341d172226001432d247a76c8310b/w7e94060f0804003195521b48297a982/DSC_0030.jpg"
        ]
      }
    ]
  },
  {
    litterName: "V-Wurf aus dem Emsland",
    date: "26.02.2024",
    father: "Bahram von Kocher und Lein, sm",
    mother: "Questa aus dem Emsland, sm",
    parents: [
      { name: "Bahram von Kocher und Lein", image: "/images/old-site/Bahram von Kocher und Lein.jpg", role: "Vater" },
      { name: "Questa aus dem Emsland", image: "/images/old-site/Questa aus dem Emsland_Feb2020.jpg", role: "Mutter" }
    ],
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
    images: [
      "/images/old-site/w7e341d172226001432d247a76c8310b/w7e94060e24290030c348d0744f13a7a/DSC_0327.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/w7e94060e24290030c348d0744f13a7a/DSC_0170a.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/w7e94060e24290030c348d0744f13a7a/DSC_0234.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/w7e94060e24290030c348d0744f13a7a/DSC_0305a.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/w7e94060e24290030c348d0744f13a7a/DSC_0498.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/w7e94060e24290030c348d0744f13a7a/DSC_0542.jpg",
      "/images/old-site/V-Wurf_Woche5e.jpg",
      "/images/old-site/V-Wurf_Woche6b.jpg",
      "/images/old-site/V-Wurf_Woche6c.jpg",
      "/images/old-site/V-Wurf_Woche6d.jpg"
    ],
    updates: [
      {
        title: "Welpentreffen vom V-Wurf",
        dateLabel: "23.02.2025",
        excerpt:
          "Vier Rüden aus dem V-Wurf kamen am 23.02.2025 zum DVG Hundeplatz nach Meppen zum Welpentreffen.",
        image: "/images/wuerfe/v-wurf-welpentreffen.jpg",
        images: [
          "/images/old-site/w7e341d172226001432d247a76c8310b/w7e94060e24290030c348d0744f13a7a/DSC_0327.jpg",
          "/images/old-site/w7e341d172226001432d247a76c8310b/w7e94060e24290030c348d0744f13a7a/DSC_0033.jpg",
          "/images/old-site/w7e341d172226001432d247a76c8310b/w7e94060e24290030c348d0744f13a7a/DSC_0170a.jpg",
          "/images/old-site/w7e341d172226001432d247a76c8310b/w7e94060e24290030c348d0744f13a7a/DSC_0182.jpg",
          "/images/old-site/w7e341d172226001432d247a76c8310b/w7e94060e24290030c348d0744f13a7a/DSC_0234.jpg",
          "/images/old-site/w7e341d172226001432d247a76c8310b/w7e94060e24290030c348d0744f13a7a/DSC_0305a.jpg",
          "/images/old-site/w7e341d172226001432d247a76c8310b/w7e94060e24290030c348d0744f13a7a/DSC_0498.jpg",
          "/images/old-site/w7e341d172226001432d247a76c8310b/w7e94060e24290030c348d0744f13a7a/DSC_0542.jpg"
        ]
      }
    ]
  },
  {
    litterName: "U-Wurf aus dem Emsland",
    date: "24.04.2023",
    father: "Dario vom Mühlendamm, sm",
    mother: "Questa aus dem Emsland, sm",
    parents: [
      { name: "Dario vom Mühlendamm", image: "/images/old-site/Dario_vom_Mühlendamm.jpg", role: "Vater" },
      { name: "Questa aus dem Emsland", image: "/images/old-site/Questa aus dem Emsland_Feb2020.jpg", role: "Mutter" }
    ],
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
    images: [
      "/images/old-site/U-Wurf_5.Woche_10.jpg",
      "/images/old-site/U-Wurf_5.Woche_8.jpg",
      "/images/old-site/U-Wurf_8.Woche_Usaro.jpg",
      "/images/old-site/U-Wurf_8.Woche_Usana.jpg"
    ],
    updates: [
      {
        title: "Urus aus dem Emsland, Europasieger 2025, German Winner 2025, Best Of Breed 2025 im In- und Ausland",
        dateLabel: "Saison 2025",
        excerpt:
          "Urus aus dem Emsland wurde Europasieger 2025, German Winner 2025 und Best of Breed 2025 im In- und Ausland. Wir sind sehr stolz auf diese herausragenden Erfolge!",
        image: "/images/old-site/w7e341d172226001432d247a76c8310b/w7e951a0b2c310021ead1acc6d2551d4/whatsapp-image-2025-05-26-at-10.52.04-_3__1_.jpg",
        images: [
          "/images/old-site/w7e341d172226001432d247a76c8310b/w7e951a0b2c310021ead1acc6d2551d4/whatsapp-image-2025-05-26-at-10.52.04-_3__1_.jpg"
        ]
      },
      {
        title: "Nachzuchtbeurteilung U-Wurf",
        dateLabel: "16.03.2024",
        excerpt:
          "Sechs von sieben Welpen aus dem U-Wurf haben in Delmenhorst erfolgreich an der Nachzuchtbeurteilung teilgenommen.",
        image: "/images/wuerfe/u-wurf-nachzucht.jpg",
        images: [
          "/images/wuerfe/u-wurf-nachzucht.jpg"
        ]
      },
      {
        title: "Welpentreffen vom U-Wurf",
        dateLabel: "01.10.2023",
        excerpt: "Ein toller Tag mit dem U-Wurf! Viele Welpen und ihre Besitzer kamen zum gemeinsamen Treffen zusammen.",
        image: "/images/old-site/Welpentreffen_1.jpg",
        images: [
          "/images/old-site/Welpentreffen_0.jpg",
          "/images/old-site/Welpentreffen_1.jpg",
          "/images/old-site/Welpentreffen_2.jpg",
          "/images/old-site/Welpentreffen_3.jpg",
          "/images/old-site/Welpentreffen_4.jpg",
          "/images/old-site/Welpentreffen_5.jpg",
          "/images/old-site/Welpentreffen_6.jpg",
          "/images/old-site/Welpentreffen_7.jpg",
          "/images/old-site/Welpentreffen_8.jpg",
          "/images/old-site/Welpentreffen_9.jpg",
          "/images/old-site/Welpentreffen_10.jpg",
          "/images/old-site/Welpentreffen_11.jpg",
          "/images/old-site/Welpentreffen_12.1.jpg"
        ]
      }
    ]
  },
  {
    litterName: "T-Wurf aus dem Emsland",
    date: "26.10.2021",
    father: "Eddy vom Hagenauer Forst, sm",
    mother: "Questa aus dem Emsland, sm",
    parents: [
      { name: "Eddy vom Hagenauer Forst", image: "/images/old-site/Eddy.jpg", role: "Vater" },
      { name: "Questa aus dem Emsland", image: "/images/old-site/Questa aus dem Emsland_Feb2020.jpg", role: "Mutter" }
    ],
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
    images: [
      "/images/old-site/T-Wurf_181121_a.jpg",
      "/images/old-site/T-Wurf_181121_g.jpg",
      "/images/old-site/T-Wurf_301121_a.jpg",
      "/images/old-site/T-Wurf_181221_e.jpg"
    ]
  },
  {
    litterName: "S-Wurf aus dem Emsland",
    date: "28.01.2021",
    father: "Bacley vom Ilsesee, sm",
    mother: "Questa aus dem Emsland, sm",
    parents: [
      { name: "Bacley vom Ilsesee", image: "/images/old-site/Bacley_3.jpg", role: "Vater" },
      { name: "Questa aus dem Emsland", image: "/images/old-site/Questa aus dem Emsland_Feb2020.jpg", role: "Mutter" }
    ],
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
    images: [
      "/images/old-site/S-Wurf_4Woche_Garten5.jpg",
      "/images/old-site/s-wurf_5wochen_umzug10.jpg",
      "/images/old-site/s-wurf_7wochen_spielen1.jpg",
      "/images/old-site/S-Wurf_7Wochen_Hundeplatz7.jpg"
    ],
    updates: [
      {
        title: "S-Wurf Welpentreffen",
        dateLabel: "08.08.2021",
        excerpt: "Welpentreffen vom S-Wurf aus dem Emsland in Meppen.",
        image: "/images/wuerfe/s-wurf-treffen.jpg",
        images: [
          "/images/wuerfe/s-wurf-treffen.jpg",
          "/images/old-site/Welpentreffen_52.jpg",
          "/images/old-site/Welpentreffen_40.jpg",
          "/images/old-site/Welpentreffen_17.jpg",
          "/images/old-site/Welpentreffen_49.jpg",
          "/images/old-site/Welpentreffen_47.jpg",
          "/images/old-site/Welpentreffen_48.jpg",
          "/images/old-site/Welpentreffen_22.jpg",
          "/images/old-site/Welpentreffen_27.jpg",
          "/images/old-site/Welpentreffen_31.jpg",
          "/images/old-site/Welpentreffen_34.jpg"
        ]
      }
    ]
  },
  {
    litterName: "R-Wurf aus dem Emsland",
    date: "08.06.2019",
    father: "Cito vom Pferdebach, sm",
    mother: "Questa aus dem Emsland, sm",
    parents: [
      { name: "Cito vom Pferdebach", image: "/images/old-site/Cito_Standbild.jpg", role: "Vater" },
      { name: "Questa aus dem Emsland", image: "/images/old-site/Questa aus dem Emsland_Feb2020.jpg", role: "Mutter" }
    ],
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
    images: [
      "/images/old-site/IMG_7757.jpg",
      "/images/old-site/IMG_7766.jpg",
      "/images/old-site/IMG_7814.jpg",
      "/images/old-site/IMG_7850.jpg"
    ],
    updates: [
      {
        title: "R-Wurf Welpentreffen",
        dateLabel: "12.01.2020",
        excerpt: "Welpentreffen vom R-Wurf aus dem Emsland in Bobenheim-Roxheim.",
        image: "/images/wuerfe/r-wurf-treffen.jpg",
        images: [
          "/images/wuerfe/r-wurf-treffen.jpg",
          "/images/old-site/IMG_4139-Renner.jpg",
          "/images/old-site/IMG_4124-Ringo.jpg",
          "/images/old-site/IMG_4112-Rufus.jpg",
          "/images/old-site/IMG_4084-Räuber.jpg",
          "/images/old-site/IMG_4169.jpg",
          "/images/old-site/IMG_4093-Ronja.jpg"
        ]
      }
    ]
  },
  {
    litterName: "Q-Wurf aus dem Emsland",
    date: "14.07.2016",
    father: "Arigo von den Kurpfalzjägern, sm",
    mother: "Jara vom Eichenkönig, s",
    parents: [
      { name: "Arigo von den Kurpfalzjägern", image: "/images/old-site/w7e341d172226001432d247a76c8310b/Arigo_von_den_Kurpfalzjaegern.jpg", role: "Vater" },
      { name: "Jara vom Eichenkönig", image: "/images/old-site/w7e341d172226001432d247a76c8310b/Jara vom Eichenkönig.jpg", role: "Mutter" }
    ],
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
    images: [
      "/images/old-site/w7e341d172226001432d247a76c8310b/Q_Wurf_Woche7_s.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/quessa.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/Jara und Questa.jpg"
    ],
    updates: [
      {
        title: "ZTP von Questa",
        dateLabel: "15.09.2018",
        excerpt: "ZTP von Questa in Gummersbach.",
        image: "/images/hunde/questa-ztp.jpg",
        images: [
          "/images/hunde/questa-ztp.jpg",
          "/images/old-site/DSC_4591.jpg",
          "/images/old-site/DSC_4604.jpg",
          "/images/old-site/DSC_4610.jpg",
          "/images/old-site/DSC_4618.jpg",
          "/images/old-site/DSC_4624.jpg",
          "/images/old-site/DSC_4632.jpg",
          "/images/old-site/DSC_4647.jpg",
          "/images/old-site/DSC_4652.jpg"
        ]
      }
    ]
  },
  {
    litterName: "P-Wurf aus dem Emsland",
    date: "23.02.2016",
    father: "Aramis vom Mühlengeist, sm",
    mother: "Motzi aus dem Emsland, sm",
    parents: [
      { name: "Aramis vom Mühlengeist", image: "/images/old-site/w7e341d172226001432d247a76c8310b/Aramis_vom_Muehlengeist.png", role: "Vater" },
      { name: "Motzi aus dem Emsland", image: "/images/old-site/w7e341d172226001432d247a76c8310b/Motzi_2015.jpg", role: "Mutter" }
    ],
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
    images: [
      "/images/old-site/w7e341d172226001432d247a76c8310b/P_Wurf_Woche8_a.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/Pelle_2.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/penga.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/pinto.jpg"
    ]
  },
  {
    litterName: "O-Wurf aus dem Emsland",
    date: "10.10.2015",
    father: "Gauner vom Rehwinkel, sm",
    mother: "Jara vom Eichenkönig, s",
    parents: [
      { name: "Gauner vom Rehwinkel", image: "/images/old-site/w7e341d172226001432d247a76c8310b/Gauner vom Rehwinkel.jpg", role: "Vater" },
      { name: "Jara vom Eichenkönig", image: "/images/old-site/w7e341d172226001432d247a76c8310b/Jara vom Eichenkönig.jpg", role: "Mutter" }
    ],
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
    images: [
      "/images/old-site/w7e341d172226001432d247a76c8310b/O-Wurf_Woche7_d.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/O-Wurf_Woche7_e.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/Otis_1.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/Olivia_2.jpg"
    ]
  },
  {
    litterName: "N-Wurf aus dem Emsland",
    date: "02.03.2014",
    father: "Kalisto vom Gablitztal, sm",
    mother: "Jara vom Eichenkönig, s",
    parents: [
      { name: "Kalisto vom Gablitztal", image: "/images/old-site/w7e341d172226001432d247a76c8310b/Kalisto vom Gablitztal.jpg", role: "Vater" },
      { name: "Jara vom Eichenkönig", image: "/images/old-site/w7e341d172226001432d247a76c8310b/Jara vom Eichenkönig.jpg", role: "Mutter" }
    ],
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
    images: [
      "/images/old-site/N-Wurf_2.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/NZB_N-Wurf_neu.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/Nanga.jpg",
      "/images/old-site/Nero aus dem Emsland.jpg",
      "/images/old-site/Naxos aus dem Emsland 1_small.jpg"
    ]
  },
  {
    litterName: "M-Wurf aus dem Emsland",
    date: "06.06.2012",
    father: "Antares vom Vierseitenhof, sm",
    mother: "Jara vom Eichenkönig, s",
    parents: [
      { name: "Antares vom Vierseitenhof", image: "/images/old-site/w7e341d172226001432d247a76c8310b/Antares vom Vierseitenhof.png", role: "Vater" },
      { name: "Jara vom Eichenkönig", image: "/images/old-site/w7e341d172226001432d247a76c8310b/Jara vom Eichenkönig.jpg", role: "Mutter" }
    ],
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
    images: [
      "/images/old-site/w7e341d172226001432d247a76c8310b/M_Wurf.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/Minou.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/Motzi_2015.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/Mira.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/Morro aus dem Emsland.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/Mara.jpg"
    ],
    updates: [
      {
        title: "Morro: Deutscher Meister & Vize-Weltmeister",
        dateLabel: "Wettkampfsaison",
        excerpt:
          "Morro aus dem Emsland wurde Deutscher Meister der Fährtenhunde und Vize-Weltmeister bei den Internationalen Fährtenhunden.",
        image: "/images/wuerfe/morro-erfolg.jpg",
        images: [
          "/images/wuerfe/morro-erfolg.jpg",
          "/images/old-site/Sonja und Morro.jpg"
        ]
      }
    ]
  },
  {
    litterName: "L-Wurf aus dem Emsland",
    date: "10.11.2004",
    father: "Xymo vom Gablitztal, sm",
    mother: "Gana aus dem Emsland, s",
    parents: [
      { name: "Xymo vom Gablitztal", image: "/images/old-site/w7e341d172226001432d247a76c8310b/Xymo vom Gablitztal.png", role: "Vater" },
      { name: "Gana aus dem Emsland", image: "/images/old-site/w7e341d172226001432d247a76c8310b/Gana aus dem Emsland.png", role: "Mutter" }
    ],
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
    images: [
      "/images/old-site/w7e341d172226001432d247a76c8310b/L-Wurf Lady 28.11.2004.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/Lady aus dem Emsland.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/Luemmel.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/Luemmel aus dem Emsland_2.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/Lord aus dem Emsland.jpg"
    ]
  },
  {
    litterName: "K-Wurf aus dem Emsland",
    date: "10.03.2003",
    father: "Ambo vom Windrad, s",
    mother: "Gana aus dem Emsland, s",
    parents: [
      { name: "Ambo vom Windrad", image: "/images/old-site/w7e341d172226001432d247a76c8310b/Ambo vom Windrad.png", role: "Vater" },
      { name: "Gana aus dem Emsland", image: "/images/old-site/w7e341d172226001432d247a76c8310b/Gana aus dem Emsland.png", role: "Mutter" }
    ],
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
    images: [
      "/images/old-site/w7e341d172226001432d247a76c8310b/Kimba_1.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/Kimba_2.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/Karlo-aus-dem-Emsland.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/Karon_29.08.jpg"
    ]
  },
  {
    litterName: "J-Wurf aus dem Emsland",
    date: "04.05.2002",
    father: "Etienne vom Georgenberg, sm",
    mother: "Gana aus dem Emsland, s",
    parents: [
      { name: "Etienne vom Georgenberg", image: "/images/old-site/w7e341d172226001432d247a76c8310b/Etienne vom Georgenberg.jpg", role: "Vater" },
      { name: "Gana aus dem Emsland", image: "/images/old-site/w7e341d172226001432d247a76c8310b/Gana aus dem Emsland.png", role: "Mutter" }
    ],
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
    images: [
      "/images/old-site/w7e341d172226001432d247a76c8310b/Josta_aus_dem_Emsland.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/Joschi_aus_dem_Emsland.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/Joschi aus dem Emsland.jpg"
    ]
  },
  {
    litterName: "I-Wurf aus dem Emsland",
    date: "12.10.2000",
    father: "Dino vom Holter Berg, sm",
    mother: "Gana aus dem Emsland, s",
    parents: [
      { name: "Dino vom Holter Berg", image: "/images/old-site/w7e341d172226001432d247a76c8310b/Dino vom Holter Berg.png", role: "Vater" },
      { name: "Gana aus dem Emsland", image: "/images/old-site/w7e341d172226001432d247a76c8310b/Gana aus dem Emsland.png", role: "Mutter" }
    ],
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
    images: [
      "/images/old-site/w7e341d172226001432d247a76c8310b/Ibara_2.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/Isha-aus-dem-Emsland.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/Izzo_2.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/Iaron.jpg"
    ]
  },
  {
    litterName: "H-Wurf aus dem Emsland",
    date: "20.03.1998",
    father: "Andrino vom Kressbach, sm",
    mother: "Coco aus dem Emsland, s",
    parents: [
      { name: "Andrino vom Kressbach", image: "/images/old-site/w7e341d172226001432d247a76c8310b/Andrino vom Kressbach.png", role: "Vater" },
      { name: "Coco aus dem Emsland", image: "/images/old-site/w7e341d172226001432d247a76c8310b/Coco aus dem Emsland.jpg", role: "Mutter" }
    ],
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
    images: [
      "/images/old-site/w7e341d172226001432d247a76c8310b/Heli_2.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/harras.jpg"
    ]
  },
  {
    litterName: "G-Wurf aus dem Emsland",
    date: "06.05.1997",
    father: "Branco vom Schlangenweiher, sm",
    mother: "Coco aus dem Emsland, s",
    parents: [
      { name: "Branco vom Schlangenweiher", image: "/images/old-site/w7e341d172226001432d247a76c8310b/Branco vom Schlangenweiher.jpg", role: "Vater" },
      { name: "Coco aus dem Emsland", image: "/images/old-site/w7e341d172226001432d247a76c8310b/Coco aus dem Emsland.jpg", role: "Mutter" }
    ],
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
    images: [
      "/images/old-site/w7e341d172226001432d247a76c8310b/Gana_Welpentreffen K-Wurf.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/Ginger_2.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/Gismo_2.jpg"
    ]
  },
  {
    litterName: "F-Wurf aus dem Emsland",
    date: "26.05.1996",
    father: "Arco vom Starendorf, bl",
    mother: "Coco aus dem Emsland, s",
    parents: [
      { name: "Arco vom Starenberg", image: "/images/old-site/w7e341d172226001432d247a76c8310b/Arco vom Starenberg.jpg", role: "Vater" },
      { name: "Coco aus dem Emsland", image: "/images/old-site/w7e341d172226001432d247a76c8310b/Coco aus dem Emsland.jpg", role: "Mutter" }
    ],
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
    images: [
      "/images/old-site/w7e341d172226001432d247a76c8310b/Fanny_2.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/faron2.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/Flair 3.jpg"
    ]
  },
  {
    litterName: "E-Wurf aus dem Emsland",
    date: "07.08.1995",
    father: "Fendor ut'n Eekholt, bl",
    mother: "Coco aus dem Emsland, s",
    parents: [
      { name: "Fendor ut'n Eekholt", image: "/images/old-site/w7e341d172226001432d247a76c8310b/Fendor ut'n Eekholt.jpg", role: "Vater" },
      { name: "Coco aus dem Emsland", image: "/images/old-site/w7e341d172226001432d247a76c8310b/Coco aus dem Emsland.jpg", role: "Mutter" }
    ],
    count: "3 Rüden, 3 Hündinnen",
    descendants: [
      "Earon: HD-n.geröngt, NZB",
      "Elan: HD-A1, NZB, ZTP",
      "Enzo: HD-Frei, NZB, JB, ZTP, BH, IPO III, VPG III, FH I (Deckrüde)",
      "Edna: HD-A1, NZB, JB, ZTP, BH, VPG III",
      "Esra: HD-Frei, NZB, JB, ZTP",
      "Eyla: HD-Frei, NZB"
    ],
    images: [
      "/images/old-site/w7e341d172226001432d247a76c8310b/Eyla_2.jpg"
    ]
  },
  {
    litterName: "D-Wurf aus dem Emsland",
    date: "27.05.1993",
    father: "Aurich vom Oberwald, bl",
    mother: "Iskia von Ascona, s",
    parents: [
      { name: "Aurich vom Oberwald", image: "/images/old-site/w7e341d172226001432d247a76c8310b/Aurich vom Oberwald.jpg", role: "Vater" },
      { name: "Iskia von Ascona", image: "/images/old-site/w7e341d172226001432d247a76c8310b/Iskia von Ascona.jpg", role: "Mutter" }
    ],
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
    images: [
      "/images/old-site/w7e341d172226001432d247a76c8310b/Dolf aus dem Emsland.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/Dolf_2b.jpg",
      "/images/old-site/Darius aus dem Emsland.jpg",
      "/images/old-site/Welpentreffen D-Wurf.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/001.jpg"
    ]
  },
  {
    litterName: "C-Wurf aus dem Emsland",
    date: "28.02.1992",
    father: "Hova Bondes Arek, bl",
    mother: "Iskia von Ascona, s",
    parents: [
      { name: "Hova Bondes Arek", image: "/images/old-site/w7e341d172226001432d247a76c8310b/Hova Bondes Arek.png", role: "Vater" },
      { name: "Iskia von Ascona", image: "/images/old-site/w7e341d172226001432d247a76c8310b/Iskia von Ascona.jpg", role: "Mutter" }
    ],
    count: "2 Rüden (bl), 3 Hündinnen (1x s, 2x bl)",
    descendants: [
      "Cambo: HD-frei, NZB, JB, ZTP, BH, AD",
      "Caron: HD-M, NZB, JB, AD",
      "Cara: HD-A, NZB, JB, ZTP, BH, AD (Zuchthündin)",
      "Coco: HD-A, NZB, JB, ZTP, BH, VPG I (Zuchthündin)",
      "Cuga: HD-A, NZB, 2x ZTP, BH, AD (Zuchthündin)"
    ],
    images: [
      "/images/old-site/Cara aus dem Emsland.jpg",
      "/images/old-site/Cambo aus dem Emsland.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/Cambo_2.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/Coco_2.jpg"
    ]
  },
  {
    litterName: "B-Wurf aus dem Emsland",
    date: "13.11.1990",
    father: "Lerry von der Birkenheide, bl",
    mother: "Iskia von Ascona, s",
    parents: [
      { name: "Lerry von der Birkenheide", image: "/images/old-site/w7e341d172226001432d247a76c8310b/lerri-von-der-birkenheide.jpg", role: "Vater" },
      { name: "Iskia von Ascona", image: "/images/old-site/w7e341d172226001432d247a76c8310b/Iskia von Ascona.jpg", role: "Mutter" }
    ],
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
    images: [
      "/images/old-site/w7e341d172226001432d247a76c8310b/B-Wurf.jpg",
      "/images/old-site/Baron aus dem Emsland.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/Baldo aus dem Emsland_1.jpg",
      "/images/old-site/w7e341d172226001432d247a76c8310b/Baldo aus dem Emsland_2.jpg"
    ]
  },
  {
    litterName: "A-Wurf aus dem Emsland",
    date: "23.06.1989",
    father: "Cornett vom Enzblick, bl",
    mother: "Iskia von Ascona, s",
    parents: [
      { name: "Cornett vom Enzblick", image: "/images/old-site/w7e341d172226001432d247a76c8310b/Cornett vom Enzblick.jpg", role: "Vater" },
      { name: "Iskia von Ascona", image: "/images/old-site/w7e341d172226001432d247a76c8310b/Iskia von Ascona.jpg", role: "Mutter" }
    ],
    count: "2 Rüden",
    descendants: [
      "Aaron: HD-Frei, JB, ZTP",
      "Astor: HD-V, JB, ZTP"
    ],
    images: [
      "/images/old-site/w7e341d172226001432d247a76c8310b/A-Wurf.jpg",
      "/images/old-site/Aaron aus dem Emsland.jpg",
      "/images/old-site/Astor aus dem Emsland.jpg",
      "/images/old-site/Astor aus dem Emsland_2.jpg"
    ]
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
    title: "1. Datenschutz auf einen Blick",
    body:
      "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung."
  },
  {
    title: "2. Hosting und Content Delivery Networks (CDN)",
    body:
      "Wir hosten unsere Website bei Vercel. Anbieter ist die Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. Vercel ist ein Cloud-Service-Anbieter, über den unsere Website bereitgestellt und ausgeliefert wird. Wir nutzen Serverstandorte innerhalb der Europäischen Union bzw. in Deutschland, um ein hohes Datenschutzniveau zu gewährleisten. Die Nutzung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website."
  },
  {
    title: "3. Datenerfassung auf dieser Website",
    body:
      "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen. Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z. B. per E-Mail). Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs)."
  },
  {
    title: "4. Server-Log-Dateien",
    body:
      "Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen."
  },
  {
    title: "5. SSL- bzw. TLS-Verschlüsselung",
    body:
      "Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von 'http://' auf 'https://' wechselt und an dem Schloss-Symbol in Ihrer Browserzeile."
  },
  {
    title: "6. Ihre Rechte (Auskunft, Löschung, Sperrung)",
    body:
      "Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden."
  },
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

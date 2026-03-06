import type { MetadataRoute } from "next";

const routes = [
  "",
  "aktuelles",
  "unsere-zucht",
  "unsere-hunde",
  "unsere-wuerfe",
  "impressum",
  "kontakt",
  "datenschutz",
  "links"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://www.emsland-hovawarte.de/${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}

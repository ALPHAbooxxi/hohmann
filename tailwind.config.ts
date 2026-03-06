import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          sand: "#f4efe7",
          clay: "#d9c4ac",
          bark: "#8e623f",
          barkDark: "#5f3f26",
          moss: "#556b49",
          ink: "#2a2320"
        }
      },
      boxShadow: {
        card: "0 12px 32px rgba(46, 33, 22, 0.12)",
        soft: "0 8px 26px rgba(46, 33, 22, 0.08)"
      },
      maxWidth: {
        content: "1180px"
      },
      backgroundImage: {
        "hero-overlay": "linear-gradient(110deg, rgba(32,25,21,.72) 8%, rgba(32,25,21,.26) 55%, rgba(32,25,21,.1) 100%)"
      }
    }
  },
  plugins: []
};

export default config;

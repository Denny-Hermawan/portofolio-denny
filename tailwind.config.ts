import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Menjadikan Montserrat sebagai font default (sans)
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        // Palet warna tema gelap premium
        primary: "#1A535C",         // Teal gelap untuk elemen background/aksen halus
        "primary-light": "#4ECDC4", // Teal terang untuk teks penting/tombol
        dark: "#0a0a0a",            // Hitam hampir pekat untuk latar utama
        "dark-secondary": "#121212",// Hitam sedikit terang untuk kartu
      },
    },
  },
  plugins: [],
};
export default config;
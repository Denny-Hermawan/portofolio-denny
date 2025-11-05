import type { Metadata } from "next";
// Menggunakan next/font/google agar otomatis optimized
import { Montserrat } from "next/font/google";
import "./globals.css";

// Setup Font Montserrat dengan semua varian weight yang dibutuhkan
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat", // Variabel CSS untuk Tailwind
  display: "swap",
});

export const metadata: Metadata = {
  title: "Denny Hermawan | Software Developer",
  description: "Portofolio resmi Denny Hermawan - Spesialis Mobile (Flutter) & Web (Laravel, Next.js).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // scroll-smooth agar saat klik link navigasi, layarnya bergulir halus
    <html lang="id" className="scroll-smooth">
      <body className={`${montserrat.variable} font-sans bg-dark text-gray-300 antialiased`}>
        {children}
      </body>
    </html>
  );
}
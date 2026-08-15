import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SiteScripts from "@/components/SiteScripts";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Orchard Orthodontics — Specialist Orthodontists in London",
    template: "%s | Orchard Orthodontics",
  },
  description:
    "Award-winning specialist orthodontists in Croydon, Brixton & Guildford. Invisalign, Damon braces, NHS braces and AI monitoring. Book a free consultation today.",
  metadataBase: new URL("https://www.orchardortho.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={outfit.variable}>
      <body>
        {children}
        <SiteScripts />
      </body>
    </html>
  );
}

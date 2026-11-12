import type { Metadata } from "next";
import { Press_Start_2P, Poppins, Pixelify_Sans } from "next/font/google";
import "./globals.css";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

const pixelifySans = Pixelify_Sans({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-sub",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PORSEMATIK 2026 — Ignite the Summit",
  description:
    "Official Landing Page PORSEMATIK feat. Milad Informatika Ke-32 Universitas Islam Indonesia. 8-Bit Retro Pixel Art Platformer & Mountain Summit.",
  keywords: [
    "PORSEMATIK",
    "PORSEMATIK 2026",
    "Milad Informatika",
    "Informatika UII",
    "HMIF LEM FTI UII",
    "VibeIT",
    "Informatics Connect",
  ],
  authors: [{ name: "HMIF LEM FTI UII" }],
  openGraph: {
    title: "PORSEMATIK 2026 — Ignite the Summit",
    description:
      "Official Landing Page PORSEMATIK feat. Milad Informatika Ke-32 Universitas Islam Indonesia. 8-Bit Retro Pixel Art Platformer & Mountain Summit.",
    url: "https://porsematik2026.my.id",
    siteName: "PORSEMATIK 2026",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${pressStart2P.variable} ${poppins.variable} ${pixelifySans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

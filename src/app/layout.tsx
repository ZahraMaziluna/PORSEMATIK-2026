import type { Metadata, Viewport } from "next";
import { Press_Start_2P, Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlobalSoundHandler from "@/components/layout/GlobalSoundHandler";
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

const SITE_DESCRIPTION =
  "Official Landing Page PORSEMATIK feat. Milad Informatika Ke-32 Universitas Islam Indonesia. 8-Bit Retro Pixel Art Platformer & Mountain Summit.";

export const metadata: Metadata = {
  title: {
    default: "PORSEMATIK 2026: Ignite the Summit",
    template: "%s | PORSEMATIK 2026",
  },
  description: SITE_DESCRIPTION,
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
    title: "PORSEMATIK 2026: Ignite the Summit",
    description: SITE_DESCRIPTION,
    url: "https://porsematik2026.my.id",
    siteName: "PORSEMATIK 2026",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${pressStart2P.variable} ${poppins.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Lewati ke konten utama
        </a>
        <GlobalSoundHandler />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

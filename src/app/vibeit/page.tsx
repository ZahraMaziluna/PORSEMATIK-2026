import type { Metadata } from "next";
import VibeItSection from "@/components/sections/VibeItSection";
import PixelDivider from "@/components/layout/PixelDivider";

export const metadata: Metadata = {
  title: "VibeIT",
  description: "VibeIT: workshop vibe coding untuk 50 siswa SMA/SLTA sederajat bersama GDGOC UII, 21 November 2026.",
};

export default function VibeItPage() {
  return (
    <main id="main" className="page">
      <VibeItSection />
      <PixelDivider color="#1E293B" background="#FFFDF9" />
    </main>
  );
}

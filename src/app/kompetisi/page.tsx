import type { Metadata } from "next";
import Competitions from "@/components/sections/Competitions";
import PixelDivider from "@/components/layout/PixelDivider";

export const metadata: Metadata = {
  title: "Kompetisi",
  description:
    "Katalog 6 cabang lomba PORSEMATIK 2026: Futsal, Basket, Mobile Legends, Poster Digital, Fotografi, dan UI/UX, lengkap dengan hadiah dan E-Guidebook.",
};

export default function KompetisiPage() {
  return (
    <main id="main" className="page">
      <Competitions />
      <PixelDivider color="#1E293B" background="#FFFDF9" />
    </main>
  );
}

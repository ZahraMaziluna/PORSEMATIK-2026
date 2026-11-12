import type { Metadata } from "next";
import Faq from "@/components/sections/Faq";
import PixelDivider from "@/components/layout/PixelDivider";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Pertanyaan yang sering ditanyakan seputar PORSEMATIK feat. Milad Informatika 2026.",
};

export default function FaqPage() {
  return (
    <main id="main" className="page">
      <Faq />
      <PixelDivider color="#1E293B" background="#FFFDF9" />
    </main>
  );
}

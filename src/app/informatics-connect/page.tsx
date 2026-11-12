import type { Metadata } from "next";
import ConnectSection from "@/components/sections/ConnectSection";
import PixelDivider from "@/components/layout/PixelDivider";

export const metadata: Metadata = {
  title: "Informatics Connect",
  description: "Rangkaian acara Informatics Connect Milad Informatika ke-32 untuk mahasiswa, dosen, dan alumni.",
};

export default function InformaticsConnectPage() {
  return (
    <main id="main" className="page">
      <ConnectSection />
      <PixelDivider color="#1E293B" background="#FFFDF9" />
    </main>
  );
}

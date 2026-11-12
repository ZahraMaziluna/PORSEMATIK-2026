import type { Metadata } from "next";
import Leaderboard from "@/components/Leaderboard";
import PixelDivider from "@/components/PixelDivider";

export const metadata: Metadata = {
  title: "Klasemen",
  description: "Klasemen Juara Umum Angkatan PORSEMATIK feat. Milad Informatika 2026.",
};

export default function KlasemenPage() {
  return (
    <main id="main" className="page">
      <Leaderboard />
      <PixelDivider color="#1E293B" background="#FEFCE8" />
    </main>
  );
}

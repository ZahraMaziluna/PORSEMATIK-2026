import type { Metadata } from "next";
import Schedule from "@/components/schedule/Schedule";
import EventsHighlight from "@/components/schedule/EventsHighlight";
import PixelDivider from "@/components/layout/PixelDivider";

export const metadata: Metadata = {
  title: "Jadwal",
  description: "Jadwal 6 stage PORSEMATIK feat. Milad Informatika 2026, 16 sampai 22 November 2026.",
};

export default function JadwalPage() {
  return (
    <main id="main" className="page">
      <Schedule />
      <PixelDivider color="#FAF8F5" background="#F0FDF4" />
      <EventsHighlight />
      <PixelDivider color="#1E293B" background="#FAF8F5" />
    </main>
  );
}

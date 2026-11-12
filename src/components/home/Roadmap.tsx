import React from "react";
import Link from "next/link";
import RoadTimeline from "@/components/RoadTimeline";
import { STAGES } from "@/data/roadmap";

export default function Roadmap() {
  return (
    <section className="roadmap" id="roadmap">
      <div className="container">
        <h2 className="section-title reveal">Roadmap Acara</h2>
        <p className="section-subtitle reveal">
          Perjalanan 6 stage PORSEMATIK feat. Milad Informatika, 16 sampai 22 November 2026.
        </p>

        <RoadTimeline stages={STAGES} />

        <div className="section-more">
          <Link href="/jadwal" className="btn-pixel">
            [ LIHAT JADWAL LENGKAP ]
          </Link>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import RoadTimeline from "@/components/RoadTimeline";
import { STAGES } from "@/data/roadmap";

export default function Schedule() {
  return (
    <section className="roadmap" id="schedule">
      <div className="container">
        <span className="vibe-tag" style={{ background: "#DCFCE7", color: "#15803D" }}>
          WORLD MAP • 6 STAGES
        </span>
        <h2 className="section-title reveal" style={{ marginTop: ".4rem" }}>
          Jadwal Pelaksanaan Acara
        </h2>
        <p className="section-subtitle reveal">
          Rangkaian 6 stage kompetisi dan kegiatan PORSEMATIK feat. Milad Informatika Tahun 2026.
        </p>

        <RoadTimeline stages={STAGES} />
      </div>
    </section>
  );
}

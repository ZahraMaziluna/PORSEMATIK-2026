import React from "react";
import Link from "next/link";
import PixelIcon, { type PixelIconName } from "@/components/icons/PixelIcon";

const VIBEIT_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScuKliSypDmIJL__CyamGvfZk9dehMoDlrBSP0lsdIi-D0bHg/viewform?usp=publish-editor";

/* Ringkasan dari VibeItSection.tsx (halaman /vibeit). Ubah keduanya bila jadwal atau kuota berubah. */
const INFO: ReadonlyArray<{
  tone: "mint" | "peach" | "sky" | "yellow";
  icon: PixelIconName;
  color: string;
  label: string;
  value: string;
  sub: string;
}> = [
  { tone: "mint", icon: "flag", color: "#15803D", label: "HARI & TANGGAL", value: "Sabtu, 21 November 2026", sub: "07.30 – 11.00 WIB, 210 menit" },
  { tone: "peach", icon: "pin", color: "#C2410C", label: "TEMPAT", value: "Ruang Kelas 3.2 Lab FTI UII", sub: "Lantai 3 Gedung KH Mas Mansur" },
  { tone: "sky", icon: "code", color: "#0369A1", label: "MATERI", value: "Vibe Coding dengan AI", sub: "Praktik deploy landing page UMKM lewat Lovable AI" },
  { tone: "yellow", icon: "users", color: "#92400E", label: "KUOTA PESERTA", value: "Terbatas 50 Siswa", sub: "Khusus siswa SMA/SLTA sederajat" },
];

export default function VibeItHighlight() {
  return (
    <section className="vibeit vibeit--highlight" id="vibeit-highlight">
      <div className="container">
        <div className="vibeit__header reveal">
          <span className="vibe-badge">EVENT HIGHLIGHT • COLLAB WITH GDGOC UII</span>
          <h2 className="section-title">VibeIT: AI Vibe Coding Workshop</h2>
          <p className="section-subtitle">
            Workshop untuk siswa SMA/SLTA sederajat yang ingin mencoba membuat dan mempublikasikan website dengan bantuan AI,
            sekaligus mengenal Program Studi Informatika FTI UII.
          </p>
        </div>

        <div className="vibe-info-grid reveal">
          {INFO.map((item) => (
            <div className={`vibe-card vibe-card--${item.tone}`} key={item.label}>
              <div className="vibe-card__icon" style={{ color: item.color }}>
                <PixelIcon name={item.icon} className="px-icon--md" />
              </div>
              <div className="vibe-card__label">{item.label}</div>
              <div className="vibe-card__val">{item.value}</div>
              <div className="vibe-card__sub">{item.sub}</div>
            </div>
          ))}
        </div>

        <div className="vibe-actions reveal">
          <a href={VIBEIT_FORM_URL} className="btn-pixel" target="_blank" rel="noopener noreferrer">
            [ DAFTAR VIBEIT ]
          </a>
          <Link href="/vibeit" className="btn-pixel btn-pixel--secondary">
            [ LIHAT DETAIL ]
          </Link>
        </div>
      </div>
    </section>
  );
}

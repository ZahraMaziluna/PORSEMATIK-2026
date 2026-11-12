"use client";

import React, { useState } from "react";
import { useSound } from "@/hooks/useSound";

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>(null);
  const { playClick } = useSound();

  return (
<section className="faq" id="faq">
  <div className="container" style={{textAlign: "center"}}>
    <span className="vibe-tag" style={{background: "#FFE4D6", color: "#EA580C"}}>TANYA JAWAB RESMI</span>
    <h2 className="section-title reveal" style={{color: "var(--arcade-orange) !important", marginTop: ".4rem", textAlign: "center"}}>FAQ</h2>
    <p className="section-subtitle reveal" style={{color: "#64748B !important", textAlign: "center"}}>Pertanyaan yang sering ditanyakan seputar PORSEMATIK feat. Milad Informatika 2026.</p>

    <div className="faq-list reveal" style={{maxWidth: "840px", margin: "0 auto", textAlign: "left"}}>
      {/*  1  */}
      <div className="faq-item">
        <button className="faq-question">
          <span>Siapa saja yang dapat mengikuti PORSEMATIK feat. Milad Informatika 2026?</span>
          <span className="faq-icon">▶</span>
        </button>
        <div className="faq-answer">
          Mahasiswa aktif Program Studi Informatika FTI UII angkatan <strong>2023, 2024, 2025, dan 2026</strong> untuk seluruh cabang lomba; Civitas Akademika (Mahasiswa, Dosen, dan Alumni) untuk mata acara <strong>Informatics Connect</strong>; serta <strong>50 Siswa SMA/SLTA sederajat</strong> khusus untuk workshop <strong>VibeIT</strong>.
        </div>
      </div>

      {/*  2  */}
      <div className="faq-item">
        <button className="faq-question">
          <span>Kapan jadwal pendaftaran lomba dan Technical Meeting?</span>
          <span className="faq-icon">▶</span>
        </button>
        <div className="faq-answer">
          Pendaftaran dibuka mulai <strong>10 November 2026 pukul 12.00 WIB</strong> hingga <strong>13 November 2026 pukul 12.00 WIB</strong> melalui tautan resmi di <a href="https://linktr.ee/porsematik2026" target="_blank" rel="noopener" style={{color: "var(--pixel-green)", fontWeight: "bold"}}>linktr.ee/porsematik2026</a>. Sedangkan <strong>Technical Meeting (TM) daring</strong> dilaksanakan pada hari <strong>Sabtu, 14 November 2026</strong> via Zoom / Google Meet.
        </div>
      </div>

      {/*  3  */}
      <div className="faq-item">
        <button className="faq-question">
          <span>Bagaimana syarat mendapatkan E-Sertifikat di acara VibeIT?</span>
          <span className="faq-icon">▶</span>
        </button>
        <div className="faq-answer">
          Peserta wajib hadir mengikuti rangkaian sesi materi hingga sesi praktik pembuatan landing page UMKM menggunakan <strong>Lovable AI</strong>, serta wajib <strong>mengumpulkan link hasil deploy landing page</strong> pada form resmi panitia sebelum batas waktu yang ditentukan.
        </div>
      </div>

      {/*  4  */}
      <div className="faq-item">
        <button className="faq-question">
          <span>Apa saja syarat memasuki venue acara dan pertandingan?</span>
          <span className="faq-icon">▶</span>
        </button>
        <div className="faq-answer">
          Seluruh pengunjung, suporter, dan peserta wajib <strong>berpakaian sopan, rapi, dan menutup aurat</strong>, serta wajib menukarkan <strong>KTM asli</strong> dengan Co-Card di pos screening keamanan panitia sebelum memasuki arena GOR Ki Bagoes Hadikoesoemo maupun Auditorium FTI UII.
        </div>
      </div>

      {/*  5  */}
      <div className="faq-item">
        <button className="faq-question">
          <span>Apa saja barang yang wajib dibawa dan dilarang di area acara?</span>
          <span className="faq-icon">▶</span>
        </button>
        <div className="faq-answer">
          <strong>Wajib dibawa:</strong> Botol minum pribadi (tumbler), KTM asli, dan jas hujan ponco atau payung lipat.<br />
          <strong>Dilarang keras:</strong> Membawa kemasan sekali pakai/sampah plastik, rokok/vape/pod, senjata tajam, minuman keras/NAPZA, melakukan provokasi bernada SARA, serta dilarang mengenakan perhiasan/aksesori berlebih saat bertanding di lapangan.
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

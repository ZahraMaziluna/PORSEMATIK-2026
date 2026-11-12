"use client";

import React, { useState } from "react";
import { useSound } from "@/hooks/useSound";
import PixelIcon from "@/components/icons/PixelIcon";

interface FaqItemData {
  id: number;
  question: string;
  answer: React.ReactNode;
}

const faqItems: FaqItemData[] = [
  {
    id: 1,
    question: "Siapa saja yang dapat mengikuti PORSEMATIK feat. Milad Informatika 2026?",
    answer: (
      <>
        Mahasiswa aktif Program Studi Informatika FTI UII angkatan{" "}
        <strong>2023, 2024, 2025, dan 2026</strong> untuk seluruh cabang lomba; Civitas Akademika
        (Mahasiswa, Dosen, dan Alumni) untuk mata acara <strong>Informatics Connect</strong>; serta{" "}
        <strong>50 Siswa SMA/SLTA sederajat</strong> khusus untuk workshop <strong>VibeIT</strong>.
      </>
    ),
  },
  {
    id: 2,
    question: "Kapan jadwal pendaftaran lomba dan Technical Meeting?",
    answer: (
      <>
        Pendaftaran dibuka mulai <strong>10 November 2026 pukul 12.00 WIB</strong> hingga{" "}
        <strong>13 November 2026 pukul 12.00 WIB</strong> melalui tautan resmi di{" "}
        <a
          href="https://linktr.ee/porsematik2026"
          target="_blank"
          rel="noopener"
          style={{ color: "var(--pixel-green)", fontWeight: "bold" }}
        >
          linktr.ee/porsematik2026
        </a>
        . Sedangkan <strong>Technical Meeting (TM) daring</strong> dilaksanakan pada hari{" "}
        <strong>Sabtu, 14 November 2026</strong> via Zoom / Google Meet.
      </>
    ),
  },
  {
    id: 3,
    question: "Bagaimana syarat mendapatkan E-Sertifikat di acara VibeIT?",
    answer: (
      <>
        Peserta wajib hadir mengikuti rangkaian sesi materi hingga sesi praktik pembuatan landing
        page UMKM menggunakan <strong>Lovable AI</strong>, serta wajib{" "}
        <strong>mengumpulkan link hasil deploy landing page</strong> pada form resmi panitia sebelum
        batas waktu yang ditentukan.
      </>
    ),
  },
  {
    id: 4,
    question: "Apa saja syarat memasuki venue acara dan pertandingan?",
    answer: (
      <>
        Seluruh pengunjung, suporter, dan peserta wajib{" "}
        <strong>berpakaian sopan, rapi, dan menutup aurat</strong>, serta wajib menukarkan{" "}
        <strong>KTM asli</strong> dengan Co-Card di pos screening keamanan panitia sebelum memasuki
        arena GOR Ki Bagoes Hadikoesoemo maupun Auditorium FTI UII.
      </>
    ),
  },
  {
    id: 5,
    question: "Apa saja barang yang wajib dibawa dan dilarang di area acara?",
    answer: (
      <>
        <strong>Wajib dibawa:</strong> Botol minum pribadi (tumbler), KTM asli, dan jas hujan ponco
        atau payung lipat.
        <br />
        <strong>Dilarang keras:</strong> Membawa kemasan sekali pakai/sampah plastik, rokok/vape/pod,
        senjata tajam, minuman keras/NAPZA, melakukan provokasi bernada SARA, serta dilarang mengenakan
        perhiasan/aksesori berlebih saat bertanding di lapangan.
      </>
    ),
  },
];

export default function Faq() {
  const [openId, setOpenId] = useState<number | null>(null);
  const { playClick } = useSound();

  const handleToggle = (id: number) => {
    playClick();
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq" id="faq">
      <div className="container" style={{ textAlign: "center" }}>
        <span className="vibe-tag" style={{ background: "#FFE4D6", color: "#9A3412" }}>
          TANYA JAWAB RESMI
        </span>
        <h2
          className="section-title reveal"
          style={{ marginTop: ".4rem", textAlign: "center" }}
        >
          FAQ
        </h2>
        <p className="section-subtitle reveal" style={{ textAlign: "center" }}>
          Pertanyaan yang sering ditanyakan seputar PORSEMATIK feat. Milad Informatika 2026.
        </p>

        <div className="faq-list reveal" style={{ maxWidth: "840px", margin: "0 auto", textAlign: "left" }}>
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className={`faq-item ${isOpen ? "open" : ""}`}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => handleToggle(item.id)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span
                    className="faq-icon"
                    style={{
                      transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease",
                    }}
                  >
                    <PixelIcon name="chevronRight" />
                  </span>
                </button>
                <div
                  className="faq-answer"
                  style={{
                    display: isOpen ? "block" : "none",
                    maxHeight: isOpen ? "500px" : "0",
                    padding: isOpen ? "1rem 1.4rem 1.4rem" : "0 1.4rem",
                    borderTop: isOpen ? "1px dashed #E2E8F0" : "none",
                  }}
                >
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

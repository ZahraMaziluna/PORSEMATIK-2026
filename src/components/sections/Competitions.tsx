"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { useSound } from "@/hooks/useSound";
import PixelIcon, { type PixelIconName } from "@/components/icons/PixelIcon";
import PixelMascot from "@/components/event/PixelMascot";
import type { MascotId } from "@/components/event/mascots";

const REGISTRATION_URL = "https://linktr.ee/porsematik2026";

const FILTERS = [
  { key: "all", label: "Semua Lomba" },
  { key: "sports", label: "Sports" },
  { key: "esport", label: "E-Sport" },
  { key: "art", label: "Art (Seni)" },
  { key: "education", label: "Education" },
] as const;

type Tier = "gold" | "silver" | "bronze" | "star" | "scroll";

interface Competition {
  slug: string;
  short: string;
  mascot: MascotId;
  category: "sports" | "esport" | "art" | "education";
  tone: "green" | "orange" | "gold";
  badge: string;
  icon: PixelIconName;
  name: string;
  slot: string;
  specs: [label: string, text: string][];
  fee: string;
  unit: string;
  rewards: [tier: Tier, label: string, value: string][];
  cta: string;
}

/* Nada warna kartu sama dengan kartu Pendaftaran di Beranda. */
const COMPETITIONS: Competition[] = [
  {
    slug: "futsal",
    short: "Futsal",
    mascot: "futsal",
    category: "sports",
    tone: "green",
    badge: "SPORTS",
    icon: "users",
    name: "Futsal Competition",
    slot: "Kuota: 1–2 tim / angkatan",
    specs: [
      ["Jadwal & Lokasi", "16–18 November 2026 di GOR Ki Bagoes Hadikoesoemo UII"],
      ["Komposisi Tim", "8–14 orang (5 pemain inti, 2–7 pemain cadangan, 1–2 ofisial)"],
      ["Format", "Sistem setengah kompetisi (2 grup) menuju Final, waktu 2x10 menit kotor"],
      ["Deposit Kartu", "Wajib deposit kartu Rp100.000/tim (dikembalikan usai turnamen)"],
    ],
    fee: "150.000",
    unit: "tim",
    rewards: [
      ["gold", "Juara 1", "Rp500.000 + 3 Poin"],
      ["silver", "Juara 2", "Rp250.000 + 2 Poin"],
      ["star", "Best Player & Top Scorer", "@Rp50.000 + 1 Poin"],
    ],
    cta: "DAFTAR FUTSAL",
  },
  {
    slug: "basket",
    short: "Basket",
    mascot: "basket",
    category: "sports",
    tone: "green",
    badge: "SPORTS",
    icon: "users",
    name: "Basketball Competition",
    slot: "Kuota: maks. 1 tim / angkatan",
    specs: [
      ["Jadwal & Lokasi", "17–18 November 2026 di GOR Ki Bagoes Hadikoesoemo UII"],
      ["Komposisi Tim", "8–14 orang (5 pemain inti, 2–7 pemain cadangan, 1–2 ofisial)"],
      ["Format", "Sistem round-robin klasemen tunggal tanpa final, waktu 4x10 menit kotor"],
      ["Penentuan Juara", "Akumulasi poin klasemen akhir seluruh pertandingan"],
    ],
    fee: "150.000",
    unit: "tim",
    rewards: [
      ["gold", "Juara 1", "Rp500.000 + 3 Poin"],
      ["silver", "Juara 2", "Rp250.000 + 2 Poin"],
      ["star", "Most Valuable Player (MVP)", "Rp50.000 + 1 Poin"],
    ],
    cta: "DAFTAR BASKET",
  },
  {
    slug: "mobile-legends",
    short: "Mobile Legends",
    mascot: "mlbb",
    category: "esport",
    tone: "orange",
    badge: "E-SPORT",
    icon: "users",
    name: "Mobile Legends: Bang Bang",
    slot: "Kuota: 1–2 tim / angkatan",
    specs: [
      ["Jadwal & Lokasi", "19 & 21 November 2026 di Auditorium FTI UII (luring)"],
      ["Komposisi Tim", "6–8 orang (5 pemain inti, maks. 2 cadangan, 1 ofisial)"],
      ["Format", "Single elimination (QF BO1, Semifinal BO3, Juara 3 BO1, Grand Final BO5)"],
      ["Ketentuan", "Jaringan internet pribadi/kampus, dilarang cheat/bug/toxic"],
    ],
    fee: "50.000",
    unit: "tim",
    rewards: [
      ["gold", "Juara 1", "Rp300.000 + 3 Poin"],
      ["silver", "Juara 2", "Rp150.000 + 2 Poin"],
      ["bronze", "Juara 3 & Finals MVP", "@Rp80.000/50.000 + 1 Poin"],
    ],
    cta: "DAFTAR MLBB",
  },
  {
    slug: "poster-digital",
    short: "Poster Digital",
    mascot: "poster",
    category: "art",
    tone: "gold",
    badge: "ART (SENI)",
    icon: "person",
    name: "Poster Digital Competition",
    slot: "Individu: 1–3 karya / angkatan",
    specs: [
      ["Tema Utama", "\"Climate-Sphere: Designing Solutions, Building Resilience\" (SDG 13)"],
      ["Pengumpulan & Voting", "Submit daring 16–18 Nov; E-Voting 19–21 Nov 2026"],
      ["Ketentuan Teknis", "Ukuran A3 portrait 300 dpi (JPG/PNG & lampirkan file mentah PSD/AI/FIG)"],
      ["Integritas", "Karya murni orisinal & DILARANG KERAS MENGGUNAKAN GENERATIVE AI"],
    ],
    fee: "50.000",
    unit: "peserta",
    rewards: [
      ["gold", "Juara Terbaik", "Rp100.000 + 3 Poin"],
      ["star", "Juara Favorit (E-Voting)", "Rp75.000 + 2 Poin"],
    ],
    cta: "DAFTAR POSTER",
  },
  {
    slug: "fotografi",
    short: "Fotografi",
    mascot: "foto",
    category: "art",
    tone: "gold",
    badge: "ART (SENI)",
    icon: "camera",
    name: "Photography & Narrative",
    slot: "Individu: 1–3 karya / angkatan",
    specs: [
      ["Tema Utama", "\"Lensa Bercerita: Kisah di Balik Bingkai\" (SDG 1, 10, 16)"],
      ["Subtema", "Denyut Perjuangan, Kehangatan Sosial, atau Kontras Muka Sosial"],
      ["Ketentuan", "Kanvas utuh 4:5 / 1:1 berisi foto + esai 20–70 kata & file RAW asli"],
      ["Etika", "Tanpa manipulasi digital ekstrem, no AI, no poverty porn"],
    ],
    fee: "50.000",
    unit: "peserta",
    rewards: [
      ["gold", "Juara Terbaik", "Rp150.000 + 2 Poin"],
      ["star", "Juara Favorit (E-Voting)", "Rp100.000 + 1 Poin"],
    ],
    cta: "DAFTAR FOTOGRAFI",
  },
  {
    slug: "ui-ux",
    short: "UI/UX",
    mascot: "uiux",
    category: "education",
    tone: "orange",
    badge: "EDUCATION",
    icon: "code",
    name: "UI/UX Design Competition",
    slot: "Kuota: 1–2 tim / angkatan",
    specs: [
      ["Tema Utama", "\"Climate-Sphere: Designing Solutions, Building Resilience\" (SDG 13)"],
      ["Komposisi Tim", "2–4 mahasiswa aktif (1 ketua + 1–3 anggota per angkatan)"],
      ["Deliverables", "Study Case (.pdf & .ppt) min. 10 screens hi-fi mockup & prototype Figma"],
      ["Tahapan", "Submit berkas 16–18 Nov; Presentasi Final Sabtu 21 Nov di Lab FTI UII"],
    ],
    fee: "50.000",
    unit: "tim",
    rewards: [
      ["gold", "Juara Terbaik", "Uang Tunai + 3 Poin"],
      ["silver", "Juara 2", "Uang Tunai + 2 Poin"],
      ["scroll", "Sertifikat Resmi", "Akumulasi Juara Umum Angkatan"],
    ],
    cta: "DAFTAR UI/UX",
  },
];

const RESOURCES: {
  tag: string;
  icon: PixelIconName;
  name: string;
  meta: string;
  href: string;
  cta: string;
  download?: string;
  featured?: boolean;
}[] = [
  {
    tag: "WAJIB DIBACA",
    icon: "book",
    name: "E-Guidebook PORSEMATIK 2026",
    meta: "PDF (43 MB). Regulasi lomba, syarat umum, dan jadwal.",
    href: "/E-Guidebook-PORSEMATIK-2026.pdf",
    cta: "UNDUH E-GUIDEBOOK (PDF)",
    download: "E-Guidebook-PORSEMATIK-2026.pdf",
    featured: true,
  },
  {
    tag: "FORMAT RESMI",
    icon: "disk",
    name: "Template Data Diri Peserta",
    meta: "Format excel/dokumen data anggota tim.",
    href: REGISTRATION_URL,
    cta: "UNDUH FORMAT",
  },
  {
    tag: "LEGALITAS",
    icon: "scroll",
    name: "Surat Orisinalitas Karya",
    meta: "Wajib untuk Poster, Fotografi, dan UI/UX (tanpa AI).",
    href: REGISTRATION_URL,
    cta: "UNDUH SURAT",
  },
  {
    tag: "ASSET GRAFIS",
    icon: "star",
    name: "Logo Pack HMIF & Milad 32",
    meta: "File PNG/SVG transparan untuk karya lomba.",
    href: REGISTRATION_URL,
    cta: "UNDUH ASSET",
  },
];

function RewardIcon({ tier }: { tier: Tier }) {
  if (tier === "star") return <PixelIcon name="star" className="medal medal--gold" />;
  if (tier === "scroll") return <PixelIcon name="scroll" />;
  return <PixelIcon name="medal" className={`medal medal--${tier}`} />;
}

export default function Competitions() {
  const [filter, setFilter] = useState<string>("all");
  const [query, setQuery] = useState("");
  const { playClick } = useSound();

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return COMPETITIONS.filter((item) => {
      if (filter !== "all" && item.category !== filter) return false;
      if (!needle) return true;
      const haystack = [
        item.name,
        item.badge,
        item.slot,
        item.fee,
        ...item.specs.flat(),
        ...item.rewards.map(([, label, value]) => `${label} ${value}`),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(needle);
    });
  }, [filter, query]);

  return (
    <section className="competitions" id="competitions">
      <div className="container">
        <span className="sec-badge">Competition Hub</span>
        <h2 className="section-title">Pilih Lomba</h2>
        <p className="section-subtitle">
          Pilih cabang kompetisi terbaikmu dan raih poin Juara Umum untuk angkatanmu!
        </p>

        <div className="hub-notice">
          <PixelIcon name="notice" />
          <p>
            Pendaftaran terbuka eksklusif untuk{" "}
            <strong>Mahasiswa Aktif Informatika FTI UII Angkatan 2023, 2024, 2025, dan 2026</strong>. Wajib
            melampirkan <strong>KTM/KTM Digital</strong>. Periode pendaftaran:{" "}
            <strong>10 Nov (12:00 WIB) sampai 13 Nov 2026 (12:00 WIB)</strong>.
          </p>
        </div>

        <div className="hub-search">
          <PixelIcon name="search" className="hub-search__icon" />
          <input
            type="search"
            className="hub-search__input"
            placeholder="Cari lomba: Futsal, MLBB, Rp50.000"
            aria-label="Cari cabang lomba"
            autoComplete="off"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          {query ? (
            <button
              type="button"
              className="hub-search__clear"
              aria-label="Hapus pencarian"
              onClick={() => {
                playClick();
                setQuery("");
              }}
            >
              <PixelIcon name="close" />
            </button>
          ) : null}
        </div>

        <div className="hub-tabs" role="group" aria-label="Filter kategori lomba">
          {FILTERS.map((item) => (
            <button
              key={item.key}
              type="button"
              className={`hub-tab${filter === item.key ? " is-active" : ""}`}
              aria-pressed={filter === item.key}
              onClick={() => {
                playClick();
                setFilter(item.key);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        <p className="hub-status" role="status" aria-live="polite">
          {visible.length === 0
            ? "Tidak ada kompetisi yang cocok dengan filter atau kata kunci tersebut. Ubah kata kunci atau pilih Semua Lomba."
            : `Menampilkan ${visible.length} dari ${COMPETITIONS.length} cabang lomba`}
        </p>

        <div className="hub-grid">
          {visible.map((item) => (
            <div className={`hub-row hub-row--${item.tone}`} key={item.slug}>
              <figure className="hub-stage">
                <PixelMascot id={item.mascot} className="hub-stage__mascot" />
                <figcaption>{item.short}</figcaption>
              </figure>

              <article className={`reg-card reg-card--${item.tone} hub-card`}>
                <header className="reg-card__head">
                  <span className="reg-card__badge">{item.badge}</span>
                  <PixelIcon name={item.icon} className="reg-card__icon" />
                </header>
                <span className="reg-card__tag">{item.slot}</span>
                <h3 className="reg-card__name">{item.name}</h3>

                <ul className="hub-specs">
                  {item.specs.map(([label, text]) => (
                    <li key={label}>
                      <strong>{label}:</strong> {text}
                    </li>
                  ))}
                </ul>

                <div className="hub-meta">
                  <p className="reg-card__line hub-fee">
                    Biaya pendaftaran
                    <strong>
                      Rp{item.fee} <small>/ {item.unit}</small>
                    </strong>
                  </p>

                  <div className="hub-rewards">
                    <p className="hub-rewards__title">
                      <PixelIcon name="trophy" /> Reward & Poin Angkatan
                    </p>
                    <ul>
                      {item.rewards.map(([tier, label, value]) => (
                        <li key={label}>
                          <RewardIcon tier={tier} />
                          <span>
                            {label}: <strong>{value}</strong>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="reg-card__actions hub-actions">
                  <a href={REGISTRATION_URL} className="reg-btn reg-btn--primary" target="_blank" rel="noopener noreferrer">
                    <PixelIcon name="person" />
                    {item.cta}
                  </a>
                  <Link href={`/kompetisi/${item.slug}`} className="reg-btn reg-btn--dark">
                    <PixelIcon name="chevronRight" />
                    LIHAT DETAIL LOMBA
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="hub-resources">
          <span className="sec-badge">Official Assets & Guidebook</span>
          <h2 className="section-title">Pusat Berkas</h2>
          <p className="section-subtitle">
            Wajib diunduh dan dipelajari oleh seluruh peserta, kapten tim, dan perwakilan angkatan sebelum
            Technical Meeting (14 Nov 2026).
          </p>
          <div className="reg-grid hub-resources__grid">
            {RESOURCES.map((item) => (
              <article
                className={`reg-card ${item.featured ? "reg-card--green" : "reg-card--gold"} hub-card`}
                key={item.name}
              >
                <header className="reg-card__head">
                  <span className="reg-card__badge">{item.tag}</span>
                  <PixelIcon name={item.icon} className="reg-card__icon" />
                </header>
                <h3 className="reg-card__name">{item.name}</h3>
                <p className="reg-card__line">{item.meta}</p>
                <div className="reg-card__actions">
                  <a
                    href={item.href}
                    className={`reg-btn ${item.featured ? "reg-btn--primary" : "reg-btn--dark"}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={item.download}
                  >
                    <PixelIcon name="disk" />
                    {item.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

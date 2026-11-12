"use client";

import React, { useEffect, useRef, useState } from "react";
import { useSound } from "@/hooks/useSound";
import PixelIcon from "@/components/icons/PixelIcon";

const FILTERS = [
  { key: "all", label: "Semua Lomba" },
  { key: "sports", label: "Sports" },
  { key: "esport", label: "E-Sport" },
  { key: "art", label: "Art (Seni)" },
  { key: "education", label: "Education" },
] as const;

export default function Competitions() {
  const [filter, setFilter] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const gridRef = useRef<HTMLDivElement>(null);
  const { playClick } = useSound();

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll<HTMLElement>(".comp-card") ?? [];
    const needle = query.trim().toLowerCase();
    let shown = 0;
    cards.forEach((card) => {
      const matchesCategory = filter === "all" || card.dataset.category === filter;
      const matchesQuery = !needle || (card.textContent ?? "").toLowerCase().includes(needle);
      const visible = matchesCategory && matchesQuery;
      card.hidden = !visible;
      if (visible) shown += 1;
    });
    setVisibleCount(shown);
  }, [filter, query]);

  return (
<section className="competitions" id="competitions">
  <div className="container" style={{textAlign: "center"}}>
    <h2 className="section-title reveal">Competition Hub</h2>
    <p className="section-subtitle reveal">Pilih cabang kompetisi terbaikmu dan raih poin Juara Umum untuk angkatanmu!</p>

    {/*  Eligibility Banner  */}
    <div className="reg-banner reveal">
      <PixelIcon name="notice" /> Pendaftaran terbuka eksklusif untuk <strong>Mahasiswa Aktif Informatika FTI UII Angkatan 2023, 2024, 2025, dan 2026</strong>. Wajib melampirkan <strong>KTM/KTM Digital</strong>. Periode pendaftaran: <strong>10 Nov (12:00 WIB) – 13 Nov 2026 (12:00 WIB)</strong>.
    </div>

    {/*  Live Search Bar  */}
    <div className="comp-search-wrap reveal">
      <div className="comp-search-box">
        <span className="comp-search-icon"><PixelIcon name="search" /></span>
        <input
          type="search"
          id="compSearch"
          className="comp-search-input"
          placeholder="Cari lomba: Futsal, MLBB, Rp50.000"
          aria-label="Cari cabang lomba"
          autoComplete="off"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        {query ? (
          <button
            type="button"
            id="clearSearch"
            className="comp-search-clear"
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
    </div>

    {/*  Filter Tabs  */}
    <div className="filter-tabs reveal" role="group" aria-label="Filter kategori lomba">
      {FILTERS.map((item) => (
        <button
          key={item.key}
          type="button"
          className={`filter-tab${filter === item.key ? " active" : ""}`}
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

    <p className="comp-status" role="status" aria-live="polite">
      {visibleCount === 0 ? (
        <span className="no-results-msg">
          <PixelIcon name="invader" /> Tidak ada kompetisi yang cocok dengan filter atau kata kunci tersebut. Ubah kata kunci atau pilih Semua Lomba.
        </span>
      ) : (
        `Menampilkan ${visibleCount} dari 6 cabang lomba`
      )}
    </p>

    {/*  6 COMPACT COMPETITION CARDS IN 2-COLUMN GRID (KANAN - KIRI)  */}
    <div className="comp-grid reveal" ref={gridRef}>
      {/*  1. Futsal  */}
      <div className="comp-card" data-category="sports">
        <div className="comp-card__main">
          <div className="comp-card__top">
            <span className="comp-card__badge comp-card__badge--sports">SPORTS</span>
            <span className="comp-card__slot"><PixelIcon name="users" /> Kuota: 1–2 Tim / Angkatan</span>
          </div>
          <h3 className="comp-card__name"><svg className="px-icon" viewBox="0 0 16 16" style={{marginRight: "4px"}}><path d="M5,1 h6 v2 h-6 Z M3,3 h10 v2 h-10 Z M1,5 h14 v6 h-14 Z M3,11 h10 v2 h-10 Z M5,13 h6 v2 h-6 Z M6,6 h4 v4 h-4 Z" fill="#22C55E"/></svg> Futsal Competition</h3>
          <ul className="comp-card__specs">
            <li><strong>Jadwal &amp; Lokasi:</strong> 16–18 November 2026 di GOR Ki Bagoes Hadikoesoemo UII</li>
            <li><strong>Komposisi Tim:</strong> 8–14 orang (5 pemain inti, 2–7 pemain cadangan, 1–2 ofisial)</li>
            <li><strong>Format:</strong> Sistem setengah kompetisi (2 grup) menuju Final, waktu 2x10 menit kotor</li>
            <li><strong>Deposit Kartu:</strong> Wajib menyertakan deposit kartu Rp100.000/tim (dikembalikan usai turnamen)</li>
          </ul>
        </div>
        <div className="comp-card__side">
          <div className="comp-price-box">
            <div className="comp-price-label">BIAYA PENDAFTARAN</div>
            <div className="comp-price-value"><span className="comp-price-curr">Rp</span>150.000<span className="comp-price-unit">/ tim</span></div>
          </div>
          <div className="comp-prize-box">
            <div className="comp-prize-title"><PixelIcon name="trophy" /> REWARD &amp; POIN ANGKATAN</div>
            <div className="comp-prize-item"><PixelIcon name="medal" className="medal medal--gold" />Juara 1: <strong>Rp500.000 + 3 Poin</strong></div>
            <div className="comp-prize-item"><PixelIcon name="medal" className="medal medal--silver" />Juara 2: <strong>Rp250.000 + 2 Poin</strong></div>
            <div className="comp-prize-item"><PixelIcon name="star" className="medal medal--gold" />Best Player &amp; Top Scorer: <strong>@Rp50.000 + 1 Poin</strong></div>
          </div>
          <a href="https://linktr.ee/porsematik2026" className="btn-pixel" target="_blank" rel="noopener">[ DAFTAR FUTSAL ]</a>
        </div>
      </div>

      {/*  2. Basket  */}
      <div className="comp-card" data-category="sports">
        <div className="comp-card__main">
          <div className="comp-card__top">
            <span className="comp-card__badge comp-card__badge--sports">SPORTS</span>
            <span className="comp-card__slot"><PixelIcon name="users" /> Kuota: Maks. 1 Tim / Angkatan</span>
          </div>
          <h3 className="comp-card__name"><svg className="px-icon" viewBox="0 0 16 16" style={{marginRight: "4px"}}><path d="M5,1 h6 v2 h-6 Z M3,3 h10 v2 h-10 Z M1,5 h14 v6 h-14 Z M3,11 h10 v2 h-10 Z M5,13 h6 v2 h-6 Z M7,2 h2 v12 h-2 Z M2,7 h12 v2 h-12 Z" fill="#EA580C"/></svg> Basketball Competition</h3>
          <ul className="comp-card__specs">
            <li><strong>Jadwal &amp; Lokasi:</strong> 17–18 November 2026 di GOR Ki Bagoes Hadikoesoemo UII</li>
            <li><strong>Komposisi Tim:</strong> 8–14 orang (5 pemain inti, 2–7 pemain cadangan, 1–2 ofisial)</li>
            <li><strong>Format:</strong> Sistem round-robin klasemen tunggal tanpa final, waktu 4x10 menit kotor</li>
            <li><strong>Penentuan Juara:</strong> Akumulasi poin klasemen akhir seluruh pertandingan</li>
          </ul>
        </div>
        <div className="comp-card__side">
          <div className="comp-price-box">
            <div className="comp-price-label">BIAYA PENDAFTARAN</div>
            <div className="comp-price-value"><span className="comp-price-curr">Rp</span>150.000<span className="comp-price-unit">/ tim</span></div>
          </div>
          <div className="comp-prize-box">
            <div className="comp-prize-title"><PixelIcon name="trophy" /> REWARD &amp; POIN ANGKATAN</div>
            <div className="comp-prize-item"><PixelIcon name="medal" className="medal medal--gold" />Juara 1: <strong>Rp500.000 + 3 Poin</strong></div>
            <div className="comp-prize-item"><PixelIcon name="medal" className="medal medal--silver" />Juara 2: <strong>Rp250.000 + 2 Poin</strong></div>
            <div className="comp-prize-item"><PixelIcon name="star" className="medal medal--gold" />Most Valuable Player (MVP): <strong>Rp50.000 + 1 Poin</strong></div>
          </div>
          <a href="https://linktr.ee/porsematik2026" className="btn-pixel" target="_blank" rel="noopener">[ DAFTAR BASKET ]</a>
        </div>
      </div>

      {/*  3. Mobile Legends  */}
      <div className="comp-card" data-category="esport">
        <div className="comp-card__main">
          <div className="comp-card__top">
            <span className="comp-card__badge comp-card__badge--esport">E-SPORT</span>
            <span className="comp-card__slot"><PixelIcon name="users" /> Kuota: 1–2 Tim / Angkatan</span>
          </div>
          <h3 className="comp-card__name"><svg className="px-icon" viewBox="0 0 16 16" style={{marginRight: "4px"}}><path d="M2,4 h12 v8 h-12 Z M4,6 h2 v4 h-2 Z M3,7 h4 v2 h-4 Z M10,7 h2 v2 h-2 Z M12,9 h2 v2 h-2 Z" fill="#8B5CF6"/></svg> Mobile Legends: Bang Bang</h3>
          <ul className="comp-card__specs">
            <li><strong>Jadwal &amp; Lokasi:</strong> 19 &amp; 21 November 2026 di Auditorium FTI UII (Luring)</li>
            <li><strong>Komposisi Tim:</strong> 6–8 orang (5 pemain inti, maks. 2 cadangan, 1 ofisial)</li>
            <li><strong>Format:</strong> Single elimination (QF BO1, Semifinal BO3, Juara 3 BO1, Grand Final BO5)</li>
            <li><strong>Ketentuan:</strong> Jaringan internet pribadi/kampus, dilarang cheat/bug/toxic</li>
          </ul>
        </div>
        <div className="comp-card__side">
          <div className="comp-price-box">
            <div className="comp-price-label">BIAYA PENDAFTARAN</div>
            <div className="comp-price-value"><span className="comp-price-curr">Rp</span>50.000<span className="comp-price-unit">/ tim</span></div>
          </div>
          <div className="comp-prize-box">
            <div className="comp-prize-title"><PixelIcon name="trophy" /> REWARD &amp; POIN ANGKATAN</div>
            <div className="comp-prize-item"><PixelIcon name="medal" className="medal medal--gold" />Juara 1: <strong>Rp300.000 + 3 Poin</strong></div>
            <div className="comp-prize-item"><PixelIcon name="medal" className="medal medal--silver" />Juara 2: <strong>Rp150.000 + 2 Poin</strong></div>
            <div className="comp-prize-item"><PixelIcon name="medal" className="medal medal--bronze" />Juara 3 &amp; Finals MVP: <strong>@Rp80.000/50.000 + 1 Poin</strong></div>
          </div>
          <a href="https://linktr.ee/porsematik2026" className="btn-pixel" target="_blank" rel="noopener">[ DAFTAR MLBB ]</a>
        </div>
      </div>

      {/*  4. Poster Digital  */}
      <div className="comp-card" data-category="art">
        <div className="comp-card__main">
          <div className="comp-card__top">
            <span className="comp-card__badge comp-card__badge--art">ART (SENI)</span>
            <span className="comp-card__slot"><PixelIcon name="person" /> Individu: 1–3 Karya / Angkatan</span>
          </div>
          <h3 className="comp-card__name"><svg className="px-icon" viewBox="0 0 16 16" style={{marginRight: "4px"}}><path d="M2,2 h12 v12 h-12 Z M4,4 h8 v8 h-8 Z M5,9 l2,-2 l2,2 l2,-3 l2,3 Z M5,6 h2 v2 h-2 Z" fill="#EC4899"/></svg> Poster Digital Competition</h3>
          <ul className="comp-card__specs">
            <li><strong>Tema Utama:</strong> "Climate-Sphere: Designing Solutions, Building Resilience" (SDG 13)</li>
            <li><strong>Pengumpulan &amp; Voting:</strong> Submit daring 16–18 Nov; E-Voting 19–21 Nov 2026</li>
            <li><strong>Ketentuan Teknis:</strong> Ukuran A3 portrait 300 dpi (JPG/PNG &amp; lampirkan file mentah PSD/AI/FIG)</li>
            <li><strong>Integritas:</strong> Karya murni orisinal &amp; <strong>DILARANG KERAS MENGGUNAKAN GENERATIVE AI</strong></li>
          </ul>
        </div>
        <div className="comp-card__side">
          <div className="comp-price-box">
            <div className="comp-price-label">BIAYA PENDAFTARAN</div>
            <div className="comp-price-value"><span className="comp-price-curr">Rp</span>50.000<span className="comp-price-unit">/ peserta</span></div>
          </div>
          <div className="comp-prize-box">
            <div className="comp-prize-title"><PixelIcon name="trophy" /> REWARD &amp; POIN ANGKATAN</div>
            <div className="comp-prize-item"><PixelIcon name="medal" className="medal medal--gold" />Juara Terbaik: <strong>Rp100.000 + 3 Poin</strong></div>
            <div className="comp-prize-item"><PixelIcon name="star" className="medal medal--gold" />Juara Favorit (E-Voting): <strong>Rp75.000 + 2 Poin</strong></div>
          </div>
          <a href="https://linktr.ee/porsematik2026" className="btn-pixel" target="_blank" rel="noopener">[ DAFTAR POSTER ]</a>
        </div>
      </div>

      {/*  5. Photography  */}
      <div className="comp-card" data-category="art">
        <div className="comp-card__main">
          <div className="comp-card__top">
            <span className="comp-card__badge comp-card__badge--art">ART (SENI)</span>
            <span className="comp-card__slot"><PixelIcon name="person" /> Individu: 1–3 Karya / Angkatan</span>
          </div>
          <h3 className="comp-card__name"><svg className="px-icon" viewBox="0 0 16 16" style={{marginRight: "4px"}}><path d="M5,2 h6 v2 h-6 Z M2,4 h12 v10 h-12 Z M6,6 h4 v4 h-4 Z M12,5 h1 v2 h-1 Z" fill="#3B82F6"/></svg> Photography &amp; Narrative</h3>
          <ul className="comp-card__specs">
            <li><strong>Tema Utama:</strong> "Lensa Bercerita: Kisah di Balik Bingkai" (SDG 1, 10, 16)</li>
            <li><strong>Subtema:</strong> Denyut Perjuangan, Kehangatan Sosial, atau Kontras Muka Sosial</li>
            <li><strong>Ketentuan:</strong> Kanvas utuh 4:5 / 1:1 berisi foto + esai 20–70 kata &amp; file RAW asli</li>
            <li><strong>Etika:</strong> Tanpa manipulasi digital ekstrem, no AI, no poverty porn</li>
          </ul>
        </div>
        <div className="comp-card__side">
          <div className="comp-price-box">
            <div className="comp-price-label">BIAYA PENDAFTARAN</div>
            <div className="comp-price-value"><span className="comp-price-curr">Rp</span>50.000<span className="comp-price-unit">/ peserta</span></div>
          </div>
          <div className="comp-prize-box">
            <div className="comp-prize-title"><PixelIcon name="trophy" /> REWARD &amp; POIN ANGKATAN</div>
            <div className="comp-prize-item"><PixelIcon name="medal" className="medal medal--gold" />Juara Terbaik: <strong>Rp150.000 + 2 Poin</strong></div>
            <div className="comp-prize-item"><PixelIcon name="star" className="medal medal--gold" />Juara Favorit (E-Voting): <strong>Rp100.000 + 1 Poin</strong></div>
          </div>
          <a href="https://linktr.ee/porsematik2026" className="btn-pixel" target="_blank" rel="noopener">[ DAFTAR FOTOGRAFI ]</a>
        </div>
      </div>

      {/*  6. UI/UX  */}
      <div className="comp-card" data-category="education">
        <div className="comp-card__main">
          <div className="comp-card__top">
            <span className="comp-card__badge comp-card__badge--education">EDUCATION</span>
            <span className="comp-card__slot"><PixelIcon name="users" /> Kuota: 1–2 Tim / Angkatan</span>
          </div>
          <h3 className="comp-card__name"><svg className="px-icon" viewBox="0 0 16 16" style={{marginRight: "4px"}}><path d="M2,2 h12 v9 h-12 Z M6,11 h4 v2 h-4 Z M4,13 h8 v1 h-8 Z M4,4 h8 v5 h-8 Z" fill="#06B6D4"/></svg> UI/UX Design Competition</h3>
          <ul className="comp-card__specs">
            <li><strong>Tema Utama:</strong> "Climate-Sphere: Designing Solutions, Building Resilience" (SDG 13)</li>
            <li><strong>Komposisi Tim:</strong> 2–4 mahasiswa aktif (1 ketua + 1–3 anggota per angkatan)</li>
            <li><strong>Deliverables:</strong> Study Case (.pdf &amp; .ppt) min. 10 screens hi-fi mockup &amp; prototype Figma</li>
            <li><strong>Tahapan:</strong> Submit berkas 16–18 Nov; Presentasi Final Sabtu 21 Nov di Lab FTI UII</li>
          </ul>
        </div>
        <div className="comp-card__side">
          <div className="comp-price-box">
            <div className="comp-price-label">BIAYA PENDAFTARAN</div>
            <div className="comp-price-value"><span className="comp-price-curr">Rp</span>50.000<span className="comp-price-unit">/ tim</span></div>
          </div>
          <div className="comp-prize-box">
            <div className="comp-prize-title"><PixelIcon name="trophy" /> REWARD &amp; POIN ANGKATAN</div>
            <div className="comp-prize-item"><PixelIcon name="medal" className="medal medal--gold" />Juara Terbaik: <strong>Uang Tunai + 3 Poin</strong></div>
            <div className="comp-prize-item"><PixelIcon name="medal" className="medal medal--silver" />Juara 2: <strong>Uang Tunai + 2 Poin</strong></div>
            <div className="comp-prize-item"><PixelIcon name="scroll" />Sertifikat Resmi &amp; Akumulasi Juara Umum Angkatan</div>
          </div>
          <a href="https://linktr.ee/porsematik2026" className="btn-pixel" target="_blank" rel="noopener">[ DAFTAR UI/UX ]</a>
        </div>
      </div>
    </div>

    {/*  PUSAT BERKAS & BUKU PANDUAN DIBAWAH SETELAH PERLOMBAAN  */}
    <div className="resource-hub reveal" style={{marginTop: "3.5rem"}}>
      <div className="resource-hub__header">
        <span className="resource-badge"><PixelIcon name="disk" /> OFFICIAL ASSETS &amp; GUIDEBOOK</span>
        <h3 className="resource-title">Pusat Berkas &amp; Buku Panduan Resmi</h3>
        <p className="resource-subtitle">Wajib diunduh dan dipelajari oleh seluruh peserta, kapten tim, dan perwakilan angkatan sebelum Technical Meeting (14 Nov 2026).</p>
      </div>
      <div className="resource-grid">
        {/*  E-Guidebook (Local PDF 43MB)  */}
        <a href="/E-Guidebook-PORSEMATIK-2026.pdf" download="E-Guidebook-PORSEMATIK-2026.pdf" className="resource-card resource-card--featured" target="_blank" rel="noopener noreferrer">
          <div>
            <div className="resource-card__icon"><svg className="px-icon px-icon--lg" viewBox="0 0 16 16"><path d="M2,2 h12 v11 h-12 Z M4,4 h3 v7 h-3 Z M9,4 h3 v7 h-3 Z M1,13 h14 v1 h-14 Z" fill="#F59E0B"/></svg></div>
            <div className="resource-card__tag">WAJIB DIBACA • VERSI RESMI</div>
            <div className="resource-card__name">E-Guidebook PORSEMATIK 2026</div>
            <div className="resource-card__meta">Format: PDF (43 MB) • Regulasi Lomba, Syarat Umum &amp; Jadwal</div>
          </div>
          <div className="btn-pixel--gold">[ UNDUH PDF RESMI ]</div>
        </a>

        {/*  Template Data Diri  */}
        <a href="https://linktr.ee/porsematik2026" target="_blank" rel="noopener" className="resource-card">
          <div>
            <div className="resource-card__icon"><svg className="px-icon px-icon--lg" viewBox="0 0 16 16"><path d="M5,1 h6 v2 h-6 Z M3,2 h10 v12 h-10 Z M5,5 h6 v1 h-6 Z M5,7 h6 v1 h-6 Z M5,9 h6 v1 h-6 Z" fill="#10B981"/></svg></div>
            <div className="resource-card__tag">FORMAT RESMI</div>
            <div className="resource-card__name">Template Data Diri Peserta</div>
            <div className="resource-card__meta">Format excel/dokumen data anggota tim</div>
          </div>
          <div className="btn-pixel-outline">UNDUH FORMAT</div>
        </a>

        {/*  Surat Orisinalitas  */}
        <a href="https://linktr.ee/porsematik2026" target="_blank" rel="noopener" className="resource-card">
          <div>
            <div className="resource-card__icon"><svg className="px-icon px-icon--lg" viewBox="0 0 16 16"><path d="M11,1 l4,4 l-8,8 h-4 v-4 Z M10,4 l2,2 Z" fill="#EC4899"/></svg></div>
            <div className="resource-card__tag">LEGALITAS</div>
            <div className="resource-card__name">Surat Orisinalitas Karya</div>
            <div className="resource-card__meta">Wajib untuk Poster, Fotografi &amp; UI/UX (No AI)</div>
          </div>
          <div className="btn-pixel-outline">UNDUH SURAT</div>
        </a>

        {/*  Logo Pack  */}
        <a href="https://linktr.ee/porsematik2026" target="_blank" rel="noopener" className="resource-card">
          <div>
            <div className="resource-card__icon"><svg className="px-icon px-icon--lg" viewBox="0 0 16 16"><path d="M4,2 h8 v2 h2 v4 h-2 v2 h-2 v2 h-4 v-2 h-2 v-6 h2 Z M5,4 h2 v2 h-2 Z M9,4 h2 v2 h-2 Z M5,7 h2 v2 h-2 Z" fill="#8B5CF6"/></svg></div>
            <div className="resource-card__tag">ASSET GRAFIS</div>
            <div className="resource-card__name">Logo Pack HMIF &amp; Milad 32</div>
            <div className="resource-card__meta">File PNG/SVG transparan untuk karya lomba</div>
          </div>
          <div className="btn-pixel-outline">UNDUH ASSET</div>
        </a>
      </div>
    </div>
  </div>
</section>
  );
}

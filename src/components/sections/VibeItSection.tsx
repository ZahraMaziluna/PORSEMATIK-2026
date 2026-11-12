import React from "react";

export default function VibeItSection() {
  return (
<section className="vibeit" id="vibeit">
  <div className="container" style={{textAlign: "center"}}>
    <div className="vibeit__header reveal" style={{textAlign: "center", margin: "0 auto 3rem"}}>
      <span className="vibe-badge">HIGH SCHOOL EXCLUSIVE WORKSHOP • COLLAB WITH GDGOC UII</span>
      <h2 className="section-title" style={{fontStyle: "normal !important", textAlign: "center"}}>VibeIT: AI Vibe Coding Workshop</h2>
      <p className="section-subtitle" style={{textAlign: "center"}}>Kegiatan edukasi dan pengenalan Program Studi Informatika FTI UII bagi 50 siswa SMA/SLTA sederajat melalui kolaborasi dengan Google Developer Groups on Campus UII (GDGOC UII).</p>
      
      {/*  Retro Pixel Progress Bar  */}
      <div className="vibe-progress-bar" style={{margin: "0 auto 2rem"}}>
        <div className="vibe-progress-label"><span>VIBE CODING LAB STATUS:</span> <span>READY 100%</span></div>
        <div className="vibe-progress-track">
          <div className="vibe-progress-fill"></div>
        </div>
      </div>
    </div>

    {/*  1. INFO CARDS (4-GRID SOFT PASTEL)  */}
    <div className="vibe-info-grid reveal">
      <div className="vibe-card vibe-card--mint">
        <div className="vibe-card__icon"><svg className="px-icon px-icon--md" viewBox="0 0 16 16"><path d="M3,1 h2 v2 h-2 Z M11,1 h2 v2 h-2 Z M2,3 h12 v12 h-12 Z M4,5 h8 v2 h-8 Z M4,8 h2 v2 h-2 Z M7,8 h2 v2 h-2 Z M10,8 h2 v2 h-2 Z M4,11 h2 v2 h-2 Z M7,11 h2 v2 h-2 Z M10,11 h2 v2 h-2 Z" fill="#16A34A"/></svg></div>
        <div className="vibe-card__label">HARI &amp; TANGGAL</div>
        <div className="vibe-card__val">Sabtu, 21 November 2026</div>
        <div className="vibe-card__sub">Pelaksanaan luring di kampus UII</div>
      </div>
      <div className="vibe-card vibe-card--peach">
        <div className="vibe-card__icon"><svg className="px-icon px-icon--md" viewBox="0 0 16 16"><path d="M5,1 h6 v2 h-6 Z M3,3 h10 v2 h-10 Z M1,5 h14 v6 h-14 Z M3,11 h10 v2 h-10 Z M5,13 h6 v2 h-6 Z M7,4 h2 v4 h3 v2 h-5 Z" fill="#EA580C"/></svg></div>
        <div className="vibe-card__label">WAKTU PELAKSANAAN</div>
        <div className="vibe-card__val">07.30 – 11.00 WIB</div>
        <div className="vibe-card__sub">Durasi total 210 Menit workshop</div>
      </div>
      <div className="vibe-card vibe-card--sky">
        <div className="vibe-card__icon"><svg className="px-icon px-icon--md" viewBox="0 0 16 16"><path d="M5,1 h6 v2 h-6 Z M3,3 h10 v4 h-10 Z M5,7 h6 v2 h-6 Z M6,9 h4 v3 h-4 Z M7,12 h2 v3 h-2 Z M7,4 h2 v2 h-2 Z" fill="#0284C7"/></svg></div>
        <div className="vibe-card__label">TEMPAT / VENUE</div>
        <div className="vibe-card__val">Ruang Kelas 3.2 Lab FTI UII</div>
        <div className="vibe-card__sub">Lantai 3 Gedung KH Mas Mansur FTI UII</div>
      </div>
      <div className="vibe-card vibe-card--yellow">
        <div className="vibe-card__icon"><svg className="px-icon px-icon--md" viewBox="0 0 16 16"><path d="M3,2 h4 v4 h-4 Z M9,3 h4 v4 h-4 Z M1,7 h8 v7 h-8 Z M9,8 h6 v6 h-6 Z" fill="#CA8A04"/></svg></div>
        <div className="vibe-card__label">KUOTA PESERTA</div>
        <div className="vibe-card__val">Terbatas 50 Siswa</div>
        <div className="vibe-card__sub">Khusus siswa SMA/SLTA sederajat</div>
      </div>
    </div>

    {/*  2. ALUR ACARA 6 LANGKAH (RATA TENGAH)  */}
    <div className="vibe-timeline-wrap reveal">
      <div className="vibe-section-title">
        <span className="vibe-tag">QUEST TIMELINE</span>
        <h3 style={{textAlign: "center"}}>Alur &amp; Rangkaian Kegiatan VibeIT (6 Level)</h3>
      </div>
      <div className="vibe-steps-grid">
        <div className="vibe-step" style={{textAlign: "center"}}>
          <div className="vibe-step__num">LV.1</div>
          <div className="vibe-step__time">07.30 – 08.00 WIB</div>
          <div className="vibe-step__title">Kedatangan &amp; Registrasi Peserta</div>
          <p className="vibe-step__desc" style={{textAlign: "center"}}>Check-in peserta di Ruang 3.2 Lab FTI UII, penukaran kartu peserta, dan persiapan workstation laptop.</p>
        </div>
        <div className="vibe-step" style={{textAlign: "center"}}>
          <div className="vibe-step__num">LV.2</div>
          <div className="vibe-step__time">08.00 – 08.30 WIB</div>
          <div className="vibe-step__title">Pembukaan &amp; Profil Informatika UII</div>
          <p className="vibe-step__desc" style={{textAlign: "center"}}>Opening oleh MC, pemutaran video profil Informatika UII, sambutan, perkenalan pemateri GDGOC UII, serta ice breaking.</p>
        </div>
        <div className="vibe-step" style={{textAlign: "center"}}>
          <div className="vibe-step__num">LV.3</div>
          <div className="vibe-step__time">08.30 – 09.30 WIB</div>
          <div className="vibe-step__title">Sesi Materi: Vibe Coding AI (1 Jam)</div>
          <p className="vibe-step__desc" style={{textAlign: "center"}}>Pengenalan paradigma modern pembuatan software dengan bantuan generative AI dan prompt engineering secara visual.</p>
        </div>
        <div className="vibe-step" style={{textAlign: "center"}}>
          <div className="vibe-step__num">LV.4</div>
          <div className="vibe-step__time">09.30 – 10.30 WIB</div>
          <div className="vibe-step__title">Sesi Praktik: Deploy Landing Page (1 Jam)</div>
          <p className="vibe-step__desc" style={{textAlign: "center"}}>Hands-on praktik langsung membuat dan mempublikasikan (deploy) landing page UMKM online menggunakan Lovable AI.</p>
        </div>
        <div className="vibe-step" style={{textAlign: "center"}}>
          <div className="vibe-step__num">LV.5</div>
          <div className="vibe-step__time">10.30 – 10.45 WIB</div>
          <div className="vibe-step__title">Pengumpulan Link Hasil Deploy</div>
          <p className="vibe-step__desc" style={{textAlign: "center"}}>Submit link website hasil deploy Lovable AI ke form resmi panitia sebagai syarat wajib penerbitan E-Sertifikat.</p>
        </div>
        <div className="vibe-step" style={{textAlign: "center"}}>
          <div className="vibe-step__num">LV.6</div>
          <div className="vibe-step__time">10.45 – 11.00 WIB</div>
          <div className="vibe-step__title">Sesi Memento, Penutupan &amp; Free Time</div>
          <p className="vibe-step__desc" style={{textAlign: "center"}}>Foto bersama seluruh peserta dan mentor GDGOC UII, penutupan resmi, serta sesi santai (free time) melihat fasilitas lab kampus.</p>
        </div>
      </div>
    </div>

    {/*  3. HIGHLIGHT BOX (SYARAT E-SERTIFIKAT)  */}
    <div className="vibe-alert-box reveal" style={{textAlign: "center"}}>
      <div className="vibe-alert-badge">PENGUMUMAN PENTING KELULUSAN</div>
      <div className="vibe-alert-body" style={{justifyContent: "center"}}>
        <div className="vibe-alert-icon"><svg className="px-icon px-icon--lg" viewBox="0 0 16 16"><path d="M3,2 h10 v12 h-10 Z M5,4 h6 v1 h-6 Z M5,6 h6 v1 h-6 Z M5,8 h6 v1 h-6 Z M5,10 h4 v1 h-4 Z" fill="#D97706"/></svg></div>
        <div className="vibe-alert-text" style={{textAlign: "center"}}>
          <strong>SYARAT E-SERTIFIKAT:</strong> Hanya peserta yang mengerjakan sesi praktik dan mengumpulkan link hasil deploy Lovable AI pada link resmi panitia yang akan memperoleh E-Sertifikat resmi terverifikasi dari HMIF LEM FTI UII dan GDGOC UII.
        </div>
      </div>
    </div>

    {/*  4. CTA BUTTONS (GOOGLE FORMS URL + DISABLED DEPLOY BUTTON)  */}
    <div className="vibe-actions reveal" style={{justifyContent: "center"}}>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLScuKliSypDmIJL__CyamGvfZk9dehMoDlrBSP0lsdIi-D0bHg/viewform?usp=publish-editor" className="btn-pixel" target="_blank" rel="noopener">
        [ DAFTAR PESERTA VIBEIT (KUOTA 50 SISWA) ]
      </a>
      <button className="btn-pixel btn-pixel--disabled" disabled title="Belum dibuka, kumpulkan link deploy pada hari pelaksanaan (21 Nov 2026)">
        [ BELUM DIBUKA: KUMPULKAN LINK DEPLOY (21 NOV 2026) ]
      </button>
    </div>
  </div>
</section>
  );
}

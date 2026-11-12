import React from "react";

export default function ConnectSection() {
  return (
<section className="connect-sec" id="connect">
  <div className="container" style={{textAlign: "center"}}>
    <div className="vibeit__header reveal" style={{textAlign: "center", margin: "0 auto 3rem"}}>
      <span className="vibe-badge" style={{color: "#D97706", background: "#FEF3C7", borderColor: "#FDE68A"}}>COMMUNITY &amp; ALUMNI GATHERING • MILAD INFORMATIKA KE-32</span>
      <h2 className="section-title" style={{color: "#B45309 !important", fontStyle: "normal !important", textAlign: "center"}}>Informatics Connect</h2>
      <p className="section-subtitle" style={{color: "#78350F !important", maxWidth: "780px", margin: "0 auto 2rem", textAlign: "center"}}>Momen kebersamaan mahasiswa aktif, dosen, dan alumni Program Studi Informatika FTI UII untuk mempererat silaturahmi dalam semarak Milad ke-32.</p>
      
      {/*  Solidarity Stage (NO 100% GUYUB)  */}
      <div className="vibe-progress-bar" style={{borderColor: "#F59E0B", boxShadow: "4px 4px 0 #FDE68A", maxWidth: "540px", margin: "0 auto 2rem"}}>
        <div className="vibe-progress-label" style={{color: "#B45309", fontFamily: "'Press Start 2P', monospace", fontSize: "10px"}}>
          <span>MILAD INFORMATIKA UII KE-32 • SOLIDARITY STAGE</span>
        </div>
        <div className="vibe-progress-track">
          <div className="vibe-progress-fill" style={{background: "linear-gradient(90deg, #F59E0B, #EA580C, #22C55E)"}}></div>
        </div>
      </div>
    </div>

    {/*  1. INFO CARDS (4-GRID SOFT PASTEL)  */}
    <div className="vibe-info-grid reveal">
      <div className="vibe-card vibe-card--peach">
        <div className="vibe-card__icon"><svg className="px-icon px-icon--md" viewBox="0 0 16 16"><path d="M3,1 h2 v2 h-2 Z M11,1 h2 v2 h-2 Z M2,3 h12 v12 h-12 Z M4,5 h8 v2 h-8 Z M4,8 h2 v2 h-2 Z M7,8 h2 v2 h-2 Z M10,8 h2 v2 h-2 Z M4,11 h2 v2 h-2 Z M7,11 h2 v2 h-2 Z M10,11 h2 v2 h-2 Z" fill="#EA580C"/></svg></div>
        <div className="vibe-card__label">HARI &amp; TANGGAL</div>
        <div className="vibe-card__val">Selasa, 17 November 2026</div>
        <div className="vibe-card__sub">Pagi ceria di kampus terpadu UII</div>
      </div>
      <div className="vibe-card vibe-card--yellow">
        <div className="vibe-card__icon"><svg className="px-icon px-icon--md" viewBox="0 0 16 16"><path d="M5,1 h6 v2 h-6 Z M3,3 h10 v2 h-10 Z M1,5 h14 v6 h-14 Z M3,11 h10 v2 h-10 Z M5,13 h6 v2 h-6 Z M7,4 h2 v4 h3 v2 h-5 Z" fill="#CA8A04"/></svg></div>
        <div className="vibe-card__label">WAKTU PELAKSANAAN</div>
        <div className="vibe-card__val">06.00 – 09.00 WIB</div>
        <div className="vibe-card__sub">Senam bersama &amp; sarapan santai</div>
      </div>
      <div className="vibe-card vibe-card--mint">
        <div className="vibe-card__icon"><svg className="px-icon px-icon--md" viewBox="0 0 16 16"><path d="M5,1 h6 v2 h-6 Z M3,3 h10 v4 h-10 Z M5,7 h6 v2 h-6 Z M6,9 h4 v3 h-4 Z M7,12 h2 v3 h-2 Z M7,4 h2 v2 h-2 Z" fill="#16A34A"/></svg></div>
        <div className="vibe-card__label">TEMPAT / VENUE</div>
        <div className="vibe-card__val">Lapangan Utara GOR UII</div>
        <div className="vibe-card__sub">Area outdoor GOR Ki Bagoes Hadikoesoemo</div>
      </div>
      <div className="vibe-card vibe-card--sky">
        <div className="vibe-card__icon"><svg className="px-icon px-icon--md" viewBox="0 0 16 16"><path d="M3,2 h4 v4 h-4 Z M9,3 h4 v4 h-4 Z M1,7 h8 v7 h-8 Z M9,8 h6 v6 h-6 Z" fill="#0284C7"/></svg></div>
        <div className="vibe-card__label">SASARAN PESERTA</div>
        <div className="vibe-card__val">Civitas Akademika &amp; Alumni</div>
        <div className="vibe-card__sub">Mahasiswa, Dosen, Tenaga Kependidikan, Alumni</div>
      </div>
    </div>

    {/*  2. ALUR ACARA 6 LANGKAH  */}
    <div className="vibe-timeline-wrap reveal">
      <div className="vibe-section-title">
        <span className="vibe-tag" style={{background: "#FEF3C7", color: "#B45309"}}>TIMELINE KEGIATAN</span>
        <h3 style={{textAlign: "center"}}>Rangkaian Acara Informatics Connect (6 Level)</h3>
      </div>
      <div className="vibe-steps-grid">
        <div className="vibe-step" style={{textAlign: "center"}}>
          <div className="vibe-step__num" style={{background: "#F59E0B"}}>LV.1</div>
          <div className="vibe-step__time">06.00 – 06.30 WIB</div>
          <div className="vibe-step__title">Registrasi &amp; Penukaran Chip</div>
          <p className="vibe-step__desc">Check-in peserta di meja registrasi, pembagian 3 chip makan kuliner UMKM dan 1 chip photobooth gratis.</p>
        </div>
        <div className="vibe-step" style={{textAlign: "center"}}>
          <div className="vibe-step__num" style={{background: "#F59E0B"}}>LV.2</div>
          <div className="vibe-step__time">06.30 – 07.15 WIB</div>
          <div className="vibe-step__title">Senam Sehat Ceria Bersama</div>
          <p className="vibe-step__desc">Senam pagi dipandu instruktur profesional bersama seluruh dosen, mahasiswa dari berbagai angkatan, dan alumni.</p>
        </div>
        <div className="vibe-step" style={{textAlign: "center"}}>
          <div className="vibe-step__num" style={{background: "#F59E0B"}}>LV.3</div>
          <div className="vibe-step__time">07.15 – 07.45 WIB</div>
          <div className="vibe-step__title">Potong Tumpeng &amp; Wish Note</div>
          <p className="vibe-step__desc">Seremoni simbolis tumpengan Milad Informatika ke-32, doa bersama, serta penempelan kertas harapan (Wish Note) masa depan prodi.</p>
        </div>
        <div className="vibe-step" style={{textAlign: "center"}}>
          <div className="vibe-step__num" style={{background: "#F59E0B"}}>LV.4</div>
          <div className="vibe-step__time">07.45 – 08.15 WIB</div>
          <div className="vibe-step__title">Lomba Estafet Sarung Guyub</div>
          <p className="vibe-step__desc">Permainan santai estafet sarung antartim gabungan dosen dan perwakilan mahasiswa tiap angkatan untuk memupuk keakraban.</p>
        </div>
        <div className="vibe-step" style={{textAlign: "center"}}>
          <div className="vibe-step__num" style={{background: "#F59E0B"}}>LV.5</div>
          <div className="vibe-step__time">08.15 – 08.45 WIB</div>
          <div className="vibe-step__title">Festival Kuliner UMKM &amp; Photobooth</div>
          <p className="vibe-step__desc">Menikmati sarapan lezat di stand kuliner UMKM mahasiswa menggunakan 3 chip makan dan foto seru di photobooth 360/cetak.</p>
        </div>
        <div className="vibe-step" style={{textAlign: "center"}}>
          <div className="vibe-step__num" style={{background: "#F59E0B"}}>LV.6</div>
          <div className="vibe-step__time">08.45 – 09.00 WIB</div>
          <div className="vibe-step__title">Akustik KOSMIK &amp; Penutupan</div>
          <p className="vibe-step__desc">Penampilan musik akustik merdu dari komunitas musik KOSMIK serta penutupan resmi kegiatan pagi.</p>
        </div>
      </div>
    </div>

    {/*  3. HIGHLIGHT BOX  */}
    <div className="vibe-alert-box reveal" style={{background: "#ECFDF5", borderColor: "#10B981", boxShadow: "4px 4px 0 #059669", textAlign: "center"}}>
      <div className="vibe-alert-badge" style={{color: "#065F46"}}>FASILITAS CHIP PESERTA</div>
      <div className="vibe-alert-body" style={{justifyContent: "center"}}>
        <div className="vibe-alert-icon"><svg className="px-icon px-icon--lg" viewBox="0 0 16 16"><path d="M4,2 h8 v2 h2 v4 h-2 v2 h-2 v2 h-4 v-2 h-2 v-6 h2 Z M5,4 h2 v2 h-2 Z M9,4 h2 v2 h-2 Z M5,7 h2 v2 h-2 Z" fill="#10B981"/></svg></div>
        <div className="vibe-alert-text" style={{color: "#064E3B", textAlign: "center"}}>
          <strong>FASILITAS PESERTA:</strong> Setiap peserta yang mendaftar dan hadir akan mendapatkan <strong>3 chip makan kuliner UMKM</strong> dan <strong>1 chip akses foto di photobooth</strong>.
        </div>
      </div>
    </div>

    {/*  4. CTA BUTTON (PORTAL RESMI NETLIFY)  */}
    <div className="vibe-actions reveal" style={{justifyContent: "center"}}>
      <a href="https://harmonious-tarsier-a4a80a.netlify.app/" className="btn-pixel" target="_blank" rel="noopener">
        [ DAFTAR INFORMATICS CONNECT (MAHASISWA, DOSEN &amp; ALUMNI) ]
      </a>
    </div>
  </div>
</section>
  );
}

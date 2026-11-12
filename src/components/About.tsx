import React from "react";

export default function About() {
  return (
<section className="about" id="about">
  <div className="container" style={{textAlign: "center"}}>
    <h2 className="section-title reveal">About PORSEMATIK</h2>
    <p className="section-subtitle reveal">Pekan Olahraga, Seni, dan Edukasi Mahasiswa Informatika</p>

    <div className="about__text reveal" style={{maxWidth: "860px", margin: "0 auto 3rem", textAlign: "center"}}>
      <p style={{textAlign: "center", fontSize: "1.05rem", lineHeight: "1.8", color: "#334155", marginBottom: "1.2rem"}}>
        PORSEMATIK adalah ajang tahunan bergengsi yang mempertemukan mahasiswa Informatika FTI UII dari berbagai angkatan dalam kompetisi olahraga, seni, edukasi, dan e-Sports. Tahun ini, PORSEMATIK hadir berkolaborasi dengan semarak perayaan Milad Informatika ke-32 untuk merayakan kebersamaan, daya lentur, dan semangat sportivitas tanpa batas.
      </p>
      <p style={{textAlign: "center", fontSize: "1rem", lineHeight: "1.8", color: "#475569"}}>
        Diselenggarakan oleh <strong>Panitia Pelaksana PORSEMATIK feat. Milad Informatika Tahun 2026</strong> di bawah naungan <strong>Bidang Bakat dan Kreativitas HMIF LEM FTI UII Periode 2025/2026</strong>, acara ini bertujuan mempererat solidaritas, mengasah potensi bakat mahasiswa, dan membangun sinergi inklusif civitas akademika.
      </p>
    </div>


    {/*  SUMMIT PHILOSOPHY CARD (IGNITE THE SUMMIT)  */}
    <div className="summit-card reveal" style={{maxWidth: "840px", margin: "2.5rem auto 3.5rem", background: "linear-gradient(135deg, #FEF3C7, #FFFBEB)", border: "2px solid #F59E0B", borderRadius: "12px", padding: "1.6rem 2rem", textAlign: "center", boxShadow: "4px 4px 0 #D97706"}}>
      <span className="vibe-badge" style={{color: "#B45309", background: "#FEF3C7", borderColor: "#FDE68A"}}>🏔️ THE SUMMIT PHILOSOPHY</span>
      <h3 style={{fontFamily: "var(--font-pixel)", fontSize: "clamp(.85rem,1.8vw,1.25rem)", color: "#92400E", margin: ".6rem 0 .5rem"}}>Ignite the Summit: Filosofi Puncak</h3>
      <p style={{fontFamily: "var(--font-body)", fontSize: ".98rem", color: "#78350F", lineHeight: "1.8", margin: "0", textAlign: "center"}}>Simbol perjuangan dan pendakian bersama mahasiswa Informatika FTI UII menuju puncak pencapaian tertinggi. Kobarkan obor solidaritas, ketahanan mental (resilience), dan kreativitas tanpa batas melalui sportivitas sejati.</p>
    </div>


    {/*  6 Value Cards Grid  */}
    <div className="values-grid reveal">
      <div className="value-card">
        <div className="value-card__icon"><svg className="px-icon px-icon--lg" viewBox="0 0 24 24"><path d="M11,1 h2 v2 h-2 Z M10,3 h4 v2 h-4 Z M8,5 h8 v3 h-8 Z M5,8 h14 v3 h-14 Z M3,11 h18 v11 h-18 Z M6,14 h4 v8 h-4 Z M14,14 h4 v8 h-4 Z M10,14 h4 v3 h-4 Z" fill="#F59E0B"/><circle cx="12" cy="7" r="1.5" fill="#FEF08A"/></svg></div>
        <div className="value-card__title">Keislaman</div>
        <p className="value-card__desc">Menanamkan nilai-nilai keislaman dalam setiap kegiatan dan interaksi.</p>
      </div>
      <div className="value-card">
        <div className="value-card__icon"><svg className="px-icon px-icon--lg" viewBox="0 0 24 24"><path d="M3,3 h18 v16 h-18 Z M5,5 h6 v12 h-6 Z M13,5 h6 v12 h-6 Z M2,19 h20 v2 h-20 Z" fill="#3B82F6"/><rect x="7" y="7" width="2" height="8" fill="#F59E0B"/><rect x="15" y="7" width="2" height="8" fill="#F59E0B"/></svg></div>
        <div className="value-card__title">Keilmuan</div>
        <p className="value-card__desc">Mendorong semangat belajar dan pengembangan ilmu pengetahuan.</p>
      </div>
      <div className="value-card">
        <div className="value-card__icon"><svg className="px-icon px-icon--lg" viewBox="0 0 24 24"><path d="M4,2 h16 v10 c0,6 -8,10 -8,10 c0,0 -8,-4 -8,-10 Z" fill="#EF4444"/><polygon points="12,5 14,9 18,10 15,13 16,17 12,15 8,17 9,13 6,10 10,9" fill="#FEF08A"/></svg></div>
        <div className="value-card__title">Kepercayaan Diri</div>
        <p className="value-card__desc">Membangun keberanian tampil dan berkarya di depan publik.</p>
      </div>
      <div className="value-card">
        <div className="value-card__icon"><svg className="px-icon px-icon--lg" viewBox="0 0 24 24"><path d="M5,3 h14 v3 h2 v8 h-3 v3 h-3 v3 h-7 v-3 h-3 v-11 h3 Z" fill="#EC4899"/><circle cx="8" cy="8" r="1.8" fill="#FDE047"/><circle cx="14" cy="7" r="1.8" fill="#38BDF8"/><circle cx="16" cy="12" r="1.8" fill="#22C55E"/><circle cx="10" cy="14" r="1.8" fill="#F97316"/></svg></div>
        <div className="value-card__title">Kreativitas</div>
        <p className="value-card__desc">Mengeksplorasi ide-ide kreatif melalui seni dan teknologi.</p>
      </div>
      <div className="value-card">
        <div className="value-card__icon"><svg className="px-icon px-icon--lg" viewBox="0 0 24 24"><path d="M6,2 h12 v8 h-2 v4 h-3 v4 h5 v3 h-12 v-3 h5 v-4 h-3 v-4 h-2 Z M2,4 h4 v6 h-4 Z M18,4 h4 v6 h-4 Z" fill="#F59E0B"/><rect x="9" y="5" width="6" height="3" fill="#FEF08A"/></svg></div>
        <div className="value-card__title">Sportivitas</div>
        <p className="value-card__desc">Menjunjung tinggi semangat fair play dalam setiap pertandingan.</p>
      </div>
      <div className="value-card">
        <div className="value-card__icon"><svg className="px-icon px-icon--lg" viewBox="0 0 24 24"><path d="M4,4 h6 v3 h-6 Z M14,4 h6 v3 h-6 Z M2,7 h20 v6 h-20 Z M5,13 h14 v4 h-14 Z M8,17 h8 v4 h-8 Z" fill="#10B981"/><path d="M12,8 l3,3 l-3,3 l-3,-3 Z" fill="#FDE047"/></svg></div>
        <div className="value-card__title">Keharmonisan</div>
        <p className="value-card__desc">Memperkuat tali silaturahmi dan kebersamaan antar angkatan.</p>
      </div>
    </div>
  </div>
</section>
  );
}

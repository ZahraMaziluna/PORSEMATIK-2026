import React from "react";

export default function Footer() {
  return (
<footer className="footer">
  <div className="footer__grid-4">
    {/*  Kolom 1: Identitas Acara  */}
    <div className="footer__col footer__col--identity">
      <div className="footer__badges">
        <span className="f-badge">UII</span>
        <span className="f-badge">HMIF LEM FTI</span>
        <span className="f-badge">32 MILAD</span>
        <span className="f-badge">MMXXVI</span>
      </div>
      <h3 className="footer__title">PORSEMATIK feat. Milad Informatika Tahun 2026</h3>
      <p className="footer__tagline">"Ignite the Summit: Elevating Solidarity, Resilience, and Creativity through Sportsmanship"</p>
    </div>

    {/*  Kolom 2: Navigasi Halaman  */}
    <div className="footer__col footer__col--nav">
      <h4 className="footer__heading">Navigasi Halaman</h4>
      <ul className="footer__nav-links">
        <li><a href="#hero">Beranda</a></li>
        <li><a href="#about">Tentang Acara</a></li>
        <li><a href="#events">Informatics Connect</a></li>
        <li><a href="#competitions">Katalog Kompetisi</a></li>
        <li><a href="#vibeit">VibeIT (Workshop SMA)</a></li>
        <li><a href="#schedule">Jadwal &amp; Klasemen</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
    </div>

    {/*  Kolom 3: Sekretariat & Kontak Resmi  */}
    <div className="footer__col footer__col--contact">
      <h4 className="footer__heading">Sekretariat &amp; Kontak</h4>
      <p className="footer__org-text" style={{lineHeight: "1.7"}}>
        <span style={{fontSize: "0.85rem", color: "#94A3B8"}}>Penyelenggara:</span><br />
        <strong style={{fontSize: "1.02rem", color: "#FDE047", display: "inline-block", margin: "0.2rem 0"}}>Panitia Pelaksana PORSEMATIK feat. Milad Informatika Tahun 2026</strong><br />
        <span style={{fontSize: "0.84rem", color: "#CBD5E1"}}>(Di bawah naungan Bidang Bakat dan Kreativitas HMIF LEM FTI UII Periode 2025/2026)</span>
      </p>
      <p className="footer__address-text">📍 Komplek Kantor Lembaga Kemahasiswaan UII, Jl. Kaliurang KM 14,5 Sleman, DIY, 55584</p>
      <div className="footer__contact-items">
        <a href="https://wa.me/6285819691653" target="_blank" rel="noopener" className="f-contact-link">📱 WhatsApp: 085819691653</a>
        <a href="mailto:porsematik@gmail.com" className="f-contact-link">📧 Email: porsematik@gmail.com</a>
        <a href="https://instagram.com/porsematik" target="_blank" rel="noopener" className="f-contact-link">📸 Instagram: @porsematik</a>
        <a href="https://github.com/ZahraMaziluna/PORSEMATIK-2026" target="_blank" rel="noopener" className="f-contact-link">🐙 GitHub: @ZahraMaziluna/PORSEMATIK-2026</a>
      </div>
    </div>

    {/*  Kolom 4: Akses Cepat Pendaftaran  */}
    <div className="footer__col footer__col--cta">
      <h4 className="footer__heading">Akses Pendaftaran</h4>
      <p className="footer__cta-desc">Seluruh pendaftaran kompetisi, guidebook, dan pengumpulan berkas terpusat di portal resmi:</p>
      <a href="https://linktr.ee/porsematik2026" target="_blank" rel="noopener" className="btn-pixel btn-pixel--footer">
        [ Portal Pendaftaran (Linktree) ]
      </a>
      <div className="footer__doc-shortcut">
        <a href="E-Guidebook-PORSEMATIK-2026.pdf" download="E-Guidebook-PORSEMATIK-2026.pdf" className="btn-pixel-text">
          <span>📖</span> Unduh E-Guidebook (PDF)
        </a>
      </div>
    </div>
  </div>

  <div className="footer__bottom-bar">
    <p>&copy; 2026 Panitia PORSEMATIK feat. Milad Informatika Tahun 2026 — HMIF LEM FTI Universitas Islam Indonesia.</p>
  </div>
</footer>
  );
}

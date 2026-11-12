import React from "react";
import Link from "next/link";
import PixelIcon from "@/components/icons/PixelIcon";
import ClimberRunner from "@/components/layout/ClimberRunner";

const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/jadwal", label: "Jadwal" },
  { href: "/klasemen", label: "Klasemen" },
  { href: "/kompetisi", label: "Katalog Kompetisi" },
  { href: "/informatics-connect", label: "Informatics Connect" },
  { href: "/vibeit", label: "VibeIT (Workshop SMA)" },
  { href: "/#galeri", label: "Dokumentasi 2025" },
  { href: "/faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <>
    <ClimberRunner />
    <footer className="footer">
      <div className="footer__grid-4">
        {/* Kolom kiri: identitas acara */}
        <div className="footer__col footer__col--identity">
          <div className="fk-card fk-card--brand">
            <span className="fk-brand__name">PORSEMATIK</span>
            <span className="fk-mark fk-mark--gold">2026</span>
          </div>

          <div className="fk-card fk-card--story">
            <span className="fk-tag fk-tag--float">Our Story</span>
            <p className="fk-story__text">
              Satu panggung buat mahasiswa Informatika UII untuk{" "}
              <mark className="fk-mark fk-mark--green">berolahraga</mark>,{" "}
              <mark className="fk-mark fk-mark--gold">berkarya</mark>, dan merayakan{" "}
              <mark className="fk-mark fk-mark--ink">32 tahun</mark> Milad Informatika.
            </p>
            <hr className="fk-rule" />
            <p className="fk-story__tagline">
              &quot;Ignite the Summit: Elevating Solidarity, Resilience, and Creativity through Sportsmanship&quot;
            </p>
          </div>

          <div className="fk-socials">
            <a
              href="https://instagram.com/porsematik"
              target="_blank"
              rel="noopener noreferrer"
              className="fk-social"
              aria-label="Instagram @porsematik"
            >
              <PixelIcon name="camera" />
            </a>
            <a
              href="https://github.com/ZahraMaziluna/PORSEMATIK-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="fk-social"
              aria-label="GitHub PORSEMATIK-2026"
            >
              <PixelIcon name="branch" />
            </a>
            <a
              href="https://wa.me/6285819691653"
              target="_blank"
              rel="noopener noreferrer"
              className="fk-social"
              aria-label="WhatsApp 085819691653"
            >
              <PixelIcon name="phone" />
            </a>
          </div>
        </div>

        {/* Kolom tengah: navigasi */}
        <nav className="footer__col footer__col--nav" aria-label="Navigasi footer">
          <h4 className="fk-label">Navigasi</h4>
          <ul className="footer__nav-links">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Kolom kanan: kontak */}
        <div className="footer__col footer__col--contact">
          <h4 className="fk-label">Kontak</h4>

          <div className="fk-info">
            <strong>Panitia Pelaksana PORSEMATIK feat. Milad Informatika Tahun 2026</strong>
            <span>Bidang Bakat dan Kreativitas HMIF LEM FTI UII Periode 2025/2026</span>
          </div>

          <div className="fk-info fk-info--row">
            <PixelIcon name="pin" />
            <span>Komplek Kantor Lembaga Kemahasiswaan UII, Jl. Kaliurang KM 14,5 Sleman, DIY, 55584</span>
          </div>

          <a href="mailto:porsematik@gmail.com" className="fk-info fk-info--link">
            <PixelIcon name="mail" />
            <span>porsematik@gmail.com</span>
          </a>

          <a
            href="https://linktr.ee/porsematik2026"
            target="_blank"
            rel="noopener noreferrer"
            className="fk-cta"
          >
            Daftar Lomba
          </a>
          <a
            href="/E-Guidebook-PORSEMATIK-2026.pdf"
            download="E-Guidebook-PORSEMATIK-2026.pdf"
            className="fk-guide"
          >
            <PixelIcon name="book" />
            <span>Unduh E-Guidebook (PDF)</span>
          </a>
        </div>
      </div>

      <div className="footer__bottom-bar">
        <p>
          &copy; 2026 Panitia PORSEMATIK feat. Milad Informatika Tahun 2026, HMIF LEM FTI Universitas Islam
          Indonesia.
        </p>
        <p className="footer__credit">- Luna ft Guevara -</p>
      </div>
    </footer>
    </>
  );
}

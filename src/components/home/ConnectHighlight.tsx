import React from "react";
import Link from "next/link";
import PixelIcon from "@/components/icons/PixelIcon";

const CONNECT_URL = "https://storied-florentine-b344b6.netlify.app";

/* Ringkasan dari ConnectSection.tsx (halaman /informatics-connect). Ubah keduanya bila jadwal berubah. */
const AGENDA: ReadonlyArray<{ time: string; title: string }> = [
  { time: "06.00", title: "Registrasi & Penukaran Chip" },
  { time: "06.30", title: "Senam Sehat Ceria Bersama" },
  { time: "07.15", title: "Potong Tumpeng & Wish Note" },
  { time: "07.45", title: "Lomba Estafet Sarung" },
  { time: "08.15", title: "Festival Kuliner UMKM & Photobooth (diiringi Akustik KOSMIK)" },
  { time: "08.45", title: "Penutupan" },
];

export default function ConnectHighlight() {
  return (
    <section className="ichl" id="connect-highlight" aria-labelledby="ichl-title">
      <div className="container ichl__grid">
        <div className="ichl__lead">
          <span className="ichl__tag reveal">Event Highlight • Community &amp; Alumni Gathering</span>
          <h2 className="ichl__title reveal" id="ichl-title">Informatics Connect</h2>
          <p className="ichl__text reveal">
            Pagi kebersamaan mahasiswa aktif, dosen, dan alumni Informatika FTI UII untuk mempererat silaturahmi dalam
            semarak Milad ke-32.
          </p>

          <div className="ichl__clock reveal" role="group" aria-label="Selasa, 17 November 2026, pukul 06.00 sampai 09.00 WIB">
            <div className="ichl__clock-day" aria-hidden="true">SELASA • 17 NOV 2026</div>
            <div className="ichl__clock-time" aria-hidden="true">
              <span>06.00</span>
              <i>→</i>
              <span>09.00</span>
            </div>
            <div className="ichl__clock-zone" aria-hidden="true">WIB • 3 JAM KEBERSAMAAN</div>
          </div>

          <ul className="ichl__facts reveal">
            <li>
              <PixelIcon name="pin" /> <span>Lapangan Utara GOR UII</span>
            </li>
            <li>
              <PixelIcon name="users" /> <span>Mahasiswa, dosen, tenaga kependidikan, dan alumni</span>
            </li>
          </ul>

          <div className="ichl__chips reveal">
            <span className="ichl__chip"><b>3×</b> chip makan kuliner UMKM</span>
            <span className="ichl__chip"><b>1×</b> chip photobooth</span>
          </div>

          <div className="ichl__actions reveal">
            <a href={CONNECT_URL} className="btn-pixel" target="_blank" rel="noopener noreferrer">
              [ DAFTAR CONNECT ]
            </a>
            <Link href="/informatics-connect" className="btn-pixel btn-pixel--secondary">
              [ LIHAT DETAIL ]
            </Link>
          </div>
        </div>

        <div className="ichl__ticket reveal">
          <div className="ichl__ticket-head">
            <span>TIKET AGENDA PAGI</span>
            <span>LV.1 – LV.6</span>
          </div>
          <ol className="ichl__agenda">
            {AGENDA.map((item, index) => (
              <li key={item.time}>
                <span className="ichl__lv">LV.{index + 1}</span>
                <span className="ichl__time">{item.time}</span>
                <span className="ichl__what">{item.title}</span>
              </li>
            ))}
          </ol>
          <div className="ichl__ticket-foot">Chip gratis untuk peserta yang mendaftar dan hadir</div>
        </div>
      </div>
    </section>
  );
}

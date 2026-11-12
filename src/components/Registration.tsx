import React from "react";
import Link from "next/link";
import PixelIcon, { type PixelIconName } from "@/components/icons/PixelIcon";

const REGISTRATION_URL = "https://linktr.ee/porsematik2026";

/* Ringkasan 6 cabang lomba. Angka diambil dari Competitions.tsx, ubah keduanya bila berubah. */
const COMPETITIONS: ReadonlyArray<{
  key: string;
  badge: "sports" | "esport" | "art" | "education";
  badgeLabel: string;
  name: string;
  slotIcon: PixelIconName;
  slot: string;
  fee: string;
  unit: string;
  cta: string;
}> = [
  { key: "futsal", badge: "sports", badgeLabel: "SPORTS", name: "Futsal Competition", slotIcon: "users", slot: "Kuota: 1–2 Tim / Angkatan", fee: "150.000", unit: "tim", cta: "DAFTAR FUTSAL" },
  { key: "basket", badge: "sports", badgeLabel: "SPORTS", name: "Basketball Competition", slotIcon: "users", slot: "Kuota: Maks. 1 Tim / Angkatan", fee: "150.000", unit: "tim", cta: "DAFTAR BASKET" },
  { key: "mlbb", badge: "esport", badgeLabel: "E-SPORT", name: "Mobile Legends: Bang Bang", slotIcon: "users", slot: "Kuota: 1–2 Tim / Angkatan", fee: "50.000", unit: "tim", cta: "DAFTAR MLBB" },
  { key: "poster", badge: "art", badgeLabel: "ART", name: "Poster Digital Competition", slotIcon: "person", slot: "Individu: 1–3 Karya / Angkatan", fee: "50.000", unit: "peserta", cta: "DAFTAR POSTER" },
  { key: "foto", badge: "art", badgeLabel: "ART", name: "Photography & Narrative", slotIcon: "person", slot: "Individu: 1–3 Karya / Angkatan", fee: "50.000", unit: "peserta", cta: "DAFTAR FOTOGRAFI" },
  { key: "uiux", badge: "education", badgeLabel: "EDUCATION", name: "UI/UX Design Competition", slotIcon: "users", slot: "Kuota: 1–2 Tim / Angkatan", fee: "50.000", unit: "tim", cta: "DAFTAR UI/UX" },
];

export default function Registration() {
  return (
    <section className="registration" id="pendaftaran">
      <div className="container">
        <h2 className="section-title reveal">Pendaftaran Lomba</h2>
        <p className="section-subtitle reveal">
          Pendaftaran 10 Nov (12:00 WIB) sampai 13 Nov 2026 (12:00 WIB) untuk Mahasiswa Aktif Informatika FTI UII
          Angkatan 2023, 2024, 2025, dan 2026. Wajib melampirkan KTM atau KTM Digital.
        </p>

        <div className="reg-grid">
          {COMPETITIONS.map((item) => (
            <article className="reg-card" key={item.key}>
              <div>
                <span className={`comp-card__badge comp-card__badge--${item.badge}`}>{item.badgeLabel}</span>
              </div>
              <h3 className="reg-card__name">{item.name}</h3>
              <p className="reg-card__line">
                <PixelIcon name={item.slotIcon} />
                <span>{item.slot}</span>
              </p>
              <p className="reg-card__line">
                <span>
                  Biaya: <strong>Rp{item.fee}</strong> / {item.unit}
                </span>
              </p>
              <div className="reg-card__actions">
                <a href={REGISTRATION_URL} className="btn-pixel" target="_blank" rel="noopener noreferrer">
                  [ {item.cta} ]
                </a>
                <Link href="/kompetisi" className="reg-card__detail">
                  Lihat detail lomba
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

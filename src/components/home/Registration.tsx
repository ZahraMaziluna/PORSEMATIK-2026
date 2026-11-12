import React from "react";
import Link from "next/link";
import PixelIcon, { type PixelIconName } from "@/components/icons/PixelIcon";

const REGISTRATION_URL = "https://linktr.ee/porsematik2026";

/* Ringkasan 6 cabang lomba. Angka diambil dari Competitions.tsx, ubah keduanya bila berubah. */
const COMPETITIONS: ReadonlyArray<{
  key: string;
  tone: "green" | "orange" | "gold";
  badgeLabel: string;
  icon: PixelIconName;
  name: string;
  format: string;
  slot: string;
  fee: string;
  unit: string;
  cta: string;
}> = [
  { key: "futsal", tone: "green", badgeLabel: "SPORTS", icon: "users", name: "Futsal Competition", format: "TIM", slot: "Kuota: 1–2 tim / angkatan", fee: "150.000", unit: "tim", cta: "DAFTAR FUTSAL" },
  { key: "basket", tone: "green", badgeLabel: "SPORTS", icon: "users", name: "Basketball Competition", format: "TIM", slot: "Kuota: maks. 1 tim / angkatan", fee: "150.000", unit: "tim", cta: "DAFTAR BASKET" },
  { key: "mlbb", tone: "orange", badgeLabel: "E-SPORT", icon: "users", name: "Mobile Legends: Bang Bang", format: "TIM", slot: "Kuota: 1–2 tim / angkatan", fee: "50.000", unit: "tim", cta: "DAFTAR MLBB" },
  { key: "poster", tone: "gold", badgeLabel: "ART", icon: "person", name: "Poster Digital Competition", format: "INDIVIDU", slot: "1–3 karya / angkatan", fee: "50.000", unit: "peserta", cta: "DAFTAR POSTER" },
  { key: "foto", tone: "gold", badgeLabel: "ART", icon: "camera", name: "Photography & Narrative", format: "INDIVIDU", slot: "1–3 karya / angkatan", fee: "50.000", unit: "peserta", cta: "DAFTAR FOTOGRAFI" },
  { key: "uiux", tone: "orange", badgeLabel: "EDUCATION", icon: "code", name: "UI/UX Design Competition", format: "TIM", slot: "Kuota: 1–2 tim / angkatan", fee: "50.000", unit: "tim", cta: "DAFTAR UI/UX" },
];

export default function Registration() {
  return (
    <section className="registration" id="pendaftaran">
      <div className="container">
        <span className="sec-badge reveal">Daftar Sekarang</span>
        <h2 className="section-title reveal">Pendaftaran Lomba</h2>
        <p className="section-subtitle reveal">
          Pendaftaran 10 Nov (12:00 WIB) sampai 13 Nov 2026 (12:00 WIB) untuk Mahasiswa Aktif Informatika FTI UII
          Angkatan 2023, 2024, 2025, dan 2026. Wajib melampirkan KTM atau KTM Digital.
        </p>

        <div className="reg-grid">
          {COMPETITIONS.map((item) => (
            <article className={`reg-card reg-card--${item.tone}`} key={item.key}>
              <header className="reg-card__head">
                <span className="reg-card__badge">{item.badgeLabel}</span>
                <PixelIcon name={item.icon} className="reg-card__icon" />
              </header>
              <span className="reg-card__tag">{item.format}</span>
              <h3 className="reg-card__name">{item.name}</h3>
              <p className="reg-card__line">{item.slot}</p>
              <p className="reg-card__line">
                Biaya: <strong>Rp{item.fee}</strong> / {item.unit}
              </p>
              <div className="reg-card__actions">
                <a href={REGISTRATION_URL} className="reg-btn reg-btn--primary" target="_blank" rel="noopener noreferrer">
                  <PixelIcon name="person" />
                  {item.cta}
                </a>
                <Link href="/kompetisi" className="reg-btn reg-btn--dark">
                  <PixelIcon name="chevronRight" />
                  LIHAT DETAIL LOMBA
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

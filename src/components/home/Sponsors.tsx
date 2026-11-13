import React from "react";
import PixelIcon from "@/components/icons/PixelIcon";
import { SPONSORS, type Partner } from "@/data/sponsors";

const PLACEHOLDER_COUNT = 6;
const MIN_PER_HALF = 12;

type Slot = { key: string; partner?: Partner; label: string };

/* Daftar kosong -> slot kosong bernomor. Daftar berisi -> logo asli. */
function toSlots(partners: readonly Partner[], placeholder: string): Slot[] {
  if (partners.length === 0) {
    return Array.from({ length: PLACEHOLDER_COUNT }, (_, i) => ({ key: `slot-${i}`, label: `${placeholder} ${i + 1}` }));
  }
  return partners.map((partner) => ({ key: partner.name, partner, label: partner.name }));
}

/* Satu jalur marquee: separuh daftar diulang sampai cukup lebar, lalu digandakan agar loop mulus. */
function Row({ slots, reverse }: { slots: Slot[]; reverse?: boolean }) {
  const half: Slot[] = [];
  while (half.length < Math.max(MIN_PER_HALF, slots.length)) half.push(...slots);

  const card = (slot: Slot, index: number, dup: boolean) => {
    const body = slot.partner ? (
      <img src={slot.partner.logo} alt={dup ? "" : slot.partner.name} loading="lazy" />
    ) : (
      <span className="sponsor-card__slot" aria-hidden="true">
        <PixelIcon name="star" />
      </span>
    );
    const inner = (
      <>
        <span className="sponsor-card__logo">{body}</span>
        <span className="sponsor-card__name">{slot.label}</span>
      </>
    );
    const key = `${dup ? "b" : "a"}-${slot.key}-${index}`;
    return slot.partner?.href && !dup ? (
      <a className="sponsor-card" key={key} href={slot.partner.href} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    ) : (
      <div className="sponsor-card" key={key}>{inner}</div>
    );
  };

  return (
    <div className="sponsor-row">
      <div className={`sponsor-track${reverse ? " sponsor-track--reverse" : ""}`}>
        {half.map((slot, i) => card(slot, i, false))}
        <span className="sponsor-dup" aria-hidden="true">
          {half.map((slot, i) => card(slot, i, true))}
        </span>
      </div>
    </div>
  );
}

export default function Sponsors() {
  return (
    <section className="sponsors" id="sponsor" aria-labelledby="sponsor-title">
      <div className="container">
        <span className="sec-badge reveal">Mitra Acara</span>
        <h2 className="section-title reveal" id="sponsor-title">OUR SPONSOR</h2>
      </div>

      <Row slots={toSlots(SPONSORS, "Slot Sponsor")} />
    </section>
  );
}

import React from "react";
import PixelIcon from "@/components/icons/PixelIcon";

const ITEMS = [
  "Futsal",
  "Basket",
  "Mobile Legends",
  "Poster Digital",
  "Fotografi",
  "UI/UX",
  "Informatics Connect",
  "VibeIT",
];

/* Pita arcade berjalan berisi cabang lomba dan acara. Isi diduplikasi agar loop -50% mulus. */
export default function HomeTicker() {
  return (
    <div className="arcade-marquee" role="region" aria-label="Cabang lomba dan acara PORSEMATIK 2026">
      <div className="arcade-marquee__track">
        {[0, 1].map((copy) => (
          <React.Fragment key={copy}>
            {ITEMS.map((item) => (
              <React.Fragment key={`${copy}-${item}`}>
                <span aria-hidden={copy === 1 ? true : undefined}>{item}</span>
                <span className="star" aria-hidden="true">
                  <PixelIcon name="star" />
                </span>
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

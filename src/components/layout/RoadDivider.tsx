import React from "react";
import PixelIcon from "@/components/icons/PixelIcon";
import PixelHiker from "@/components/icons/PixelHiker";

/*
 * Pembatas bertema jalan: jalan tanah piksel horizontal berbingkai slate dengan garis tengah
 * kuning putus-putus, sama dengan jalan di Roadmap dan Jadwal. Pendaki berdiri di jalan menuju
 * bendera. Statis, tidak ada animasi baru. Diapit dua PixelDivider di halaman (lihat RoadBreak di
 * app/page.tsx). Variant a/b/c hanya menggeser posisi pendaki dan bendera agar tiap jalan berbeda.
 */
export default function RoadDivider({ variant = "a" }: { variant?: "a" | "b" | "c" }) {
  return (
    <div className="road-divider" data-variant={variant} aria-hidden="true">
      <span className="road-divider__hiker">
        <PixelHiker frame="a" />
      </span>
      <span className="road-divider__flag">
        <PixelIcon name="flag" />
      </span>
    </div>
  );
}

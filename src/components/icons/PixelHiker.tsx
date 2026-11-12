import React from "react";

/*
 * Pendaki piksel tampak depan: topi oranye, jaket hijau, carrier cokelat dengan
 * matras kuning di atasnya, dan tongkat trekking. Dua frame beda posisi kaki
 * untuk animasi berjalan. Digambar sebagai grid teks, sama seperti PixelIcon.
 */
const PALETTE: Record<string, string> = {
  Y: "#FDE047", // matras gulung
  B: "#92400E", // carrier
  b: "#B45309", // carrier sisi terang
  K: "#1E293B", // garis dan sepatu
  O: "#FF7A00", // topi
  F: "#FDBA74", // kulit
  G: "#22C55E", // jaket
  g: "#15803D", // resleting
  P: "#334155", // celana
  T: "#94A3B8", // tongkat
};

const BODY = [
  "................",
  "....YYYYYYYY....",
  "...BBBBBBBBBB...",
  "...BBKOOOOKBB...",
  "...BKOOOOOOKB...",
  "...BBFFFFFFBB...",
  "...BBFKFFKFBB...",
  "...BBFFFFFFBB...",
  "...BBGGFFGGBB...",
  "..BBGGGGGGGGBB.T",
  "..BBGGGggGGGBB.T",
  ".BBbGGGggGGGbBBT",
  ".BBbGGGggGGGbBFT",
  ".BBbGGGGGGGGbB.T",
  ".BBbPPPPPPPPbB.T",
  "..BBPPPPPPPPBB.T",
];

const LEGS = {
  a: [
    "....PPP..PPP...T",
    "....PPP..PPP...T",
    "....KKK..PPP...T",
    ".........KKK...T",
  ],
  b: [
    "....PPP..PPP...T",
    "....PPP..PPP...T",
    "....PPP..KKK...T",
    "....KKK........T",
  ],
} as const;

function toRects(rows: readonly string[]) {
  const rects: Array<{ x: number; y: number; w: number; fill: string }> = [];
  rows.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const ch = row[x];
      if (ch === ".") {
        x += 1;
        continue;
      }
      let run = 1;
      while (row[x + run] === ch) run += 1;
      rects.push({ x, y, w: run, fill: PALETTE[ch] });
      x += run;
    }
  });
  return rects;
}

export default function PixelHiker({ frame }: { frame: "a" | "b" }) {
  const rects = toRects([...BODY, ...LEGS[frame]]);
  return (
    <svg viewBox="0 0 16 20" shapeRendering="crispEdges" aria-hidden="true" focusable="false">
      {rects.map((r, i) => (
        <rect key={i} x={r.x} y={r.y} width={r.w} height={1} fill={r.fill} />
      ))}
    </svg>
  );
}

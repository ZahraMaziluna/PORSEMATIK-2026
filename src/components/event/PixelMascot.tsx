import React from "react";
import { MASCOTS, MASCOT_SIZE, type MascotId } from "./mascots";

interface PixelMascotProps {
  id: MascotId;
  className?: string;
}

function toRects(rows: string[], palette: Record<string, string>) {
  const rects: React.ReactElement[] = [];
  rows.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const char = row[x];
      if (char === ".") {
        x += 1;
        continue;
      }
      let run = 1;
      while (row[x + run] === char) run += 1;
      rects.push(
        <rect key={`${y}-${x}`} x={x} y={y} width={run} height={1} fill={palette[char]} />,
      );
      x += run;
    }
  });
  return rects;
}

export default function PixelMascot({ id, className }: PixelMascotProps) {
  const sprite = MASCOTS[id];
  return (
    <svg
      className={className ? `ev-mascot ${className}` : "ev-mascot"}
      viewBox={`0 0 ${MASCOT_SIZE.width} ${MASCOT_SIZE.height}`}
      shapeRendering="crispEdges"
      role="img"
      aria-label={sprite.label}
    >
      {toRects(sprite.rows, sprite.palette)}
    </svg>
  );
}

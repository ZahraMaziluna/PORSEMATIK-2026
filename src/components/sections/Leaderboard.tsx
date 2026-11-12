import React from "react";
import PixelIcon from "@/components/icons/PixelIcon";
import PixelHiker from "@/components/icons/PixelHiker";

/*
 * Klasemen Juara Umum sebagai pendakian: tiap angkatan satu jalur gunung, pendaki berjalan ke
 * puncak sesuai total poin. Posisi dihitung relatif terhadap angkatan dengan poin tertinggi,
 * jadi tidak butuh angka batas yang tidak ada di sumber panitia.
 *
 * Isi poin di POINTS bila sudah ada, contoh: { "2023": { Futsal: 3, Basket: 2 } }.
 * Cabang yang belum tercatat dibiarkan kosong dan tampil sebagai tanda strip.
 */
const BRANCHES = ["Futsal", "Basket", "ML", "Poster", "Photo", "UI/UX", "Best Supporter"] as const;
type Branch = (typeof BRANCHES)[number];

const YEARS = ["2023", "2024", "2025", "2026"] as const;

const POINTS: Partial<Record<(typeof YEARS)[number], Partial<Record<Branch, number>>>> = {};

interface Row {
  year: (typeof YEARS)[number];
  total: number | null;
  recorded: boolean;
  rank: number | null;
  progress: number;
}

function buildRows(): Row[] {
  const rows = YEARS.map((year) => {
    const values = BRANCHES.map((branch) => POINTS[year]?.[branch]).filter(
      (value): value is number => typeof value === "number",
    );
    const recorded = values.length > 0;
    return { year, recorded, total: recorded ? values.reduce((sum, value) => sum + value, 0) : null };
  });

  const best = Math.max(0, ...rows.map((row) => row.total ?? 0));
  const ranked = [...rows].sort((a, b) => (b.total ?? -1) - (a.total ?? -1) || a.year.localeCompare(b.year));

  return ranked.map((row, index) => ({
    ...row,
    rank: best > 0 && row.recorded ? index + 1 : null,
    progress: best > 0 ? (row.total ?? 0) / best : 0,
  }));
}

export default function Leaderboard() {
  const rows = buildRows();
  const started = rows.some((row) => row.recorded);

  return (
    <section className="climb" id="leaderboard">
      <div className="container">
        <span className="sec-badge">Juara Umum Angkatan</span>
        <h2 className="section-title">Pendakian Juara Umum</h2>
        <p className="section-subtitle">
          Setiap poin dari cabang lomba mendorong angkatanmu naik ke puncak. Perolehan poin sementara.
        </p>

        <ol className="climb-grid">
          {rows.map((row) => (
            <li className="climb-lane" key={row.year} style={{ "--p": row.progress } as React.CSSProperties}>
              <header className="climb-lane__head">
                <span className="climb-lane__rank">{row.rank ? `#${row.rank}` : "Belum ada"}</span>
                <h3 className="climb-lane__year">Angkatan {row.year}</h3>
                <p className="climb-lane__total">
                  <strong>{row.total ?? "-"}</strong> poin
                </p>
              </header>

              <div className="climb-track" role="img" aria-label={`Posisi pendakian angkatan ${row.year}`}>
                <span className="climb-track__camp">Basecamp</span>
                <span className="climb-hiker" aria-hidden="true">
                  <PixelHiker frame="a" />
                </span>
                <span className="climb-road" aria-hidden="true" />
                <span className="climb-summit">
                  <PixelIcon name="flag" />
                  Puncak
                </span>
              </div>

              <ul className="climb-branches">
                {BRANCHES.map((branch) => {
                  const value = POINTS[row.year]?.[branch];
                  return (
                    <li key={branch} className={value === undefined ? "is-empty" : undefined}>
                      <span>{branch}</span>
                      <strong>{value ?? "-"}</strong>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ol>

        <p className="climb-note">
          Tanda strip berarti poin belum tercatat.{" "}
          {started
            ? "Posisi pendaki dihitung relatif terhadap angkatan dengan poin tertinggi."
            : "Semua pendaki masih di basecamp sampai poin pertama tercatat."}
        </p>
      </div>
    </section>
  );
}

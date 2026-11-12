import React from "react";
import PixelIcon from "@/components/icons/PixelIcon";

const COLUMNS = ["Rank", "Angkatan", "Futsal", "Basket", "ML", "Poster", "Photo", "UI/UX", "Best Supporter", "Total"];
const YEARS = ["2023", "2024", "2025", "2026"];

export default function Leaderboard() {
  return (
    <section className="leaderboard" id="leaderboard">
      <div className="container">
        <h2 className="section-title reveal">
          <PixelIcon name="trophy" /> Klasemen Juara Umum Angkatan
        </h2>
        <p className="section-subtitle reveal">
          Perolehan poin sementara dari seluruh cabang lomba.
        </p>

        <div className="table-wrap reveal" role="region" aria-label="Tabel klasemen, geser ke samping untuk melihat semua kolom" tabIndex={0}>
          <table>
            <thead>
              <tr>
                {COLUMNS.map((column) => (
                  <th key={column} scope="col">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {YEARS.map((year) => (
                <tr key={year}>
                  <td>-</td>
                  <td>{year}</td>
                  {COLUMNS.slice(2).map((column) => (
                    <td key={column}>-</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="table-hint">Tanda strip berarti poin belum tercatat.</p>
      </div>
    </section>
  );
}

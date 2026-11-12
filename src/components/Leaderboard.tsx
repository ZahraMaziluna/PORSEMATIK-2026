import React from "react";

export default function Leaderboard() {
  return (
<section className="leaderboard" id="leaderboard">
  <div className="container">
    <h2 className="section-title reveal">🏆 Klasemen Juara Umum Angkatan</h2>
    <p className="section-subtitle reveal">Perolehan poin sementara dari seluruh cabang lomba.</p>

    <div className="table-wrap reveal">
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Angkatan</th>
            <th>Futsal</th>
            <th>Basket</th>
            <th>ML</th>
            <th>Poster</th>
            <th>Photo</th>
            <th>UI/UX</th>
            <th>Best Supporter</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>—</td><td>2023</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
          <tr><td>—</td><td>2024</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
          <tr><td>—</td><td>2025</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
          <tr><td>—</td><td>2026</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
        </tbody>
      </table>
    </div>
  </div>

    </section>
  );
}

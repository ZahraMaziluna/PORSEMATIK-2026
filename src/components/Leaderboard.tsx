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

    {/*  7 SWAYING FLOATING 8-BIT PIXEL STICKERS (HERO SKY)  */}
  <div className="hanging-sticker sticker--trophy" title="Piala Bergilir Milad 32">
    <div className="washi-tape washi-tape--yellow"></div>
    <svg viewBox="0 0 64 64" width="56" height="56" className="sticker-svg">
      <path d="M16,6 h32 v8 h8 v18 h-10 v10 h6 v6 h-14 v8 h10 v4 h-28 v-4 h10 v-8 h-14 v-6 h6 v-10 h-10 v-18 h8 Z" fill="#FFFFFF"/>
      <path d="M18,8 h28 v6 h-28 Z M18,14 h28 v8 h-4 v6 h-6 v6 h-8 v-6 h-6 v-6 h-4 Z" fill="#F59E0B"/>
      <path d="M22,10 h6 v10 h-4 v-6 h-2 Z" fill="#FDE68A"/>
      <path d="M38,10 h4 v14 h-4 Z" fill="#D97706"/>
      <path d="M12,16 h4 v10 h-4 Z M10,18 h2 v6 h-2 Z" fill="#F59E0B"/>
      <path d="M48,16 h4 v10 h-4 Z M52,18 h2 v6 h-2 Z" fill="#F59E0B"/>
      <text x="32" y="24" fontFamily="'Press Start 2P', monospace" fontSize="7" fill="#78350F" textAnchor="middle" fontWeight="bold">32</text>
      <rect x="28" y="38" width="8" height="8" fill="#D97706"/>
      <rect x="20" y="46" width="24" height="6" fill="#181924"/>
      <rect x="22" y="48" width="20" height="2" fill="#F59E0B"/>
    </svg>
    <span className="sticker-label">MILAD 32</span>
  </div>

  <div className="hanging-sticker sticker--torch" title="Ignite the Summit">
    <div className="washi-tape washi-tape--orange"></div>
    <svg viewBox="0 0 48 56" width="46" height="54" className="sticker-svg">
      <path d="M14,4 h20 v16 h-4 v14 h-4 v18 h-8 v-18 h-4 v-14 Z" fill="#FFFFFF"/>
      <rect x="20" y="30" width="8" height="22" fill="#78350F"/>
      <rect x="22" y="32" width="2" height="18" fill="#FDE68A"/>
      <rect x="16" y="20" width="16" height="10" fill="#D97706"/>
      <rect x="18" y="22" width="12" height="6" fill="#F59E0B"/>
      <path d="M20,6 h8 v6 h4 v6 h-16 v-6 h4 Z" fill="#EF4444"/>
      <path d="M22,8 h4 v4 h2 v4 h-8 v-4 h2 Z" fill="#F59E0B"/>
      <rect x="23" y="10" width="2" height="4" fill="#FFFDE7"/>
    </svg>
    <span className="sticker-label">IGNITE!</span>
  </div>

  <div className="hanging-sticker sticker--gamepad" title="E-Sport MLBB">
    <div className="washi-tape washi-tape--blue"></div>
    <svg viewBox="0 0 60 40" width="52" height="34" className="sticker-svg">
      <path d="M6,6 h48 v28 h-48 Z" fill="#FFFFFF"/>
      <rect x="8" y="8" width="44" height="24" fill="#1F2937" rx="3"/>
      <rect x="15" y="14" width="4" height="12" fill="#9CA3AF"/>
      <rect x="11" y="18" width="12" height="4" fill="#9CA3AF"/>
      <circle cx="41" cy="18" r="2.5" fill="#EF4444"/>
      <circle cx="47" cy="22" r="2.5" fill="#F59E0B"/>
      <rect x="25" y="22" width="4" height="2" fill="#4B5563"/>
      <rect x="31" y="22" width="4" height="2" fill="#4B5563"/>
    </svg>
    <span className="sticker-label">E-SPORT</span>
  </div>

  <div className="hanging-sticker sticker--sports" title="Sports Competition (Futsal & Basket)">
    <div className="washi-tape washi-tape--green"></div>
    <svg viewBox="0 0 54 54" width="48" height="48" className="sticker-svg px-bounce-ball">
      <circle cx="27" cy="27" r="23" fill="#FFFFFF"/>
      <circle cx="27" cy="27" r="20" fill="#F8FAFC"/>
      <polygon points="27,15 33,20 31,27 23,27 21,20" fill="#1E293B"/>
      <polygon points="27,15 27,8 20,11 21,20" fill="#1E293B"/>
      <polygon points="33,20 39,18 40,24 31,27" fill="#1E293B"/>
      <polygon points="23,27 15,28 17,21 21,20" fill="#1E293B"/>
      <polygon points="31,27 34,35 27,38 23,27" fill="#1E293B"/>
      <circle cx="41" cy="39" r="10" fill="#FFFFFF"/>
      <circle cx="41" cy="39" r="8.5" fill="#EA580C"/>
      <line x1="33" y1="39" x2="49" y2="39" stroke="#7C2D12" strokeWidth="1.2"/>
      <line x1="41" y1="31" x2="41" y2="47" stroke="#7C2D12" strokeWidth="1.2"/>
    </svg>
    <span className="sticker-label">SPORTS</span>
  </div>

  <div className="hanging-sticker sticker--camera" title="Lensa Bercerita">
    <div className="washi-tape washi-tape--orange"></div>
    <svg viewBox="0 0 52 44" width="48" height="40" className="sticker-svg">
      <path d="M4,10 h44 v30 h-44 Z M16,4 h20 v6 h-20 Z" fill="#FFFFFF"/>
      <rect x="6" y="12" width="40" height="26" fill="#374151" rx="2"/>
      <rect x="18" y="6" width="16" height="6" fill="#4B5563"/>
      <circle cx="26" cy="25" r="9" fill="#1F2937"/>
      <circle cx="26" cy="25" r="6" fill="#60A5FA"/>
      <circle cx="28" cy="23" r="2" fill="#FFFFFF"/>
      <rect x="10" y="15" width="6" height="4" fill="#FDE68A"/>
    </svg>
    <span className="sticker-label">ART &amp; PHOTO</span>
  </div>

  <div className="hanging-sticker sticker--laptop" title="UI/UX & Vibe Coding">
    <div className="washi-tape washi-tape--blue"></div>
    <svg viewBox="0 0 54 44" width="48" height="40" className="sticker-svg">
      <path d="M8,6 h38 v26 h-38 Z M2,32 h50 v8 h-50 Z" fill="#FFFFFF"/>
      <rect x="10" y="8" width="34" height="22" fill="#111827"/>
      <text x="14" y="18" fontFamily="'Press Start 2P', monospace" fontSize="4" fill="#2ECC40">&gt;_UII</text>
      <text x="14" y="25" fontFamily="'Press Start 2P', monospace" fontSize="3.5" fill="#FFD166">2026</text>
      <rect x="4" y="34" width="46" height="4" fill="#4B5563"/>
    </svg>
    <span className="sticker-label">UI/UX &amp; CODE</span>
  </div>

  <div className="hanging-sticker sticker--badge" title="Established 1994">
    <div className="washi-tape washi-tape--yellow"></div>
    <svg viewBox="0 0 56 56" width="48" height="48" className="sticker-svg">
      <polygon points="28,4 34,12 44,8 44,19 54,21 49,30 55,38 45,41 43,51 33,48 28,55 23,48 13,51 11,41 1,38 7,30 2,21 12,19 12,8 22,12" fill="#FFFFFF"/>
      <polygon points="28,7 33,14 42,10 42,20 51,22 46,30 51,37 42,40 40,48 32,45 28,51 24,45 16,48 14,40 5,37 10,30 5,22 14,20 14,10 23,14" fill="#FF8C00"/>
      <circle cx="28" cy="30" r="14" fill="#FFFBEB"/>
      <text x="28" y="29" fontFamily="'Press Start 2P', monospace" fontSize="6" fill="#92400E" textAnchor="middle" fontWeight="bold">EST.</text>
      <text x="28" y="36" fontFamily="'Press Start 2P', monospace" fontSize="6.5" fill="#B45309" textAnchor="middle" fontWeight="bold">1994</text>
    </svg>
    <span className="sticker-label">32 TH</span>
  </div>
</section>
  );
}

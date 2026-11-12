export interface LeaderboardRow {
  category: string;
  points2023: number;
  points2024: number;
  points2025: number;
  points2026: number;
  maxPoints: number;
}

export const leaderboardCategories: LeaderboardRow[] = [
  { category: "1. Futsal Juara Utama", points2023: 100, points2024: 75, points2025: 50, points2026: 25, maxPoints: 100 },
  { category: "2. Best Player Futsal", points2023: 25, points2024: 0, points2025: 0, points2026: 0, maxPoints: 25 },
  { category: "3. Top Scorer Futsal", points2023: 0, points2024: 25, points2025: 0, points2026: 0, maxPoints: 25 },
  { category: "4. Basketball 3x3", points2023: 75, points2024: 100, points2025: 25, points2026: 50, maxPoints: 100 },
  { category: "5. MVP Basketball", points2023: 0, points2024: 25, points2025: 0, points2026: 0, maxPoints: 25 },
  { category: "6. Mobile Legends (MLBB)", points2023: 50, points2024: 75, points2025: 100, points2026: 25, maxPoints: 100 },
  { category: "7. Finals MVP MLBB", points2023: 0, points2024: 0, points2025: 25, points2026: 0, maxPoints: 25 },
  { category: "8. Digital Poster Design", points2023: 25, points2024: 50, points2025: 75, points2026: 100, maxPoints: 100 },
  { category: "9. Photography & Narrative", points2023: 50, points2024: 25, points2025: 100, points2026: 75, maxPoints: 100 },
  { category: "10. UI/UX Competition", points2023: 100, points2024: 75, points2025: 50, points2026: 25, maxPoints: 100 },
  { category: "11. Best Supporter Angkatan", points2023: 50, points2024: 50, points2025: 75, points2026: 100, maxPoints: 100 },
];

export interface BatchTotal {
  year: string;
  name: string;
  score: number;
  rank: number;
  badge: string;
  color: string;
}

export const batchTotals: BatchTotal[] = [
  { year: "2024", name: "Angkatan 2024 (Synapse)", score: 500, rank: 1, badge: "1ST • CURRENT LEADER 👑", color: "#F59E0B" },
  { year: "2023", name: "Angkatan 2023 (Vector)", score: 475, rank: 2, badge: "2ND PLACE 🥈", color: "#94A3B8" },
  { year: "2025", name: "Angkatan 2025 (Nexus)", score: 500, rank: 1, badge: "1ST • CURRENT LEADER 👑", color: "#F59E0B" },
  { year: "2026", name: "Angkatan 2026 (Genesis)", score: 350, rank: 4, badge: "4TH PLACE 🎖️", color: "#CD7F32" },
];

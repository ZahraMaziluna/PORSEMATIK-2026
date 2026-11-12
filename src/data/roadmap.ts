/*
 * Sumber tunggal jadwal 6 stage. Dipakai oleh Beranda dan halaman Jadwal.
 * Isi kartu sama dengan kartu peta Jadwal yang asli.
 */

export interface Stage {
  code: string;
  badge: "green" | "amber" | "orange" | "purple" | "cyan" | "gold";
  date: string;
  time: string;
  title: string;
  desc: string;
}

export const STAGES: readonly Stage[] = [
  {
    code: "STG 1",
    badge: "green",
    date: "Senin, 16 Nov 2026",
    time: "17.50 – 21.50 WIB",
    title: "Pembukaan & Penyisihan Futsal (1–5)",
    desc: "GOR Ki Bagoes Hadikoesoemo UII • Upacara pembukaan akbar dan laga perdana babak grup futsal.",
  },
  {
    code: "STG 2",
    badge: "amber",
    date: "Selasa, 17 Nov 2026",
    time: "06.00 – 21.30 WIB",
    title: "Informatics Connect, Basket & Futsal",
    desc: "Lapangan Utara & GOR UII • Tumpengan Milad ke-32, dilanjutkan babak penyisihan Basket & Futsal.",
  },
  {
    code: "STG 3",
    badge: "orange",
    date: "Rabu, 18 Nov 2026",
    time: "18.00 – 23.59 WIB",
    title: "Grand Final Futsal, Basket & Deadline",
    desc: "GOR UII • Laga puncak Final Futsal & Basket, serta batas akhir pengumpulan karya digital (23.59 WIB).",
  },
  {
    code: "STG 4",
    badge: "purple",
    date: "Kamis, 19 Nov 2026",
    time: "18.10 – 21.10 WIB",
    title: "Quarter Final & Semi Final MLBB",
    desc: "Auditorium FTI UII • Laga eliminasi perempat final (BO1) dan semifinal (BO3) Mobile Legends.",
  },
  {
    code: "STG 5",
    badge: "cyan",
    date: "Sabtu, 21 Nov 2026",
    time: "07.30 – 17.20 WIB",
    title: "VibeIT, Final UI/UX & GF MLBB",
    desc: "Lab 3.2 FTI & Auditorium • Workshop Vibe Coding SMA, Presentasi UI/UX, & Grand Final MLBB.",
  },
  {
    code: "STG 6",
    badge: "gold",
    date: "Minggu, 22 Nov 2026",
    time: "19.15 – 21.30 WIB",
    title: "Awarding Night & Closing Ceremony",
    desc: "Lapangan Utara GOR UII • Penobatan Juara Umum Angkatan, penayangan after movie, & konser KOSMIK.",
  },
];

export interface StageItem {
  stageNumber: number;
  stageCode: string;
  date: string;
  dayName: string;
  title: string;
  venue: string;
  time: string;
  questDescription: string;
  status: "upcoming" | "active" | "completed";
}

export const stagesData: StageItem[] = [
  {
    stageNumber: 1,
    stageCode: "STG 1",
    date: "16 Nov 2026",
    dayName: "Senin",
    title: "Opening Ceremony & Futsal Kick-off",
    venue: "GOR Ki Bagoes Hadikoesoemo UII",
    time: "17:50 - 22:00 WIB",
    questDescription: "Defile kontingen seluruh angkatan, penyalaan obor pembuka Milad 32, dan babak penyisihan pertama Futsal.",
    status: "upcoming",
  },
  {
    stageNumber: 2,
    stageCode: "STG 2",
    date: "17 Nov 2026",
    dayName: "Selasa",
    title: "Futsal Group Stage & Basketball Tip-off",
    venue: "GOR Ki Bagoes Hadikoesoemo UII",
    time: "15:30 - 22:00 WIB",
    questDescription: "Lanjutan fase grup Futsal putra dan pembukaan pertandingan cabang olahraga Basket 3x3.",
    status: "upcoming",
  },
  {
    stageNumber: 3,
    stageCode: "STG 3",
    date: "18 Nov 2026",
    dayName: "Rabu",
    title: "Basketball Knockout & MLBB Qualifiers",
    venue: "GOR Ki Bagoes & Hall LEM FTI",
    time: "15:30 - 22:30 WIB",
    questDescription: "Babak gugur Basket 3x3 dan pertandingan kualifikasi online/offline turnamen Mobile Legends: Bang Bang.",
    status: "upcoming",
  },
  {
    stageNumber: 4,
    stageCode: "STG 4",
    date: "19 Nov 2026",
    dayName: "Kamis",
    title: "MLBB Semifinals & Grand Finals",
    venue: "Hall LEM FTI UII / Discord Live Stream",
    time: "16:00 - 22:30 WIB",
    questDescription: "Pertarungan penentuan juara E-Sport MLBB menuju takhta High-Score Milad Informatika 2026.",
    status: "upcoming",
  },
  {
    stageNumber: 5,
    stageCode: "STG 5",
    date: "21 Nov 2026",
    dayName: "Sabtu",
    title: "VibeIT AI Workshop & Showcase Karya",
    venue: "Lab Terpadu FTI UII",
    time: "08:30 - 13:00 WIB",
    questDescription: "Workshop coding berbasis AI untuk siswa SMA/SMK se-DIY/Jateng dan batas pengumpulan karya Poster & Fotografi.",
    status: "upcoming",
  },
  {
    stageNumber: 6,
    stageCode: "STG 6",
    date: "22 Nov 2026",
    dayName: "Minggu",
    title: "Informatics Connect & Grand Awarding Night",
    venue: "Auditorium FTI & Panggung Utama UII",
    time: "09:00 - 22:30 WIB",
    questDescription: "Temu akbar alumni Informatika UII, penyerahan piala Juara Umum, Best Supporter, dan penutupan Milad Ke-32.",
    status: "upcoming",
  },
];

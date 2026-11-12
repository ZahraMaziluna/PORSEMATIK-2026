export interface EventItem {
  id: string;
  tag: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  badge?: string;
}

export const eventsData: EventItem[] = [
  {
    id: "opening-ceremony",
    tag: "[ STAGE 1 • OPENING ]",
    title: "Opening Ceremony & Torch Lighting",
    date: "16 November 2026",
    time: "17:50 WIB",
    venue: "GOR Ki Bagoes Hadikoesoemo UII",
    description: "Pembukaan akbar PORSEMATIK feat. Milad Informatika Ke-32. Prosesi sakral penyalaan Obor Summit, defile kontingen angkatan 2023, 2024, 2025, 2026, dan kick-off pertandingan pembuka Futsal.",
    ctaText: "DAFTAR / INFO RESMI",
    ctaLink: "https://linktr.ee/porsematik2026",
  },
  {
    id: "informatics-connect",
    tag: "[ QUEST SOLIDARITAS ]",
    title: "Informatics Connect: Alumni & Student Gathering",
    date: "22 November 2026",
    time: "09:00 - 15:00 WIB",
    venue: "Auditorium FTI UII",
    description: "Ruang temu akrab lintas generasi alumni dan mahasiswa aktif Informatika UII. Diskusi karir industri teknologi, showcase proyek mahasiswa, dan perayaan 32 tahun kebersamaan.",
    ctaText: "PORTAL CONNECT (NETLIFY)",
    ctaLink: "https://storied-florentine-b344b6.netlify.app",
  },
  {
    id: "vibeit-workshop",
    tag: "[ AI-LAB • WORKSHOP ]",
    title: "VibeIT: AI Vibe Coding Workshop",
    date: "21 November 2026",
    time: "08:30 - 12:30 WIB",
    venue: "Lab Terpadu FTI UII",
    description: "Workshop eksklusif siswa/i SMA/SMK se-DIY & Jawa Tengah. Membangun dan men-deploy aplikasi web interaktif dalam hitungan jam menggunakan Lovable AI dan AI Agent modern.",
    ctaText: "DAFTAR VIBEIT (GOOGLE FORMS)",
    ctaLink: "https://docs.google.com/forms/d/e/1FAIpQLScuKliSypDmIJL__CyamGvfZk9dehMoDlrBSP0lsdIi-D0bHg/viewform?usp=publish-editor",
    badge: "KUOTA 50 SISWA",
  },
  {
    id: "awarding-night",
    tag: "[ FINALE • CELEBRATION ]",
    title: "Awarding Night: Grand Summit Finale",
    date: "22 November 2026",
    time: "19:00 WIB - Selesai",
    venue: "Panggung Utama Kampus Terpadu UII",
    description: "Malam puncak penganugerahan piala bergilir Juara Umum PORSEMATIK 2026, apresiasi Best Supporter, penutupan resmi Milad Ke-32, dan penampilan musik kebersamaan.",
    ctaText: "INFO RESMI",
    ctaLink: "https://linktr.ee/porsematik2026",
  },
];

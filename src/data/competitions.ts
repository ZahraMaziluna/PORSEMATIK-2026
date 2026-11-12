export interface CompetitionItem {
  id: string;
  name: string;
  category: "SPORTS" | "E-SPORT" | "ARTS" | "CODE";
  categoryBadge: string;
  categoryBadgeColor: string;
  registrationFee: string;
  prizePool: string;
  teamSpecs: string;
  description: string;
  rulesSummary: string[];
  linktreeUrl: string;
}

export const competitionsData: CompetitionItem[] = [
  {
    id: "futsal",
    name: "Futsal Competition",
    category: "SPORTS",
    categoryBadge: "SPORTS ⚽",
    categoryBadgeColor: "#2ECC40",
    registrationFee: "Rp 350.000 / Tim",
    prizePool: "Rp 1.500.000 + Trophy & Sertifikat",
    teamSpecs: "Maksimal 12 Pemain (5 Inti + 7 Cadangan) per Tim Angkatan",
    description: "Turnamen futsal bergengsi antar-angkatan Informatika UII (2023, 2024, 2025, 2026). Perebutan poin tertinggi Juara Umum dan Top Scorer.",
    rulesSummary: [
      "Wajib mahasiswa aktif Informatika UII sesuai angkatan yang didaftarkan.",
      "Durasi pertandingan 2 x 15 menit dengan waktu kotor (semi-final & final waktu bersih).",
      "Sistem setengah kompetisi pada fase grup dan knockout pada fase semifinal.",
      "Pemain wajib mengenakan jersey bernomor punggung dan pelindung tulang kering (shinguard).",
    ],
    linktreeUrl: "https://linktr.ee/porsematik2026",
  },
  {
    id: "basket",
    name: "Basketball 3x3",
    category: "SPORTS",
    categoryBadge: "SPORTS 🏀",
    categoryBadgeColor: "#EA580C",
    registrationFee: "Rp 250.000 / Tim",
    prizePool: "Rp 1.200.000 + Trophy & Sertifikat",
    teamSpecs: "Maksimal 4 Pemain (3 Inti + 1 Cadangan) per Tim Angkatan",
    description: "Kompetisi basket 3 on 3 cepat dan dinamis. Uji ketangkasan, akurasi tembakan, dan kekompakan tim dalam tempo tinggi.",
    rulesSummary: [
      "Menggunakan standar aturan FIBA 3x3 resmi.",
      "Durasi pertandingan 1 x 10 menit atau tim pertama yang mencetak 21 poin.",
      "Setiap angkatan diperbolehkan mengirimkan maksimal 2 tim perwakilan.",
      "Shot clock 12 detik dengan pergantian pemain saat bola mati.",
    ],
    linktreeUrl: "https://linktr.ee/porsematik2026",
  },
  {
    id: "mlbb",
    name: "Mobile Legends: Bang Bang",
    category: "E-SPORT",
    categoryBadge: "E-SPORT 🎮",
    categoryBadgeColor: "#8B5CF6",
    registrationFee: "Rp 75.000 / Tim",
    prizePool: "Rp 800.000 + Diamond & Sertifikat",
    teamSpecs: "5 Pemain Inti + 1 Cadangan",
    description: "Pertarungan strategi dan mekanik di Land of Dawn. Perebutan tahta tim E-Sport terbaik Informatika UII dan gelar Finals MVP.",
    rulesSummary: [
      "Semua anggota tim merupakan mahasiswa aktif Informatika UII.",
      "Sistem Best of 3 (Bo3) dari babak grup hingga semifinal, dan Bo5 pada Grand Final.",
      "Custom Draft Pick mode dengan sistem ban 5 hero terkini.",
      "Dilarang menggunakan cheat, emulator, script modifikasi skin, atau tindakan tidak sportif.",
    ],
    linktreeUrl: "https://linktr.ee/porsematik2026",
  },
  {
    id: "poster",
    name: "Digital Poster Competition",
    category: "ARTS",
    categoryBadge: "ARTS 🎨",
    categoryBadgeColor: "#EC4899",
    registrationFee: "Rp 35.000 / Karya",
    prizePool: "Rp 500.000 + E-Sertifikat Nasional",
    teamSpecs: "Individu (Mahasiswa Aktif UII)",
    description: "Lomba desain poster bertema 'Ignite the Summit: Elevating Solidarity and Creativity'. Wadah ekspresi visual dan grafis bernilai pesan kuat.",
    rulesSummary: [
      "Karya orisinal dan belum pernah memenangkan kompetisi desain manapun.",
      "Format file digital A3 (300 DPI) dalam ekstensi JPG/PNG beserta file mentah (AI/PSD/Figma).",
      "Tidak mengandung unsur SARA, pornografi, atau hak cipta pihak ketiga tanpa lisensi.",
      "Karya dinilai berdasarkan orisinalitas ide, estetika visual, dan kedalaman pesan.",
    ],
    linktreeUrl: "https://linktr.ee/porsematik2026",
  },
  {
    id: "photography",
    name: "Photography & Narrative",
    category: "ARTS",
    categoryBadge: "ARTS 📸",
    categoryBadgeColor: "#F59E0B",
    registrationFee: "Rp 35.000 / Karya",
    prizePool: "Rp 500.000 + E-Sertifikat Nasional",
    teamSpecs: "Individu (Mahasiswa Aktif UII)",
    description: "Lensa bercerita yang menangkap momen sportivitas, perjuangan, dan kebersamaan di sepanjang rangkaian acara PORSEMATIK 2026.",
    rulesSummary: [
      "Foto diambil selama rangkaian kegiatan PORSEMATIK 2026 menggunakan kamera DSLR/Mirrorless/Smartphone.",
      "Disertai narasi deskripsi cerita maksimal 150 kata.",
      "Editing diperbolehkan sebatas penyesuaian dasar (crop, exposure, color contrast).",
      "Dilarang manipulasi objek digital secara berlebihan atau menggunakan AI generative art.",
    ],
    linktreeUrl: "https://linktr.ee/porsematik2026",
  },
  {
    id: "uiux",
    name: "UI/UX Design Competition",
    category: "CODE",
    categoryBadge: "CODE 💻",
    categoryBadgeColor: "#3B82F6",
    registrationFee: "Rp 50.000 / Tim",
    prizePool: "Rp 750.000 + Trophy & Sertifikat",
    teamSpecs: "Tim 1-3 Mahasiswa Informatika UII",
    description: "Kompetisi perancangan antarmuka dan pengalaman pengguna aplikasi digital untuk solusi nyata problematika kehidupan kampus dan kemahasiswaan.",
    rulesSummary: [
      "Output berupa clickable prototype Figma dan dokumen studi kasus (Design Thinking / UX Case Study).",
      "Studi kasus mencakup Empathize, Define, Ideate, Prototype, dan Testing plan.",
      "Karya dipresentasikan di hadapan dewan juri praktisi industri pada tahap finalis.",
      "Aspek penilaian: kemudahan penggunaan (usability), estetika visual, inovasi, dan kejelasan alur riset.",
    ],
    linktreeUrl: "https://linktr.ee/porsematik2026",
  },
];

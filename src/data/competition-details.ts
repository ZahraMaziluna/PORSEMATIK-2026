/*
 * Data halaman detail tiap lomba. Isi diturunkan dari kartu di Competition Hub,
 * jadwal stage, dan FAQ resmi. Tidak ada angka, tanggal, atau hadiah baru.
 */

import type { MascotId } from "@/components/event/mascots";
import type { PixelIconName } from "@/components/icons/PixelIcon";

export type EventLayout = "reference" | "arena" | "gallery";

export interface EventStep {
  title: string;
  date: string;
  desc: string;
  /** Batas akhir (ISO, zona WIB) untuk menandai langkah selesai. */
  endsAt?: string;
}

export interface EventReward {
  label: string;
  value: string;
  tier: "gold" | "silver" | "bronze" | "star" | "scroll";
}

export interface EventDetail {
  slug: string;
  name: string;
  /** Teks pendek untuk tombol dan tautan. */
  short: string;
  category: string;
  tagline: string;
  layout: EventLayout;
  mascot: MascotId;
  /** Warna utama blok (teks slate gelap di atasnya lolos kontras). */
  accent: string;
  /** Warna sorotan kedua. */
  accent2: string;
  quota: string;
  fee: string;
  feeUnit: string;
  about: string[];
  rulesTitle: string;
  rules: { icon: PixelIconName; text: string }[];
  stats: { label: string; value: string }[];
  rewards: EventReward[];
  extras: { title: string; sub: string }[];
  timeline: EventStep[];
  faq: { q: string; a: string }[];
  registerLabel: string;
  /** Kutipan tema besar (hanya lomba yang punya tema resmi). */
  theme?: string;
}

const REG_STEP: EventStep = {
  title: "Pendaftaran",
  date: "10 – 13 November 2026",
  desc: "Daftar lewat tautan resmi panitia sampai 13 November 2026 pukul 12.00 WIB. Wajib melampirkan KTM atau KTM Digital.",
  endsAt: "2026-11-13T12:00:00+07:00",
};

const TM_STEP: EventStep = {
  title: "Technical Meeting",
  date: "Sabtu, 14 November 2026",
  desc: "Technical Meeting daring lewat Zoom atau Google Meet. Pelajari E-Guidebook sebelum hadir.",
  endsAt: "2026-11-14T23:59:00+07:00",
};

const AWARD_STEP: EventStep = {
  title: "Awarding Night",
  date: "Minggu, 22 November 2026",
  desc: "Penobatan Juara Umum Angkatan di Lapangan Utara GOR UII, 19.15 – 21.30 WIB.",
  endsAt: "2026-11-22T21:30:00+07:00",
};

const ELIGIBILITY =
  "Mahasiswa aktif Informatika FTI UII angkatan 2023, 2024, 2025, dan 2026, dengan KTM atau KTM Digital.";

const COMMON_FAQ = {
  who: {
    q: "Siapa yang boleh mendaftar?",
    a: ELIGIBILITY,
  },
  when: {
    q: "Sampai kapan pendaftaran dibuka?",
    a: "Pendaftaran dibuka 10 November 2026 pukul 12.00 WIB sampai 13 November 2026 pukul 12.00 WIB lewat linktr.ee/porsematik2026.",
  },
  tm: {
    q: "Kapan Technical Meeting?",
    a: "Sabtu, 14 November 2026, secara daring lewat Zoom atau Google Meet. Baca E-Guidebook sebelum hadir.",
  },
  venue: {
    q: "Apa syarat masuk ke area acara?",
    a: "Berpakaian sopan dan rapi, serta menukarkan KTM asli dengan Co-Card di pos screening panitia. Bawa tumbler pribadi dan jas hujan atau payung lipat.",
  },
  banned: {
    q: "Apa yang dilarang di area acara?",
    a: "Kemasan sekali pakai atau sampah plastik, rokok, vape, pod, senjata tajam, minuman keras atau NAPZA, dan provokasi bernada SARA.",
  },
};

export const EVENTS: EventDetail[] = [
  {
    slug: "futsal",
    name: "Futsal Competition",
    short: "Futsal",
    category: "SPORTS",
    tagline:
      "Turnamen futsal antarangkatan Informatika. Kumpulkan timmu, rebut poin Juara Umum untuk angkatanmu.",
    layout: "arena",
    mascot: "futsal",
    accent: "#22C55E",
    accent2: "#FDE68A",
    quota: "1–2 Tim / Angkatan",
    fee: "150.000",
    feeUnit: "/ tim",
    about: [
      "Pertandingan berlangsung 16–18 November 2026 di GOR Ki Bagoes Hadikoesoemo UII.",
      "Sistem setengah kompetisi dalam 2 grup, lalu menuju Final.",
      "Terbuka untuk mahasiswa aktif Informatika FTI UII angkatan 2023 sampai 2026.",
    ],
    rulesTitle: "RULEBOOK",
    rules: [
      { icon: "users", text: "Tim berisi 8–14 orang: 5 pemain inti, 2–7 pemain cadangan, 1–2 ofisial." },
      { icon: "flag", text: "Waktu pertandingan 2x10 menit kotor, sistem setengah kompetisi 2 grup menuju Final." },
      { icon: "notice", text: "Wajib deposit kartu Rp100.000 per tim. Dikembalikan setelah turnamen selesai." },
      { icon: "person", text: "Dilarang memakai perhiasan atau aksesori berlebih saat bertanding di lapangan." },
    ],
    stats: [
      { label: "BIAYA", value: "Rp150.000" },
      { label: "KUOTA", value: "1–2 TIM" },
      { label: "PEMAIN", value: "8–14 ORANG" },
      { label: "DURASI", value: "2 x 10 MNT" },
    ],
    rewards: [
      { label: "Juara 1", value: "Rp500.000 + 3 Poin", tier: "gold" },
      { label: "Juara 2", value: "Rp250.000 + 2 Poin", tier: "silver" },
      { label: "Best Player & Top Scorer", value: "@Rp50.000 + 1 Poin", tier: "star" },
    ],
    extras: [
      { title: "Poin Juara Umum", sub: "Masuk klasemen angkatan" },
      { title: "E-Guidebook Resmi", sub: "Regulasi lengkap" },
    ],
    timeline: [
      REG_STEP,
      TM_STEP,
      {
        title: "Pembukaan & Babak Grup",
        date: "16 – 17 November 2026",
        desc: "Upacara pembukaan dan laga babak grup di GOR Ki Bagoes Hadikoesoemo UII.",
        endsAt: "2026-11-17T21:30:00+07:00",
      },
      {
        title: "Grand Final",
        date: "Rabu, 18 November 2026",
        desc: "Laga puncak futsal di GOR UII, mulai 18.00 WIB.",
        endsAt: "2026-11-18T23:59:00+07:00",
      },
      AWARD_STEP,
    ],
    faq: [
      COMMON_FAQ.who,
      COMMON_FAQ.when,
      {
        q: "Berapa jumlah pemain dalam satu tim?",
        a: "8–14 orang: 5 pemain inti, 2–7 pemain cadangan, dan 1–2 ofisial.",
      },
      {
        q: "Apa itu deposit kartu?",
        a: "Setiap tim menyerahkan deposit Rp100.000. Uang ini dikembalikan setelah turnamen selesai.",
      },
      COMMON_FAQ.tm,
      COMMON_FAQ.venue,
    ],
    registerLabel: "DAFTAR FUTSAL",
  },
  {
    slug: "basket",
    name: "Basketball Competition",
    short: "Basket",
    category: "SPORTS",
    tagline:
      "Round-robin satu klasemen. Setiap pertandingan menentukan posisi angkatanmu.",
    layout: "arena",
    mascot: "basket",
    accent: "#FB923C",
    accent2: "#BFDBFE",
    quota: "Maks. 1 Tim / Angkatan",
    fee: "150.000",
    feeUnit: "/ tim",
    about: [
      "Pertandingan berlangsung 17–18 November 2026 di GOR Ki Bagoes Hadikoesoemo UII.",
      "Sistem round-robin klasemen tunggal tanpa final. Juara ditentukan dari akumulasi poin.",
      "Satu angkatan mengirim maksimal satu tim.",
    ],
    rulesTitle: "RULEBOOK",
    rules: [
      { icon: "users", text: "Tim berisi 8–14 orang: 5 pemain inti, 2–7 pemain cadangan, 1–2 ofisial." },
      { icon: "flag", text: "Waktu pertandingan 4x10 menit kotor dengan sistem round-robin." },
      { icon: "trophy", text: "Juara ditentukan dari akumulasi poin klasemen akhir seluruh pertandingan." },
      { icon: "person", text: "Dilarang memakai perhiasan atau aksesori berlebih saat bertanding di lapangan." },
    ],
    stats: [
      { label: "BIAYA", value: "Rp150.000" },
      { label: "KUOTA", value: "1 TIM" },
      { label: "PEMAIN", value: "8–14 ORANG" },
      { label: "DURASI", value: "4 x 10 MNT" },
    ],
    rewards: [
      { label: "Juara 1", value: "Rp500.000 + 3 Poin", tier: "gold" },
      { label: "Juara 2", value: "Rp250.000 + 2 Poin", tier: "silver" },
      { label: "Most Valuable Player (MVP)", value: "Rp50.000 + 1 Poin", tier: "star" },
    ],
    extras: [
      { title: "Poin Juara Umum", sub: "Masuk klasemen angkatan" },
      { title: "E-Guidebook Resmi", sub: "Regulasi lengkap" },
    ],
    timeline: [
      REG_STEP,
      TM_STEP,
      {
        title: "Babak Penyisihan",
        date: "Selasa, 17 November 2026",
        desc: "Pertandingan round-robin di GOR Ki Bagoes Hadikoesoemo UII.",
        endsAt: "2026-11-17T21:30:00+07:00",
      },
      {
        title: "Laga Puncak",
        date: "Rabu, 18 November 2026",
        desc: "Laga puncak dan penentuan klasemen akhir di GOR UII, mulai 18.00 WIB.",
        endsAt: "2026-11-18T23:59:00+07:00",
      },
      AWARD_STEP,
    ],
    faq: [
      COMMON_FAQ.who,
      COMMON_FAQ.when,
      {
        q: "Apakah ada babak final?",
        a: "Tidak. Basket memakai sistem round-robin klasemen tunggal. Juara ditentukan dari akumulasi poin seluruh pertandingan.",
      },
      {
        q: "Berapa tim yang boleh dikirim satu angkatan?",
        a: "Maksimal satu tim per angkatan.",
      },
      COMMON_FAQ.tm,
      COMMON_FAQ.venue,
    ],
    registerLabel: "DAFTAR BASKET",
  },
  {
    slug: "mobile-legends",
    name: "E-Sport Tournament",
    short: "Mobile Legends",
    category: "E-SPORT",
    tagline:
      "Turnamen Mobile Legends: Bang Bang dengan sistem gugur. Luring di Auditorium FTI UII.",
    layout: "reference",
    mascot: "mlbb",
    accent: "#C4B5FD",
    accent2: "#D9F99D",
    quota: "1–2 Tim / Angkatan",
    fee: "50.000",
    feeUnit: "/ tim",
    about: [
      "Turnamen Mobile Legends: Bang Bang dengan sistem gugur (single elimination).",
      "Pertandingan luring di Auditorium FTI UII, 19 dan 21 November 2026.",
      "Terbuka untuk mahasiswa aktif Informatika FTI UII angkatan 2023 sampai 2026.",
    ],
    rulesTitle: "RULES & REQUIREMENTS",
    rules: [
      { icon: "users", text: "Tim berisi 6–8 orang: 5 pemain inti, maksimal 2 cadangan, 1 ofisial." },
      { icon: "flag", text: "Single elimination: QF BO1, Semifinal BO3, Juara 3 BO1, Grand Final BO5." },
      { icon: "code", text: "Jaringan internet pribadi atau kampus. Dilarang cheat, bug abuse, dan toxic." },
      { icon: "person", text: "Wajib melampirkan KTM atau KTM Digital saat mendaftar." },
    ],
    stats: [
      { label: "BIAYA", value: "Rp50.000" },
      { label: "KUOTA", value: "1–2 TIM" },
      { label: "PEMAIN", value: "6–8 ORANG" },
      { label: "FINAL", value: "BO5" },
    ],
    rewards: [
      { label: "Juara 1", value: "Rp300.000 + 3 Poin", tier: "gold" },
      { label: "Juara 2", value: "Rp150.000 + 2 Poin", tier: "silver" },
      { label: "Juara 3 & Finals MVP", value: "@Rp80.000 / 50.000 + 1 Poin", tier: "bronze" },
    ],
    extras: [
      { title: "Poin Juara Umum", sub: "Masuk klasemen angkatan" },
      { title: "E-Guidebook Resmi", sub: "Regulasi lengkap" },
    ],
    timeline: [
      REG_STEP,
      TM_STEP,
      {
        title: "Quarter Final & Semi Final",
        date: "Kamis, 19 November 2026",
        desc: "Perempat final (BO1) dan semifinal (BO3) di Auditorium FTI UII, 18.10 – 21.10 WIB.",
        endsAt: "2026-11-19T21:10:00+07:00",
      },
      {
        title: "Grand Final",
        date: "Sabtu, 21 November 2026",
        desc: "Perebutan Juara 3 (BO1) dan Grand Final (BO5) di Auditorium FTI UII.",
        endsAt: "2026-11-21T17:20:00+07:00",
      },
      AWARD_STEP,
    ],
    faq: [
      COMMON_FAQ.who,
      COMMON_FAQ.when,
      {
        q: "Bagaimana format pertandingan?",
        a: "Single elimination. Perempat final BO1, semifinal BO3, perebutan Juara 3 BO1, dan Grand Final BO5.",
      },
      {
        q: "Boleh memakai internet sendiri?",
        a: "Boleh. Peserta memakai jaringan internet pribadi atau kampus.",
      },
      {
        q: "Apa yang dianggap pelanggaran?",
        a: "Cheat, bug abuse, dan perilaku toxic.",
      },
      COMMON_FAQ.tm,
      COMMON_FAQ.venue,
    ],
    registerLabel: "DAFTAR MLBB",
  },
  {
    slug: "poster-digital",
    name: "Poster Digital",
    short: "Poster Digital",
    category: "ART (SENI)",
    tagline:
      "Rancang poster digital orisinal tentang aksi iklim. Ada Juara Terbaik dan Juara Favorit lewat E-Voting.",
    layout: "gallery",
    mascot: "poster",
    accent: "#F9A8D4",
    accent2: "#FDE68A",
    quota: "Individu: 1–3 Karya / Angkatan",
    fee: "50.000",
    feeUnit: "/ peserta",
    theme: "Climate-Sphere: Designing Solutions, Building Resilience (SDG 13)",
    about: [
      "Tema utama: Climate-Sphere: Designing Solutions, Building Resilience (SDG 13).",
      "Karya dikumpulkan daring 16–18 November, lalu masuk E-Voting 19–21 November 2026.",
      "Setiap angkatan boleh mengirim 1–3 karya individu.",
    ],
    rulesTitle: "KETENTUAN KARYA",
    rules: [
      { icon: "scroll", text: "Ukuran A3 portrait, 300 dpi, format JPG atau PNG." },
      { icon: "disk", text: "Lampirkan file mentah (PSD, AI, atau FIG) saat pengumpulan." },
      { icon: "notice", text: "Karya murni orisinal. DILARANG KERAS menggunakan Generative AI." },
      { icon: "person", text: "Peserta individu. Sertakan Surat Orisinalitas Karya." },
    ],
    stats: [
      { label: "BIAYA", value: "Rp50.000" },
      { label: "KARYA", value: "1–3 / ANGKATAN" },
      { label: "UKURAN", value: "A3 PORTRAIT" },
      { label: "RESOLUSI", value: "300 DPI" },
    ],
    rewards: [
      { label: "Juara Terbaik", value: "Rp100.000 + 3 Poin", tier: "gold" },
      { label: "Juara Favorit (E-Voting)", value: "Rp75.000 + 2 Poin", tier: "star" },
    ],
    extras: [
      { title: "Poin Juara Umum", sub: "Masuk klasemen angkatan" },
      { title: "E-Guidebook Resmi", sub: "Regulasi lengkap" },
    ],
    timeline: [
      REG_STEP,
      TM_STEP,
      {
        title: "Pengumpulan Karya",
        date: "16 – 18 November 2026",
        desc: "Submit daring. Batas akhir 18 November 2026 pukul 23.59 WIB.",
        endsAt: "2026-11-18T23:59:00+07:00",
      },
      {
        title: "E-Voting",
        date: "19 – 21 November 2026",
        desc: "Juara Favorit dipilih lewat E-Voting.",
        endsAt: "2026-11-21T23:59:00+07:00",
      },
      AWARD_STEP,
    ],
    faq: [
      COMMON_FAQ.who,
      COMMON_FAQ.when,
      {
        q: "Apakah boleh memakai Generative AI?",
        a: "Tidak. Karya wajib murni orisinal. Penggunaan Generative AI dilarang keras.",
      },
      {
        q: "Apa saja yang harus dikumpulkan?",
        a: "Poster A3 portrait 300 dpi (JPG atau PNG), file mentah PSD, AI, atau FIG, dan Surat Orisinalitas Karya.",
      },
      {
        q: "Berapa karya yang boleh dikirim?",
        a: "1–3 karya per angkatan, dikerjakan secara individu.",
      },
      COMMON_FAQ.tm,
    ],
    registerLabel: "DAFTAR POSTER",
  },
  {
    slug: "fotografi",
    name: "Photography & Narrative",
    short: "Fotografi",
    category: "ART (SENI)",
    tagline:
      "Satu foto, satu cerita. Tangkap kisah di balik bingkai dan tulis narasinya.",
    layout: "gallery",
    mascot: "foto",
    accent: "#7DD3FC",
    accent2: "#FDE68A",
    quota: "Individu: 1–3 Karya / Angkatan",
    fee: "50.000",
    feeUnit: "/ peserta",
    theme: "Lensa Bercerita: Kisah di Balik Bingkai (SDG 1, 10, 16)",
    about: [
      "Tema utama: Lensa Bercerita: Kisah di Balik Bingkai (SDG 1, 10, 16).",
      "Subtema: Denyut Perjuangan, Kehangatan Sosial, atau Kontras Muka Sosial.",
      "Setiap angkatan boleh mengirim 1–3 karya individu.",
    ],
    rulesTitle: "KETENTUAN KARYA",
    rules: [
      { icon: "camera", text: "Kanvas utuh rasio 4:5 atau 1:1 berisi foto dan esai 20–70 kata." },
      { icon: "disk", text: "Lampirkan file RAW asli saat pengumpulan." },
      { icon: "notice", text: "Tanpa manipulasi digital ekstrem, tanpa AI, dan tanpa poverty porn." },
      { icon: "scroll", text: "Sertakan Surat Orisinalitas Karya." },
    ],
    stats: [
      { label: "BIAYA", value: "Rp50.000" },
      { label: "KARYA", value: "1–3 / ANGKATAN" },
      { label: "RASIO", value: "4:5 / 1:1" },
      { label: "ESAI", value: "20–70 KATA" },
    ],
    rewards: [
      { label: "Juara Terbaik", value: "Rp150.000 + 2 Poin", tier: "gold" },
      { label: "Juara Favorit (E-Voting)", value: "Rp100.000 + 1 Poin", tier: "star" },
    ],
    extras: [
      { title: "Poin Juara Umum", sub: "Masuk klasemen angkatan" },
      { title: "E-Guidebook Resmi", sub: "Regulasi lengkap" },
    ],
    timeline: [
      REG_STEP,
      TM_STEP,
      {
        title: "Batas Pengumpulan Karya",
        date: "18 November 2026",
        desc: "Batas akhir pengumpulan karya digital pukul 23.59 WIB.",
        endsAt: "2026-11-18T23:59:00+07:00",
      },
      {
        title: "Penjurian & E-Voting",
        date: "Sesuai pengumuman panitia",
        desc: "Juara Terbaik dan Juara Favorit (E-Voting) ditentukan sesuai ketentuan panitia.",
      },
      AWARD_STEP,
    ],
    faq: [
      COMMON_FAQ.who,
      COMMON_FAQ.when,
      {
        q: "Apa isi satu karya?",
        a: "Satu kanvas utuh rasio 4:5 atau 1:1 berisi foto dan esai 20–70 kata, ditambah file RAW asli.",
      },
      {
        q: "Apa yang tidak diperbolehkan?",
        a: "Manipulasi digital ekstrem, penggunaan AI, dan poverty porn.",
      },
      {
        q: "Apa saja subtemanya?",
        a: "Denyut Perjuangan, Kehangatan Sosial, atau Kontras Muka Sosial.",
      },
      COMMON_FAQ.tm,
    ],
    registerLabel: "DAFTAR FOTOGRAFI",
  },
  {
    slug: "ui-ux",
    name: "UI/UX Design",
    short: "UI/UX",
    category: "EDUCATION",
    tagline:
      "Rancang pengalaman pengguna yang intuitif dan estetis untuk tema aksi iklim. Dari study case sampai prototype Figma.",
    layout: "reference",
    mascot: "uiux",
    accent: "#F9A8D4",
    accent2: "#D9F99D",
    quota: "1–2 Tim / Angkatan",
    fee: "50.000",
    feeUnit: "/ tim",
    theme: "Climate-Sphere: Designing Solutions, Building Resilience (SDG 13)",
    about: [
      "Tema utama: Climate-Sphere: Designing Solutions, Building Resilience (SDG 13).",
      "Berkas dikumpulkan 16–18 November, presentasi final Sabtu 21 November di Lab FTI UII.",
      "Terbuka untuk mahasiswa aktif Informatika FTI UII angkatan 2023 sampai 2026.",
    ],
    rulesTitle: "RULES & REQUIREMENTS",
    rules: [
      { icon: "users", text: "Tim 2–4 mahasiswa aktif: 1 ketua dan 1–3 anggota per angkatan." },
      { icon: "scroll", text: "Study Case (.pdf dan .ppt) minimal 10 screens hi-fi mockup." },
      { icon: "code", text: "Sertakan prototype Figma sebagai bagian dari deliverables." },
      { icon: "notice", text: "Karya orisinal tanpa AI. Sertakan Surat Orisinalitas Karya." },
    ],
    stats: [
      { label: "BIAYA", value: "Rp50.000" },
      { label: "KUOTA", value: "1–2 TIM" },
      { label: "ANGGOTA", value: "2–4 ORANG" },
      { label: "MOCKUP", value: "MIN. 10 SCREEN" },
    ],
    rewards: [
      { label: "Juara Terbaik", value: "Uang Tunai + 3 Poin", tier: "gold" },
      { label: "Juara 2", value: "Uang Tunai + 2 Poin", tier: "silver" },
      { label: "Sertifikat Resmi", value: "Akumulasi Juara Umum Angkatan", tier: "scroll" },
    ],
    extras: [
      { title: "E-Sertifikat Resmi", sub: "Untuk peserta" },
      { title: "E-Guidebook Resmi", sub: "Regulasi lengkap" },
    ],
    timeline: [
      REG_STEP,
      TM_STEP,
      {
        title: "Pengumpulan Berkas",
        date: "16 – 18 November 2026",
        desc: "Submit Study Case (.pdf dan .ppt) dan prototype Figma. Batas akhir 18 November pukul 23.59 WIB.",
        endsAt: "2026-11-18T23:59:00+07:00",
      },
      {
        title: "Presentasi Final",
        date: "Sabtu, 21 November 2026",
        desc: "Presentasi tim finalis di Lab 3.2 FTI UII.",
        endsAt: "2026-11-21T17:20:00+07:00",
      },
      AWARD_STEP,
    ],
    faq: [
      COMMON_FAQ.who,
      COMMON_FAQ.when,
      {
        q: "Apa saja deliverables-nya?",
        a: "Study Case (.pdf dan .ppt) minimal 10 screens hi-fi mockup, serta prototype Figma.",
      },
      {
        q: "Berapa anggota satu tim?",
        a: "2–4 mahasiswa aktif: 1 ketua dan 1–3 anggota per angkatan.",
      },
      {
        q: "Di mana presentasi final?",
        a: "Sabtu, 21 November 2026 di Lab FTI UII.",
      },
      COMMON_FAQ.tm,
    ],
    registerLabel: "DAFTAR UI/UX",
  },
];

export function getEvent(slug: string): EventDetail | undefined {
  return EVENTS.find((event) => event.slug === slug);
}

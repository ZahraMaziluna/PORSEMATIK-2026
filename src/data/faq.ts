export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqData: FaqItem[] = [
  {
    id: "faq-1",
    question: "Siapa saja yang boleh berpartisipasi dalam PORSEMATIK 2026?",
    answer: "PORSEMATIK terbuka untuk seluruh mahasiswa aktif Informatika Program Sarjana FTI UII (Angkatan 2023, 2024, 2025, dan 2026). Khusus untuk mata acara VibeIT AI Workshop dikhususkan bagi siswa/i SMA/SMK se-DIY & Jateng, sedangkan Informatics Connect terbuka lebar bagi seluruh keluarga besar alumni Informatika UII lintas angkatan.",
    category: "UMUM",
  },
  {
    id: "faq-2",
    question: "Bagaimana cara melakukan pendaftaran kompetisi?",
    answer: "Seluruh pendaftaran terpusat secara digital melalui portal resmi di https://linktr.ee/porsematik2026. Pilih cabang lomba yang ingin diikuti, isi formulir data kontingen/peserta, unggah KTM aktif, dan selesaikan konfirmasi pembayaran registrasi ke bendahara panitia.",
    category: "PENDAFTARAN",
  },
  {
    id: "faq-3",
    question: "Apakah satu mahasiswa boleh mengikuti lebih dari satu cabang kompetisi?",
    answer: "Boleh, selama jadwal pertandingan kedua cabang lomba tidak bentrok/bersamaan. Namun panitia tidak menanggung kompensasi keterlambatan atau pengunduran jadwal jika terjadi tumpang tindih waktu tanding antar-cabor.",
    category: "KOMPETISI",
  },
  {
    id: "faq-4",
    question: "Kapan batas akhir pendaftaran kompetisi ditutup?",
    answer: "Pendaftaran seluruh cabang kompetisi olahraga (Futsal & Basket) serta E-Sport ditutup pada tanggal 14 November 2026 pukul 23:59 WIB atau apabila kuota maksimal peserta telah terpenuhi. Segera amankan slot tim perwakilan angkatanmu!",
    category: "DEADLINE",
  },
  {
    id: "faq-5",
    question: "Apa itu VibeIT dan bagaimana mekanisme seleksinya?",
    answer: "VibeIT adalah AI Vibe Coding Workshop gratis yang diselenggarakan oleh HMIF LEM FTI UII untuk mengenalkan pembuatan web berbasis Natural Language & AI kepada generasi muda SMA/SMK. Kuota terbatas hanya 50 siswa terpilih berdasarkan pengisian form minat dan motivasi.",
    category: "VIBEIT",
  },
  {
    id: "faq-6",
    question: "Bagaimana akses alumni untuk menghadiri Informatics Connect?",
    answer: "Alumni cukup mengisi konfirmasi kehadiran pada portal Netlify resmi di https://harmonious-tarsier-a4a80a.netlify.app/. Acara berlangsung pada Minggu, 22 November 2026 di Auditorium FTI UII dengan agenda networking, sharing session industri, dan temu kangen dosen & civitas akademika.",
    category: "ALUMNI",
  },
];

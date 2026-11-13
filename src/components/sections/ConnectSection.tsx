import React from "react";
import GatheringPage, { type GatheringData } from "./GatheringPage";

const DATA: GatheringData = {
  id: "connect",
  tone: "connect",
  badge: "Community & Alumni Gathering",
  title: "Informatics Connect",
  subtitle:
    "Momen kebersamaan mahasiswa aktif, dosen, dan alumni Program Studi Informatika FTI UII untuk mempererat silaturahmi dalam semarak Milad ke-32.",
  status: { label: "Milad Informatika UII ke-32", value: "Solidarity Stage" },
  info: [
    { icon: "calendar", label: "Hari & Tanggal", value: "Selasa, 17 November 2026", sub: "Pagi ceria di kampus terpadu UII" },
    { icon: "clock", label: "Waktu", value: "06.00 – 09.00 WIB", sub: "Senam bersama & sarapan santai" },
    { icon: "pin", label: "Tempat / Venue", value: "Lapangan Utara GOR UII", sub: "Area outdoor GOR Ki Bagoes Hadikoesoemo" },
    { icon: "users", label: "Sasaran Peserta", value: "Civitas Akademika & Alumni", sub: "Mahasiswa, Dosen, Tenaga Kependidikan, Alumni" },
  ],
  timeline: {
    badge: "Timeline Kegiatan",
    title: "Rangkaian Acara",
    subtitle: "Enam level kegiatan Informatics Connect, dari registrasi sampai penutupan.",
  },
  steps: [
    { time: "06.00 – 06.30 WIB", title: "Registrasi & Penukaran Chip", desc: "Check-in peserta di meja registrasi, pembagian 3 chip makan kuliner UMKM dan 1 chip photobooth gratis." },
    { time: "06.30 – 07.15 WIB", title: "Senam Sehat Ceria Bersama", desc: "Senam pagi dipandu instruktur profesional bersama seluruh dosen, mahasiswa dari berbagai angkatan, dan alumni." },
    { time: "07.15 – 07.45 WIB", title: "Potong Tumpeng & Wish Note", desc: "Seremoni simbolis tumpengan Milad Informatika ke-32, doa bersama, serta penempelan kertas harapan (Wish Note) masa depan prodi." },
    { time: "07.45 – 08.15 WIB", title: "Lomba Estafet Sarung", desc: "Permainan santai estafet sarung antartim gabungan dosen dan perwakilan mahasiswa tiap angkatan untuk memupuk keakraban." },
    { time: "08.15 – 08.45 WIB", title: "Festival Kuliner UMKM & Photobooth (diiringi Akustik KOSMIK)", desc: "Menikmati sarapan lezat di stand kuliner UMKM mahasiswa menggunakan 3 chip makan dan foto seru di photobooth 360/cetak diiringi penampilan musik akustik KOSMIK." },
    { time: "08.45 – 09.00 WIB", title: "Penutupan", desc: "Penutupan resmi kegiatan pagi Informatics Connect." },
  ],
  notice: {
    icon: "star",
    title: "Fasilitas Chip Peserta",
    text: (
      <>
        Setiap peserta yang mendaftar dan hadir akan mendapatkan <strong>3 chip makan kuliner UMKM</strong> dan{" "}
        <strong>1 chip akses foto di photobooth</strong>.
      </>
    ),
  },
  actions: [
    {
      label: "DAFTAR INFORMATICS CONNECT (MAHASISWA, DOSEN & ALUMNI)",
      href: "https://graceful-wisp-d728cb.netlify.app",
    },
  ],
};

export default function ConnectSection() {
  return <GatheringPage data={DATA} />;
}

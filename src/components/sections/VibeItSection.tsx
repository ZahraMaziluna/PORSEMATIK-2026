import React from "react";
import GatheringPage, { type GatheringData } from "./GatheringPage";

const DATA: GatheringData = {
  id: "vibeit",
  tone: "vibe",
  badge: "High School Exclusive Workshop",
  title: "VibeIT: AI Vibe Coding",
  subtitle:
    "Kegiatan edukasi dan pengenalan Program Studi Informatika FTI UII bagi 50 siswa SMA/SLTA sederajat melalui kolaborasi dengan Google Developer Groups on Campus UII (GDGOC UII).",
  status: { label: "Vibe Coding Lab Status", value: "Ready 100%" },
  info: [
    { icon: "calendar", label: "Hari & Tanggal", value: "Sabtu, 21 November 2026", sub: "Pelaksanaan luring di kampus UII" },
    { icon: "clock", label: "Waktu", value: "07.30 – 11.00 WIB", sub: "Durasi total 210 menit workshop" },
    { icon: "pin", label: "Tempat / Venue", value: "Ruang Kelas 3.2 Lab FTI UII", sub: "Lantai 3 Gedung KH Mas Mansur FTI UII" },
    { icon: "users", label: "Kuota Peserta", value: "Terbatas 50 Siswa", sub: "Khusus siswa SMA/SLTA sederajat" },
  ],
  timeline: {
    badge: "Quest Timeline",
    title: "Alur Kegiatan",
    subtitle: "Enam level kegiatan VibeIT, dari registrasi sampai sesi penutup.",
  },
  steps: [
    { time: "07.30 – 08.00 WIB", title: "Kedatangan & Registrasi Peserta", desc: "Check-in peserta di Ruang 3.2 Lab FTI UII, penukaran kartu peserta, dan persiapan workstation laptop." },
    { time: "08.00 – 08.30 WIB", title: "Pembukaan & Profil Informatika UII", desc: "Opening oleh MC, pemutaran video profil Informatika UII, sambutan, perkenalan pemateri GDGOC UII, serta ice breaking." },
    { time: "08.30 – 09.30 WIB", title: "Sesi Materi: Vibe Coding AI (1 Jam)", desc: "Pengenalan paradigma modern pembuatan software dengan bantuan generative AI dan prompt engineering secara visual." },
    { time: "09.30 – 10.30 WIB", title: "Sesi Praktik: Deploy Landing Page (1 Jam)", desc: "Hands-on praktik langsung membuat dan mempublikasikan (deploy) landing page UMKM online menggunakan Lovable AI." },
    { time: "10.30 – 10.45 WIB", title: "Pengumpulan Link Hasil Deploy", desc: "Submit link website hasil deploy Lovable AI ke form resmi panitia sebagai syarat wajib penerbitan E-Sertifikat." },
    { time: "10.45 – 11.00 WIB", title: "Sesi Memento, Penutupan & Free Time", desc: "Foto bersama seluruh peserta dan mentor GDGOC UII, penutupan resmi, serta sesi santai (free time) melihat fasilitas lab kampus." },
  ],
  notice: {
    icon: "scroll",
    title: "Pengumuman Penting Kelulusan",
    text: (
      <>
        <strong>Syarat E-Sertifikat:</strong> Hanya peserta yang mengerjakan sesi praktik dan mengumpulkan link hasil
        deploy Lovable AI pada link resmi panitia yang akan memperoleh E-Sertifikat resmi terverifikasi dari HMIF LEM
        FTI UII dan GDGOC UII.
      </>
    ),
  },
  actions: [
    {
      label: "DAFTAR PESERTA VIBEIT (KUOTA 50 SISWA)",
      href: "https://docs.google.com/forms/d/e/1FAIpQLScuKliSypDmIJL__CyamGvfZk9dehMoDlrBSP0lsdIi-D0bHg/viewform?usp=publish-editor",
    },
    {
      label: "BELUM DIBUKA: KUMPULKAN LINK DEPLOY (21 NOV 2026)",
      disabledHint: "Belum dibuka, kumpulkan link deploy pada hari pelaksanaan (21 Nov 2026)",
    },
  ],
};

export default function VibeItSection() {
  return <GatheringPage data={DATA} />;
}

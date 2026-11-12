# PORSEMATIK 2026

Website resmi **PORSEMATIK feat. Milad Informatika Tahun 2026**, tema *"Ignite the Summit: Elevating Solidarity, Resilience, and Creativity through Sportsmanship"*. Diselenggarakan Bidang Bakat dan Kreativitas HMIF LEM FTI UII periode 2025/2026. Acara berlangsung 16 sampai 22 November 2026, pendaftaran lomba dibuka 10 sampai 13 November 2026.

Gaya visual: platformer 8-bit bertema pendakian gunung. Aturan desain lengkap ada di [DESIGN.md](DESIGN.md).

## Menjalankan

Butuh Node.js 20 atau lebih baru.

```bash
npm install
npm run dev        # http://localhost:3000, hot reload
npm run typecheck  # cek tipe TypeScript
npm run build      # build produksi
npm run start      # jalankan hasil build di port 3000
```

Jangan menjalankan `npm run build` selagi `npm run dev` hidup: keduanya memakai folder `.next` yang sama.

## Halaman

| Rute | Isi |
|------|-----|
| `/` | Beranda: hero, ticker, tentang acara, roadmap bergaya jalan dengan pendaki, galeri, pendaftaran |
| `/jadwal` | Jadwal 6 stage di jalan vertikal, lalu Events Highlight |
| `/klasemen` | Klasemen Juara Umum antar angkatan |
| `/kompetisi` | Katalog 6 cabang lomba dengan filter, pencarian, dan unduhan E-Guidebook |
| `/informatics-connect` | Informasi Informatics Connect |
| `/vibeit` | Informasi VibeIT |
| `/faq` | Pertanyaan yang sering diajukan |

## Struktur folder

```
.
├── DESIGN.md                  Acuan desain (warna, tipografi, komponen, aturan responsif)
├── AGENTS.md                  Catatan untuk agen AI (dibuat Next.js, jangan dihapus)
├── docs/
│   ├── proposal-acara.md      Proposal acara
│   └── audit-antislop-*.md    Laporan audit UI dan status perbaikannya
├── public/
│   ├── E-Guidebook-PORSEMATIK-2026.pdf
│   └── img/gallery/           Foto galeri
└── src/
    ├── app/                   Rute (App Router) dan globals.css
    ├── components/
    │   ├── layout/            Navbar, Footer, PixelDivider, ClimberRunner
    │   ├── home/              Hero, HomeTicker, About, Roadmap, Gallery, Registration
    │   ├── schedule/          RoadTimeline, Schedule, EventsHighlight
    │   ├── sections/          Competitions, Leaderboard, Faq, ConnectSection, VibeItSection
    │   └── icons/             PixelIcon (ikon SVG piksel), PixelHiker (pendaki)
    ├── data/                  roadmap.ts (6 stage), gallery.ts
    └── hooks/                 useCountdown, useSound
```

## Mengubah konten

- **Jadwal 6 stage:** edit [src/data/roadmap.ts](src/data/roadmap.ts). Beranda dan `/jadwal` membaca data yang sama lewat `RoadTimeline`.
- **Foto galeri:** taruh file di `public/img/gallery/` lalu daftarkan di [src/data/gallery.ts](src/data/gallery.ts).
- **Ikon:** tambah gambar piksel (grid teks) di `SPRITES` pada [PixelIcon.tsx](src/components/icons/PixelIcon.tsx). Jangan memakai emoji di teks UI.
- **Link pendaftaran:** Linktree `https://linktr.ee/porsematik2026`, tersebar di Hero, Navbar, Registration, Competitions, Faq, dan Footer. Cari dengan `grep -r linktr.ee src` bila perlu menggantinya.

## Teknologi

Next.js 16 (App Router, Turbopack), React 19, TypeScript, CSS biasa di satu berkas `globals.css`. Font Press Start 2P dan Poppins dimuat lewat `next/font/google`. Tidak ada library UI atau ikon eksternal.

## Catatan CSS

`globals.css` berlapis: aturan dasar di atas, lalu blok **FOUNDATION** di bagian akhir yang menimpa dengan token (`--nav-h`, `--gutter`, `--fs-pixel`, dan seterusnya) dan menjadi sumber kebenaran untuk navbar, tipografi, kontras, roadmap, dan responsif. Ubah gaya di blok FOUNDATION, jangan di aturan lama di atasnya.

# DESIGN.md: PORSEMATIK 2026

Acuan desain untuk landing page PORSEMATIK feat. Milad Informatika 2026 (HMIF LEM FTI UII).
Dokumen ini diturunkan dari kode yang sudah ada (`src/app/globals.css`, `layout.tsx`, komponen), bukan konsep baru.
Tujuannya: setiap perapian UI harus mengikuti konsep ini, bukan mengubahnya. Mohon koreksi bagian yang tidak sesuai niat tim.

Dial: ENERGY 3 / RHYTHM 2 / MOTION 2

Reading this as: landing page acara kampus untuk mahasiswa dan siswa SMA, bergaya 8-bit retro platformer dengan tema pendakian gunung.

## 1. Identitas

- Tema acara: "Ignite the Summit: Elevating Solidarity, Resilience, and Creativity through Sportsmanship".
- Bahasa visual: pixel art arcade. Gunung piksel bertingkat, pendaki dengan obor, awan piksel, pipa hijau, blok koin, hati piksel (health bar).
- Motif identitas (yang diulang di seluruh halaman):
  1. Bayangan keras tanpa blur (`box-shadow: 4px 4px 0 <warna>`), seperti tombol arcade.
  2. Pembatas antar seksi bergerigi piksel (`PixelDivider`).
  3. Stiker vinil bergantung dengan selotip washi di hero dan About.
  4. Judul dengan font piksel.
- Aksen utama: oranye api `#FF7A00` dan hijau piksel `#22C55E`. Emas `#F59E0B` untuk sorotan kecil.
- Konten tetap bahasa Indonesia (`lang="id"`). Istilah event (VibeIT, Informatics Connect, Klasemen) dipertahankan.

## 2. Warna

Token sumber ada di `:root` pada `globals.css`. Nilai di bawah adalah nilai akhir yang menang di CSS saat ini.

| Peran | Token / nilai | Catatan |
|---|---|---|
| Latar halaman | `--page-bg` `#FFFDF9` | krem hangat, bukan putih murni |
| Teks utama | `#1E293B` | slate gelap |
| Slate gelap (navbar, footer, kartu gelap) | `--deep-dark` `#1E293B`, kartu event mobile `#0F172A` | tidak ada hitam pekat di konten, kecuali marquee `#0B0C10` |
| Aksen 1 | `--arcade-orange` `#FF7A00` | logo, judul seksi, CTA |
| Aksen 2 | `--pixel-green` `#22C55E` | garis navbar, pembatas, status |
| Sorotan | `--gold` `#F59E0B`, `--gold-light` `#FEF08A` | hanya aksen kecil, header tabel |
| Langit hero | `--sky-blue` `#7DD3FC` | latar hero saja |
| Seksi VibeIT | ungu `#4C1D95` / `#3B0764` | identitas khusus seksi VibeIT |

Aturan:
- Inti palet: oranye, hijau, slate. Emas dan biru langit hanya aksen. Ungu hanya di VibeIT.
- Warna oranye, emas, dan hijau terang TIDAK BOLEH dipakai sebagai warna teks di atas latar terang. Rasio kontras terhitung: `#FF7A00` di `#FFFDF9` = 2.57, `#F59E0B` = 2.11, `#22C55E` di putih = 2.28. Semuanya gagal WCAG AA. Untuk teks di latar terang pakai varian lebih gelap (misalnya oranye gelap, `#B45309` yang sudah dipakai di Klasemen) atau pindahkan warna aksen ke garis, bayangan, atau latar blok dengan teks slate gelap (`#1E293B` di `#22C55E` = 6.42).
- Teks di atas gambar atau gradien wajib punya blok atau scrim yang menjamin 4.5:1 di titik terburuk.

## 3. Tipografi

| Peran | Font | Dimuat di |
|---|---|---|
| Judul, tombol, label arcade | Press Start 2P (`--font-pixel`) | `layout.tsx` |
| Isi, deskripsi, tabel, form, footer | Poppins 300 sampai 700 (`--font-body`) | `layout.tsx` |

Catatan: Pixelify Sans (`--font-sub`) ikut dimuat tetapi akhirnya ditimpa Poppins di CSS. Tidak ada elemen yang memakainya.

Alasan: font piksel memberi suara 8-bit pada judul. Poppins menjaga paragraf tetap terbaca. Jangan memakai font piksel untuk paragraf.

Skala yang disepakati untuk perapian (belum diterapkan, ini target):

| Level | Font | Ukuran (fluid) | Line-height |
|---|---|---|---|
| Hero title | Press Start 2P | `clamp(1.5rem, 6vw, 4.2rem)` | 1.25 |
| Judul seksi (h2) | Press Start 2P | `clamp(1rem, 2.4vw, 1.5rem)` | 1.4 |
| Judul kartu (h3) | Press Start 2P | `clamp(.7rem, 1.6vw, .9rem)` | 1.5 |
| Label / tombol / tab | Press Start 2P | minimum `.625rem` (10px) | 1.4 |
| Teks isi | Poppins | `1rem`, minimum `.875rem` | 1.6 sampai 1.7 |
| Teks sekunder (jam, venue, spesifikasi) | Poppins | `.875rem` | 1.5 |

Aturan:
- Press Start 2P tidak boleh di bawah 11px (`--fs-pixel`). Glyph-nya hanya terbaca bila besar.
- Poppins isi tidak di bawah 14px (`--fs-text-sm`). Label, badge, dan tombol kecil berhuruf tebal boleh 13px (`.8125rem`).
- Elemen `span`, `button`, `a`, dan `td` dipaksa Poppins oleh aturan global di `globals.css`, jadi label berbentuk span memakai ukuran Poppins, bukan ukuran piksel.
- Semua ukuran judul fluid (`clamp`), bukan dua nilai px per breakpoint.
- `feat.` selalu miring (italic), sudah ada aturan `em`.
- Judul panjang boleh turun baris. Pakai `overflow-wrap: anywhere` pada kartu agar kata panjang tidak keluar dari wadah.

## 4. Bentuk, bayangan, jarak

- Radius kecil (0 sampai 10px). Gaya piksel memakai radius 0 atau 4px. Jangan membuat semuanya pil.
- Bayangan: hanya bayangan keras offset (`4px 4px 0`). Tanpa blur lembut, tanpa glow sebagai default. Glow hanya untuk satu fokus (misalnya obor, matahari).
- Border: 2 sampai 3px, solid. Garis hijau 3px di bawah navbar dan di atas seksi.
- Glassmorphism: hanya navbar (`blur(10px)`). Jangan tambah di elemen lain.
- Container: `max-width: 1100px`, padding sisi 16px di mobile, 24px di tablet, 32px di desktop.
- Jarak vertikal seksi: desktop `5.5rem`, tablet `4rem`, mobile `3rem`.

## 5. Struktur halaman

Situs dipecah menjadi 7 route. Navbar dan Footer ada sekali di `layout.tsx`, jadi tampil di semua halaman.

| Route | Isi |
|---|---|
| `/` Beranda | Hero (2 CTA: Daftar Lomba, Lihat Kompetisi), pita arcade cabang lomba, About, Roadmap 6 stage (vertikal), Pendaftaran Lomba (6 kartu ringkas) |
| `/jadwal` | Jadwal 6 stage di jalan vertikal yang sama dengan Beranda (kartu STG asli), lalu Events Highlight |
| `/klasemen` | Klasemen Juara Umum Angkatan |
| `/kompetisi` | Competition Hub (filter, pencarian, 6 kartu) dan Pusat Berkas |
| `/informatics-connect` | Rangkaian Informatics Connect |
| `/vibeit` | Workshop VibeIT |
| `/faq` | FAQ |

Navbar (`.site-nav`, tinggi 64px, fixed): logo, 7 tautan, tombol SFX, tombol "Daftar Lomba" (Linktree resmi). Di bawah 1100px menjadi hamburger berlabel "Menu". Tautan aktif ditandai garis oranye. Tidak ada tombol SFX melayang lagi.

Roadmap di Beranda dan Jadwal memakai satu komponen (`RoadTimeline.tsx`, data di `src/data/roadmap.ts`): jalan tanah piksel `#78350F` berbingkai slate dengan garis tengah kuning putus-putus, dibuat vertikal, dengan kotak checkpoint STG di atasnya. Pendaki piksel (`PixelHiker.tsx`, tampak depan, topi oranye, jaket hijau, carrier cokelat dengan matras kuning, tongkat trekking) berjalan di jalan itu mengikuti scroll: mulai di STG 1 saat Roadmap muncul dan tiba di STG 6 saat Roadmap hampir keluar. Checkpoint yang terlewati berubah hijau. Animasi langkah hanya berjalan saat scroll bergerak dan berhenti bila `prefers-reduced-motion`.

Antar bagian di dalam satu halaman tetap memakai `PixelDivider` dan warna latar tipis per seksi. Isi dan urutan seksi tidak diubah. Hanya ukuran, jarak, dan perilaku responsif.

## 5b. Ikon

Semua ikon UI memakai `src/components/icons/PixelIcon.tsx`: grid piksel 16x16, `fill: currentColor`, digambar sebagai teks lalu diubah menjadi path. Tidak ada emoji di UI. Ikon baru ditambahkan dengan menambah satu entri sprite di file itu. Ikon dekoratif memakai `aria-hidden`, ikon yang berdiri sendiri wajib `title`.

## 6. Responsif

Breakpoint target (satu skala, menggantikan 600/640/768/900/1024 yang tercampur):

| Nama | Lebar | Perilaku |
|---|---|---|
| Phone | sampai 639px | 1 kolom. Kartu kompetisi 2 kolom hanya jika teks muat, bila tidak 1 kolom. Events jadi slider 1 kartu. |
| Tablet | 640 sampai 1023px | 2 kolom. Navbar tetap hamburger sampai 1023px. |
| Desktop | 1024px ke atas | grid penuh, navbar baris. |

Aturan:
- Tidak ada scroll horizontal di halaman (kecuali tabel Klasemen yang punya wadah scroll sendiri dengan petunjuk geser).
- Anak flex/grid memakai `min-width: 0`. Tidak ada lebar tetap px pada anak kartu.
- Hero memakai `min-height: 100svh`, bukan `100vh`.
- Target sentuh minimal 44 x 44px dengan jarak antarkontrol minimal 8px. Visual boleh lebih kecil, area tekan yang diperbesar.
- Navbar fixed 60px. Konten yang diberi anchor memakai `scroll-margin-top: 72px` agar judul tidak tertutup.
- Stiker dekoratif hero: di mobile boleh disembunyikan atau diperkecil, tidak boleh menutupi judul, countdown, atau tombol.
- Kontrol hover wajib punya padanan sentuh.

## 7. Gerak

- Gerak yang dipertahankan karena bagian dari identitas: ayunan stiker, awan melayang, nyala obor, matahari, marquee.
- Semua gerak berulang tak terbatas dihentikan bila `prefers-reduced-motion: reduce`.
- Transisi UI (menu, slider, accordion): 200 sampai 350ms.
- Tidak ada animasi baru yang ditambahkan.

## 8. Komponen dan aksesibilitas

- Tombol utama `btn-pixel`: font piksel, bayangan keras, teks slate gelap di latar oranye atau hijau (bukan putih di hijau terang).
- Fokus keyboard: `:focus-visible` dengan outline 3px emas gelap atau slate, offset 2px, terlihat di semua latar.
- Hamburger: punya `aria-expanded`, `aria-controls`, dan label teks "Menu".
- Accordion FAQ dan tab jadwal: bisa dioperasikan keyboard, memakai `button`.
- Status tidak boleh hanya warna. Sertakan teks atau ikon.
- Emoji dekoratif di teks UI diganti ikon piksel SVG (`.px-icon` sudah ada) atau dihapus. Keputusan akhir ada di pemilik desain (lihat `docs/audit-antislop-2026-11-13.md`).

## 9. Yang tidak boleh berubah

Tema 8-bit, pendaki dan gunung piksel, stiker bergantung, pembatas gerigi, palet oranye dan hijau, font Press Start 2P untuk judul, urutan seksi, isi teks dan data acara.

## 10. Catatan penulisan

- Tanpa tanda em dash pada teks UI. Gunakan koma, titik, titik dua, atau tanda kurung.
- CTA spesifik: "Daftar Lomba", "Unduh E-Guidebook (PDF)", bukan "Learn More".
- Angka, tanggal, hadiah, dan kontak hanya dari sumber resmi panitia. Jangan mengarang.

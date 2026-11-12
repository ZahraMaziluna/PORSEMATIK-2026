# Audit antislop 001: PORSEMATIK 2026 (2026-11-13)

Mode: AFTER. Tidak ada file proyek yang diubah. Referensi desain: `DESIGN.md`.
Dial dari DESIGN.md: ENERGY 3 / RHYTHM 2 / MOTION 2.

Batas audit: temuan berasal dari membaca kode (`globals.css` 4068 baris, `layout.tsx`, `page.tsx`, `Navbar.tsx`, `EventsHighlight.tsx`, `Footer.tsx`) dan menghitung kontras dengan skrip. Aplikasi BELUM dijalankan di browser, jadi temuan bertanda (verifikasi) harus dicek dulu saat perbaikan. Komponen Hero, About, Competitions, ConnectSection, VibeItSection, Schedule, Faq, Leaderboard belum dibaca baris per baris.

Prioritas: Hard Gate = HIGH, Purpose-Gate = MEDIUM, Quality Locks = LOW.

## HIGH

1. Navbar kemungkinan tidak pernah tampil. `.navbar` memakai `transform: translateY(-100%)` (globals.css:30) dan hanya tampil dengan kelas `.visible` (globals.css:32). Tidak ada kode di `src` yang menambahkan `.visible` ke navbar. Seluruh menu bisa tersembunyi di atas layar. (R-26, R-24) (verifikasi)

2. Hamburger tidak membuka menu mobile. `Navbar.tsx:22` memberi kelas `navbar__links--open` dan `Navbar.tsx:79` memberi `hamburger--active`, sedangkan CSS hanya mengenal `.navbar__links.open` (globals.css:63) dan `.hamburger.active` (globals.css:51-53). Menu tetap `translateY(-150%)`. Hamburger juga tanpa `aria-expanded` dan tanpa label teks. (R-26, R-32, R-03)

3. Font terlalu kecil dan berantakan. Press Start 2P dipakai di `.38rem` sampai `.5rem` (6 sampai 8px) di 40+ tempat (contoh globals.css:661, 944, 1539, 1679, 2093) dan ada blok `font-size: 6px / 7px / 8px` (globals.css:3013-3244 dan duplikatnya di 3352-3583). Glyph piksel di bawah 10px tidak terbaca, terutama di layar kecil. Dari 217 deklarasi `font-size`, 64 memakai ukuran sangat kecil atau `clamp`, tanpa skala tunggal. (R-03, R-06, zoom 200%)

4. Kontras teks gagal WCAG AA (dihitung dengan skrip):
   - Oranye `#FF7A00` di `#FFFDF9` = 2.57:1. Dipakai untuk judul seksi Events dan FAQ (globals.css:1912, 1590) dan logo navbar (globals.css:1868).
   - Emas `#F59E0B` di krem = 2.11:1. Dipakai di `.events-mobile-hint` (globals.css:3860) di atas latar terang.
   - Hijau `#22C55E` dengan teks putih = 2.28:1 (bila tombol hijau memakai teks putih) (verifikasi per tombol).
   (R-25)

5. Tidak ada indikator fokus keyboard. Tidak ada satu pun `:focus-visible`. Satu `outline: none` ada di globals.css:1088 (kotak cari kompetisi). Tab, slider dot, dan tombol FAQ tidak punya gaya fokus sendiri. (R-32)

6. Target sentuh di bawah 44px: `.events-slider-dot` 28 x 16px (globals.css:4021-4025), tab hari dengan padding `.5rem .6rem` dan font `.38rem` (globals.css:2093), tombol aksi kartu kompetisi mobile `6px 4px` (globals.css:3838-3841), hamburger sekitar 32px. (R-03)

7. Tanda em dash di teks yang tampil ke pengguna: judul dan deskripsi metadata (`layout.tsx:28`, `:42`) dan baris hak cipta footer (`Footer.tsx:66`). (R-02)

8. Tidak ada `prefers-reduced-motion`, padahal ada 21 animasi tak terbatas (awan, matahari, obor, hati, stiker, hint slider). (R-19, aksesibilitas)

9. CSS tema gelap mati. Ada sekitar 120 aturan `body.dark-theme ...` (globals.css:2190-2665, tiga blok duplikat) dan `.theme-toggle-btn` (globals.css:2746), tetapi tidak ada tombol atau kode di komponen yang menambahkan kelas `dark-theme`. Jika tema gelap memang tidak dipakai, itu kode mati. Jika direncanakan, belum ada toggle. (R-34, C-2)

10. Risiko tabrakan UI karena tumpukan override (verifikasi di 320, 375, 414, 768, 1024, 1280px). Penyebab struktural:
    - 595 `!important` di satu file.
    - Aturan yang sama ditulis 3 sampai 4 kali (`:root` di baris 2, 1815, 3604; blok mobile events/stiker dua kali di 3013-3244 dan 3352-3583).
    - Breakpoint tercampur: 600, 640, 768, 900, 1024. Tidak ada keadaan tablet yang sengaja dirancang (two-state layout).
    - Stiker hero diposisikan `top/left/right` dalam persen dengan `!important` (globals.css:3750-3758) sehingga bisa menutupi judul atau countdown di lebar tertentu.
    - 87 `style={{...}}` inline di komponen (ConnectSection 27, VibeItSection 22, Competitions 10, ...) yang tidak ikut aturan responsif. Contoh `Footer.tsx:37-39` mengunci ukuran font.
    (R-03, R-35)

11. Navbar desktop sempit: 8 tautan + tombol SFX dengan font piksel `clamp(.55rem, .95vw, .7rem)` dan padding, menu baru jadi hamburger di 768px. Di rentang 769 sampai sekitar 1000px baris kemungkinan terlalu sesak atau membungkus. (R-03) (verifikasi)

## MEDIUM

12. Emoji dekoratif sebagai ikon UI: tombol SFX (🔊 🔇), judul kartu event (🎪 dst.), footer (📍 📱 📧 📸 🐙 📖). Proyek sudah punya `.px-icon` SVG. Pertanyaan untuk pemilik desain: emoji dipertahankan sebagai bagian gaya, atau diganti ikon piksel? (R-04, R-37)

13. Hero memakai `min-height: 100vh` (globals.css:68). Di browser mobile tinggi ini mencakup address bar dan memotong atau mendorong konten. Ganti ke `100svh`. (layoutmobile: 100vh sections)

14. Pixelify Sans (`--font-sub`) dimuat di `layout.tsx:20-25` tetapi ditimpa menjadi Poppins di CSS (globals.css:3606). Satu file font terkirim tanpa dipakai. (R-31)

15. Teks kecil Poppins di mobile: `.comp-card__specs` `.72rem` (globals.css:3828), `.countdown__label` `.65rem` (globals.css:3797), tombol hero `.65rem`. Di bawah 14px untuk teks isi. (R-03, R-06)

16. Kartu event mobile memakai `white-space: normal !important; word-break: break-word !important` pada semua turunan (globals.css:3917-3925), yang bisa memecah kata di tengah. Lebih aman `overflow-wrap: anywhere` hanya pada teks yang butuh. (R-03)

17. Hint slider mobile berdenyut tak terbatas (`hintPulse`, globals.css:3874) dan dot aktif memakai glow (globals.css:4040). Ditumpuk dengan awan, matahari, obor, hati, stiker. Gerak ada di banyak tempat sekaligus. (R-13, R-19)

18. Slider events: swipe memakai state sentuh tetapi tidak ada dukungan keyboard (panah kiri/kanan), dan wadah tidak punya `role="region"` / `aria-roledescription="carousel"`. Tombol prev/next ada, jadi masih bisa dioperasikan. (R-32)

19. Keadaan kosong, loading, dan error belum diperiksa pada filter dan pencarian kompetisi (hasil nol) dan Klasemen. (R-27) (verifikasi, komponen belum dibaca)

## LOW

20. `.reveal` dipaksa selalu terlihat dengan `!important` di akhir file (globals.css:4058-4067). Kelas `reveal` di JSX tidak lagi melakukan apa-apa. Pilihan: hapus kelas atau hidupkan kembali efek reveal yang ringan. (C-1)

21. Palet melebar: oranye, hijau, emas, biru langit, ungu (VibeIT), plus enam latar seksi berbeda tipis (`#F0FDF4`, `#FAF8F5`, `#F5F3FF`, `#FFFBEB`, `#F8FAFC`, `#FEFCE8`). Sebagian bisa berupa identitas per seksi. Disarankan dipertahankan, tetapi didokumentasikan (sudah di DESIGN.md). (R-29)

22. Banyak seksi berkomposisi sama: judul tengah, subjudul tengah, grid kartu. Variasi ada dari warna dan kartu, bukan struktur. Tidak diubah karena DESIGN.md melarang mengubah urutan dan konsep seksi. (R-05)

23. Peringatan Next.js: `AGENTS.md` menyatakan versi Next.js ini punya perubahan API. Perbaikan yang menyentuh komponen perlu membaca `node_modules/next/dist/docs/` lebih dulu. Perbaikan CSS murni tidak terdampak.

24. Angka dan klaim (About, Klasemen, hadiah, kontak) belum diverifikasi sumbernya. Perlu konfirmasi panitia bahwa semuanya data resmi. (R-17, R-36)

## Usulan urutan perbaikan (bila disetujui)

Kelompok A, fungsi dan fondasi: 1, 2, 5, 8, 9.
Kelompok B, font: 3, 14, 15, 4 (bagian font dan kontras).
Kelompok C, tabrakan dan responsif: 10, 11, 6, 13, 16, 17.
Kelompok D, teks dan polesan: 7, 12, 18, 19, 20.

Rencana teknis untuk B dan C: buat satu blok token tipografi dan breakpoint di atas `globals.css`, lalu hapus blok duplikat dan `!important` yang tidak diperlukan secara bertahap per seksi, dengan pemeriksaan di 320/375/414/768/1024/1280px setelah tiap seksi.

## Status perbaikan (2026-11-13)

Dikerjakan: 1, 2, 3, 4, 5, 6, 7, 8, 10 (sebagian), 11, 12, 13, 14, 15, 16, 17, 18 (tombol sudah operabel keyboard), 19 (kosong pada filter kompetisi ditambahkan).
Temuan tambahan yang ditemukan saat uji: tab filter, kotak cari, dan tombol hapus di Kompetisi tidak punya handler (kontrol mati), sudah dihidupkan. Tautan PDF Guidebook relatif sehingga rusak di sub-halaman, sudah dijadikan absolut. Tombol SFX melayang dihapus karena menutupi konten dan state-nya tidak sinkron dengan navbar.

Belum dikerjakan:
- 9: CSS `body.dark-theme` (sekitar 120 aturan) belum dihapus. Tidak berdampak ke tampilan.
- 10: 595 `!important` dan blok CSS duplikat belum diratakan. Lapisan FOUNDATION di akhir `globals.css` menimpanya. Perlu refaktor bertahap.
- 20 sampai 24: tidak disentuh. `src/data/leaderboard.ts` berisi skor yang tampak fiktif dan `src/data/competitions.ts` masih berisi emoji, keduanya tidak diimpor di mana pun.
- Favicon belum ada (404). Membuat logo butuh keputusan pemilik (R-23).

Bukti uji (build produksi, Edge headless): 34 dari 34 pengecekan interaksi lulus (menu mobile, Escape, 7 route, filter, pencarian, FAQ, slider, fokus keyboard, SFX, tautan footer). Sweep di 12 lebar (320 sampai 1440px) pada 7 halaman: tanpa scroll horizontal, tanpa font Press Start 2P di bawah 11px, tanpa teks Poppins di bawah 12.5px, tanpa target sentuh di bawah 44px, tanpa kontras di bawah AA pada elemen teks yang bisa dihitung.

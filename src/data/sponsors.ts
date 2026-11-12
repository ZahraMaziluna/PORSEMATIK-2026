/*
 * Daftar sponsor dan media partner untuk section "Didukung Oleh" di Beranda.
 *
 * Cara mengisi: taruh logo di public/img/sponsors/ (PNG/SVG/WebP, latar transparan atau putih),
 * lalu tambahkan satu baris per pihak. Selama daftar masih kosong, Beranda menampilkan slot
 * kosong bertuliskan "Slot Sponsor" / "Slot Media Partner". Jangan menaruh nama atau logo
 * yang belum resmi menjadi mitra.
 *
 *   { name: "Nama Sponsor", logo: "/img/sponsors/nama-sponsor.png", href: "https://contoh.com" }
 */
export interface Partner {
  name: string;
  logo: string;
  href?: string;
}

export const SPONSORS: readonly Partner[] = [];

export const MEDIA_PARTNERS: readonly Partner[] = [];

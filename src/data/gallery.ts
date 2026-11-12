export const GALLERY_DRIVE_URL =
  "https://drive.google.com/drive/folders/1ZcHh6DEv8TbyDxuAVxcMt8DUGQQL4Pe3?usp=drive_link";

export interface GalleryPhoto {
  src: string;
  alt: string;
  tilt: number;
}

const TILTS = [-2, 3, -1, 2, -3, 1, -2, 2];

const CAPTIONS = [
  "Pertandingan futsal PORSEMATIK 2025",
  "Final Mobile Legends PORSEMATIK 2025",
  "Peserta Fun Run PORSEMATIK 2025",
  "Pertandingan basket PORSEMATIK 2025",
  "Awarding Night PORSEMATIK 2025",
  "Semarak Pagi PORSEMATIK 2025",
  "Sesi Conference PORSEMATIK 2025",
  "Aksi di lapangan futsal PORSEMATIK 2025",
  "Pertandingan Mobile Legends PORSEMATIK 2025",
  "Fun Run PORSEMATIK 2025",
  "Aksi basket PORSEMATIK 2025",
  "Penyerahan penghargaan Awarding Night 2025",
  "Keseruan Semarak Pagi PORSEMATIK 2025",
  "Peserta Conference PORSEMATIK 2025",
  "Duel futsal PORSEMATIK 2025",
  "Kompetisi Mobile Legends PORSEMATIK 2025",
];

const PHOTOS: GalleryPhoto[] = CAPTIONS.map((alt, index) => ({
  src: `/img/gallery/IMG${index + 1}.jpg`,
  alt,
  tilt: TILTS[index % TILTS.length],
}));

export const GALLERY_ROW_LEFT = PHOTOS.slice(0, 8);
export const GALLERY_ROW_RIGHT = PHOTOS.slice(8, 16);

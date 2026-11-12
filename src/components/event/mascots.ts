/*
 * Karakter piksel untuk halaman detail lomba. Setiap karakter dibangun dari
 * kerangka tubuh yang sama (chibi 16 kolom), lalu diberi atribut sesuai lomba
 * lewat `put`. Huruf pada grid dipetakan ke warna lewat palet masing-masing.
 *
 *   . transparan   K garis tepi   S kulit   H rambut   1 baju   2 celana
 *   W putih        lainnya: lihat palet tiap karakter
 */

export type MascotId = "futsal" | "basket" | "mlbb" | "poster" | "foto" | "uiux";

export interface MascotSprite {
  rows: string[];
  palette: Record<string, string>;
  label: string;
}

const PAD = 3;
const WIDTH = 16 + PAD * 2;

const BASE: string[] = [
  "................",
  ".....KKKKKK.....",
  "....KHHHHHHK....",
  "...KHHHHHHHHK...",
  "...KHSSSSSSHK...",
  "...KSKSSSSKSK...",
  "...KSSSSSSSSK...",
  "....KSSSSSSK....",
  ".....KKKKKK.....",
  "....KK1111KK....",
  "...K11111111K...",
  "..KS11111111SK..",
  "..KS11111111SK..",
  "....K111111K....",
  "....K222222K....",
  "....K222222K....",
  "....KSSKKSSK....",
  "....KSSK..KSSK..",
  "....KWWK..KWWK..",
  "...KKKKK.KKKKK..",
];

const HEIGHT = BASE.length + 1;

function make(
  setup: (put: (row: number, col: number, text: string) => void) => void,
  base: string[] = BASE,
): string[] {
  const grid = base.map((row) => ".".repeat(PAD) + row + ".".repeat(PAD));
  grid.push(".".repeat(WIDTH));
  const put = (row: number, col: number, text: string) => {
    const line = grid[row];
    grid[row] = line.slice(0, col) + text + line.slice(col + text.length);
  };
  setup(put);
  // bayangan lantai
  put(HEIGHT - 1, 6, "DDDDDDDDDDDD");
  return grid;
}

/* Ubah baris kerangka sebelum dipadatkan (dipakai karakter yang kepalanya beda). */
function withRows(overrides: Record<number, string>): string[] {
  return BASE.map((row, i) => overrides[i] ?? row);
}

const COMMON = { K: "#1E293B", W: "#FFFFFF", D: "rgba(30,41,59,.22)" };

const futsal: MascotSprite = {
  label: "Pemain futsal berikat kepala merah menendang bola",
  palette: { ...COMMON, S: "#F2C29B", H: "#4A2F1E", 1: "#22C55E", 2: "#FFFFFF", R: "#EF4444" },
  rows: make((put) => {
    put(3, PAD + 4, "RRRRRRRR");
    // angka punggung di baju
    put(11, PAD + 6, "WW");
    put(12, PAD + 6, "W.");
    // bola di kaki kanan
    put(15, 17, ".KKK.");
    put(16, 17, "KWWWK");
    put(17, 17, "KWKWK");
    put(18, 17, "KWWWK");
    put(19, 17, ".KKK.");
  }),
};

const basket: MascotSprite = {
  label: "Pemain basket berikat kepala putih memeluk bola",
  palette: { ...COMMON, S: "#C68642", H: "#1E1B18", 1: "#3B82F6", 2: "#3B82F6", O: "#FB923C" },
  rows: make((put) => {
    put(3, PAD + 4, "WWWWWWWW");
    put(11, PAD + 5, "W");
    put(11, PAD + 10, "W");
    put(13, PAD + 5, "WWWWWW");
    put(15, 17, ".KKK.");
    put(16, 17, "KOOOK");
    put(17, 17, "KKKKK");
    put(18, 17, "KOOOK");
    put(19, 17, ".KKK.");
  }),
};

const mlbb: MascotSprite = {
  label: "Gamer berheadset ungu memegang gamepad",
  palette: {
    ...COMMON,
    S: "#F4C7A1",
    H: "#1D4ED8",
    1: "#8B5CF6",
    2: "#475569",
    P: "#A3E635",
    G: "#94A3B8",
    Y: "#FACC15",
    R: "#EF4444",
  },
  rows: make((put) => {
    put(0, PAD + 5, "K.KK.K");
    put(1, PAD + 5, "PPPPPP");
    put(4, PAD + 2, "P");
    put(5, PAD + 2, "P");
    put(6, PAD + 2, "P");
    put(4, PAD + 13, "P");
    put(5, PAD + 13, "P");
    put(6, PAD + 13, "P");
    put(12, PAD + 4, "KKKKKKKK");
    put(13, PAD + 4, "KGKGGYRK");
    put(14, PAD + 4, "KKKKKKKK");
  }),
};

const posterBase = withRows({
  0: "......KKK.......",
  1: "....KRRRRRRK....",
  2: "...KRRRRRRRRK...",
  3: "...KHHHHHHHHK...",
  4: "...KHSSSSSSHK...",
});

const poster: MascotSprite = {
  label: "Seniman berbaret merah dengan kuas dan palet cat",
  palette: {
    ...COMMON,
    S: "#F2C29B",
    H: "#7C2D12",
    1: "#FBCFE8",
    2: "#334155",
    R: "#EF4444",
    Y: "#FACC15",
    L: "#3B82F6",
    N: "#22C55E",
    B: "#92400E",
  },
  rows: make((put) => {
    // kuas di sisi kiri
    put(8, 4, "R");
    put(9, 4, "R");
    for (let r = 10; r <= 16; r += 1) put(r, 4, "B");
    // cipratan cat di baju
    put(11, PAD + 5, "R");
    put(12, PAD + 9, "L");
    put(13, PAD + 6, "Y");
    // palet
    put(11, 17, ".KKK.");
    put(12, 17, "KRYKK");
    put(13, 17, "KKLNK");
    put(14, 17, ".KKK.");
  }, posterBase),
};

const fotoBase = withRows({
  1: ".....KKKKKK.....",
  2: "....KCCCCCCK....",
  3: "...KCEEEEEECK...",
  4: "...KHSSSSSSHK...",
});

const foto: MascotSprite = {
  label: "Fotografer bertopi biru membawa kamera",
  palette: {
    ...COMMON,
    S: "#F2C29B",
    H: "#3B2A20",
    1: "#FDE68A",
    2: "#334155",
    C: "#3B82F6",
    E: "#1D4ED8",
    G: "#64748B",
    L: "#7DD3FC",
    Y: "#FACC15",
  },
  rows: make((put) => {
    put(11, PAD + 6, "KKKK");
    put(12, PAD + 4, "KGGGGGGK");
    put(13, PAD + 4, "KGKLLKGK");
    put(14, PAD + 4, "KKKKKKKK");
    put(12, PAD + 10, "Y");
  }, fotoBase),
};

const uiuxBase = withRows({
  4: "...KKKKSSKKKK...",
  5: "...KKWKSSKWKK...",
});

const uiux: MascotSprite = {
  label: "Desainer berkacamata dengan laptop",
  palette: {
    ...COMMON,
    S: "#F2C29B",
    H: "#7C3AED",
    1: "#06B6D4",
    2: "#334155",
    G: "#94A3B8",
    L: "#A5F3FC",
    C: "#F472B6",
  },
  rows: make((put) => {
    put(11, PAD + 4, "KKKKKKKK");
    put(12, PAD + 4, "KLLLLLLK");
    put(13, PAD + 4, "KLCLLCLK");
    put(14, PAD + 4, "KKKKKKKK");
    put(15, PAD + 3, "KGGGGGGGGK");
  }, uiuxBase),
};

export const MASCOTS: Record<MascotId, MascotSprite> = {
  futsal,
  basket,
  mlbb,
  poster,
  foto,
  uiux,
};

export const MASCOT_SIZE = { width: WIDTH, height: HEIGHT };

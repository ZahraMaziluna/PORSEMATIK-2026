import React from "react";
import Link from "next/link";
import PixelIcon, { type PixelIconName } from "@/components/icons/PixelIcon";

const INFO: { icon: PixelIconName; title: string; body: React.ReactNode }[] = [
  {
    icon: "flag",
    title: "Penyelenggara",
    body: (
      <>
        Panitia Pelaksana PORSEMATIK feat. Milad Informatika 2026, di bawah naungan Bidang Bakat dan Kreativitas HMIF LEM FTI UII
        Periode 2025/2026.
      </>
    ),
  },
  {
    icon: "mountain",
    title: "Filosofi Puncak",
    body: (
      <>
        Ignite the Summit: simbol pendakian bersama menuju puncak pencapaian. Kobarkan obor solidaritas, ketahanan mental, dan
        kreativitas lewat sportivitas sejati.
      </>
    ),
  },
  {
    icon: "users",
    title: "Tujuan",
    body: <>Mempererat solidaritas, mengasah potensi bakat mahasiswa, dan membangun sinergi inklusif civitas akademika.</>,
  },
];

const VALUES: { icon: PixelIconName; title: string; desc: string }[] = [
  { icon: "star", title: "Keislaman", desc: "Menanamkan nilai-nilai keislaman dalam setiap kegiatan dan interaksi." },
  { icon: "book", title: "Keilmuan", desc: "Mendorong semangat belajar dan pengembangan ilmu pengetahuan." },
  { icon: "medal", title: "Kepercayaan Diri", desc: "Membangun keberanian tampil dan berkarya di depan publik." },
  { icon: "camera", title: "Kreativitas", desc: "Mengeksplorasi ide-ide kreatif melalui seni dan teknologi." },
  { icon: "trophy", title: "Sportivitas", desc: "Menjunjung tinggi semangat fair play dalam setiap pertandingan." },
  { icon: "branch", title: "Keharmonisan", desc: "Memperkuat tali silaturahmi dan kebersamaan antar angkatan." },
];

export default function About() {
  return (
    <section className="about ab" id="about">
      <div className="ab__wrap">
        <div className="ab__grid">
          <div className="ab__left reveal">
            <span className="ab__badge">Informasi Utama</span>
            <span className="ab__sticker" aria-hidden="true">★ Milad Informatika ke-32</span>
            <h2 className="ab__title">
              Tentang
              <br />
              PORSEMATIK <span className="ab__year">26</span>
            </h2>
            <div className="ab__lead">
              <p>
                PORSEMATIK adalah ajang tahunan bergengsi yang mempertemukan mahasiswa Informatika FTI UII dari berbagai angkatan
                dalam kompetisi olahraga, seni, edukasi, dan e-Sports.
              </p>
              <p>
                Pekan Olahraga, Seni, dan Edukasi Mahasiswa Informatika tahun ini berkolaborasi dengan perayaan Milad Informatika
                ke-32 untuk merayakan kebersamaan, daya lentur, dan semangat sportivitas tanpa batas.
              </p>
            </div>
            <Link href="/kompetisi" className="ab__cta">
              Lihat Kompetisi <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="ab__stack">
            {INFO.map((c) => (
              <article className="ab__card reveal" key={c.title}>
                <div className="ab__icon">
                  <PixelIcon name={c.icon} />
                </div>
                <div>
                  <h3 className="ab__card-title">{c.title}</h3>
                  <p className="ab__card-text">{c.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <h3 className="ab__sub reveal">Nilai yang Kami Bawa</h3>
        <div className="ab__values">
          {VALUES.map((v) => (
            <article className="ab__card ab__card--value reveal" key={v.title}>
              <div className="ab__icon">
                <PixelIcon name={v.icon} />
              </div>
              <div>
                <h4 className="ab__card-title">{v.title}</h4>
                <p className="ab__card-text">{v.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

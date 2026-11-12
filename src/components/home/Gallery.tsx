import React from "react";
import Image from "next/image";
import {
  GALLERY_DRIVE_URL,
  GALLERY_ROW_LEFT,
  GALLERY_ROW_RIGHT,
  type GalleryPhoto,
} from "@/data/gallery";

function MarqueeRow({
  photos,
  direction,
}: {
  photos: GalleryPhoto[];
  direction: "left" | "right";
}) {
  return (
    <div className="gallery-row">
      <ul className={`gallery-track gallery-track--${direction}`}>
        {[...photos, ...photos].map((photo, index) => {
          const isCopy = index >= photos.length;
          return (
            <li
              key={`${photo.src}-${index}`}
              className="gallery-card"
              style={{ "--tilt": `${photo.tilt}deg` } as React.CSSProperties}
              aria-hidden={isCopy || undefined}
            >
              <Image
                src={photo.src}
                alt={isCopy ? "" : photo.alt}
                width={288}
                height={288}
                sizes="288px"
                className="gallery-card__img"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Gallery() {
  return (
    <section className="gallery" id="galeri">
      <div className="gallery__head">
        <h2 className="gallery__title">
          Dokumentasi <span>Acara</span>
        </h2>
        <p className="gallery__sub">
          Kilas balik keseruan PORSEMATIK feat. Milad Informatika tahun lalu.
        </p>
      </div>

      <div className="gallery__rows">
        <MarqueeRow photos={GALLERY_ROW_LEFT} direction="left" />
        <MarqueeRow photos={GALLERY_ROW_RIGHT} direction="right" />
      </div>

      <div className="gallery__cta">
        <a
          href={GALLERY_DRIVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-pixel"
        >
          [ Lihat Semua Foto ]
        </a>
      </div>
    </section>
  );
}

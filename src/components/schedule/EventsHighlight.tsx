"use client";

import React, { useState } from "react";
import PixelIcon from "@/components/icons/PixelIcon";
import { useSound } from "@/hooks/useSound";

const VIBEIT_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScuKliSypDmIJL__CyamGvfZk9dehMoDlrBSP0lsdIi-D0bHg/viewform?usp=publish-editor";

export default function EventsHighlight() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const totalSlides = 4;
  const minSwipeDistance = 40;

  const { playClick } = useSound();

  const handlePrev = () => {
    playClick();
    setActiveSlide((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    playClick();
    setActiveSlide((prev) => Math.min(totalSlides - 1, prev + 1));
  };

  const handleSelect = (idx: number) => {
    playClick();
    setActiveSlide(idx);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && activeSlide < totalSlides - 1) {
      setActiveSlide((prev) => prev + 1);
    }
    if (isRightSwipe && activeSlide > 0) {
      setActiveSlide((prev) => prev - 1);
    }
  };

  return (
    <section className="events" id="events">
      <div className="container">
        <h2 className="section-title reveal">Events Highlight</h2>
        <p className="section-subtitle reveal">
          Rangkaian acara utama kolaborasi PORSEMATIK &amp; Milad Informatika ke-32.
        </p>

        {/* Mobile Swipe Hint (Hidden on Desktop) */}
        <div className="events-mobile-hint">
          <span className="events-mobile-hint__icon">
            <PixelIcon name="chevronLeft" />
          </span>
          <span>
            Geser kartu untuk melihat acara (<strong>{activeSlide + 1}</strong> dari {totalSlides})
          </span>
          <span className="events-mobile-hint__icon">
            <PixelIcon name="chevronRight" />
          </span>
        </div>

        {/* Slider Viewport */}
        <div className="events-slider-viewport">
          <div
            className="events__grid"
            style={{
              transform: `translateX(-${activeSlide * 100}%)`,
            }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* 1. Pembukaan */}
            <div className="event-card event-card--rose">
              <div className="event-card__date">16 Nov 2026</div>
              <h3 className="event-card__title"><PixelIcon name="flag" /> Opening Ceremony</h3>
              <div className="event-card__time">
                <svg className="px-icon px-icon--sm" viewBox="0 0 16 16">
                  <path
                    d="M5,1 h6 v2 h-6 Z M3,3 h10 v2 h-10 Z M1,5 h14 v6 h-14 Z M3,11 h10 v2 h-10 Z M5,13 h6 v2 h-6 Z M7,4 h2 v4 h3 v2 h-5 Z"
                    fill="#EA580C"
                  />
                </svg>
                <span>17.50 – 18.10 WIB</span>
              </div>
              <div className="event-card__venue">
                <svg className="px-icon px-icon--sm" viewBox="0 0 16 16">
                  <path
                    d="M5,1 h6 v2 h-6 Z M3,3 h10 v4 h-10 Z M5,7 h6 v2 h-6 Z M6,9 h4 v3 h-4 Z M7,12 h2 v3 h-2 Z M7,4 h2 v2 h-2 Z"
                    fill="#0284C7"
                  />
                </svg>
                <span>GOR Ki Bagoes Hadikoesoemo UII</span>
              </div>
              <p className="event-card__desc">
                Upacara pembukaan resmi PORSEMATIK feat. Milad Informatika 2026 dilanjutkan babak penyisihan turnamen Futsal Match 1–5.
              </p>
            </div>

            {/* 2. Informatics Connect */}
            <div className="event-card event-card--yellow">
              <div className="event-card__date">17 Nov 2026</div>
              <h3 className="event-card__title"><PixelIcon name="users" /> Informatics Connect</h3>
              <div className="event-card__time">
                <svg className="px-icon px-icon--sm" viewBox="0 0 16 16">
                  <path
                    d="M5,1 h6 v2 h-6 Z M3,3 h10 v2 h-10 Z M1,5 h14 v6 h-14 Z M3,11 h10 v2 h-10 Z M5,13 h6 v2 h-6 Z M7,4 h2 v4 h3 v2 h-5 Z"
                    fill="#EA580C"
                  />
                </svg>
                <span>06.00 – 09.00 WIB</span>
              </div>
              <div className="event-card__venue">
                <svg className="px-icon px-icon--sm" viewBox="0 0 16 16">
                  <path
                    d="M5,1 h6 v2 h-6 Z M3,3 h10 v4 h-10 Z M5,7 h6 v2 h-6 Z M6,9 h4 v3 h-4 Z M7,12 h2 v3 h-2 Z M7,4 h2 v2 h-2 Z"
                    fill="#0284C7"
                  />
                </svg>
                <span>Lapangan Utara GOR UII</span>
              </div>
              <p className="event-card__desc">
                Momen kebersamaan mahasiswa, dosen, dan alumni: Pemotongan tumpeng Milad ke-32, Wish Note, senam bersama, estafet sarung, Festival Kuliner UMKM &amp; Photobooth diiringi akustik KOSMIK, serta penutupan.
              </p>
              <a
                href="https://graceful-wisp-d728cb.netlify.app"
                className="btn-pixel btn-pixel--sm"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: "auto" }}
              >
                [ DAFTAR INFORMATICS CONNECT ]
              </a>
            </div>

            {/* 3. VibeIT */}
            <div className="event-card event-card--purple">
              <div className="event-card__date">21 Nov 2026</div>
              <h3 className="event-card__title"><PixelIcon name="code" /> VibeIT: AI Workshop</h3>
              <div className="event-card__time">
                <svg className="px-icon px-icon--sm" viewBox="0 0 16 16">
                  <path
                    d="M5,1 h6 v2 h-6 Z M3,3 h10 v2 h-10 Z M1,5 h14 v6 h-14 Z M3,11 h10 v2 h-10 Z M5,13 h6 v2 h-6 Z M7,4 h2 v4 h3 v2 h-5 Z"
                    fill="#EA580C"
                  />
                </svg>
                <span>07.30 – 11.00 WIB</span>
              </div>
              <div className="event-card__venue">
                <svg className="px-icon px-icon--sm" viewBox="0 0 16 16">
                  <path
                    d="M5,1 h6 v2 h-6 Z M3,3 h10 v4 h-10 Z M5,7 h6 v2 h-6 Z M6,9 h4 v3 h-4 Z M7,12 h2 v3 h-2 Z M7,4 h2 v2 h-2 Z"
                    fill="#0284C7"
                  />
                </svg>
                <span>Ruang 3.2 Lab FTI UII</span>
              </div>
              <p className="event-card__desc">
                Pelatihan Vibe Coding eksklusif bagi 50 siswa SMA/SLTA sederajat bersama GDGOC UII untuk membuat dan deploy landing page UMKM menggunakan Lovable AI.
              </p>
              <a
                href={VIBEIT_URL}
                className="btn-pixel btn-pixel--sm"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: "auto" }}
              >
                [ DAFTAR VIBEIT ]
              </a>
            </div>

            {/* 4. Awarding Night */}
            <div className="event-card event-card--green">
              <div className="event-card__date">22 Nov 2026</div>
              <h3 className="event-card__title"><PixelIcon name="trophy" /> Awarding Night &amp; Penutupan</h3>
              <div className="event-card__time">
                <svg className="px-icon px-icon--sm" viewBox="0 0 16 16">
                  <path
                    d="M5,1 h6 v2 h-6 Z M3,3 h10 v2 h-10 Z M1,5 h14 v6 h-14 Z M3,11 h10 v2 h-10 Z M5,13 h6 v2 h-6 Z M7,4 h2 v4 h3 v2 h-5 Z"
                    fill="#EA580C"
                  />
                </svg>
                <span>19.15 – 21.30 WIB</span>
              </div>
              <div className="event-card__venue">
                <svg className="px-icon px-icon--sm" viewBox="0 0 16 16">
                  <path
                    d="M5,1 h6 v2 h-6 Z M3,3 h10 v4 h-10 Z M5,7 h6 v2 h-6 Z M6,9 h4 v3 h-4 Z M7,12 h2 v3 h-2 Z M7,4 h2 v2 h-2 Z"
                    fill="#0284C7"
                  />
                </svg>
                <span>Lapangan Utara GOR UII</span>
              </div>
              <p className="event-card__desc">
                Malam puncak penayangan after movie, pengumuman pemenang lomba &amp; Juara Umum Angkatan, stand kuliner, penampilan musik angkatan, dan penutup KOSMIK.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Interactive Slider Controls (Hidden on Desktop) */}
        <div className="events-slider-controls">
          <button
            type="button"
            className="events-slider-btn"
            onClick={handlePrev}
            disabled={activeSlide === 0}
            aria-label="Acara Sebelumnya"
          >
            <PixelIcon name="chevronLeft" /> PREV
          </button>

          <div className="events-slider-dots">
            {[0, 1, 2, 3].map((idx) => (
              <button
                key={idx}
                type="button"
                className={`events-slider-dot ${activeSlide === idx ? "events-slider-dot--active" : ""}`}
                onClick={() => handleSelect(idx)}
                aria-label={`Lihat Acara ${idx + 1}`}
              >
                <span className="dot-inner"></span>
              </button>
            ))}
          </div>

          <button
            type="button"
            className="events-slider-btn"
            onClick={handleNext}
            disabled={activeSlide === totalSlides - 1}
            aria-label="Acara Berikutnya"
          >
            NEXT <PixelIcon name="chevronRight" />
          </button>
        </div>
      </div>
    </section>
  );
}

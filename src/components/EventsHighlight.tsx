import React from "react";

export default function EventsHighlight() {
  return (
<section className="events" id="events">
  <div className="container">
    <h2 className="section-title reveal">Events Highlight</h2>
    <p className="section-subtitle reveal">Rangkaian acara utama kolaborasi PORSEMATIK &amp; Milad Informatika ke-32.</p>

    <div className="events__grid reveal">
      {/*  1. Pembukaan  */}
      <div className="event-card event-card--rose">
        <div className="event-card__date">16 Nov 2026</div>
        <h3 className="event-card__title">🎪 Opening Ceremony</h3>
        <div className="event-card__time"><svg className="px-icon px-icon--sm" viewBox="0 0 16 16"><path d="M5,1 h6 v2 h-6 Z M3,3 h10 v2 h-10 Z M1,5 h14 v6 h-14 Z M3,11 h10 v2 h-10 Z M5,13 h6 v2 h-6 Z M7,4 h2 v4 h3 v2 h-5 Z" fill="#EA580C"/></svg> 17.50 – 18.10 WIB</div>
        <div className="event-card__venue"><svg className="px-icon px-icon--sm" viewBox="0 0 16 16"><path d="M5,1 h6 v2 h-6 Z M3,3 h10 v4 h-10 Z M5,7 h6 v2 h-6 Z M6,9 h4 v3 h-4 Z M7,12 h2 v3 h-2 Z M7,4 h2 v2 h-2 Z" fill="#0284C7"/></svg> GOR Ki Bagoes Hadikoesoemo UII</div>
        <p className="event-card__desc">Upacara pembukaan resmi PORSEMATIK feat. Milad Informatika 2026 dilanjutkan babak penyisihan turnamen Futsal Match 1–5.</p>
      </div>

      {/*  2. Informatics Connect  */}
      <div className="event-card event-card--yellow">
        <div className="event-card__date">17 Nov 2026</div>
        <h3 className="event-card__title">🤝 Informatics Connect</h3>
        <div className="event-card__time"><svg className="px-icon px-icon--sm" viewBox="0 0 16 16"><path d="M5,1 h6 v2 h-6 Z M3,3 h10 v2 h-10 Z M1,5 h14 v6 h-14 Z M3,11 h10 v2 h-10 Z M5,13 h6 v2 h-6 Z M7,4 h2 v4 h3 v2 h-5 Z" fill="#EA580C"/></svg> 06.00 – 09.00 WIB</div>
        <div className="event-card__venue"><svg className="px-icon px-icon--sm" viewBox="0 0 16 16"><path d="M5,1 h6 v2 h-6 Z M3,3 h10 v4 h-10 Z M5,7 h6 v2 h-6 Z M6,9 h4 v3 h-4 Z M7,12 h2 v3 h-2 Z M7,4 h2 v2 h-2 Z" fill="#0284C7"/></svg> Lapangan Utara GOR UII</div>
        <p className="event-card__desc">Momen kebersamaan mahasiswa, dosen, dan alumni: Pemotongan tumpeng Milad ke-32, Wish Note, senam bersama, estafet sarung, kuliner UMKM (3 chip makan &amp; 1 photobooth), dan akustik KOSMIK.</p>
        <a href="https://harmonious-tarsier-a4a80a.netlify.app/" className="btn-pixel btn-pixel--sm" target="_blank" rel="noopener" style={{marginTop: "auto"}}>[ DAFTAR INFORMATICS CONNECT ]</a>
      </div>

      {/*  3. VibeIT  */}
      <div className="event-card event-card--purple">
        <div className="event-card__date">21 Nov 2026</div>
        <h3 className="event-card__title">🤖 VibeIT: AI Workshop</h3>
        <div className="event-card__time"><svg className="px-icon px-icon--sm" viewBox="0 0 16 16"><path d="M5,1 h6 v2 h-6 Z M3,3 h10 v2 h-10 Z M1,5 h14 v6 h-14 Z M3,11 h10 v2 h-10 Z M5,13 h6 v2 h-6 Z M7,4 h2 v4 h3 v2 h-5 Z" fill="#EA580C"/></svg> 07.30 – 11.00 WIB</div>
        <div className="event-card__venue"><svg className="px-icon px-icon--sm" viewBox="0 0 16 16"><path d="M5,1 h6 v2 h-6 Z M3,3 h10 v4 h-10 Z M5,7 h6 v2 h-6 Z M6,9 h4 v3 h-4 Z M7,12 h2 v3 h-2 Z M7,4 h2 v2 h-2 Z" fill="#0284C7"/></svg> Ruang 3.2 Lab FTI UII</div>
        <p className="event-card__desc">Pelatihan Vibe Coding eksklusif bagi 50 siswa SMA/SLTA sederajat bersama GDGOC UII untuk membuat dan deploy landing page UMKM menggunakan Lovable AI.</p>
      </div>

      {/*  4. Awarding Night  */}
      <div className="event-card event-card--green">
        <div className="event-card__date">22 Nov 2026</div>
        <h3 className="event-card__title">🏆 Awarding Night &amp; Penutupan</h3>
        <div className="event-card__time"><svg className="px-icon px-icon--sm" viewBox="0 0 16 16"><path d="M5,1 h6 v2 h-6 Z M3,3 h10 v2 h-10 Z M1,5 h14 v6 h-14 Z M3,11 h10 v2 h-10 Z M5,13 h6 v2 h-6 Z M7,4 h2 v4 h3 v2 h-5 Z" fill="#EA580C"/></svg> 19.15 – 21.30 WIB</div>
        <div className="event-card__venue"><svg className="px-icon px-icon--sm" viewBox="0 0 16 16"><path d="M5,1 h6 v2 h-6 Z M3,3 h10 v4 h-10 Z M5,7 h6 v2 h-6 Z M6,9 h4 v3 h-4 Z M7,12 h2 v3 h-2 Z M7,4 h2 v2 h-2 Z" fill="#0284C7"/></svg> Lapangan Utara GOR UII</div>
        <p className="event-card__desc">Malam puncak penayangan after movie, pengumuman pemenang lomba &amp; Juara Umum Angkatan, stand kuliner, penampilan musik angkatan, dan penutup KOSMIK.</p>
      </div>
    </div>
  </div>
</section>
  );
}

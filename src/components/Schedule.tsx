import React from "react";

export default function Schedule() {
  return (
<section className="schedule" id="schedule">
  <div className="container" style={{textAlign: "center"}}>
    <span className="vibe-tag" style={{background: "#DCFCE7", color: "#15803D"}}>WORLD MAP • 6 STAGES</span>
    <h2 className="section-title reveal" style={{color: "#15803D !important", marginTop: ".4rem", textAlign: "center"}}>Jadwal Pelaksanaan Acara</h2>
    <p className="section-subtitle reveal" style={{color: "#166534 !important", textAlign: "center"}}>Rangkaian 6 stage kompetisi dan kegiatan PORSEMATIK feat. Milad Informatika Tahun 2026.</p>

    <div className="pixel-map-container reveal">
      <div className="pixel-map-track">
        {/*  8-Bit Pixel Dirt Road Path with Centerline  */}
        <div className="pixel-road">
          <div className="pixel-road-line"></div>
        </div>

        {/*  Top Checkpoints Row (STG 2, STG 4, STG 6)  */}
        <div className="map-row map-row--top">
          <div className="map-slot map-slot--empty"></div>

          {/*  STG 2  */}
          <div className="map-slot">
            <div className="map-card">
              <span className="stg-badge stg-badge--amber">STG 2</span>
              <div className="map-date">Selasa, 17 Nov 2026</div>
              <div className="map-time">06.00 – 21.30 WIB</div>
              <h4 className="map-title">Informatics Connect, Basket &amp; Futsal</h4>
              <p className="map-desc">Lapangan Utara &amp; GOR UII • Tumpengan Milad ke-32, dilanjutkan babak penyisihan Basket &amp; Futsal.</p>
            </div>
          </div>

          <div className="map-slot map-slot--empty"></div>

          {/*  STG 4  */}
          <div className="map-slot">
            <div className="map-card">
              <span className="stg-badge stg-badge--purple">STG 4</span>
              <div className="map-date">Kamis, 19 Nov 2026</div>
              <div className="map-time">18.10 – 21.10 WIB</div>
              <h4 className="map-title">Quarter Final &amp; Semi Final MLBB</h4>
              <p className="map-desc">Auditorium FTI UII • Laga eliminasi perempat final (BO1) dan semifinal (BO3) Mobile Legends.</p>
            </div>
          </div>

          <div className="map-slot map-slot--empty"></div>

          {/*  STG 6  */}
          <div className="map-slot">
            <div className="map-card">
              <span className="stg-badge stg-badge--gold">STG 6 🏆</span>
              <div className="map-date">Minggu, 22 Nov 2026</div>
              <div className="map-time">19.15 – 21.30 WIB</div>
              <h4 className="map-title">Awarding Night &amp; Closing Ceremony</h4>
              <p className="map-desc">Lapangan Utara GOR UII • Penobatan Juara Umum Angkatan, penayangan after movie, &amp; konser KOSMIK.</p>
            </div>
          </div>
        </div>

        {/*  Checkpoints Flag Nodes Line  */}
        <div className="map-nodes-row">
          <div className="map-node-wrap"><div className="checkpoint-box" title="Stage 1: 16 Nov"><span className="cp-text">STG 1</span></div><span className="cp-sub">16 Nov</span></div>
          <div className="map-node-wrap"><div className="checkpoint-box checkpoint-box--active" title="Stage 2: 17 Nov"><span className="cp-text">STG 2</span></div><span className="cp-sub">17 Nov</span></div>
          <div className="map-node-wrap"><div className="checkpoint-box" title="Stage 3: 18 Nov"><span className="cp-text">STG 3</span></div><span className="cp-sub">18 Nov</span></div>
          <div className="map-node-wrap"><div className="checkpoint-box" title="Stage 4: 19 Nov"><span className="cp-text">STG 4</span></div><span className="cp-sub">19 Nov</span></div>
          <div className="map-node-wrap"><div className="checkpoint-box" title="Stage 5: 21 Nov"><span className="cp-text">STG 5</span></div><span className="cp-sub">21 Nov</span></div>
          <div className="map-node-wrap"><div className="checkpoint-box checkpoint-box--boss" title="Stage 6: 22 Nov"><span className="cp-text">STG 6</span></div><span className="cp-sub">22 Nov</span></div>
        </div>

        {/*  Bottom Checkpoints Row (STG 1, STG 3, STG 5)  */}
        <div className="map-row map-row--bottom">
          {/*  STG 1  */}
          <div className="map-slot">
            <div className="map-card">
              <span className="stg-badge stg-badge--green">STG 1</span>
              <div className="map-date">Senin, 16 Nov 2026</div>
              <div className="map-time">17.50 – 21.50 WIB</div>
              <h4 className="map-title">Pembukaan &amp; Penyisihan Futsal (1–5)</h4>
              <p className="map-desc">GOR Ki Bagoes Hadikoesoemo UII • Upacara pembukaan akbar dan laga perdana babak grup futsal.</p>
            </div>
          </div>

          <div className="map-slot map-slot--empty"></div>

          {/*  STG 3  */}
          <div className="map-slot">
            <div className="map-card">
              <span className="stg-badge stg-badge--orange">STG 3</span>
              <div className="map-date">Rabu, 18 Nov 2026</div>
              <div className="map-time">18.00 – 23.59 WIB</div>
              <h4 className="map-title">Grand Final Futsal, Basket &amp; Deadline</h4>
              <p className="map-desc">GOR UII • Laga puncak Final Futsal &amp; Basket, serta batas akhir pengumpulan karya digital (23.59 WIB).</p>
            </div>
          </div>

          <div className="map-slot map-slot--empty"></div>

          {/*  STG 5  */}
          <div className="map-slot">
            <div className="map-card">
              <span className="stg-badge stg-badge--cyan">STG 5</span>
              <div className="map-date">Sabtu, 21 Nov 2026</div>
              <div className="map-time">07.30 – 17.20 WIB</div>
              <h4 className="map-title">VibeIT, Final UI/UX &amp; GF MLBB</h4>
              <p className="map-desc">Lab 3.2 FTI &amp; Auditorium • Workshop Vibe Coding SMA, Presentasi UI/UX, &amp; Grand Final MLBB.</p>
            </div>
          </div>

          <div className="map-slot map-slot--empty"></div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

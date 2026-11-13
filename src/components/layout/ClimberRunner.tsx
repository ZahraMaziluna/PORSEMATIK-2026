"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSound } from "@/hooks/useSound";

const BAND = 50; // tinggi pita tanah (piksel dunia)
const PX = 4;
// pendaki sejajar dengan tepi kiri kontainer 1100px (550 piksel dunia), sedikit ke kiri
const playerLeft = (w: number) => Math.max(24, (w - 550) / 2 - 16);
const GRAVITY = 0.65;
const JUMP_V = 12;

const PALETTE: Record<string, string> = {
  Y: "#FDE047",
  S: "#F5C9A0",
  E: "#1E293B",
  O: "#FF7A00",
  B: "#B45309",
  P: "#1E293B",
  K: "#0F172A",
  A: "#CBD5E1",
  G: "#94A3B8",
};

const TOP = [
  "....YYYY....",
  "...YYYYYY...",
  "....SSSE....",
  "....SSSS..GG",
  "BB.OOOOO.AG.",
  "BBBOOOOOAA..",
  "BBBOOOOOA...",
  "BB.OOOOO....",
  "...PPPPP....",
  "...PPPPP....",
];
const LEGS = {
  runA: ["...PP.PP....", "..PP...PP...", "..PP....P...", "..KK....KK.."],
  runB: ["....PPP.....", "....PPP.....", "....PPP.....", "....KKKK...."],
  jump: ["...PP..PP...", "..PP....PP..", "..KK....KK..", "............"],
};

type Obs = { x: number; w: number; h: number; kind: "rock" | "tree" };
type Game = {
  w: number;
  h: number;
  px: number;
  dist: number;
  speed: number;
  y: number;
  vy: number;
  obs: Obs[];
  gap: number;
  dead: boolean;
  time: number;
};

const newGame = (w = 800, h = 320, px = playerLeft(w)): Game => ({
  w, h, px, dist: 0, speed: 5.5, y: 0, vy: 0, obs: [], gap: 300, dead: false, time: 0,
});

function drawSprite(ctx: CanvasRenderingContext2D, rows: string[], x: number, y: number) {
  rows.forEach((row, r) => {
    for (let c = 0; c < row.length; c++) {
      const col = PALETTE[row[c]];
      if (!col) continue;
      ctx.fillStyle = col;
      ctx.fillRect(x + c * PX, y + r * PX, PX, PX);
    }
  });
}

function drawRock(ctx: CanvasRenderingContext2D, o: Obs, gr: number) {
  const u = o.w / 6;
  ctx.fillStyle = "#64748B";
  ctx.fillRect(o.x + u, gr - o.h, u * 4, o.h);
  ctx.fillRect(o.x, gr - o.h * 0.6, o.w, o.h * 0.6);
  ctx.fillStyle = "#94A3B8";
  ctx.fillRect(o.x + u, gr - o.h, u * 2, 6);
  ctx.fillStyle = "#475569";
  ctx.fillRect(o.x + o.w - u * 1.5, gr - o.h * 0.5, u * 1.5, o.h * 0.5);
}

function drawTree(ctx: CanvasRenderingContext2D, o: Obs, gr: number) {
  ctx.fillStyle = "#78350F";
  ctx.fillRect(o.x + o.w / 2 - 3, gr - 10, 6, 10);
  const tiers = 3;
  for (let i = 0; i < tiers; i++) {
    const tw = o.w - i * 7;
    const ty = gr - 10 - (i + 1) * ((o.h - 10) / tiers);
    ctx.fillStyle = i === 0 ? "#15803D" : "#22C55E";
    ctx.fillRect(o.x + (o.w - tw) / 2, ty, tw, (o.h - 10) / tiers + 2);
  }
}

function mountainLayer(
  ctx: CanvasRenderingContext2D, w: number, gr: number, offset: number,
  color: string, amp: number, period: number, base: number,
) {
  ctx.fillStyle = color;
  const step = 8;
  for (let sx = 0; sx < w + step; sx += step) {
    const x = sx + offset;
    const t = ((x % period) + period) % period;
    const tri = 1 - Math.abs((t / period) * 2 - 1);
    const h = Math.round((base + amp * tri) / step) * step;
    ctx.fillRect(sx - (offset % step), gr - h, step + 1, h);
  }
}

function draw(ctx: CanvasRenderingContext2D, g: Game) {
  const { w, h } = g;
  const gr = h - BAND;
  const f = gr / 190;
  ctx.clearRect(0, 0, w, h);

  // awan piksel
  ctx.fillStyle = "rgba(226, 228, 210, 0.75)";
  const span = w + 240;
  for (let i = 0; i < Math.ceil(w / 330) + 1; i++) {
    const cx = ((((i * 360 - g.dist * 0.08) % span) + span) % span) - 120;
    const cy = gr * 0.12 + (i % 3) * 26;
    ctx.fillRect(cx, cy, 88, 12);
    ctx.fillRect(cx + 14, cy - 10, 48, 10);
  }

  mountainLayer(ctx, w, gr, g.dist * 0.15, "rgba(148, 163, 184, 0.26)", 110 * f, 640, 40 * f);
  mountainLayer(ctx, w, gr, g.dist * 0.35, "rgba(132, 176, 108, 0.34)", 70 * f, 420, 16 * f);

  // tanah
  ctx.fillStyle = "#E4E5C8";
  ctx.fillRect(0, gr, w, BAND);
  ctx.fillStyle = "#9DB58A";
  ctx.fillRect(0, gr, w, 3);
  ctx.fillStyle = "#BDC19F";
  for (let i = 0; i < Math.ceil(w / 66); i++) {
    const x = (((i * 83 - g.dist) % (w + 80)) + (w + 80)) % (w + 80);
    ctx.fillRect(x, gr + 12 + (i % 4) * 9, 14 + (i % 4) * 4, 3);
  }

  // bendera checkpoint tiap 100 m
  const flagDist = Math.ceil((g.dist - 120) / 800) * 800 + 120;
  const fx = g.px + 40 + (flagDist - g.dist);
  if (fx > -30 && fx < w) {
    ctx.fillStyle = "#1E293B";
    ctx.fillRect(fx, gr - 72, 4, 72);
    ctx.fillStyle = "#FF7A00";
    ctx.fillRect(fx + 4, gr - 72, 26, 8);
    ctx.fillRect(fx + 4, gr - 64, 18, 8);
    ctx.fillRect(fx + 4, gr - 56, 10, 6);
  }

  g.obs.forEach((o) => (o.kind === "rock" ? drawRock(ctx, o, gr) : drawTree(ctx, o, gr)));

  const frame = g.y > 0 ? LEGS.jump : Math.floor(g.dist / 36) % 2 ? LEGS.runA : LEGS.runB;
  drawSprite(ctx, [...TOP, ...frame], g.px, gr - g.y - 14 * PX);
}

const fmtTime = (ms: number) => {
  const s = Math.floor(ms / 1000);
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
};

export default function ClimberRunner() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const altRef = useRef<HTMLSpanElement>(null);
  const bestElRef = useRef<HTMLSpanElement>(null);
  const timeRef = useRef<HTMLSpanElement>(null);
  const statusRef = useRef<HTMLSpanElement>(null);
  const gameRef = useRef<Game>(newGame());
  const bestRef = useRef(0);
  const visibleRef = useRef(true);
  const [mode, setMode] = useState<"auto" | "play">("auto");
  const [paused, setPaused] = useState(false);
  const modeRef = useRef(mode);
  modeRef.current = mode;
  const { playJump, playLanding, playStartFanfare, playHit, playClick } = useSound();

  const setStatus = (text: string) => {
    if (statusRef.current) statusRef.current.textContent = text;
  };

  const restart = useCallback(() => {
    const g = gameRef.current;
    gameRef.current = newGame(g.w, g.h, g.px);
    setStatus("");
  }, []);

  const jump = useCallback(() => {
    if (modeRef.current !== "play") return;
    const g = gameRef.current;
    if (g.dead) {
      restart();
      playStartFanfare();
      return;
    }
    if (g.y === 0) {
      g.vy = JUMP_V;
      playJump();
    }
  }, [restart, playJump, playStartFanfare]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPaused(true);
  }, []);

  // ukuran kanvas mengikuti bagian (dunia selalu skala 2x, 1.5x di layar sempit)
  useEffect(() => {
    const el = sectionRef.current;
    const canvas = canvasRef.current;
    if (!el || !canvas) return;
    const fit = () => {
      const cssW = el.clientWidth;
      const cssH = el.clientHeight;
      if (!cssW || !cssH) return;
      const scale = cssW < 640 ? 1.5 : 2;
      const w = Math.round(cssW / scale);
      const h = Math.round(cssH / scale);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gameRef.current.w = w;
        gameRef.current.h = h;
        const c = canvas.getContext("2d");
        if (c) {
          c.imageSmoothingEnabled = false;
          draw(c, gameRef.current);
        }
      }
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    ctx.imageSmoothingEnabled = false;

    const io = new IntersectionObserver(([e]) => {
      visibleRef.current = e.isIntersecting;
    });
    io.observe(canvas);

    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      const dt = Math.min(now - last, 50);
      last = now;
      if (!visibleRef.current) return;
      const g = gameRef.current;
      const k = dt / 16.67;

      // pendaki di kanan saat otomatis (teks sambutan di kiri), di kiri saat main
      const left = playerLeft(g.w);
      const target = modeRef.current === "play" ? left : Math.max(left, g.w * 0.68);
      g.px += (target - g.px) * Math.min(1, 0.06 * k);

      if (!g.dead) {
        g.speed = Math.min(10, 5.5 + g.dist / 3000);
        g.dist += g.speed * k;
        g.time += dt;

        if (modeRef.current === "auto") {
          const next = g.obs.find((o) => o.x + o.w > g.px);
          if (next && g.y === 0 && next.x - (g.px + 44) <= g.speed * 9) g.vy = JUMP_V;
        }

        g.vy -= GRAVITY * k;
        const prevY = g.y;
        g.y = Math.max(0, g.y + g.vy * k);
        if (prevY > 0 && g.y === 0 && modeRef.current === "play") {
          playLanding();
        }
        if (g.y === 0 && g.vy < 0) g.vy = 0;

        const lastObs = g.obs[g.obs.length - 1];
        if (!lastObs || lastObs.x < g.w - g.gap) {
          const tree = Math.random() < 0.4;
          g.obs.push(
            tree
              ? { kind: "tree", x: g.w + 20, w: 36, h: 70 }
              : { kind: "rock", x: g.w + 20, w: 30 + Math.floor(Math.random() * 3) * 10, h: 28 + Math.floor(Math.random() * 3) * 10 },
          );
          g.gap = 320 + Math.random() * 260 + g.speed * 20;
        }
        g.obs.forEach((o) => (o.x -= g.speed * k));
        g.obs = g.obs.filter((o) => o.x + o.w > -60);

        const hit = g.obs.some((o) => o.x < g.px + 40 && o.x + o.w > g.px + 10 && g.y < o.h - 8);
        if (hit) {
          if (!g.dead) playHit();
          g.dead = true;
          const m = Math.floor(g.dist / 8);
          bestRef.current = Math.max(bestRef.current, m);
          if (bestElRef.current) bestElRef.current.textContent = String(bestRef.current);
          setStatus(`Terpeleset di ${m} m. Tekan spasi atau tap untuk ulang.`);
        }
        if (altRef.current) altRef.current.textContent = String(Math.floor(g.dist / 8));
        if (timeRef.current) timeRef.current.textContent = fmtTime(g.time);
      }
      draw(ctx, g);
    };

    draw(ctx, gameRef.current);
    if (!paused) raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [paused, mode]);

  const startPlay = () => {
    restart();
    playStartFanfare();
    setMode("play");
    setPaused(false);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    canvasRef.current?.focus({ preventScroll: true });
  };
  const startAuto = () => {
    restart();
    playClick();
    setMode("auto");
  };

  const playing = mode === "play";

  return (
    <div ref={sectionRef} role="region" className={`climber${playing ? " is-play" : ""}`} aria-label="Mini game pendaki">
      <canvas
        ref={canvasRef}
        width={800}
        height={320}
        className="climber__canvas"
        tabIndex={0}
        role="img"
        aria-label="Pendaki berlari mendaki gunung dan melompati batu dan pohon. Tekan spasi atau panah atas untuk melompat saat mode main."
        onPointerDown={jump}
        onKeyDown={(e) => {
          if (e.key === " " || e.key === "ArrowUp") {
            e.preventDefault();
            jump();
          }
        }}
      />

      <div className="climber__inner">
        {playing ? (
          <div className="climber__head">
            <div>
              <p className="climber__eyebrow">Pendakian / 01</p>
              <h2 className="climber__title">Mendaki puncak PORSEMATIK.</h2>
              <p className="climber__status-line">
                <span ref={statusRef} className="climber__status" aria-live="polite" />
              </p>
            </div>
            <div className="climber__side">
              <button type="button" className="climber__back" onClick={startAuto}>
                Kembali ke footer
              </button>
              <dl className="climber__hud">
                <div><dt>Tinggi</dt><dd><span ref={altRef}>0</span> m</dd></div>
                <div><dt>Rekor</dt><dd><span ref={bestElRef}>0</span> m</dd></div>
                <div><dt>Waktu</dt><dd ref={timeRef}>00:00</dd></div>
              </dl>
            </div>
          </div>
        ) : (
          <div className="climber__intro">
            <p className="climber__eyebrow">Pendaftaran / 2026</p>
            <h2 className="climber__title">
              Siap mendaki ke <span>puncak</span> bersama PORSEMATIK?
            </h2>
            <p className="climber__lead">
              Pilih cabang lomba, daftarkan timmu lewat portal resmi, dan daki bersama mahasiswa Informatika UII.
            </p>
            <a className="climber__cta" href="https://linktr.ee/porsematik2026" target="_blank" rel="noopener noreferrer">
              Daftar Lomba
            </a>
            <p className="climber__sub">
              Butuh panduan?{" "}
              <a href="/E-Guidebook-PORSEMATIK-2026.pdf" download="E-Guidebook-PORSEMATIK-2026.pdf">
                Unduh E-Guidebook (PDF)
              </a>
            </p>
          </div>
        )}

        <div className="climber__controls">
          <button type="button" className="climber__btn climber__btn--main" onClick={playing ? jump : startPlay}>
            {playing ? "Lompat" : "Ikut main"}
          </button>
          <button
            type="button"
            className="climber__btn"
            onClick={() => setPaused((p) => !p)}
            aria-pressed={paused}
          >
            {paused ? "Lanjut" : "Jeda"}
          </button>
          <p className="climber__hint">
            {playing ? "SPASI / panah atas atau tap untuk lompat." : "Pendaki mendaki sendiri. Mau ikut?"}
          </p>
        </div>
      </div>
    </div>
  );
}

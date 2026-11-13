"use client";

import React, { useEffect, useRef, useState } from "react";
import PixelIcon from "@/components/icons/PixelIcon";
import PixelHiker from "@/components/icons/PixelHiker";
import { useSound } from "@/hooks/useSound";
import type { Stage } from "@/data/roadmap";

/*
 * Jalan tanah piksel vertikal dengan checkpoint STG dan kartu di kiri-kanan. Pendaki berjalan
 * di jalan mengikuti scroll: mulai di STG 1 saat timeline muncul dan tiba di STG terakhir saat
 * timeline hampir keluar layar. Checkpoint yang sudah dilewati berubah hijau.
 */
export default function RoadTimeline({ stages }: { stages: readonly Stage[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const hikerRef = useRef<HTMLDivElement>(null);
  const [reached, setReached] = useState(0);
  const { playStep, playPickup } = useSound();
  const lastStepTimeRef = useRef(0);
  const prevReachedRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    const hiker = hikerRef.current;
    if (!track || !hiker) return;

    let raf = 0;
    let idleTimer: number | undefined;
    let lastY = -1;

    const update = () => {
      raf = 0;
      const nodes = Array.from(track.querySelectorAll<HTMLElement>(".roadmap__node"));
      if (nodes.length === 0) return;

      const trackRect = track.getBoundingClientRect();
      const centers = nodes.map((node) => {
        const r = node.getBoundingClientRect();
        return r.top - trackRect.top + r.height / 2;
      });
      const first = centers[0];
      const last = centers[centers.length - 1];

      // Mulai di STG 1 saat timeline muncul (atau di puncak halaman bila sudah terlihat sejak awal),
      // tiba di STG terakhir saat bagian bawah timeline mencapai 45% tinggi layar.
      const vh = window.innerHeight;
      const trackTop = trackRect.top + window.scrollY;
      const startScroll = Math.max(0, trackTop - vh * 0.7);
      const endScroll = Math.max(startScroll + 1, trackTop + trackRect.height - vh * 0.45);
      const progress = Math.min(1, Math.max(0, (window.scrollY - startScroll) / (endScroll - startScroll)));
      const y = first + progress * (last - first);

      hiker.style.transform = `translateY(${y - hiker.offsetHeight / 2}px)`;
      const count = centers.filter((c) => c <= y + 1).length;
      if (count > prevReachedRef.current && count > 0) {
        prevReachedRef.current = count;
        playPickup();
        lastStepTimeRef.current = performance.now() + 180; // Avoid overlapping footstep with pickup sound
      }
      setReached(count);

      if (Math.abs(y - lastY) > 0.5) {
        hiker.dataset.walking = "true";
        const now = performance.now();
        if (now - lastStepTimeRef.current > 260) {
          lastStepTimeRef.current = now;
          playStep();
        }
        window.clearTimeout(idleTimer);
        idleTimer = window.setTimeout(() => {
          hiker.dataset.walking = "false";
        }, 160);
      }
      lastY = y;
    };

    const schedule = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (raf) window.cancelAnimationFrame(raf);
      window.clearTimeout(idleTimer);
    };
  }, []);

  return (
    <div className="roadmap__track" ref={trackRef}>
      <ol className="roadmap__list">
        {stages.map((stage, index) => (
          <li className="roadmap__item" key={stage.code}>
            <div
              className={`checkpoint-box roadmap__node${stage.badge === "gold" ? " checkpoint-box--boss" : ""}${index < reached ? " checkpoint-box--active" : ""}`}
            >
              <span className="cp-text">{stage.code}</span>
            </div>
            <div className="map-card roadmap__card">
              <span className={`stg-badge stg-badge--${stage.badge}`}>
                {stage.code}
                {stage.badge === "gold" ? <> <PixelIcon name="trophy" /></> : null}
              </span>
              {stage.date ? <div className="map-date">{stage.date}</div> : null}
              {stage.time ? <div className="map-time">{stage.time}</div> : null}
              <h3 className="map-title">{stage.title}</h3>
              <p className="map-desc">{stage.desc}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="roadmap__hiker" ref={hikerRef} data-walking="false" aria-hidden="true">
        <span className="hiker__frame hiker__frame--a">
          <PixelHiker frame="a" />
        </span>
        <span className="hiker__frame hiker__frame--b">
          <PixelHiker frame="b" />
        </span>
      </div>
    </div>
  );
}

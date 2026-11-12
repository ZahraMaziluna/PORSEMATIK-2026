import React from "react";
import PixelIcon, { type PixelIconName } from "@/components/icons/PixelIcon";
import RoadTimeline from "@/components/schedule/RoadTimeline";
import type { Stage } from "@/data/roadmap";

/*
 * Kerangka bersama halaman Informatics Connect dan VibeIT: kepala seksi, status, 4 kartu info,
 * jalan timeline (sama dengan Jadwal), pengumuman, dan tombol. Warna lewat kelas `gather--*`.
 */

export interface GatheringData {
  id: string;
  tone: "connect" | "vibe";
  badge: string;
  title: string;
  subtitle: string;
  status: { label: string; value?: string };
  info: { icon: PixelIconName; label: string; value: string; sub: string }[];
  timeline: { badge: string; title: string; subtitle: string };
  steps: { time: string; title: string; desc: string }[];
  notice: { icon: PixelIconName; title: string; text: React.ReactNode };
  actions: { label: string; href?: string; disabledHint?: string }[];
}

const BADGES: Stage["badge"][] = ["green", "amber", "orange", "purple", "cyan"];

function toStages(steps: GatheringData["steps"]): Stage[] {
  return steps.map((step, index) => ({
    code: `LV.${index + 1}`,
    badge: index === steps.length - 1 ? "gold" : BADGES[index % BADGES.length],
    date: "",
    time: step.time,
    title: step.title,
    desc: step.desc,
  }));
}

export default function GatheringPage({ data }: { data: GatheringData }) {
  return (
    <section className={`gather gather--${data.tone}`} id={data.id}>
      <div className="container">
        <span className="sec-badge">{data.badge}</span>
        <h2 className="section-title">{data.title}</h2>
        <p className="section-subtitle">{data.subtitle}</p>

        <div className="gather-status">
          <div className="gather-status__label">
            <span>{data.status.label}</span>
            {data.status.value ? <span>{data.status.value}</span> : null}
          </div>
          <div className="gather-status__bar" aria-hidden="true">
            {Array.from({ length: 10 }, (_, i) => (
              <i key={i} />
            ))}
          </div>
        </div>

        <div className="gather-info">
          {data.info.map((item) => (
            <article className="gather-card" key={item.label}>
              <header className="gather-card__head">
                <span className="gather-card__label">{item.label}</span>
                <PixelIcon name={item.icon} className="gather-card__icon" />
              </header>
              <p className="gather-card__value">{item.value}</p>
              <p className="gather-card__sub">{item.sub}</p>
            </article>
          ))}
        </div>

        <div className="gather-block">
          <span className="sec-badge">{data.timeline.badge}</span>
          <h2 className="section-title">{data.timeline.title}</h2>
          <p className="section-subtitle">{data.timeline.subtitle}</p>
          <RoadTimeline stages={toStages(data.steps)} />
        </div>

        <div className="gather-notice">
          <PixelIcon name={data.notice.icon} />
          <div>
            <span className="gather-notice__title">{data.notice.title}</span>
            <p>{data.notice.text}</p>
          </div>
        </div>

        <div className="gather-actions">
          {data.actions.map((action) =>
            action.href ? (
              <a key={action.label} href={action.href} className="reg-btn" target="_blank" rel="noopener noreferrer">
                {action.label}
              </a>
            ) : (
              <button
                key={action.label}
                type="button"
                className="reg-btn gather-btn--disabled"
                disabled
                title={action.disabledHint}
              >
                {action.label}
              </button>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

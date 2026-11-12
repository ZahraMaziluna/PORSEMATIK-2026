import React from "react";
import Link from "next/link";
import PixelIcon from "@/components/icons/PixelIcon";
import PixelMascot from "./PixelMascot";
import RoadTimeline from "@/components/schedule/RoadTimeline";
import type { Stage } from "@/data/roadmap";
import EventFaq from "./EventFaq";
import type { EventDetail, EventReward, EventStep } from "@/data/competition-details";
import "./event.css";

const BADGES: Stage["badge"][] = ["green", "amber", "orange", "purple", "cyan"];

/* Langkah lomba dipetakan ke checkpoint jalan yang sama dengan halaman Jadwal. Langkah terakhir jadi checkpoint emas. */
function toStages(steps: EventStep[]): Stage[] {
  return steps.map((step, index) => ({
    code: `STG ${index + 1}`,
    badge: index === steps.length - 1 ? "gold" : BADGES[index % BADGES.length],
    date: step.date,
    time: "",
    title: step.title,
    desc: step.desc,
  }));
}

const REGISTER_URL = "https://linktr.ee/porsematik2026";
const GUIDEBOOK_URL = "/E-Guidebook-PORSEMATIK-2026.pdf";

function RewardIcon({ tier }: { tier: EventReward["tier"] }) {
  if (tier === "star") return <PixelIcon name="star" className="medal medal--gold" />;
  if (tier === "scroll") return <PixelIcon name="scroll" />;
  return <PixelIcon name="medal" className={`medal medal--${tier}`} />;
}

function BackLink() {
  return (
    <Link href="/kompetisi" className="ev-back">
      <PixelIcon name="chevronLeft" /> Kembali ke Kompetisi
    </Link>
  );
}

function Actions({ event }: { event: EventDetail }) {
  return (
    <>
      <a className="ev-btn ev-btn--primary" href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
        <PixelIcon name="person" /> {event.registerLabel}
      </a>
      <a className="ev-btn ev-btn--alt" href={GUIDEBOOK_URL} target="_blank" rel="noopener noreferrer">
        <PixelIcon name="book" /> Unduh E-Guidebook
      </a>
    </>
  );
}

function CtaCard({ event }: { event: EventDetail }) {
  return (
    <aside className="ev-card ev-cta">
      <p className="ev-cta__tag">Siap untuk ikut?</p>
      <p className="ev-cta__deadline">
        Pendaftaran ditutup
        <br />
        13 November 2026, 12.00 WIB.
      </p>
      <div className="ev-cta__fee">
        <span>Biaya</span>
        <strong>
          Rp{event.fee} <small>{event.feeUnit}</small>
        </strong>
      </div>
      <Actions event={event} />
    </aside>
  );
}

function Rewards({ event, title = "Reward & Poin" }: { event: EventDetail; title?: string }) {
  return (
    <aside className="ev-card ev-rewards">
      <h2 className="ev-h2">
        <PixelIcon name="trophy" /> {title}
      </h2>
      <ul className="ev-rewards__list">
        {event.rewards.map((reward, index) => (
          <li key={reward.label} className={index === 0 ? "is-top" : undefined}>
            <RewardIcon tier={reward.tier} />
            <div>
              <strong>{reward.label}</strong>
              <span>{reward.value}</span>
            </div>
          </li>
        ))}
        {event.extras.map((extra) => (
          <li key={extra.title} className="is-plain">
            <PixelIcon name="scroll" />
            <div>
              <strong>{extra.title}</strong>
              <span>{extra.sub}</span>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function AboutList({ items }: { items: string[] }) {
  return (
    <ul className="ev-list">
      {items.map((item) => (
        <li key={item}>
          <PixelIcon name="flag" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Layout A: referensi (kartu + sidebar, timeline zigzag) ---------- */
function ReferenceLayout({ event }: { event: EventDetail }) {
  return (
    <>
      <header className="ev-hero ev-hero--center">
        <div className="ev-wrap">
          <BackLink />
          <PixelMascot id={event.mascot} className="ev-hero__mascot" />
          <span className="ev-badge">{event.category}</span>
          <h1 className="ev-title">{event.name}</h1>
          <p className="ev-lead">{event.tagline}</p>
        </div>
      </header>

      <div className="ev-wrap ev-stack">
        <div className="ev-grid ev-grid--side">
          <article className="ev-card">
            <h2 className="ev-h2">
              <PixelIcon name="notice" /> Tentang Acara
            </h2>
            <AboutList items={event.about} />
          </article>
          <CtaCard event={event} />
        </div>

        <div className="ev-grid ev-grid--side">
          <article className="ev-card ev-card--accent">
            <h2 className="ev-h2">
              <PixelIcon name="scroll" /> {event.rulesTitle}
            </h2>
            <ul className="ev-rules">
              {event.rules.map((rule) => (
                <li key={rule.text}>
                  <PixelIcon name={rule.icon} />
                  <span>{rule.text}</span>
                </li>
              ))}
            </ul>
          </article>
          <Rewards event={event} title="Fasilitas Peserta" />
        </div>

        <article className="ev-card">
          <h2 className="ev-h2">
            <PixelIcon name="mountain" /> Schedule & Agenda
          </h2>
          <p className="ev-sub">Timeline kegiatan {event.short}</p>
          <RoadTimeline stages={toStages(event.timeline)} />
        </article>

        <article className="ev-card">
          <h2 className="ev-h2">
            <PixelIcon name="invader" /> FAQ & Detail Kegiatan
          </h2>
          <EventFaq items={event.faq} />
        </article>
      </div>
    </>
  );
}

/* ---------- Layout B: arena (papan skor, rulebook, podium, jalur laga) ---------- */
function ArenaLayout({ event }: { event: EventDetail }) {
  const [first, second, third] = event.rewards;
  return (
    <>
      <header className="ev-hero ev-hero--arena">
        <div className="ev-wrap ev-hero__split">
          <div className="ev-hero__copy">
            <BackLink />
            <span className="ev-badge">{event.category}</span>
            <h1 className="ev-title ev-title--left">{event.name}</h1>
            <p className="ev-lead ev-lead--left">{event.tagline}</p>
            <div className="ev-hero__actions">
              <Actions event={event} />
            </div>
          </div>
          <div className="ev-court" aria-hidden="false">
            <PixelMascot id={event.mascot} className="ev-court__mascot" />
          </div>
        </div>
      </header>

      <div className="ev-wrap ev-stack">
        <div className="ev-scoreboard" role="list" aria-label="Ringkasan lomba">
          {event.stats.map((stat) => (
            <div key={stat.label} className="ev-scoreboard__cell" role="listitem">
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </div>
          ))}
        </div>

        <article className="ev-card">
          <h2 className="ev-h2">
            <PixelIcon name="notice" /> Brief Pertandingan
          </h2>
          <AboutList items={event.about} />
        </article>

        <article className="ev-card ev-card--accent">
          <h2 className="ev-h2">
            <PixelIcon name="scroll" /> {event.rulesTitle}
          </h2>
          <ol className="ev-rulebook">
            {event.rules.map((rule, index) => (
              <li key={rule.text}>
                <span className="ev-rulebook__no">{String(index + 1).padStart(2, "0")}</span>
                <span>{rule.text}</span>
              </li>
            ))}
          </ol>
        </article>

        <article className="ev-card">
          <h2 className="ev-h2">
            <PixelIcon name="trophy" /> Podium Reward
          </h2>
          <div className="ev-podium">
            {second ? (
              <div className="ev-podium__step ev-podium__step--2">
                <RewardIcon tier={second.tier} />
                <strong>{second.label}</strong>
                <span>{second.value}</span>
              </div>
            ) : null}
            <div className="ev-podium__step ev-podium__step--1">
              <RewardIcon tier={first.tier} />
              <strong>{first.label}</strong>
              <span>{first.value}</span>
            </div>
            {third ? (
              <div className="ev-podium__step ev-podium__step--3">
                <RewardIcon tier={third.tier} />
                <strong>{third.label}</strong>
                <span>{third.value}</span>
              </div>
            ) : null}
          </div>
        </article>

        <article className="ev-card">
          <h2 className="ev-h2">
            <PixelIcon name="flag" /> Jalur Pertandingan
          </h2>
          <p className="ev-sub">Dari pendaftaran sampai Awarding Night</p>
          <RoadTimeline stages={toStages(event.timeline)} />
        </article>

        <article className="ev-card">
          <h2 className="ev-h2">
            <PixelIcon name="invader" /> FAQ
          </h2>
          <EventFaq items={event.faq} />
        </article>
      </div>
    </>
  );
}

/* ---------- Layout C: galeri (bingkai, catatan tempel, timeline satu garis) ---------- */
function GalleryLayout({ event }: { event: EventDetail }) {
  return (
    <>
      <header className="ev-hero ev-hero--gallery">
        <div className="ev-wrap ev-hero__split">
          <div className="ev-hero__copy">
            <BackLink />
            <span className="ev-badge">{event.category}</span>
            <h1 className="ev-title ev-title--left">{event.name}</h1>
            <p className="ev-lead ev-lead--left">{event.tagline}</p>
          </div>
          <figure className="ev-frame">
            <span className="ev-frame__tape" aria-hidden="true" />
            <PixelMascot id={event.mascot} className="ev-frame__mascot" />
            <figcaption>{event.short}</figcaption>
          </figure>
        </div>
      </header>

      <div className="ev-wrap ev-stack">
        {event.theme ? (
          <blockquote className="ev-theme">
            <span className="ev-theme__label">Tema</span>
            <p>{event.theme}</p>
          </blockquote>
        ) : null}

        <div className="ev-grid ev-grid--gallery">
          <div className="ev-stack">
            <article className="ev-card">
              <h2 className="ev-h2">
                <PixelIcon name="notice" /> Tentang Lomba
              </h2>
              <AboutList items={event.about} />
            </article>

            <div>
              <h2 className="ev-h2 ev-h2--bare">
                <PixelIcon name="camera" /> {event.rulesTitle}
              </h2>
              <ul className="ev-notes">
                {event.rules.map((rule) => (
                  <li key={rule.text}>
                    <PixelIcon name={rule.icon} />
                    <span>{rule.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="ev-stack ev-sticky">
            <CtaCard event={event} />
            <Rewards event={event} title="Hadiah & Poin" />
          </div>
        </div>

        <article className="ev-card">
          <h2 className="ev-h2">
            <PixelIcon name="mountain" /> Alur Lomba
          </h2>
          <RoadTimeline stages={toStages(event.timeline)} />
        </article>

        <article className="ev-card">
          <h2 className="ev-h2">
            <PixelIcon name="invader" /> Pertanyaan Umum
          </h2>
          <EventFaq items={event.faq} columns={2} />
        </article>
      </div>
    </>
  );
}

export default function EventPage({ event }: { event: EventDetail }) {
  const style = {
    "--ev-accent": event.accent,
    "--ev-accent2": event.accent2,
  } as React.CSSProperties;

  return (
    <main id="main" className={`page ev ev--${event.layout}`} style={style}>
      {event.layout === "arena" ? (
        <ArenaLayout event={event} />
      ) : event.layout === "gallery" ? (
        <GalleryLayout event={event} />
      ) : (
        <ReferenceLayout event={event} />
      )}
    </main>
  );
}

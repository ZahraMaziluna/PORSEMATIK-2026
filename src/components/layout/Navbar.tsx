"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSound } from "@/hooks/useSound";
import PixelIcon from "@/components/icons/PixelIcon";

const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/jadwal", label: "Jadwal" },
  { href: "/klasemen", label: "Klasemen" },
  { href: "/faq", label: "FAQ" },
] as const;

const ACARA_LINKS = [
  { href: "/kompetisi", label: "Kompetisi" },
  { href: "/informatics-connect", label: "Informatics Connect" },
  { href: "/vibeit", label: "VibeIT" },
] as const;

const REGISTRATION_URL = "https://linktr.ee/porsematik2026";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [acaraOpen, setAcaraOpen] = useState(false);
  const acaraRef = useRef<HTMLLIElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const { soundEnabled, toggleSound, playClick } = useSound();

  useEffect(() => {
    setMenuOpen(false);
    setAcaraOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!acaraOpen) return;
    const onPointerDown = (event: PointerEvent) => {
      if (acaraRef.current && !acaraRef.current.contains(event.target as Node)) setAcaraOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setAcaraOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [acaraOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const handleLinkClick = () => {
    playClick();
    setMenuOpen(false);
    setAcaraOpen(false);
  };

  return (
    <header className={`site-nav${scrolled ? " is-scrolled" : ""}`}>
      <nav className="site-nav__bar" aria-label="Navigasi utama">
        <Link href="/" className="site-nav__logo" onClick={handleLinkClick}>
          PORSEMATIK
        </Link>

        <ul
          id="site-nav-menu"
          className={`site-nav__menu${menuOpen ? " is-open" : ""}`}
        >
          {NAV_LINKS.slice(0, 3).map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`site-nav__link${isActive ? " is-active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li
            ref={acaraRef}
            className={`site-nav__dropdown${acaraOpen ? " is-open" : ""}`}
            onMouseEnter={() => window.matchMedia("(hover: hover)").matches && setAcaraOpen(true)}
            onMouseLeave={() => window.matchMedia("(hover: hover)").matches && setAcaraOpen(false)}
          >
            <button
              type="button"
              className={`site-nav__link site-nav__drop-btn${ACARA_LINKS.some((l) => pathname.startsWith(l.href)) ? " is-active" : ""}`}
              aria-expanded={acaraOpen}
              aria-controls="site-nav-acara"
              onClick={() => {
                playClick();
                setAcaraOpen((open) => !open);
              }}
            >
              Acara
              <svg className="site-nav__chev" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
            <ul id="site-nav-acara" className="site-nav__submenu">
              {ACARA_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`site-nav__sublink${pathname.startsWith(link.href) ? " is-active" : ""}`}
                    aria-current={pathname.startsWith(link.href) ? "page" : undefined}
                    onClick={handleLinkClick}
                  >
                    <span className="site-nav__bullet" aria-hidden="true"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          {NAV_LINKS.slice(3).map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`site-nav__link${isActive ? " is-active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="site-nav__actions">
            <button
              type="button"
              className="site-nav__sfx"
              aria-pressed={soundEnabled}
              onClick={() => {
                toggleSound();
                playClick();
              }}
            >
              <PixelIcon name={soundEnabled ? "speakerOn" : "speakerOff"} />
              <span>SFX {soundEnabled ? "On" : "Off"}</span>
            </button>
            <a
              href={REGISTRATION_URL}
              className="site-nav__cta"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playClick()}
            >
              Daftar Lomba
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="site-nav__toggle"
          aria-expanded={menuOpen}
          aria-controls="site-nav-menu"
          onClick={() => {
            playClick();
            setMenuOpen((open) => !open);
          }}
        >
          <span className="site-nav__toggle-bars" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span className="site-nav__toggle-label">{menuOpen ? "Tutup" : "Menu"}</span>
        </button>
      </nav>
    </header>
  );
}

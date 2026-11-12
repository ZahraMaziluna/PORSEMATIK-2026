"use client";

import React, { useState } from "react";
import { useSound } from "@/hooks/useSound";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { soundEnabled, toggleSound, playClick } = useSound();

  const handleNavClick = () => {
    playClick();
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="navbar" id="navbar">
        <a href="#hero" className="navbar__logo" onClick={handleNavClick}>
          PORSEMATIK
        </a>

        <ul className={`navbar__links ${mobileMenuOpen ? "navbar__links--open" : ""}`} id="navLinks">
          <li>
            <a href="#about" onClick={handleNavClick}>
              About
            </a>
          </li>
          <li>
            <a href="#schedule" onClick={handleNavClick}>
              Jadwal
            </a>
          </li>
          <li>
            <a href="#events" onClick={handleNavClick}>
              Events
            </a>
          </li>
          <li>
            <a href="#vibeit" onClick={handleNavClick}>
              VibeIT
            </a>
          </li>
          <li>
            <a href="#connect" onClick={handleNavClick}>
              Connect
            </a>
          </li>
          <li>
            <a href="#competitions" onClick={handleNavClick}>
              Kompetisi
            </a>
          </li>
          <li>
            <a href="#leaderboard" onClick={handleNavClick}>
              Klasemen
            </a>
          </li>
          <li>
            <a href="#faq" onClick={handleNavClick}>
              FAQ
            </a>
          </li>
          <li>
            <button
              onClick={() => {
                toggleSound();
                playClick();
              }}
              className="navbar__sfx-toggle btn-pixel"
              style={{ fontSize: "0.55rem", padding: "6px 10px" }}
              title="Toggle Retro Sound Effects"
            >
              {soundEnabled ? "🔊 SFX: ON" : "🔇 SFX: OFF"}
            </button>
          </li>
        </ul>

        <button
          className={`hamburger ${mobileMenuOpen ? "hamburger--active" : ""}`}
          id="hamburger"
          aria-label="Toggle navigation menu"
          onClick={() => {
            playClick();
            setMobileMenuOpen(!mobileMenuOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
}

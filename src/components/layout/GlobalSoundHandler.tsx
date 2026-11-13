"use client";

import { useEffect, useRef } from "react";
import { useSound } from "@/hooks/useSound";

export default function GlobalSoundHandler() {
  const { playClick, playStartFanfare, soundEnabled } = useSound();
  const playedWelcomeRef = useRef(false);

  // Play sound on entering / refreshing the site
  useEffect(() => {
    if (!soundEnabled || playedWelcomeRef.current) return;

    const triggerWelcome = () => {
      if (playedWelcomeRef.current) return;
      playedWelcomeRef.current = true;
      playStartFanfare();
      cleanup();
    };

    const cleanup = () => {
      window.removeEventListener("pointerdown", triggerWelcome);
      window.removeEventListener("scroll", triggerWelcome);
      window.removeEventListener("keydown", triggerWelcome);
      window.removeEventListener("touchstart", triggerWelcome);
    };

    // Try playing immediately (works if page was refreshed or audio unlocked)
    try {
      playStartFanfare();
      playedWelcomeRef.current = true;
    } catch {
      // If blocked by browser autoplay policy, arm listener for first gesture
    }

    window.addEventListener("pointerdown", triggerWelcome, { once: true, passive: true });
    window.addEventListener("scroll", triggerWelcome, { once: true, passive: true });
    window.addEventListener("keydown", triggerWelcome, { once: true, passive: true });
    window.addEventListener("touchstart", triggerWelcome, { once: true, passive: true });

    return cleanup;
  }, [soundEnabled, playStartFanfare]);

  // Global click sound for all interactive buttons and links
  useEffect(() => {
    if (!soundEnabled) return;

    let lastClickTime = 0;
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest(
        "button, a, input[type='button'], input[type='submit'], [role='button'], .btn-pixel, .climber__btn, .hub-tab, .events-slider-dot, .events-slider-btn, .sponsor-card"
      );
      if (target) {
        const now = performance.now();
        if (now - lastClickTime > 40) {
          lastClickTime = now;
          playClick();
        }
      }
    };

    document.addEventListener("click", handleClick, { capture: true, passive: true });
    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
    };
  }, [soundEnabled, playClick]);

  return null;
}

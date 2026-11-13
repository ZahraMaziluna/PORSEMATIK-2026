"use client";

import { useEffect } from "react";
import { useSound } from "@/hooks/useSound";

export default function GlobalSoundHandler() {
  const { playClick, soundEnabled } = useSound();

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

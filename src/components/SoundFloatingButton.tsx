"use client";

import React from "react";
import { useSound } from "@/hooks/useSound";

export default function SoundFloatingButton() {
  const { soundEnabled, toggleSound, playClick } = useSound();

  return (
    <button
      id="sfxFloatBtn"
      className="sfx-floating-btn"
      title="Toggle 8-Bit Chiptune Sound"
      onClick={() => {
        toggleSound();
        playClick();
      }}
    >
      {soundEnabled ? "[ 🔊 SFX: ON ]" : "[ 🔇 SFX: OFF ]"}
    </button>
  );
}

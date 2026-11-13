"use client";

import { useState, useEffect, useCallback } from "react";

// Singleton AudioContext, master compressor & in-memory AudioBuffer cache
let sharedAudioCtx: AudioContext | null = null;
let masterCompressor: DynamicsCompressorNode | null = null;
const audioBuffers: Record<string, AudioBuffer | null> = {};
const audioLoading: Record<string, boolean> = {};

// Timestamp trackers to prevent overlapping / clashing sounds
let lastClickTimestamp = 0;
let lastStepTimestamp = 0;
let fanfareEndTimestamp = 0;

function getSharedContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!sharedAudioCtx) {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioCtx) {
      sharedAudioCtx = new AudioCtx();
      try {
        masterCompressor = sharedAudioCtx.createDynamicsCompressor();
        masterCompressor.threshold.setValueAtTime(-14, sharedAudioCtx.currentTime);
        masterCompressor.knee.setValueAtTime(8, sharedAudioCtx.currentTime);
        masterCompressor.ratio.setValueAtTime(4, sharedAudioCtx.currentTime);
        masterCompressor.attack.setValueAtTime(0.003, sharedAudioCtx.currentTime);
        masterCompressor.release.setValueAtTime(0.12, sharedAudioCtx.currentTime);
        masterCompressor.connect(sharedAudioCtx.destination);
      } catch {
        masterCompressor = null;
      }
    }
  }
  return sharedAudioCtx;
}

function preloadSound(url: string) {
  if (typeof window === "undefined") return;
  if (audioBuffers[url] || audioLoading[url]) return;
  audioLoading[url] = true;

  fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.arrayBuffer();
    })
    .then((arrayBuffer) => {
      const ctx = getSharedContext();
      if (!ctx) return;
      return ctx.decodeAudioData(arrayBuffer);
    })
    .then((decoded) => {
      if (decoded) audioBuffers[url] = decoded;
    })
    .catch(() => {
      // Audio preloading fallback handled gracefully
    })
    .finally(() => {
      audioLoading[url] = false;
    });
}

function playSoundFile(url: string, volume = 0.4) {
  if (typeof window === "undefined") return;
  const ctx = getSharedContext();
  if (ctx) {
    if (ctx.state === "suspended") {
      ctx.resume().catch(() => {});
    }

    const buffer = audioBuffers[url];
    if (buffer) {
      try {
        const source = ctx.createBufferSource();
        const gainNode = ctx.createGain();
        source.buffer = buffer;
        gainNode.gain.setValueAtTime(volume, ctx.currentTime);
        source.connect(gainNode);

        if (masterCompressor) {
          gainNode.connect(masterCompressor);
        } else {
          gainNode.connect(ctx.destination);
        }

        source.start(0);
        return;
      } catch {}
    }
  }

  // Fallback to HTMLAudioElement
  try {
    const audio = new Audio(url);
    audio.volume = Math.min(1, Math.max(0, volume));
    audio.play().catch(() => {});
  } catch {}
}

const SOUND_FILES = {
  jump: "/audio/jump.mp3",
  landing: "/audio/landing.mp3",
  pickup: "/audio/pickup.mp3",
  click: "/audio/click.mp3",
  hit: "/audio/hit.mp3",
  step: "/audio/step.mp3",
};

export function useSound() {
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("porsematik_sfx");
      if (saved !== null) {
        setSoundEnabled(saved === "true");
      }
    } catch {}

    // Preload sound files on first render
    Object.values(SOUND_FILES).forEach((url) => preloadSound(url));

    // Unlock AudioContext on first user interaction
    const unlockAudio = () => {
      const ctx = getSharedContext();
      if (ctx && ctx.state === "suspended") {
        ctx.resume().catch(() => {});
      }
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
    };
    window.addEventListener("pointerdown", unlockAudio, { passive: true });
    window.addEventListener("keydown", unlockAudio, { passive: true });

    return () => {
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
    };
  }, []);

  const toggleSound = useCallback(() => {
    setSoundEnabled((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("porsematik_sfx", String(next));
      } catch {}
      return next;
    });
  }, []);

  // 1. Play Pickup Sound (YouTube 8-Bit Retro Sounds -> Pickups)
  const playPickup = useCallback(() => {
    if (!soundEnabled) return;
    playSoundFile(SOUND_FILES.pickup, 0.38);
  }, [soundEnabled]);

  // 2. Play Click / Button Sound (Debounced & suppressed during fanfare)
  const playClick = useCallback(() => {
    if (!soundEnabled) return;
    const now = performance.now();
    // Do not clash with welcome fanfare or duplicate rapid click calls
    if (now < fanfareEndTimestamp || now - lastClickTimestamp < 75) return;
    lastClickTimestamp = now;
    playSoundFile(SOUND_FILES.pickup, 0.35);
  }, [soundEnabled]);

  // 3. Play Soft Jump Sound (Gentle, bouncy 8-bit jump)
  const playJump = useCallback(() => {
    if (!soundEnabled) return;
    playSoundFile(SOUND_FILES.jump, 0.25);
  }, [soundEnabled]);

  // 4. Play Soft Landing Sound (Gentle 8-bit landing tap)
  const playLanding = useCallback(() => {
    if (!soundEnabled) return;
    playSoundFile(SOUND_FILES.landing, 0.18);
  }, [soundEnabled]);

  // 5. Play Walking / Footstep Sound (Hiker walking along roadmap, throttled)
  const playStep = useCallback(() => {
    if (!soundEnabled) return;
    const now = performance.now();
    if (now < fanfareEndTimestamp || now - lastStepTimestamp < 220) return;
    lastStepTimestamp = now;
    playSoundFile(SOUND_FILES.step, 0.18);
  }, [soundEnabled]);

  // 6. Play Hit / Impact Sound (YouTube 8-Bit Retro Sounds -> Impacts)
  const playHit = useCallback(() => {
    if (!soundEnabled) return;
    playSoundFile(SOUND_FILES.hit, 0.4);
  }, [soundEnabled]);

  // 7. Play Coin Sound (Retro High Pickup)
  const playCoin = useCallback(() => {
    if (!soundEnabled) return;
    playSoundFile(SOUND_FILES.pickup, 0.38);
  }, [soundEnabled]);

  // 8. Play Game Start / Welcome Fanfare (On site entrance / refresh)
  const playStartFanfare = useCallback(() => {
    if (!soundEnabled) return;
    const ctx = getSharedContext();
    if (!ctx) return;
    if (ctx.state === "suspended") ctx.resume().catch(() => {});

    fanfareEndTimestamp = performance.now() + 480;

    try {
      const notes = [
        { f: 523.25, t: 0.0, d: 0.07 }, // C5
        { f: 659.25, t: 0.07, d: 0.07 }, // E5
        { f: 783.99, t: 0.14, d: 0.07 }, // G5
        { f: 1046.5, t: 0.21, d: 0.2 },  // C6
      ];

      notes.forEach(({ f, t, d }) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "square";
        osc.frequency.setValueAtTime(f, ctx.currentTime + t);

        gain.gain.setValueAtTime(0.08, ctx.currentTime + t);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + t + d);

        osc.connect(gain);
        if (masterCompressor) {
          gain.connect(masterCompressor);
        } else {
          gain.connect(ctx.destination);
        }

        osc.start(ctx.currentTime + t);
        osc.stop(ctx.currentTime + t + d);
      });
    } catch {}
  }, [soundEnabled]);

  return {
    soundEnabled,
    toggleSound,
    playPickup,
    playClick,
    playJump,
    playLanding,
    playStep,
    playHit,
    playCoin,
    playStartFanfare,
  };
}

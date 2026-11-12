"use client";

import React from "react";
import Link from "next/link";
import { useCountdown } from "@/hooks/useCountdown";
import { useSound } from "@/hooks/useSound";

const pad = (n: number) => String(n).padStart(2, "0");

export default function Hero() {
  const { days, hours, minutes, seconds } = useCountdown("2026-11-16T17:50:00+07:00");
  const { playStartFanfare } = useSound();

  return (
<section className="hero" id="hero">
  {/*  8-BIT RETRO PIXEL SUN (FLOATING HIGH IN SKY - NOT FROM MOUNTAIN)  */}
  <div className="pixel-sky-sun" aria-label="8-Bit Retro Sun">
    <svg viewBox="0 0 64 64" className="pixel-sun-svg" shapeRendering="crispEdges">
      {/*  Radiating Outer Warm Rays  */}
      <rect x="26" y="0" width="12" height="4" fill="#FBBF24"/>
      <rect x="26" y="60" width="12" height="4" fill="#FBBF24"/>
      <rect x="0" y="26" width="4" height="12" fill="#FBBF24"/>
      <rect x="60" y="26" width="4" height="12" fill="#FBBF24"/>
      {/*  Diagonal Rays  */}
      <rect x="8" y="8" width="6" height="6" fill="#FDE047"/>
      <rect x="50" y="8" width="6" height="6" fill="#FDE047"/>
      <rect x="8" y="50" width="6" height="6" fill="#FDE047"/>
      <rect x="50" y="50" width="6" height="6" fill="#FDE047"/>
      {/*  Sun Core Pixel Octagon  */}
      <rect x="18" y="10" width="28" height="44" fill="#F59E0B"/>
      <rect x="10" y="18" width="44" height="28" fill="#F59E0B"/>
      {/*  Golden Glow Core  */}
      <rect x="18" y="14" width="28" height="36" fill="#FDE047"/>
      <rect x="14" y="18" width="36" height="28" fill="#FDE047"/>
      {/*  Warm Highlights  */}
      <rect x="22" y="18" width="20" height="20" fill="#FEF08A"/>
      <rect x="26" y="22" width="12" height="12" fill="#FFFBEB"/>
    </svg>
  </div>
  {/*  8-Bit Pixel Clouds  */}
  <svg className="pixel-cloud pixel-cloud--1" viewBox="0 0 72 32">
    <path d="M16,24 h48 v8 h-48 Z M8,16 h56 v8 h-56 Z M16,8 h40 v8 h-40 Z M24,0 h24 v8 h-24 Z" fill="#FFFFFF"/>
    <path d="M16,28 h48 v4 h-48 Z" fill="#E2E8F0"/>
  </svg>
  <svg className="pixel-cloud pixel-cloud--2" viewBox="0 0 72 32">
    <path d="M16,24 h48 v8 h-48 Z M8,16 h56 v8 h-56 Z M16,8 h40 v8 h-40 Z M24,0 h24 v8 h-24 Z" fill="#FFFFFF"/>
    <path d="M16,28 h48 v4 h-48 Z" fill="#E2E8F0"/>
  </svg>
  <svg className="pixel-cloud pixel-cloud--3" viewBox="0 0 72 32">
    <path d="M16,24 h48 v8 h-48 Z M8,16 h56 v8 h-56 Z M16,8 h40 v8 h-40 Z M24,0 h24 v8 h-24 Z" fill="#FFFFFF"/>
    <path d="M16,28 h48 v4 h-48 Z" fill="#E2E8F0"/>
  </svg>
  <svg className="pixel-cloud pixel-cloud--4" viewBox="0 0 72 32">
    <path d="M16,24 h48 v8 h-48 Z M8,16 h56 v8 h-56 Z M16,8 h40 v8 h-40 Z M24,0 h24 v8 h-24 Z" fill="#FFFFFF"/>
    <path d="M16,28 h48 v4 h-48 Z" fill="#E2E8F0"/>
  </svg>

  {/*  Craggy Alpine Mountain with Rising Sun & Neat 8-Bit Pixel Pine Forest  */}
  <div className="mountains-wrap">
<svg className="mountain-svg" viewBox="0 0 1440 280" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    {/*  Gradasi Cokelat Keemasan ke Hijau Lumut Alami  */}
    <linearGradient id="mtnSunlitGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#FDE68A"/>
      <stop offset="20%" stopColor="#F59E0B"/>
      <stop offset="50%" stopColor="#B45309"/>
      <stop offset="78%" stopColor="#65A30D"/>
      <stop offset="100%" stopColor="#15803D"/>
    </linearGradient>

    <linearGradient id="mtnShadowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#6B394E"/>
      <stop offset="30%" stopColor="#4A2235"/>
      <stop offset="65%" stopColor="#365314"/>
      <stop offset="85%" stopColor="#14532D"/>
      <stop offset="100%" stopColor="#052E16"/>
    </linearGradient>

    <linearGradient id="distantSlope" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#C7D2FE"/>
      <stop offset="50%" stopColor="#93C5FD"/>
      <stop offset="100%" stopColor="#60A5FA"/>
    </linearGradient>
  </defs>

  {/*  Sun placed high in hero sky  */}

  {/*  ================= 1. DISTANT PURPLE-BLUE ALPINE PEAKS =================  */}
  <polygon points="0,280 0,160 80,130 160,170 260,110 360,180 460,120 560,200 560,280" fill="url(#distantSlope)" opacity="0.6"/>
  <polygon points="260,110 240,130 280,130" fill="#EEF2FF" opacity="0.85"/>
  <polygon points="460,120 445,135 475,135" fill="#EEF2FF" opacity="0.85"/>

  <polygon points="880,280 880,190 980,120 1080,170 1180,100 1280,150 1360,120 1440,160 1440,280" fill="url(#distantSlope)" opacity="0.6"/>
  <polygon points="980,120 965,135 995,135" fill="#EEF2FF" opacity="0.85"/>
  <polygon points="1180,100 1160,120 1200,120" fill="#EEF2FF" opacity="0.85"/>

  {/*  ================= 2. MIDGROUND FLANKING PEAKS =================  */}
  <polygon points="40,280 40,190 160,100 220,150 280,220 280,280" fill="url(#mtnSunlitGrad)"/>
  <polygon points="160,100 220,150 280,220 280,280 160,280" fill="url(#mtnShadowGrad)"/>
  <polygon points="160,100 140,125 155,120 160,130 175,120 185,125 160,100" fill="#FFFBEB"/>

  <polygon points="1160,280 1160,210 1240,130 1320,170 1400,220 1440,230 1440,280" fill="url(#mtnSunlitGrad)"/>
  <polygon points="1240,130 1320,170 1400,220 1440,230 1440,280 1240,280" fill="url(#mtnShadowGrad)"/>
  <polygon points="1240,130 1225,150 1238,148 1245,155 1258,148 1270,152 1240,130" fill="#FFFBEB"/>

  {/*  ================= 3. CENTERPIECE SUMMIT (CRAGGY FACETS, BROWN-TO-GREEN) =================  */}
  <polygon points="260,280 340,230 420,200 480,160 540,130 600,90 660,65 710,50 720,45 720,280" fill="url(#mtnSunlitGrad)"/>
  <polygon points="540,130 600,90 630,120 570,160" fill="#FBBF24" opacity="0.35"/>
  <polygon points="420,200 480,160 510,190 450,225" fill="#A3E635" opacity="0.25"/>
  <polygon points="340,230 420,200 435,225 360,255" fill="#4D7C0F" opacity="0.3"/>

  <polygon points="720,45 730,50 780,90 840,130 900,160 960,190 1020,220 1100,250 1180,280 720,280" fill="url(#mtnShadowGrad)"/>
  <polygon points="730,50 780,90 760,110 720,70" fill="#200B17" opacity="0.45"/>
  <polygon points="840,130 900,160 870,180 820,140" fill="#200B17" opacity="0.4"/>

  {/*  Golden Summit Snowcap  */}
  <polygon points="720,45 695,65 708,60 715,75 725,60 735,72 748,58 720,45" fill="#FFFBEB"/>
  <polygon points="720,45 710,55 720,50 730,55 720,45" fill="#FFFFFF"/>

    {/*  LIVELY 8-BIT PLATFORMER SUMMIT HERO & FLAMING TORCH (X: 720, Y: 45)  */}
  <g className="summit-climber-group" shapeRendering="crispEdges">
    {/*  Glowing Flame Aura / Halo  */}
    <circle cx="738" cy="14" r="16" fill="#FF9800" opacity="0.4" className="torch-halo"/>
    <circle cx="738" cy="14" r="8" fill="#FDE047" opacity="0.5" className="torch-core"/>

    {/*  SUMMIT TORCH (Right Hand Raised High)  */}
    <rect x="736" y="20" width="4" height="24" fill="#58240C"/>
    <rect x="737" y="22" width="2" height="20" fill="#8B4513"/>
    <rect x="733" y="16" width="10" height="5" fill="#D97706"/>
    <rect x="734" y="17" width="8" height="3" fill="#F59E0B"/>
    {/*  Multi-tier Animated 8-bit Flame  */}
    <g className="pixel-torch-flame">
      <rect x="734" y="6" width="8" height="10" fill="#DC2626"/>
      <rect x="735" y="3" width="6" height="6" fill="#EA580C"/>
      <rect x="735" y="7" width="6" height="7" fill="#F59E0B"/>
      <rect x="736" y="4" width="4" height="6" fill="#FDE047"/>
      <rect x="737" y="2" width="2" height="4" fill="#FFFFFF"/>
    </g>

    {/*  CLIMBER HERO BODY (Vivid Platformer Adventurer)  */}
    {/*  Red Explorer Cap & Visor  */}
    <rect x="712" y="16" width="12" height="5" fill="#DC2626"/>
    <rect x="710" y="19" width="16" height="3" fill="#B91C1C"/>
    <rect x="724" y="19" width="4" height="2" fill="#7F1D1D"/> {/*  Visor  */}
    {/*  Face / Head & Eye  */}
    <rect x="714" y="21" width="10" height="7" fill="#FCD34D"/>
    <rect x="721" y="23" width="2" height="2" fill="#1E293B"/> {/*  Eye looking forward  */}
    <rect x="712" y="22" width="3" height="4" fill="#78350F"/> {/*  Hair  */}
    {/*  Blue Explorer Jacket & Yellow Scarf  */}
    <rect x="713" y="28" width="11" height="3" fill="#FBBF24"/> {/*  Scarf / Collar  */}
    <rect x="711" y="31" width="14" height="9" fill="#1D4ED8"/> {/*  Jacket Body  */}
    <rect x="713" y="33" width="10" height="5" fill="#2563EB"/>
    {/*  Explorer Backpack (Brown)  */}
    <rect x="707" y="29" width="5" height="9" fill="#78350F"/>
    <rect x="708" y="30" width="3" height="7" fill="#92400E"/>
    {/*  Right Arm Raised with Torch  */}
    <rect x="722" y="29" width="15" height="4" fill="#1D4ED8"/>
    <rect x="734" y="25" width="4" height="6" fill="#FCD34D"/> {/*  Hand holding torch  */}
    {/*  Left Arm on Hip / Mountain Staff  */}
    <rect x="710" y="32" width="4" height="6" fill="#1D4ED8"/>
    <rect x="709" y="37" width="3" height="3" fill="#FCD34D"/>
    {/*  Brown Adventure Belt with Gold Buckle  */}
    <rect x="712" y="40" width="12" height="3" fill="#451A03"/>
    <rect x="717" y="40" width="3" height="3" fill="#F59E0B"/>
    {/*  Rugged Hiking Trousers & Boots firmly on summit ledge  */}
    <rect x="713" y="43" width="4" height="4" fill="#334155"/>
    <rect x="719" y="43" width="4" height="4" fill="#334155"/>
    <rect x="711" y="46" width="6" height="3" fill="#78350F"/> {/*  Left Boot  */}
    <rect x="719" y="46" width="6" height="3" fill="#78350F"/> {/*  Right Boot  */}
  </g>

  {/*  ================= 4. NEAT ROW OF 8-BIT PIXEL PINE TREES AT FOOT OF MOUNTAIN =================  */}
<g transform="translate(30, 212)">
      <rect x="7" y="28" width="4" height="8" fill="#5A2E0F"/>
      {/*  Tier 3  */}
      <polygon points="1,28 9,18 17,28" fill="#14532D"/>
      <polygon points="3,28 9,20 15,28" fill="#15803D"/>
      {/*  Tier 2  */}
      <polygon points="3,20 9,11 15,20" fill="#15803D"/>
      <polygon points="5,20 9,13 13,20" fill="#22C55E"/>
      {/*  Tier 1  */}
      <polygon points="5,12 9,4 13,12" fill="#22C55E"/>
      <polygon points="7,12 9,6 11,12" fill="#4ADE80"/>
    </g>
<g transform="translate(62, 212)">
      <rect x="7" y="28" width="4" height="8" fill="#5A2E0F"/>
      {/*  Tier 3  */}
      <polygon points="1,28 9,18 17,28" fill="#14532D"/>
      <polygon points="3,28 9,20 15,28" fill="#15803D"/>
      {/*  Tier 2  */}
      <polygon points="3,20 9,11 15,20" fill="#15803D"/>
      <polygon points="5,20 9,13 13,20" fill="#22C55E"/>
      {/*  Tier 1  */}
      <polygon points="5,12 9,4 13,12" fill="#22C55E"/>
      <polygon points="7,12 9,6 11,12" fill="#4ADE80"/>
    </g>
<g transform="translate(94, 212)">
      <rect x="7" y="28" width="4" height="8" fill="#5A2E0F"/>
      {/*  Tier 3  */}
      <polygon points="1,28 9,18 17,28" fill="#14532D"/>
      <polygon points="3,28 9,20 15,28" fill="#15803D"/>
      {/*  Tier 2  */}
      <polygon points="3,20 9,11 15,20" fill="#15803D"/>
      <polygon points="5,20 9,13 13,20" fill="#22C55E"/>
      {/*  Tier 1  */}
      <polygon points="5,12 9,4 13,12" fill="#22C55E"/>
      <polygon points="7,12 9,6 11,12" fill="#4ADE80"/>
    </g>
<g transform="translate(126, 212)">
      <rect x="7" y="28" width="4" height="8" fill="#5A2E0F"/>
      {/*  Tier 3  */}
      <polygon points="1,28 9,18 17,28" fill="#14532D"/>
      <polygon points="3,28 9,20 15,28" fill="#15803D"/>
      {/*  Tier 2  */}
      <polygon points="3,20 9,11 15,20" fill="#15803D"/>
      <polygon points="5,20 9,13 13,20" fill="#22C55E"/>
      {/*  Tier 1  */}
      <polygon points="5,12 9,4 13,12" fill="#22C55E"/>
      <polygon points="7,12 9,6 11,12" fill="#4ADE80"/>
    </g>
<g transform="translate(158, 212)">
      <rect x="7" y="28" width="4" height="8" fill="#5A2E0F"/>
      {/*  Tier 3  */}
      <polygon points="1,28 9,18 17,28" fill="#14532D"/>
      <polygon points="3,28 9,20 15,28" fill="#15803D"/>
      {/*  Tier 2  */}
      <polygon points="3,20 9,11 15,20" fill="#15803D"/>
      <polygon points="5,20 9,13 13,20" fill="#22C55E"/>
      {/*  Tier 1  */}
      <polygon points="5,12 9,4 13,12" fill="#22C55E"/>
      <polygon points="7,12 9,6 11,12" fill="#4ADE80"/>
    </g>
<g transform="translate(190, 212)">
      <rect x="7" y="28" width="4" height="8" fill="#5A2E0F"/>
      {/*  Tier 3  */}
      <polygon points="1,28 9,18 17,28" fill="#14532D"/>
      <polygon points="3,28 9,20 15,28" fill="#15803D"/>
      {/*  Tier 2  */}
      <polygon points="3,20 9,11 15,20" fill="#15803D"/>
      <polygon points="5,20 9,13 13,20" fill="#22C55E"/>
      {/*  Tier 1  */}
      <polygon points="5,12 9,4 13,12" fill="#22C55E"/>
      <polygon points="7,12 9,6 11,12" fill="#4ADE80"/>
    </g>
<g transform="translate(222, 212)">
      <rect x="7" y="28" width="4" height="8" fill="#5A2E0F"/>
      {/*  Tier 3  */}
      <polygon points="1,28 9,18 17,28" fill="#14532D"/>
      <polygon points="3,28 9,20 15,28" fill="#15803D"/>
      {/*  Tier 2  */}
      <polygon points="3,20 9,11 15,20" fill="#15803D"/>
      <polygon points="5,20 9,13 13,20" fill="#22C55E"/>
      {/*  Tier 1  */}
      <polygon points="5,12 9,4 13,12" fill="#22C55E"/>
      <polygon points="7,12 9,6 11,12" fill="#4ADE80"/>
    </g>
<g transform="translate(254, 212)">
      <rect x="7" y="28" width="4" height="8" fill="#5A2E0F"/>
      {/*  Tier 3  */}
      <polygon points="1,28 9,18 17,28" fill="#14532D"/>
      <polygon points="3,28 9,20 15,28" fill="#15803D"/>
      {/*  Tier 2  */}
      <polygon points="3,20 9,11 15,20" fill="#15803D"/>
      <polygon points="5,20 9,13 13,20" fill="#22C55E"/>
      {/*  Tier 1  */}
      <polygon points="5,12 9,4 13,12" fill="#22C55E"/>
      <polygon points="7,12 9,6 11,12" fill="#4ADE80"/>
    </g>
<g transform="translate(286, 212)">
      <rect x="7" y="28" width="4" height="8" fill="#5A2E0F"/>
      {/*  Tier 3  */}
      <polygon points="1,28 9,18 17,28" fill="#14532D"/>
      <polygon points="3,28 9,20 15,28" fill="#15803D"/>
      {/*  Tier 2  */}
      <polygon points="3,20 9,11 15,20" fill="#15803D"/>
      <polygon points="5,20 9,13 13,20" fill="#22C55E"/>
      {/*  Tier 1  */}
      <polygon points="5,12 9,4 13,12" fill="#22C55E"/>
      <polygon points="7,12 9,6 11,12" fill="#4ADE80"/>
    </g>
<g transform="translate(318, 212)">
      <rect x="7" y="28" width="4" height="8" fill="#5A2E0F"/>
      {/*  Tier 3  */}
      <polygon points="1,28 9,18 17,28" fill="#14532D"/>
      <polygon points="3,28 9,20 15,28" fill="#15803D"/>
      {/*  Tier 2  */}
      <polygon points="3,20 9,11 15,20" fill="#15803D"/>
      <polygon points="5,20 9,13 13,20" fill="#22C55E"/>
      {/*  Tier 1  */}
      <polygon points="5,12 9,4 13,12" fill="#22C55E"/>
      <polygon points="7,12 9,6 11,12" fill="#4ADE80"/>
    </g>
<g transform="translate(350, 212)">
      <rect x="7" y="28" width="4" height="8" fill="#5A2E0F"/>
      {/*  Tier 3  */}
      <polygon points="1,28 9,18 17,28" fill="#14532D"/>
      <polygon points="3,28 9,20 15,28" fill="#15803D"/>
      {/*  Tier 2  */}
      <polygon points="3,20 9,11 15,20" fill="#15803D"/>
      <polygon points="5,20 9,13 13,20" fill="#22C55E"/>
      {/*  Tier 1  */}
      <polygon points="5,12 9,4 13,12" fill="#22C55E"/>
      <polygon points="7,12 9,6 11,12" fill="#4ADE80"/>
    </g>
<g transform="translate(382, 212)">
      <rect x="7" y="28" width="4" height="8" fill="#5A2E0F"/>
      {/*  Tier 3  */}
      <polygon points="1,28 9,18 17,28" fill="#14532D"/>
      <polygon points="3,28 9,20 15,28" fill="#15803D"/>
      {/*  Tier 2  */}
      <polygon points="3,20 9,11 15,20" fill="#15803D"/>
      <polygon points="5,20 9,13 13,20" fill="#22C55E"/>
      {/*  Tier 1  */}
      <polygon points="5,12 9,4 13,12" fill="#22C55E"/>
      <polygon points="7,12 9,6 11,12" fill="#4ADE80"/>
    </g>
<g transform="translate(414, 212)">
      <rect x="7" y="28" width="4" height="8" fill="#5A2E0F"/>
      {/*  Tier 3  */}
      <polygon points="1,28 9,18 17,28" fill="#14532D"/>
      <polygon points="3,28 9,20 15,28" fill="#15803D"/>
      {/*  Tier 2  */}
      <polygon points="3,20 9,11 15,20" fill="#15803D"/>
      <polygon points="5,20 9,13 13,20" fill="#22C55E"/>
      {/*  Tier 1  */}
      <polygon points="5,12 9,4 13,12" fill="#22C55E"/>
      <polygon points="7,12 9,6 11,12" fill="#4ADE80"/>
    </g>
<g transform="translate(446, 212)">
      <rect x="7" y="28" width="4" height="8" fill="#5A2E0F"/>
      {/*  Tier 3  */}
      <polygon points="1,28 9,18 17,28" fill="#14532D"/>
      <polygon points="3,28 9,20 15,28" fill="#15803D"/>
      {/*  Tier 2  */}
      <polygon points="3,20 9,11 15,20" fill="#15803D"/>
      <polygon points="5,20 9,13 13,20" fill="#22C55E"/>
      {/*  Tier 1  */}
      <polygon points="5,12 9,4 13,12" fill="#22C55E"/>
      <polygon points="7,12 9,6 11,12" fill="#4ADE80"/>
    </g>
<g transform="translate(478, 212)">
      <rect x="7" y="28" width="4" height="8" fill="#5A2E0F"/>
      {/*  Tier 3  */}
      <polygon points="1,28 9,18 17,28" fill="#14532D"/>
      <polygon points="3,28 9,20 15,28" fill="#15803D"/>
      {/*  Tier 2  */}
      <polygon points="3,20 9,11 15,20" fill="#15803D"/>
      <polygon points="5,20 9,13 13,20" fill="#22C55E"/>
      {/*  Tier 1  */}
      <polygon points="5,12 9,4 13,12" fill="#22C55E"/>
      <polygon points="7,12 9,6 11,12" fill="#4ADE80"/>
    </g>
<g transform="translate(510, 212)">
      <rect x="7" y="28" width="4" height="8" fill="#5A2E0F"/>
      {/*  Tier 3  */}
      <polygon points="1,28 9,18 17,28" fill="#14532D"/>
      <polygon points="3,28 9,20 15,28" fill="#15803D"/>
      {/*  Tier 2  */}
      <polygon points="3,20 9,11 15,20" fill="#15803D"/>
      <polygon points="5,20 9,13 13,20" fill="#22C55E"/>
      {/*  Tier 1  */}
      <polygon points="5,12 9,4 13,12" fill="#22C55E"/>
      <polygon points="7,12 9,6 11,12" fill="#4ADE80"/>
    </g>
<g transform="translate(542, 212)">
      <rect x="7" y="28" width="4" height="8" fill="#5A2E0F"/>
      {/*  Tier 3  */}
      <polygon points="1,28 9,18 17,28" fill="#14532D"/>
      <polygon points="3,28 9,20 15,28" fill="#15803D"/>
      {/*  Tier 2  */}
      <polygon points="3,20 9,11 15,20" fill="#15803D"/>
      <polygon points="5,20 9,13 13,20" fill="#22C55E"/>
      {/*  Tier 1  */}
      <polygon points="5,12 9,4 13,12" fill="#22C55E"/>
      <polygon points="7,12 9,6 11,12" fill="#4ADE80"/>
    </g>
<g transform="translate(574, 212)">
      <rect x="7" y="28" width="4" height="8" fill="#5A2E0F"/>
      {/*  Tier 3  */}
      <polygon points="1,28 9,18 17,28" fill="#14532D"/>
      <polygon points="3,28 9,20 15,28" fill="#15803D"/>
      {/*  Tier 2  */}
      <polygon points="3,20 9,11 15,20" fill="#15803D"/>
      <polygon points="5,20 9,13 13,20" fill="#22C55E"/>
      {/*  Tier 1  */}
      <polygon points="5,12 9,4 13,12" fill="#22C55E"/>
      <polygon points="7,12 9,6 11,12" fill="#4ADE80"/>
    </g>
<g transform="translate(840, 212)">
      <rect x="7" y="28" width="4" height="8" fill="#5A2E0F"/>
      {/*  Tier 3  */}
      <polygon points="1,28 9,18 17,28" fill="#14532D"/>
      <polygon points="3,28 9,20 15,28" fill="#15803D"/>
      {/*  Tier 2  */}
      <polygon points="3,20 9,11 15,20" fill="#15803D"/>
      <polygon points="5,20 9,13 13,20" fill="#22C55E"/>
      {/*  Tier 1  */}
      <polygon points="5,12 9,4 13,12" fill="#22C55E"/>
      <polygon points="7,12 9,6 11,12" fill="#4ADE80"/>
    </g>
<g transform="translate(872, 212)">
      <rect x="7" y="28" width="4" height="8" fill="#5A2E0F"/>
      {/*  Tier 3  */}
      <polygon points="1,28 9,18 17,28" fill="#14532D"/>
      <polygon points="3,28 9,20 15,28" fill="#15803D"/>
      {/*  Tier 2  */}
      <polygon points="3,20 9,11 15,20" fill="#15803D"/>
      <polygon points="5,20 9,13 13,20" fill="#22C55E"/>
      {/*  Tier 1  */}
      <polygon points="5,12 9,4 13,12" fill="#22C55E"/>
      <polygon points="7,12 9,6 11,12" fill="#4ADE80"/>
    </g>
<g transform="translate(904, 212)">
      <rect x="7" y="28" width="4" height="8" fill="#5A2E0F"/>
      {/*  Tier 3  */}
      <polygon points="1,28 9,18 17,28" fill="#14532D"/>
      <polygon points="3,28 9,20 15,28" fill="#15803D"/>
      {/*  Tier 2  */}
      <polygon points="3,20 9,11 15,20" fill="#15803D"/>
      <polygon points="5,20 9,13 13,20" fill="#22C55E"/>
      {/*  Tier 1  */}
      <polygon points="5,12 9,4 13,12" fill="#22C55E"/>
      <polygon points="7,12 9,6 11,12" fill="#4ADE80"/>
    </g>
<g transform="translate(936, 212)">
      <rect x="7" y="28" width="4" height="8" fill="#5A2E0F"/>
      {/*  Tier 3  */}
      <polygon points="1,28 9,18 17,28" fill="#14532D"/>
      <polygon points="3,28 9,20 15,28" fill="#15803D"/>
      {/*  Tier 2  */}
      <polygon points="3,20 9,11 15,20" fill="#15803D"/>
      <polygon points="5,20 9,13 13,20" fill="#22C55E"/>
      {/*  Tier 1  */}
      <polygon points="5,12 9,4 13,12" fill="#22C55E"/>
      <polygon points="7,12 9,6 11,12" fill="#4ADE80"/>
    </g>
<g transform="translate(968, 212)">
      <rect x="7" y="28" width="4" height="8" fill="#5A2E0F"/>
      {/*  Tier 3  */}
      <polygon points="1,28 9,18 17,28" fill="#14532D"/>
      <polygon points="3,28 9,20 15,28" fill="#15803D"/>
      {/*  Tier 2  */}
      <polygon points="3,20 9,11 15,20" fill="#15803D"/>
      <polygon points="5,20 9,13 13,20" fill="#22C55E"/>
      {/*  Tier 1  */}
      <polygon points="5,12 9,4 13,12" fill="#22C55E"/>
      <polygon points="7,12 9,6 11,12" fill="#4ADE80"/>
    </g>
<g transform="translate(1000, 212)">
      <rect x="7" y="28" width="4" height="8" fill="#5A2E0F"/>
      {/*  Tier 3  */}
      <polygon points="1,28 9,18 17,28" fill="#14532D"/>
      <polygon points="3,28 9,20 15,28" fill="#15803D"/>
      {/*  Tier 2  */}
      <polygon points="3,20 9,11 15,20" fill="#15803D"/>
      <polygon points="5,20 9,13 13,20" fill="#22C55E"/>
      {/*  Tier 1  */}
      <polygon points="5,12 9,4 13,12" fill="#22C55E"/>
      <polygon points="7,12 9,6 11,12" fill="#4ADE80"/>
    </g>
<g transform="translate(1032, 212)">
      <rect x="7" y="28" width="4" height="8" fill="#5A2E0F"/>
      {/*  Tier 3  */}
      <polygon points="1,28 9,18 17,28" fill="#14532D"/>
      <polygon points="3,28 9,20 15,28" fill="#15803D"/>
      {/*  Tier 2  */}
      <polygon points="3,20 9,11 15,20" fill="#15803D"/>
      <polygon points="5,20 9,13 13,20" fill="#22C55E"/>
      {/*  Tier 1  */}
      <polygon points="5,12 9,4 13,12" fill="#22C55E"/>
      <polygon points="7,12 9,6 11,12" fill="#4ADE80"/>
    </g>
<g transform="translate(1064, 212)">
      <rect x="7" y="28" width="4" height="8" fill="#5A2E0F"/>
      {/*  Tier 3  */}
      <polygon points="1,28 9,18 17,28" fill="#14532D"/>
      <polygon points="3,28 9,20 15,28" fill="#15803D"/>
      {/*  Tier 2  */}
      <polygon points="3,20 9,11 15,20" fill="#15803D"/>
      <polygon points="5,20 9,13 13,20" fill="#22C55E"/>
      {/*  Tier 1  */}
      <polygon points="5,12 9,4 13,12" fill="#22C55E"/>
      <polygon points="7,12 9,6 11,12" fill="#4ADE80"/>
    </g>
<g transform="translate(1096, 212)">
      <rect x="7" y="28" width="4" height="8" fill="#5A2E0F"/>
      {/*  Tier 3  */}
      <polygon points="1,28 9,18 17,28" fill="#14532D"/>
      <polygon points="3,28 9,20 15,28" fill="#15803D"/>
      {/*  Tier 2  */}
      <polygon points="3,20 9,11 15,20" fill="#15803D"/>
      <polygon points="5,20 9,13 13,20" fill="#22C55E"/>
      {/*  Tier 1  */}
      <polygon points="5,12 9,4 13,12" fill="#22C55E"/>
      <polygon points="7,12 9,6 11,12" fill="#4ADE80"/>
    </g>
<g transform="translate(1128, 212)">
      <rect x="7" y="28" width="4" height="8" fill="#5A2E0F"/>
      {/*  Tier 3  */}
      <polygon points="1,28 9,18 17,28" fill="#14532D"/>
      <polygon points="3,28 9,20 15,28" fill="#15803D"/>
      {/*  Tier 2  */}
      <polygon points="3,20 9,11 15,20" fill="#15803D"/>
      <polygon points="5,20 9,13 13,20" fill="#22C55E"/>
      {/*  Tier 1  */}
      <polygon points="5,12 9,4 13,12" fill="#22C55E"/>
      <polygon points="7,12 9,6 11,12" fill="#4ADE80"/>
    </g>
<g transform="translate(1160, 212)">
      <rect x="7" y="28" width="4" height="8" fill="#5A2E0F"/>
      {/*  Tier 3  */}
      <polygon points="1,28 9,18 17,28" fill="#14532D"/>
      <polygon points="3,28 9,20 15,28" fill="#15803D"/>
      {/*  Tier 2  */}
      <polygon points="3,20 9,11 15,20" fill="#15803D"/>
      <polygon points="5,20 9,13 13,20" fill="#22C55E"/>
      {/*  Tier 1  */}
      <polygon points="5,12 9,4 13,12" fill="#22C55E"/>
      <polygon points="7,12 9,6 11,12" fill="#4ADE80"/>
    </g>
<g transform="translate(1192, 212)">
      <rect x="7" y="28" width="4" height="8" fill="#5A2E0F"/>
      {/*  Tier 3  */}
      <polygon points="1,28 9,18 17,28" fill="#14532D"/>
      <polygon points="3,28 9,20 15,28" fill="#15803D"/>
      {/*  Tier 2  */}
      <polygon points="3,20 9,11 15,20" fill="#15803D"/>
      <polygon points="5,20 9,13 13,20" fill="#22C55E"/>
      {/*  Tier 1  */}
      <polygon points="5,12 9,4 13,12" fill="#22C55E"/>
      <polygon points="7,12 9,6 11,12" fill="#4ADE80"/>
    </g>
<g transform="translate(1224, 212)">
      <rect x="7" y="28" width="4" height="8" fill="#5A2E0F"/>
      {/*  Tier 3  */}
      <polygon points="1,28 9,18 17,28" fill="#14532D"/>
      <polygon points="3,28 9,20 15,28" fill="#15803D"/>
      {/*  Tier 2  */}
      <polygon points="3,20 9,11 15,20" fill="#15803D"/>
      <polygon points="5,20 9,13 13,20" fill="#22C55E"/>
      {/*  Tier 1  */}
      <polygon points="5,12 9,4 13,12" fill="#22C55E"/>
      <polygon points="7,12 9,6 11,12" fill="#4ADE80"/>
    </g>
<g transform="translate(1256, 212)">
      <rect x="7" y="28" width="4" height="8" fill="#5A2E0F"/>
      {/*  Tier 3  */}
      <polygon points="1,28 9,18 17,28" fill="#14532D"/>
      <polygon points="3,28 9,20 15,28" fill="#15803D"/>
      {/*  Tier 2  */}
      <polygon points="3,20 9,11 15,20" fill="#15803D"/>
      <polygon points="5,20 9,13 13,20" fill="#22C55E"/>
      {/*  Tier 1  */}
      <polygon points="5,12 9,4 13,12" fill="#22C55E"/>
      <polygon points="7,12 9,6 11,12" fill="#4ADE80"/>
    </g>
<g transform="translate(1288, 212)">
      <rect x="7" y="28" width="4" height="8" fill="#5A2E0F"/>
      {/*  Tier 3  */}
      <polygon points="1,28 9,18 17,28" fill="#14532D"/>
      <polygon points="3,28 9,20 15,28" fill="#15803D"/>
      {/*  Tier 2  */}
      <polygon points="3,20 9,11 15,20" fill="#15803D"/>
      <polygon points="5,20 9,13 13,20" fill="#22C55E"/>
      {/*  Tier 1  */}
      <polygon points="5,12 9,4 13,12" fill="#22C55E"/>
      <polygon points="7,12 9,6 11,12" fill="#4ADE80"/>
    </g>
<g transform="translate(1320, 212)">
      <rect x="7" y="28" width="4" height="8" fill="#5A2E0F"/>
      {/*  Tier 3  */}
      <polygon points="1,28 9,18 17,28" fill="#14532D"/>
      <polygon points="3,28 9,20 15,28" fill="#15803D"/>
      {/*  Tier 2  */}
      <polygon points="3,20 9,11 15,20" fill="#15803D"/>
      <polygon points="5,20 9,13 13,20" fill="#22C55E"/>
      {/*  Tier 1  */}
      <polygon points="5,12 9,4 13,12" fill="#22C55E"/>
      <polygon points="7,12 9,6 11,12" fill="#4ADE80"/>
    </g>
<g transform="translate(1352, 212)">
      <rect x="7" y="28" width="4" height="8" fill="#5A2E0F"/>
      {/*  Tier 3  */}
      <polygon points="1,28 9,18 17,28" fill="#14532D"/>
      <polygon points="3,28 9,20 15,28" fill="#15803D"/>
      {/*  Tier 2  */}
      <polygon points="3,20 9,11 15,20" fill="#15803D"/>
      <polygon points="5,20 9,13 13,20" fill="#22C55E"/>
      {/*  Tier 1  */}
      <polygon points="5,12 9,4 13,12" fill="#22C55E"/>
      <polygon points="7,12 9,6 11,12" fill="#4ADE80"/>
    </g>
<g transform="translate(1384, 212)">
      <rect x="7" y="28" width="4" height="8" fill="#5A2E0F"/>
      {/*  Tier 3  */}
      <polygon points="1,28 9,18 17,28" fill="#14532D"/>
      <polygon points="3,28 9,20 15,28" fill="#15803D"/>
      {/*  Tier 2  */}
      <polygon points="3,20 9,11 15,20" fill="#15803D"/>
      <polygon points="5,20 9,13 13,20" fill="#22C55E"/>
      {/*  Tier 1  */}
      <polygon points="5,12 9,4 13,12" fill="#22C55E"/>
      <polygon points="7,12 9,6 11,12" fill="#4ADE80"/>
    </g>
<g transform="translate(1416, 212)">
      <rect x="7" y="28" width="4" height="8" fill="#5A2E0F"/>
      {/*  Tier 3  */}
      <polygon points="1,28 9,18 17,28" fill="#14532D"/>
      <polygon points="3,28 9,20 15,28" fill="#15803D"/>
      {/*  Tier 2  */}
      <polygon points="3,20 9,11 15,20" fill="#15803D"/>
      <polygon points="5,20 9,13 13,20" fill="#22C55E"/>
      {/*  Tier 1  */}
      <polygon points="5,12 9,4 13,12" fill="#22C55E"/>
      <polygon points="7,12 9,6 11,12" fill="#4ADE80"/>
    </g>

  {/*  ================= 5. FOREGROUND LUSH GREEN HILLS & GROUND PLATFORM =================  */}
  <path d="M0,280 L0,232 Q160,215 360,225 Q560,238 720,220 Q900,205 1100,220 Q1280,235 1440,215 L1440,280 Z" fill="#14532D"/>
  <path d="M0,280 L0,246 Q220,228 480,238 Q720,250 960,234 Q1200,218 1440,238 L1440,280 Z" fill="#16A34A"/>
  
  {/*  Stepped Pixel Grass Platform  */}
  <rect x="0" y="254" width="1440" height="26" fill="#22C55E"/>
  <line x1="0" y1="254" x2="1440" y2="254" stroke="#86EFAC" strokeWidth="3"/>
  <rect x="0" y="272" width="1440" height="8" fill="#78350F"/>

  {/*  ================= 6. ARCADE WARP PIPES =================  */}
  {/*  Left Pipe & Mushroom  */}
  <g transform="translate(60, 202)">
    <rect x="0" y="0" width="56" height="20" fill="#000" rx="2"/>
    <rect x="2" y="2" width="52" height="16" fill="#22C55E" rx="1"/>
    <rect x="5" y="2" width="8" height="16" fill="#86EFAC"/>
    <rect x="42" y="2" width="9" height="16" fill="#15803D"/>
    <rect x="7" y="20" width="42" height="40" fill="#000"/>
    <rect x="9" y="20" width="38" height="40" fill="#22C55E"/>
    <rect x="12" y="20" width="6" height="40" fill="#86EFAC"/>
    <rect x="37" y="20" width="8" height="40" fill="#15803D"/>
  </g>
  <g transform="translate(126, 237)">
    <rect x="3" y="0" width="10" height="7" fill="#EF4444"/>
    <rect x="0" y="2" width="16" height="5" fill="#EF4444"/>
    <rect x="4" y="1" width="3" height="3" fill="#FFF"/>
    <rect x="10" y="2" width="3" height="3" fill="#FFF"/>
    <rect x="4" y="7" width="8" height="5" fill="#FEF3C7"/>
  </g>

  {/*  Right Pipe & Mystery Block  */}
  <g transform="translate(1320, 202)">
    <rect x="0" y="0" width="56" height="20" fill="#000" rx="2"/>
    <rect x="2" y="2" width="52" height="16" fill="#22C55E" rx="1"/>
    <rect x="5" y="2" width="8" height="16" fill="#86EFAC"/>
    <rect x="42" y="2" width="9" height="16" fill="#15803D"/>
    <rect x="7" y="20" width="42" height="40" fill="#000"/>
    <rect x="9" y="20" width="38" height="40" fill="#22C55E"/>
    <rect x="12" y="20" width="6" height="40" fill="#86EFAC"/>
    <rect x="37" y="20" width="8" height="40" fill="#15803D"/>
  </g>
  <g transform="translate(1275, 222)">
    <rect x="0" y="0" width="26" height="26" fill="#000" rx="2"/>
    <rect x="2" y="2" width="22" height="22" fill="#F59E0B" rx="1"/>
    <rect x="2" y="2" width="22" height="3" fill="#FEF08A"/>
    <rect x="2" y="2" width="3" height="22" fill="#FEF08A"/>
    <text x="13" y="17" fontFamily="'Press Start 2P', monospace" fontSize="11" fill="#FFF" textAnchor="middle" fontWeight="bold">?</text>
  </g>
</svg>
  </div>

  {/*  Hero Title Group: 3.5 Hearts Anchored Above 'POR'  */}
  <div className="hero-title-group">
    <div className="pixel-health-bar">
      {/*  3 Full Red Hearts with black border  */}
      <svg width="26" height="22" viewBox="0 0 14 12" shapeRendering="crispEdges">
        <path d="M2,0 h3 v1 h-3 Z M9,0 h3 v1 h-3 Z M1,1 h1 v2 h-1 Z M5,1 h1 v2 h-1 Z M8,1 h1 v2 h-1 Z M12,1 h1 v2 h-1 Z M0,3 h1 v4 h-1 Z M13,3 h1 v4 h-1 Z M1,7 h1 v2 h-1 Z M12,7 h1 v2 h-1 Z M2,9 h1 v1 h-1 Z M11,9 h1 v1 h-1 Z M3,10 h2 v1 h-2 Z M9,10 h2 v1 h-2 Z M5,11 h4 v1 h-4 Z" fill="#000000"/>
        <path d="M2,1 h3 v2 h-3 Z M9,1 h3 v2 h-3 Z M1,3 h12 v4 h-12 Z M2,7 h10 v2 h-10 Z M3,9 h8 v1 h-8 Z M5,10 h4 v1 h-4 Z" fill="#EF4444"/>
        <rect x="2" y="2" width="2" height="2" fill="#FFFFFF"/>
      </svg>
      <svg width="26" height="22" viewBox="0 0 14 12" shapeRendering="crispEdges">
        <path d="M2,0 h3 v1 h-3 Z M9,0 h3 v1 h-3 Z M1,1 h1 v2 h-1 Z M5,1 h1 v2 h-1 Z M8,1 h1 v2 h-1 Z M12,1 h1 v2 h-1 Z M0,3 h1 v4 h-1 Z M13,3 h1 v4 h-1 Z M1,7 h1 v2 h-1 Z M12,7 h1 v2 h-1 Z M2,9 h1 v1 h-1 Z M11,9 h1 v1 h-1 Z M3,10 h2 v1 h-2 Z M9,10 h2 v1 h-2 Z M5,11 h4 v1 h-4 Z" fill="#000000"/>
        <path d="M2,1 h3 v2 h-3 Z M9,1 h3 v2 h-3 Z M1,3 h12 v4 h-12 Z M2,7 h10 v2 h-10 Z M3,9 h8 v1 h-8 Z M5,10 h4 v1 h-4 Z" fill="#EF4444"/>
        <rect x="2" y="2" width="2" height="2" fill="#FFFFFF"/>
      </svg>
      <svg width="26" height="22" viewBox="0 0 14 12" shapeRendering="crispEdges">
        <path d="M2,0 h3 v1 h-3 Z M9,0 h3 v1 h-3 Z M1,1 h1 v2 h-1 Z M5,1 h1 v2 h-1 Z M8,1 h1 v2 h-1 Z M12,1 h1 v2 h-1 Z M0,3 h1 v4 h-1 Z M13,3 h1 v4 h-1 Z M1,7 h1 v2 h-1 Z M12,7 h1 v2 h-1 Z M2,9 h1 v1 h-1 Z M11,9 h1 v1 h-1 Z M3,10 h2 v1 h-2 Z M9,10 h2 v1 h-2 Z M5,11 h4 v1 h-4 Z" fill="#000000"/>
        <path d="M2,1 h3 v2 h-3 Z M9,1 h3 v2 h-3 Z M1,3 h12 v4 h-12 Z M2,7 h10 v2 h-10 Z M3,9 h8 v1 h-8 Z M5,10 h4 v1 h-4 Z" fill="#EF4444"/>
        <rect x="2" y="2" width="2" height="2" fill="#FFFFFF"/>
      </svg>
      {/*  1 Half Red / Half Dark Black Heart with sharp black outline  */}
      <svg width="26" height="22" viewBox="0 0 14 12" shapeRendering="crispEdges">
        <path d="M2,0 h3 v1 h-3 Z M9,0 h3 v1 h-3 Z M1,1 h1 v2 h-1 Z M5,1 h1 v2 h-1 Z M8,1 h1 v2 h-1 Z M12,1 h1 v2 h-1 Z M0,3 h1 v4 h-1 Z M13,3 h1 v4 h-1 Z M1,7 h1 v2 h-1 Z M12,7 h1 v2 h-1 Z M2,9 h1 v1 h-1 Z M11,9 h1 v1 h-1 Z M3,10 h2 v1 h-2 Z M9,10 h2 v1 h-2 Z M5,11 h4 v1 h-4 Z M6,1 h2 v10 h-2 Z" fill="#000000"/>
        <path d="M2,1 h3 v2 h-3 Z M1,3 h5 v4 h-5 Z M2,7 h4 v2 h-4 Z M3,9 h3 v1 h-3 Z M5,10 h1 v1 h-1 Z" fill="#EF4444"/>
        <rect x="2" y="2" width="2" height="2" fill="#FFFFFF"/>
        <path d="M9,1 h3 v2 h-3 Z M8,3 h5 v4 h-5 Z M8,7 h4 v2 h-4 Z M8,9 h3 v1 h-3 Z M8,10 h1 v1 h-1 Z" fill="#1E293B"/>
      </svg>
    </div>
    <h1 className="hero__title">PORSEMATIK</h1>
  </div>

  <p className="hero__subtitle"><em className="italic-feat">feat.</em> Milad Informatika Tahun 2026</p>
  <p className="hero__tagline">"Ignite the Summit: Elevating Solidarity, Resilience, and Creativity through Sportsmanship"</p>

  {/*  Live Countdown Timer to Nov 16, 2026 17:50:00 WIB  */}
  <div className="countdown" id="countdown">
    <div className="countdown__block"><span className="countdown__num" id="cd-days">{pad(days)}</span><span className="countdown__label">Days</span></div>
    <div className="countdown__block"><span className="countdown__num" id="cd-hours">{pad(hours)}</span><span className="countdown__label">Hours</span></div>
    <div className="countdown__block"><span className="countdown__num" id="cd-mins">{pad(minutes)}</span><span className="countdown__label">Minutes</span></div>
    <div className="countdown__block"><span className="countdown__num" id="cd-secs">{pad(seconds)}</span><span className="countdown__label">Seconds</span></div>
  </div>

  {/*  [START] Button placed comfortably in open sky above the summit  */}
  <div className="hero__cta-wrap">
    <a href="https://linktr.ee/porsematik2026" className="btn-pixel" target="_blank" rel="noopener noreferrer">[ DAFTAR LOMBA ]</a>
    <Link href="/kompetisi" className="btn-pixel btn-pixel--secondary">[ LIHAT KOMPETISI ]</Link>
    
  </div>

  {/*  7 SWAYING FLOATING 8-BIT PIXEL STICKERS (HERO SKY)  */}
  <div className="hanging-sticker sticker--trophy" title="Piala Bergilir Milad 32">
    <div className="washi-tape washi-tape--yellow"></div>
    <svg viewBox="0 0 64 64" width="56" height="56" className="sticker-svg">
      <path d="M16,6 h32 v8 h8 v18 h-10 v10 h6 v6 h-14 v8 h10 v4 h-28 v-4 h10 v-8 h-14 v-6 h6 v-10 h-10 v-18 h8 Z" fill="#FFFFFF"/>
      <path d="M18,8 h28 v6 h-28 Z M18,14 h28 v8 h-4 v6 h-6 v6 h-8 v-6 h-6 v-6 h-4 Z" fill="#F59E0B"/>
      <path d="M22,10 h6 v10 h-4 v-6 h-2 Z" fill="#FDE68A"/>
      <path d="M38,10 h4 v14 h-4 Z" fill="#D97706"/>
      <path d="M12,16 h4 v10 h-4 Z M10,18 h2 v6 h-2 Z" fill="#F59E0B"/>
      <path d="M48,16 h4 v10 h-4 Z M52,18 h2 v6 h-2 Z" fill="#F59E0B"/>
      <text x="32" y="24" fontFamily="'Press Start 2P', monospace" fontSize="7" fill="#78350F" textAnchor="middle" fontWeight="bold">32</text>
      <rect x="28" y="38" width="8" height="8" fill="#D97706"/>
      <rect x="20" y="46" width="24" height="6" fill="#181924"/>
      <rect x="22" y="48" width="20" height="2" fill="#F59E0B"/>
    </svg>
    <span className="sticker-label">MILAD 32</span>
  </div>

  <div className="hanging-sticker sticker--torch" title="Ignite the Summit">
    <div className="washi-tape washi-tape--orange"></div>
    <svg viewBox="0 0 48 56" width="46" height="54" className="sticker-svg">
      <path d="M14,4 h20 v16 h-4 v14 h-4 v18 h-8 v-18 h-4 v-14 Z" fill="#FFFFFF"/>
      <rect x="20" y="30" width="8" height="22" fill="#78350F"/>
      <rect x="22" y="32" width="2" height="18" fill="#FDE68A"/>
      <rect x="16" y="20" width="16" height="10" fill="#D97706"/>
      <rect x="18" y="22" width="12" height="6" fill="#F59E0B"/>
      <path d="M20,6 h8 v6 h4 v6 h-16 v-6 h4 Z" fill="#EF4444"/>
      <path d="M22,8 h4 v4 h2 v4 h-8 v-4 h2 Z" fill="#F59E0B"/>
      <rect x="23" y="10" width="2" height="4" fill="#FFFDE7"/>
    </svg>
    <span className="sticker-label">IGNITE!</span>
  </div>

  <div className="hanging-sticker sticker--gamepad" title="E-Sport MLBB">
    <div className="washi-tape washi-tape--blue"></div>
    <svg viewBox="0 0 60 40" width="52" height="34" className="sticker-svg">
      <path d="M6,6 h48 v28 h-48 Z" fill="#FFFFFF"/>
      <rect x="8" y="8" width="44" height="24" fill="#1F2937" rx="3"/>
      <rect x="15" y="14" width="4" height="12" fill="#9CA3AF"/>
      <rect x="11" y="18" width="12" height="4" fill="#9CA3AF"/>
      <circle cx="41" cy="18" r="2.5" fill="#EF4444"/>
      <circle cx="47" cy="22" r="2.5" fill="#F59E0B"/>
      <rect x="25" y="22" width="4" height="2" fill="#4B5563"/>
      <rect x="31" y="22" width="4" height="2" fill="#4B5563"/>
    </svg>
    <span className="sticker-label">E-SPORT</span>
  </div>

  <div className="hanging-sticker sticker--sports" title="Sports Competition (Futsal & Basket)">
    <div className="washi-tape washi-tape--green"></div>
    <svg viewBox="0 0 54 54" width="48" height="48" className="sticker-svg px-bounce-ball">
      <circle cx="27" cy="27" r="23" fill="#FFFFFF"/>
      <circle cx="27" cy="27" r="20" fill="#F8FAFC"/>
      <polygon points="27,15 33,20 31,27 23,27 21,20" fill="#1E293B"/>
      <polygon points="27,15 27,8 20,11 21,20" fill="#1E293B"/>
      <polygon points="33,20 39,18 40,24 31,27" fill="#1E293B"/>
      <polygon points="23,27 15,28 17,21 21,20" fill="#1E293B"/>
      <polygon points="31,27 34,35 27,38 23,27" fill="#1E293B"/>
      <circle cx="41" cy="39" r="10" fill="#FFFFFF"/>
      <circle cx="41" cy="39" r="8.5" fill="#EA580C"/>
      <line x1="33" y1="39" x2="49" y2="39" stroke="#7C2D12" strokeWidth="1.2"/>
      <line x1="41" y1="31" x2="41" y2="47" stroke="#7C2D12" strokeWidth="1.2"/>
    </svg>
    <span className="sticker-label">SPORTS</span>
  </div>

  <div className="hanging-sticker sticker--camera" title="Lensa Bercerita">
    <div className="washi-tape washi-tape--orange"></div>
    <svg viewBox="0 0 52 44" width="48" height="40" className="sticker-svg">
      <path d="M4,10 h44 v30 h-44 Z M16,4 h20 v6 h-20 Z" fill="#FFFFFF"/>
      <rect x="6" y="12" width="40" height="26" fill="#374151" rx="2"/>
      <rect x="18" y="6" width="16" height="6" fill="#4B5563"/>
      <circle cx="26" cy="25" r="9" fill="#1F2937"/>
      <circle cx="26" cy="25" r="6" fill="#60A5FA"/>
      <circle cx="28" cy="23" r="2" fill="#FFFFFF"/>
      <rect x="10" y="15" width="6" height="4" fill="#FDE68A"/>
    </svg>
    <span className="sticker-label">ART &amp; PHOTO</span>
  </div>

  <div className="hanging-sticker sticker--laptop" title="UI/UX & Vibe Coding">
    <div className="washi-tape washi-tape--blue"></div>
    <svg viewBox="0 0 54 44" width="48" height="40" className="sticker-svg">
      <path d="M8,6 h38 v26 h-38 Z M2,32 h50 v8 h-50 Z" fill="#FFFFFF"/>
      <rect x="10" y="8" width="34" height="22" fill="#111827"/>
      <text x="14" y="18" fontFamily="'Press Start 2P', monospace" fontSize="4" fill="#2ECC40">&gt;_UII</text>
      <text x="14" y="25" fontFamily="'Press Start 2P', monospace" fontSize="3.5" fill="#FFD166">2026</text>
      <rect x="4" y="34" width="46" height="4" fill="#4B5563"/>
    </svg>
    <span className="sticker-label">UI/UX &amp; CODE</span>
  </div>

  <div className="hanging-sticker sticker--badge" title="Established 1994">
    <div className="washi-tape washi-tape--yellow"></div>
    <svg viewBox="0 0 56 56" width="48" height="48" className="sticker-svg">
      <polygon points="28,4 34,12 44,8 44,19 54,21 49,30 55,38 45,41 43,51 33,48 28,55 23,48 13,51 11,41 1,38 7,30 2,21 12,19 12,8 22,12" fill="#FFFFFF"/>
      <polygon points="28,7 33,14 42,10 42,20 51,22 46,30 51,37 42,40 40,48 32,45 28,51 24,45 16,48 14,40 5,37 10,30 5,22 14,20 14,10 23,14" fill="#FF8C00"/>
      <circle cx="28" cy="30" r="14" fill="#FFFBEB"/>
      <text x="28" y="29" fontFamily="'Press Start 2P', monospace" fontSize="6" fill="#92400E" textAnchor="middle" fontWeight="bold">EST.</text>
      <text x="28" y="36" fontFamily="'Press Start 2P', monospace" fontSize="6.5" fill="#B45309" textAnchor="middle" fontWeight="bold">1994</text>
    </svg>
    <span className="sticker-label">32 TH</span>
  </div>

</section>
  );
}

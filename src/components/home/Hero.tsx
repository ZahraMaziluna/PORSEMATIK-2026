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
    <svg viewBox="0 0 96 96" className="pixel-sun-svg">
      {/*  Sinar berputar  */}
      <g className="pixel-sun-rays">
        <rect x="44" y="2" width="8" height="14" fill="#FBBF24" transform="rotate(0 48 48)"/>
        <rect x="45" y="5" width="6" height="10" fill="#FDE047" transform="rotate(45 48 48)"/>
        <rect x="44" y="2" width="8" height="14" fill="#FBBF24" transform="rotate(90 48 48)"/>
        <rect x="45" y="5" width="6" height="10" fill="#FDE047" transform="rotate(135 48 48)"/>
        <rect x="44" y="2" width="8" height="14" fill="#FBBF24" transform="rotate(180 48 48)"/>
        <rect x="45" y="5" width="6" height="10" fill="#FDE047" transform="rotate(225 48 48)"/>
        <rect x="44" y="2" width="8" height="14" fill="#FBBF24" transform="rotate(270 48 48)"/>
        <rect x="45" y="5" width="6" height="10" fill="#FDE047" transform="rotate(315 48 48)"/>
      </g>
      {/*  Inti matahari piksel (diam)  */}
      <g shapeRendering="crispEdges">
        <rect x="28" y="20" width="40" height="56" fill="#F59E0B"/>
        <rect x="20" y="28" width="56" height="40" fill="#F59E0B"/>
        <rect x="28" y="24" width="40" height="48" fill="#FDE047"/>
        <rect x="24" y="28" width="48" height="40" fill="#FDE047"/>
        <rect x="32" y="28" width="28" height="28" fill="#FEF08A"/>
        <rect x="36" y="32" width="16" height="16" fill="#FFFBEB"/>
      </g>
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


    {/*  Hutan pinus piksel (gaya halaman Jadwal), tinggi beragam  */}
    <g id="ppL2" shapeRendering="crispEdges"><rect x="-6" y="0" width="12" height="4" fill="#16A34A"/><rect x="-2" y="0" width="4" height="4" fill="#22C55E"/><rect x="-10" y="4" width="20" height="4" fill="#16A34A"/><rect x="-6" y="4" width="6" height="4" fill="#22C55E"/><rect x="-6" y="4" width="4" height="4" fill="#4ADE80"/><rect x="-14" y="8" width="28" height="4" fill="#16A34A"/><rect x="-10" y="8" width="10" height="4" fill="#22C55E"/><rect x="-10" y="8" width="4" height="4" fill="#4ADE80"/><rect x="-10" y="12" width="20" height="4" fill="#16A34A"/><rect x="-6" y="12" width="6" height="4" fill="#22C55E"/><rect x="-14" y="16" width="28" height="4" fill="#16A34A"/><rect x="-10" y="16" width="10" height="4" fill="#22C55E"/><rect x="-10" y="16" width="4" height="4" fill="#4ADE80"/><rect x="-18" y="20" width="36" height="4" fill="#16A34A"/><rect x="-14" y="20" width="14" height="4" fill="#22C55E"/><rect x="-14" y="20" width="4" height="4" fill="#4ADE80"/><rect x="-2" y="24" width="8" height="8" fill="#78350F"/></g>
    <g id="ppL3" shapeRendering="crispEdges"><rect x="-6" y="0" width="12" height="4" fill="#16A34A"/><rect x="-2" y="0" width="4" height="4" fill="#22C55E"/><rect x="-10" y="4" width="20" height="4" fill="#16A34A"/><rect x="-6" y="4" width="6" height="4" fill="#22C55E"/><rect x="-6" y="4" width="4" height="4" fill="#4ADE80"/><rect x="-14" y="8" width="28" height="4" fill="#16A34A"/><rect x="-10" y="8" width="10" height="4" fill="#22C55E"/><rect x="-10" y="8" width="4" height="4" fill="#4ADE80"/><rect x="-10" y="12" width="20" height="4" fill="#16A34A"/><rect x="-6" y="12" width="6" height="4" fill="#22C55E"/><rect x="-14" y="16" width="28" height="4" fill="#16A34A"/><rect x="-10" y="16" width="10" height="4" fill="#22C55E"/><rect x="-10" y="16" width="4" height="4" fill="#4ADE80"/><rect x="-18" y="20" width="36" height="4" fill="#16A34A"/><rect x="-14" y="20" width="14" height="4" fill="#22C55E"/><rect x="-14" y="20" width="4" height="4" fill="#4ADE80"/><rect x="-14" y="24" width="28" height="4" fill="#16A34A"/><rect x="-10" y="24" width="10" height="4" fill="#22C55E"/><rect x="-18" y="28" width="36" height="4" fill="#16A34A"/><rect x="-14" y="28" width="14" height="4" fill="#22C55E"/><rect x="-14" y="28" width="4" height="4" fill="#4ADE80"/><rect x="-22" y="32" width="44" height="4" fill="#16A34A"/><rect x="-18" y="32" width="18" height="4" fill="#22C55E"/><rect x="-18" y="32" width="4" height="4" fill="#4ADE80"/><rect x="-2" y="36" width="8" height="8" fill="#78350F"/></g>
    <g id="ppL4" shapeRendering="crispEdges"><rect x="-6" y="0" width="12" height="4" fill="#16A34A"/><rect x="-2" y="0" width="4" height="4" fill="#22C55E"/><rect x="-10" y="4" width="20" height="4" fill="#16A34A"/><rect x="-6" y="4" width="6" height="4" fill="#22C55E"/><rect x="-6" y="4" width="4" height="4" fill="#4ADE80"/><rect x="-14" y="8" width="28" height="4" fill="#16A34A"/><rect x="-10" y="8" width="10" height="4" fill="#22C55E"/><rect x="-10" y="8" width="4" height="4" fill="#4ADE80"/><rect x="-10" y="12" width="20" height="4" fill="#16A34A"/><rect x="-6" y="12" width="6" height="4" fill="#22C55E"/><rect x="-14" y="16" width="28" height="4" fill="#16A34A"/><rect x="-10" y="16" width="10" height="4" fill="#22C55E"/><rect x="-10" y="16" width="4" height="4" fill="#4ADE80"/><rect x="-18" y="20" width="36" height="4" fill="#16A34A"/><rect x="-14" y="20" width="14" height="4" fill="#22C55E"/><rect x="-14" y="20" width="4" height="4" fill="#4ADE80"/><rect x="-14" y="24" width="28" height="4" fill="#16A34A"/><rect x="-10" y="24" width="10" height="4" fill="#22C55E"/><rect x="-18" y="28" width="36" height="4" fill="#16A34A"/><rect x="-14" y="28" width="14" height="4" fill="#22C55E"/><rect x="-14" y="28" width="4" height="4" fill="#4ADE80"/><rect x="-22" y="32" width="44" height="4" fill="#16A34A"/><rect x="-18" y="32" width="18" height="4" fill="#22C55E"/><rect x="-18" y="32" width="4" height="4" fill="#4ADE80"/><rect x="-18" y="36" width="36" height="4" fill="#16A34A"/><rect x="-14" y="36" width="14" height="4" fill="#22C55E"/><rect x="-22" y="40" width="44" height="4" fill="#16A34A"/><rect x="-18" y="40" width="18" height="4" fill="#22C55E"/><rect x="-18" y="40" width="4" height="4" fill="#4ADE80"/><rect x="-26" y="44" width="52" height="4" fill="#16A34A"/><rect x="-22" y="44" width="22" height="4" fill="#22C55E"/><rect x="-22" y="44" width="4" height="4" fill="#4ADE80"/><rect x="-2" y="48" width="8" height="8" fill="#78350F"/></g>
    <g id="ppL5" shapeRendering="crispEdges"><rect x="-6" y="0" width="12" height="4" fill="#16A34A"/><rect x="-2" y="0" width="4" height="4" fill="#22C55E"/><rect x="-10" y="4" width="20" height="4" fill="#16A34A"/><rect x="-6" y="4" width="6" height="4" fill="#22C55E"/><rect x="-6" y="4" width="4" height="4" fill="#4ADE80"/><rect x="-14" y="8" width="28" height="4" fill="#16A34A"/><rect x="-10" y="8" width="10" height="4" fill="#22C55E"/><rect x="-10" y="8" width="4" height="4" fill="#4ADE80"/><rect x="-10" y="12" width="20" height="4" fill="#16A34A"/><rect x="-6" y="12" width="6" height="4" fill="#22C55E"/><rect x="-14" y="16" width="28" height="4" fill="#16A34A"/><rect x="-10" y="16" width="10" height="4" fill="#22C55E"/><rect x="-10" y="16" width="4" height="4" fill="#4ADE80"/><rect x="-18" y="20" width="36" height="4" fill="#16A34A"/><rect x="-14" y="20" width="14" height="4" fill="#22C55E"/><rect x="-14" y="20" width="4" height="4" fill="#4ADE80"/><rect x="-14" y="24" width="28" height="4" fill="#16A34A"/><rect x="-10" y="24" width="10" height="4" fill="#22C55E"/><rect x="-18" y="28" width="36" height="4" fill="#16A34A"/><rect x="-14" y="28" width="14" height="4" fill="#22C55E"/><rect x="-14" y="28" width="4" height="4" fill="#4ADE80"/><rect x="-22" y="32" width="44" height="4" fill="#16A34A"/><rect x="-18" y="32" width="18" height="4" fill="#22C55E"/><rect x="-18" y="32" width="4" height="4" fill="#4ADE80"/><rect x="-18" y="36" width="36" height="4" fill="#16A34A"/><rect x="-14" y="36" width="14" height="4" fill="#22C55E"/><rect x="-22" y="40" width="44" height="4" fill="#16A34A"/><rect x="-18" y="40" width="18" height="4" fill="#22C55E"/><rect x="-18" y="40" width="4" height="4" fill="#4ADE80"/><rect x="-26" y="44" width="52" height="4" fill="#16A34A"/><rect x="-22" y="44" width="22" height="4" fill="#22C55E"/><rect x="-22" y="44" width="4" height="4" fill="#4ADE80"/><rect x="-22" y="48" width="44" height="4" fill="#16A34A"/><rect x="-18" y="48" width="18" height="4" fill="#22C55E"/><rect x="-26" y="52" width="52" height="4" fill="#16A34A"/><rect x="-22" y="52" width="22" height="4" fill="#22C55E"/><rect x="-22" y="52" width="4" height="4" fill="#4ADE80"/><rect x="-30" y="56" width="60" height="4" fill="#16A34A"/><rect x="-26" y="56" width="26" height="4" fill="#22C55E"/><rect x="-26" y="56" width="4" height="4" fill="#4ADE80"/><rect x="-2" y="60" width="8" height="8" fill="#78350F"/></g>
    <g id="ppL6" shapeRendering="crispEdges"><rect x="-6" y="0" width="12" height="4" fill="#16A34A"/><rect x="-2" y="0" width="4" height="4" fill="#22C55E"/><rect x="-10" y="4" width="20" height="4" fill="#16A34A"/><rect x="-6" y="4" width="6" height="4" fill="#22C55E"/><rect x="-6" y="4" width="4" height="4" fill="#4ADE80"/><rect x="-14" y="8" width="28" height="4" fill="#16A34A"/><rect x="-10" y="8" width="10" height="4" fill="#22C55E"/><rect x="-10" y="8" width="4" height="4" fill="#4ADE80"/><rect x="-10" y="12" width="20" height="4" fill="#16A34A"/><rect x="-6" y="12" width="6" height="4" fill="#22C55E"/><rect x="-14" y="16" width="28" height="4" fill="#16A34A"/><rect x="-10" y="16" width="10" height="4" fill="#22C55E"/><rect x="-10" y="16" width="4" height="4" fill="#4ADE80"/><rect x="-18" y="20" width="36" height="4" fill="#16A34A"/><rect x="-14" y="20" width="14" height="4" fill="#22C55E"/><rect x="-14" y="20" width="4" height="4" fill="#4ADE80"/><rect x="-14" y="24" width="28" height="4" fill="#16A34A"/><rect x="-10" y="24" width="10" height="4" fill="#22C55E"/><rect x="-18" y="28" width="36" height="4" fill="#16A34A"/><rect x="-14" y="28" width="14" height="4" fill="#22C55E"/><rect x="-14" y="28" width="4" height="4" fill="#4ADE80"/><rect x="-22" y="32" width="44" height="4" fill="#16A34A"/><rect x="-18" y="32" width="18" height="4" fill="#22C55E"/><rect x="-18" y="32" width="4" height="4" fill="#4ADE80"/><rect x="-18" y="36" width="36" height="4" fill="#16A34A"/><rect x="-14" y="36" width="14" height="4" fill="#22C55E"/><rect x="-22" y="40" width="44" height="4" fill="#16A34A"/><rect x="-18" y="40" width="18" height="4" fill="#22C55E"/><rect x="-18" y="40" width="4" height="4" fill="#4ADE80"/><rect x="-26" y="44" width="52" height="4" fill="#16A34A"/><rect x="-22" y="44" width="22" height="4" fill="#22C55E"/><rect x="-22" y="44" width="4" height="4" fill="#4ADE80"/><rect x="-22" y="48" width="44" height="4" fill="#16A34A"/><rect x="-18" y="48" width="18" height="4" fill="#22C55E"/><rect x="-26" y="52" width="52" height="4" fill="#16A34A"/><rect x="-22" y="52" width="22" height="4" fill="#22C55E"/><rect x="-22" y="52" width="4" height="4" fill="#4ADE80"/><rect x="-30" y="56" width="60" height="4" fill="#16A34A"/><rect x="-26" y="56" width="26" height="4" fill="#22C55E"/><rect x="-26" y="56" width="4" height="4" fill="#4ADE80"/><rect x="-26" y="60" width="52" height="4" fill="#16A34A"/><rect x="-22" y="60" width="22" height="4" fill="#22C55E"/><rect x="-30" y="64" width="60" height="4" fill="#16A34A"/><rect x="-26" y="64" width="26" height="4" fill="#22C55E"/><rect x="-26" y="64" width="4" height="4" fill="#4ADE80"/><rect x="-34" y="68" width="68" height="4" fill="#16A34A"/><rect x="-30" y="68" width="30" height="4" fill="#22C55E"/><rect x="-30" y="68" width="4" height="4" fill="#4ADE80"/><rect x="-2" y="72" width="8" height="8" fill="#78350F"/></g>
    <g id="ppL7" shapeRendering="crispEdges"><rect x="-6" y="0" width="12" height="4" fill="#16A34A"/><rect x="-2" y="0" width="4" height="4" fill="#22C55E"/><rect x="-10" y="4" width="20" height="4" fill="#16A34A"/><rect x="-6" y="4" width="6" height="4" fill="#22C55E"/><rect x="-6" y="4" width="4" height="4" fill="#4ADE80"/><rect x="-14" y="8" width="28" height="4" fill="#16A34A"/><rect x="-10" y="8" width="10" height="4" fill="#22C55E"/><rect x="-10" y="8" width="4" height="4" fill="#4ADE80"/><rect x="-10" y="12" width="20" height="4" fill="#16A34A"/><rect x="-6" y="12" width="6" height="4" fill="#22C55E"/><rect x="-14" y="16" width="28" height="4" fill="#16A34A"/><rect x="-10" y="16" width="10" height="4" fill="#22C55E"/><rect x="-10" y="16" width="4" height="4" fill="#4ADE80"/><rect x="-18" y="20" width="36" height="4" fill="#16A34A"/><rect x="-14" y="20" width="14" height="4" fill="#22C55E"/><rect x="-14" y="20" width="4" height="4" fill="#4ADE80"/><rect x="-14" y="24" width="28" height="4" fill="#16A34A"/><rect x="-10" y="24" width="10" height="4" fill="#22C55E"/><rect x="-18" y="28" width="36" height="4" fill="#16A34A"/><rect x="-14" y="28" width="14" height="4" fill="#22C55E"/><rect x="-14" y="28" width="4" height="4" fill="#4ADE80"/><rect x="-22" y="32" width="44" height="4" fill="#16A34A"/><rect x="-18" y="32" width="18" height="4" fill="#22C55E"/><rect x="-18" y="32" width="4" height="4" fill="#4ADE80"/><rect x="-18" y="36" width="36" height="4" fill="#16A34A"/><rect x="-14" y="36" width="14" height="4" fill="#22C55E"/><rect x="-22" y="40" width="44" height="4" fill="#16A34A"/><rect x="-18" y="40" width="18" height="4" fill="#22C55E"/><rect x="-18" y="40" width="4" height="4" fill="#4ADE80"/><rect x="-26" y="44" width="52" height="4" fill="#16A34A"/><rect x="-22" y="44" width="22" height="4" fill="#22C55E"/><rect x="-22" y="44" width="4" height="4" fill="#4ADE80"/><rect x="-22" y="48" width="44" height="4" fill="#16A34A"/><rect x="-18" y="48" width="18" height="4" fill="#22C55E"/><rect x="-26" y="52" width="52" height="4" fill="#16A34A"/><rect x="-22" y="52" width="22" height="4" fill="#22C55E"/><rect x="-22" y="52" width="4" height="4" fill="#4ADE80"/><rect x="-30" y="56" width="60" height="4" fill="#16A34A"/><rect x="-26" y="56" width="26" height="4" fill="#22C55E"/><rect x="-26" y="56" width="4" height="4" fill="#4ADE80"/><rect x="-26" y="60" width="52" height="4" fill="#16A34A"/><rect x="-22" y="60" width="22" height="4" fill="#22C55E"/><rect x="-30" y="64" width="60" height="4" fill="#16A34A"/><rect x="-26" y="64" width="26" height="4" fill="#22C55E"/><rect x="-26" y="64" width="4" height="4" fill="#4ADE80"/><rect x="-34" y="68" width="68" height="4" fill="#16A34A"/><rect x="-30" y="68" width="30" height="4" fill="#22C55E"/><rect x="-30" y="68" width="4" height="4" fill="#4ADE80"/><rect x="-30" y="72" width="60" height="4" fill="#16A34A"/><rect x="-26" y="72" width="26" height="4" fill="#22C55E"/><rect x="-34" y="76" width="68" height="4" fill="#16A34A"/><rect x="-30" y="76" width="30" height="4" fill="#22C55E"/><rect x="-30" y="76" width="4" height="4" fill="#4ADE80"/><rect x="-38" y="80" width="76" height="4" fill="#16A34A"/><rect x="-34" y="80" width="34" height="4" fill="#22C55E"/><rect x="-34" y="80" width="4" height="4" fill="#4ADE80"/><rect x="-2" y="84" width="8" height="8" fill="#78350F"/></g>
    <g id="ppD2" shapeRendering="crispEdges"><rect x="-6" y="0" width="12" height="4" fill="#14532D"/><rect x="-2" y="0" width="4" height="4" fill="#166534"/><rect x="-10" y="4" width="20" height="4" fill="#14532D"/><rect x="-6" y="4" width="6" height="4" fill="#166534"/><rect x="-6" y="4" width="4" height="4" fill="#15803D"/><rect x="-14" y="8" width="28" height="4" fill="#14532D"/><rect x="-10" y="8" width="10" height="4" fill="#166534"/><rect x="-10" y="8" width="4" height="4" fill="#15803D"/><rect x="-10" y="12" width="20" height="4" fill="#14532D"/><rect x="-6" y="12" width="6" height="4" fill="#166534"/><rect x="-14" y="16" width="28" height="4" fill="#14532D"/><rect x="-10" y="16" width="10" height="4" fill="#166534"/><rect x="-10" y="16" width="4" height="4" fill="#15803D"/><rect x="-18" y="20" width="36" height="4" fill="#14532D"/><rect x="-14" y="20" width="14" height="4" fill="#166534"/><rect x="-14" y="20" width="4" height="4" fill="#15803D"/><rect x="-2" y="24" width="8" height="8" fill="#451A03"/></g>
    <g id="ppD3" shapeRendering="crispEdges"><rect x="-6" y="0" width="12" height="4" fill="#14532D"/><rect x="-2" y="0" width="4" height="4" fill="#166534"/><rect x="-10" y="4" width="20" height="4" fill="#14532D"/><rect x="-6" y="4" width="6" height="4" fill="#166534"/><rect x="-6" y="4" width="4" height="4" fill="#15803D"/><rect x="-14" y="8" width="28" height="4" fill="#14532D"/><rect x="-10" y="8" width="10" height="4" fill="#166534"/><rect x="-10" y="8" width="4" height="4" fill="#15803D"/><rect x="-10" y="12" width="20" height="4" fill="#14532D"/><rect x="-6" y="12" width="6" height="4" fill="#166534"/><rect x="-14" y="16" width="28" height="4" fill="#14532D"/><rect x="-10" y="16" width="10" height="4" fill="#166534"/><rect x="-10" y="16" width="4" height="4" fill="#15803D"/><rect x="-18" y="20" width="36" height="4" fill="#14532D"/><rect x="-14" y="20" width="14" height="4" fill="#166534"/><rect x="-14" y="20" width="4" height="4" fill="#15803D"/><rect x="-14" y="24" width="28" height="4" fill="#14532D"/><rect x="-10" y="24" width="10" height="4" fill="#166534"/><rect x="-18" y="28" width="36" height="4" fill="#14532D"/><rect x="-14" y="28" width="14" height="4" fill="#166534"/><rect x="-14" y="28" width="4" height="4" fill="#15803D"/><rect x="-22" y="32" width="44" height="4" fill="#14532D"/><rect x="-18" y="32" width="18" height="4" fill="#166534"/><rect x="-18" y="32" width="4" height="4" fill="#15803D"/><rect x="-2" y="36" width="8" height="8" fill="#451A03"/></g>
    <g id="ppD4" shapeRendering="crispEdges"><rect x="-6" y="0" width="12" height="4" fill="#14532D"/><rect x="-2" y="0" width="4" height="4" fill="#166534"/><rect x="-10" y="4" width="20" height="4" fill="#14532D"/><rect x="-6" y="4" width="6" height="4" fill="#166534"/><rect x="-6" y="4" width="4" height="4" fill="#15803D"/><rect x="-14" y="8" width="28" height="4" fill="#14532D"/><rect x="-10" y="8" width="10" height="4" fill="#166534"/><rect x="-10" y="8" width="4" height="4" fill="#15803D"/><rect x="-10" y="12" width="20" height="4" fill="#14532D"/><rect x="-6" y="12" width="6" height="4" fill="#166534"/><rect x="-14" y="16" width="28" height="4" fill="#14532D"/><rect x="-10" y="16" width="10" height="4" fill="#166534"/><rect x="-10" y="16" width="4" height="4" fill="#15803D"/><rect x="-18" y="20" width="36" height="4" fill="#14532D"/><rect x="-14" y="20" width="14" height="4" fill="#166534"/><rect x="-14" y="20" width="4" height="4" fill="#15803D"/><rect x="-14" y="24" width="28" height="4" fill="#14532D"/><rect x="-10" y="24" width="10" height="4" fill="#166534"/><rect x="-18" y="28" width="36" height="4" fill="#14532D"/><rect x="-14" y="28" width="14" height="4" fill="#166534"/><rect x="-14" y="28" width="4" height="4" fill="#15803D"/><rect x="-22" y="32" width="44" height="4" fill="#14532D"/><rect x="-18" y="32" width="18" height="4" fill="#166534"/><rect x="-18" y="32" width="4" height="4" fill="#15803D"/><rect x="-18" y="36" width="36" height="4" fill="#14532D"/><rect x="-14" y="36" width="14" height="4" fill="#166534"/><rect x="-22" y="40" width="44" height="4" fill="#14532D"/><rect x="-18" y="40" width="18" height="4" fill="#166534"/><rect x="-18" y="40" width="4" height="4" fill="#15803D"/><rect x="-26" y="44" width="52" height="4" fill="#14532D"/><rect x="-22" y="44" width="22" height="4" fill="#166534"/><rect x="-22" y="44" width="4" height="4" fill="#15803D"/><rect x="-2" y="48" width="8" height="8" fill="#451A03"/></g>
    <g id="ppD5" shapeRendering="crispEdges"><rect x="-6" y="0" width="12" height="4" fill="#14532D"/><rect x="-2" y="0" width="4" height="4" fill="#166534"/><rect x="-10" y="4" width="20" height="4" fill="#14532D"/><rect x="-6" y="4" width="6" height="4" fill="#166534"/><rect x="-6" y="4" width="4" height="4" fill="#15803D"/><rect x="-14" y="8" width="28" height="4" fill="#14532D"/><rect x="-10" y="8" width="10" height="4" fill="#166534"/><rect x="-10" y="8" width="4" height="4" fill="#15803D"/><rect x="-10" y="12" width="20" height="4" fill="#14532D"/><rect x="-6" y="12" width="6" height="4" fill="#166534"/><rect x="-14" y="16" width="28" height="4" fill="#14532D"/><rect x="-10" y="16" width="10" height="4" fill="#166534"/><rect x="-10" y="16" width="4" height="4" fill="#15803D"/><rect x="-18" y="20" width="36" height="4" fill="#14532D"/><rect x="-14" y="20" width="14" height="4" fill="#166534"/><rect x="-14" y="20" width="4" height="4" fill="#15803D"/><rect x="-14" y="24" width="28" height="4" fill="#14532D"/><rect x="-10" y="24" width="10" height="4" fill="#166534"/><rect x="-18" y="28" width="36" height="4" fill="#14532D"/><rect x="-14" y="28" width="14" height="4" fill="#166534"/><rect x="-14" y="28" width="4" height="4" fill="#15803D"/><rect x="-22" y="32" width="44" height="4" fill="#14532D"/><rect x="-18" y="32" width="18" height="4" fill="#166534"/><rect x="-18" y="32" width="4" height="4" fill="#15803D"/><rect x="-18" y="36" width="36" height="4" fill="#14532D"/><rect x="-14" y="36" width="14" height="4" fill="#166534"/><rect x="-22" y="40" width="44" height="4" fill="#14532D"/><rect x="-18" y="40" width="18" height="4" fill="#166534"/><rect x="-18" y="40" width="4" height="4" fill="#15803D"/><rect x="-26" y="44" width="52" height="4" fill="#14532D"/><rect x="-22" y="44" width="22" height="4" fill="#166534"/><rect x="-22" y="44" width="4" height="4" fill="#15803D"/><rect x="-22" y="48" width="44" height="4" fill="#14532D"/><rect x="-18" y="48" width="18" height="4" fill="#166534"/><rect x="-26" y="52" width="52" height="4" fill="#14532D"/><rect x="-22" y="52" width="22" height="4" fill="#166534"/><rect x="-22" y="52" width="4" height="4" fill="#15803D"/><rect x="-30" y="56" width="60" height="4" fill="#14532D"/><rect x="-26" y="56" width="26" height="4" fill="#166534"/><rect x="-26" y="56" width="4" height="4" fill="#15803D"/><rect x="-2" y="60" width="8" height="8" fill="#451A03"/></g>
    <g id="ppD6" shapeRendering="crispEdges"><rect x="-6" y="0" width="12" height="4" fill="#14532D"/><rect x="-2" y="0" width="4" height="4" fill="#166534"/><rect x="-10" y="4" width="20" height="4" fill="#14532D"/><rect x="-6" y="4" width="6" height="4" fill="#166534"/><rect x="-6" y="4" width="4" height="4" fill="#15803D"/><rect x="-14" y="8" width="28" height="4" fill="#14532D"/><rect x="-10" y="8" width="10" height="4" fill="#166534"/><rect x="-10" y="8" width="4" height="4" fill="#15803D"/><rect x="-10" y="12" width="20" height="4" fill="#14532D"/><rect x="-6" y="12" width="6" height="4" fill="#166534"/><rect x="-14" y="16" width="28" height="4" fill="#14532D"/><rect x="-10" y="16" width="10" height="4" fill="#166534"/><rect x="-10" y="16" width="4" height="4" fill="#15803D"/><rect x="-18" y="20" width="36" height="4" fill="#14532D"/><rect x="-14" y="20" width="14" height="4" fill="#166534"/><rect x="-14" y="20" width="4" height="4" fill="#15803D"/><rect x="-14" y="24" width="28" height="4" fill="#14532D"/><rect x="-10" y="24" width="10" height="4" fill="#166534"/><rect x="-18" y="28" width="36" height="4" fill="#14532D"/><rect x="-14" y="28" width="14" height="4" fill="#166534"/><rect x="-14" y="28" width="4" height="4" fill="#15803D"/><rect x="-22" y="32" width="44" height="4" fill="#14532D"/><rect x="-18" y="32" width="18" height="4" fill="#166534"/><rect x="-18" y="32" width="4" height="4" fill="#15803D"/><rect x="-18" y="36" width="36" height="4" fill="#14532D"/><rect x="-14" y="36" width="14" height="4" fill="#166534"/><rect x="-22" y="40" width="44" height="4" fill="#14532D"/><rect x="-18" y="40" width="18" height="4" fill="#166534"/><rect x="-18" y="40" width="4" height="4" fill="#15803D"/><rect x="-26" y="44" width="52" height="4" fill="#14532D"/><rect x="-22" y="44" width="22" height="4" fill="#166534"/><rect x="-22" y="44" width="4" height="4" fill="#15803D"/><rect x="-22" y="48" width="44" height="4" fill="#14532D"/><rect x="-18" y="48" width="18" height="4" fill="#166534"/><rect x="-26" y="52" width="52" height="4" fill="#14532D"/><rect x="-22" y="52" width="22" height="4" fill="#166534"/><rect x="-22" y="52" width="4" height="4" fill="#15803D"/><rect x="-30" y="56" width="60" height="4" fill="#14532D"/><rect x="-26" y="56" width="26" height="4" fill="#166534"/><rect x="-26" y="56" width="4" height="4" fill="#15803D"/><rect x="-26" y="60" width="52" height="4" fill="#14532D"/><rect x="-22" y="60" width="22" height="4" fill="#166534"/><rect x="-30" y="64" width="60" height="4" fill="#14532D"/><rect x="-26" y="64" width="26" height="4" fill="#166534"/><rect x="-26" y="64" width="4" height="4" fill="#15803D"/><rect x="-34" y="68" width="68" height="4" fill="#14532D"/><rect x="-30" y="68" width="30" height="4" fill="#166534"/><rect x="-30" y="68" width="4" height="4" fill="#15803D"/><rect x="-2" y="72" width="8" height="8" fill="#451A03"/></g>
    <g id="ppD7" shapeRendering="crispEdges"><rect x="-6" y="0" width="12" height="4" fill="#14532D"/><rect x="-2" y="0" width="4" height="4" fill="#166534"/><rect x="-10" y="4" width="20" height="4" fill="#14532D"/><rect x="-6" y="4" width="6" height="4" fill="#166534"/><rect x="-6" y="4" width="4" height="4" fill="#15803D"/><rect x="-14" y="8" width="28" height="4" fill="#14532D"/><rect x="-10" y="8" width="10" height="4" fill="#166534"/><rect x="-10" y="8" width="4" height="4" fill="#15803D"/><rect x="-10" y="12" width="20" height="4" fill="#14532D"/><rect x="-6" y="12" width="6" height="4" fill="#166534"/><rect x="-14" y="16" width="28" height="4" fill="#14532D"/><rect x="-10" y="16" width="10" height="4" fill="#166534"/><rect x="-10" y="16" width="4" height="4" fill="#15803D"/><rect x="-18" y="20" width="36" height="4" fill="#14532D"/><rect x="-14" y="20" width="14" height="4" fill="#166534"/><rect x="-14" y="20" width="4" height="4" fill="#15803D"/><rect x="-14" y="24" width="28" height="4" fill="#14532D"/><rect x="-10" y="24" width="10" height="4" fill="#166534"/><rect x="-18" y="28" width="36" height="4" fill="#14532D"/><rect x="-14" y="28" width="14" height="4" fill="#166534"/><rect x="-14" y="28" width="4" height="4" fill="#15803D"/><rect x="-22" y="32" width="44" height="4" fill="#14532D"/><rect x="-18" y="32" width="18" height="4" fill="#166534"/><rect x="-18" y="32" width="4" height="4" fill="#15803D"/><rect x="-18" y="36" width="36" height="4" fill="#14532D"/><rect x="-14" y="36" width="14" height="4" fill="#166534"/><rect x="-22" y="40" width="44" height="4" fill="#14532D"/><rect x="-18" y="40" width="18" height="4" fill="#166534"/><rect x="-18" y="40" width="4" height="4" fill="#15803D"/><rect x="-26" y="44" width="52" height="4" fill="#14532D"/><rect x="-22" y="44" width="22" height="4" fill="#166534"/><rect x="-22" y="44" width="4" height="4" fill="#15803D"/><rect x="-22" y="48" width="44" height="4" fill="#14532D"/><rect x="-18" y="48" width="18" height="4" fill="#166534"/><rect x="-26" y="52" width="52" height="4" fill="#14532D"/><rect x="-22" y="52" width="22" height="4" fill="#166534"/><rect x="-22" y="52" width="4" height="4" fill="#15803D"/><rect x="-30" y="56" width="60" height="4" fill="#14532D"/><rect x="-26" y="56" width="26" height="4" fill="#166534"/><rect x="-26" y="56" width="4" height="4" fill="#15803D"/><rect x="-26" y="60" width="52" height="4" fill="#14532D"/><rect x="-22" y="60" width="22" height="4" fill="#166534"/><rect x="-30" y="64" width="60" height="4" fill="#14532D"/><rect x="-26" y="64" width="26" height="4" fill="#166534"/><rect x="-26" y="64" width="4" height="4" fill="#15803D"/><rect x="-34" y="68" width="68" height="4" fill="#14532D"/><rect x="-30" y="68" width="30" height="4" fill="#166534"/><rect x="-30" y="68" width="4" height="4" fill="#15803D"/><rect x="-30" y="72" width="60" height="4" fill="#14532D"/><rect x="-26" y="72" width="26" height="4" fill="#166534"/><rect x="-34" y="76" width="68" height="4" fill="#14532D"/><rect x="-30" y="76" width="30" height="4" fill="#166534"/><rect x="-30" y="76" width="4" height="4" fill="#15803D"/><rect x="-38" y="80" width="76" height="4" fill="#14532D"/><rect x="-34" y="80" width="34" height="4" fill="#166534"/><rect x="-34" y="80" width="4" height="4" fill="#15803D"/><rect x="-2" y="84" width="8" height="8" fill="#451A03"/></g>
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
    {/*  SUMMIT TORCH (Right Hand Raised High)  */}
    <rect x="736" y="20" width="4" height="24" fill="#58240C"/>
    <rect x="737" y="22" width="2" height="20" fill="#8B4513"/>
    <rect x="733" y="16" width="10" height="5" fill="#D97706"/>
    <rect x="734" y="17" width="8" height="3" fill="#F59E0B"/>
    {/*  Asap api naik: kotak piksel abu memudar  */}
    <g className="torch-smoke" shapeRendering="crispEdges">
      <rect className="smoke smoke--1" x="735" y="-2" width="5" height="5" fill="#94A3B8"/>
      <rect className="smoke smoke--2" x="737" y="-2" width="6" height="6" fill="#CBD5E1"/>
      <rect className="smoke smoke--3" x="734" y="-2" width="4" height="4" fill="#64748B"/>
      <rect className="smoke smoke--4" x="738" y="-2" width="5" height="5" fill="#E2E8F0"/>
      <rect className="smoke smoke--5" x="736" y="-2" width="4" height="4" fill="#94A3B8"/>
    </g>
    {/*  Percikan bara  */}
    <g className="torch-embers" shapeRendering="crispEdges">
      <rect className="ember ember--1" x="733" y="4" width="2" height="2" fill="#FDE047"/>
      <rect className="ember ember--2" x="741" y="4" width="2" height="2" fill="#FB923C"/>
      <rect className="ember ember--3" x="737" y="3" width="1.5" height="1.5" fill="#FFFFFF"/>
    </g>
    {/*  Api menyala berlapis  */}
    <g className="pixel-torch-flame" shapeRendering="crispEdges">
      <g className="flame flame--outer">
        <rect x="733" y="8" width="10" height="9" fill="#DC2626"/>
        <rect x="734" y="4" width="8" height="6" fill="#DC2626"/>
        <rect x="736" y="1" width="4" height="5" fill="#DC2626"/>
      </g>
      <g className="flame flame--mid">
        <rect x="734" y="9" width="8" height="8" fill="#EA580C"/>
        <rect x="735" y="5" width="6" height="6" fill="#EA580C"/>
        <rect x="737" y="2" width="2" height="4" fill="#EA580C"/>
      </g>
      <g className="flame flame--inner">
        <rect x="735" y="10" width="6" height="6" fill="#F59E0B"/>
        <rect x="736" y="7" width="4" height="5" fill="#FDE047"/>
      </g>
      <g className="flame flame--core">
        <rect x="737" y="11" width="2" height="5" fill="#FFFFFF"/>
      </g>
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

  {/*  ================= 4. HUTAN PINUS PIKSEL RAPAT (TINGGI BERBEDA) =================  */}
  <use href="#ppD4" transform="translate(-4,194)"/>
  <use href="#ppD6" transform="translate(16,170)"/>
  <use href="#ppD4" transform="translate(36,194)"/>
  <use href="#ppD6" transform="translate(60,170)"/>
  <use href="#ppD4" transform="translate(84,194)"/>
  <use href="#ppD7" transform="translate(104,158)"/>
  <use href="#ppD4" transform="translate(136,194)"/>
  <use href="#ppD6" transform="translate(144,170)"/>
  <use href="#ppD5" transform="translate(168,182)"/>
  <use href="#ppD5" transform="translate(196,182)"/>
  <use href="#ppD6" transform="translate(208,170)"/>
  <use href="#ppD6" transform="translate(224,170)"/>
  <use href="#ppD5" transform="translate(256,182)"/>
  <use href="#ppD7" transform="translate(268,158)"/>
  <use href="#ppD6" transform="translate(292,170)"/>
  <use href="#ppD5" transform="translate(312,182)"/>
  <use href="#ppD5" transform="translate(332,182)"/>
  <use href="#ppD6" transform="translate(348,170)"/>
  <use href="#ppD6" transform="translate(372,170)"/>
  <use href="#ppD6" transform="translate(392,170)"/>
  <use href="#ppD6" transform="translate(412,170)"/>
  <use href="#ppD5" transform="translate(432,182)"/>
  <use href="#ppD7" transform="translate(448,158)"/>
  <use href="#ppD4" transform="translate(472,194)"/>
  <use href="#ppD5" transform="translate(492,182)"/>
  <use href="#ppD5" transform="translate(512,182)"/>
  <use href="#ppD6" transform="translate(532,170)"/>
  <use href="#ppD7" transform="translate(544,158)"/>
  <use href="#ppD6" transform="translate(564,170)"/>
  <use href="#ppD4" transform="translate(592,194)"/>
  <use href="#ppD5" transform="translate(616,182)"/>
  <use href="#ppD7" transform="translate(640,158)"/>
  <use href="#ppD6" transform="translate(656,170)"/>
  <use href="#ppD6" transform="translate(684,170)"/>
  <use href="#ppD5" transform="translate(700,182)"/>
  <use href="#ppD6" transform="translate(720,170)"/>
  <use href="#ppD6" transform="translate(736,170)"/>
  <use href="#ppD5" transform="translate(764,182)"/>
  <use href="#ppD6" transform="translate(788,170)"/>
  <use href="#ppD5" transform="translate(812,182)"/>
  <use href="#ppD4" transform="translate(836,194)"/>
  <use href="#ppD6" transform="translate(856,170)"/>
  <use href="#ppD7" transform="translate(876,158)"/>
  <use href="#ppD7" transform="translate(896,158)"/>
  <use href="#ppD7" transform="translate(920,158)"/>
  <use href="#ppD6" transform="translate(940,170)"/>
  <use href="#ppD6" transform="translate(968,170)"/>
  <use href="#ppD5" transform="translate(988,182)"/>
  <use href="#ppD5" transform="translate(1012,182)"/>
  <use href="#ppD4" transform="translate(1028,194)"/>
  <use href="#ppD5" transform="translate(1056,182)"/>
  <use href="#ppD6" transform="translate(1076,170)"/>
  <use href="#ppD6" transform="translate(1104,170)"/>
  <use href="#ppD5" transform="translate(1120,182)"/>
  <use href="#ppD6" transform="translate(1144,170)"/>
  <use href="#ppD5" transform="translate(1172,182)"/>
  <use href="#ppD7" transform="translate(1196,158)"/>
  <use href="#ppD5" transform="translate(1216,182)"/>
  <use href="#ppD7" transform="translate(1240,158)"/>
  <use href="#ppD6" transform="translate(1252,170)"/>
  <use href="#ppD6" transform="translate(1272,170)"/>
  <use href="#ppD4" transform="translate(1304,194)"/>
  <use href="#ppD5" transform="translate(1320,182)"/>
  <use href="#ppD4" transform="translate(1344,194)"/>
  <use href="#ppD5" transform="translate(1368,182)"/>
  <use href="#ppD4" transform="translate(1392,194)"/>
  <use href="#ppD4" transform="translate(1412,194)"/>
  <use href="#ppD6" transform="translate(1432,170)"/>
  <use href="#ppL4" transform="translate(16,194)"/>
  <use href="#ppL3" transform="translate(32,206)"/>
  <use href="#ppL4" transform="translate(68,194)"/>
  <use href="#ppL2" transform="translate(92,218)"/>
  <use href="#ppL2" transform="translate(116,218)"/>
  <use href="#ppL2" transform="translate(140,218)"/>
  <use href="#ppL3" transform="translate(168,206)"/>
  <use href="#ppL4" transform="translate(192,194)"/>
  <use href="#ppL5" transform="translate(212,182)"/>
  <use href="#ppL3" transform="translate(240,206)"/>
  <use href="#ppL2" transform="translate(268,218)"/>
  <use href="#ppL6" transform="translate(284,170)"/>
  <use href="#ppL5" transform="translate(320,182)"/>
  <use href="#ppL4" transform="translate(340,194)"/>
  <use href="#ppL3" transform="translate(372,206)"/>
  <use href="#ppL3" transform="translate(392,206)"/>
  <use href="#ppL3" transform="translate(420,206)"/>
  <use href="#ppL3" transform="translate(444,206)"/>
  <use href="#ppL4" transform="translate(468,194)"/>
  <use href="#ppL4" transform="translate(496,194)"/>
  <use href="#ppL3" transform="translate(512,206)"/>
  <use href="#ppL5" transform="translate(536,182)"/>
  <use href="#ppL3" transform="translate(556,206)"/>
  <use href="#ppL4" transform="translate(584,194)"/>
  <use href="#ppL3" transform="translate(616,206)"/>
  <use href="#ppL3" transform="translate(644,206)"/>
  <use href="#ppL5" transform="translate(664,182)"/>
  <use href="#ppL6" transform="translate(700,170)"/>
  <use href="#ppL4" transform="translate(720,194)"/>
  <use href="#ppL4" transform="translate(752,194)"/>
  <use href="#ppL4" transform="translate(772,194)"/>
  <use href="#ppL3" transform="translate(796,206)"/>
  <use href="#ppL3" transform="translate(828,206)"/>
  <use href="#ppL4" transform="translate(856,194)"/>
  <use href="#ppL3" transform="translate(892,206)"/>
  <use href="#ppL2" transform="translate(916,218)"/>
  <use href="#ppL6" transform="translate(948,170)"/>
  <use href="#ppL5" transform="translate(968,182)"/>
  <use href="#ppL2" transform="translate(1004,218)"/>
  <use href="#ppL4" transform="translate(1024,194)"/>
  <use href="#ppL3" transform="translate(1048,206)"/>
  <use href="#ppL5" transform="translate(1076,182)"/>
  <use href="#ppL4" transform="translate(1104,194)"/>
  <use href="#ppL4" transform="translate(1124,194)"/>
  <use href="#ppL4" transform="translate(1156,194)"/>
  <use href="#ppL6" transform="translate(1180,170)"/>
  <use href="#ppL3" transform="translate(1220,206)"/>
  <use href="#ppL4" transform="translate(1244,194)"/>
  <use href="#ppL3" transform="translate(1268,206)"/>
  <use href="#ppL3" transform="translate(1296,206)"/>
  <use href="#ppL3" transform="translate(1316,206)"/>
  <use href="#ppL4" transform="translate(1344,194)"/>
  <use href="#ppL3" transform="translate(1376,206)"/>
  <use href="#ppL2" transform="translate(1392,218)"/>
  <use href="#ppL4" transform="translate(1424,194)"/>
  <use href="#ppL3" transform="translate(1444,206)"/>

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

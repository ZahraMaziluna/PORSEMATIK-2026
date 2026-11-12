import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Schedule from "@/components/Schedule";
import EventsHighlight from "@/components/EventsHighlight";
import VibeItSection from "@/components/VibeItSection";
import ConnectSection from "@/components/ConnectSection";
import Competitions from "@/components/Competitions";
import Leaderboard from "@/components/Leaderboard";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import SoundFloatingButton from "@/components/SoundFloatingButton";
import PixelDivider from "@/components/PixelDivider";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PixelDivider color="#0B0C10" background="#22C55E" />
        <PixelDivider color="#FFFDF9" background="#0B0C10" />

        <About />
        <PixelDivider color="#F0FDF4" background="#FFFDF9" />

        <Schedule />
        <PixelDivider color="#FAF8F5" background="#FFFDF9" />

        <EventsHighlight />
        <PixelDivider color="#F5F3FF" background="#FAF8F5" />

        <VibeItSection />
        <PixelDivider color="#FFFBEB" background="#F5F3FF" />

        <ConnectSection />
        <PixelDivider color="#F8FAFC" background="#FFFBEB" />

        <Competitions />
        <PixelDivider color="#FEFCE8" background="#F8FAFC" />

        <Leaderboard />
        <PixelDivider color="#FFFDF9" background="#FEFCE8" />

        <Faq />
        <PixelDivider color="#1E293B" background="#FFFDF9" />
      </main>
      <Footer />
      <SoundFloatingButton />
    </>
  );
}

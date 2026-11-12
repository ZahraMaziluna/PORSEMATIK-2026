import React from "react";
import Hero from "@/components/home/Hero";
import HomeTicker from "@/components/home/HomeTicker";
import About from "@/components/home/About";
import Roadmap from "@/components/home/Roadmap";
import Gallery from "@/components/home/Gallery";
import VibeItHighlight from "@/components/home/VibeItHighlight";
import ConnectHighlight from "@/components/home/ConnectHighlight";
import Registration from "@/components/home/Registration";
import Sponsors from "@/components/home/Sponsors";
import Faq from "@/components/sections/Faq";
import PixelDivider from "@/components/layout/PixelDivider";
import RoadDivider from "@/components/layout/RoadDivider";

/* Pergantian section: gigi piksel gelap, jalan dengan pendaki, lalu gigi piksel ke warna section berikutnya. */
function RoadBreak({ from, to, variant }: { from: string; to: string; variant: "a" | "b" | "c" }) {
  return (
    <>
      <PixelDivider color="#1E293B" background={from} />
      <RoadDivider variant={variant} />
      <PixelDivider color={to} background="#1E293B" />
    </>
  );
}

export default function HomePage() {
  return (
    <main id="main" className="page page--home">
      <Hero />
      <PixelDivider color="#1E293B" background="#22C55E" />
      <HomeTicker />
      <PixelDivider color="#FFFDF9" background="#1E293B" />

      <About />
      <PixelDivider color="#1E293B" background="#FFFDF9" />
      <div className="road-strip" aria-hidden="true" />
      <PixelDivider color="#F0FDF4" background="#1E293B" />

      <Roadmap />
      <PixelDivider color="#87CEEB" background="#F0FDF4" />

      <Gallery />
      <PixelDivider color="#F5F3FF" background="#87CEEB" />

      <VibeItHighlight />
      <PixelDivider color="#FFFBEB" background="#F5F3FF" />

      <ConnectHighlight />
      <RoadBreak from="#FFFBEB" to="#FFFDF9" variant="b" />

      <Registration />
      <RoadBreak from="#FFFDF9" to="#EFF6FF" variant="a" />

      <Sponsors />
      <PixelDivider color="#1E293B" background="#EFF6FF" />

      <Faq />
      <PixelDivider color="#FFFDF9" background="#1E293B" />
    </main>
  );
}

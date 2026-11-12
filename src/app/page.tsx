import React from "react";
import Hero from "@/components/Hero";
import HomeTicker from "@/components/HomeTicker";
import About from "@/components/About";
import Roadmap from "@/components/Roadmap";
import Gallery from "@/components/Gallery";
import Registration from "@/components/Registration";
import Faq from "@/components/Faq";
import PixelDivider from "@/components/PixelDivider";

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
      <PixelDivider color="#FFFDF9" background="#87CEEB" />

      <Registration />
      <PixelDivider color="#1E293B" background="#FFFDF9" />

      <Faq />
      <PixelDivider color="#FFFDF9" background="#1E293B" />
    </main>
  );
}

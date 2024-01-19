import React from "react";
import VideoBack from "../components/VideoBack";
import NavbarMain from "../components/NavbarMain";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
import Footer from "../components/Footer";
import LogoHero from "../components/LogoHero";
import StaffHero from "../components/StaffHero";
import LocationHero from "../components/LocationHero";
import CurrentEvent from "../components/CurrentEvent";

function HomePage() {
  return (
    <>
      <div className="font-display">
        <NavbarMain />
        <VideoBack />
        <Hero2 />
        <Hero />
        <LogoHero />
        <StaffHero />
        <CurrentEvent />
        <LocationHero />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;

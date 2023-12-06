import React from "react";
import NavbarMain from "../components/NavbarMain";
import TPhero from "../components/TPhero";
import EricHero from "../components/EricHero";
import DanHero from "../components/DanHero";
import Wonjun from "../components/Wonjun";
import Footer from "../components/Footer";

function TrainersPage() {
  return (
    <>
      <NavbarMain />
      <TPhero />

      <div id="eric">
        <EricHero />
      </div>
      <div id="dan">
        <DanHero />
      </div>
      <div id="wonjun">
        <Wonjun />
      </div>

      <Footer />
    </>
  );
}

export default TrainersPage;

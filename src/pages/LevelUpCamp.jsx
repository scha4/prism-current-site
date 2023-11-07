import React from "react";
import NavbarMain from "../components/NavbarMain";
import Footer from "../components/Footer";
import LevelUpCampPics from "../components/LevelUpCampPics";

function LevelUpCamp() {
  return (
    <>
      <div className="bg-black">
        <NavbarMain />
        <LevelUpCampPics />
        <Footer />
      </div>
    </>
  );
}

export default LevelUpCamp;

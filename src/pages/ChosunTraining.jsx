import React from "react";
import NavbarMain from "../components/NavbarMain";
import Footer from "../components/Footer";
import ChosunPics from "../components/ChosunPics";

function ChosunTraining() {
  return (
    <>
      <div className="bg-black">
        <NavbarMain />
        <ChosunPics />
        <Footer />
      </div>
    </>
  );
}

export default ChosunTraining;

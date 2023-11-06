import React from "react";
import NavbarMain from "../components/NavbarMain";
import Footer from "../components/Footer";
import PECPrismPhotos from "../components/PECPrismPhotos";
function PEC() {
  return (
    <>
      <div className="bg-black">
        <NavbarMain />
        <PECPrismPhotos />
        <Footer />
      </div>
    </>
  );
}

export default PEC;

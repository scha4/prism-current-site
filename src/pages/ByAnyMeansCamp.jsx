import React from "react";
import NavbarMain from "../components/NavbarMain";
import Footer from "../components/Footer";
import ByAnyMeansPhotos from "../components/ByAnyMeansPhotos";

function ByAnyMeansCamp() {
  return (
    <>
      <div className="bg-black">
        <NavbarMain />
        <ByAnyMeansPhotos />
        <Footer />
      </div>
    </>
  );
}

export default ByAnyMeansCamp;

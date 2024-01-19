import React,{useState} from "react";
import NavbarMain from "../components/NavbarMain";
import Footer from "../components/Footer";
import ByAnyMeansPhotos from "../components/ByAnyMeansPhotos";
import ImageModal from "../components/ImageModal";

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

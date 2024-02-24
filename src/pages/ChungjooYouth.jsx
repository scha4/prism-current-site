import React from "react";
import NavbarMain from "../components/NavbarMain";
import Footer from "../components/Footer";
import ChungjooYouthPics from "../components/ChungjooYouthPics";
function ChungjooYouth() {
  return (
    <>
      <div className="bg-black">
        <NavbarMain />
        <ChungjooYouthPics />
        <Footer />
      </div>
    </>
  );
}

export default ChungjooYouth;

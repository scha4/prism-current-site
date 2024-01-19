import React from "react";
import CommonImageGrid from "./CommonImageGrid.jsx";

function PECPrismPhotos() {
  const imgArr = [
    "PECCAMPIMAGES/PEC1-min.JPG",
    "PECCAMPIMAGES/PEC3-min.JPG",
    "PECCAMPIMAGES/PEC2-min.JPG",
    "PECCAMPIMAGES/PEC4-min.JPG",
    "PECCAMPIMAGES/PEC5-min.JPG",
    "PECCAMPIMAGES/PEC6-min.JPG",
    "PECCAMPIMAGES/PEC8-min.JPG",
    "PECCAMPIMAGES/PEC7-min.JPG",
    "PECCAMPIMAGES/PEC9-min.JPG"
  ]

  return <CommonImageGrid imgArr={imgArr} />;

}

export default PECPrismPhotos;

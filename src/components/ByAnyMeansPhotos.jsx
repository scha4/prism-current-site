import React from "react";
import CommonImageGrid from "./CommonImageGrid.jsx";

function ByAnyMeansPhotos() {
  const imgArr = [
    "byAnyMeans/BAM9.JPG",
    "byAnyMeans/BAM13.JPG",
    "byAnyMeans/BAM16.JPG",
    "byAnyMeans/BAM14.JPG",
    "byAnyMeans/BAM10.JPG",
    "byAnyMeans/BAM15.JPG",
    "byAnyMeans/BAM1.JPG",
    "byAnyMeans/BAM2.JPG",
    "byAnyMeans/BAM3.JPG",
    "byAnyMeans/BAM4.JPG",
    "byAnyMeans/BAM5.JPG",
    "byAnyMeans/BAM6.JPG"
  ]
 
  return <CommonImageGrid imgArr={imgArr} />;

}

export default ByAnyMeansPhotos;

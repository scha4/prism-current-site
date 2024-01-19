import React from "react";
import CommonImageGrid from "./CommonImageGrid.jsx";

function ChosunPics() {
   const imgArr = [
    "chosunCamp/chosun1.JPG",
    "chosunCamp/chosun5.JPG",
    "chosunCamp/chosun3.JPG",
    "chosunCamp/chosun2.JPG",
    "chosunCamp/chosun6.JPG",
    "chosunCamp/chosun7.JPG",
    "chosunCamp/chosun8.JPG",
    "chosunCamp/chosun9.JPG",
    "chosunCamp/chosun10.JPG"
  ]

  return <CommonImageGrid imgArr={imgArr} />;
}

export default ChosunPics;

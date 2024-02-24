import React from "react";
import CommonImageGrid from "./CommonImageGrid.jsx";

function LevelUpCampPics() {
  const imgArr = [
    "levelCampPictures/levelUp1.JPG",
    "levelCampPictures/levelUp2.JPG",
    "levelCampPictures/levelUp13.JPG",
    "levelCampPictures/levelUp4.JPG",
    "levelCampPictures/levelUp5.JPG",
    "levelCampPictures/levelUp6.JPG",
    "levelCampPictures/levelUp7.JPG",
    "levelCampPictures/levelUp8.JPG",
    "levelCampPictures/levelUp12.JPG"
  ]

  return <CommonImageGrid imgArr={imgArr} />;
}

export default LevelUpCampPics;

import React from "react";
import { Typography, Button } from "@material-tailwind/react";

function AboutHero() {
  return (
    <>
      <div className="relative ">
        <img
          alt="basketball"
          className="w-full brightness-75"
          src="./prismcamp2023-min.JPG"
        />

        <figcaption className="absolute text-5xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="text-center  ">
            <Typography className="lg:text-6xl text-3xl font-bold text-white font-display lg:mb-32 mb-12">
              WHO WE ARE
            </Typography>
          </div>
        </figcaption>
      </div>
    </>
  );
}

export default AboutHero;

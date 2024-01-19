import React from "react";
import { Typography, Button } from "@material-tailwind/react";

function SignUpHero() {
  return (
    <>
      <div className="relative  ">
        <img
          alt="basketball"
          className="w-full brightness-50 "
          src="./trainingpic1.jpg"
        />

        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="w-full md:ml-14 ml-8">
            <Typography
              variant="lead"
              color="white"
              className="md:text-3xl font-bold text-md md:mt-2 italic font-display"
            >
              PRISM HOOPS
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="md:text-4xl font-bold text-lg md:mt-2 font-display"
            >
              PERSONALIZED TRAINING
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpHero;

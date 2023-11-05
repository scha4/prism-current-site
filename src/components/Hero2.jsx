import React from "react";
import { Typography, Button } from "@material-tailwind/react";
function Hero2() {
  return (
    <>
      <div className="lg:py-20 py-8 bg-slate-100 bg-black ">
        <div className="  md:grid grid-cols-2 h-auto   ">
          <div className=" mx-auto max-w-screen-xl col-span-1  flex flex-col md:items-left justify-center space-y-7 ml-5 mt-6 text-white">
            <h1 className="text-2xl font-bold">BUILD YOUR SKILLS</h1>
            <h1 className="text-xl font-normal">
              Our Labs are designed to give players at least two times each week
              to really rep out and build their skills sets over time to have
              more freedom to physically perform in their games.
            </h1>
            <h1 className="text-xl font-normal">
              Overall, we will cover a variety of different skills throughout
              that focus heavily on body positions, shooting, footwork, ball
              handling, and finishing.
            </h1>
          </div>

          <div className=" lg:flex items-center justify-center pt-10 pb-10 ">
            <img
              src="./campPic1.jpg"
              className="  max-h-96 rounded-lg max-w-full "
              alt="leaderImage"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero2;

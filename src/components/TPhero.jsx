import React from "react";
import { Typography, Button } from "@material-tailwind/react";
function TPhero() {
  return (
    <>
      <div className="lg:grid grid-cols-2 flex-col py-10 gap-3 bg-black font-display   ">
        {" "}
        <div className="col-start-1 flex flex-col gap-5 items-center justify-center">
          <h1 className="text-4xl font-semibold italic text-white">
            #PRISMFAM
          </h1>
          <h1 className="lg:text-2xl font-bold  text-center w-3/4 text-sm text-white">
            PRISM has the most accomplished training team in the country. As
            successful players and coaches, our training staff uses their
            experiences to develop the next generation.
          </h1>
        </div>
        <div className=" lg:col-start-2 lg:flex item-center justify-center mb-10 flex py-4 ">
          <img src="/testPic3.JPG" className="lg:w-full px-4  " />
        </div>
      </div>
      <div className="bg-black text-white  text-center lg:h-32  h-20 italic flex items-center justify-center text-3xl lg:text-5xl border-2 border-white ">
        <div className="lg:ml-5 lg:mb-5 ml-3 mb-3 mt-2 font-display">
          Our Team
        </div>
      </div>
    </>
  );
}

export default TPhero;

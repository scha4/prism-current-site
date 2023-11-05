import React from "react";
import { Typography, Button } from "@material-tailwind/react";

function Camp() {
  return (
    <>
      <div className="border-b border-gray-500 my-4 font-display"></div>
      <div className="lg:py-20 py-8 bg-slate-100 font-display">
        <div className="md:grid grid-cols-2 h-auto">
          <div className="mx-auto max-w-screen-xl col-span-1 flex flex-col md:items-left justify-center space-y-7  mt-6">
            <h1 className="text-2xl font-bold lg:ml-5 text-center ">
              By Any Means Basketball X Prism Hoops Busan
            </h1>

            <video className="h-full w-full rounded-lg  md:hidden" controls>
              <source src="./prismTrainingVideo.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div>
              <ul className="list-disc list-inside text-lg lg:ml-5 mx-2">
                <li>Program : By Any Means Pro Work Out</li>
                <li>Date : October 7th Saturday</li>
                <li>Location : High Sports Center</li>
                <li>Sign Up Date : 9.11 ~ 10.1</li>
                <li>Fee : 70,000 won</li>
              </ul>
            </div>
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/1AcRyRfjNeLqrUSam0pGJvckNSN-4wX5eOpl5fcDz6R0/viewform?edit_requested=true"
            >
              <div className="flex items-center justify-center ">
                <Button className=" bg-black lg:w-1/3  font-display text-lg ">
                  Sign up Now
                </Button>
              </div>
            </a>
          </div>

          <div className="hidden md:flex items-center justify-center pt-10 pb-10">
            <video className="lg:w-3/4 max-w-96 rounded-lg" controls>
              <source src="./prismTrainingVideo.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </>
  );
}

export default Camp;

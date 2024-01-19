import React from "react";

function AboutUs() {
  return (
    <>
      <div className="py-12 font-display 2xl:px-52 xl:px-40">
        <div className="flex items-center justify-center">
          <img src="./prismLogo.png" className="w-48 h-48 " />
        </div>
        <div className="mx-8 text-lg">
          <div className="font-bold font-display">What is Prism?</div>
          <div className="mt-2 font-display ">
            Prism Academy is a consulting firm that uses basketball and sports
            in general as a tool for life. We believe that through sports you
            can learn 5 essential tools for success and confidence. Fostering
            growth and vision and instilling a passion that will endure! We at
            prism believe the basketball/sports is the greatest metaphor for
            life, using this as our motto, our goal is to give back what
            basketball and sports has given us!
          </div>
        </div>
        <div
          className="flex flex-col py-20 

        divide-y divide-solid divide-black lg:mx-10 mx-5"
        >
          <div className="font-normal lg:text-3xl mb-5 text-center italic text-2xl">
            5 Essential tools for success
          </div>
          <div className="py-5  ">
            <div className="font-bold lg:text-3xl ">Growth</div>
          </div>
          <div className="py-5  ">
            <div className="font-bold lg:text-3xl">Preparation </div>
          </div>
          <div className="py-5  ">
            <div className="font-bold lg:text-3xl">Effort</div>
          </div>
          <div className="py-5  ">
            <div className="font-bold lg:text-3xl">Tension</div>
          </div>
          <div className="py-5  ">
            <div className="font-bold lg:text-3xl">Balance</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;

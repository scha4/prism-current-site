import React from "react";

function CurrentEvent() {
  return (
    <>
      <div className="flex flex-col items-center  bg-black  text-white 2xl:px-72 xl:px-16">
        <div className="lg:text-5xl mt-8 font-bold mb-10  text-3xl text-white ">
          EVENTS
        </div>
        <div className="grid grid-cols-2 lg:mx-5 lg:gap-3 gap-2 mx-2 ">
          <div className="flex flex-col mt-3 ">
            <a href="/byAnyMeans">
              <img src="prismcamp2023-min.JPG" className="max-w-full" />

              <div className="mt-2 lg:text-2xl text-xs font-bold text-white">
                BY ANY MEANS X PRISM CAMP
              </div>
            </a>
            <div className="lg:text-2xl text-xs text-white">
              OCTOBER 6-8, 2023
            </div>
          </div>
          <div className="flex flex-col mt-3">
            <a href="/levelUp">
              <img src="LEVELUPCAMP-min.JPG" className="max-w-full font-bold" />
              <div className="mt-2 lg:text-2xl text-xs font-bold text-white">
                LEVEL UP CAMP X DREAM TEAM
              </div>
            </a>
            <div className="lg:text-2xl text-xs text-white">
              JANUARY 28-29, 2023
            </div>
          </div>
        </div>
        {/* Picture collage */}
        <div className="grid grid-cols-2 lg:gap-3 gap-2 lg:mx-5 mx-2">
          <div className="grid-rows-2  ">
            <div className="row-start-1 ">
              <a href="/ChosunTraining">
                <img src="CHOSUNCAMP2-min.JPG" className="max-w-full " />
                <div className="mt-2 lg:text-2xl text-xs font-bold text-white">
                  CHOSUN UNIVERSITY TEAM TRAINING
                </div>
              </a>
              <div className="lg:text-2xl text-xs text-white">
                DECEMBER 9, 2022
              </div>
            </div>
            <div className=" row-start-2">
              <a href="/PEC">
                <img src="PECCAMP-min.JPG" className="max-w-full  " />
                <div className="mt-2 lg:text-2xl text-xs font-bold text-white">
                  PEC X PRISM
                </div>
              </a>
              <div className="lg:text-2xl text-xs">DECEMBER 3, 2022</div>
            </div>
          </div>
          <div className=" col-start-2 col-span-1  ">
            <a href="/ChungjooYouth">
              <img src="CHUNGJOOTOURNAMENT-min.JPG" className=" max-w-full" />
              <div className="mt-2 lg:text-2xl text-xs font-bold">
                CHUNGJOO YOUTH BASKETBALL TOURNAMENT
              </div>
            </a>
            <div className="lg:text-2xl text-xs">JULY 23-31, 2022</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentEvent;

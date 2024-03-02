import React from "react";

function LocationHero() {
  return (
    <>
      <div className="lg:grid grid-cols-2 flex-col py-20 gap-3 bg-black 2xl:px-44">
        <div className="col-start-1 flex flex-col gap-5 items-center justify-center text-white">
          <h1 className="text-3xl font-semibold">LOCATIONS</h1>
          <div className="text-center">
            <h1 className="lg:text-2xl font-bold text-2xl">SEOUL LOCATION:</h1>
            <h1 className="lg:text-xl font-bold text-xl mt-2">
              Higher Gym Basketball
            </h1>
            <h1 className="lg:text-2xl font-bold text-2xl">
              서대문구 연희동 81-14
            </h1>
          </div>
          <div className="text-center">
            <h1 className="lg:text-2xl font-bold text-2xl">
              SEATTLE LOCATION:
            </h1>
            <h1 className="lg:text-xl font-bold text-xl mt-2">
              Bothhell High School
            </h1>
            <h1 className="lg:text-2xl font-bold text-2xl ">
              9130 NE 180th St,
            </h1>
            <h1 className="lg:text-2xl font-bold text-2xl ">
              Bothell, WA 98011
            </h1>
          </div>
        </div>
        <div className="hidden col-start-2 lg:flex item-center justify-center mb-10 ">
          <img
            src="./prismpic5.jpg"
            alt="prismpic"
            className="lg:w-3/4  md:max-w-[70%] rounded "
          />
        </div>
      </div>
    </>
  );
}

export default LocationHero;

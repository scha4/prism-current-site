import React from "react";

function LocationHero() {
  return (
    <>
      <div className="lg:grid grid-cols-2 flex-col py-20 gap-3 bg-black">
        <div className="col-start-1 flex flex-col gap-5 items-center justify-center text-white">
          <h1 className="text-2xl font-semibold">LOCATIONS</h1>
          <h1 className="lg:text-xl font-bold text-xl">SEOUL LOCATION:</h1>
          <h1 className="lg:text-xl font-bold text-xl">
            Higher Gym Basketball
          </h1>
          <h1 className="lg:text-xl font-bold text-xl">
            서대문구 연희동 81-14
          </h1>
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

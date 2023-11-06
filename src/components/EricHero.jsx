import React from "react";
import { Typography } from "@material-tailwind/react";
import { Link as ScrollLink, Element } from "react-scroll";
import { AiOutlineInstagram, AiFillInstagram } from "react-icons/ai";
function EricHero() {
  return (
    <>
      <div
        id="eric"
        className="lg:grid grid-cols-2 flex-col py-10 gap-3 font-display "
      >
        {" "}
        <div className="lg:col-start-1 flex flex-col gap-5 items-center justify-center ">
          <h1 className="text-3xl font-semibold text-blue-700">COACH ERIC</h1>
          <h1 className="lg:text-2xl  text-center w-3/4 text-sm">
            <div className="hidden lg:flex lg:flex-col text-lg  ">
              {" "}
              <h4 className="font-bold">PRO CAREER</h4>
              <p>17 PRO PLAYER (USA, S.AMERICA, EUROPE, ASIA)</p>
              <h4 className="font-bold mt-2">NATIONAL TEAM</h4>
              <p>KOREA MENS 5v5 NAT'L TEAM</p>
              <p>GUANGZHO ASIA GAMES SILVER MEDAL</p>
              <p>FIBA 3X3 NAT'L TEAM</p>
              <p>2X FIBA 3x3 WORLD CUP</p>
              <p>TOKYO OLYMPIC QUALIFIERS</p>
              <h4 className="font-bold mt-3">COACHING</h4>
              <div className="text-lg ">
                <p>ROMANIAN NATIONAL TEAM</p>

                <p>2022 EURO CUP QUALIFIERS</p>
                <p>2022 ANTWERP WORLD CUP</p>
                <p>CHOSUN UNIVERSITY</p>
              </div>{" "}
              <div className="flex flex-col place-items-center">
                <h4 className="font-bold mt-3">SOCIAL</h4>
                <a target="_blank" href="https://www.instagram.com/sj_lee14/">
                  <AiFillInstagram size={50} className="hover:fill-blue-500" />
                </a>
              </div>
            </div>
          </h1>
        </div>
        <div className=" lg:col-start-2 lg:flex item-center justify-center mb-10 flex py-4 ">
          <img src="/ericPic4.jpg" className="lg:w-full px-4  " />
        </div>
        <div className="lg:hidden flex flex-col items-center justify-center text-lg  ">
          <h4 className="font-bold">PRO CAREER</h4>
          <p className="text-center">
            17 PRO PLAYER (USA, S.AMERICA, EUROPE, ASIA)
          </p>
          <h4 className="font-bold mt-2">NATIONAL TEAM</h4>
          <p>KOREA MENS 5v5 NAT'L TEAM</p>
          <p>GUANGZHO ASIA GAMES SILVER MEDAL</p>
          <p>FIBA 3X3 NAT'l TEAM</p>
          <p>2X FIBA 3x3 WORLD CUP</p>
          <p>TOKYO OLYMPIC QUALIFIERS</p>
          <h4 className="font-bold mt-3">COACHING</h4>
          <div className="text-lg text-center ">
            <p>ROMANIAN NATIONAL TEAM</p>
            <p>2022 EURO CUP QUALIFIERS</p>
            <p>2022 ANTWERP WORLD CUP</p>
            <p>CHOSUN UNIVERSITY</p>
          </div>{" "}
          <div className="flex flex-col place-items-center">
            <h4 className="font-bold mt-3">SOCIAL</h4>
            <a href="https://www.instagram.com/sj_lee14/">
              <AiFillInstagram size={50} className="hover:fill-blue-500" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default EricHero;

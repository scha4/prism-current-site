import React from "react";
import {
  AiOutlineInstagram,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { SiIndeed } from "react-icons/si";

function DanHero() {
  return (
    <>
      <div className="border-b border-gray-500 my-4 font-display"></div>
      <div className="lg:grid grid-cols-2 flex-col py-10 gap-3 font-display 2xl:px-52">
        <h1 className="text-3xl font-semibold text-blue-700 text-center lg:hidden">
          COACH DAN
        </h1>
        <div className=" lg:col-start-1 lg:flex item-center justify-center mb-10 flex py-4 ">
          <img src="/danPic3.jpg" className="lg:w-full px-4   2xl:ml-32 xl:ml-32" />
        </div>{" "}
        <div className="col-start-2 flex flex-col gap-5 items-center justify-center ">
          <h1 className="text-3xl font-semibold text-blue-700 hidden lg:flex">
            COACH DAN
          </h1>
          <h1 className="lg:text-lg  text-center w-3/4 text-lg">
            <h4 className="font-bold">PRO CAREER</h4>
            <div className="text-lg">
              <p>11 PRO PLAYER (EUROPE & ASIA)</p>
              <p>7X KBL ALL-STAR</p>
              <h4 className="font-bold mt-2">NATIONAL TEAM</h4>
              <p>2X KOREA MENS 5v5 NAT'L TEAM</p>

              <p>FIBA 3X3 NAT'L TEAM</p>
              <p>2X FIBA 3X3 WORLD CUP</p>
              <p>2020 TOKYO OLYMPIC QUALIFIERS</p>
              <p>FIBA 3X3 KOREA RANKING #1 [2019-2021]</p>
            </div>
            <h4 className="font-bold mt-3">COACHING</h4>
            <div className="text-lg ">
              <p>BFL PREP ACADEMY</p>
              <p>BOTHEL HIGH SCHOOL VARSITY</p>
            </div>
            <div className="flex flex-col place-items-center">
              <h4 className="font-bold mt-3 ">SOCIAL</h4>
              <div className="flex">
                <a target="_blank" href="https://www.instagram.com/dj_lee40/">
                  <AiFillInstagram size={50} className="hover:fill-blue-500" />{" "}
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/daniel-sandrin-365a571ab"
                >
                  <AiFillLinkedin size={50} className="hover:fill-blue-500" />
                </a>
                <a
                  target="_blank"
                  href="https://profile.indeed.com/p/daniels-882rhp7"
                >
                  <SiIndeed size={45} className="hover:fill-blue-500" />
                </a>
              </div>
            </div>
          </h1>
        </div>
      </div>
    </>
  );
}

export default DanHero;

import React from "react";
import {
  AiOutlineInstagram,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
function Wonjun() {
  return (
    <>
      <div className="border-b border-gray-500 my-4"></div>
      <div className="lg:grid grid-cols-2 flex-col py-10 gap-3 font-display  2xl:px-52 ">
        {" "}
        <div className="col-start-1 flex flex-col gap-5 items-center justify-center ">
          <h1 className="text-3xl font-semibold text-blue-700">
            COACH WONJUN{" "}
          </h1>
          <h1 className="hidden lg:flex lg:flex-col text-lg text-center ">
            <h4 className="font-bold">PRO CAREER</h4>
            <div className="text-lg">
              <p>FIBA 3X3 PRO PLAYER</p>

              <p>KOREA 3X3 LEAGUE CHAMPION [2021]</p>
              <p>JAPAN EXE LEAGUE PLAYER [2019]</p>
            </div>
            <h4 className="font-bold mt-3">COACHING</h4>
            <div className="text-lg ">
              <p>LAKE WASHINGTON HS VARSITY BOYS [2014]</p>
              <p>SFS HS VARSITY BOYS [2018]</p>
              <p>PEC SPORTS ACADEMY SUWON</p>
              <p>PRISM ACADEMY</p>
            </div>
            <div className="flex flex-col place-items-center">
              <h4 className="font-bold mt-3">SOCIAL</h4>
              <div className="flex item-center justify-center">
                <a target="_blank" href="https://www.instagram.com/im_wonjun/">
                  <AiFillInstagram
                    size={50}
                    className="hover:fill-blue-500 mt-1"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/@ThisIsHowWeHoop"
                >
                  <AiFillYoutube size={60} className="hover:fill-blue-500" />
                </a>
                <a
                  target="_blank"
                  href="https://www.tiktok.com/@im_wonjun?lang=en"
                >
                  <FaTiktok size={40} className="hover:fill-blue-500 mt-2 " />
                </a>
              </div>
            </div>
          </h1>
        </div>
        <div className=" lg:col-start-2 lg:flex item-center justify-center mb-10 flex py-4 ">
          <img src="./wonjunpic1.jpg" className="lg:w-3/4  px-4 2xl:mr-32 " />
        </div>
        <div className="lg:hidden flex flex-col items-center justify-center text-lg  ">
          <h4 className="font-bold">PRO CAREER</h4>
          <p>FIBA 3X3 PRO PLAYER</p>
          <p>KOREA 3X3 LEAGUE CHAMPION [2021]</p>
          <p>JAPAN EXE LEAGUE PLAYER [2019]</p>
          <h4 className="font-bold mt-3">COACHING</h4>
          <div className="text-lg text-center">
            <p>JAPAN EXE LEAGUE PLAYER [2019]</p>
            <p>SFS HS VARSITY BOYS [2018]</p>
            <p>PEC SPORTS ACADEMY SUWON</p>
            <p>PRISM ACADEMY</p>
          </div>{" "}
          <div className="flex flex-col place-items-center">
            <h4 className="font-bold mt-3">SOCIAL</h4>
            <div className="flex item-center justify-center">
              <a target="_blank" href="https://www.instagram.com/im_wonjun/">
                <AiFillInstagram
                  size={50}
                  className="hover:fill-blue-500 mt-1"
                />
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/@ThisIsHowWeHoop"
              >
                <AiFillYoutube size={60} className="hover:fill-blue-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wonjun;

import React from "react";
import { AiOutlineMail, AiFillInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiKakaoTalkFill } from "react-icons/ri";
function ContactInfo() {
  return (
    <>
      <div className=" hidden bg-black max-w-full h-[600px] md:flex flex-col items-center justify-center font-display">
        <div className="text-white flex flex-col items-center gap-6  ">
          <h3 className="text-3xl">CONTACT US</h3>
        </div>
        <div className="flex flex-row justify-center  space-x-12 mt-8  ">
          <div className="bg-white w-64 h-32 flex flex-col items-center justify-center rounded-lg">
            <AiOutlineMail size={40} className="fill-black" />
            <h2>E-MAIL</h2>
            <h2 className="font-bold text-lg ">prism.hoopsacademy@gmail.com</h2>
          </div>
          <div className="bg-white w-64 h-32 flex flex-col items-center justify-center rounded-lg ">
            <BsFillTelephoneFill size={40} className="fill-black" />
            <h2>TEL</h2>
            <h2 className="font-bold text-xl">010-4608-7511</h2>
          </div>
          <div className="bg-white w-64 h-32 flex flex-col items-center justify-center rounded-lg ">
            <AiFillInstagram size={40} className="fill-black" />
            <h2>INSTAGRAM</h2>
            <h2 className="font-bold text-xl">ID: prism_hoops</h2>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="md:hidden ">
        <div className=" bg-black max-w-full h-[900px] flex flex-col items-center justify-center">
          <div className="text-white flex flex-col items-center gap-6  ">
            <h3 className="text-3xl">CONTACT US</h3>
          </div>
          <div className="flex flex-col justify-center space-y-12 mt-9 ">
            <div className="bg-white w-64 h-32 flex flex-col items-center justify-center rounded-lg">
              <AiOutlineMail size={40} className="fill-black" />
              <h2>E-MAIL</h2>
              <h2 className="font-bold text-sm ">
                prism.hoopsacademy@gmail.com
              </h2>
            </div>
            <div className="bg-white w-64 h-32 flex flex-col items-center justify-center rounded-lg ">
              <BsFillTelephoneFill size={40} className="fill-black" />
              <h2>TEL</h2>
              <h2 className="font-bold text-xl">010-4608-7511</h2>
            </div>
            <div className="bg-white w-64 h-32 flex flex-col items-center justify-center rounded-lg ">
              <AiFillInstagram size={40} className="fill-black" />
              <h2>INSTAGRAM</h2>
              <h2 className="font-bold text-xl">ID: prism_hoops</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactInfo;

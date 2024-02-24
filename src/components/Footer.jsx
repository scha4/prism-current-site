import { Typography } from "@material-tailwind/react";
import { FaTiktok } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="w-full bg-black p-8 font-display">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
        <img
          width={0}
          height={0}
          sizes="100vw"
          src="/prismWord.png"
          alt="logo-ct"
          className="w-20"
        />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="/aboutus"
              color="blue-gray"
              className="font-bold font-default  text-white opacity-80 transition-opacity hover:opacity-100"
            >
              About Us
            </Typography>
          </li>

          <li>
            <Typography
              as="a"
              href="/contactus"
              color="blue-gray"
              className="font-default font-bold text-white opacity-80 transition-opacity hover:opacity-100"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <div className="">
        <Typography
          color="blue-gray"
          className="text-center  font-default  font-normal text-xl text-white font-display"
        >
          &copy; 2023 PRISM HOOPS
        </Typography>
        {/* icons */}
        <div className="flex gap-6 text-black lg:justify-end justify-center items-center mt-3 ">
          <a target="_blank" href="https://www.instagram.com/prism_hoops/">
            <AiFillInstagram
              size={50}
              className="hover:fill-gray-400  text-white"
            />
          </a>
          <a target="_blank" href="https://www.youtube.com/@ThisIsHowWeHoop">
            <AiFillYoutube
              size={60}
              className="hover:fill-gray-400 text-white"
            />
          </a>

          <a target="_blank" href="https://www.tiktok.com/@prism_hoops?lang=en">
            <FaTiktok size={40} className="hover:fill-gray-400  text-white " />
          </a>
        </div>
      </div>
    </footer>
  );
}

import { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";

import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

export default function NavbarMain() {
  const [openNav, setOpenNav] = useState(false);
  const [directoryOpen, setDirectoryOpen] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="flex flex-col  lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 hover: ">
      <Typography
        as="li"
        className="p-1 font-bold py-2   "
        onClick={() => setDirectoryOpen((prev) => !prev)}
      >
        <a href="/aboutus" className="flex items-center font-display  ">
          About Us
        </a>
      </Typography>

      <Typography as="li" className="p-1 font-bold  py-2 ">
        <a href="/trainers" className="flex items-center font-display">
          Trainers SEXY
        </a>
      </Typography>
      <Typography as="li" className="p-1 font-bold py-2  ">
        <a href="/contactus" className="flex items-center font-display">
          Contact Us
        </a>
      </Typography>
      <a href="/signup" className=" ">
        <Button className="bg-white text-black  ">
          <Typography className=" font-bold  text-md  font-display ">
            Sign Up
          </Typography>{" "}
        </Button>{" "}
      </a>
    </ul>
  );

  return (
    <Navbar
      style={{
        backgroundColor: "#000",
        borderBottom: "1px solid white !important",
        border: "none",
      }}
      className="inset-0 z-10  mx-auto max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 bg-black"
    >
      <div className="container mx-auto flex items-center justify-between z-10  ">
        <a href="/">
          <img src="./prismWord.png" className="w-24 h-18  " />
        </a>

        <div className="hidden lg:block ">{navList}</div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto  lg:hidden ">{navList}</div>
      </Collapse>
    </Navbar>
  );
}

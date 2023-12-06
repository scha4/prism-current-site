import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import config from "../index.json";
import { HashLink } from "react-router-hash-link";

function StaffHero() {
  const staff = config.staff;

  return (
    <>
      <div className="bg-black py-20">
        <div className="font-bold flex justify-center text-4xl mb-6 text-white font-display">
          Meet the Coaches
        </div>
        <div className="lg:flex gap-4 items-center justify-center">
          <HashLink
            to="/trainers#eric"
            className="text-lg font-normal text-center text-blue-500 hover:text-blue-700"
          >
            <Card className="lg:w-96 border-2 border-black mt-2">
              <div className="flex flex-col px-4 py-4  item-center justify-center">
                <img
                  src="/CE1.jpg"
                  alt="leaderImage"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto h-auto items-center rounded-md"
                />
                <div className="text-2xl font-bold text-center mt-3">
                  Coach Eric
                </div>

                <HashLink
                  to="/trainers#eric"
                  className="text-lg font-normal text-center text-blue-500 hover:text-blue-700"
                >
                  Learn More
                </HashLink>
              </div>
            </Card>
          </HashLink>
          <HashLink
            to="/trainers#dan"
            className="text-lg font-normal text-center text-blue-500 hover:text-blue-700"
          >
            <Card className="lg:w-96 border-2 border-black mt-2">
              <div className="flex flex-col px-4 py-4  item-center justify-center">
                <img
                  src="/CD1.jpg"
                  alt="leaderImage"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto h-auto items-center rounded-md"
                />
                <div className="text-2xl font-bold text-center mt-3">
                  Coach Dan
                </div>

                <HashLink
                  to="/trainers#dan"
                  className="text-lg font-normal text-center text-blue-500 hover:text-blue-700"
                >
                  Learn More
                </HashLink>
              </div>
            </Card>
          </HashLink>
          <HashLink
            to="/trainers#wonjun"
            className="text-lg font-normal text-center text-blue-500 hover:text-blue-700"
          >
            <Card className="lg:w-96 border-2 border-black mt-2">
              <div className="flex flex-col px-4 py-4  item-center justify-center">
                <img
                  src="./wonjunpic2.jpg"
                  alt="leaderImage"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto h-auto items-center rounded-md"
                />
                <div className="text-2xl font-bold text-center mt-3">
                  Coach Wonjun
                </div>

                <HashLink
                  to="/trainers#wonjun"
                  className="text-lg font-normal text-center text-blue-500 hover:text-blue-700"
                >
                  Learn More
                </HashLink>
              </div>
            </Card>
          </HashLink>
          {/* {staff.staff.map((item) => (
            <div to="/trainers#eric">
              <div>Meet The Coaches</div>
              <Card
                className="lg:w-96 border-2 border-black mt-2"
                key={item.id}
              >
                <div className="flex flex-col px-4 py-4  item-center justify-center">
                  <img
                    src={item.image}
                    alt="leaderImage"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-auto h-auto items-center rounded-md"
                  />
                  <div className="text-2xl font-bold text-center mt-3">
                    {item.name}
                  </div>
                  <div className="text-lg font-normal text-center">
                    {item.position}
                  </div>
                  <HashLink
                    to="/trainers#eric"
                    className="text-lg font-normal text-center text-blue-500 hover:text-blue-700"
                  >
                    Learn More
                  </HashLink>
                </div>
              </Card>
            </div>
          ))} */}
        </div>
      </div>
    </>
  );
}

export default StaffHero;

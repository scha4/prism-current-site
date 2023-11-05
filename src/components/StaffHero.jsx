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

function StaffHero() {
  const staff = config.staff;

  return (
    <>
      <div className="bg-black py-20">
        <div className="font-bold flex justify-center text-4xl mb-6 text-white font-display">
          Meet The Coaches
        </div>
        <div className="lg:flex gap-4 items-center justify-center">
          {staff.staff.map((item) => (
            <Card className="lg:w-96 border-2 border-black mt-2" key={item.id}>
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
                <div
                  className="text-lg font-normal text-center text-blue-500 hover:text-blue-700"
                  dangerouslySetInnerHTML={{ __html: item.url }}
                ></div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default StaffHero;

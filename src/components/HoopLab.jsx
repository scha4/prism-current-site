import React from "react";
import { Typography, Button } from "@material-tailwind/react";

function HoopLab() {
  return (
    <>
      <div className="lg:py-10 py-8 bg-slate-100 font-display 2xl:px-36">
        <div className="md:grid grid-cols-2 h-auto">
          <div className="mx-auto max-w-screen-xl col-span-1 flex flex-col md:items-left justify-center space-y-7  mt-6">
            <h1 className="text-2xl font-bold lg:ml-5 text-center  ">
              MONDAY HOOP LAB
            </h1>
            <img
              src="./teachingPic1.jpg"
              className="rounded-lg mx-2 md:hidden "
              alt="leaderImage"
            />

            <div>
              <ul className="list-disc list-inside text-lg lg:ml-5 mx-2">
                <li>
                  Our program is a 15-week course system (classes once a week,
                  March 4-June 24)
                </li>
                <li>
                  Our program runs on Monday nights starting at 6:30pm,
                  finishing at 8pm (90min!)
                </li>
                <li>
                  Coach Dan (BHS class of '98) will be the main coach and will
                  be assisted by other qualified & experienced coaches. Coach
                  Dan brings his over 20 yrs of playing experience (D1, Pro,
                  FIBA 3X3, & National Team) back to BHS where it all began. He
                  is excited to be back after a long pro career in South Korea
                  and back at his alma mater. Lets get started!
                </li>
                <li>
                  Sessions are going to be intense and exciting! 90 minutes of
                  hard work and fun! We will cover all the basic fundamentals of
                  basketball all the way up to advanced in-game skills that you
                  can apply to your game immediately. Our goal is to help each
                  athlete get the help he/she needs to grow in their personal
                  journey with this beautiful game.
                </li>
              </ul>
            </div>
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSe0R1BvH-R2YFktiO7kOX42qvlTQNQ0uvT1eW7mTrTqMZy3fw/viewform?vc=0&c=0&w=1&flr=0"
            >
              <div className="flex items-center justify-center ">
                <Button className=" bg-black lg:w-1/3 font-display text-lg  ">
                  Sign up Now
                </Button>
              </div>
            </a>
          </div>

          <div className="hidden md:flex items-center justify-center pt-10 pb-10">
            <img
              src="./teachingPic1.jpg"
              className="lg:w-3/4 max-w-96 rounded-lg"
              alt="leaderImage"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HoopLab;

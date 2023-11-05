import { Typography, Button } from "@material-tailwind/react";

export default function VideoBack() {
  return (
    <>
      <div className="relative ">
        <video autoPlay muted playsInline loop className="w-full brightness-50">
          <source src="./test1.MP4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 grid h-full w-5/6 place-items-center ">
          <div className="w-full  md:ml-20 ml-10">
            <Typography
              variant="lead"
              color="white"
              className="md:text-xl font-medium text-xs font-display "
            >
              REAL TRAINING, REAL RESULTS
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="md:text-5xl font-bold text-lg md:mt-2 font-display"
            >
              Prism Basketball
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="md:text-5xl font-bold text-lg md:mt-2 font-display"
            >
              Training
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="md:text-xl font-medium text-sm md:mt-2 font-display"
            >
              Basketball Training and Camps in Seoul, South Korea.
            </Typography>
            <a href="/signup">
              <Button className="md:mt-10 bg-white text-black  mt-2  font-display lg:text-lg">
                Sign Up
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

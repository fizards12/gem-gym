import React from "react";
import banner from "../../../assets/banner-bg.jpg";
import { Button } from "@material-tailwind/react";
function Banner() {
  return (
    <div
      style={{ backgroundImage: `url(${banner})`, height: 500 }}
      className={`w-full 
      flex flex-col items-center justify-center gap-4
      bg-cover bg-no-repeat bg-center-top text-center`}
    >
      <h1 className="text-5xl font-extrabold font-oswald">
        REGISTRATION NOW TO GET MORE DEALS
      </h1>
      <p className="text-xl font-semibold text-gray-500">
        WHERE HEALTH, BEAUTY AND FITNESS MEET.
      </p>
      <div className="mt-8">
        <Button
          variant="text"
          color="orange"
          size="lg"
          ripple={false}
          className={`rounded-none
        bg-opacity-100
        border border-orange-600
        hover:bg-orange-600 hover:text-white`}
        >
          APPOINTMENT
        </Button>
      </div>
    </div>
  );
}

export default Banner;

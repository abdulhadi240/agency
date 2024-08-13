import Image from "next/image";
import React from "react";
import CircularText from "../components/Circle";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse justify-center sm:flex-row gap-28">
      <div className="mt-10 text-4xl tracking-wider text-white uppercase text-end w-96">
        Beautiful design has the power to captivate audiences.
      </div>
      <div className="relative flex justify-center text-center">
        <div>
          <Image
            src={"/Container.png"}
            height={500}
            width={500}
            alt="img"
            className="rounded-2xl sm:h-[500px] sm:w-[500px] h-[300px] w-[300px]" /* Adjust size on mobile */
          />
        </div>
        <div className="absolute top-32 -left-3 sm:-left-20">
          <CircularText />
        </div>
      </div>
    </div>
  );
};

export default Hero;

import Image from "next/image";
import React from "react";
import CircularText from "../components/Circle";

const paragraph = "Beautiful design has the power to captivate audiences."

const Hero = () => {
  return (
    <div className="flex flex-col-reverse justify-center sm:flex-row gap-28">
      <div className="hidden mt-10 text-4xl tracking-wider text-white uppercase sm:block text-end w-96">
        {paragraph}
      </div>
      <div className="relative flex justify-center text-center">
        <div>
          <Image
            src={"/Container.webp"}
            height={500}
            width={500}
            alt="img"
            className="rounded-2xl sm:h-[400px] sm:w-[400px] h-[250px] w-[250px]" /* Adjust size on mobile */
          />
        </div>
        <div className="absolute top-32 -left-1 sm:-left-20">
          <CircularText />
        </div>
      </div>
    </div>
  );
};

export default Hero;

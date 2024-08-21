import Image from "next/image";
import React from "react";
import HeroImage from "../../../components/HeroImage";
import Text from "../../../components/Text";
import ImageGallery from '@/components/ImageGallery'

const page = () => {
  return (
    <div className="mx-1 -mt-10 overflow-hidden text-white lg:mx-40 sm:mx-20">
      <div className="flex items-center justify-between ">
        <div className="flex flex-col justify-center min-h-screen text-white ">
          <div className="flex flex-col items-start justify-center gap-4 tracking-widest">
            <div className="uppercase">
              <h1>Works</h1>
            </div>
            <div>
              <h1 className="w-32 font-semibold uppercase text-8xl">
                marketing strategy
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen overflow-x-hidden h-[1px] border-[#BEFB7C] text-[#BEFB7C] border-[1px] -mt-32" />
      <div className="flex justify-between mx-4 mt-10 text-center text-white ">
        <div>
          <h1 className="tracking-[7px] uppercase">Category</h1>
          <h1 className="mt-2 text-white/70">White Label</h1>
        </div>
        <div>
          <h1 className="tracking-[7px] uppercase">Client</h1>
          <h1 className="mt-2 text-center text-white/70">Abdul hadi</h1>
        </div>
        <div>
          <h1 className="tracking-[7px] uppercase">Completed</h1>
          <h1 className="mt-2 text-white/70">Ongoing</h1>
        </div>
      </div>

      <div className="mt-20 overflow-hidden rounded-2xl">
        <Image
          src={"/marketing.jpeg"}
          width={1000}
          height={1000}
          alt="logo"
          className="overflow-hidden transition-all rounded-2xl hover:rounded-2xl hover:scale-110"
        />
      </div>
      <Text/>

      <div>
        <ImageGallery/>
      </div>
    </div>
  );
};

export default page;

import Link from "next/link";
import Hero from "../components/Hero";
import ZoomParallax from '../components/Parallex/index';
import Carasoul from '@/components/Carasoul'
import Achivement from "@/components/Achivement";
import Marquee1 from "@/components/Marquee";
export default function Home() {
  return (
    <>
    
      <Link href={"/about"}>
        <div className="flex flex-col text-white mt-44">
          <div className="flex flex-col justify-center text-center uppercase sm:flex-row">
            <h1 className="text-xs">welcome</h1>
          </div>
          <div className="flex justify-center text-[60px] font-bold text-center text-white uppercase lg:text-9xl">
            ecommerce
          </div>
          <div className="flex justify-center font-bold text-center uppercase -mt-7 sm:-mt-4 text-8xl text">
            AGENCY
          </div>
        </div>
      </Link>
      <div>
        <div className="mt-14">
          <Hero/>
        </div>
      </div>
      <div>
        <Carasoul/>
      </div>
      <div className="mt-44 mb-44">
        <h1 className="flex justify-center mb-20 text-5xl font-bold text-white sm:text-7xl">CASE <span className="text-[#BEFB7C] pl-3">STUDIES.</span></h1>
      <ZoomParallax />
      </div>

      {/*<div>
        <Achivement/>
      </div>*/}

      <div>
        <Marquee1/>
      </div>
      <div className="flex flex-col mt-24 text-white">
          <div className="flex flex-col justify-center text-center uppercase sm:flex-row">
            <h1 className="text-xs">ready. set.</h1>
          </div>
          <div className="flex justify-center text-[60px] font-bold text-center text-white uppercase lg:text-[200px]">
            LAUNCH
          </div>
          <div className="flex justify-center font-bold text-center uppercase -mt-7 sm:-mt-14 text-8xl text1">
            TODAY
          </div>
        </div>

    </>
  );
}

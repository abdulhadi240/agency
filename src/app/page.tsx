import Link from "next/link";
import Hero from "../components/Hero";
import ZoomParallax from '../components/Parallex/index';
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
      <ZoomParallax />

    </>
  );
}

import Link from "next/link";
import Hero from "../components/Hero";
import ZoomParallax from '../components/Parallex/index';
import Carasoul from '@/components/Carasoul'
import Achivement from "@/components/Achivement";
import Marquee1 from "@/components/Marquee";
import Video from "@/components/Video";
import Image from "next/image";
import Services from "@/components/Services";
import lottie1 from '@/components/animate/1.json'
import lottie2 from '@/components/animate/2.json'
import lottie3 from '@/components/animate/3.json'
import lottie4 from '@/components/animate/4.json'
import lottie5 from '@/components/animate/website.json'
import lottie6 from '@/components/animate/inventory.json'
import lottie7 from '@/components/animate/sales.json'

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
      <div>
        <Video/>
      </div>
      <div className="mt-44 mb-44">
        <h1 className="flex justify-center mb-20 text-5xl font-bold text-white sm:text-7xl">CASE <span className="text-[#BEFB7C] pl-3">STUDIES.</span></h1>
      <ZoomParallax />
      </div>
      <div className="relative">
        <img src={'/service.webp'} alt="image" className="object-cover w-full h-full brightness-75"/>
        <div className="absolute inset-0 flex justify-center text-xl font-bold text-white sm:text-3xl">
          <div>
          <h1 className="flex justify-center text-2xl">Everything you need for E-commerce Business</h1>
          <p className="flex justify-center max-w-lg mt-3 text-xs text-center text-white/80">Ever feel like authentication requirements change with the season? Clerk keeps up with the latest trends and security best practices.</p>
          </div>
        </div>
        <div className="absolute grid grid-cols-3 gap-4 text-xl font-bold text-white top-44 left-10 sm:text-3xl">
            <Services lottie={lottie5} text={'Website Creation'} paragraph={'hello this is a mad show'} />
            <Services lottie={lottie4} text={'Product Hunting'} paragraph={'hello this is a mad show'} />
            <Services lottie={lottie3} text={'Marketing'} paragraph={'hello this is a mad show'} />
            <Services lottie={lottie6} text={'Inventory Managment'} paragraph={'hello this is a mad show'} />
            <Services lottie={lottie2} text={'Delivery Managment'} paragraph={'hello this is a mad show'} />
            <Services lottie={lottie7} text={'Sales'} paragraph={'hello this is a mad show'} />


          </div>
      </div>
      <div>
        <Achivement/>
      </div>

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

import Link from "next/link";
import Hero from "../components/Hero";
import lottie4 from "@/components/animate/4.json";
import lottie5 from "@/components/animate/website.json";
import lottie6 from "@/components/animate/inventory.json";
import animation1 from "@/components/animate/planning.json";
import animation2 from "@/components/animate/market.json";
import dynamic from "next/dynamic";

const Testimonail = dynamic(() => import("@/components/Testimonail"));
const Services1 = dynamic(() => import("@/components/Services1"));
const Services = dynamic(() => import("@/components/Services"));
const Video = dynamic(() => import("@/components/Video"));
const Marquee1 = dynamic(() => import("@/components/Marquee"));
const Achivement = dynamic(() => import("@/components/Achivement"));
const Carasoul = dynamic(() => import("@/components/Carasoul"));
const ZoomParallax = dynamic(() => import("../components/Parallex/index"));





export default function Home() {
  return (
    <>
      <Link href={"/about"}>
        <div className="flex flex-col text-white mt-44">
          <div className="flex flex-col justify-center text-center uppercase sm:flex-row">
            <h1 className="text-xs">welcome</h1>
          </div>
          <div className="flex justify-center text-[55px] font-bold text-center text-white uppercase sm:text-8xl lg:text-9xl">
            ecommerce
          </div>
          <div className="flex justify-center -mt-2 font-bold text-center uppercase sm:-mt-4 text-8xl text">
            AGENCY
          </div>
        </div>
      </Link>
      <div>
        <div className="mt-14">
          <Hero />
        </div>
      </div>
      <div className="hidden sm:block">
        <Carasoul />
      </div>
      <div className="">
        <Video />
      </div>
      <div className="mt-44 mb-44 ">
        <h1 className="flex justify-center mb-20 text-5xl font-bold text-white sm:text-7xl">
          CASE <span className="text-[#BEFB7C] pl-3">STUDIES.</span>
        </h1>
        <div className="">
        <ZoomParallax />
        </div>
      </div>
      <div className="">
        <div className="text-xl font-bold text-white sm:text-3xl">
          <div>
            <h1 className="text-4xl text-center ">
              Everything you need for <span className='text-[#BEFB7C]'>E-commerce Business</span>
            </h1>
            <div className="flex justify-center max-w-lg mx-auto mt-3 text-xs text-center text-white/80">
            Empowering Your Online Business with Strategies That Drive Growth and Maximize Sales.
              
            </div>{" "}
          </div>
        </div>
        <div className="hidden mt-20 sm:block">
          <Services
            tag={undefined}
            heading={"Plan to Win."}
            title={" Planning & Strategy"}
            paragraph={
              "We begin by understanding your business goals and target audience. Together, we develop a tailored strategy that aligns your objectives with market demands. This includes competitive analysis, market research, and setting clear KPIs. Based on this strategy, we create a roadmap that guides the entire project."
            }
            right={false}
            image={"/Group8.webp"}
            lottie={animation1}
          />
          <Services
            tag={undefined}
            heading={"Build to Sell."}
            title={"Website Development"}
            paragraph={
              "Once the strategy is in place, we design and develop a high-performing, user-friendly website. We focus on creating a seamless user experience with intuitive navigation, fast load times, and mobile responsiveness. This stage includes developing wireframes, interactive prototypes, and the final build with a focus on functionality and aesthetics."
            }
            right={true}
            image={"/Group3.webp"}
            lottie={lottie5}
          />
          <Services
            tag={undefined}
            heading={"Find What Sells."}
            title={" Product Hunting"}
            paragraph={
              "Finding the right products is crucial to your success. We assist in identifying trending and profitable products that resonate with your target audience. This involves thorough research, supplier vetting, and ensuring the products meet quality standards."
            }
            right={false}
            image={"/Group4.webp"}
            lottie={lottie4}
          />
          <Services
            tag={undefined}
            heading={"Market Smarter."}
            title={"Marketing"}
            paragraph={
              "With your website live and products ready, we craft a comprehensive marketing strategy to drive traffic and conversions. This includes SEO, social media marketing, email campaigns, and paid advertising."
            }
            right={true}
            image={"/Group4.webp"}
            lottie={animation2}
          />
          <Services
            tag={undefined}
            heading={"Deliver Right."}
            title={"Logistics"}
            paragraph={
              "We integrate a seamless logistics system, managing inventory, shipping, and returns with trusted partners to ensure timely deliveries and happy customers."
            }
            right={false}
            image={"/Group5.webp"}
            lottie={lottie6}
          />
        </div>
        <div className="block mt-20 sm:hidden">
          <Services1
            tag={undefined}
            heading={"Plan to Win."}
            title={" Planning & Strategy"}
            paragraph={
              "We begin by understanding your business goals and target audience. Together, we develop a tailored strategy that aligns your objectives with market demands. This includes competitive analysis, market research, and setting clear KPIs. Based on this strategy, we create a roadmap that guides the entire project."
            }
            right={false}
            image={"/Group8.webp"}
            lottie={animation1}
          />
          <Services1
            tag={undefined}
            heading={"Build to Sell."}
            title={"Website Development"}
            paragraph={
              "Once the strategy is in place, we design and develop a high-performing, user-friendly website. We focus on creating a seamless user experience with intuitive navigation, fast load times, and mobile responsiveness. This stage includes developing wireframes, interactive prototypes, and the final build with a focus on functionality and aesthetics."
            }
            right={true}
            image={"/Group3.webp"}
            lottie={lottie5}
          />
          <Services1
            tag={undefined}
            heading={"Find What Sells."}
            title={" Product Hunting"}
            paragraph={
              "Finding the right products is crucial to your success. We assist in identifying trending and profitable products that resonate with your target audience. This involves thorough research, supplier vetting, and ensuring the products meet quality standards."
            }
            right={false}
            image={"/Group4.webp"}
            lottie={lottie4}
          />
          <Services1
            tag={undefined}
            heading={"Market Smarter."}
            title={"Marketing"}
            paragraph={
              "With your website live and products ready, we craft a comprehensive marketing strategy to drive traffic and conversions. This includes SEO, social media marketing, email campaigns, and paid advertising."
            }
            right={true}
            image={"/Group4.webp"}
            lottie={animation2}
          />
          <Services1
            tag={undefined}
            heading={"Deliver Right."}
            title={"Logistics"}
            paragraph={
              "We integrate a seamless logistics system, managing inventory, shipping, and returns with trusted partners to ensure timely deliveries and happy customers."
            }
            right={false}
            image={"/Group5.webp"}
            lottie={lottie6}
          />
        </div>
      </div>
      <div className="mt-20 ">
        <Achivement />
      </div>

      <div>
        <Testimonail/>
      </div>

      <div className="mt-32 overflow-hidden">
        <Marquee1 />
      </div>
      <div className="flex flex-col mt-24 text-white ">
        <div className="flex flex-col justify-center text-center uppercase sm:flex-row">
          <h1 className="text-xs">ready. set.</h1>
        </div>
        <div className="flex justify-center text-[80px] font-bold text-center text-white uppercase lg:text-[200px]">
          LAUNCH
        </div>
        <div className="flex justify-center font-bold text-center uppercase -mt-7 sm:-mt-14 text-8xl text1">
          TODAY
        </div>
      </div>
    </>
  );
}

"use client";
import styles from "./styles.module.scss";
import Picture1 from "../../../public/01.webp";
import Picture2 from "../../../public/02.webp";
import Picture3 from "../../../public/logo.webp";
import Picture4 from "../../../public/02.png";
import Picture5 from "../../../public/02.png";
import Picture6 from "../../../public/02.png";
import Picture7 from "../../../public/02.png";
import Character from "@/components/paragraph/Character";
import Lottie from "lottie-react";
import arrow from "@/components/animate/arrow.json";

import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect } from "react";

const paragraph =
  "Client Case Study: Transforming a Newbie into a Rs 900K Success Story in Less Than a Month";

const para1 = 'In less than a month, we generated over Rs 900,000 in revenue, turning a cautious newbie into a successful e-commerce entrepreneur.'

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: Picture1,
      scale: scale4,
    },
    {
      src: Picture2,
      scale: scale5,
    },
    {
      src: Picture3,
      scale: scale6,
    },
    {
      src: Picture4,
      scale: scale5,
    },
    {
      src: Picture5,
      scale: scale6,
    },
    {
      src: Picture6,
      scale: scale8,
    },
    {
      src: Picture7,
      scale: scale9,
    },
  ];

  useEffect(() => {
    if (container.current) {
      // Scroll position may have changed during the transition, so reset if needed
      // You might want to check and reset the scroll position to the top
      window.scrollTo(0, 0);

      // Recalculate scroll position for animations
      scrollYProgress.set(0); // Resets scrollYProgress to 0
    }
  }, [scrollYProgress]);

  const style = {
    height: 150,
    width: 150,
    transform: "rotate(180deg)", // Rotates the Lottie animation by 45 degrees
  };

  return (
    <>
      <div ref={container} className={styles.container}>
        <div className={styles.sticky}>
          {pictures.map(({ src, scale }, index) => {
            return (
              <motion.div key={index} style={{ scale }} className={styles.el}>
                <div className={styles.imageContainer}>
                  <Image src={src} fill alt="image" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <Character paragraph={paragraph} />
      <div className="mx-10 text-white">
      <div >
        <h1 className="text-2xl font-bold text-[#BEFB7C]">Background:</h1>
        <p className="mt-2 text-white/70">
          Our client, a complete novice in e-commerce, came to us after a
          disappointing experience with another agency. Despite working with
          them for two weeks, the results were lackluster, leaving the client
          wary of further investment.
        </p>
      </div>
      <div>
        <h1 className="text-2xl mt-4 font-bold text-[#BEFB7C]">Challenges:</h1>
        <ol className="mx-10 list-decimal">
          <li className="mt-3 text-white/80">
            <span className="mr-2 font-semibold text-white">No E-commerce Experience:</span>The client had no prior
            knowledge of running an online business.
          </li>
          <li className="mt-3 text-white/80 ">
            <span className="mr-2 font-semibold text-white">Limited Budget:</span>Due to their previous setback, the
            client was hesitant to invest heavily.
          </li>
        </ol>
      </div>
      <div>
        <h1 className="text-2xl mt-4 font-bold text-[#BEFB7C]">Our Approach:</h1>
        <p className="mt-2 text-white/70">
          We crafted a personalized, data-driven strategy focused on quick wins.
          By conducting thorough market research, optimizing their online
          presence, and implementing targeted marketing, we ensured every dollar
          spent was effective. Regular updates and transparent communication
          helped rebuild the client's confidence.
        </p>
      </div>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col justify-center gap-3">
          <motion.div
            initial={{ scaleY: 0.8 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1 }}
          >
            <Image src={"/0.png"} width={900} height={700} alt="image" />
          </motion.div>
          <div className="flex justify-center">
            <Lottie animationData={arrow} loop={true} style={style} />
          </div>
          <motion.div
            initial={{ scaleY: 0.8 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1 }}
          >
            <Image src={"/1.png"} width={900} height={700} alt="image" />
          </motion.div>
        </div>
      </div>
      <Character paragraph={para1} />
    </>
  );
}

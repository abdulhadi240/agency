'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import {cn} from "../../src/lib/utils"
import Lottie from "lottie-react";
const Services = ({tag , heading , title , paragraph ,right ,image , lottie}) => {
  return (
    <>
      <div className="flex justify-center ">
        <Image src={image} width={35} height={35} alt="image" />
      </div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} className="flex justify-between mx-10 mt-3">
        <div className={cn("w-96 h-[500px] rounded-lg bg-black/50 border-[1px] border-[#BEFB7C]", { 'bg-black border-black': right })}>
        <div className={cn("block mx-4  text-white/80 gap-4",{'hidden':right})}>
          <Lottie animationData={lottie}/>
          <h1 className="text-xs text-[#BEFB7C]">{heading}</h1>
          <h3 className="text-xl">{title}</h3>
          <p className="mt-4 text-sm">{paragraph}</p>
          </div>
        </div>
        <div className="h-[600px] w-[1px] bg-[#BEFB7C] flex justify-end text-center" />
        <div  className={cn("w-96 h-[500px] rounded-lg bg-black/50 border-[1px] border-[#BEFB7C]", { 'bg-black border-black': !right })}>
        <div className={cn("block mx-4  text-white/80 gap-4",{'hidden':!right})}>
          <Lottie animationData={lottie}/>
          <h1 className="text-xs text-[#BEFB7C]">{heading}</h1>
          <h3 className="text-xl">{title}</h3>
          <p className="mt-4 text-sm">{paragraph}</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Services;

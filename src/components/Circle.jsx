'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function RotatingImage() {
  return (
    <div className="">
      <motion.div
        className="relative -z-9999 w-32 h-32"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        <Image
          src="/link11.png" // Replace with your image path
          alt="Rotating Image"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </motion.div>
    </div>
  );
}
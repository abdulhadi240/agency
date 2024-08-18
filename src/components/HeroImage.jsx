"use client";
import React, { useEffect } from "react";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import Image from "next/image";

const HeroImage = () => {
  const { scrollYProgress } = useViewportScroll();
  const controls = useAnimation();

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      controls.start({
        scale: 1 + latest * 0.2, // Adjust the scaling factor as needed
      });
    });
  }, [scrollYProgress, controls]);

  return (
    <div>
      <motion.div
        className="mt-20 overflow-hidden transition-all rounded-2xl"
        animate={controls}
        initial={{ scale: 1 }} // Start at normal size
      >
        <Image
          src={"/marketing.jpeg"}
          width={1000}
          height={1000}
          alt="logo"
          className="overflow-hidden transition-all rounded-2xl hover:rounded-2xl"
        />
      </motion.div>
    </div>
  );
};

export default HeroImage;

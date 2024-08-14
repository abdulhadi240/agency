"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show the content after the animation is complete
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000); // This should match the duration of the animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-x-hidden">
      {/* Transition Animations */}
      <div className="absolute inset-0 z-10 flex justify-between h-screen">
        <motion.div
          className="h-screen w-[50%] bg-[#212121]"
          initial={{ x: 0 }}
          animate={{ x: -1000 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="h-screen w-[50%] bg-[#212121]"
          initial={{ x: 0 }}
          animate={{ x: 1000 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        />
      </div>

      {showContent && (
        <motion.div
          className="relative z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }} // Fade-in effect for the content
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}

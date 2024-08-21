"use client";
import React from "react";
import { motion } from "framer-motion";

const Text = () => {
  return (
    <div className="mx-10">
      <div className="text-white">
        <motion.h1
          className="mt-10 font-semibold text-7xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Work Overview:
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-6 text-white/80 "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere.
        </motion.p>
      </div>
      <div>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-6 text-xl tracking-widest uppercase"
        >
          Objectives:
        </motion.h1>
        <div className="mx-4 mt-6 text-white/80">
          <motion.ol
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="ml-5 list-decimal" // Tailwind classes for numbered list and margin-left
          >
            <li className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </li>
            <li className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </li>
            <li className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </li>
          </motion.ol>
        </div>
      </div>
      <div className="">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-6 text-xl tracking-widest uppercase"
        >
          Scope of Work:
        </motion.h1>
        <div>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-4 mt-6 text-white/80"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique:
          </motion.h1>
          <motion.ol
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="ml-5 list-decimal text-white/80 "
          >
            <li className="mx-4 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </li>
            <li className="mx-4 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </li>
            <li className="mx-4 mt-4">
              Lorem ipsum dolor sit ame in eros elementum tristique.
            </li>
          </motion.ol>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-20 text-white/70"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
        sem vitae risus tristique posuere.
      </motion.div>
    </div>
  );
};

export default Text;

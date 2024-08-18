"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { Link } from 'next-view-transitions'
import { useRef } from "react";
const Carasoul = () => {
  return (
    <>
      <div className="">
        <HorizontalScrollCarousel />
      </div>
    </>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-60%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] ">
      <div className="sticky top-0 flex items-center h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <Link href={card.link}><div
      key={card.id}
      className="group relative h-[500px] w-[500px] overflow-hidden bg-neutral-200 hover:cursor-none"
      style={{ cursor: `url(/cursor.svg), auto` }}
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="absolute p-1 font-semibold text-[9px] border-[#BEFB7C] border-[2px] text-white uppercase bg-black top-2 right-2 ">
          {card.title}
        </p>
      </div>
    </div></Link>
  );
};
export default Carasoul;

const cards = [
  {
    url: "/marketing.jpeg",
    title: "Marketing",
    link: "/work/marketing",
    id: 1,
  },
  {
    url: "/web.jpg",
    title: "Website",
    link: "/work/marketing",
    id: 2,
  },
  {
    url: "/brand.jpg",
    title: "Branding",
    link: "/work/branding",
    id: 3,
  },
  {
    url: "/daraz.jpg",
    title: "Daraz",
    link: "/work/branding",
    id: 4,
  },
];

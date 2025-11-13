import React from "react";
import Svg from "./Svg";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const DURATION = 0.25;

const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap font-black uppercase sm:text-5xl md:text-5xl lg:text-5xl border-[#d92323] bg-[#0d0d0d] border-t-8"
      style={{
        letterSpacing: "0.2em",
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },

              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,

              ease: "easeInOut",

              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>

      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },

              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,

              ease: "easeInOut",

              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default function Home() {
  return (
    <>
      <div className="w-full h-screen bg-[#d92323] flex justify-center items-center">
        <div className="text-7xl pt-4 text-center items-center flex flex-col z-10 menu">
          <h1 className="home">
            <FlipLink href="/">Home</FlipLink>
          </h1>
          <h1 className="task-board ">
            <FlipLink href="/">TasK-Board</FlipLink>
          </h1>
          <h1 className="about">
            <FlipLink href="/about">About-Me</FlipLink>
          </h1>
          <h1 className="chat-room ">
            <FlipLink href="/">Chat-room</FlipLink>
          </h1>
          <h1 className="project ">
            <FlipLink href="/">Project</FlipLink>
          </h1>
        </div>
        <div
          className="h-120 w-120 absolute pointer-events-none z-10
"
        >
          <Svg />
        </div>

        <div className="bg-[#0d0d0d] h-full w-full absolute bottom-0"></div>
      </div>

      <div className="w-full h-screen bg-blue-800 text-black flex justify-end">
        <div>
          <div className="chat bg-black flex rounded-tr-lg">
            <div className="chat2 bg-white rounded-tr-lg">Tes text</div>
          </div>
        </div>
      </div>
    </>
  );
}

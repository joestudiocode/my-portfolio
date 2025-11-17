import React from "react";
import Svg from "./Svg";

// import github from "../assets/icons/Github.svg"
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import Navbar from "./Navbar";

const DURATION = 0.25;

const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden font-black uppercase sm:text-5xl md:text-5xl lg:text-5xl border-[#d92323] bg-[#0d0d0d] min-w-max"
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
            className="inline-block bg-[#f2e852] text-[#0d0d0d]"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default function Main() {
  return (
    <>
      <Navbar title="Menu" link="/" />
      <div className="w-full min-h-screen bg-[#0d0d0d] flex justify-center items-center">
        <div className="flex md:hidden flex-col gap-4 text-center z-20">
          <a href="/home" className="text-3xl font-black">
            Home
          </a>
          <a href="/about" className="text-3xl font-black">
            About-Me
          </a>
          <a href="/" className="text-3xl font-black">
            Project
          </a>
          <a href="/" className="text-3xl font-black">
            Task-Board
          </a>
          <a href="/" className="text-3xl font-black">
            Chat-Room
          </a>
        </div>
        <div className="hidden md:flex text-center items-center flex-col z-10 menu">
          <h1 className="home min-w-max whitespace-nowrap">
            <FlipLink href="/home">Home</FlipLink>
          </h1>
          <h1 className="about">
            <FlipLink href="/about">About-Me</FlipLink>
          </h1>
          <h1 className="project ">
            <FlipLink href="/">Project</FlipLink>
          </h1>
          <h1 className="task-board ">
            <FlipLink href="/">TasK-Board</FlipLink>
          </h1>
          <h1 className="chat-room ">
            <FlipLink href="/">Chat-room</FlipLink>
          </h1>
        </div>
      </div>
      console.log(window.innerHeight)
      <div className="w-full min-h-screen bg-blue-800 text-black flex justify-end">
        <div>
          <div className="chat bg-black flex rounded-tr-lg">
            <div className="chat2 bg-white rounded-tr-lg">Tes text</div>
          </div>
        </div>
      </div>
    </>
  );
}

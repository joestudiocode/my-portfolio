// import github from "../assets/icons/Github.svg"
import { Outlet } from "react-router-dom";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const DURATION = 0.25;
const STAGGER = 0.025;

const MotionLink = motion.create(Link);

const FlipLink = ({ children, to }) => {
  return (
    <MotionLink
      initial="initial"
      whileHover="hovered"
      to={to}
      className="relative block overflow-hidden font-black uppercase sm:text-4xl md:text-4xl lg:text-5xl min-w-max"
      style={{
        letterSpacing: "0.2em",
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.div
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
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.div
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
          </motion.div>
        ))}
      </div>
    </MotionLink>
  );
};

export default function Main() {
  return (
    <>
     <Navbar title="Menu" link="/" />
      <div className="w-full min-h-screen bg-[#0d0d0d] flex justify-start items-center px-10 gap-x-4">
        <div className="hidden md:flex text-start flex-col menu gap-y-1">
          <h1 className="home min-w-max whitespace-nowrap">
            <FlipLink to="/home">Home</FlipLink>
          </h1>
          <h1 className="about">
            <FlipLink to="/about">About-Me</FlipLink>
          </h1>
          <h1 className="project ">
            <FlipLink to="/project">Project</FlipLink>
          </h1>
          <h1 className="task-board ">
            <FlipLink to="/about">TasK-Board</FlipLink>
          </h1>
          <h1 className="chat-room ">
            <FlipLink to="/about">Chat-room</FlipLink>
          </h1>
        </div>

        <div className="h-screen flex flex-col justify-center items-center w-[80%] p-10">
          <h1 className="text-3xl">Hi I'm Jaohar Bahy Dwi tanto</h1>
          <p>
            Passionate and detail-driven Frontend Developer with a strong focus
            on creating clean, responsive, and interactive user experiences.
            Skilled in React, JavaScript, and modern web technologies, with a
            deep interest in transforming ideas into intuitive UI. Dedicated to
            building fast, scalable, and visually engaging interfaces that blend
            aesthetics with functionality.
          </p>
        </div>
      </div>
     
      {/* <div className="w-full h-screen bg-blue-800 text-black flex justify-end">
        <div>
          <div className="chat bg-black flex rounded-tr-lg">
            <div className="chat2 bg-white rounded-tr-lg">Tes text</div>
          </div>
        </div>
      </div> */}
    </>
  );
}

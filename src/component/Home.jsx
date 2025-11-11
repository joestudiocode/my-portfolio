// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

import "../styles/main.scss";
import Svg from "../assets/Svg";
export default function Home() {
  return (
    <>
      <div className="w-full h-screen bg-[#d92323] flex justify-center items-center">
        <div className="text-7xl pt-3  text-center flex flex-col z-3">
          <h1 className="home bg-[#0d0d0d] inline-block border-3 border-[#d92323]">
            <a href="">Home.</a>
          </h1>
          <h1 className="task-board bg-[#0d0d0d] inline-block whitespace-nowrap border-3 border-[#d92323]">
            <a href="">Task-Board.</a>
          </h1>
          <h1 className="about bg-[#0d0d0d] inline-block border-3 border-[#d92323]">
            <a href="">About.</a>
          </h1>
          <h1 className="chat-room bg-[#0d0d0d] inline-block whitespace-nowrap border-3 border-[#d92323]">
            <a href="">Chat-room.</a>
          </h1>
          <h1 className="project bg-[#0d0d0d] inline-block border-3 border-[#d92323]">
            <a href="">Project.</a>
          </h1>{" "}
        </div>

        <div className="absolute z-10">
          <Svg/>
        </div>
        {/* <img className="absolute z-20 bottom-26 " src={mySvg} alt="My SVG" /> */}
        <div className=""></div>
        <div className="bg-[#0d0d0d] h-full w-full absolute z-1 bottom-0"></div>
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

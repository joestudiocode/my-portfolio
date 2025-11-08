// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

import "../styles/main.scss";
import BubbleDiv from "../svg/Svg";
import ChatBubble from "../svg/Svg";
export default function Home() {
  return (
    <>
      <div className="w-full min-h-screen bg-black flex justify-center items-center">
        <div className="text-7xl bg-[#d92323] py-50 px-50 w-full text-center flex flex-col">
          <h1 className="home bg-black inline-block">Home.</h1>
          <h1 className="task-board bg-black inline-block whitespace-nowrap">
            Task-Board.
          </h1>
          <h1 className="about bg-black inline-block">About.</h1>
          <h1 className="chat-room bg-black inline-block whitespace-nowrap">
            Chat-room.
          </h1>
          <h1 className="project bg-black inline-block">Project.</h1>
        </div>
      </div>
      <div className="w-full h-screen bg-blue-800 flex">
        <div className="chat bg-black">
          <div className="chat2 bg-white">

          </div>
        </div>
        {/* <ChatBubble/> */}
      </div>
    </>
  );
}

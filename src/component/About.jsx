import React from "react";
import Navbar from "./Navbar";
import BackCard from "../assets/Backcard.png";
import ProfilCard from "../assets/Profilcard.png";
import Main from "./Main";


export const About = () => {
  return (
    <>
      <Navbar title="Back to Menu" link="/" />
      <div className="sm:text-4xl w-[80%] h-screen flex justify-center items-center bg-[#0d0d0d]">
        <div className="h-full w-full flex flex-col lg:flex-row justify-center items-center p-6 bg-amber-300 gap-16">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl">
            Hi, I’m Jaohar Bahy Dwi Tanto —
            <br />a Informatics Management graduate who loves <br />
            crafting clean and interactive web experiences.
          </p>{" "}
          <div className="relative w-[250px] h-[250px] flex items-center justify-center">
            <img
              src={BackCard}
              alt=""
              width={250}
              height={250}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 drop-shadow-[0_0_1px_white]"
            />
            <img
              src={ProfilCard}
              alt=""
              width={250}
              height={250}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 drop-shadow-[0_0_1px_white]"
            />
          </div>
        </div>
      </div>
      <div className="h-screen flex justify-center items-center bg-amber-300">
        <p className="max-w-3xl">
          I started my journey in cloud computing through Bangkit Academy
          (Google, Tokopedia, Gojek, Traveloka), where I learned how technology
          connects behind the scenes.
        </p>
      </div>
      <div className="h-screen flex justify-center items-center">
        <p className="max-w-3xl">
          Now, I’m focusing on front-end development, building responsive,
          user-friendly interfaces with modern tools like React and JavaScript.
        </p>
      </div>
      <div className="h-screen flex justify-center items-center bg-blue-400">
        <p className="max-w-3xl">
          I enjoy turning ideas into visual stories that people can feel, not
          just use. Every project I build is a step forward — blending logic,
          design, and a bit of curiosity along the way.
        </p>
      </div>
    </>
  );
};

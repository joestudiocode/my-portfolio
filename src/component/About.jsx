import React from "react";
import Navbar from "./Navbar";

export const About = () => {
  return (
    <>
      <Navbar title="Back to Menu" link="/" />
      <div className="sm:text-4xl md:text-4xl lg:text-3xl m-4 w-full h-full flex flex-col justify-center items-center">
        <div className="h-screen flex justify-center items-center">
          <p className="max-w-3xl">
            a Informatics Management graduate who loves crafting clean and
            interactive web experiences. Hi, I’m Jaohar Bahy Dwi Tanto —
          </p>
        </div>
        <div className="h-screen flex justify-center items-center">
          <p className="max-w-3xl">
            I started my journey in cloud computing through Bangkit Academy
            (Google, Tokopedia, Gojek, Traveloka), where I learned how
            technology connects behind the scenes.
          </p>
        </div>
        <div className="h-screen flex justify-center items-center">
          <p className="max-w-3xl">
            Now, I’m focusing on front-end development, building responsive,
            user-friendly interfaces with modern tools like React and
            JavaScript.
          </p>
        </div>
        <div className="h-screen flex justify-center items-center">
          <p className="max-w-3xl">
            I enjoy turning ideas into visual stories that people can feel, not just use.
Every project I build is a step forward — blending logic, design, and a bit of curiosity along the way.
          </p>
        </div>
      </div>
    </>
  );
};

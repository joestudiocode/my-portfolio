import React from "react";
import Navbar from "./Navbar";
import image from "../assets/image.png";
export const About = () => {
  return (
    <>
      <Navbar title="Back to Menu" link="/" />
      <div className="w-full h-full bg-blue-900">
        <div className="sm:text-4xl md:text-4xl lg:text-3xl w-full h-full flex flex-col justify-center items-center bg-red-500">
          <div className="h-screen flex justify-between items-center gap-24">
            <p className="max-w-3xl ">
              Hi, I’m Jaohar Bahy Dwi Tanto —
              <br />a Informatics Management graduate who loves <br />
              crafting clean and interactive web experiences.
            </p>{" "}
            <img
              class="cursor-pointer"
              src={image}
              alt="my-profile"
              width={400}
              height={400}
            />
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
              I enjoy turning ideas into visual stories that people can feel,
              not just use. Every project I build is a step forward — blending
              logic, design, and a bit of curiosity along the way.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

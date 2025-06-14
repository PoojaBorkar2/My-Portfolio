"use client";
import React from "react";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl  lg:text-5xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm{" "}
            </span>
            <br />

            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Pooja",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "Full Stack Developer",
                1000,
                "Front-end Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <br />
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            To obtain a challenging career in the IT industry and put all my
            efforts into the growth of the organization and have a great working
            environment.
          </p>

          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <a
              href="/images/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  hover:bg-slate-800 text-white mt-3 inline-block"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                View CV
              </span>
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div
            className="rounded-full bg-[#181818] w-[250px] h-[250px] 
            lg:w-[350px] lg:h-[400px] relative"
          >
            <Image
              src="/images/hero-image.png"
              alt="hero img"
              width={300}
              height={300}
              className="absolute transform  -translate-x-1/2
            -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

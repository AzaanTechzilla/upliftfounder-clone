import React from "react";
import Videogif from "../assets/video-gif.webp";
const Section3 = () => {
  return (
    <>
      <section className="section3 bg-secondary">
        <div className="section3-wrapper">
          <div className="container mx-auto">
            <div className="flex py-5 md:py-0 lg:flex-row flex-col">
            <div className="content basis-[100%] lg:basis-[50%] self-center px-4 md:py-[5rem]">
              <p className="text-[2rem] lg:text-[3rem] leading-none font-sofia font-light">Building a successful company can feel like a rollercoaster ride. Compassion alone won't get you there.</p>
              <p className="text-[3rem] lg:text-[5rem] font-black uppercase">We will.</p>
            </div>
            <div className="image basis-[100%] lg:basis-[50%] self-start px-2">
              <figure className="w-full h-full">
                <img src={Videogif} alt="Gif" className="w-full h-full" />
              </figure>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section3;

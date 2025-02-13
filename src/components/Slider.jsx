import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation"; // Import Navigation CSS
import { EffectCards, Navigation } from "swiper/modules"; // Import Navigation Module
import Person from "../assets/personimg.webp";

const testimonials = [
  {
    name: "Christoph Pitter",
    image: Person,
    position: "CEO, Tech Startup",
  },
  {
    name: "Samantha Lee",
    image: Person,
    position: "Co-founder, Growth Inc.",
  },
  {
    name: "David Johnson",
    image: Person,
    position: "Product Manager, AI Solutions",
  },
];

const Slider = () => {
  return (
    <section className="section2">
      <div className="section2-wrapper">
        <div className="container mx-auto px-4">
          <div className="flex h-screen items-center justify-start mt-5 lg:justify-center flex-col lg:flex-row relative">
            <div className="w-full lg:w-1/2 flex justify-center ">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                loop={true}
                className="w-[90%] h-auto"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide
                    key={index}
                    className="flex items-center justify-center rounded-2xl text-2xl font-bold bg-primary border-[1.3px] border-black "
                  >
                    <div className=" p-3 md:p-6 lg:p-10 text-center">
                      <figure className="flex justify-center gap-2">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-[120px] rounded-full"
                        />
                        <figcaption className="mt-4">
                          <p className="font-semibold flex flex-col">
                            {testimonial.name}
                            <strong>{testimonial.position}</strong>
                          </p>
                        </figcaption>
                      </figure>
                      <p className="font-normal mt-3">
                        "Uplift Founders has revolutionized the way we approach entrepreneurship. They are not only providing guidance but also helping me navigate through the complexities of the startup world."
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start px-6 mt-6 lg:mt-0">
              <h3 className="text-center md:text-left leading-none font-black uppercase" style={{fontSize: "clamp(20px, 8vw, 5rem)"}}>
                Trusted by founders of high-growth startups
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;

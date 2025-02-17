import { memo, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Slider from "./components/Slider";
import Section3 from "./components/Section3";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState("dark");

  const toggleMenu = () => {
    setIsMenuOpen(isMenuOpen === "dark" ? "light" : "dark");
  };
  return (
    <>
      <Navbar />
      <Herosection />
      <Slider />
      <Section3 />
      <div className={isMenuOpen}>
        <section className="section4">
          <div className="section4-wrapper py-3 sm:py-3 md:py-8">
            <div className="container mx-auto">
              <div className=" py-5 sm:py-12 flex lg:flex-row flex-col items-center gap-5">
                <div className="basis-[50%] px-4">
                  <h4
                    className=" leading-[0.7] font-black uppercase"
                    style={{ fontSize: "clamp(20px , 9vw, 6rem" }}
                  >
                    We empower you to become the founder your company needs to
                    scale faster
                  </h4>
                </div>
                <div className="basis-[50%] px-4">
                  <div className={`tab`}>
                    <div className="tab-nav flex items-center justify-between p-3 sm:py-4 sm:px-8">
                      <h5
                        className={`text-xl sm:text-4xl font-sofia italic font-semibold tracking-wider`}
                      >
                        {isMenuOpen === "dark"
                          ? "Shaky Founders"
                          : "Uplifted Founders"}
                      </h5>
                      <button
                        onClick={toggleMenu}
                        className="modebtn text-sm sm:px-3 sm:py-2 sm:text-lg"
                      >
                        {isMenuOpen === "dark" ? "Dark Mode" : "Light Mode"}
                      </button>
                    </div>
                    <div className="tab-content">
                      <div className="sm:p-12 p-5">
                        <ul className="flex flex-col">
                          <li className="flex items-start py-2 sm:py-5">
                            <div className="flex gap-12">
                              <p className="uppercase text-lg leading-none sm:text-2xl">
                                Decision Making
                              </p>
                              <p className=" text-sm sm:text-lg">
                                {isMenuOpen === "dark"
                                  ? "Hesitant and unsure, often stuck in overthinking."
                                  : "Decisive and confident, cutting through noise with clarity."}
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start py-2 sm:py-5">
                            <div className="flex gap-5">
                              <p className="uppercase text-lg leading-none sm:text-2xl">
                                Relationships & Leadership
                              </p>
                              <p className=" text-sm sm:text-lg">
                                {isMenuOpen === "dark"
                                  ? "Struggling with co-founder tensions, team misalignment, and external pressures."
                                  : "Building trust, inspiring action, and leading with accountability across all stakeholders."}
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start py-2 sm:py-5">
                            <div className="flex gap-5">
                              <p className="uppercase text-lg leading-none sm:text-2xl">
                                Emotional Stability
                              </p>
                              <p className="text-sm sm:text-lg">
                                {isMenuOpen === "dark"
                                  ? "Riding the emotional rollercoaster of stress and self-doubt."
                                  : "Grounded and resilient, navigating the highs and lows with mindfulness and focus."}
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section5">
          <div className="section5-wrapper bg-secondary">
            <div className="container mx-auto">
              <div className="content flex sm:items-center justify-start flex-col px-5 py-4 sm:py-1 sm:px-3 sm:flex-row">
                <h4
                  className="basis-[50%] font-black leading-none"
                  style={{ fontSize: "clamp(20px , 8vw, 6.5rem)" }}
                >
                  Core <br className="hidden sm:block" /> Belief
                </h4>
                <p
                  className="basis-[50%] text-lg leading-none "
                  style={{ fontSize: "clamp(20px , 3vw, 2.7rem)" }}
                >
                  Deep relationships (Inner game) coupled with bold aspirations
                  for results (Outer game) are the foundation for lasting
                  growth.{" "}
                </p>
              </div>
              <div className="px-4">
              <div className="flex items-center border-[1.5px] flex-col md:flex-row border-black w-[100%] my-5">
                <div className="border-b-[1.5px] md:border-r-[1.5px] border-black py-4 px-8 w-full md:basis-[50%] md:py-5 md:px-8 lg:py-8 lg:px-12">
                  <p className="flex items-center gap-1 my-2">
                    <span>
                      <svg
                        fill="none"
                        height="19"
                        viewBox="0 0 20 19"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m17.5003 1.49994c-4.4623-2.99448-7.5002 3.21771-7.5002 3.21771s-2.26426-6.11942-7.00003-3.21765c-6.53729 4.00564 2.00006 13 7.00003 16.5002 4.9999-3.5002 12.5379-11.99476 7.5002-16.50026z"
                          fill="#c9c995"
                          stroke="#000"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                    The Inner Game
                  </p>
                  <h3 className=" md:text-3xl lg:text-5xl font-fraunces">How can we unlock your full potential?</h3>
                  <p className="my-2 sm:text-md md:text-2xl">Understanding you as a person and team</p>
                  <ul className="list-disc">
                    <li>Understanding core values and drivers</li>
                    <li>Observing decision patterns and tendencies</li>
                    <li>Overcoming fears of failure</li>
                    <li>Understanding team dynamics and strengths</li>
                    <li>Identifying and mitigating blind spots in your team</li>
                    <li>Clutivating Carlity (No BS)</li>
                    <li>...</li>
                  </ul>
                </div>
                <div className="right-content relative  basis-[100%] w-full py-8 px-8  md:basis-[50%] md:py-5 md:px-8 lg:py-8 lg:px-12">
                  <p className="uppercase flex items-center gap-1">
                    <span>
                      <svg
                        fill="none"
                        height="21"
                        viewBox="0 0 20 21"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m9.95362 8.1945c-1.99999-2.4998-5.67919-4.88178-7.19985-3.53004-1.52068 1.35187-.07629 5.45934 3.22618 9.17414 3.30249 3.7149 7.21245 5.6304 8.73315 4.2786 1.5206-1.3519-1.2595-5.9224-2.7595-7.4224"
                          fill="#c9c995"
                        ></path>
                        <path
                          d="m9.95362 8.1945c-1.99999-2.4998-5.67919-4.88178-7.19985-3.53004-1.52068 1.35187-.07629 5.45934 3.22618 9.17414 3.30249 3.7149 7.21245 5.6304 8.73315 4.2786 1.5206-1.3519-1.2595-5.9224-2.7595-7.4224"
                          stroke="#000"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="m14.4033 5.79102-5.99998 5.99998z"
                          fill="#c9c995"
                        ></path>
                        <g stroke="#000">
                          <path
                            d="m14.4033 5.79102-5.99998 5.99998"
                            stroke-linejoin="round"
                          ></path>
                          <path d="m17.5853 6.14442h-3.5355v-3.53553"></path>
                          <path d="m19.3041 4.53553h-3.5355v-3.53553"></path>
                        </g>
                      </svg>
                    </span>
                    The outer game
                  </p>
                  <h3 className=" md:text-3xl lg:text-5xl font-fraunces">How can we unlock your full potential?</h3>
                  <p className="my-2 sm:text-md md:text-2xl">Understanding you as a person and team</p>
                  <ul className="list-disc">
                    <li>Understanding core values and drivers</li>
                    <li>Observing decision patterns and tendencies</li>
                    <li>Overcoming fears of failure</li>
                    <li>Understanding team dynamics and strengths</li>
                    <li>Identifying and mitigating blind spots in your team</li>
                    <li>Clutivating Carlity (No BS)</li>
                    <li>...</li>
                  </ul>
                </div>
              </div>
              </div>
                <button className="btn" style={{position: 'relative', left: '50%', transform: 'translateX(-50%)'}}>Tell us About You</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default memo(App);

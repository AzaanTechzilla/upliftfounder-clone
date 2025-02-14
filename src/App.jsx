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
        <div className="section4-wrapper">
          <div className="container mx-auto">
            <div className="py-12 flex lg:flex-row flex-col gap-5">
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
                    <h5 className={`text-xl sm:text-4xl font-sofia italic font-semibold tracking-wider`}>{isMenuOpen === 'dark' ? 'Shaky Founders': 'Uplifted Founders'}</h5>
                    <button onClick={toggleMenu} className="modebtn text-sm sm:px-3 sm:py-2 sm:text-lg">{isMenuOpen === 'dark' ? "Dark Mode": "Light Mode"}</button>
                  </div>
                  <div className="tab-content">
                      <div className="sm:p-12 p-5">
                        <ul className="flex flex-col">
                          <li className="flex items-start py-2 sm:py-5">
                            <div className="flex gap-12">
                              <p className="uppercase text-lg leading-none sm:text-2xl">Decision Making</p>
                              <p className=" text-sm sm:text-lg">{isMenuOpen ==='dark' ?  "Hesitant and unsure, often stuck in overthinking." : 'Decisive and confident, cutting through noise with clarity.'}</p>
                            </div>
                          </li>
                          <li className="flex items-start py-2 sm:py-5">
                          <div className="flex gap-5">
                              <p className="uppercase text-lg leading-none sm:text-2xl">Relationships & Leadership</p>
                              <p className=" text-sm sm:text-lg">{isMenuOpen === 'dark' ?  'Struggling with co-founder tensions, team misalignment, and external pressures.' : 'Building trust, inspiring action, and leading with accountability across all stakeholders.'}</p>
                            </div>
                          </li>
                          <li className="flex items-start py-2 sm:py-5">
                          <div className="flex gap-5">
                              <p className="uppercase text-lg leading-none sm:text-2xl">Emotional Stability</p>
                              <p className="text-sm sm:text-lg">{isMenuOpen === 'dark' ? 'Riding the emotional rollercoaster of stress and self-doubt.': 'Grounded and resilient, navigating the highs and lows with mindfulness and focus.'}</p>
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
      </div>
    </>
  );
}

export default memo(App);

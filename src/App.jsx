import { memo, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Slider from "./components/Slider";
import Section3 from "./components/Section3";
import Review1 from "./assets/review1.webp";
import Review2 from "./assets/review2.webp";
import Img1 from "./assets/hero-image-1.webp";
import Img2 from "./assets/team-group.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LogoBigger from "./assets/logo-bigger.svg"
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState("dark");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(isMenuOpen === "dark" ? "light" : "dark");
  };
  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "We accept returns within 30 days of purchase with a valid receipt.",
    },
    {
      question: "How do I track my order?",
      answer:
        "You can track your order through the tracking link sent via email.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship worldwide with additional shipping costs.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship worldwide with additional shipping costs.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship worldwide with additional shipping costs.",
    },
  ];
  useGSAP(() => {
    gsap.to(".ready-animation", {
      y: 20,
      duration: 1,
      ease: "power.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, []);
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
          <div className="section5-wrapper bg-secondary py-5">
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
                    <h3 className=" md:text-3xl lg:text-5xl font-fraunces">
                      How can we unlock your full potential?
                    </h3>
                    <p className="my-2 sm:text-md md:text-2xl">
                      Understanding you as a person and team
                    </p>
                    <ul className="list-disc">
                      <li>Understanding core values and drivers</li>
                      <li>Observing decision patterns and tendencies</li>
                      <li>Overcoming fears of failure</li>
                      <li>Understanding team dynamics and strengths</li>
                      <li>
                        Identifying and mitigating blind spots in your team
                      </li>
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
                    <h3 className=" md:text-3xl lg:text-5xl font-fraunces">
                      How can we unlock your full potential?
                    </h3>
                    <p className="my-2 sm:text-md md:text-2xl">
                      Understanding you as a person and team
                    </p>
                    <ul className="list-disc">
                      <li>Understanding core values and drivers</li>
                      <li>Observing decision patterns and tendencies</li>
                      <li>Overcoming fears of failure</li>
                      <li>Understanding team dynamics and strengths</li>
                      <li>
                        Identifying and mitigating blind spots in your team
                      </li>
                      <li>Clutivating Carlity (No BS)</li>
                      <li>...</li>
                    </ul>
                  </div>
                </div>
              </div>
              <button
                className="btn"
                style={{
                  position: "relative",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                Tell us About You
              </button>
            </div>
          </div>
        </section>
        <section className="reviews">
          <div className="reviews-wrapper py-5">
            <div className="container mx-auto">
              <div className="flex flex-col md:flex-row items-center px-4">
                <h2
                  className="text-center leading-[0.75] font-black basis-[50%]"
                  style={{ fontSize: "clamp(30px, 8vw, 7rem)" }}
                >
                  We’ve been through it all
                </h2>
                <div className="flex gap-5 md:gap-12 py-5 md:py-0 items-center">
                  <figure className=" basis-[50%] h-auto">
                    <img src={Review1} alt="" className="w-full h-auto" />
                    <figcaption className="mt-3">
                      <p className="text-2xl text-center">Yannick Frank</p>
                    </figcaption>
                  </figure>
                  <figure className=" basis-[50%] h-auto">
                    <img src={Review2} alt="" className="w-full h-auto" />
                    <figcaption className="mt-3">
                      <p className="text-2xl text-center">Till Augner</p>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="flex flex-wrap justify-center md:flex-row items-center py-8 px-4 gap-5">
                <div className="basis-[100%] lg:basis-[31%] border-[1.5px] border-black p-[5%]">
                  <div className="flex flex-col items-center justify-center">
                    <span>
                      <svg
                        fill="none"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g stroke="#141b34" stroke-linecap="round">
                          <g stroke-linejoin="round">
                            <path d="m12.5 2.01228c-.1656-.00815-.3323-.01228-.5-.01228-5.52285 0-10 4.47715-10 10 0 5.5228 4.47715 10 10 10 5.5228 0 10-4.4772 10-10 0-.8632-.1094-1.701-.315-2.5"></path>
                            <path d="m8 15c.91212 1.2144 2.3643 2 4 2s3.0879-.7856 4-2"></path>
                            <path d="m10 9.5h-1.29289c-.45276 0-.88697.17986-1.20711.5m6.5-.5h1.2929c.4527 0 .887.17986 1.2071.5"></path>
                          </g>
                          <path d="m15.8881 2.33113c.9386-.5483 1.7578-.32734 2.2499.02462.2018.14432.3026.21648.362.21648s.1602-.07216.362-.21648c.4921-.35196 1.3113-.57292 2.2499-.02462 1.2318.7196 1.5105 3.09357-1.3307 5.0964-.5412.38148-.8118.57222-1.2812.57222s-.74-.19074-1.2812-.57222c-2.8412-2.00283-2.5625-4.3768-1.3307-5.0964z"></path>
                        </g>
                      </svg>
                    </span>
                    <h5 className="text-2xl lg:text-3xl font-fraunces my-2">
                      Empathy
                    </h5>
                    <p className="text-md lg:text-xl font-fraunces text-center">
                      We’ve built 10 businesses ourselves that mirror your
                      journey.
                    </p>
                  </div>
                </div>
                <div className="basis-[100%] lg:basis-[31%] border-[1.5px] border-black p-[5%]">
                  <div className="flex flex-col items-center justify-center">
                    <span>
                      <svg
                        fill="none"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g stroke="#141b34" stroke-linecap="round">
                          <g stroke-linejoin="round">
                            <path d="m12.5 2.01228c-.1656-.00815-.3323-.01228-.5-.01228-5.52285 0-10 4.47715-10 10 0 5.5228 4.47715 10 10 10 5.5228 0 10-4.4772 10-10 0-.8632-.1094-1.701-.315-2.5"></path>
                            <path d="m8 15c.91212 1.2144 2.3643 2 4 2s3.0879-.7856 4-2"></path>
                            <path d="m10 9.5h-1.29289c-.45276 0-.88697.17986-1.20711.5m6.5-.5h1.2929c.4527 0 .887.17986 1.2071.5"></path>
                          </g>
                          <path d="m15.8881 2.33113c.9386-.5483 1.7578-.32734 2.2499.02462.2018.14432.3026.21648.362.21648s.1602-.07216.362-.21648c.4921-.35196 1.3113-.57292 2.2499-.02462 1.2318.7196 1.5105 3.09357-1.3307 5.0964-.5412.38148-.8118.57222-1.2812.57222s-.74-.19074-1.2812-.57222c-2.8412-2.00283-2.5625-4.3768-1.3307-5.0964z"></path>
                        </g>
                      </svg>
                    </span>
                    <h5 className="text-2xl lg:text-3xl font-fraunces my-2">
                      Empathy
                    </h5>
                    <p className="text-md lg:text-xl font-fraunces text-center">
                      We’ve built 10 businesses ourselves that mirror your
                      journey.
                    </p>
                  </div>
                </div>
                <div className="basis-[100%] lg:basis-[31%] border-[1.5px] border-black p-[5%]">
                  <div className="flex flex-col items-center justify-center">
                    <span>
                      <svg
                        fill="none"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g stroke="#141b34" stroke-linecap="round">
                          <g stroke-linejoin="round">
                            <path d="m12.5 2.01228c-.1656-.00815-.3323-.01228-.5-.01228-5.52285 0-10 4.47715-10 10 0 5.5228 4.47715 10 10 10 5.5228 0 10-4.4772 10-10 0-.8632-.1094-1.701-.315-2.5"></path>
                            <path d="m8 15c.91212 1.2144 2.3643 2 4 2s3.0879-.7856 4-2"></path>
                            <path d="m10 9.5h-1.29289c-.45276 0-.88697.17986-1.20711.5m6.5-.5h1.2929c.4527 0 .887.17986 1.2071.5"></path>
                          </g>
                          <path d="m15.8881 2.33113c.9386-.5483 1.7578-.32734 2.2499.02462.2018.14432.3026.21648.362.21648s.1602-.07216.362-.21648c.4921-.35196 1.3113-.57292 2.2499-.02462 1.2318.7196 1.5105 3.09357-1.3307 5.0964-.5412.38148-.8118.57222-1.2812.57222s-.74-.19074-1.2812-.57222c-2.8412-2.00283-2.5625-4.3768-1.3307-5.0964z"></path>
                        </g>
                      </svg>
                    </span>
                    <h5 className="text-2xl lg:text-3xl font-fraunces my-2">
                      Empathy
                    </h5>
                    <p className="text-md lg:text-xl font-fraunces text-center">
                      We’ve built 10 businesses ourselves that mirror your
                      journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="faq">
          <div className="faq-wrapper">
            <div className="container mx-auto">
              <div className="flex flex-wrap flex-col sm:flex-row sm:items-start px-4">
                <h3
                  className="font-black basis-[50%]"
                  style={{ fontSize: "clamp(20px, 8vw, 6rem)" }}
                >
                  FAQ
                </h3>
                <div className=" border-[1.5px] border-black basis-[50%] ">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="p-4 cursor-pointer border-b-[1.5px] border-black hover:bg-secondary "
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold">{faq.question}</h3>
                        <span>{openIndex === index ? "▲" : "▼"}</span>
                      </div>
                      {openIndex === index && (
                        <p className="mt-2 text-black">{faq.answer}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ready ">
          <div className="ready-wrapper relative bg-[#6b5ee1] py-[10.5%] my-12 text-white">
            <div className="container mx-auto">
              <div className="flex flex-col justify-center items-center">
                <h2
                  className="font-black text-center w-[50%] leading-[0.75] uppercase"
                  style={{ fontSize: "clamp(20px, 8vw, 8rem)" }}
                >
                  Ready for an uplift?
                </h2>
                <p
                  className="leading-[1] font-fraunces text-center w-[70%] my-4"
                  style={{ fontSize: "clamp(10px , 3vw, 1.5rem)" }}
                >
                  We're on a mission to make scaling a company smoother by
                  empowering founders to become extraordinary leaders.
                </p>
                <button
                  className="btn "
                  style={{ background: "black", color: "white" }}
                >
                  Tell About you
                </button>
              </div>
            </div>
            <figure className="ready-animation  w-[15%] h-auto absolute top-[-20%] left-[5%]">
              <img src={Img1} alt="" className="w-full h-auto" />
            </figure>
            <figure className="ready-animation w-[15%] h-auto absolute bottom-[-5%] right-[3%]">
              <img src={Img2} alt="" className="w-full h-auto" />
            </figure>
          </div>
        </section>
        <footer>
          <div className="footer-wrapper border-b-[1.5px] border-black">
            <div className="container mx-auto">
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between py-3 sm:py-5 px-4">
                <ul className="flex gap-3 sm:gap-5">
                  <li className="sm:text-xl font-fraunces uppercase">What founders say</li>
                  <li  className="sm:text-xl font-fraunces uppercase"> Manifesto</li>
                  <li  className="sm:text-xl font-fraunces uppercase"> About Us</li>
                </ul>
                <ul className="flex items-center gap-3 justify-self-end">
                  <li>
                    <svg
                      fill="none"
                      height="34"
                      viewBox="0 0 34 34"
                      width="34"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g stroke="#000">
                        <circle cx="17" cy="17" r="16"></circle>
                        <g stroke-linejoin="round">
                          <path d="m9.56543 12.6956 5.41017 3.0654c1.9946 1.1301 2.8373 1.1301 4.8318 0l5.4102-3.0654"></path>
                          <path d="m9.57777 18.546c.05116 2.3992.07674 3.5987.96193 4.4873.8853.8886 2.1173.9195 4.5813.9814 1.5187.0382 3.0224.0382 4.541 0 2.4641-.0619 3.696-.0928 4.5813-.9814.8852-.8886.9108-2.0881.9619-4.4873.0166-.7714.0166-1.5382 0-2.3096-.0511-2.3991-.0767-3.5987-.9619-4.4873-.8853-.8886-2.1172-.9196-4.5813-.9815-1.5186-.0381-3.0223-.0381-4.541 0-2.464.0619-3.696.0929-4.5813.9815-.88519.8886-.91077 2.0881-.96194 4.4873-.01645.7714-.01644 1.5382.00001 2.3096z"></path>
                        </g>
                      </g>
                    </svg>
                  </li>
                  <li>
                    <svg
                      fill="none"
                      height="34"
                      viewBox="0 0 34 34"
                      width="34"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g stroke="#000">
                        <circle cx="17" cy="17" r="16"></circle>
                        <path d="m11.522 15.4348h-.3914c-.7378 0-1.1067 0-1.33595.2292-.22922.2293-.22922.5982-.22922 1.336v6.6522c0 .7378 0 1.1068.22922 1.336.22925.2292.59815.2292 1.33595.2292h.3914c.7378 0 1.1067 0 1.336-.2292.2292-.2292.2292-.5982.2292-1.336v-6.6522c0-.7378 0-1.1067-.2292-1.336-.2293-.2292-.5982-.2292-1.336-.2292z"></path>
                        <path d="m13.0872 11.3261c0 .9725-.7884 1.7608-1.7609 1.7608s-1.76087-.7883-1.76087-1.7608.78837-1.76091 1.76087-1.76091 1.7609.78841 1.7609 1.76091z"></path>
                        <path
                          d="m17.6462 15.4348h-.6464c-.7379 0-1.1068 0-1.336.2292-.2292.2293-.2292.5982-.2292 1.336v6.6522c0 .7378 0 1.1068.2292 1.336s.5981.2292 1.336.2292h.3913c.7378 0 1.1068 0 1.336-.2292s.2292-.5982.2292-1.336l.0001-2.739c0-1.2967.4132-2.3479 1.6339-2.3479.6103 0 1.1051.5256 1.1051 1.1739v3.5218c0 .7378 0 1.1067.2293 1.336.2291.2292.5981.2292 1.336.2292h.3902c.7377 0 1.1066 0 1.3358-.2292.2292-.2291.2293-.5979.2295-1.3356l.0011-4.3047c0-1.9449-1.8499-3.5217-3.6809-3.5217-1.0423 0-1.9722.5109-2.58 1.3099-.0001-.4931-.0001-.7396-.1072-.9227-.0678-.1159-.1644-.2124-.2803-.2803-.183-.1071-.4296-.1071-.9227-.1071z"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                    </svg>
                  </li>
                </ul>
              </div>
  
            </div>
          </div>
          <div className="container mx-auto">
          <div className="py-5 flex justify-between items-center px-4">
                <p className="text-gray-700">© 2025 Uplift Founders</p>
                <figure className="w-[10%] h-auto">
                  <img src={LogoBigger} alt="" className="w-full h-auto" />
                </figure>
                <ul className="flex items-center gap-4">
                  <li className="text-gray-700">Imprint</li>
                  <li className="text-gray-700">Privacy</li>
                </ul>
              </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default memo(App);

import React from "react";
import Logo from "../assets/logo.svg";
const Navbar = () => {
  return (
    <>
      <header className="hidden lg:block md:py-5 lg:py-7 md:px-4 lg:px-5 border-b-[1.3px] border-black">
        <nav className="container mx-auto">
          <div className="flex items-center justify-between">
            <figure>
              <img src={Logo} alt="Logo" />
            </figure>
            <div>
              <ul className="ulitems flex items-center gap-8 relative">
                <li className="text-xl tracking-[0.2rem] relative uppercase cursor-pointer list1">What Founders Say</li>
                <li className="text-xl tracking-[0.2rem] relative uppercase cursor-pointer list2"> Manifesto</li>
                <li className="text-xl tracking-[0.2rem] relative uppercase cursor-pointer list3">About Us</li>
                <li><button className="btn">Tell us About you</button></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <header className=" block lg:hidden md:py-5 lg:py-7 md:px-2 lg:px-5 ">
        <nav className="container mx-auto">
          <div className="flex items-center justify-between my-2">
            <figure>
              <img src={Logo} alt="Logo" />
            </figure>
            <button className="btn">Tell us About you</button>
          </div>
        </nav>
          <div className="border-t-[1.3px] border-b-[1.3px] border-black py-4">
              <ul className="ulitems flex justify-center items-center gap-3 relative">
                <li className="sm:text-lg relative text-sm tracking-[0.2rem] uppercase cursor-pointer list1">What Founders Say</li>
                <li className="sm:text-lg relative text-sm tracking-[0.2rem] uppercase cursor-pointer list2"> Manifesto</li>
                <li className="sm:text-lg relative text-sm tracking-[0.2rem] uppercase cursor-pointer list3">About Us</li>
                <li></li>
              </ul>
            </div>
      </header>
    </>
  );
};

export default Navbar;

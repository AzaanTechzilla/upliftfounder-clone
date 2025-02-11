import React from 'react'
import Heroimg1 from "../assets/hero-image-1.webp"
import Heroimg2 from "../assets/team-group.webp"
const Herosection = () => {
  return (
    <>
      <section className='herosection'>
    <div className="hero-wrapper">
        <div className="container mx-auto relative">
            <div className='px-5'>
            <h1 className=" font-black  uppercase block py-[5rem]" style={{lineHeight: '0.75', fontSize: "clamp(80px , 20vw, 300px)"}}>
               We <strong className='inline lg:ml-[94px]' >Uplift</strong> Founders
            </h1>
            <p className="md:w-[80%] font-extralight mb-4" style={{fontSize: "clamp(20px , 4.5vw, 82px)", lineHeight: "1"}}>
            Helping <span className='font-work italic lowercase'>founders</span> to GROW through <span className='font-work italic lowercase'> uncertainty</span> & MAXIMIZE their impact.
            </p>
            <button className="btn btn-primary">Tell us about you</button>
            </div>
            <figure className='absolute sm:top-0 z-[-1] w-[10%] ' style={{left: "calc(100% - 75%)"}}>
              <img src={Heroimg1} alt="" className='w-full h-full' />
            </figure>
            <figure className='absolute bottom-[10%] z-[-1] w-[17%] right-[5%]'>
              <img src={Heroimg2} alt="" />
            </figure>
        </div>
    </div>
      </section>
    </>
  )
}

export default Herosection

import React from 'react'
import Heroimg1 from "../assets/hero-image-1.webp"
import Heroimg2 from "../assets/team-group.webp"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const Herosection = () => {
  useGSAP(()=>{
    gsap.to('.figure-animate',{
      y: 20,
      duration: 1,
      ease: 'power.inOut',
      yoyo: true,
      repeat: -1,
    })
  },[])
  return (
    <>
      <section className='herosection'>
    <div className="hero-wrapper">
        <div className="container mx-auto relative">
            <div className='px-5'>
            <h1 className=" font-black  uppercase block py-3 md:py-[5rem] lg:py-5" style={{lineHeight: '0.75', fontSize: "clamp(80px , 20vw, 300px)"}}>
               We <strong className='inline lg:ml-[94px]' >Uplift</strong> Founders
            </h1>
            <p className="md:w-[80%] font-extralight mb-4" style={{fontSize: "clamp(20px , 4.5vw, 82px)", lineHeight: "1"}}>
            Helping <span className='font-work italic lowercase'>founders</span> to GROW through <span className='font-work italic lowercase'> uncertainty</span> & MAXIMIZE their impact.
            </p>
            <button className="btn btn-primary">Tell us about you</button>
            </div>
            <figure className='figure-animate absolute sm:top-0 z-[-1] w-[10%] hidden md:block ' style={{left: "calc(100% - 75%)"}}>
              <img src={Heroimg1} alt="" className='w-full h-full' />
            </figure>
            <figure className=' figure-animate absolute bottom-[10%] z-[-1] w-[17%] right-[5%] hidden md:block'>
              <img src={Heroimg2} alt="" />
            </figure>
        </div>
    </div>
      </section>
    </>
  )
}

export default Herosection

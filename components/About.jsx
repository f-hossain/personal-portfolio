import React from 'react'
import Image from 'next/image'
import about from '../public/about.jpg'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const About = () => {
  const popVariant = {
    visible: { opacity: 1,  y: 0, transition: {duration: 0.8} },
    hidden: { opacity: 0,  y: 50 },
  }

  const slideVariant = {
    visible: { opacity: 1, x: 0, transition: {duration: 0.8} },
    hidden: { opacity: 0, x: 250 },
  }

  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } 
  }, [control, inView]);

  return (
    <div id='about' className='flex flex-col justify-content w-full pb-12 px-6 md:px-24'>
        {/*  section title */}
        <div className='flex flex-row'>
          <div className='inline-block mb-8 text-3xl'>
              <p className='custom_heading playfair'>get to know me.</p>
          </div>
        </div>

        {/* content container */}
        <div className='flex flex-col md:flex-row justify-center items-center content-center md:space-x-12 md:divide-x-2 border-solid border-neutral-200 md:pt-9 px-2'>
            <motion.div ref={ref} variants={popVariant} initial="hidden" animate={control} className='w-96'>
              <Image src={about} />
            </motion.div>
            <motion.div ref={ref} variants={slideVariant} initial="hidden" animate={control} className='flex flex-col justify-items-center md:justify-items-start w-3/4'>
              <div className='text-xl md:pl-10 pt-3 md:pt-10 underline underline-offset-8 decoration-slate-200 md:no-underline poppins text-stone-700'>Fariha (fah · ree · uh) :</div>
              <div className='md:pl-10 pt-5 md:pb-10 text-sm'>
              <p className='bg-slate-100 p-2 rounded text-slate-500 '>❝ <i>Previously: </i> a bright eyed girl with too much time on her hands and access to tumblr.com who built custom themes for blogs using html/css. 
              <br />
              <br />
              <i>Currently: </i> a full stack developer with over 2 years of professional experience (<a href='https://github.com/f-hossain' target='_blank' rel="noreferrer">+ countless years of random side projects</a>) and a BASc in Nanotechnology Engineering from the University of Waterloo ❞</p>
           
              <br />
              I consider myself a free-spirit and an avid pursuer of many random hobbies. You can talk to me about anything ranging from hiking, video games and sustainability. I&apos;m also a bit of a linguistics nerd and know and/or am learning 7 languages - so come say hi (in whichever language you please)!
              </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About
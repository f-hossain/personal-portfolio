import React from 'react'
import Image from 'next/image'
import about from '../public/newabt.jpeg'
import { motion } from "framer-motion";

const About = () => {
  const popVariant = {
    visible: { opacity: 1,  y: 0, transition: {duration: 0.8} },
    hidden: { opacity: 0,  y: 50 },
  }

  return (
    <div id='about' className='flex flex-col justify-content w-full pt-28 md:pt-12 pb-12 px-6 md:px-24'>
        {/*  section title */}
        <div className='flex flex-row'>
          <div className='inline-block mb-10 text-3xl'>
              <p className='custom_heading biro title-color'>get to know me.</p>
          </div>
        </div>

        {/* content container */}
        <div className='flex flex-col md:flex-row justify-center items-center content-center md:space-x-12 md:divide-x-2 divide-stone-200 border-solid border-stone-200 md:pt-9 px-2'>
            <motion.div variants={popVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className='w-96 px-0'>
              <Image className='hover:grayscale-0 rounded transition-all opacity-90' src={about} priority={true} />
            </motion.div>
            <motion.div variants={popVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className='flex flex-col justify-items-center md:justify-items-start w-full px-0 md:w-3/4'>
              {/* phonetic notation would actually be ˈfɑriə */}
              <div className='text-xl md:pl-10 pt-10 md:pt-10 underline underline-offset-8 decoration-slate-200 md:no-underline montserrat text-stone-700'>Fariha (fah · ree · uh) :</div>
              <div className='md:pl-10 pt-5 md:pb-10 text-sm montserrat'>
                <p className='definition p-4 rounded text-stone-500 biro text-base tracking-wide'>
                  <i>Previously: </i> <br/> a bright eyed girl with too much time on her hands and access to tumblr.com who built custom themes for blogs using html and css. <br /><br />
                  <i>Currently: </i> <br/> a full stack developer with over 3 years of professional experience (<a href='https://github.com/f-hossain' target='_blank' rel="noreferrer">+ countless years of random side projects</a>) and a BASc in Nanotechnology Engineering from the University of Waterloo
                </p>
                <br />
                <p className='pt-2 md:pt-0'>I consider myself a free-spirit and an avid pursuer of many random hobbies. You can talk to me about anything ranging from hiking, video games and sustainability. I&apos;m also a bit of a linguistics nerd and know and/or am learning 7 languages - so come say hi (in whichever language you please)!</p>
              </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About
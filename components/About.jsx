import React from 'react'
import Image from 'next/image'
import about from '../public/about.jpg'

const About = () => {
  return (
    <div id='about' className='flex flex-col justify-content w-full pb-12 font-mono px-6 md:px-24'>
        {/*  section title */}
        <div className='flex flex-row'>
          <div className='inline-block mb-8 text-2xl'>
              <p className='custom_heading'>get to know me.</p>
          </div>
        </div>

        {/* content container */}
        <div className='flex flex-col md:flex-row justify-center items-center content-center md:space-x-12 md:divide-x-2 border-solid border-neutral-200 md:pt-9'>
            <div className='w-96'>
              <Image src={about} />
            </div>
            <div className='flex flex-col justify-items-center md:justify-items-start w-3/4'>
              <div className='text-xl md:pl-10 pt-3 md:pt-10 underline underline-offset-8 decoration-slate-200 md:no-underline'><i>Fariha (fa · ree · uh) :</i></div>
              <div className='md:pl-10 pt-5 md:pb-10 text-sm'>
              <i>❝ Previously: bright eyed girl with too much time on her hands and access to tumblr.com who built custom themes for blogs using html/css. 
              <br />
              <br />
              Currently: a full stack developer with over 2 years of professional experience (<a href='https://github.com/f-hossain' target='_blank' rel="noreferrer">+ 10 years of random side projects</a>) and a BASc in Nanotechnology Engineering from the University of Waterloo ❞</i>
              <br />
              {/* <br />
              <hr /> */}
              <br />
              I consider myself a free-spirit and an avid pursuer of many random hobbies. You can talk to me about anything ranging from hiking, video games and sustainability. I&apos;m also a bit of a linguistics nerd and know and/or am learning 7 languages - so come say hi (in whichever language you please)!
              </div>
            </div>
        </div>
    </div>
  )
}

export default About
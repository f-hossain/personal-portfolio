import React from 'react'
import Image from 'next/image'
// import profilePic from '../public/imgupd.jpg'
import flowah from '../public/flowh.png'
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";


const Header = () => {   

  const popVariant = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  }

  return (
    <div id='home' className='flex flex-col w-full h-screen py-10 md:pb-5 justify-center items-center'>
        {/* small lil intro abt me */}
        <div className='flex flex-col-reverse w-3/4 md:flex-row justify-center items-center md:h-full md:space-x-10 space-y-6 space-y-reverse pt-20 px-0 md:px-24'>
            <div className='flex flex-col space-y-8 pt-10 md:pt-0'>
                <div className='text-4xl biro title-color'>
                    <Typewriter
                        onInit={(typewriter) => {
                        typewriter.typeString("nice to meet you.")
                            .callFunction(() => {
                            console.log('whats up');
                            })
                            .start();
                        }}
                    />
                </div>
                <p className='montserrat text-sm'>Hi, I&apos;m Fariha :) I&apos;m a fullstack engineer interested in bridging communities and leveraging the power of many to accomplish social good.</p>
            </div>
            <motion.div variants={popVariant} initial="hidden" animate="visible" transition={{ duration: 0.7 }} className=' flex justify-center items-center'>
                <div className='image-circle pt-12 md:pt-0'>
                  <Image src={flowah} className='rounded-full ' priority={true}/>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Header
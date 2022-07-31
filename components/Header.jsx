import React from 'react'
import { useState, useRef } from "react";
import Image from 'next/image'
import { FaBars } from 'react-icons/fa'
import logo from '../public/logo_alt.png'
import placeholder from '../public/IMG_0870_Original.jpg'
import Typewriter from 'typewriter-effect';
import Link from 'next/link';


const Header = () => {   
  
  const [isActive, setActive] = useState("false");
    
  const handleToggle = () => {
      setActive(!isActive);
  }; 

  return (
    <div id='home' className='flex flex-col w-full h-screen pb-5'>
        {/* acc header */}
        <div className="header-2">
            <nav className="bg-white py-2 md:py-4">
                <div className="container px-4 mx-auto md:flex md:items-center">

                    <div className="flex justify-between items-center">
                        <div className='w-28'>
                            <Link href="/"><Image src={logo} /></Link>
                        </div>
                        <button className="px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" onClick={handleToggle}>
                            <FaBars size={28} />
                        </button>
                    </div>

                    <div className={isActive ? "hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0 page_links poppins" : "flex md:flex flex-col px-8 md:px-0 md:flex-row md:ml-auto mt-3 md:mt-0 page_links"}>
                        <a href="#about" className="p-2 lg:px-4 md:mx-2 text-gray-600 pb-3">about</a>
                        <a href="#work" className="p-2 lg:px-4 md:mx-2 text-gray-600 pb-3">experience</a>
                        <a href="#projects" className="p-2 lg:px-4 md:mx-2 text-gray-600 pb-3">projects</a>
                        <a href="#contact" className="p-2 lg:px-4 md:mx-2 text-gray-600 pb-3">contact</a>
                        <a href='https://drive.google.com/file/d/1PowjsE0lYj34jhP1q643G5xlfpi9fJXa/view?usp=sharing' target="_blank" rel="noreferrer" className="p-2 lg:px-4 md:mx-2 text-gray-600 pb-3">resume</a>
                    </div>
                </div>
            </nav>

        </div>

        {/* small lil intro abt me */}
        <div className='flex flex-col-reverse md:flex-row justify-center items-center md:h-full md:space-x-10 space-y-6 space-y-reverse pt-10 px-12 md:px-24'>
            <div className='flex flex-col items-center space-y-8 pt-10 md:pt-0'>
                <div className='text-4xl text-slate-500 poppins'>
                    <Typewriter
                        onInit={(typewriter) => {
                        typewriter.typeString('o hey .')
                            .callFunction(() => {
                            console.log('String typed out!');
                            })
                            .start();
                        }}
                    />
                </div>
                <p>I&apos;m Fariha, nice to meet you!</p>
            </div>
            <div className='w-80 md:w-96 flex justify-center items-center'>
                <div className='image-circle'>
                  <Image src={placeholder} className='rounded-full actual_image'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
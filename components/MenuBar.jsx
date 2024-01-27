import React from 'react'
import { useState } from "react";
import Image from 'next/image'
import { FaBars } from 'react-icons/fa'
import logo2 from '../public/logotwo.png'
import Link from 'next/link';


const MenuBar = () => {   
  
  const [isActive, setActive] = useState("false");
    
  const handleToggle = () => {
      setActive(!isActive);
  }; 

  return (
    <nav className="bg-slate-100 py-2 md:py-4 w-full fixed z-50">
        <div className="container px-4 mx-auto md:flex md:items-center">

            <div className="flex justify-between items-center">
                <div className='w-14'>
                    <Link href="/"><Image src={logo2} priority={true} /></Link>
                </div>
                <button className="px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" onClick={handleToggle}>
                    <FaBars size={28} />
                </button>
            </div>

            <div className={isActive ? "hidden md:flex flex-col md:flex-row md:ml-auto mt-3 pt-2 md:mt-0 page_links poppins" : "flex md:flex flex-col px-8 md:px-0 md:flex-row md:ml-auto mt-3 md:mt-0 page_links poppins"}>
                <a href="#about" className="p-2 lg:px-4 md:mx-2 text-gray-600 pb-3">about</a>
                <a href="#work" className="p-2 lg:px-4 md:mx-2 text-gray-600 pb-3">experience</a>
                <a href="#projects" className="p-2 lg:px-4 md:mx-2 text-gray-600 pb-3">projects</a>
                <a href="#contact" className="p-2 lg:px-4 md:mx-2 text-gray-600 pb-3">contact</a>
                {/* <a href="/blog" className="p-2 lg:px-4 md:mx-2 text-gray-600 pb-3">blog</a> */}
                <a href='https://drive.google.com/file/d/1bXkijVQEhP0aYmQKXBb65xj0lMwNEF58/view?usp=sharing' target="_blank" rel="noreferrer" className="p-2 lg:px-4 md:mx-2 text-gray-600 pb-3">resume</a>
            </div>
        </div>
    </nav>
  )
}

export default MenuBar
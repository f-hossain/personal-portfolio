import React from 'react'
import Image from 'next/image'
import placeholder from '../public/Screen Shot 2022-07-30 at 12.32.23 PM.png'
import { AiOutlineLink } from 'react-icons/ai'

const Projects = () => {
  return (
    <div className='flex flex-col justify-content w-full px-6 pb-12 md:pt-24 md:px-12 lg:px-24'>
        {/*  section title */}
        <div id='projects' className='flex flex-row'>
          <div className='inline-block mb-8 text-3xl'>
              <p className='custom_heading playfair'>some cool stuff.</p>
          </div>
        </div>

        {/* content container */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 md:px-10 pt-9'>

          {/* INDIVIDUAL CARD -- MICO */}
          <div className='rounded border border-slate-100 p-3 space-y-2 card'>
            {/* image */}
            <div>
              <Image src={placeholder} />
            </div>
            {/* title */}
            <div className='text-xl px-2 poppins underline underline-offset-8 decoration-slate-200 pb-2 text-stone-800'>Mico App</div>
            {/* desc */}
            <div className='text-justify px-2 text-stone-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt vitae semper quis lectus nulla at volutpat. Check out the source code <a href="">here</a>.</div>

  
            {/* tags -- optional & will add later */}
            <div className='flex flex-row space-x-2 py-2 poppins items-center justify-center'>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1">
                python
              </span>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1">
                ruby
              </span>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1">
                javascript
              </span>
            </div>

            {/* github link */}
            {/* <div className='text-slate-400 underline underline-slate-200 text-center p-2'>
              <a href="#" className='hover:text-slate-700'>source code</a>
            </div> */}
          </div>


          {/* INDIVIDUAL CARD -- MICO */}
          <div className='rounded border border-slate-100 p-3 space-y-2 card'>
            {/* image */}
            <div>
              <Image src={placeholder} />
            </div>
            {/* title */}
            <div className='text-xl px-2 poppins underline underline-offset-8 decoration-slate-200 pb-2 text-stone-800'>Mico App</div>
            {/* desc */}
            <div className='text-justify px-2 text-stone-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt vitae semper quis lectus nulla at volutpat. Check out the source code <a href="">here</a>.</div>

  
            {/* tags -- optional & will add later */}
            <div className='flex flex-row space-x-2 py-2 poppins items-center justify-center'>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1">
                python
              </span>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1">
                ruby
              </span>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1">
                javascript
              </span>
            </div>

            {/* github link */}
            {/* <div className='text-slate-400 underline underline-slate-200 text-center p-2'>
              <a href="#" className='hover:text-slate-700'>source code</a>
            </div> */}
          </div>


          {/* INDIVIDUAL CARD -- MICO */}
          <div className='rounded border border-slate-100 p-3 space-y-2 card'>
            {/* image */}
            <div>
              <Image src={placeholder} />
            </div>
            {/* title */}
            <div className='text-xl px-2 poppins underline underline-offset-8 decoration-slate-200 pb-2 text-stone-800'>Mico App</div>
            {/* desc */}
            <div className='text-justify px-2 text-stone-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt vitae semper quis lectus nulla at volutpat. Check out the source code <a href="">here</a>.</div>

  
            {/* tags -- optional & will add later */}
            <div className='flex flex-row space-x-2 py-2 poppins items-center justify-center'>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1">
                python
              </span>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1">
                ruby
              </span>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1">
                javascript
              </span>
            </div>

            {/* github link */}
            {/* <div className='text-slate-400 underline underline-slate-200 text-center p-2'>
              <a href="#" className='hover:text-slate-700'>source code</a>
            </div> */}
          </div>


          {/* INDIVIDUAL CARD -- MICO */}
          <div className='rounded border border-slate-100 p-3 space-y-2 card'>
            {/* image */}
            <div>
              <Image src={placeholder} />
            </div>
            {/* title */}
            <div className='text-xl px-2 poppins underline underline-offset-8 decoration-slate-200 pb-2 text-stone-800'>Mico App</div>
            {/* desc */}
            <div className='text-justify px-2 text-stone-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt vitae semper quis lectus nulla at volutpat. Check out the source code <a href="">here</a>.</div>

  
            {/* tags -- optional & will add later */}
            <div className='flex flex-row space-x-2 py-2 poppins items-center justify-center'>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1">
                python
              </span>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1">
                ruby
              </span>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1">
                javascript
              </span>
            </div>

            {/* github link */}
            {/* <div className='text-slate-400 underline underline-slate-200 text-center p-2'>
              <a href="#" className='hover:text-slate-700'>source code</a>
            </div> */}
          </div>

        </div>
    </div>
  )
}

export default Projects
import React from 'react'
import Image from 'next/image'
import placeholder from '/Users/farihahossain/projects/personal-portfolio/public/Screen Shot 2022-07-30 at 12.32.23 PM.png'

const Projects = () => {
  return (
    <div className='flex flex-col justify-content w-full font-mono px-6 pb-12 md:pt-24 md:px-12 lg:px-24'>
        {/*  section title */}
        <div id='projects' className='flex flex-row'>
          <div className='inline-block mb-8 text-2xl'>
              <p className='custom_heading'>some cool stuff.</p>
          </div>
        </div>

        {/* content container */}
        {/* set up the grid for the cards in this section */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 md:px-24'>

          {/* INDIVIDUAL CARD -- MICO */}
          <div className='rounded border-2 border-slate-100 p-3 space-y-2 card'>
            {/* image */}
            <div>
              <Image src={placeholder} />
            </div>
            {/* title */}
            <div className='text-xl px-2'>Mico App</div>
            {/* desc */}
            <div className='text-justify px-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt vitae semper quis lectus nulla at volutpat.</div>
            {/* github link */}
            <div className='text-slate-400 underline underline-slate-200 text-center p-2'>
              <a href="#" className='hover:text-slate-700'>source code</a>
            </div>
  
            {/* tags */}
            {/* <div className='flex flex-row space-x-2'>
              <span>skills : </span>
              <span className="text-xs font-semibold inline-block py-1 px-2 lowercase rounded text-blue-600 outline outline-1 outline-blue-200 last:mr-0 mr-1">
                python
              </span>
              <span className="text-xs font-semibold inline-block py-1 px-2 lowercase rounded text-red-600 outline outline-1 outline-red-200 last:mr-0 mr-1">
                ruby
              </span>
              <span className="text-xs font-semibold inline-block py-1 px-2 lowercase rounded text-orange-600 outline outline-1 outline-orange-200 last:mr-0 mr-1">
                javascript
              </span>
            </div> */}
          </div>



          {/* INDIVIDUAL CARD -- I Miss My Campus */}
          <div className='rounded border-2 border-slate-100 p-3 space-y-2 card'>
            {/* image */}
            <div>
              <Image src={placeholder} />
            </div>
            {/* title */}
            <div className='text-xl px-2'>I Miss My Campus</div>
            {/* desc */}
            <div className='text-justify px-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt vitae semper quis lectus nulla at volutpat.</div>
            {/* github link */}
            <div className='text-slate-400 underline underline-slate-200 text-center p-2'>
              <a href="#" className='hover:text-slate-700'>source code</a>
            </div>
  
            {/* tags */}
            {/* <div className='flex flex-row space-x-2'>
              <span>skills : </span>
              <span className="text-xs font-semibold inline-block py-1 px-2 lowercase rounded text-blue-600 outline outline-1 outline-blue-200 last:mr-0 mr-1">
                python
              </span>
              <span className="text-xs font-semibold inline-block py-1 px-2 lowercase rounded text-red-600 outline outline-1 outline-red-200 last:mr-0 mr-1">
                ruby
              </span>
              <span className="text-xs font-semibold inline-block py-1 px-2 lowercase rounded text-orange-600 outline outline-1 outline-orange-200 last:mr-0 mr-1">
                javascript
              </span>
            </div> */}
          </div>



          {/* INDIVIDUAL CARD -- Product Recs */}
          <div className='rounded border-2 border-slate-100 p-3 space-y-2 card'>
            {/* image */}
            <div>
              <Image src={placeholder} />
            </div>
            {/* title */}
            <div className='text-xl px-2'>Product Recs</div>
            {/* desc */}
            <div className='text-justify px-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt vitae semper quis lectus nulla at volutpat.</div>
            {/* github link */}
            <div className='text-slate-400 underline underline-slate-200 text-center p-2'>
              <i>private</i>
            </div>
  
            {/* tags */}
            {/* <div className='flex flex-row space-x-2'>
              <span>skills : </span>
              <span className="text-xs font-semibold inline-block py-1 px-2 lowercase rounded text-blue-600 outline outline-1 outline-blue-200 last:mr-0 mr-1">
                python
              </span>
              <span className="text-xs font-semibold inline-block py-1 px-2 lowercase rounded text-red-600 outline outline-1 outline-red-200 last:mr-0 mr-1">
                ruby
              </span>
              <span className="text-xs font-semibold inline-block py-1 px-2 lowercase rounded text-orange-600 outline outline-1 outline-orange-200 last:mr-0 mr-1">
                javascript
              </span>
            </div> */}
          </div>


          {/* INDIVIDUAL CARD -- Temperature Modelling */}
          <div className='rounded border-2 border-slate-100 p-3 space-y-2 card'>
            {/* image */}
            <div>
              <Image src={placeholder} />
            </div>
            {/* title */}
            <div className='text-xl px-2'>Temperature Modelling</div>
            {/* desc */}
            <div className='text-justify px-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt vitae semper quis lectus nulla at volutpat.</div>
            {/* github link */}
            <div className='text-slate-400 underline underline-slate-200 text-center p-2'>
              <a href="#" className='hover:text-slate-700'>source code</a>
            </div>
  
            {/* tags */}
            {/* <div className='flex flex-row space-x-2'>
              <span>skills : </span>
              <span className="text-xs font-semibold inline-block py-1 px-2 lowercase rounded text-blue-600 outline outline-1 outline-blue-200 last:mr-0 mr-1">
                python
              </span>
              <span className="text-xs font-semibold inline-block py-1 px-2 lowercase rounded text-red-600 outline outline-1 outline-red-200 last:mr-0 mr-1">
                ruby
              </span>
              <span className="text-xs font-semibold inline-block py-1 px-2 lowercase rounded text-orange-600 outline outline-1 outline-orange-200 last:mr-0 mr-1">
                javascript
              </span>
            </div> */}
          </div>


          {/* INDIVIDUAL CARD -- Slack Integration */}
          <div className='rounded border-2 border-slate-100 p-3 space-y-2 card'>
            {/* image */}
            <div>
              <Image src={placeholder} />
            </div>
            {/* title */}
            <div className='text-xl px-2'>Slack/Jira Integration</div>
            {/* desc */}
            <div className='text-justify px-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt vitae semper quis lectus nulla at volutpat.</div>
            {/* github link */}
            <div className='text-slate-400 underline underline-slate-200 text-center p-2'>
              <i>private</i>
            </div>
  
            {/* tags */}
            {/* <div className='flex flex-row space-x-2'>
              <span>skills : </span>
              <span className="text-xs font-semibold inline-block py-1 px-2 lowercase rounded text-blue-600 outline outline-1 outline-blue-200 last:mr-0 mr-1">
                python
              </span>
              <span className="text-xs font-semibold inline-block py-1 px-2 lowercase rounded text-red-600 outline outline-1 outline-red-200 last:mr-0 mr-1">
                ruby
              </span>
              <span className="text-xs font-semibold inline-block py-1 px-2 lowercase rounded text-orange-600 outline outline-1 outline-orange-200 last:mr-0 mr-1">
                javascript
              </span>
            </div> */}
          </div>


          {/* INDIVIDUAL CARD -- TT */}
          <div className='rounded border-2 border-slate-100 p-3 space-y-2 card'>
            {/* image */}
            <div>
              <Image src={placeholder} />
            </div>
            {/* title */}
            <div className='text-xl px-2'>Tiktok OAuth Strategy</div>
            {/* desc */}
            <div className='text-justify px-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt vitae semper quis lectus nulla at volutpat.</div>
            {/* github link */}
            <div className='text-slate-400 underline underline-slate-200 text-center p-2'>
              <a href="#" className='hover:text-slate-700 my_links'>source code</a>
            </div>
  
          </div>



        </div>
    </div>
  )
}

export default Projects
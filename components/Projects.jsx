import React from 'react'
import Image from 'next/image'
import mico from '../public/mico.jpeg'
import tiktok from '../public/tt.png'
import productrecs from '../public/pr.png'
import num from '../public/nm.png'

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
              <Image src={mico} />
            </div>
            {/* title */}
            <div className='text-xl px-2 poppins underline underline-offset-8 decoration-slate-200 pb-2 text-stone-800'>Mico App</div>
            {/* desc */}
            <div className='text-justify px-2 text-stone-700'>Led and developed an iOS application that can scan and connect to nearby portable flash devices as well as take photos and save them to the iPhone photo gallery. This integrates the iPhone camera to sync and capture good quality, fully lit photos. Check out the code <a href="https://github.com/f-hossain/mico_app" target="_blank" rel="noreferrer">here </a>and the full concept video <a href="https://www.youtube.com/watch?v=Ep1qo48lDI4" target="_blank" rel="noreferrer">here</a>.</div>

  
            {/* tags */}
            <div className='flex flex-wrap py-2 poppins items-center justify-center'>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1 mt-1">
                swift 5
              </span>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1 mt-1">
                xcode 12
              </span>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1 mt-1">
                Apple Core Bluetooth
              </span>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1 mt-1">
                AV Foundation
              </span>
            </div>
          </div>


          {/* INDIVIDUAL CARD -- TT */}
          <div className='rounded border border-slate-100 p-3 space-y-2 card'>
            {/* image */}
            <div>
              <Image src={tiktok} />
            </div>
            {/* title */}
            <div className='text-xl px-2 poppins underline underline-offset-8 decoration-slate-200 pb-2 text-stone-800'>TikTok OmniAuth Strategy</div>
            {/* desc */}
            <div className='text-justify px-2 text-stone-700'>Created a new Omniauth strategy for use with the TikTok Login Kit as a ruby gem to handle TikTok’s unique response upon user auth. Developers can add this gem to their rails project to allow full use of the TikTok API on their platform. Check out the gem <a href="https://github.com/f-hossain/tiktok_oauth_strategy" target="_blank" rel="noreferrer">here</a>.</div>

  
            {/* tags */}
            <div className='flex flex-wrap py-2 poppins items-center justify-center'>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1 mt-1">
                ruby
              </span>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1 mt-1">
                ruby on rails
              </span>
            </div>
          </div>


          {/* INDIVIDUAL CARD -- Product Recs */}
          <div className='rounded border border-slate-100 p-3 space-y-2 card'>
            {/* image */}
            <div>
              <Image src={productrecs} />
            </div>
            {/* title */}
            <div className='text-xl px-2 poppins underline underline-offset-8 decoration-slate-200 pb-2 text-stone-800'>Product Recommendations</div>
            {/* desc */}
            <div className='text-justify px-2 text-stone-700'>Created a feature on Pixlee’s platform as part of a hackathon project which allows alternative product recommendations to be configured and displayed for user generated content in an image gallery, generating 30% more customer traffic on product pages.</div>

  
            {/* tags */}
            <div className='flex flex-wrap py-2 poppins items-center justify-center'>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1 mt-1">
                ruby
              </span>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1 mt-1">
                ruby on rails
              </span>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1 mt-1">
                javascript
              </span>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1 mt-1">
                sql
              </span>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1 mt-1">
                scala
              </span>
            </div>
          </div>


          {/* INDIVIDUAL CARD -- Temp */}
          <div className='rounded border border-slate-100 p-3 space-y-2 card'>
            {/* image */}
            <div>
              <Image src={num} />
            </div>
            {/* title */}
            <div className='text-xl px-2 poppins underline underline-offset-8 decoration-slate-200 pb-2 text-stone-800'>Numerical Mapping </div>
            {/* desc */}
            <div className='text-justify px-2 text-stone-700'>Developed multiple scripts to generate temperature and/or frequency maps to model various physical systems on the nano-scale using techniques such as the Richardson method, the Crank-Nicholson method, etc. Check out some of the scripts <a href="https://github.com/f-hossain/numerical_methods" target="_blank" rel="noreferrer">here</a>.</div>

  
            {/* tags -- optional & will add later */}
            <div className='flex flex-wrap py-2 poppins items-center justify-center'>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1 mt-1">
                c++
              </span>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1 mt-1">
                matlab
              </span>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Projects
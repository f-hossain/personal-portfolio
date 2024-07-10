import React from 'react'
import { motion } from "framer-motion";

const Projects = () => {
  const popVariant = {
    visible: { opacity: 1, transition: {duration: 0.5} },
    hidden: { opacity: 0,  },
  }
  return (
    <div id='projects' className='flex flex-col justify-content w-full px-6 pb-12 md:pt-16 md:px-12 lg:px-24'>
        {/*  section title */}
        <div className='flex flex-row'>
          <div className='inline-block mb-8 text-3xl'>
              <p className='custom_heading biro'>fun projects.</p>
          </div>
        </div>

        {/* content container */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 md:px-10 pt-9 montserrat'>
          
          {/* INDIVIDUAL CARD -- LOVELIST */}
          <motion.div variants={popVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className='rounded border border-slate-100 p-3 space-y-2 card definition grit'>
            {/* title */}
            <div className='text-xl px-2 montserrat underline underline-offset-8 decoration-stone-100 pb-2 text-stone-800'>Lovelist</div>
            {/* desc */}
            <div className='text-justify p-4 text-stone-700 text-sm'>A task manager designed for date ideas with your loved ones. You can separate date ideas or activities into collections, so you can keep lists based on different contexts. For each task, you can add extra metadata to organize and plan the perfect outing! Check it out <a href="https://lovelist.netlify.app/" target="_blank" rel="noreferrer">here </a>and the code <a href="https://github.com/f-hossain/date-tracker" target="_blank" rel="noreferrer">here</a>.</div>

  
            {/* tags */}
            <div className='flex flex-wrap py-2 montserrat items-center justify-center'>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-100 last:mr-0 mr-1 mt-1">
                react
              </span>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-100 last:mr-0 mr-1 mt-1">
                nextjs
              </span>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-100 last:mr-0 mr-1 mt-1">
                supabase
              </span>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-100 last:mr-0 mr-1 mt-1">
                tailwindcss
              </span>
            </div>
          </motion.div>

          {/* INDIVIDUAL CARD -- MICO */}
          <motion.div variants={popVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className='rounded border border-slate-100 p-3 space-y-2 card definition grit'>
            {/* title */}
            <div className='text-xl px-2 montserrat underline underline-offset-8 decoration-stone-100 pb-2 text-stone-800'>Mico App</div>
            {/* desc */}
            <div className='text-justify p-4 text-stone-700 text-sm'>Led and developed an iOS application that can scan and connect to nearby portable flash devices as well as take photos and save them to the iPhone photo gallery. This integrates the iPhone camera to sync and capture good quality, fully lit photos. Check out the code <a href="https://github.com/f-hossain/mico_app" target="_blank" rel="noreferrer">here </a>and the full concept video <a href="https://www.youtube.com/watch?v=Ep1qo48lDI4" target="_blank" rel="noreferrer">here</a>.</div>

  
            {/* tags */}
            <div className='flex flex-wrap py-2 montserrat items-center justify-center'>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-100 last:mr-0 mr-1 mt-1">
                swift 5
              </span>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-100 last:mr-0 mr-1 mt-1">
                xcode 12
              </span>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-100 last:mr-0 mr-1 mt-1">
                apple core bluetooth
              </span>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-100 last:mr-0 mr-1 mt-1">
                av foundation
              </span>
            </div>
          </motion.div>

          {/* INDIVIDUAL CARD -- TT */}
          <motion.div variants={popVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className='rounded border border-slate-100 p-3 space-y-2 card definition grit'>
            {/* title */}
            <div className='text-xl px-2 montserrat underline underline-offset-8 decoration-stone-100 pb-2 text-stone-800'>TikTok OmniAuth Strategy</div>
            {/* desc */}
            <div className='text-justify p-4 text-stone-700 text-sm'>Created a new Omniauth strategy for use with the TikTok Login Kit as a ruby gem to handle TikTok’s unique response upon user auth. Developers can add this gem to their rails project to allow full use of the TikTok API on their platform. Check out the gem <a href="https://github.com/f-hossain/tiktok_oauth_strategy" target="_blank" rel="noreferrer">here</a>.</div>

  
            {/* tags */}
            <div className='flex flex-wrap py-2 montserrat items-center justify-center'>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-100 last:mr-0 mr-1 mt-1">
                ruby
              </span>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-100 last:mr-0 mr-1 mt-1">
                ruby on rails
              </span>
            </div>
          </motion.div>

          {/* INDIVIDUAL CARD -- PRs */}
          <motion.div variants={popVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className='rounded border border-slate-100 p-3 space-y-2 card definition grit'>
            {/* title */}
            <div className='text-xl px-2 montserrat underline underline-offset-8 decoration-stone-100 pb-2 text-stone-800'>Product Recommendations</div>
            {/* desc */}
            <div className='text-justify p-4 text-stone-700 text-sm'>Created a feature on Pixlee’s platform as part of a hackathon project which allows alternative product recommendations to be configured and displayed for user generated content in an image gallery, generating 30% more customer traffic on product pages.</div>

  
            {/* tags */}
            <div className='flex flex-wrap py-2 montserrat items-center justify-center'>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-100 last:mr-0 mr-1 mt-1">
                ruby
              </span>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-100 last:mr-0 mr-1 mt-1">
                ruby on rails
              </span>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-100 last:mr-0 mr-1 mt-1">
                javascript
              </span>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-100 last:mr-0 mr-1 mt-1">
                sql
              </span>
              <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-100 last:mr-0 mr-1 mt-1">
                scala
              </span>
            </div>
          </motion.div>


        </div>
    </div>
  )
}

export default Projects
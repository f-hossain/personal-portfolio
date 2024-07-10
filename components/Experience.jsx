import React from 'react'
import { motion } from "framer-motion";

const Experience = () => {
  const slideVariant = {
    visible: { opacity: 1, x: 0, transition: {duration: 0.8} },
    hidden: { opacity: 0.5, x: -250 },
  }

  return (
    <div id='work' className='flex flex-col justify-content w-full px-6 pb-12 md:pt-16 md:px-24'>
        {/*  section title */}
        <div className='flex flex-row'>
          <div className='inline-block mb-8 text-3xl'>
              <p className='custom_heading biro'>work experience.</p>
          </div>
        </div>


        <div className='flex flex-col space-y-16 md:pt-9'>

          {/* ACTUAL CONTENT - NOVUS */}
          <motion.div variants={slideVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className='flex flex-col justify-center md:flex-row md:space-x-10 '>
            {/* image */}
            <div className='hidden md:block text-right custom_border pr-4 pt-1 border-r-2 border-stone-200 text-stone-600 text-xs montserrat light'>
              DEC &apos;22 - MAR &apos;24
            </div>
            {/* acc desc content */}
            {/* <div className='w-3/4 space-y-3 divide-y-2 divide-slate-200'> */}
            <div className='md:w-3/4 space-y-3'>
              {/* title content */}
              <div className='flex flex-col justify-between items-start'>
                <p className='text-xl text-stone-700 montserrat'>Software Engineer <i>@ SEI Novus</i></p>
                <p className='block md:hidden pt-2 text-stone-700 text-xs'>Dec 2022 - Present</p>
              </div>
              {/* work desc */}
                <div className='text-sm definition p-4 montserrat rounded text-stone-600'>Implemented an end to end terms of service feature with full markdown support and communicated with clients, engineers and designers for feedback. Also maintained the codebase to run complex calculations and analysis against financial data, as well as ensuring data is up to date by creating jobs to pull in foreign interest rates and integrating our platform with other financial services. </div>
                {/* tags -- optional & will add later */}
                <div className='flex flex-wrap montserrat light'>
                  <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1 mt-1">
                    scala
                  </span>
                  <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1 mt-1">
                    angular
                  </span>
                  <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1 mt-1">
                    typescript
                  </span>
                  <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1 mt-1">
                    kubernetes
                  </span>
                  <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1 mt-1">
                    sql
                  </span>
              </div>
            </div>
          </motion.div>

          {/* ACTUAL CONTENT - PIXLEE */}
          <motion.div variants={slideVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className='flex flex-col justify-center md:flex-row md:space-x-10 '>
            {/* image */}
            <div className='hidden md:block text-right custom_border pr-4 pt-1 border-r-2 border-stone-200 text-stone-600 text-xs montserrat light'>
              JAN &apos;21 - DEC &apos;21
            </div>
            {/* acc desc content */}
            {/* <div className='w-3/4 space-y-3 divide-y-2 divide-slate-200'> */}
            <div className='md:w-3/4 space-y-3'>
              {/* title content */}
              <div className='flex flex-col justify-between items-start'>
                <p className='text-xl text-stone-700 montserrat'>Fullstack Developer <i>@ Pixlee</i></p>
                <p className='block md:hidden pt-2 text-stone-700 text-xs'>Jan 2021 - Dec 2021</p>
              </div>
              {/* work desc */}
                <div className='text-sm definition p-4 montserrat rounded text-stone-600'>Led and developed multiple core features for the Pixlee platform such as the end to end user flow for TikTok authentication within our app, the integration of Instagram APIs to scan and collect thousands of user generated content on the web as well as schedule and publish posts through our platform. Also acted as an intern mentor later on during my time here!</div>
                {/* tags -- optional & will add later */}
                <div className='flex flex-wrap montserrat light'>
                  <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1 mt-1">
                    ruby on rails
                  </span>
                  <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1 mt-1">
                    javascript
                  </span>
                  <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1 mt-1">
                    backbone.js
                  </span>
                  <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1 mt-1">
                    react
                  </span>
                  <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1 mt-1">
                    python
                  </span>
                  <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1 mt-1">
                    sql
                  </span>
                  <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1 mt-1">
                    redis
                  </span>
                  <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1 mt-1">
                    resque
                  </span>
              </div>
            </div>
          </motion.div>

          {/* ACTUAL CONTENT - MCAFEE */}
          <motion.div  variants={slideVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className='flex flex-col justify-center md:flex-row md:space-x-10 '>
            {/* image */}
            <div className='hidden md:block text-right custom_border pr-4 pt-1 border-r-2 border-stone-200 text-stone-600 text-xs montserrat light'>
              JAN &apos;20 - APR &apos;20
            </div>
            {/* acc desc content */}
            {/* <div className='w-3/4 space-y-3 divide-y-2 divide-slate-200'> */}
            <div className='md:w-3/4 space-y-3'>
              {/* title content */}
              <div className='flex flex-col justify-between items-start'>
                <p className='text-xl text-stone-700 montserrat'>Fullstack Developer <i>@ McAfee</i></p>
                <p className='block md:hidden pt-2 text-stone-700 text-xs'>Jan 2021 - Dec 2021</p>
              </div>
              {/* work desc */}
                <div className='text-sm definition p-4 rounded text-stone-600'>Led the creation of a landing page and data tables for an internal analytics tool using Angular as well as multiple data visualizations and RESTful APIs to showcase the nodes and paths of over 1000 dataset context items and how they are used within the analytics team’s ML models.</div>
                {/* tags -- optional & will add later */}
                <div className='flex flex-wrap montserrat light'>
                  <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1 mt-1">
                    javascript
                  </span>
                  <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1 mt-1">
                    angular
                  </span>
                  <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1 mt-1">
                    nodejs
                  </span>
                  <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1 mt-1">
                    sql
                  </span>
              </div>
            </div>
          </motion.div>

          {/* ACTUAL CONTENT - HOME DEPOT */}
          <motion.div variants={slideVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className='flex flex-col justify-center md:flex-row md:space-x-10 '>
            {/* image */}
            <div className='hidden md:block text-right custom_border pr-4 pt-1 border-r-2 border-200 text-stone-600 text-xs montserrat light'>
              SEP &apos;19 - DEC &apos;19
            </div>
            {/* acc desc content */}
            {/* <div className='w-3/4 space-y-3 divide-y-2 divide-slate-200'> */}
            <div className='md:w-3/4 space-y-3'>
              {/* title content */}
              <div className='flex flex-col justify-between items-start'>
                <p className='text-xl text-stone-700 montserrat'>Frontend Developer <i>@ Home Depot</i></p>
                <p className='block md:hidden pt-2 text-stone-700 text-xs'>Jan 2021 - Dec 2021</p>
              </div>
              {/* work desc */}
                <div className='text-sm definition p-4 montserrat rounded text-stone-600'>Implemented a data lake repository to capture and optimize web performance metrics by as much as 52% and created multiple Angular components for their ecommerce website to improve the customer checkout experience. </div>
                {/* tags -- optional & will add later */}
                <div className='flex flex-wrap montserrat light'>
                  <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1 mt-1">
                    javascript
                  </span>
                  <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1 mt-1">
                    angular
                  </span>
                  <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1 mt-1">
                    nodejs
                  </span>
              </div>
            </div>
          </motion.div>


        </div>

    </div>
  )
}

export default Experience
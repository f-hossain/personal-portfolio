import React from 'react'

const Experience = () => {
  return (
    <div  className='flex flex-col justify-content w-full px-6 pb-12 md:pt-24 md:px-24'>
        {/*  section title */}
        <div id='work' className='flex flex-row'>
          <div className='inline-block mb-8 text-3xl'>
              <p className='custom_heading playfair'>previously.</p>
          </div>
        </div>


        <div className='flex flex-col space-y-16 md:pt-9'>

          {/* ACTUAL CONTENT - PIXLEE */}
          <div className='flex flex-col justify-center md:flex-row md:space-x-10 '>
            {/* image */}
            <div className='hidden md:block text-right custom_border pr-4 pt-1 border-r-2 border-slate-100 text-stone-600 text-sm poppins'>
              Jan 2021 - Dec 2021
            </div>
            {/* acc desc content */}
            {/* <div className='w-3/4 space-y-3 divide-y-2 divide-slate-200'> */}
            <div className='md:w-3/4 space-y-3'>
              {/* title content */}
              <div className='flex flex-col justify-between items-start'>
                <p className='text-xl text-stone-700 poppins'>Fullstack Developer <i>@ Pixlee</i></p>
                <p className='block md:hidden pt-2 text-stone-700 text-xs'>Jan 2021 - Dec 2021</p>
              </div>
              {/* work desc */}
                <div className='text-sm bg-slate-100 p-2 rounded text-slate-500'>Led and developed multiple core features for the Pixlee platform such as the end to end user flow for TikTok authentication within our app, the integration of Instagram APIs to scan and collect thousands of user generated content on the web as well as schedule and publish posts through our platform. Also acted as an intern mentor later on during my time here!</div>
                {/* tags -- optional & will add later */}
                <div className='flex flex-wrap poppins'>
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
          </div>



          {/* ACTUAL CONTENT - MCAFEE */}
          <div className='flex flex-col justify-center md:flex-row md:space-x-10 '>
            {/* image */}
            <div className='hidden md:block text-right custom_border pr-4 pt-1 border-r-2 border-slate-100 text-stone-600 text-sm poppins'>
              Jan 2020 - Apr 2020
            </div>
            {/* acc desc content */}
            {/* <div className='w-3/4 space-y-3 divide-y-2 divide-slate-200'> */}
            <div className='md:w-3/4 space-y-3'>
              {/* title content */}
              <div className='flex flex-col justify-between items-start'>
                <p className='text-xl text-stone-700 poppins'>Fullstack Developer <i>@ McAfee</i></p>
                <p className='block md:hidden pt-2 text-stone-700 text-xs'>Jan 2021 - Dec 2021</p>
              </div>
              {/* work desc */}
                <div className='text-sm bg-slate-100 p-2 rounded text-slate-500'>Led the creation of a landing page and data tables for an internal analytics tool using Angular as well as multiple data visualizations and RESTful APIs to showcase the nodes and paths of over 1000 dataset context items and how they are used within the analytics team’s ML models.</div>
                {/* tags -- optional & will add later */}
                <div className='flex flex-wrap poppins'>
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
          </div>



          {/* ACTUAL CONTENT - HOME DEPOT */}
          <div className='flex flex-col justify-center md:flex-row md:space-x-10 '>
            {/* image */}
            <div className='hidden md:block text-right custom_border pr-4 pt-1 border-r-2 border-slate-100 text-stone-600 text-sm poppins'>
              Sept 2019 - Dec 2019
            </div>
            {/* acc desc content */}
            {/* <div className='w-3/4 space-y-3 divide-y-2 divide-slate-200'> */}
            <div className='md:w-3/4 space-y-3'>
              {/* title content */}
              <div className='flex flex-col justify-between items-start'>
                <p className='text-xl text-stone-700 poppins'>Frontend Developer <i>@ Home Depot</i></p>
                <p className='block md:hidden pt-2 text-stone-700 text-xs'>Jan 2021 - Dec 2021</p>
              </div>
              {/* work desc */}
                <div className='text-sm bg-slate-100 p-2 rounded text-slate-500'>Implemented a data lake repository to capture and optimize web performance metrics by as much as 52% and created multiple Angular components for their ecommerce website to improve the customer checkout experience. </div>
                {/* tags -- optional & will add later */}
                <div className='flex flex-wrap poppins'>
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
          </div>



          {/* ACTUAL CONTENT - INFLUITIVE */}
          <div className='flex flex-col justify-center md:flex-row md:space-x-10 '>
            {/* image */}
            <div className='hidden md:block text-right custom_border pr-4 pt-1 border-r-2 border-slate-100 text-stone-600 text-sm poppins'>
              Jan 2019 - Apr 2019
            </div>
            {/* acc desc content */}
            {/* <div className='w-3/4 space-y-3 divide-y-2 divide-slate-200'> */}
            <div className='md:w-3/4 space-y-3'>
              {/* title content */}
              <div className='flex flex-col justify-between items-start'>
                <p className='text-xl text-stone-700 poppins'>Software Engineer In Test <i>@ Influitive</i></p>
                <p className='block md:hidden pt-2 text-stone-700 text-xs'>Jan 2021 - Dec 2021</p>
              </div>
              {/* work desc */}
                <div className='text-sm bg-slate-100 p-2 rounded text-slate-500'>Developed an automated test suite with Java and Selenium for web and mobile applications, increasing the platform’s test coverage by 40%. Also led an independent project to create an internal tool integrating Slack, GitLab and Jira to notify developers on forgotten tickets near the end of a sprint, increasing the number of points completed by the end of a sprint by 55%</div>
                {/* tags -- optional & will add later */}
                <div className='flex flex-wrap poppins'>
                  <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1 mt-1">
                    java
                  </span>
                  <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1 mt-1">
                    selenium
                  </span>
              </div>
            </div>
          </div>



          {/* ACTUAL CONTENT - NPOWER */}
          <div className='flex flex-col justify-center md:flex-row md:space-x-10 '>
            {/* image */}
            <div className='hidden md:block text-right custom_border pr-4 pt-1 border-r-2 border-slate-100 text-stone-600 text-sm poppins'>
              May 2018 - Aug 2018
            </div>
            {/* acc desc content */}
            {/* <div className='w-3/4 space-y-3 divide-y-2 divide-slate-200'> */}
            <div className='md:w-3/4 space-y-3'>
              {/* title content */}
              <div className='flex flex-col justify-between items-start'>
                <p className='text-xl text-stone-700 poppins'>Data Analyst <i>@ NPower</i></p>
                <p className='block md:hidden pt-2 text-stone-700 text-xs'>Jan 2021 - Dec 2021</p>
              </div>
              {/* work desc */}
                <div className='text-sm bg-slate-100 p-2 rounded text-slate-500'>Wrote visual basic scripts to handle and interpret 1000+ user records, and generated an ML model using WEKA software to predict students’ final exam scores based on previous performance in the program, in order to determine which students required more preparation leading up to the exam.</div>
                {/* tags -- optional & will add later */}
                <div className='flex flex-wrap poppins'>
                  <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1 mt-1">
                    visual basic
                  </span>
                  <span className="text-xs inline-block py-1 px-2 lowercase rounded text-stone-600 border border-2 border-stone-200 last:mr-0 mr-1 mt-1">
                    weka
                  </span>
              </div>
            </div>
          </div>


        </div>

    </div>
  )
}

export default Experience
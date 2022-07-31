import React from 'react'
import Image from 'next/image'
import ptt from '/Users/farihahossain/projects/personal-portfolio/public/exp1.jpeg'

const Experience = () => {
  return (
    <div  className='flex flex-col justify-content w-full font-mono px-6 pb-12 md:pt-24 md:px-24'>
        {/*  section title */}
        <div id='work' className='flex flex-row'>
          <div className='inline-block mb-8 text-2xl'>
              <p className='custom_heading'>previously.</p>
          </div>
        </div>


        <div className='flex flex-col space-y-16'>

          {/* ACTUAL CONTENT - PIXLEE */}
          <div className='flex flex-col justify-center md:flex-row md:space-x-10'>
            {/* image */}
            <div className='hidden md:block text-right custom_border pr-4 pt-0.5 border-r-2 border-slate-100 text-slate-700'>
              Jan 2021 - Dec 2021
            </div>
            {/* acc desc content */}
            {/* <div className='w-3/4 space-y-3 divide-y-2 divide-slate-200'> */}
            <div className='md:w-3/4 space-y-3'>
              {/* title content */}
              <div className='flex flex-col justify-between items-start'>
                <p className='text-lg text-slate-400'>Fullstack Developer <i>@ Pixlee</i></p>
                <p className='block md:hidden pt-2 text-slate-700'>Jan 2021 - Dec 2021</p>
              </div>
              {/* work desc */}
                <div className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                {/* tags -- optional & will add later */}
                <div className='flex flex-row space-x-2'>
                  {/* <span>skills : </span> */}
                  <span className="text-xs font-semibold inline-block py-1 px-2 lowercase rounded text-indigo-400 outline outline-1 outline-indigo-200 last:mr-0 mr-1">
                    python
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 lowercase rounded text-rose-400 outline outline-1 outline-rose-200 last:mr-0 mr-1">
                    ruby
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 lowercase rounded text-orange-400 outline outline-1 outline-orange-200 last:mr-0 mr-1">
                    javascript
                  </span>
              </div>
            </div>
          </div>



          {/* ACTUAL CONTENT - MCAFEE */}
          <div className='flex flex-col justify-center md:flex-row md:space-x-10'>
            {/* image */}
            <div className='hidden md:block text-right custom_border pr-4 border-r-2 border-slate-100 text-slate-700'>
              Jan 2020 - Apr 2020
            </div>
            {/* acc desc content */}
            {/* <div className='w-3/4 space-y-3 divide-y-2 divide-slate-200'> */}
            <div className='md:w-3/4 space-y-3'>
              {/* title content */}
              <div className='flex flex-col justify-between items-start'>
                <p className='text-lg text-slate-400'>Fullstack Developer <i>@ McAfee</i></p>
                <p className='block md:hidden pt-2 text-slate-700'>Jan 2021 - Dec 2021</p>
              </div>
              {/* work desc */}
                <div className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                {/* tags -- optional & will add later */}
                <div className='flex flex-row space-x-2'>
                  {/* <span>skills : </span> */}
                  <span className="text-xs font-semibold inline-block py-1 px-2 lowercase rounded text-indigo-400 outline outline-1 outline-indigo-200 last:mr-0 mr-1">
                    python
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 lowercase rounded text-rose-400 outline outline-1 outline-rose-200 last:mr-0 mr-1">
                    ruby
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 lowercase rounded text-orange-400 outline outline-1 outline-orange-200 last:mr-0 mr-1">
                    javascript
                  </span>
              </div>
            </div>
          </div>





          {/* ACTUAL CONTENT - HOME DEPOT */}
          <div className='flex flex-col justify-center md:flex-row md:space-x-10'>
            {/* image */}
            <div className='hidden md:block text-right custom_border pr-4 border-r-2 border-slate-100 text-slate-700'>
              Sept 2019 - Dec 2019
            </div>
            {/* acc desc content */}
            {/* <div className='w-3/4 space-y-3 divide-y-2 divide-slate-200'> */}
            <div className='md:w-3/4 space-y-3'>
              {/* title content */}
              <div className='flex flex-col justify-between items-start'>
                <p className='text-lg text-slate-400'>Frontend Developer <i>@ Home Depot</i></p>
                <p className='block md:hidden pt-2 text-slate-700'>Jan 2021 - Dec 2021</p>
              </div>
              {/* work desc */}
                <div className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                {/* tags -- optional & will add later */}
                <div className='flex flex-row space-x-2'>
                  {/* <span>skills : </span> */}
                  <span className="text-xs font-semibold inline-block py-1 px-2 lowercase rounded text-indigo-400 outline outline-1 outline-indigo-200 last:mr-0 mr-1">
                    python
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 lowercase rounded text-rose-400 outline outline-1 outline-rose-200 last:mr-0 mr-1">
                    ruby
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 lowercase rounded text-orange-400 outline outline-1 outline-orange-200 last:mr-0 mr-1">
                    javascript
                  </span>
              </div>
            </div>
          </div>



          {/* ACTUAL CONTENT - INFLUITIVE */}
          <div className='flex flex-col justify-center md:flex-row md:space-x-10'>
            {/* image */}
            <div className='hidden md:block text-right custom_border pr-4 border-r-2 border-slate-100 text-slate-700'>
              Jan 2019 - Apr 2019
            </div>
            {/* acc desc content */}
            {/* <div className='w-3/4 space-y-3 divide-y-2 divide-slate-200'> */}
            <div className='md:w-3/4 space-y-3'>
              {/* title content */}
              <div className='flex flex-col justify-between items-start'>
                <p className='text-lg text-slate-400'>Software Engineer in Test <i>@ Influitive</i></p>
                <p className='block md:hidden pt-2 text-slate-700'>Jan 2021 - Dec 2021</p>
              </div>
              {/* work desc */}
                <div className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                {/* tags -- optional & will add later */}
                <div className='flex flex-row space-x-2'>
                  {/* <span>skills : </span> */}
                  <span className="text-xs font-semibold inline-block py-1 px-2 lowercase rounded text-indigo-400 outline outline-1 outline-indigo-200 last:mr-0 mr-1">
                    python
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 lowercase rounded text-rose-400 outline outline-1 outline-rose-200 last:mr-0 mr-1">
                    ruby
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 lowercase rounded text-orange-400 outline outline-1 outline-orange-200 last:mr-0 mr-1">
                    javascript
                  </span>
              </div>
            </div>
          </div>



          {/* ACTUAL CONTENT - NPOWER */}
          <div className='flex flex-col justify-center md:flex-row md:space-x-10'>
            {/* image */}
            <div className='hidden md:block text-right custom_border pr-4 border-r-2 border-slate-100 text-slate-700'>
              May 2018 - Aug 2018
            </div>
            {/* acc desc content */}
            {/* <div className='w-3/4 space-y-3 divide-y-2 divide-slate-200'> */}
            <div className='md:w-3/4 space-y-3'>
              {/* title content */}
              <div className='flex flex-col justify-between items-start'>
                <p className='text-lg text-slate-400'>Data Analyst <i>@ NPower</i></p>
                <p className='block md:hidden pt-2 text-slate-700'>Jan 2021 - Dec 2021</p>
              </div>
              {/* work desc */}
                <div className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                {/* tags -- optional & will add later */}
                <div className='flex flex-row space-x-2'>
                  {/* <span>skills : </span> */}
                  <span className="text-xs font-semibold inline-block py-1 px-2 lowercase rounded text-indigo-400 outline outline-1 outline-indigo-200 last:mr-0 mr-1">
                    python
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 lowercase rounded text-rose-400 outline outline-1 outline-rose-200 last:mr-0 mr-1">
                    ruby
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 lowercase rounded text-orange-400 outline outline-1 outline-orange-200 last:mr-0 mr-1">
                    javascript
                  </span>
              </div>
            </div>
          </div>


        </div>

    </div>
  )
}

export default Experience
import React from 'react'
import { useState } from 'react'


const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  let submitText = 'Submit'

  const handleSubmit = (e) => {
    e.preventDefault()

    submitText = 'Sending..'

    let data = {
      name,
      email,
      message
    }
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
      }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setName('')
        setEmail('')
        setBody('')
        submitText = 'Sent!'
      }
    })

    // reset values
    setName('')
    setEmail('')
    setMessage('')
    submitText = 'Sent!'
    alert("Sent! I'll get back to you soon :)");
   
  }


  return (
    <div className='flex flex-col justify-content w-full px-6 md:pt-24 md:px-24'>
        {/*  section title */}
        <div id='contact' className='flex flex-row'>
          <div className='inline-block mb-8 text-3xl'>
              <p className='custom_heading playfair'>contact me.</p>
          </div>
        </div>

        {/* content container */}
        <div className='pt-9 px-2'>
          {/* text content */}
          <div>
            <div className=''>
              I can be reached through the following platforms: 
              <a href="https://www.linkedin.com/in/f-hossain/" target='_blank' rel="noreferrer" className='text-slate-400 underline underline-slate-200 hover:text-slate-700 pl-1.5'>Linkedin</a>, 
              <a href="https://github.com/f-hossain" target='_blank' rel="noreferrer" className='text-slate-400 underline underline-slate-200 hover:text-slate-700 pl-1.5'>Github</a>, 
              <a href="mailto:fthossain@outlook.com" target='_blank' rel="noreferrer" className='text-slate-400 underline underline-slate-200 hover:text-slate-700 pl-1.5'>Email</a>, 
              <a href="https://twitter.com/fhossain_" target='_blank' rel="noreferrer" className='text-slate-400 underline underline-slate-200 hover:text-slate-700 pl-1.5 pr-1.5'>Twitter</a> or you can contact me directly through the form below!
            </div>
          </div>

          {/* THE ACTUAL FORM !!!!! */}
          <div className='pt-10 pb-10 md:pb-20 px-10 md:px-28'>
            <form className='flex flex-col space-y-6'>
              <formGroup className='flex flex-col space-y-1'>
                < label className='poppins text-sm' htmlFor='name'>Name</label>
                < input type='text' value={name} placeholder='Anya Forger' onChange={(e)=>{setName(e.target.value)}} name='name' className='border border-slate-300 rounded shadow-sm shadow-slate-200 h-8 px-2' required />  
              </formGroup>

              <formGroup className='flex flex-col space-y-1'>
                < label className='poppins text-sm' htmlFor='email'>Email</label>
                < input type='email' value={email} placeholder='anya@edenacademy.com' onChange={(e)=>{setEmail(e.target.value)}} name='email' className='border border-slate-300 rounded shadow-sm shadow-slate-200 h-8 px-2' required />
              </formGroup>

              <formGroup className='flex flex-col space-y-1 inline-block'>
                < label className='poppins text-sm' htmlFor='message'>Message</label>
                {/* < input type='text-area' value={message} placeholder='Type your message here!' onChange={(e)=>{setMessage(e.target.value)}} name='message' className='border border-slate-300 rounded h-36 shadow-sm shadow-slate-200 px-2' required /> */}
                <textarea id='message' name='message' value={message} placeholder='Type your message here!' onChange={(e)=>{setMessage(e.target.value)}} className='border border-slate-300 rounded h-36 shadow-sm shadow-slate-200 p-2'/>
              </formGroup>

              <div className='inline-block flex flex-col items-center '>
              <input type='submit' value={submitText} onClick={(e)=>{handleSubmit(e)}} className='text-xs py-2 px-3 border border-slate-200 rounded text-slate-600 bg-slate-100 card poppins' />
              </div>
            </form>
          </div>

        </div>
    </div>
  )
}

export default Contact
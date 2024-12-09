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
    <div id='contact' className='flex flex-col justify-content w-full px-6 pt-24 md:pt-16 md:px-24 pb-8 md:pb-0'>
        {/*  section title */}
        <div className='flex flex-row'>
          <div className='inline-block mb-8 text-3xl'>
              <p className='custom_heading biro title-color'>say hello.</p>
          </div>
        </div>

        {/* content container */}
        <div className='pt-9 px-2'>
          {/* text content */}
          <div>
            <div className='montserrat text-sm md:text-center'>
              Got an exciting project we can build together or just want to chat? I can be reached through the following platforms: 
              <a href="https://www.linkedin.com/in/f-hossain/" target='_blank' rel="noreferrer" className='pl-1.5'>Linkedin</a>, 
              <a href="https://github.com/f-hossain" target='_blank' rel="noreferrer" className='pl-1.5'>Github</a>, 
              <a href="mailto:fthossain@outlook.com" target='_blank' rel="noreferrer" className='pl-1.5 pr-0.5'>Email</a> <br/> <br/> ... or you can contact me directly through the form below :)
            </div>
          </div>

          {/* THE ACTUAL FORM !!!!! */}
          <div className='pt-10 pb-10 md:pb-20 px-10 md:px-28'>
            <form className='flex flex-col space-y-6'>
              <formGroup className='flex flex-col space-y-1'>
                < label className='montserrat text-xs' htmlFor='name'>name</label>
                < input type='text' value={name} placeholder='Anya Forger' onChange={(e)=>{setName(e.target.value)}} name='name' className='border border-stone-200 rounded shadow-sm shadow-stone-200 h-8 px-2 text-xs' required />  
              </formGroup>

              <formGroup className='flex flex-col space-y-1'>
                < label className='montserrat text-xs' htmlFor='email'>email</label>
                < input type='email' value={email} placeholder='anya@edenacademy.com' onChange={(e)=>{setEmail(e.target.value)}} name='email' className='border border-stone-200 rounded shadow-sm shadow-stone-200 h-8 px-2 text-xs' required />
              </formGroup>

              <formGroup className='flex flex-col space-y-1 inline-block'>
                < label className='montserrat text-xs' htmlFor='message'>message</label>
                {/* < input type='text-area' value={message} placeholder='Type your message here!' onChange={(e)=>{setMessage(e.target.value)}} name='message' className='border border-slate-300 rounded h-36 shadow-sm shadow-slate-200 px-2' required /> */}
                <textarea id='message' name='message' value={message} placeholder='Type your message here!' onChange={(e)=>{setMessage(e.target.value)}} className='border border-stone-200 rounded h-36 shadow-sm shadow-stone-200 p-2 text-xs'/>
              </formGroup>

              <div className='inline-block flex flex-col items-center '>
              <input type='submit' value={submitText} onClick={(e)=>{handleSubmit(e)}} className='border border-stone-200 text-xs lowercase py-2 px-3 rounded text-stone-600 definition montserrat' />
              </div>
            </form>
          </div>

        </div>
    </div>
  )
}

export default Contact
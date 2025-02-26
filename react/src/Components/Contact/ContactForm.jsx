import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <form className='flex flex-col gap-4'>
      <input type="text" placeholder='Your Name' required className=' h-12  rounded-lg bg-[#645550] px-2'/>
      <input type="email" placeholder='Your Email' required className='h-12 rounded-lg bg-[#645550] px-2'/>
      <textarea type='text' placeholder='Message' rows='9' cols='50' required className='rounded-lg bg-[#645550] p-2'></textarea>
      <button type='submit' className='w-full rounded-lg border border-cyan-400 text-green-100 h-12 font-bold text-xl hover:bg-cyan-500 bg-cyan-300 transition-all duration-500'>Send</button>
      </form>
    </div>
  )
}

export default ContactForm
import React from 'react'
import ContactLeft from './ContactLeft'
import ContactRight from './ContactRight'

const contact = () => {
  return (
    <div id='Contact' className='max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4'>
        <h2 className='text-6xl text-cyan-300 mb-10 text-center'>Contact Me</h2>
        <div className='flex justify-center gap-24 bg-brown1 p-8 rounded-2xl lg:flex-row sm:flex-col'><ContactLeft/>
        <ContactRight/>
        </div>
    </div>
  )
}

export default contact
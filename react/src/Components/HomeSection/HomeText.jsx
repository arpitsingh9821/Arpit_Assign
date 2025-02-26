import React from 'react'
import { motion } from 'motion/react'

const HomeText = () => {
  return (
    <div className='flex flex-col px-8 gap-4 h-full justify-center md:text-left sm:text-center '>
      <h2 
      // varient={fadeIn('down',0.2)}
      // initial='hidden'
      // whileInView='show'
      // viewport={{once:false, amount:0}}
      className='lg:text-2xl sm:text-xl uppercase text-cyan-300'>Software & Data Enthusiast</h2>
        <h1 className='md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange-400'>Arpit Singh</h1>
        <p className='text-lg mt-4 text-white'>TYBCA Student | Exploring Development,<br/> Analytics & Technology</p>
    </div>
  )
}

export default HomeText
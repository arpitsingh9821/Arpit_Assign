import React from 'react'
import { motion } from 'framer-motion'
import {fadeIn} from '../../FramerMotion/Variant'

const HomeText = () => {
  return (
    <div className='flex flex-col px-8 gap-4 h-full justify-center md:text-left sm:text-center '>
      <motion.h2 
      variants={fadeIn('down',0.2)}
      initial='hidden' 
      whileInView='show' 
      viewport={{once:false, amount:0}}
      className='lg:text-2xl sm:text-xl uppercase text-cyan-300'>Software & Data Enthusiast</motion.h2>
        <motion.h1 
        variants={fadeIn('right',0.4)}
        initial='hidden' 
        whileInView='show' 
        viewport={{once:false, amount:0}}
        className='md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange-400'>Arpit Singh</motion.h1>
        <motion.p
        variants={fadeIn('up',0.6)}
        initial='hidden' 
        whileInView='show' 
        viewport={{once:false, amount:0}}
        className='text-lg mt-4 text-white'>TYBCA Student | Exploring Development,<br/> Analytics & Technology</motion.p>
    </div>
  )
}

export default HomeText
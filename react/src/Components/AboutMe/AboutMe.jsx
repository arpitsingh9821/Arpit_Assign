import React from 'react'
import AboutMeTxt from './AboutMeTxt'
import AboutMeImg from './AboutMeImg'
import { motion } from 'framer-motion'
import {fadeIn} from '../../FramerMotion/Variant'
const AboutMe = () => {
  return (
    <div id='About' className='flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center '>
        <motion.div
        variants={fadeIn('right',0.2)}
                 initial='hidden' 
                 whileInView='show' 
                 viewport={{once:false, amount:0.7}}
        >
        <AboutMeTxt/>
        </motion.div>
        <motion.div
         variants={fadeIn('left',0.2)}
                  initial='hidden' 
                  whileInView='show' 
                  viewport={{once:false, amount:0.7}}
        >
        <AboutMeImg/>
        </motion.div>
    </div>
  )
}

export default AboutMe
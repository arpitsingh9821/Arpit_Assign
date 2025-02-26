import React from 'react'
import AcademicsTxt from './AcademicsTxt'
import AcademicsImg from './AcademicsImg'
import { motion } from 'framer-motion'
import {fadeIn} from '../../FramerMotion/Variant'
const Academics = () => {
  return (
    <>
    
        <div id='Academics' className='flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] border-t-2 border-green-200 justify-between items-center p-[90px]'>
          
        <div>
          <motion.div 
           variants={fadeIn('right',0.2)}
                      initial='hidden' 
                      whileInView='show' 
                      viewport={{once:false, amount:0.7}}
          className='sm:hidden lg:block md:block'>
        <AcademicsImg />
          </motion.div>
          <motion.div 
           variants={fadeIn('left',0.2)}
                      initial='hidden' 
                      whileInView='show' 
                      viewport={{once:false, amount:0.7}}
          className='sm:block lg:hidden md:hidden'>
       <AcademicsTxt/>
          </motion.div>
        </div>
        <div>
        <motion.div 
         variants={fadeIn('right',0.2)}
                    initial='hidden' 
                    whileInView='show' 
                    viewport={{once:false, amount:0.7}}
        className='sm:block lg:hidden md:hidden'>
        <AcademicsImg />
          </motion.div>
          <motion.div 
           variants={fadeIn('left',0.2)}
                      initial='hidden' 
                      whileInView='show' 
                      viewport={{once:false, amount:0.7}}
          className='sm:hidden lg:block md:block'>
       <AcademicsTxt/>
          </motion.div>
        </div>
    </div>
    </>
  )
}

export default Academics
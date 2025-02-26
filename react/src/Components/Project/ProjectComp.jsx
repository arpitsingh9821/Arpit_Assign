import React from 'react'
import { motion } from 'framer-motion'
import {fadeIn} from '../../FramerMotion/Variant'
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
const ProjectComp = ({name,year,align,link,image}) => {
  return (
    <motion.div 
    variants={fadeIn('up',0.2)}
                      initial='hidden' 
                      whileInView='show' 
                      viewport={{once:false, amount:0}}
    className={`flex w-full sm:flex-col-reverse items-center gap-8 ${align ==='left'? 'md:flex-row':'md:flex-row-reverse'} justify-end`}>
        <div>
            <h2 className='md:text-3xl sm:text-2xl text-green-300'>{name}</h2>
            <h2 className={`text-xl font-normal font-SpaceBet text-green-100 sm:text-center ${align==='left'? 'md:text-right':'md:text-left'}`}>{year}</h2>
            <a href={link} className={`text-xl flex gap-2 items-center text-cyan-300 hover:text-green-200 hover:scale-[1.2] transition-all duration-500 cursor-pointer sm:justify-self-center ${align==='left'? 'md:justify-self-end':'md:justify-self-start'}`}>View <HiMiniArrowTopRightOnSquare /></a>
        </div>
        <div className='hover:scale-[1.045] max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover-scale-110 transform transition-all duration-500 relative border border-white'>
<div className='w-full h-full bg-cyan-300 opacity-30 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden'></div>
<img src={image} alt="Project_Img" className='w-full h-full'/>
        </div>
    </motion.div>
  )
}

export default ProjectComp
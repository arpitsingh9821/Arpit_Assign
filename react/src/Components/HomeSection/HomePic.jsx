import React from 'react'
import { FiHexagon } from "react-icons/fi";
import { motion } from 'framer-motion'
import {fadeIn} from '../../FramerMotion/Variant'
const HomePic = () => {
  return (
    <motion.div 
    variants={fadeIn('left',0.2)}
          initial='hidden' 
          whileInView='show' 
          viewport={{once:false, amount:0}}
    className='h-full flex items-center justify-center sm:mt-14 lg:mr-5 md:mr-3 border-[4px] border-green-200 shadow-[0_0_20px_5px_rgba(255,140,0,0.4)] rounded-full overflow-hidden'>
       <div className='h-[450px] w-[450px] bg-gradient-to-r from-cyan-400 to-orange-500'> <img src="/Images/Adobe Express - file.png" alt="Error" className='h-[500px] w-[400px] ml-9 rounded-none  transition-all ease-in-out duration-[1.3s]
 hover:scale-[1.1]'/></div>
        <div className='  absolute -z-10 flex justify-center items-center animate-pulse '>
        <FiHexagon className='md:h-[90%] sm:h-[100%] min-h-[600px] w-auto text-cyan-300 opacity-75 blur-md animate-[spin_20s_linear_infinite]'/> 
        </div>
    </motion.div>
    
  )
}

export default HomePic
import React from 'react'
import SkillText from './SkillText'
import SkillAll from './SkillAll'
import SkillSM from './SkillSM'
import { motion } from 'framer-motion'
import {fadeIn} from '../../FramerMotion/Variant'
const Skills = () => {
  return (
    <div>
        <div className=' max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden'>
           <motion.div
           variants={fadeIn('down',0.2)}
                            initial='hidden' 
                            whileInView='show' 
                            viewport={{once:false, amount:0.7}}
           >
            <SkillText/>
           </motion.div>
            <div className='bottom-[50px] absolute left-[50%] -translate-x-[50%] lg:block sm:hidden'>
            <SkillAll/>
            </div>
            <div className='lg:hidden  text-green-100'><SkillSM/></div>
        </div>
    </div>
  )
}
export default Skills
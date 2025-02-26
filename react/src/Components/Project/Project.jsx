import React from 'react'
import ProjectTxt from './ProjectTxt'
import ProjectComp from './ProjectComp'
import { motion } from 'framer-motion'
import {fadeIn} from '../../FramerMotion/Variant'
const projects = [{
    name:'My Portfolio',
    year:'Feb\'2025',
    align:'Right',
    image:'/Images/img_port.png',
    link:'https://arpit-assign.vercel.app/',
}
]

const Project = () => {
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4'>
      <motion.div
       variants={fadeIn('up',0.2)}
                  initial='hidden' 
                  whileInView='show' 
                  viewport={{once:false, amount:0}}
      >

        <ProjectTxt/>
      </motion.div>
        <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
            {projects.map((item,index)=>{
               return <ProjectComp key={index} name={item.name} year={item.year} align={item.align} link={item.link} image={item.image}/>
            })
}
        </div>
    </div>
  )
}

export default Project
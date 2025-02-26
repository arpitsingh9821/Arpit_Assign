import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoPython } from "react-icons/io5";
import { TbBrandKotlin } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { FaPhp } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { FaCopyright } from "react-icons/fa";
import SingleSkill from './SingleSkill';
import { motion } from 'framer-motion'
import {fadeIn} from '../../FramerMotion/Variant'
const skills=[{
    Skill:"PYTHON",
    icon: IoLogoPython,
    },
    {
    Skill:"KOTLIN",
    icon: TbBrandKotlin,
    },
    {
    Skill:"MYSQL",
    icon: SiMysql,
    },
    {
    Skill:"HTML",
    icon: FaHtml5,
    },
    {
    Skill:"CSS",
    icon: IoLogoCss3,
    },
    {
    Skill:"JS",
    icon: FaNodeJs,
    },
    {
    Skill:"REACT",
    icon: IoLogoReact,
    },
    {
    Skill:"PHP",
    icon: FaPhp,
    },
    {
    Skill:"POWER BI",
    icon: SiGoogleanalytics,
    },
    {
    Skill:"C++",
    icon: TbBrandCpp,
    },
    {
    Skill:"C",
    icon: FaCopyright,
    }
                                        

];
const SkillAll = () => {
  return (
    <div>
       <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
        {skills.map((item,index)=>{
            return(
                <motion.div
                variants={fadeIn('up',index*0.1)}
                                            initial='hidden' 
                                            whileInView='show' 
                                            viewport={{once:false, amount:0}}
                >
<SingleSkill key={index} text={item.Skill} img={<item.icon/>} />
                </motion.div>
            )
        })}
        </div> 
    </div>
  )
}

export default SkillAll
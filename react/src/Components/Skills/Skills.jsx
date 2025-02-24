import React from 'react'
import SkillText from './SkillText'
import SkillAll from './SkillAll'
import SkillSM from './SkillSM'

const Skills = () => {
  return (
    <div>
        <div className=' max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden'>
            <SkillText/>
            <div className='bottom-[50px] absolute left-[50%] -translate-x-[50%] lg:block sm:hidden'>
            <SkillAll/>
            </div>
            <div className='lg:hidden  text-green-100'><SkillSM/></div>
        </div>
    </div>
  )
}
export default Skills
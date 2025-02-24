import React from 'react'
import AboutMeTxt from './AboutMeTxt'
import AboutMeImg from './AboutMeImg'

const AboutMe = () => {
  return (
    <div id='About' className='flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center '>
        <div>
        <AboutMeTxt/>
        </div>
        <div>
        <AboutMeImg/>
        </div>
    </div>
  )
}

export default AboutMe
import React from 'react'

const AboutMeImg = () => {
  return (
    <div className='h-[500px] w-[300px] relative '>
        <div className='h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden '>
        <img src="/Images/img3.png" alt="Error" className='h-full w-full object-cover'/>
        </div>
        <div className='h-[500px] w-[250px] bg-orange-400 absolute bottom-[-15px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10'></div>
    </div>
  )
}

export default AboutMeImg
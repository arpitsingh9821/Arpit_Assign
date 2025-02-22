import React from 'react'

const SingleSkill = ({img, text}) => {
  return (
    <div className='hover:-translate-y-10 transition-all duration-700'>
         <div className='flex flex-col items-center gap-2 relative'> 
            <div className='bg-white text-cyan-400 h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-green-200 hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-orange-300'>{img}</div>
            <p className='text-green-100 font-bold'>{text}</p>
        </div> 
        <div className='w-[100px] h-[200px] bg-orange-400 absolute top-[50px] -z-10'></div>
    </div>
  )
}

export default SingleSkill
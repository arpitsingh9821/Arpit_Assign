import React from 'react'
import { FiHexagon } from "react-icons/fi";

const HomePic = () => {
  return (
    <div className='h-full flex items-center justify-center sm:mt-14 lg:mr-5 md:mr-3 border-[4px] border-green-200 shadow-[0_0_20px_5px_rgba(255,140,0,0.4)] rounded-full overflow-hidden'>
        <img src="/Images/Adobe Express - file.png" alt="Error" className='h-[400px] w-[350px] rounded-full  bg-gradient-to-r from-cyan-400 to-orange-500 transition-all ease-in-out duration-[1.3s]
 hover:scale-[1.1]'/>
        <div className='  absolute -z-10 flex justify-center items-center animate-pulse '>
        <FiHexagon className='md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan-300 blur-md animate-[spin_20s_linear_infinite]'/> </div>

    </div>
    
  )
}

export default HomePic
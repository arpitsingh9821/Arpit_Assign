import React from 'react'
const Links = [
  {link:"About ME", section:"About"},
  {link:"Academics", section:"Academics"},
  {link:"Projects", section:"projects"},
  {link:"Contact Me", section:"Contact"},
]
const NavabarLink = () => {
  return (
    <ul className='flex gap-10 text-white font-semibold text-xl lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-black backdrop-blur-lg lg:bg-black sm:w-full py-4 sm:text-center'>
      {Links.map((link,index) =>{
        return(
          <li key={index} className='group'>
            <a href="Academics" className='cursor-pointer hover:text-green-400 transition-all duration-500'>{link.link}</a>
          <div className='mx-auto bg-green-300 w-0 group-hover:w-full h-[1px] transition-all duration-300'></div>
          </li>
        );
      })
      }
    </ul>
  )
}

export default NavabarLink
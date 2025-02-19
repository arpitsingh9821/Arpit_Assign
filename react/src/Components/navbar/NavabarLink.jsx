import React from 'react'
const Links = [
  {link:"About Me", section:"about"},
  {link:"Academics", section:"academics"},
  {link:"Projects", section:"projects"},
  {link:"Contact Me", section:"Contact"},
]
const NavabarLink = () => {
  return (
    <ul className='flex gap-6 text-white font-semibold text-xl'>
      {Links.map((link,index) =>{
        return(
          <li key={index} className='group'>
            <a href="#" className='cursor-pointer hover:text-green-400 transition-all duration-500'>{link.link}</a>
          <div className='mx-auto bg-green-300 w-0 group-hover:w-full h-[1px] transition-all duration-300'></div>
          </li>
        );
      })
      }
    </ul>
  )
}

export default NavabarLink
import React from 'react'
import { Link } from 'react-scroll'
const Links = [
    {link:"Home", section:"Home"},
    {link:"About ME", section:"About"},
    {link:"Academics", section:"Academics"},
    {link:"Projects", section:"projects"},
    {link:"Contact Me", section:"Contact"},
  ]
const Footer = () => {
  return (
    <div className='px-4'>
        <div className='w-full h-[1px] bg-lightgrey mt-24'>
        </div>
        <div className='md:flex sm:hidden justify-between mt-4 max-w-[1200px] mx-auto '>
<p className='text-3xl text-lightgrey'>Arpit Singh</p>
<ul className='flex gap-4 text-lightgrey text-xl '>
    {Links.map((item,index)=>{
        return <li key={index} className=''>
          <Link 
                    to={item.section}
                    smooth={true}
                    spy={true}
                    duration={800}
                    offset={-130}  className='hover:text-green-100 transition-all duration-500 cursor-pointer'>{item.link}</Link></li>
    }
)}

    
</ul>
        </div>
<p className=' max-w-[1200px] mx-auto text-right text-lightgrey text-xl sm:block lg:hidden md:hidden p-4'>© 2024 Arpit Singh | All Rights Reserved.</p>
    </div>
  )
}

export default Footer
import React from 'react';
import NavbarLogo from './NavbarLogo'
import NavabarLink from './NavabarLink';
import NavbarBtn from './NavbarBtn';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';


const navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
        setMenuOpen (!menuOpen)
    }  
    return (
    <>
    
        <nav className='m-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2'>
            <div className='flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-green-300'>
         <NavbarLogo/>
         <div className={`${menuOpen ? "sm:block" : "sm:hidden" } lg:block`}>
         <NavabarLink/>
         </div>
         <NavbarBtn/>
            </div>
            <div className='flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full border-[0.5px] border-green-400 '>
                <button className='text-2xl p-3 border border-green-400 rounded-full text-white'
                 onClick={toggleMenu}>
                <GiHamburgerMenu />
                </button>
                </div>
        </nav>
    
    </>)
}

export default navbar
import React from 'react'
import { MdEmail } from "react-icons/md";
import { MdOutlineContactPhone } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import SingleInfo from './SingleInfo';
const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-green-100'>
        <SingleInfo text="Arpsingh9821@gmail.com" Image={MdEmail}/>
        <SingleInfo text="+91-00000 00000" Image={MdOutlineContactPhone}/>
        <SingleInfo text="Maharashtra, Mumbai" Image={CiLocationOn}/>
    </div>
  )
}

export default ContactInfo
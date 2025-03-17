import React from 'react'
import { MdEmail } from "react-icons/md";
import { MdOutlineContactPhone } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import SingleInfo from './SingleInfo';
import { useSelector } from 'react-redux';
const ContactInfo = () => {
  const {loading, portfolio} = useSelector((state) => state.root);
  const {contact} = portfolio;
  const {contactno,email,location} = contact;
  
  
  return (
    <div className='flex flex-col gap-4 text-green-100'>
        <SingleInfo text={email} Image={MdEmail}/>
        <SingleInfo text={contactno} Image={MdOutlineContactPhone}/>
        <SingleInfo text={location} Image={CiLocationOn}/>
    </div>
  )
}

export default ContactInfo
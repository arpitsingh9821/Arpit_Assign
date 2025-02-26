import React from 'react'
import { BiCool } from "react-icons/bi";
import ContactForm from './ContactForm';
const ContactLeft = () => {
  return (
    <div>
        <div>
        <h2 className='text-orange-400 text-3xl mb-4'>Get In Touch</h2>
        <p className='text-green-100'>
  I may not have all the answers, but I do have Google & a lot of enthusiasm! Let's do this!{" "}
  <BiCool  className='inline-flex text-green-200 mb-1'/>
</p>
        </div>
        <ContactForm/>
    </div>
  )
}

export default ContactLeft
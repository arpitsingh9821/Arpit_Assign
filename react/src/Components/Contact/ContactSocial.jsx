import React from 'react'
import SingleSocial from './SingleSocial'
import { FaGithub } from "react-icons/fa";
const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
        <SingleSocial Link='https://github.com/arpitsingh9821' Icon={FaGithub}/>
    </div>
  )
}

export default ContactSocial
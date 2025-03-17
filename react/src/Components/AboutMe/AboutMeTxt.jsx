import React from 'react'
import { useSelector } from 'react-redux';

const AboutMeTxt = () => {
  const {loading, portfolio} = useSelector((state) => state.root);
  const {about} = portfolio;
  const {Desc} = about;
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
        <h2 className='text-6xl text-cyan-400 mb-10'>About Me</h2>
          <p className='text-green-100 text-lg' dangerouslySetInnerHTML={{ __html: Desc }} />
    </div>
  )
}

export default AboutMeTxt
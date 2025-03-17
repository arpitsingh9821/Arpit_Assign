import React from 'react'
import { useSelector } from 'react-redux';

const AcademicsImg = () => {
  const {loading, portfolio} = useSelector((state) => state.root);
  const {academic} = portfolio;
  const {academicsImg} = academic;
  return (
    
        <div className='h-[500px] w-[300px] relative ml-10'>
        <div className='h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden '>
        <img src={academicsImg} alt="Error" className='h-full w-auto object-cover'/>
        </div>
        <div className='h-[500px] w-[250px] bg-orange-400 absolute bottom-[-15px] right-[-30px] rounded-br-[120px] rounded-tl-[120px] rounded-bl-[20px] rounded-tr-[20px] -z-10'></div>
    </div>
   
  )
}

export default AcademicsImg
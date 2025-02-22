import React from 'react'
import AcademicsTxt from './AcademicsTxt'
import AcademicsImg from './AcademicsImg'

const Academics = () => {
  return (
    <>
    
        <div id='Academics' className='flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] border-t-2 border-green-200 justify-between items-center p-[90px]'>
          
        <div>
          <div className='sm:hidden lg:block md:block'>
        <AcademicsImg />
          </div>
          <div className='sm:block lg:hidden md:hidden'>
       <AcademicsTxt/>
          </div>
        </div>
        <div>
        <div className='sm:block lg:hidden md:hidden'>
        <AcademicsImg />
          </div>
          <div className='sm:hidden lg:block md:block'>
       <AcademicsTxt/>
          </div>
        </div>
    </div>
    </>
  )
}

export default Academics
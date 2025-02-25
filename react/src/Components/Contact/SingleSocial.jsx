import React from 'react'

const SingleSocial = ({Icon,Link}) => {
  return (
    <div className='text-2xl h-12 w-12 border border-orange-300 text-orange-300 rounded-full p-3 flex item-center justify-center'>
        <a href={Link} className='cursor-pointer' target="_blank" rel="noopener noreferrer">
            <Icon/>
        </a>
    </div>
  )
}

export default SingleSocial
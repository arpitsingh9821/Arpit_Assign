import React from 'react'
import HomePic from './HomePic'
import HomeText from './HomeText'
import HomeBg from './HomeBg'
const Home = () => {
  return (
    <>
    <div className='pt-40 pb-16'>
      <div className='flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4'>
      <HomeText/>
      <HomePic/>
      <HomeBg/>

      </div>
    </div>
    </>
  )
}

export default Home
import React from 'react'
import HomePic from './HomePic'
import HomeText from './HomeText'
import HomeBg from './HomeBg'
import Home2 from './Home2'
const Home = () => {
  return (
    <>
    <div id='Home' className='pt-40 pb-16 sm:overflow-hidden lg:overflow-hidden md:overflow-hidden'>
      <div className='flex w-full h-fit md:flex-row sm:flex-col  max-w-[1200px] mx-auto justify-between items-center relative px-4'>
      <HomeText/>
      <HomePic/>
      </div>
      <HomeBg/>
    </div>
    <div className=''><Home2/></div>
    </>
  )
}

export default Home
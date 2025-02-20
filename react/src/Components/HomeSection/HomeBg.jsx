import React from 'react'

const HomeBg = () => {
  return (
    <div>
        <div className="shadow-orangeMediumShadow absolute top-[500px] right-0 -z-10 animate-pulse"></div>
        <div className="shadow-cyanMediumShadow absolute top-[-30px] right-[40px] -z-10 animate-pulse"></div>
        <div className="shadow-cyanMediumShadow absolute top-[-30px] left-0 -z-10 opacity-500"></div>
        <div className="shadow-orangeMediumShadow absolute top-[500px] left-0 -z-10 opacity-50"></div>
        <div className="shadow-cyanMediumShadow absolute top-[500px] left-[-80%] -z-10 opacity-50"></div>
        <div className="shadow-cyanMediumShadow absolute items-center left-[80%] -z-10 opacity-500"></div>
        

    </div>
  )
}

export default HomeBg
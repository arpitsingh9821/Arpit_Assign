import React from 'react'
import Navbar1 from './Components/navbar/Navbar1'
import Home from './Components/HomeSection/Home'
import AboutMe from './Components/AboutMe/AboutMe'
const App = () => {
  return (
    <main className='font-body'>
      <Navbar1/>
      <Home/>
      <AboutMe/>
    </main>
  )
}

export default App

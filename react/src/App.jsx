import React from 'react'
import Navbar1 from './Components/navbar/Navbar1'
import Home from './Components/HomeSection/Home'
import AboutMe from './Components/AboutMe/AboutMe'
import HelperSection from './Components/navbar/HelperSection'
import Academics from './Components/Academics/Academics'
import Skills from './Components/Skills/Skills'
import SubSkill from './Components/Skills/SubSkill'
const App = () => {
  return (
    <main className='font-body'>
      <Navbar1/>
      <Home/>
      <AboutMe/>
      <Academics/>
      <Skills/>
      <SubSkill/>
      <HelperSection/>
    </main>
  )
}

export default App

import React from 'react'
import Navbar1 from './Components/navbar/Navbar1'
import Home from './Components/HomeSection/Home'
import AboutMe from './Components/AboutMe/AboutMe'
import Academics from './Components/Academics/Academics'
import Skills from './Components/Skills/Skills'
import SubSkill from './Components/Skills/SubSkill'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <main className='font-body'>
      <Navbar1/>
      <Home/>
      <AboutMe/>
      <Academics/>
      <Skills/>
      <SubSkill/>
      <Project/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App

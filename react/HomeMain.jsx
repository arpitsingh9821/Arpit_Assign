import React from 'react'
import Navbar1 from './src/Components/navbar/Navbar1'
import Home from './src/Components/HomeSection/Home'
import AboutMe from './src/Components/AboutMe/AboutMe'
import Academics from './src/Components/Academics/Academics'
import Skills from './src/Components/Skills/Skills'
import SubSkill from './src/Components/Skills/SubSkill'
import Project from './src/Components/Project/Project'
import Contact from './src/Components/Contact/Contact'
import Footer from './src/Components/Footer/Footer'
import { useSelector } from 'react-redux'
const HomeMain = () => {
  const {portfolio}
   = useSelector((state) => state.root);
  return (
      <div>
        
         {portfolio && (
              <div>
                <Navbar1 />
                <Home />
                <AboutMe />
                <Academics />
                <Skills />
                <SubSkill />
                <Project />
                <Contact />
                <Footer />
              </div>
         )}
    </div>
  )
}

export default HomeMain
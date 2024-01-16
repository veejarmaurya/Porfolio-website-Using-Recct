import { useState } from 'react'
import Header from './components/header.jsx'
import Banner from './components/banner.jsx'
import './App.css'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contactus.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter} from 'react-router-dom'
import StickyNavBar from './components/scroll.jsx'

function App() {
     
  return (
    <> 
    <BrowserRouter>
    {/* < ScrollToTop/> */}
         <Header />
         <Banner />
         <About />
         <Skills />
         <Projects />
         <Contact />
         <Footer />
         <StickyNavBar />
         </BrowserRouter>
     </>
  )
}

export default App

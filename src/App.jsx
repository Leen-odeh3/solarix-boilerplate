import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Achievement from './components/Achievement'
import About from './components/About'
import Services from './components/Services'
import Team from './components/Team/Team'
import Project from './components/Project'
import Testimonials from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Achievement/>
      <About/>
      <Services/>
      <Team/>
      <Project/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

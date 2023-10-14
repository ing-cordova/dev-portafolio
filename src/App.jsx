import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portafolio from './components/portafolio/Portafolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import JobExperience from './components/jobexperience/JobExperience'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <JobExperience/>
      <Experience />
      <Services />
      <Portafolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
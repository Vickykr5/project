import React from 'react'
import Navbar from '../components/Navbar'
import AboutContent from "../components/AboutContent"
import Footer from "../components/Footer"
import Heroimg2 from '../components/Heroimg2'

const about = () => {
  return (
    <div>
  <Navbar/>
  <Heroimg2 heading="About" text="Im a friendly Front-End Devloper."/>
  <AboutContent/>
  <Footer/>
    </div>
  )
}

export default about

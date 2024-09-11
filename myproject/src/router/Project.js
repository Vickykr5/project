import React from 'react'
import Navbar from '../components/Navbar'
import Heroimg2 from '../components/Heroimg2'
import Footer from "../components/Footer"
import PriceingCard from '../components/PriceingCard'
import Work from '../components/Work'
const project = () => {
  return (
    <div>
    <Navbar/>
    <Heroimg2 heading="PROJECTS." text="Some of my Most recents works"/>
    <Work/>
    <PriceingCard/>
    <Footer/>
    </div>
  )
}

export default project

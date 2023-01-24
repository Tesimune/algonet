import { useState } from 'react'
import Carosel from '../assets/components/home/Carosel'
import Exclusive from '../assets/components/home/Exclusive'
import Featured from '../assets/components/home/Featured'
import FullService from '../assets/components/home/FullService'
import Landing from '../assets/components/home/Landing'
import More from '../assets/components/home/More'
import WorkWithUs from '../assets/components/home/WorkWithUs'
import Navbar from '../assets/layouts/Navbar'
import ContactPage, { Contact } from './Contact'

function App() {

  return (
    <div className='bg-[url("/app/Slider.jpg")] w-full'>
      
      <Navbar />
      
      <div>
        <Landing />
        <Carosel />
        <More />
        <WorkWithUs />
        <FullService />
        <Featured />
        <Exclusive />
        <Contact />
      </div>
      
    </div>
  )
}

export default App

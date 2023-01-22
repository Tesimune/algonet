import { useState } from 'react'
import Carosel from '../assets/components/home/Carosel'
import Landing from '../assets/components/home/Landing'
import More from '../assets/components/home/More'
import Navbar from '../assets/layouts/Navbar'

function App() {

  return (
    <div className='bg-[url("/app/Slider.jpg")] w-full text-white'>
      
      <Navbar />
      
      <div>
        <Landing />
        <Carosel />
        <More />
      </div>
      
      <div>

      </div>

    </div>
  )
}

export default App

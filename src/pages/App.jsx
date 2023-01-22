import { useState } from 'react'
import Carosel from '../assets/components/home/Carosel'
import Landing from '../assets/components/home/Landing'
import More from '../assets/components/home/More'

function App() {

  return (
    <div>
      <div className='bg-[url("/images/bubble.jpg")] text-white'>
        <div className='bg-algonet-1 bg-opacity-90 backdrop-blur-lg drop-shadow-lg'>
          <Landing />
          <Carosel />
          <More />
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default App

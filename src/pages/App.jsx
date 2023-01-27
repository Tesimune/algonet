import { useState } from 'react'
import Carosel from '../assets/components/home/Carosel'
import Exclusive from '../assets/components/home/Exclusive'
import Featured from '../assets/components/home/Featured'
import FullService from '../assets/components/home/FullService'
import Landing from '../assets/components/home/Landing'
import More from '../assets/components/home/More'
import WorkWithUs from '../assets/components/home/WorkWithUs'
import ContactCard from '../assets/components/contact/ContactCard'
import LayoutComponents from '../assets/layouts/LayoutComponents';

function App() {

  return (
    <>
    
      <LayoutComponents>
        <div className='bg-[url("/app/Slider.jpg")] w-full pt-20'>
          <Landing />
          <Carosel />
          <More />
          <WorkWithUs />
          <FullService />
          <Featured />
          <Exclusive />
          <ContactCard />
        </div>
      </LayoutComponents>
      
    </>
  )
}

export default App

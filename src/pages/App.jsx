import React from 'react'
import Carosel from '../assets/components/home/Carosel'
import Exclusive from '../assets/components/home/Exclusive'
import Featured from '../assets/components/home/Featured'
import FullService from '../assets/components/home/FullService'
import Landing from '../assets/components/home/Landing'
import More from '../assets/components/home/More'
import WorkWithUs from '../assets/components/home/WorkWithUs'
import ContactCard from '../assets/components/contact/ContactCard'
import LayoutComponents from '../assets/layouts/LayoutComponents';
import LoadingEffect from '../assets/components/LoadingEffect'

function App() {
  
  return (
    <>
      <LoadingEffect>
        <LayoutComponents>
          <div className='bg-slate-900 w-full pt-20'>
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
      </LoadingEffect>
    </>
  )
}

export default App

import React from 'react'
import LayoutComponents, { AltLayoutComponents } from '../assets/layouts/LayoutComponents';
import Landing from '../assets/components/services/Landing'
import WorkList from '../assets/components/services/WorkList';
import ContactCard from '../assets/components/contact/ContactCard'

function Services() {
  return (
    <>

      <AltLayoutComponents>
        <div className='bg-[url(/app/altbglight.jpg)]'>
          <Landing />
          <WorkList />
        </div>
        <ContactCard />
      </AltLayoutComponents> 
    
    </>
  )
}

export default Services
import React from 'react'
import LayoutComponents, { AltLayoutComponents } from '../assets/layouts/LayoutComponents';
import Landing from '../assets/components/services/Landing'
import WorkList from '../assets/components/services/WorkList';
import ContactCard from '../assets/components/contact/ContactCard'
import LoadingEffect from '../assets/components/LoadingEffect';

function Services() {
  return (
    <>
      <LoadingEffect>
        <AltLayoutComponents>
          <div className='bg-[url(/app/altbglight.jpg)]'>
            <Landing />
            <WorkList />
          </div>
          <ContactCard />
        </AltLayoutComponents> 
      </LoadingEffect>
    </>
  )
}

export default Services
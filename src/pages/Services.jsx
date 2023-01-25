import React from 'react'
import ContactPage, { Contact } from './Contact'
import LayoutComponents, { AltLayoutComponents } from '../assets/layouts/LayoutComponents';
import Landing from '../assets/components/services/Landing'
import WorkList from '../assets/components/services/WorkList';

function Services() {
  return (
    <>

      <AltLayoutComponents>
        <div className='bg-[url(/app/altbglight.jpg)]'>
          <Landing />
          <WorkList />
        </div>
        <Contact />
      </AltLayoutComponents> 
    
    </>
  )
}

export default Services
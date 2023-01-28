import React from 'react'
import LayoutComponents, { AltLayoutComponents } from '../assets/layouts/LayoutComponents';
import Landing from '../assets/components/works/Landing'
import WorkList from '../assets/components/works/WorkList';
import ContactCard from '../assets/components/contact/ContactCard'
import LoadingEffect from '../assets/components/LoadingEffect';

function Works() {
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

export default Works
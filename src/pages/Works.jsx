import React from 'react'
import ContactPage, { Contact } from './Contact'
import LayoutComponents, { AltLayoutComponents } from '../assets/layouts/LayoutComponents';
import Landing from '../assets/components/works/Landing'
import WorkList from '../assets/components/works/WorkList';

function Works() {
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

export default Works
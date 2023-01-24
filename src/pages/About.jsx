import React from 'react'
import ContactPage, { Contact } from './Contact'
import LayoutComponents, { AltLayoutComponents } from '../assets/layouts/LayoutComponents';

function About() {
  return (
    <>

      <AltLayoutComponents>
        <div>
          About
        </div>
        <Contact />
      </AltLayoutComponents> 
    
    </>
  )
}

export default About
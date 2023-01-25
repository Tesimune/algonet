import React from 'react'
import ContactPage, { Contact } from './Contact'
import LayoutComponents, { AltLayoutComponents } from '../assets/layouts/LayoutComponents';
import Landing from '../assets/components/about/Landing'
import AboutUs from '../assets/components/about/AboutUs'
import Strategy from '../assets/components/about/Strategy';
import Team from '../assets/components/about/Team';

function About() {
  return (
    <>

      <AltLayoutComponents>
        <div className='bg-[url(/app/altbglight.jpg)]'>
          <Landing />
          <AboutUs />
          <Strategy />
          <Team />
        </div>
        <Contact />
      </AltLayoutComponents> 
    
    </>
  )
}

export default About
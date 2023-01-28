import React from 'react'
import LayoutComponents, { AltLayoutComponents } from '../assets/layouts/LayoutComponents';
import Landing from '../assets/components/about/Landing'
import AboutUs from '../assets/components/about/AboutUs'
import Strategy from '../assets/components/about/Strategy';
import Team from '../assets/components/about/Team';
import ContactCard from '../assets/components/contact/ContactCard'
import LoadingEffect from '../assets/components/LoadingEffect';

function About() {
  return (
    <>
      <LoadingEffect>
        <AltLayoutComponents>
          <div className='bg-[url(/app/altbglight.jpg)]'>
            <Landing />
            <AboutUs />
            <Strategy />
            <Team />
          </div>
          <ContactCard />
        </AltLayoutComponents> 
      </LoadingEffect>
    </>
  )
}

export default About
import React from 'react'
import { AltLayoutComponents } from '../assets/layouts/LayoutComponents';
import ContactCard from '../assets/components/contact/ContactCard'
import Form from '../assets/components/contact/Form';

function Contact() {
  return (
    <>
      <AltLayoutComponents>
        <div className='bg-[url(/app/bglight.jpg)]'>
          {/* <ContactCard /> */}
          <Form />
        </div>
      </AltLayoutComponents>
    </>
  )
}
export default Contact
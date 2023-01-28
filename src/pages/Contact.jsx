import React from 'react'
import { AltLayoutComponents } from '../assets/layouts/LayoutComponents';
import ContactCard from '../assets/components/contact/ContactCard'
import Form from '../assets/components/contact/Form';
import LoadingEffect from '../assets/components/LoadingEffect';

function Contact() {
  return (
    <>
      <LoadingEffect>
        <AltLayoutComponents>
          <div className='bg-[url(/app/bglight.jpg)]'>
            <Form />
            <ContactCard />
          </div>
        </AltLayoutComponents>
      </LoadingEffect>
    </>
  )
}
export default Contact
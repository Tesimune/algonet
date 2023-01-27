import React from 'react'
import { AltLayoutComponents } from '../assets/layouts/LayoutComponents';
import ContactCard from '../assets/components/contact/ContactCard'
import Form from '../assets/components/contact/Form';

function Contact() {
  return (
    <>
      <AltLayoutComponents>
        {/* <ContactCard /> */}
        <Form />
      </AltLayoutComponents>
    </>
  )
}
export default Contact
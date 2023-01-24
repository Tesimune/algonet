import React, { Children } from 'react'
import Footer from './Footer'
import Navbar, { AltNavbar } from './Navbar'

function LayoutComponents(props) {
  return (
    <div className='bg-[url("/app/Slider.jpg")] w-full'>
      <Navbar />
        <div className='min-h-screen'>
          { props.children }
        </div>
      <Footer />
    </div>
  )
}

export default LayoutComponents

export function AltLayoutComponents(props) {
  return ( 
    <div>
      <AltNavbar />
        <div className='min-h-screen'>
          { props.children }
        </div>
      <Footer />
    </div>
   );
}

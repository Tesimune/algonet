import React, { Children } from 'react'
import {Outlet} from "react-router-dom";
import Footer from './Footer'
import Hambuger from './Hambuger';
import Navbar, { AltNavbar } from './Navbar'

function LayoutComponents(props) {
  return (
    <div className='bg-[url("/app/Slider.jpg")] w-full'>
      <Navbar />
      <Hambuger />
      <Outlet />
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
      <Hambuger />
      <Outlet />
        <div className='min-h-screen pt-20 md:pt-0'>
          { props.children }
        </div>
      <Footer />
    </div>
   );
}

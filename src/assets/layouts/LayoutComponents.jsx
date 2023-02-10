import React, { Children } from 'react'
import {Outlet} from "react-router-dom";
import Footer from './Footer'
import Hambuger from './Hambuger';
import Navbar, { AltNavbar } from './Navbar'

function LayoutComponents(props) {
  return (
    <div className='grid justify-center items-center'>
      <div className='grid justify-center w-full lg:max-w-[1400px]'>
        <div className="w-full h-full absolute top-0 left-0 -z-10">
          <div className="absolute right-0 w-2/4 ml-auto pt-64 flex justify-around">
            <div className='shadow-effect' />
            <div className='shadow-effect two' />
            <div className='shadow-effect three' />
            <div className='shadow-effect four' />
          </div>

           <Navbar />
            <Hambuger />
            <Outlet />
              <div className='min-h-screen'>
                { props.children }
              </div>
            <Footer />
        </div>
      </div>
    </div>
  )
}

export default LayoutComponents

export function AltLayoutComponents(props) {
  return ( 
    <div className='grid justify-center items-center'>
      <div className='grid justify-center w-full lg:max-w-[1400px]'>
        <AltNavbar />
        <Hambuger />
        <Outlet />
          <div className='min-h-screen pt-20 lg:pt-0'>
            { props.children }
          </div>
        <Footer />
      </div>
    </div>
   );
}

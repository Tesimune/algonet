import React, { Children } from 'react'
import {Outlet} from "react-router-dom";
import Footer from './Footer'
import Hambuger from './Hambuger';
import Navbar, { AltNavbar } from './Navbar'

function LayoutComponents(props) {
  return (
    <div className='bg-algonet-1 grid justify-center items-center'>
      <div className='layout-container'>
        <Hambuger />
        <Navbar />
        <Outlet />
          <div className='min-h-screen'>
            { props.children }
          </div>
        <Footer />
      </div>
    </div>
  )
}

export default LayoutComponents

export function AltLayoutComponents(props) {
  return ( 
    <div className='bg-algonet-2 grid justify-center items-center'>
      <div className='layout-container'>
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

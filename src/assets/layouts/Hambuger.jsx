import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import NavLink from '../components/NavLink'

function Hambuger() {

  const MyNavLink = ({href, label}) => {
    const isActive = location.pathname == href;
    const myStyle = 'text-red-500 border-b-2 border-red-500';
   return  (
    <NavLink>
      <Link to={href} className={isActive ? myStyle : null}>{label}</Link>
    </NavLink>
   )
  }

  return (
    <div id='HambugerBar' className='hidden lg:hidden'>
      <div className='bg-white text- flex items-center h-screen w-2/3 p-5 absolute left-0 z-50'>
          <div className='grid gap-5 font-bold '>
              <MyNavLink href="/" label="Home" />
              <MyNavLink href="/about" label="About" />
              <MyNavLink href="/works" label="Works" />
              <MyNavLink href="/services" label="Services" />
              <MyNavLink href="/contact" label="Contact" />
            </div>
      </div>
    </div>
  )
}

export default Hambuger
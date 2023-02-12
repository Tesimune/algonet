import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import NavLink from '../components/NavLink'
import { GoThreeBars } from 'react-icons/go'
import AppLogo from '../components/AppLogo';

function Navbar() {

  const MyNavLink = ({href, label}) => {
    const isActive = location.pathname == href;
    const myStyle = 'text-red-500 border-b-2 border-red-500';
   return  (
    <NavLink>
      <Link to={href} className={isActive ? myStyle : null}>{label}</Link>
    </NavLink>
   )
  }

  function Hambuger(){
    const HambugerBar = document.querySelector('#HambugerBar')
    HambugerBar.classList.contains('hidden') ? (
      HambugerBar.classList.remove('hidden')
    ):(
      HambugerBar.classList.add('hidden')
    )

  }
  
  return (
    <>
        <div className='bg-transparent flex justify-between items-center py-3 lg:py-9 px-5 lg:px-28 absolute z-50 w-full lg:max-w-[1400px]'>
            <Link to='/'>
              <AppLogo />
            </Link>
            <div className='hidden lg:block'>
              <div className='flex gap-5 font-bold text-gray-50'>
                <MyNavLink href="/" label="Home" />
                <MyNavLink href="/about" label="About" />
                <MyNavLink href="/works" label="Works" />
                <MyNavLink href="/services" label="Services" />
                <MyNavLink href="/contact" label="Contact" />
              </div>
            </div>
            <Link to='/contact' className='bg-white border hidden lg:block border-red-600 p-3 text-red-600 hover:bg-red-500 hover:text-white transition duration-500 ease-in-out'>
              Let's connect
            </Link>
            <button onClick={Hambuger} className='text-white lg:hidden'>
              <GoThreeBars className='w-9 h-9' />
            </button>
        </div>
    </>
  )
}

export default Navbar;

export function AltNavbar() {

  const MyNavLink = ({href, label}) => {
    const isActive = location.pathname == href;
    const myStyle = 'text-red-500 border-b-2 border-red-500';
   return  (
    <NavLink>
      <Link to={href} className={isActive ? myStyle : null}>{label}</Link>
    </NavLink>
   )
  }

  function Hambuger(){
    const HambugerBar = document.querySelector('#HambugerBar')
    HambugerBar.classList.contains('hidden') ? (
      HambugerBar.classList.remove('hidden')
    ):(
      HambugerBar.classList.add('hidden')
    )

  }
  return ( 
    <>
      <div className='bg-white flex justify-between items-center py-3 lg:py-9 px-5 lg:px-28 absolute z-50 w-full lg:max-w-[1400px]'>
        <Link to='/' className='flex'>
          <AppLogo />
        </Link>
        <div className='hidden lg:block'>
          <div className='flex gap-5 font-bold text-black'>
            <MyNavLink href="/" label="Home" />
            <MyNavLink href="/about" label="About" />
            <MyNavLink href="/works" label="Works" />
            <MyNavLink href="/services" label="Services" />
            <MyNavLink href="/contact" label="Contact" />
          </div>
        </div>
        <Link to='/contact' className='bg-white border hidden lg:block border-red-600 p-3 text-red-600 hover:bg-red-500 hover:text-white  transition duration-500 ease-in-out'>
          Let's connect
        </Link>
        <button onClick={Hambuger} className='text-black lg:hidden'>
          <GoThreeBars className='w-9 h-9' />
        </button>
      </div>
    </>
   );
}
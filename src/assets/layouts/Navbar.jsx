import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import NavLink from '../components/NavLink'
import { GoThreeBars } from 'react-icons/go'
import AppLogo from '../components/AppLogo';

function Navbar() {

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
        <div className='bg-transparent flex justify-between items-center py-3 md:py-9 px-5 md:px-28 absolute w-full'>
            <Link to='/'>
              <AppLogo />
            </Link>
            <div className='hidden md:block'>
              <div className='flex gap-5 font-bold text-gray-50'>
                <NavLink active='/'>
                  <Link to='/'>Home</Link>
                </NavLink>
                <NavLink>
                  <Link to='/about'>About</Link>
                </NavLink>
                <NavLink>
                  <Link to='/works'>Works</Link>
                </NavLink>
                <NavLink>
                  <Link to='/services'>Services</Link>
                </NavLink>
                <NavLink>
                  <Link to='/contact'>Contact</Link>
                </NavLink>
              </div>
            </div>
            <Link to='/' className='bg-white border hidden md:block border-red-600 p-3 text-red-600'>Let's connect</Link>
            <button onClick={Hambuger} className='text-white md:hidden'>
              <GoThreeBars className='w-9 h-9' />
            </button>
        </div>
    </>
  )
}

export default Navbar;

export function AltNavbar() {

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
      <div className='bg-white flex justify-between items-center py-3 md:py-9 px-5 md:px-28 absolute w-full'>
        <Link to='/' className='flex'>
          <AppLogo />
        </Link>
        <div className='hidden md:block'>
          <div className='flex gap-5 font-bold text-black'>
            <NavLink>
              <Link to='/'>Home</Link>
            </NavLink>
            <NavLink>
              <Link to='/about'>About</Link>
            </NavLink>
            <NavLink>
              <Link to='/works'>Works</Link>
            </NavLink>
            <NavLink>
              <Link to='/services'>Services</Link>
            </NavLink>
            <NavLink>
              <Link to='/contact'>Contact</Link>
            </NavLink>
          </div>
        </div>
        <Link to='/' className='bg-white border hidden md:block border-red-600 p-3 text-red-600'>Let's connect</Link>
        <button onClick={Hambuger} className='text-black md:hidden'>
          <GoThreeBars className='w-9 h-9' />
        </button>
      </div>
    </>
   );
}
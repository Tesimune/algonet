import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import NavLink from '../components/NavLink'

function Navbar() {
  return (
    <>
        <div className='bg-transparent flex justify-between items-center py-9 px-5 md:px-28 absolute w-full'>
            <Link to='/' className='flex'>
              <span className='flex items-center text-red-700 font-bold text-xl uppercase'>ALgonet</span>
              <img className='flex items-center' src='/app/MEDIA.png' alt='logo' />
            </Link>
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
                <Link to='/blogs'>Blogs</Link>
              </NavLink>
              <NavLink>
                <Link to='/services'>Services</Link>
              </NavLink>
              <NavLink>
                <Link to='/contact'>Contact</Link>
              </NavLink>
            </div>
            <Link to='/' className='bg-white border border-red-600 p-3 text-red-600'>Let's connect</Link>
        </div>
    </>
  )
}

export default Navbar;

export function AltNavbar() {
  return ( 
    <>
      <div className='bg-white flex justify-between items-center py-9 px-5 md:px-28 absolute w-full'>
        <Link to='/' className='flex'>
          <span className='flex items-center text-red-700 font-bold text-xl uppercase'>ALgonet</span>
          <img className='flex items-center' src='/app/MEDIA.png' alt='logo' />
        </Link>
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
            <Link to='/blogs'>Blogs</Link>
          </NavLink>
          <NavLink>
            <Link to='/services'>Services</Link>
          </NavLink>
          <NavLink>
            <Link to='/contact'>Contact</Link>
          </NavLink>
        </div>
        <Link to='/' className='bg-white border border-red-600 p-3 text-red-600'>Let's connect</Link>
      </div>
    </>
   );
}
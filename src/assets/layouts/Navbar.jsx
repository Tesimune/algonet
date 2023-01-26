import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import NavLink from '../components/NavLink'

function Navbar() {
  return (
    <>
        <div className='bg-transparent flex justify-between items-center py-9 px-5 md:px-20 absolute w-full'>
            <a href='/' className='flex'>
              <span className='flex items-center text-red-700 font-bold text-xl uppercase'>ALgonet</span>
              <img className='flex items-center' src='/app/MEDIA.png' alt='logo' />
            </a>
            <div className='flex gap-5 font-bold text-gray-50'>
              <NavLink>
                <Link to='/' active='/'>Home</Link>
              </NavLink>
              <NavLink>
                <Link to='about'>About</Link>
              </NavLink>
              <NavLink>
                <Link to='works'>Works</Link>
              </NavLink>
              <NavLink>
                <Link to='blogs'>Blogs</Link>
              </NavLink>
              <NavLink>
                <Link to='services'>Services</Link>
              </NavLink>
              <NavLink>
                <Link to='contact'>Contact</Link>
              </NavLink>
            </div>
            <a to='' className='bg-white border border-red-600 p-3 text-red-600'>Let's connect</a>
        </div>
    </>
  )
}

export default Navbar;

export function AltNavbar() {
  return ( 
    <>
      <div className='bg-white flex justify-between items-center py-9 px-5 md:px-20 absolute w-full'>
        <a href='/' className='flex'>
          <span className='flex items-center text-red-700 font-bold text-xl uppercase'>ALgonet</span>
          <img className='flex items-center' src='/app/MEDIA.png' alt='logo' />
        </a>
        <div className='flex gap-5 font-bold text-black'>
          <NavLink>
            <Link to='/' active='/'>Home</Link>
          </NavLink>
          <NavLink>
            <Link to='about'>About</Link>
          </NavLink>
          <NavLink>
            <Link to='works'>Works</Link>
          </NavLink>
          <NavLink>
            <Link to='blogs'>Blogs</Link>
          </NavLink>
          <NavLink>
            <Link to='services'>Services</Link>
          </NavLink>
          <NavLink>
            <Link to='contact'>Contact</Link>
          </NavLink>
        </div>
        <button className='bg-white border border-red-600 p-3 text-red-600'>Let's connect</button>
      </div>
    </>
   );
}
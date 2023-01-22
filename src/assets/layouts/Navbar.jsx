import React from 'react'
import NavLink from '../components/NavLink'

function Navbar() {
  return (
    <>
        <div className='bg-transparent bg-opacity-90 backdrop-blur-lg drop-shadow-lg flex justify-between items-center py-9 px-5 md:px-20'>
            <div className='flex'>
              <span className='flex items-center text-red-700 font-bold text-xl uppercase'>ALgonet</span>
              <img className='flex items-center' src='/app/MEDIA.png' alt='logo' />
            </div>
            <div className='flex gap-5 font-bold'>
              <NavLink href='/' active='/'>Home</NavLink>
              <NavLink href='about'>About</NavLink>
              <NavLink href='works'>Works</NavLink>
              <NavLink href='blogs'>Blogs</NavLink>
              <NavLink href='services'>Services</NavLink>
              <NavLink href='contact'>Contact</NavLink>
            </div>
            <button className='bg-white border border-red-600 p-3 text-red-600'>Let's connect</button>
        </div>
    </>
  )
}

export default Navbar;

export function AltNavbar() {
  return ( 
    <>
      <div className='flex justify-between items-center py-9 px-5 md:px-20'>
        <div className='flex'>
          <span className='flex items-center text-red-700 font-bold text-xl uppercase'>ALgonet</span>
          <img className='flex items-center' src='/app/MEDIA.png' alt='logo' />
        </div>
        <div className='flex gap-5 font-bold'>
          <NavLink href='/' active='/'>Home</NavLink>
          <NavLink href='about'>About</NavLink>
          <NavLink href='works'>Works</NavLink>
          <NavLink href='blogs'>Blogs</NavLink>
          <NavLink href='services'>Services</NavLink>
          <NavLink href='contact'>Contact</NavLink>
        </div>
        <button className='bg-white border border-red-600 p-3 text-red-600'>Let's connect</button>
      </div>
    </>
   );
}
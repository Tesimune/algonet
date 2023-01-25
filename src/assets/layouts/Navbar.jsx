import React from 'react'
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
              <NavLink href='/' active='/'>Home</NavLink>
              <NavLink href='about'>About</NavLink>
              <NavLink href='works'>Works</NavLink>
              <NavLink href='blogs'>Blogs</NavLink>
              <NavLink href='services'>Services</NavLink>
              <NavLink href='contact'>Contact</NavLink>
            </div>
            <a href='' className='bg-white border border-red-600 p-3 text-red-600'>Let's connect</a>
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
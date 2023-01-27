import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import NavLink from '../components/NavLink'

function Hambuger() {
  return (
    <div id='HambugerBar' className='hidden md:hidden'>
      <div className='flex justify-end pt-16 p-2'>
          <div className='grid gap-5 font-bold bg-white text-black w-1/2 p-5 rounded-lg shadow-lg absolute'>
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
      </div>
    </div>
  )
}

export default Hambuger
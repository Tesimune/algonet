import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import NavLink from '../components/NavLink'
import { BsArrowBarLeft } from 'react-icons/bs'

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

  function HambugerHidde(){
    document.querySelector('#HambugerBar').classList.add('hidden')
  }

  return (
    <div id='HambugerBar' className='hidden lg:hidden transition duration-5'>
      <div className='bg-white text- flex justify-center items-center h-screen transition duration-5 w-full p-5 absolute left-0 z-50'>
        <button onClick={HambugerHidde} className='text-lg absolute top-5 right-5'>
          <BsArrowBarLeft className='w-9 h-9'/>
        </button>
          <div className='grid justify-center text-lg gap-5 font-bold '>
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
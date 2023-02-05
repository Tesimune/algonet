import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import { 
    AiFillInstagram, 
    AiFillFacebook, 
    AiFillTwitterSquare, 
    AiFillLinkedin 
  } from 'react-icons/ai'
import AppLogo from '../components/AppLogo'

function Footer() {
  return (
    <div className='bg-white md:px-28 p-5'>
      <div className='bg-white flex md:grid flex-col-reverse md:flex-col md:grid-cols-3'>
        
        <section className='grid md:col-span-1 text-black py-16'>
          <div className='flex justify-between pb-9'>
            <div className='grid gap-5'>
              <div className='flex items-center'>
                <AppLogo />
              </div>
              <span className='w-4/5'>Algonet Media is a one stop marketing agency that offers creative and professional digital marketing solutions. </span>
              <div className='flex gap-3'>
                <a href=''>
                  <AiFillInstagram className='h-7 w-7' />
                </a>
                <a href=''>
                  <AiFillFacebook className='h-7 w-7' />
                </a>
                <a href=''>
                  <AiFillTwitterSquare className='h-7 w-7' />
                </a>
                <a href=''>
                  <AiFillLinkedin className='h-7 w-7' />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className='grid md:col-span-2 md:grid-cols-4 gap-5 p-16 border-t-4 md:border-t-0'>
          <div>
            <div className='grid gap-3'>
              <label className='font-bold text-xl'>About</label>
              <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
              <Link to='/works'>Works</Link>
              <Link to='/services'>Services</Link>
              <Link to='/contact'>Contact</Link>
            </div>
          </div>
          <div>
            <div className='grid gap-3'>
              <label className='font-bold text-xl'>Resources</label>
              <Link to='/'>Overview</Link>
              <Link to='/'>Documentation</Link>
              <Link to='/'>Integrations</Link>
              <Link to='/'>Status Page</Link>
            </div>
          </div>
          <div>
            <div className='grid gap-3'>
              <label className='font-bold text-xl'>Social</label>
              <a href=''>LinkedIn</a>
              <a href=''>Facebook</a>
              <a href=''>Instagram</a>
              <a href=''>Twitter</a>
              <a href=''>Whatsapp</a>
            </div>
          </div>
          <div>
            <div className='grid gap-3'>
              <label className='font-bold text-xl'>Support</label>
              <Link to='/'>Help Desk</Link>
              <Link to='/'>Contact Us</Link>
              <Link to='/'>Integrations</Link>
              <Link to='/'>How it works</Link>
            </div>
          </div>
        </section>

      </div>
      <div className='grid lg:flex lg:justify-between gap-5 text-sm border-t border-x-white py-9'>
        <span>General   |   Terms Of Use    |   Privacy Policy   |   Security Policy  |  Careers    |  Support</span>
        <span>© Copyright 2023 ALGONET MEDIA Nigeria. All Rights Reserved. </span>
      </div>
    </div>
  )
}

export default Footer
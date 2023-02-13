import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";

function Landing() {
  return (
    <div>
        <img src='/images/pagetop.jpg' alt='top' />
          <div className='grid md:grid-cols-2'>
            <div className='grid gap-3'>
              <div className='bg-gray-100 grid items-end p-5 pt-16 pb-9 md:pr-16 md:pl-36'>
                <span className='text-5xl font-bold w-4/5'>Our Vision </span>
              </div>
              <div className='p-5 md:pl-36'>
                <p className='text-lg'>Here at Algonet, we believe in the power of digital marketing to help businesses reach their goals, 
                  however big or small they may be. 
                  We are a full-service digital marketing agency specializing in SEO, 
                  content marketing, web design, email marketing, and more. 
                </p>
              </div>
              <div className='flex p-5 md:p-0 md:pl-36'>
                <div className='flex items-center'>
                  <Link to='/' className='bg-red-600 p-3 text-white'>Let's connect</Link>
                </div>
              </div>
            </div>
            <div className='p-3 md:p-16'>
              <img src='/images/Group.jpg' className='h-96' alt='top' />
            </div>
        </div>
    </div>
  )
}

export default Landing
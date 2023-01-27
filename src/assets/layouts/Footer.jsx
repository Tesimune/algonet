import React from 'react'
import { 
    AiFillInstagram, 
    AiFillFacebook, 
    AiFillTwitterSquare, 
    AiFillLinkedin 
  } from 'react-icons/ai'
import AppLogo from '../components/AppLogo'

function Footer() {
  return (
    <div>
      <div className='bg-white flex md:grid flex-col-reverse md:flex-col md:grid-cols-2 md:px-28'>
        
        <section className='grid col-span-1 bg-algonet-1 text-white py-16 px-9 md:px-16'>
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
            <div>
              <h1 className='font-bold pb-3'>About</h1>
              <div className='grid gap-5 text-sm'>
                <a href=''>Home</a>
                <a href=''>About</a>
                <a href=''>Services</a>
                <a href=''>Blogs</a>
                <a href=''>Contact</a>
              </div>
            </div>
          </div>
          <div className='grid gap-5 text-sm border-t border-x-white pt-9'>
            <span>General   |   Terms Of Use    |   Privacy Policy   |   Security Policy  |  Careers    |  Support</span>
            <span>© Copyright 2023 ALGONET MEDIA Nigeria. All Rights Reserved. </span>
          </div>
        </section>

        <section className='grid md:grid-cols-3 p-16 border-t-4 md:border-t-0'>
          <div>
            <div className='grid gap-3'>
              <label className='font-bold text-lg'>Resources</label>
              <a href=''>Overview</a>
              <a href=''>Documentation</a>
              <a href=''>Integrations</a>
              <a href=''>Status Page</a>
            </div>
          </div>
          <div>
            <div className='grid gap-3'>
              <label className='font-bold text-lg'>Social</label>
              <a href=''>LinkedIn</a>
              <a href=''>Facebook</a>
              <a href=''>Instagram</a>
              <a href=''>Twitter</a>
              <a href=''>Whatsapp</a>
            </div>
          </div>
          <div>
            <div className='grid gap-3'>
              <label className='font-bold text-lg'>Support</label>
              <a href=''>Help Desk</a>
              <a href=''>Contact Us</a>
              <a href=''>Integrations</a>
              <a href=''>How it works</a>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Footer
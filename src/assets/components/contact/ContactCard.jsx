import React from 'react'
import { Link } from 'react-router-dom'

function ContactCard() {
  return (
    <div className='relative'>
      <div className='bg-white py-28 px-5 md:px-28'>
        <div className='hidden lg:block md:relative'>
          <div className='bg-gray-300 border-2 border-black h-80 w-80 m-5 rounded-lg shadow-2xl absolute z-40 left-7'>
            <img src='/images/contacts.gif' className='px-2 pt-2 h-80 rounded-lg' alt='' />
          </div>
          <div className='clip grid md:grid-cols-3 bg-slate-900 text-white rounded-lg h-80'>
            <div className='grid md:col-span-1'></div>
            <div className='grid md:col-span-2'>
              <div className='flex flex-col gap-5 pt-20 p-12 md:w-2/3'>
                <h2 className='text-3xl'>Ready for real results?</h2>
                <span>Book a free Digital Marketing audit and get started with the best strategy.</span>
                <div className='pt-7'>
                  <Link to='/contact' className='bg-red-500 text-white border-red-600 text-sm py-3 px-5 hover:bg-white hover:text-red-500 transition duration-500 ease-in-out'>
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='grid lg:hidden'>
          <div className='grid bg-slate-900 text-white rounded-lg z-30'>
            <img src='/images/contacts.gif' className='px-2 pt-2 h-80 rounded-lg' alt='' />
            <div className='grid'>
              <div className='grid gap-5 p-7'>
                <h2 className='text-5xl'>Ready for real results?</h2>
                <span>Book a free Digital Marketing audit and get started with the best strategy.</span>
                <div className='py-7'>
                  <Link to='/contact' className='bg-red-500 text-white border-red-600 text-sm py-3 px-5 hover:bg-white hover:text-red-500 transition duration-500 ease-in-out'>
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactCard
import React from 'react'
import { Link } from 'react-router-dom'

function ContactCard() {
  return (
    <div>
      <div className='bg-[url(/app/bglight.jpg)] py-28 px-5 md:px-28 '>
        <div className='grid md:grid-cols-3 bg-slate-900 text-white rounded-lg relative'>
          <div className='grid md:col-span-1 p-5'>
            <img src='/images/contacts.gif' className='h-full w-full rounded-lg' alt='' />
          </div>
          <div className='grid md:col-span-2'>
            <div className='flex flex-col gap-5 p-5 md:p-16 md:w-2/3'>
              <h2 className='text-5xl'>Ready for real results?</h2>
              <span>Book a free Digital Marketing audit and get started with the best strategy</span>
              <div className='py-7'>
                <Link to='/contact' className='bg-white border border-red-600 p-3 text-red-600'>Book Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactCard
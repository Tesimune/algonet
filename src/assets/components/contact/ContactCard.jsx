import React from 'react'

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
              <h2 className='text-5xl'>Ready to leave a mark?</h2>
              <span>Book a consultation session with one of our experts, and we will find a tailored solution for you.</span>
              <div className='py-7'>
                <a href='' className='bg-white border border-red-600 p-3 text-red-600'>Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactCard
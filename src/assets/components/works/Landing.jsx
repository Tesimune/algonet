import React from 'react'

function Landing() {
  return (
    <div>
      <img src='/images/pagetop.jpg' alt='top' />
      <div className='grid md:grid-cols-3 m-3 md:m-28 bg-slate-900 text-white rounded-lg'>
        <div className='grid md:col-span-1 justify-center items-center p-5'>
          <img src='/images/gif.gif' className='object-cover lg:h-64x w-full rounded-md' alt='' />
        </div>
        <div className='grid md:col-span-2'>
          <div className='flex flex-col gap-5 p-5 md:p-9 md:w-2/3'>
            <h2 className='text-3xl'>Our Work at Algonet Media</h2>
            <span>We also offer branding, web design and development services. Our team of experts will work closely with you to understand your business goals and objectives, and create a customized plan that will help you achieve your desired results.</span>
            <div className='py-5'>
              <a href='' className='bg-white border border-red-600 p-3 text-red-600'>Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
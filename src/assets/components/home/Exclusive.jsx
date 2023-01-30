import React from 'react'

function Exclusive() {
  return (
    <div className='bg-[url(/app/bgdark.jpg)] py-28 px-5 md:px-28  text-white'>
        <div className='grid md:grid-cols-5 gap-3'>
          <div className='grid col-span-2'>
            <div className='flex flex-col gap-5'>
              <img src='/images/ex1.jpg' alt='item' />
              <h1 className='text-2xl font-bold'>Virtual  Marketing </h1>
              <p>Recruiting an entire Digital Marketing team internally isn't an option for some businesses.</p>
              {/* <a href='' className='underline'>Learn more</a> */}
            </div>
          </div>

          <div className='grid justify-center items-center break-normal md:-rotate-90'>
            <p className="text-3xl font-bold">Our   Exclusive   Services</p>
          </div>

          <div className='grid col-span-2 pt-20'>
            <div className='flex flex-col gap-5'>
              <img src='/images/ex2.jpg' alt='item' />
              <h1 className='text-2xl font-bold'>Copywriting</h1>
              <p>Why not check out our copywriting service which can cover all types of page for your website?</p>
              {/* <a href='' className='underline'>Learn more</a> */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Exclusive
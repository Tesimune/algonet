import React from 'react'

function Exclusive() {
  return (
    <div className='bg-[url(/app/bgdark.jpg)] pt-24 pb-9 px-5 md:px-28 text-white'>
        <div className='grid md:grid-cols-5 gap-3'>
          <div className='grid justify-center md:col-span-2'>
            <div className='flex flex-col gap-5'>
              <div className='h-80 w-80 lg:h-[490px] lg:w-[450px] border-8 border-gray-50'>
                <img src='/images/ex2.jpg' className='h-full w-full' alt='item' />
              </div>
              <h1 className='text-2xl font-bold'>Virtual  Marketing </h1>
              <p>Recruiting an entire Digital Marketing team internally isn't an option for some businesses.</p>
              <a href='' className='underline'>Learn more</a>
            </div>
          </div>

          <div className='grid items-center break-normal md:-rotate-90'>
            <p className="flex text-5xl font-bold md:break-normal md:w-[700px]">Our Exclusive Services</p>
          </div>

          <div className='grid justify-center md:col-span-2 pt-20'>
            <div className='flex flex-col gap-5'>
              <div className='h-80 w-80 lg:h-[490px] lg:w-[450px] border-8 border-gray-50'>
                <img src='/images/ex1.jpg' className='h-full w-full' alt='item' />
              </div>
              <h1 className='text-2xl font-bold'>Copywriting</h1>
              <p>Why not check out our copywriting service which can cover all types of page for your website?</p>
              <a href='' className='underline'>Learn more</a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Exclusive
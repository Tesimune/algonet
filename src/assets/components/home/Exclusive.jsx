import React from 'react'

function Exclusive() {
  return (
    <div className='bg-transparent py-24 px-5 md:px-28 text-white relative'>
      <div className="absolute right-7 w-2/4 ml-auto pt-64 flex justify-around">
        <div className='shadow-effect' />
        <div className='shadow-effect two' />
        <div className='shadow-effect three' />
        <div className='shadow-effect four' />
      </div>
      <div className='grid md:grid-cols-5 gap-9 md:gap-3'>
        <div className='grid justify-center md:col-span-2 z-30'>
          <div className='flex flex-col gap-5 w-80 lg:w-[400px]'>
            <div className='h-80 w-80 lg:h-[500px] lg:w-[400px] border-8 border-gray-50'>
              <img src='/images/ex2.jpg' className='object-cover h-full w-full' alt='item' />
            </div>
            <h1 className='text-2xl font-bold'>Virtual  Marketing </h1>
            <p>Recruiting an entire Digital Marketing team internally isn't an option for some businesses.</p>
            <a href='' className='underline'>Learn more</a>
          </div>
        </div>

        <div className='grid items-center break-normal md:-rotate-90 z-30'>
          <p className="flex text-3xl md:text-5xl font-bold md:break-normal md:w-[700px]">Our Exclusive Services</p>
        </div>

        <div className='grid justify-center md:col-span-2 md:pt-20 z-30'>
          <div className='flex flex-col gap-5 w-80 lg:w-[400px]'>
            <div className='h-80 w-80 lg:h-[500px] lg:w-[400px] border-8 border-gray-50'>
              <img src='/images/ex1.jpg' className='object-cover h-full w-full' alt='item' />
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
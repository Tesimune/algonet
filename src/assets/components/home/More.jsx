import React from 'react'

function More() {
  return (
    <div className='bg-[url("/app/bgdark.jpg")] p-28 text-white'>
      <div className='grid grid-cols-2'>
        <div className='grid gap-5 text-white'>
          <span className='text-5xl'>Strategy, Design &</span>
          <span className='text-5xl'>M|  </span>
          <span className='text-xl pr-24'>Lets tell your target audience about your business, services and products.</span>
          <img className='h-[300px] w-[500px] border-8 border-gray-400 rounded-md mt-16' src='/images/gif.jpg' alt='gif' />
        </div>
        <div className=''>
          <div className='flex gap-3'>
            <div className='pt-40'>
              <img src='/images/al1.png' className='h-[400px] w-[190px] transition duration-700 hover:grayscale' alt='' />
            </div>
            <div className='pt-56'>
              <img src='/images/al2.png' className='h-[400px] w-[190px] transition duration-700 hover:grayscale' alt='' />
            </div>
            <div className='pt-40'>
              <img src='/images/al3.png' className='h-[400px] w-[190px] transition duration-700 hover:grayscale' alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default More
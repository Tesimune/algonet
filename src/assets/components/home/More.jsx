import React from 'react'
import TextAnimation from '../TextAnimation'

function More() {
  return (
    <div className='bg-[url("/app/bgdark.jpg")] py-28 px-5 lg:px-28  text-white'>
      <div className='grid lg:grid-cols-2'>
        <div className='grid gap-5 text-white'>
          <span className='text-5xl'>Strategy, Design &</span>
          <div className='text-5xl'>
            <TextAnimation>
              Marketing done For you. 
            </TextAnimation>
          </div>
          <span className='text-xl pr-24'>Comprehensive digital marketing services to expand your reach and build long-term relationships.</span>
          <img className='h-[350px] w-[470px] border-8 border-gray-400 rounded-md mt-12' src='/images/gif.gif' alt='gif' />
        </div>
        <div className='scroll flex overflow-x-auto pt-5 lg:pt-0'>
          <div className='flex gap-3'>
            <div className='border-8 h-[400px] w-[180px] border-gray-50 rounded-lg lg:mt-40'>
              <img src='/images/al1.jpg' className='rounded-md h-full transition duration-700 grayscale hover:grayscale-0' alt='' />
            </div>
            <div className='border-8 h-[400px] w-[180px] border-gray-50 rounded-lg lg:mt-56'>
              <img src='/images/al2.jpg' className='rounded-md h-full transition duration-700 grayscale hover:grayscale-0' alt='' />
            </div>
            <div className='border-8 h-[400px] w-[180px] border-gray-50 rounded-lg lg:mt-40'>
              <img src='/images/al3.jpg' className='rounded-md h-full transition duration-700 grayscale hover:grayscale-0' alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default More
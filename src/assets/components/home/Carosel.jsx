import React from 'react'

function Carosel() {

  
  return (
    <div className='grid lg:py-9 lg:px-28 text-white'>
      <div className="relative overflow-hidden hidden lg:block">
        <div className="flex">
          <div className="onethired m-4 w-[500px] border-8 border-gray-50 hover:w-[500px] transition-width duration-500 ease-in-out rounded-lg">
            <img className='h-[400px] w-full' src='/images/1.jpg' alt='' />
          </div>
          <div className="onethired m-4 w-[270px] border-8 border-gray-50 hover:w-[500px] transition-width duration-500 ease-in-out rounded-lg">
            <img className='h-[400px] w-full' src='/images/2.jpg' alt='' />
          </div>
          <div className="onethired m-4 w-[270px] border-8 border-gray-50 hover:w-[500px] transition-width duration-500 ease-in-out rounded-lg">
            <img className='h-[400px] w-full' src='/images/3.jpg' alt='' />
          </div>
          <div className="onethired m-4 w-[270px] border-8 border-gray-50 hover:w-[500px] transition-width duration-500 ease-in-out rounded-lg">
            <img className='h-[400px] w-full' src='/images/4.jpg' alt='' />
          </div>
        </div>
      </div>
      <div className="scroll flex overflow-x-auto lg:hidden">
        <div className="flex gap-3">
          <div className="onethired m-4 w-80 border-8 border-gray-50 rounded-md">
            <img className='h-[400px] w-full' src='/images/1.jpg' alt='' />
          </div>
          <div className="onethired m-4 w-80 border-8 border-gray-50 rounded-md">
            <img className='h-[400px] w-full' src='/images/2.jpg' alt='' />
          </div>
          <div className="onethired m-4 w-80 border-8 border-gray-50 rounded-md">
            <img className='h-[400px] w-full' src='/images/3.jpg' alt='' />
          </div>
          <div className="onethired m-4 w-80 border-8 border-gray-50 rounded-md">
            <img className='h-[400px] w-full' src='/images/4.jpg' alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carosel

export function HoverEffect() {
  return (
    <div>
      <div>
        <span></span>
      </div>
    </div>
  )
}
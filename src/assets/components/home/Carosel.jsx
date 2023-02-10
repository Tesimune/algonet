import React, { useEffect } from 'react'

function Carosel() {

 useEffect(() => {
    const mrmans  = document.querySelectorAll('.myslide');

    mrmans[0].style.width = '500px';

    mrmans.forEach(element => {
      element.onmouseover = () => {
        mrmans[0].style.width = '270px';
        element.style.width = '500px';
      }
      element.onmouseout = () => {
        element.style.width = '270px';
        mrmans[0].style.width = '500px';
      }
    });
 }, [])
  
  return (
    <div className='grid lg:py-9 lg:px-28 text-white'>
      <div className="relative overflow-hidden hidden lg:block">
        <div className="flex">
          <div className="myslide">
            <img className='h-[400px] w-full' src='/images/1.jpg' alt='' />
          </div>
          <div className="myslide">
            <img className='h-[400px] w-full' src='/images/2.jpg' alt='' />
          </div>
          <div className="myslide">
            <img className='h-[400px] w-full' src='/images/3.jpg' alt='' />
          </div>
          <div className="myslide">
            <img className='h-[400px] w-full' src='/images/4.jpg' alt='' />
          </div>
        </div>
      </div>
      <div className="scroll flex overflow-x-auto lg:hidden">
        <div className="flex gap-3">
          <div className="myslide m-4 w-80 border-8 border-gray-50 rounded-md">
            <img className='h-[400px] w-full' src='/images/1.jpg' alt='' />
          </div>
          <div className="myslide m-4 w-80 border-8 border-gray-50 rounded-md">
            <img className='h-[400px] w-full' src='/images/2.jpg' alt='' />
          </div>
          <div className="myslide m-4 w-80 border-8 border-gray-50 rounded-md">
            <img className='h-[400px] w-full' src='/images/3.jpg' alt='' />
          </div>
          <div className="myslide m-4 w-80 border-8 border-gray-50 rounded-md">
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
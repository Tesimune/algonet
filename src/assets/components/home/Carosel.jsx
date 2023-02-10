import React, { useEffect } from 'react'
import TextAnimation from '../TextAnimation'

function Carosel() {

 useEffect(() => {
    const mrmans  = document.querySelectorAll('.myslide');
    const mrtext  = document.querySelectorAll('.mrtext');

    mrmans[0].style.width = '500px';

    mrtext.forEach(element => {
      element.onmouseover = () => {
        mrmans[0].style.width = '270px';
        element.style.width = '500px';
        mrtext[0].classList.add('-rotate-90')
        element.classList.remove('-rotate-90');
      }
      element.onmouseout = () => {
        element.style.width = '270px';
        mrmans[0].style.width = '500px';
        mrtext[0].classList.remove('-rotate-90')
        element.classList.add('-rotate-90');
      }
    });
    
    
 }, [])
  
  return (
    <div className='grid lg:py-9 lg:px-28 text-white'>
      <div className="relative overflow-hidden hidden lg:block">
        <div className="flex">
          <div className="myslide">
            <img className='h-[400px] w-full' src='/images/1.jpg' alt='' />
            <div className='mrtext absolute bottom-9 p-16'>
              <div className='flex justify-center items-center text-4xl font-bold'>
                <TextAnimation>
                  Branding
                </TextAnimation>
              </div>
            </div>
          </div>
          <div className="myslide">
            <img className='h-[400px] w-full' src='/images/2.jpg' alt='' />
            <div className='mrtext absolute bottom-9 p-16 -rotate-90'>
              <span className='flex justify-center items-center text-4xl font-bold'>Carosel</span>
            </div>
          </div>
          <div className="myslide">
            <img className='h-[400px] w-full' src='/images/3.jpg' alt='' />
            <div className='mrtext absolute bottom-9 p-16 -rotate-90'>
              <span className='flex justify-center items-center text-4xl font-bold'>Strategy</span>
            </div>
          </div>
          <div className="myslide">
            <img className='h-[400px] w-full' src='/images/4.jpg' alt='' />
            <div className='mrtext absolute bottom-9 p-16 -rotate-90'>
              <span className='flex justify-center items-center text-4xl font-bold'>Creatvity</span>
            </div>
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
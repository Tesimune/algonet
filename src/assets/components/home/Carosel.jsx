import React from 'react'

function Carosel() {
  return (
    <div className='grid md:pr-52 md:pl-9 text-white'>
        <div className='grid md:flex gap-2'>
            <div>
                <img className='h-full' src='/images/1.png' alt='' />
            </div>
            <div className='hidden md:block'>
              <div className='flex gap-2'>
                  <img className='h-full' src='/images/2.png' alt='' />
                  <img className='h-full' src='/images/3.png' alt='' />
                  <img className='h-full' src='/images/4.png' alt='' />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Carosel
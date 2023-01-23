import React from 'react'

function Carosel() {
  return (
    <div className='grid pr-52 pl-9 text-white'>
        <div className='flex gap-2 h-[392.43px]'>
            <div>
                <img className='h-full' src='/images/1.png' alt='' />
            </div>
            <div className='flex gap-2'>
                <img className='h-full' src='/images/2.png' alt='' />
                <img className='h-full' src='/images/3.png' alt='' />
                <img className='h-full' src='/images/4.png' alt='' />
            </div>
        </div>
    </div>
  )
}

export default Carosel
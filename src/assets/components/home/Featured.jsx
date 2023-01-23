import React from 'react'

function Featured() {
  return (
    <div className='grid gap-9 bg-[url(/app/bgdark.jpg)] p-28 text-white'>
         <div className='grid gap-5 w-1/2'>
            <span className='text-5xl'>Our Featured </span>
            <span className='text-5xl'>Works</span>
            <span className='text-xl pr-28'>Branding & Strategy  +  Lets tell your target audience about your business, services and products.</span>
        </div>
        <div className='grid grid-cols-4'>
            <div className='grid gap-2'>
                <img src='/images/carosel1.png' className='w-full' alt='' />
                <span className='text-xl pr-5'>Branding</span>
                <span className='text-sm pr-5'>Content</span>
            </div>
        </div>
    </div>
  )
}

export default Featured
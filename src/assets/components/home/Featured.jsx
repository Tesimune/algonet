import React from 'react'

function Featured() {
  return (
    <div className='grid gap-9 bg-[url(/app/bgdark.jpg)] py-28 px-5 md:px-28  text-white'>
         <div className='grid gap-5 md:w-1/2'>
            <span className='text-5xl'>Our Featured </span>
            <span className='text-5xl'>Works</span>
            <span className='text-xl pr-28'>Branding & Strategy  +  Lets tell your target audience about your business, services and products.</span>
        </div>
        <div className='grid md:grid-cols-4'>
            <div className='grid gap-2'>
                <img src='/images/carosel1.png' className='w-full h-[400px]' alt='' />
                <span className='text-xl pr-5'>Branding</span>
                <span className='text-sm pr-5'>Content</span>
            </div>
            {/* <div className='grid gap-2'>
                <img src='/images/carosel2.png' className='w-full h-[400px]' alt='' />
                <span className='text-xl pr-5'>Content</span>
                <span className='text-sm pr-5'>Branding</span>
            </div>
            <div className='grid gap-2'>
                <img src='/images/carosel3.png' className='w-full h-[400px]' alt='' />
                <span className='text-xl pr-5'>Branding</span>
                <span className='text-sm pr-5'>Content</span>
            </div>
            <div className='grid gap-2'>
                <img src='/images/carosel4.png' className='w-full h-[400px]' alt='' />
                <span className='text-xl pr-5'>Branding</span>
                <span className='text-sm pr-5'>Content</span>
            </div> */}
        </div>
    </div>
  )
}

export default Featured
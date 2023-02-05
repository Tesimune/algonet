import React from 'react'

function Featured() {
  return (
    <div className='grid gap-9 bg-[url(/app/bgdark.jpg)] py-28 px-5 md:px-28  text-white'>
         <div className='grid gap-5 md:w-1/2'>
            <span className='text-5xl'>We Provide</span>
        </div>
        <div className='scroll flex lg:grid-cols-4 gap-3 overflow-x-auto'>
            <div className='grid gap-2'>
                <div className='border-8 bored-gray-50 w-[300px] h-[400px]'>
                    <img src='/images/carosel1.jpg' className='h-full w-full' alt='' />
                </div>
                <span className='text-xl'>Content Marketing for your brand</span>
                <span className='text-sm'>Content creation and design</span>
            </div>
            <div className='grid gap-2'>
                <div className='border-8 bored-gray-50 w-[300px] h-[400px]'>
                    <img src='/images/carosel2.jpg' className='h-full w-full' alt='' />
                </div>
                <span className='text-xl'>SEO and SEM for website</span>
                <span className='text-sm'>Social Media Marketing</span>
            </div>
            <div className='grid gap-2'>
                <div className='border-8 bored-gray-50 w-[300px] h-[400px]'>
                    <img src='/images/carosel3.jpg' className='h-full w-full' alt='' />
                </div>
                <span className='text-xl'>Email Marketing</span>
                <span className='text-sm'>Ads managment</span>
            </div>
            <div className='grid gap-2'>
                <div className='border-8 bored-gray-50 w-[300px] h-[400px]'>
                    <img src='/images/carosel4.jpg' className='h-full w-full' alt='' />
                </div>
                <span className='text-xl'>Copy writing</span>
                <span className='text-sm'>And lots more...</span>
            </div>
            <div className='grid gap-2'>
                <div className='border-8 bored-gray-50 w-[300px] h-[400px]'>
                    <img src='/images/carosel5.jpg' className='h-full w-full' alt='' />
                </div>
                <span className='text-xl'>Copy writing</span>
                <span className='text-sm'>And lots more...</span>
            </div>
        </div>
    </div>
  )
}

export default Featured
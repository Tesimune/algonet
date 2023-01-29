import React from 'react'

function Featured() {
  return (
    <div className='grid gap-9 bg-[url(/app/bgdark.jpg)] py-28 px-5 md:px-28  text-white'>
         <div className='grid gap-5 md:w-1/2'>
            <span className='text-5xl'>We Provide: </span>
            <ul className='text-xl md:pr-28 pl-3 list-disc'>
                <li>Content Marketing for your brand</li>
                <li>SEO and SEM for website</li>
                <li>Email Marketing</li>
                <li>Copy writing</li>
                <li>Content creation and design</li>
                <li>Social Media Marketing</li>
                <li>Ads managment</li>
                <li>And lots more...</li>
            </ul>
        </div>
        <div className='grid md:grid-cols-4'>
            <div className='grid gap-2'>
                <img src='/images/carosel1.png' className='w-full h-[400px]' alt='' />
                <span className='text-xl pl-5'>Branding</span>
                <span className='text-sm pl-5'>Content</span>
            </div>
            <div className='grid gap-2'>
                <img src='/images/carosel2.png' className='w-full h-[400px]' alt='' />
                <span className='text-xl pl-5'>Content</span>
                <span className='text-sm pl-5'>Branding</span>
            </div>
            <div className='grid gap-2'>
                <img src='/images/carosel3.png' className='w-full h-[400px]' alt='' />
                <span className='text-xl pl-5'>Branding</span>
                <span className='text-sm pl-5'>Content</span>
            </div>
            <div className='grid gap-2'>
                <img src='/images/carosel4.png' className='w-full h-[400px]' alt='' />
                <span className='text-xl pl-5'>Branding</span>
                <span className='text-sm pl-5'>Content</span>
            </div>
        </div>
    </div>
  )
}

export default Featured
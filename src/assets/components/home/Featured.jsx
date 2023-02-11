import React from 'react'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'

function Featured() {

    const content = document.querySelector('#content');

    function leftArrow() {
        content.scrollLeft -= 50;
    };

    function rightArrow()  {
        content.scrollLeft += 50;
    };

  return (
    <div className='grid gap-9 bg-[url(/app/bgdark.jpg)] py-20 px-5 md:px-0 md:pl-28 text-white'>
        <div className="absolute right-0 w-2/4 ml-auto pt-64 z-10 flex justify-around">
            <div className='shadow-effect' />
            <div className='shadow-effect two' />
            <div className='shadow-effect three' />
            <div className='shadow-effect four' />
        </div>
        <div className='grid md:flex gap-5 justify-between z-30'>
            <div className='grid gap-5 md:w-1/2'>
                <span className='text-5xl'>Our Featured Work</span>
                <span className='text-xl'>Branding & Strategy  +  Lets tell your target audience about your business, services and products.</span>
            </div>
            <div className='flex justify-end gap-2 items-end pr-9'>
                <button onClick={leftArrow}>
                    <IoIosArrowDropleftCircle className='h-7 w-7'/>
                </button>
                <button onClick={rightArrow}>
                    <IoIosArrowDroprightCircle className='h-7 w-7'/>
                </button>
            </div>
        </div>
        <div id='content' className='scroll overflow-x-auto flex lg:grid-cols-4 gap-5 z-30'>
            <div className='grid gap-2'>
                <div className='border-8 bored-gray-50 w-[330px] h-[400px] rounded-lg'>
                    <img src='/images/carosel1.jpg' className='object-cover h-full w-full' alt='' />
                </div>
                <span className='text-2xl font-bold'>Branding</span>
                <span className='text-sm'>Content</span>
            </div>
            <div className='grid gap-2'>
                <div className='border-8 bored-gray-50 w-[330px] h-[400px] rounded-lg'>
                    <img src='/images/carosel2.jpg' className='object-cover h-full w-full' alt='' />
                </div>
                <span className='text-2xl font-bold'>Content</span>
                <span className='text-sm'>Branding</span>
            </div>
            <div className='grid gap-2'>
                <div className='border-8 bored-gray-50 w-[330px] h-[400px] rounded-lg'>
                    <img src='/images/carosel4.jpg' className='object-cover h-full w-full' alt='' />
                </div>
                <span className='text-2xl font-bold'>Branding</span>
                <span className='text-sm'>Content</span>
            </div>
            <div className='grid gap-2'>
                <div className='border-8 bored-gray-50 w-[330px] h-[400px] rounded-lg'>
                    <img src='/images/carosel3.jpg' className='object-cover h-full w-full' alt='' />
                </div>
                <span className='text-2xl font-bold'>Branding</span>
                <span className='text-sm'>Content</span>
            </div>
            <div className='grid gap-2'>
                <div className='border-8 bored-gray-50 w-[330px] h-[400px] rounded-lg'>
                    <img src='/images/carosel5.jpg' className='object-cover h-full w-full' alt='' />
                </div>
                <span className='text-2xl font-bold'>Branding</span>
                <span className='text-sm'>Content</span>
            </div>
            <div className='grid gap-2'>
                <div className='border-8 bored-gray-50 w-[330px] h-[400px] rounded-lg'>
                    <img src='/images/carosel6.jpg' className='object-cover h-full w-full' alt='' />
                </div>
                <span className='text-2xl font-bold'>Branding</span>
                <span className='text-sm'>Content</span>
            </div>
        </div>
    </div>
  )
}

export default Featured
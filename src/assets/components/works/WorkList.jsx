import React from 'react'
import Pagination from '../Pagination'

function WorkList() {
  return (
    <div className='bg-[url(/app/bglight.jpg)]'>
        <div>
            <div className='grid gap-5'>
                <div className='grid gap-3 md:w-1/2'>
                    <div className='bg-gray-100 grid gap-5 py-16 px-5 md:px-28'>
                        <span className='text-5xl font-bold'>Meet the WorkList</span>
                        <p className='text-lg'>Lets tell your target audience about your business, services and products.</p>
                    </div>
                </div>
                
                <div className='grid md:grid-cols-3 gap-5 px-5 md:px-28'>
                    <div className='grid justify-center font-semibold gap-1'>
                        <img src='/images/div.png' alt='div' />
                        <span className='flex justify-center text-lg'>Branding</span>
                        <span className='flex justify-center text-xs'>Founder & CEO</span>
                    </div>
                    <div className='grid justify-center font-semibold gap-1'>
                        <img src='/images/div1.png' alt='div' />
                        <span className='flex justify-center text-lg'>Content</span>
                        <span className='flex justify-center text-xs'>Branding</span>
                    </div>
                    <div className='grid justify-center font-semibold gap-1'>
                        <img src='/images/div2.png' alt='div' />
                        <span className='flex justify-center text-lg'>Branding</span>
                        <span className='flex justify-center text-xs'>Content</span>
                    </div>
                    <div className='grid justify-center font-semibold gap-1'>
                        <img src='/images/div3.png' alt='div' />
                        <span className='flex justify-center text-lg'>Strategy</span>
                        <span className='flex justify-center text-xs'>Creative</span>
                    </div>
                    <div className='grid justify-center font-semibold gap-1'>
                        <img src='/images/div4.png' alt='div' />
                        <span className='flex justify-center text-lg'>Branding</span>
                        <span className='flex justify-center text-xs'>Branding</span>
                    </div>
                    <div className='grid justify-center font-semibold gap-1'>
                        <img src='/images/div5.png' alt='div' />
                        <span className='flex justify-center text-lg'>Creative</span>
                        <span className='flex justify-center text-xs'>Branding</span>
                    </div>
                    <div className='grid justify-center font-semibold gap-1'>
                        <img src='/images/div6.png' alt='div' />
                        <span className='flex justify-center text-lg'>Creative</span>
                        <span className='flex justify-center text-xs'>Content</span>
                    </div>
                    <div className='grid justify-center font-semibold gap-1'>
                        <img src='/images/div7.png' alt='div' />
                        <span className='flex justify-center text-lg'>Content</span>
                        <span className='flex justify-center text-xs'>Branding</span>
                    </div>
                    <div className='grid justify-center font-semibold gap-1'>
                        <img src='/images/div8.png' alt='div' />
                        <span className='flex justify-center text-lg'>Strategy</span>
                        <span className='flex justify-center text-xs'>Strategy</span>
                    </div>
                </div>

                <Pagination />
            </div>
        </div>
    </div>
  )
}

export default WorkList
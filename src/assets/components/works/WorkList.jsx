import React from 'react'
import Pagination from '../Pagination'

function WorkList() {
  return (
    <div className='bg-[url(/app/bglight.jpg)]'>
        <div>
            <div className='grid gap-5'>
                <div className='grid gap-3 w-1/2'>
                    <div className='bg-gray-100 grid gap-5 py-16 px-28'>
                        <span className='text-5xl font-bold'>Meet the WorkList</span>
                        <p className='text-lg'>Lets tell your target audience about your business, services and products.</p>
                    </div>
                </div>
                
                <div className='grid grid-cols-3 gap-5 px-28'>
                    <div className='grid justify-center font-semibold gap-1'>
                        <img src='/images/staff1.jpg' alt='' />
                        <span className='flex justify-center text-lg'>Branding</span>
                        <span className='flex justify-center text-xs'>Founder & CEO</span>
                    </div>
                    <div className='grid justify-center font-semibold gap-1'>
                        <img src='/images/staff2.jpg' alt='' />
                        <span className='flex justify-center text-lg'>Content</span>
                        <span className='flex justify-center text-xs'>Head of Marketing</span>
                    </div>
                    <div className='grid justify-center font-semibold gap-1'>
                        <img src='/images/staff3.jpg' alt='' />
                        <span className='flex justify-center text-lg'>Branding</span>
                        <span className='flex justify-center text-xs'>Design Lead</span>
                    </div>
                    <div className='grid justify-center font-semibold gap-1'>
                        <img src='/images/staff1.jpg' alt='' />
                        <span className='flex justify-center text-lg'>Strategy</span>
                        <span className='flex justify-center text-xs'>Founder & CEO</span>
                    </div>
                    <div className='grid justify-center font-semibold gap-1'>
                        <img src='/images/staff2.jpg' alt='' />
                        <span className='flex justify-center text-lg'>Branding</span>
                        <span className='flex justify-center text-xs'>Head of Marketing</span>
                    </div>
                    <div className='grid justify-center font-semibold gap-1'>
                        <img src='/images/staff3.jpg' alt='' />
                        <span className='flex justify-center text-lg'>Creative</span>
                        <span className='flex justify-center text-xs'>Design Lead</span>
                    </div>
                    <div className='grid justify-center font-semibold gap-1'>
                        <img src='/images/staff1.jpg' alt='' />
                        <span className='flex justify-center text-lg'>Creative</span>
                        <span className='flex justify-center text-xs'>Founder & CEO</span>
                    </div>
                    <div className='grid justify-center font-semibold gap-1'>
                        <img src='/images/staff2.jpg' alt='' />
                        <span className='flex justify-center text-lg'>Content</span>
                        <span className='flex justify-center text-xs'>Head of Marketing</span>
                    </div>
                    <div className='grid justify-center font-semibold gap-1'>
                        <img src='/images/staff3.jpg' alt='' />
                        <span className='flex justify-center text-lg'>Strategy</span>
                        <span className='flex justify-center text-xs'>Design Lead</span>
                    </div>
                </div>

                <Pagination />
            </div>
        </div>
    </div>
  )
}

export default WorkList
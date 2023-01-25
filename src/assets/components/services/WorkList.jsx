import React from 'react'
import Pagination from '../Pagination'

function WorkList() {
  return (
    <div className='bg-[url(/app/bglight.jpg)]'>
        <div>
            <div className='grid gap-5'>
                <div className='grid grid-cols-3 gap-5 px-28'>
                    <div className='grid justify-center font-semibold gap-1'>
                        <img src='/images/staff1.jpg' alt='' />
                        <span className='pl-5 flex justify-start text-lg'>Adrianne Flynn</span>
                        <span className='pl-5 flex justify-start text-xs'>Founder & CEO</span>
                        <div className='pl-5'>
                            <a href='' className='text-red-700 border-b-2 border-red-700'>Learn more</a>
                        </div>
                    </div>
                    <div className='grid justify-center font-semibold gap-1'>
                        <img src='/images/staff2.jpg' alt='' />
                        <span className='pl-5 flex justify-start text-lg'>Sara Jhonson</span>
                        <span className='pl-5 flex justify-start text-xs'>Head of Marketing</span>
                        <div className='pl-5'>
                            <a href='' className='text-red-700 border-b-2 border-red-700'>Learn more</a>
                        </div>
                    </div>
                    <div className='grid justify-center font-semibold gap-1'>
                        <img src='/images/staff3.jpg' alt='' />
                        <span className='pl-5 flex justify-start text-lg'>Tom Benson</span>
                        <span className='pl-5 flex justify-start text-xs'>Design Lead</span>
                        <div className='pl-5'>
                            <a href='' className='text-red-700 border-b-2 border-red-700'>Learn more</a>
                        </div>
                    </div>
                </div>

                <Pagination />
            </div>
        </div>
    </div>
  )
}

export default WorkList
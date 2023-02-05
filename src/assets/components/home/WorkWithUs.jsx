import React from 'react'
import { HiDatabase } from 'react-icons/hi'
import { BsFillLightbulbFill, BsCircleSquare } from 'react-icons/bs'

function WorkWithUs() {
  return (
    <div className='bg-[url(/app/bglight.jpg)] py-28 px-5 md:px-28  text-black'>
      <div className='grid gap-5 md:w-1/2'>
        <span className='text-5xl font-bold'>Work with us</span>
        <span className='text-xl md:pr-28'>Lets tell your target audience about your business, services and products.</span>
      </div>
      <div className='grid md:grid-cols-3 gap-5 pt-9'>
        <div className='flex items-start'>
          <div className='pr-3'>
            <HiDatabase className='flex items-start h-6 w-6' />
          </div>
          <div className='grid gap-3'>
            <label className='font-bold text-2xl'>Data Driven</label>
            <span>Data is at the forefront of our marketing solution. And making sense of the number is our sole priority. It's at the core of our decision-making. Marketing is more than numbers, but numbers are at the center.</span>
          </div>
        </div>
        <div className='flex items-start'>
          <div className='pr-3'>
            <BsFillLightbulbFill className='flex items-start h-6 w-6' />
          </div>
          <div className='grid gap-3'>
            <label className='font-bold text-2xl'>Innovation</label>
            <span>As your business goals and objectives are ever-changing, so is the marketing landscape. We stay innovative and ahead of the curve to understand the consumer's pain points. </span>
          </div>
        </div>
        <div className='flex items-start'>
          <div className='pr-3'>
            <BsCircleSquare className='flex items-start h-6 w-6' />
          </div>
          <div className='grid gap-3'>
            <label className='font-bold text-2xl'>Creativity</label>
            <span>Algonet provides first-class digital strategies for successful online compaigns. We have the knowledge and passion to increase your brand awareness and reach even more custumers</span>
          </div>
        </div>
      </div>
      <div className='w-full md:h-[555px] mt-7 border-8 border-gray-50'>
        <img src='/images/thumbnail.jpg' className='w-full h-full' alt='' />
      </div>
    </div>
  )
}

export default WorkWithUs
import React from 'react'
import TextAnimation from '../TextAnimation'

function FullService() {
  return (
    <div className='grid gap-3 md:gap-5 bg-white lg:bg-[url(/app/bglight.jpg)] py-28 px-5 md:px-28 text-black'>
        <div className='grid gap-3 md:gap-5 md:w-1/2'>
          <span className='text-md md:text-5xl'>Full-service account </span>
          <div className='text-md md:text-5xl'>
            <TextAnimation>
              management
            </TextAnimation>
          </div>
          <span className='text-sm md:text-xl md:pr-16'>Algonet provides first-class digital strategies for successful online campaign. We have the knowledge and passion to increase your brand awareness and reach even more customers.</span>
        </div>
        <div className='w-full h-80 md:h-[475px] mt-3 border-8 border-gray-50 shadow-2xl'>
            <img src='/images/digital.png' className='object-cover w-full h-full shadow-2xl' alt='' />
        </div>
    </div>
  )
}

export default FullService
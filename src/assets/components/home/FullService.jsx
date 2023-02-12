import React from 'react'
import TextAnimation from '../TextAnimation'

function FullService() {
  return (
    <div className='grid gap-3 md:gap-5 bg-[url(/app/bglight.jpg)] py-28 px-5 md:px-28 text-black'>
        <div className='grid gap-3 md:gap-5 md:w-1/2'>
          <span className='text-md md:text-5xl'>Full-service account </span>
          <div className='text-md md:text-5xl'>
            <TextAnimation>
              management
            </TextAnimation>
          </div>
          <span className='text-sm md:text-xl md:pr-28'>Lets tell your target audience about your business, services and products.</span>
        </div>
        <div className='w-full h-80 md:h-[475px] mt-16 border-8 border-gray-50 shadow-2xl'>
            <img src='/images/digital.png' className='object-cover w-full h-full shadow-2xl' alt='' />
        </div>
    </div>
  )
}

export default FullService
import React from 'react'
import TextAnimation from '../TextAnimation'

function FullService() {
  return (
    <div className='grid gap-5 bg-[url(/app/bglight.jpg)] py-28 px-5 md:px-28  text-black'>
        <div className='grid gap-5 md:w-1/2'>
          <span className='text-5xl'>Full-service account </span>
          <div className='text-5xl'>
            <TextAnimation>
              management
            </TextAnimation>
          </div>
          <span className='text-xl md:pr-28'>Lets tell your target audience about your business, services and products.</span>
        </div>
        <div className='w-full md:h-[555px] '>
            <img src='/images/Creative.gif' className='w-full h-full' alt='' />
        </div>
    </div>
  )
}

export default FullService
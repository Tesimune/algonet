import React from 'react'

function FullService() {
  return (
    <div className='grid gap-5 bg-[url(/app/bglight.jpg)] p-28 text-black'>
        <div className='grid gap-5 w-1/2'>
            <span className='text-5xl'>Full-service account </span>
            <span className='text-5xl'>m| </span>
            <span className='text-xl pr-28'>Lets tell your target audience about your business, services and products.</span>
        </div>
        <div>
            <img src='/app/socials.jpg' className='w-full' alt='' />
        </div>
    </div>
  )
}

export default FullService
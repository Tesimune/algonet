import React from 'react'
import TextAnimation from '../TextAnimation'

function Strategy() {
  return (
    <div className='bg-[url(/app/altbglight.jpg)] py-28 px-5 md:px-28 '>
        <div className='grid gap-9'>
            <div className='flex flex-col gap-5 md:w-1/2'>
                <h1 className='text-5xl font-bold'>Strategy, Design &</h1>
                <div className='text-5xl font-bold'>
                  <TextAnimation>
                    Marketing done for you
                  </TextAnimation>
                </div>
                <p className='text-lg pr-28'>Lets tell your target audience about your business, services and products.</p>
            </div>
            <div>
                <img src='/images/digital.jpg' alt='div' />
            </div>
        </div>
    </div>
  )
}

export default Strategy
import React from 'react'
import TextAnimation from '../TextAnimation'

function Strategy() {
  return (
    <div className='bg-[url(/app/altbglight.jpg)] py-16 px-5 md:px-28 '>
        <div className='grid gap-9'>
            <div className='flex flex-col gap-3 md:gap-5 md:w-1/2'>
                <h1 className='text-2xl md:text-5xl font-bold'>Strategy, Design &</h1>
                <div className='text-2xl md:text-5xl font-bold'>
                  <TextAnimation>
                    Marketing done for you
                  </TextAnimation>
                </div>
                <p className='text-lg md:pr-28'>At Algonet, we have the experience and knowledge to help you make the most of your digital marketing efforts. We  have the skills and resources to help you with optimizing your website for search engines, creating compelling copy and developing a comprehensive content strategy, we will work with you to develop the perfect solution for your business’s needs.</p>
            </div>
            <div className='w-full h-80 md:h-[475px] mt-16 border-8 border-gray-50 shadow-2xl'>
              <img src='/images/digital.png' className='object-cover w-full h-full shadow-2xl' alt='' />
            </div>
        </div>
    </div>
  )
}

export default Strategy
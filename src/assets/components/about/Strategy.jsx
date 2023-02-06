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
                <p className='text-lg pr-28'>At Algonet, we have the experience and knowledge to help you make the most of your digital marketing efforts. We  have the skills and resources to help you with optimizing your website for search engines, creating compelling copy and developing a comprehensive content strategy, we will work with you to develop the perfect solution for your business’s needs.</p>
            </div>
            <div>
                <img src='/images/digital.png' alt='div' />
            </div>
        </div>
    </div>
  )
}

export default Strategy
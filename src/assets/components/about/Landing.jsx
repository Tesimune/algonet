import React from 'react'

function Landing() {
  return (
    <div>
        <img src='/images/pagetop.jpg' alt='top' />
          <div className='grid grid-cols-2'>
            <div className='grid gap-3'>
              <div className='bg-gray-100 grid items-end pt-16 pb-9 pr-16 pl-36'>
                <span className='text-5xl font-bold w-4/5'>About the Algonet Media</span>
              </div>
              <div className='pl-36'>
                <p className='text-lg'>Algonet Media is a one stop marketing agency that offers creative and professional digital marketing solutions. We help businesses to reach their target audiences through our effective and innovative marketing campaigns. Our services include SEO, social media marketing, email marketing, and content marketing.</p>
              </div>
            </div>
            <div className='p-16'>
              <img src='/images/Group.jpg' className='h-96' alt='top' />
            </div>
        </div>
    </div>
  )
}

export default Landing
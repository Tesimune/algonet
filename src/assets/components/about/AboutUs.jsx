import React from 'react'

function AboutUs() {
  return (
    <div className='p-28'>
        <div className='grid md:grid-cols-3 bg-slate-900 text-white rounded-lg p-5'>
            <div className='grid col-span-1 justify-center items-center'>
              <img src='/images/img.png' className='' alt='' />
            </div>
            <div className='grid col-span-2'>
              <div className='flex flex-col justify-end items-end gap-5 p-9 text-right'>
                <h2 className='text-5xl w-3/5'>About   the Algonet   Media</h2>
                <p className='text-lg'>We also offer branding, web design and development services. Our team of experts will work closely with you to understand your business goals and objectives, and create a customized plan that will help you achieve your desired results. With our help, you can confidently take your business to the next level. Contact us today to learn more about our services!</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs
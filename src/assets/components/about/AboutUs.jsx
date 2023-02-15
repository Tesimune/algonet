import React from 'react'

function AboutUs() {
  return (
    <div className='py-16 px-2 md:px-28 '>
        <div className='grid md:grid-cols-3 bg-slate-900 text-white rounded-lg p-5'>
            <div className='grid md:col-span-1 justify-center items-center'>
              <img src='/images/gif2.gif' className='object-cover h-56 w-80 rounded-md' alt='' />
            </div>
            <div className='grid md:col-span-2'>
              <div className='flex flex-col md:items-end gap-5 p-2 md:p-9 md:text-right'>
                <h2 className='text-2xl md:text-5xl md:w-3/5'>About Algonet Media</h2>
                <p className='md:text-lg'>Algonet is a digital marketing company with a passion for helping businesses succeed online. At algonet, your growth is our priority.</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs
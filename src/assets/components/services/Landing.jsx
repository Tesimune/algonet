import React from 'react'

function Landing() {
  return (
    <div>
      <img src='/images/pagetop.jpg' className='w-full' alt='top' />
      <div className='grid md:grid-cols-3 m-3 md:m-28 bg-slate-900 text-white rounded-lg'>
        <div className='grid md:col-span-1 justify-center items-center p-5'>
          <img src='/images/gif.gif' className='object-cover h-56 w-80 rounded-md' alt='' />
        </div>
        <div className='grid md:col-span-2'>
          <div className='flex flex-col gap-5 px-5 py-5 md:p-16 md:w-2/3'>
            <h2 className='text-5xl'>Exclusive Services</h2>
            <span>Whatever the challenge – increasing sales, generating leads, raising awareness of a brand or product – Algonet Media has the ethos, expertise, team and tech stack to match.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
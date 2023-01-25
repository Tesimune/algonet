import React from 'react'

function Landing() {
  return (
    <div>
      <img src='/images/pagetop.jpg' alt='top' />
      <div className='grid md:grid-cols-3 m-28 bg-slate-900 text-white rounded-lg'>
        <div className='grid col-span-1 justify-center items-center'>
          <img src='/images/gif.png' className='h-full w-full' alt='' />
        </div>
        <div className='grid col-span-2'>
          <div className='flex flex-col gap-5 p-16 w-2/3'>
            <h2 className='text-5xl'>Exclusive Services</h2>
            <span>Whatever the challenge – increasing sales, generating leads, raising awareness of a brand or product – Algonet Media has the ethos, expertise, team and tech stack to match.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
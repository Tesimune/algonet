import React from 'react'

function Landing() {
  return (
    <div>
      <section className='grid justify-start md:w-2/3 gap-3 py-28 px-5 md:px-28 text-white'>
        <span className='text-5xl'>Connect with us to help </span>
        <span className='text-5xl'>shape your </span>
        <span className='text-xl py-3 space-y-3'>Book a consultation session with one of our experts, and we will find a tailored solution for you.</span>
        <div>
          <button className='bg-red-500 text-white text-sm py-3 px-5'>Let’s Connect</button>
        </div>
      </section>
    </div>
      
  )
}

export default Landing
import React from 'react'
import { Link } from 'react-router-dom'
import TextAnimation from '../TextAnimation'

function Landing() {
  return (
    <div>
      <section className='grid justify-start md:w-2/3 gap-5 py-16 px-5 md:px-28 text-white'>
        <span className='text-4xl md:text-5xl'>Connect with us to help</span>
        <div className='text-4xl md:text-5xl'>
          <TextAnimation>
            shape your Brand's Future.
          </TextAnimation>
        </div>
        <div className='grid gap-1'>
          <span className='text-xl'>Book a consultation session with one of our expert,</span>
          <span className='text-xl'>and we will find a tailored solution for you.</span>
        </div>
        <div className='pt-5'>
          <Link to='/contact' className='bg-red-500 text-white border-red-600 text-sm py-3 px-5 hover:bg-white hover:text-red-500 transition duration-500 ease-in-out'>
            Let's connect
          </Link>
        </div>
      </section>
    </div>
      
  )
}

export default Landing
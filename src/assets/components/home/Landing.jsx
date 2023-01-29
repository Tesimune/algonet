import React from 'react'
import { Link } from 'react-router-dom'
import TextAnimation from '../TextAnimation'

function Landing() {
  return (
    <div>
      <section className='grid justify-start md:w-2/3 gap-3 py-16 md:py-28 px-5 md:px-28 text-white'>
        <span className='text-4xl md:text-5xl'>Connect your brand to the right audience with Algonet </span>
        <div className='text-4xl md:text-5xl'>
          <TextAnimation>
            shape your Brand's Future 
          </TextAnimation>
        </div>
        <span className='text-xl py-3 space-y-3'>Get the expertise and creaivity needed to propel your business to the next level.</span>
        <div>
          <Link to='/contact' className='bg-red-500 text-white text-sm py-3 px-5'>Book a free consultation</Link>
        </div>
      </section>
    </div>
      
  )
}

export default Landing
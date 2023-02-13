import React from 'react'
import { Link } from 'react-router-dom'
import TextAnimation from '../TextAnimation'

function Landing() {
  return (
    <div className='relative'>
      <div className="absolute right-7 w-2/4 ml-auto pt-64 flex justify-around">
        <div className='shadow-effect' />
        <div className='shadow-effect two' />
        <div className='shadow-effect three' />
        <div className='shadow-effect four' />
      </div>

      <section className='grid justify-start md:w-2/3 gap-5 py-16 px-5 md:px-28 text-white'>
        <span className='text-2xl md:text-5xl z-30'>Connect with us to help</span>
        <div className='text-2xl md:text-5xl z-30'>
          <TextAnimation>
            shape your Brand's Future.
          </TextAnimation>
        </div>
        <div className='grid gap-1 z-30'>
          <span className='text-md md:text-xl'>Get the expertise and creativity </span>
          <span className='text-md md:text-xl'>needed to propel your business to the next level.</span>
        </div>
        <div className='pt-5 z-30'>
          <Link to='/contact' className='bg-red-500 text-white border-red-600 text-sm py-3 px-5 hover:bg-white hover:text-red-500 transition duration-500 ease-in-out'>
            Let's connect
          </Link>
        </div>
      </section>
    </div>
      
  )
}

export default Landing
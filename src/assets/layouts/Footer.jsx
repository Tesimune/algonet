import React from 'react'

function Footer() {
  return (
    <div>
      <div className='grid grid-cols-2 px-9'>
        <div className='flex justify-between bg-algonet-1 text-white p-7'>
          <div className='grid gap-5'>
            <div className='flex'>
              <span className='flex items-center font-bold text-xl uppercase'>ALgonet</span>
              {/* <img className='flex items-center' src='/app/MEDIA.png' alt='logo' /> */}
            </div>
            <span>Algonet Media is a one stop marketing agency that offers creative and professional digital marketing solutions. </span>
          </div>
          <div>
            <ul className='grid gap-2'>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Blogs</li>
              <li>Contact</li>
              <li>More</li>
            </ul>
          </div>
        </div>
        <div className='grid grid-cols-3'>

        </div>
      </div>
    </div>
  )
}

export default Footer
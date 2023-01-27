import React from 'react'

function AppLogo() {
  return (
    <div className='flex gap-2'>
      <span className='flex items-center text-red-700 font-bold text-xl uppercase'>ALgonet</span>
      {/* <span className='logo flex items-center bg-white text-black font-bold text-xl uppercase shadow-xl py-1 px-3'>MEDIA</span> */}
      <img className='flex items-center h-9 hidden md:block' src='/app/MEDIA.png' alt='logo' />
    </div>
  )
}

export default AppLogo
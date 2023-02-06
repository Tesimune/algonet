import React from 'react'

function AppLogo() {
  return (
    <div className='flex gap-2'>
      <span className='flex items-center text-red-700 font-bold text-xl uppercase'>ALgonet</span>
      <span className='logo flex items-center bg-white text-black font-bold text-xl uppercase py-1 pr-3 pl-2 shadow-2xl'>MEDIA</span>
      {/* <div className='hidden md:block'>
        <img className='flex items-center h-9' src='/app/MEDIA.png' alt='logo' />
      </div> */}
    </div>
  )
}

export default AppLogo
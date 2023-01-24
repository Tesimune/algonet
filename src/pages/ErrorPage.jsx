import React from 'react'

function ErrorPage() {
  return (
    <div className='grid justify-center items-center min-h-screen'>
      <div className='grid gap-5 uppercase'>
        <h1 className='flex justify-center items-center text-7xl font-bold'>404</h1>
        <p className='flex justify-center items-center text-xl font-bold'>Page Not Fount</p>
        <a href='/' className='flex justify-center items-center text-blue-600'>Go To HomePage</a>
      </div>
    </div>
  )
}

export default ErrorPage
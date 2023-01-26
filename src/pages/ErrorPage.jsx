import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className='grid justify-center items-center min-h-screen'>
      <div className='grid gap-5 uppercase'>
        <h1 className='flex justify-center items-center text-7xl font-bold'>404</h1>
        <p className='flex justify-center items-center text-xl font-bold'>Page Not Fount</p>
        <Link to='/' className='flex justify-center items-center text-blue-600'>Go To HomePage</Link>
      </div>
    </div>
  )
}

export default ErrorPage
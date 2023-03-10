import React from 'react'

function Pagination() {
  return (
    <div>
        <div className='bg-white hidden justify-center items-center gap-5 md:pt-5 w-full'>
            <a href='' className='flex justify-center items-center w-12 h-12 border rounded-full p-3 bg-red-700 text-white'>1</a>
            <a href='' className='flex justify-center items-center w-12 h-12 border rounded-full p-3'>2</a>
            <a href='' className='flex justify-center items-center w-12 h-12 border rounded-full p-3'>3</a>
            <a href='' className='flex justify-center items-center w-12 h-12 border rounded-full p-3'>4</a>
            <a href='' className='flex justify-center items-center w-12 h-12 border rounded-full p-3'>5</a>
        </div>
    </div>
  )
}

export default Pagination
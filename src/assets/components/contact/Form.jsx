import React from 'react'

function Form() {
  return (
    <div className='grid'>
        <div>
            {/* <img src='/images/pagetop.jpg' alt='top' /> */}
        </div>
        <div className='grid justify-center items-center w-full p-28'>
            <form className='grid gap-5 py-16'>
                <div className='grid gap-3'>
                    <label className='flex items-center'>Name</label>
                    <input className='flex justify-center items-center p-3 border-b-2 outline-none' />
                </div>
                <div className='grid md:flex gap-4'>
                    <div className='grid gap-3'>
                        <label className='flex items-center'>Email</label>
                        <input className='flex justify-center items-center p-3 border-b-2 outline-none' />
                    </div>
                    <div className='grid gap-3'>
                        <label className='flex items-center'>Tel</label>
                        <input className='flex justify-center items-center p-3 border-b-2 outline-none' />
                    </div>
                </div>
                <div className='grid gap-3'>
                    <label className='flex items-center'>Subject</label>
                    <input className='flex justify-center items-center p-3 border-b-2 outline-none' />
                </div>
                <div className='grid gap-3'>
                    <label className='flex items-center'>Message</label>
                    <textarea className='flex justify-center items-center p-3 border-b-2 outline-none' />
                </div>
                <div className='grid justify-end gap-3'>
                    <button className='bg-red-600 text-white flex justify-center items-center py-2 px-3 outline-none'>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Form
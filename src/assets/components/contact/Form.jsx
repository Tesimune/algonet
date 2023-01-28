import React from 'react'
import TextAnimation from '../TextAnimation'

function Form() {
  return (
    <div>
        <img src='/images/pagetop.jpg' alt='top' />
        <div className='grid md:grid-cols-2 gap-3 pt-9 pb-28 px-3 md:px-28'>
            <div className='p-5'>
                <h1 className='text-5xl font-bold'>Contact Us</h1>
                <p className='text-xl pt-7'>What do you have in mind?</p>
                <div className='text-xl pt-3'>
                    <TextAnimation>
                        Send us a Message we'll love to here from you.
                    </TextAnimation>
                </div>
            </div>
            <div className='grid md:justify-center items-center p-5 w-full shadow-xl'>
                <label className='flex items-center text-3xl font-bold'>Contact Form</label>
                <form className='grid gap-5 py-16'>
                    <div className='grid gap-3'>
                        <input type='text' className='flex justify-center items-center p-3 border-b-2 outline-none' />
                        <label className='flex items-center'>Name</label>
                    </div>
                    <div className='grid md:flex gap-4'>
                        <div className='grid gap-3'>
                            <input type='email' className='flex justify-center items-center p-3 border-b-2 outline-none' />
                            <label className='flex items-center'>Email</label>
                        </div>
                        <div className='grid gap-3'>
                            <input type='number' className='flex justify-center items-center p-3 border-b-2 outline-none' />
                            <label className='flex items-center'>Tel</label>
                        </div>
                    </div>
                    <div className='grid gap-3'>
                        <input type='text' className='flex justify-center items-center p-3 border-b-2 outline-none' />
                        <label className='flex items-center'>Subject</label>
                    </div>
                    <div className='grid gap-3'>
                        <textarea type='text' className='flex justify-center items-center p-3 border-b-2 outline-none' />
                        <label className='flex items-center'>Message</label>
                    </div>
                    <div className='grid justify-end gap-3'>
                        <button className='bg-red-600 text-white flex justify-center items-center py-2 px-3 outline-none'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Form
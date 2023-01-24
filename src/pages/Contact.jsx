import React from 'react'


export function Contact () {
    return ( 
        <div className='bg-[url(/app/bglight.jpg)] p-28'>
          <div className='grid md:grid-cols-3 bg-slate-900 text-white rounded-lg'>
            <div className='grid col-span-1'>
              <img src='/images/contacts.png' className='' alt='' />
            </div>
            <div className='grid col-span-2'>
              <div className='flex flex-col gap-5 p-16 w-2/3'>
                <h2 className='text-5xl'>Ready to leave a mark?</h2>
                <span>Book a consultation session with one of our experts, and we will find a tailored solution for you.</span>
                <div className='pt-7'>
                  <a href='' className='bg-white border border-red-600 p-3 text-red-600'>Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
     );
}



function ContactPage() {
  return (
    <div>Contact</div>
  )
}

export default ContactPage
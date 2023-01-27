import React from 'react'
import Pagination from '../Pagination'

function WorkList() {
  return (
    <div className='bg-[url(/app/bglight.jpg)]'>
        <div>
            <div className='grid gap-5'>
                <div className='grid md:grid-cols-3 gap-9 px-5 md:px-28 '>
                    <div className='grid justify-center font-semibold gap-3'>
                        <img src='/images/div9.png' alt='' />
                        <span className='pl-5 flex justify-start text-lg'>Virtual  Marketing </span>
                        <span className='pl-5 flex justify-start text-xs'>Recruiting an entire Digital Marketing team internally isn't an option for some businesses.</span>
                        <div className='pl-5 pt-3'>
                            <a href='' className='text-red-700 border-b-2 border-red-700'>Learn more</a>
                        </div>
                    </div>
                    <div className='grid justify-center font-semibold gap-3'>
                        <img src='/images/div10.png' alt='' />
                        <span className='pl-5 flex justify-start text-lg'>Copywriting</span>
                        <span className='pl-5 flex justify-start text-xs'>Why not check out our copywriting service which can cover all types of page for your website?</span>
                        <div className='pl-5 pt-3'>
                            <a href='' className='text-red-700 border-b-2 border-red-700'>Learn more</a>
                        </div>
                    </div>
                    <div className='grid justify-center font-semibold gap-3'>
                        <img src='/images/div11.png' alt='' />
                        <span className='pl-5 flex justify-start text-lg'>Social Media</span>
                        <span className='pl-5 flex justify-start text-xs'>Why not check out our copywriting service which can cover all types of page for your website?</span>
                        <div className='pl-5 pt-3'>
                            <a href='' className='text-red-700 border-b-2 border-red-700'>Learn more</a>
                        </div>
                    </div>
                    <div className='grid justify-center font-semibold gap-3'>
                        <img src='/images/div12.png' alt='' />
                        <span className='pl-5 flex justify-start text-lg'>SEO</span>
                        <span className='pl-5 flex justify-start text-xs'>Our SEO service is geared towards an increase in unique visitors and a better conversion rate.</span>
                        <div className='pl-5 pt-3'>
                            <a href='' className='text-red-700 border-b-2 border-red-700'>Learn more</a>
                        </div>
                    </div>
                    <div className='grid justify-center font-semibold gap-3'>
                        <img src='/images/div13.png' alt='' />
                        <span className='pl-5 flex justify-start text-lg'>Website Design</span>
                        <span className='pl-5 flex justify-start text-xs'>Whether for business or e-commerce, we have the design know how and expertise to make you brand stand out</span>
                        <div className='pl-5 pt-3'>
                            <a href='' className='text-red-700 border-b-2 border-red-700'>Learn more</a>
                        </div>
                    </div>
                    <div className='grid justify-center font-semibold gap-3'>
                        <img src='/images/div14.png' alt='' />
                        <span className='pl-5 flex justify-start text-lg'>Video</span>
                        <span className='pl-5 flex justify-start text-xs'>We have the equipment and experience to provide full, bespoke video marketing solutions</span>
                        <div className='pl-5 pt-3'>
                            <a href='' className='text-red-700 border-b-2 border-red-700'>Learn more</a>
                        </div>
                    </div>
                    <div className='grid justify-center font-semibold gap-3'>
                        <img src='/images/div6.png' alt='' />
                        <span className='pl-5 flex justify-start text-lg'>Branding</span>
                        <span className='pl-5 flex justify-start text-xs'>Algonet Media has some of the most creative minds ready to bring your vision, logo and branding to life.</span>
                        <div className='pl-5 pt-3'>
                            <a href='' className='text-red-700 border-b-2 border-red-700'>Learn more</a>
                        </div>
                    </div>
                    <div className='grid justify-center font-semibold gap-3'>
                        <img src='/images/div15.png' alt='' />
                        <span className='pl-5 flex justify-start text-lg'>Web 3</span>
                        <span className='pl-5 flex justify-start text-xs'>As a full-service digital agency we believe consistency is key across all digital marketing remits.</span>
                        <div className='pl-5 pt-3'>
                            <a href='' className='text-red-700 border-b-2 border-red-700'>Learn more</a>
                        </div>
                    </div>
                    <div className='grid justify-center font-semibold gap-3'>
                        <img src='/images/div16.png' alt='' />
                        <span className='pl-5 flex justify-start text-lg'>Virtual  Marketing </span>
                        <span className='pl-5 flex justify-start text-xs'>Recruiting an entire Digital Marketing team internally isn't an option for some businesses.</span>
                        <div className='pl-5 pt-3'>
                            <a href='' className='text-red-700 border-b-2 border-red-700'>Learn more</a>
                        </div>
                    </div>
                </div>

                <Pagination />
            </div>
        </div>
    </div>
  )
}

export default WorkList
import React, { Children } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function LayoutComponents(props) {
  return (
    <div>
        {/* <Navbar /> */}
          <div className='min-h-screen'>
            { props.children }
          </div>
        <Footer />
    </div>
  )
}

export default LayoutComponents
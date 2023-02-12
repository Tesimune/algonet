import React from 'react';

export default function NavLink({ active, children }) {

   return (
        <div
            id='activeLink'
            className='text-md md:text-sm inline-flex items-center px-1 pt-1 font-medium leading-5 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out'
        >
            {children}
        </div>
    );
}

// 
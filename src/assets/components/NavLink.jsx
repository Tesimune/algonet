import React from 'react';

export default function NavLink({ active, children }) {

    const currentPath = window.location.pathname;
    if (active === currentPath) {
        // document.querySelector('#activeLink').classList.add('border-b-2', 'border-red-500', 'text-red-500');
      }
    return (
        <div
            id='activeLink'
            className='inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out'
        >
            {children}
        </div>
    );
}

// 
import React from 'react'

const Header = () => {
  return (
    <div className='w-100 flex items-center justify-between p-5 bg-[#222222] text-white'>
        <h1 className='text-5xl font-extrabold'>IFTTT</h1>

        <ul className='menus flex items-center justify-center gap-10 text-2xl font-bold'>
            <li>Explore</li>
            <li>Solutions</li>
            <li>Plans</li>
            <li>Log in</li>
            <button className='px-6 py-3 bg-white rounded-full text-black leading-relaxed'>Get started</button>
        </ul>
    </div>
  )
}

export default Header
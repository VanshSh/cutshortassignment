import React from 'react'
import { TbStars } from 'react-icons/tb'

const Header = () => {
    return (
        <header className='mb-10 mr-16 bg-green-600 lg:bg-red-500   '>
            <h1 className='flex font-bold  text-3xl '>
                <TbStars className='text-[#664de5] mx-2 ' />
                Eden
            </h1>
        </header>
    )
}

export default Header

//   <header className='mb-10 mr-16 bg-green-600 lg:bg-red-500 md:bg-fuchsia-500 sm:bg-blue-500  '>

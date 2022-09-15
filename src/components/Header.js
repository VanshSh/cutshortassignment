import React from 'react'
import { TbStars } from 'react-icons/tb'

const Header = () => {
    return (
        <header className='mb-10'>
            <h1 className='flex font-bold  text-3xl '>
                <TbStars className='text-[#664de5] mx-2 ' />
                Eden
            </h1>
        </header>
    )
}

export default Header

import React from 'react'
import { TbStars } from 'react-icons/tb'
import edenIcon from '../assets/adenIcon.png'

const Header = () => {
    return (
        <header className='mb-14'>
            <h1 className='flex font-bold  text-4xl '>
                <img src={edenIcon} alt='eden icon' className='w-12 h-12' />
                Eden
            </h1>
        </header>
    )
}

export default Header

import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({ title, path }) => {
    const navigate = useNavigate()
    return (
        <button
            onClick={() => navigate(path)}
            className='bg-[#664de5] text-white lg:text-xl
         px-24 rounded cursor-pointer my-8 py-3 items-center justify-center flex'
        >
            {title}
        </button>
    )
}

export default Button

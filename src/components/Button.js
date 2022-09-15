import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({ title, path }) => {
    const navigate = useNavigate()
    return (
        <button
            onClick={() => navigate(path)}
            className='bg-[#664de5] text-white lg:text-xl
         lg:px-20 px-10 rounded cursor-pointer my-8 py-3 text-md items-center justify-center flex'
        >
            {title}
        </button>
    )
}

export default Button

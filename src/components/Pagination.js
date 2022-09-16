import React, { useState } from 'react'
import { useStepCounter } from '../context/context'

const Pagination = () => {
    let steps = Array.from({ length: 4 }, (_, i) => i + 1)
    const { page } = useStepCounter()

    return (
        <div className='mb-14'>
            <ul className='flex mx-5 flex-1 w-[50vh] items-center justify-evenly'>
                {steps.map((step) => {
                    return (
                        <li
                            className={`flex justify-center border rounded-full h-12 w-12 text-xl  items-center ${
                                step === page || step < page
                                    ? 'bg-[#664de5] text-white'
                                    : ''
                            } `}
                        >
                            {step}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Pagination

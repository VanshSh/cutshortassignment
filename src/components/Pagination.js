import React, { useState } from 'react'
import { useStepCounter } from '../context/context'

const Pagination = () => {
    let steps = Array.from({ length: 4 }, (_, i) => i + 1)
    const { page } = useStepCounter()

    return (
        <div className='mb-14'>
            <ul className='flex flex-1 w-[50vw] items-center justify-center '>
                {steps.map((step) => {
                    return (
                        <React.Fragment>
                            <li
                                className={`flex justify-center border rounded-full w-12 h-12 text-xl  items-center ${
                                    step === page || step < page
                                        ? 'bg-[#664de5] text-white'
                                        : ''
                                } `}
                            >
                                {step}
                            </li>
                            <div
                                className={`h-[1px]   bg-gray-200 ${
                                    step < 4 ? 'w-10' : ''
                                }
                                 `}
                            ></div>
                        </React.Fragment>
                    )
                })}
            </ul>
        </div>
    )
}

export default Pagination
//  <div className='mb-14'>
//             <ul className='flex mx-5 flex-1 w-[40vw] items-center justify-evenly'>
//                 {steps.map((step) => {
//                     return (
//                         <React.Fragment>
//                             <li
//                                 className={`flex justify-center border rounded-full w-10 h-1/2 text-xl  items-center ${
//                                     step === page || step < page
//                                         ? 'bg-[#664de5] text-white'
//                                         : ''
//                                 } `}
//                             >
//                                 {step}
//                             </li>
//                             <div className='w-12 bg-red-400 h-[0.5px]'></div>
//                         </React.Fragment>
//                     )
//                 })}
//             </ul>
//         </div>

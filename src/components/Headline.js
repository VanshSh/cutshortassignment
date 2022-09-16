import React from 'react'

const Headline = ({ mainHeading, subHeading }) => {
    return (
        <main className='text-center mb-10'>
            <h1 className='text-3xl   font-bold '>{mainHeading}</h1>
            <h4 className='mt-2 text-xl text-gray-500'>{subHeading}</h4>
        </main>
    )
}

export default Headline

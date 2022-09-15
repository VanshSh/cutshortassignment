import React from 'react'

const Headline = ({ mainHeading, subHeading }) => {
    return (
        <main className='text-center mb-10'>
            <h1 className='lg:text-4xl text-2xl font-bold '>{mainHeading}</h1>
            <h4 className='mt-2 lg:text-xl text-lg text-gray-500'>
                {subHeading}
            </h4>
        </main>
    )
}

export default Headline

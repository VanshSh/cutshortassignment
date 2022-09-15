import React from 'react'

const Headline = ({ mainHeading, subHeading }) => {
    return (
        <main className='text-center font-[inter] mb-20'>
            <h1 className='text-3xl font-bold '>{mainHeading}</h1>
            <h4 className='mt-2 text-lg'>{subHeading}</h4>
        </main>
    )
}

export default Headline

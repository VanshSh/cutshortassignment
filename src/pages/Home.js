import React from 'react'
import Button from '../components/Button'
import Headline from '../components/Headline'

const Home = () => {
    return (
        <div className='px-10'>
            <Headline
                mainHeading='Welcome! First things first..'
                subHeading='You can always change them later.'
            />

            <form action='' className='flex flex-col '>
                <label
                    htmlFor='fullName'
                    className='text-md my-2 font-semibold text-gray-700'
                >
                    Full Name
                </label>
                <input
                    type='text'
                    className='border-2 rounded border-gray-300 p-2'
                    placeholder='Steve Jobs'
                />
                <label
                    htmlFor='displayName'
                    className='text-md mb-2 mt-6 font-semibold text-gray-700'
                >
                    Display Name
                </label>
                <input
                    type='text'
                    className='border-2 rounded border-gray-300 p-2'
                    placeholder='Steve'
                />

                <Button title='Create workspace' path='/setup' />
            </form>
        </div>
    )
}

export default Home

import React from 'react'
import Button from '../components/Button'
import Headline from '../components/Headline'
import { AiFillCheckCircle } from 'react-icons/ai'

const Congratulation = () => {
    return (
        <div className='items-center px-10 flex  flex-col justify-center'>
            <Headline
                mainHeading='Congratulations, Eren!'
                subHeading={`You have completed onboarding, you can start using Eden!`}
            />
            <AiFillCheckCircle className='text-8xl text-[#664de5]' />
            <div className='flex flex-col '>
                <Button title='Launch Eden' path='/' />
            </div>
        </div>
    )
}

export default Congratulation

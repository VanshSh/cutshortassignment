import React from 'react'
import Button from '../components/Button'
import Headline from '../components/Headline'
import { AiFillCheckCircle } from 'react-icons/ai'

const Congratulation = () => {
    return (
        <div className=' flex flex-col '>
            <Headline
                mainHeading='Congratulations, Eren!'
                subHeading={`You have completed onboarding, you can start using Eden!`}
            />
            <div className='flex items-center justify-center'>
                <AiFillCheckCircle className='text-8xl my-10  text-[#664de5]' />
            </div>

            <Button title='Launch Eden' path='/' />
        </div>
    )
}

export default Congratulation

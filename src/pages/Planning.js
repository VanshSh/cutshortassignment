import React from 'react'
import Button from '../components/Button'
import Headline from '../components/Headline'

const Planning = () => {
    return (
        <div className='px-10'>
            <Headline
                mainHeading='How are you planning to use Eden? '
                subHeading={`We'll streamline your setup experience accordingly.`}
            />

            <div className='flex flex-col '>
                <Button title='Create workspace' path='/congratulation' />
            </div>
        </div>
    )
}

export default Planning

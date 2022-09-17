import React from 'react'
import Button from '../components/Button'
import Headline from '../components/Headline'
import { BsFillPersonFill } from 'react-icons/bs'
import { GrGroup } from 'react-icons/gr'
const Planning = () => {
    return (
        <div>
            <Headline
                mainHeading='How are you planning to use Eden? '
                subHeading={`We'll streamline your setup experience accordingly.`}
            />

            <div className='flex flex-col  '>
                <div className='flex lg:flex-row flex-col  '>
                    <div className='border hover:border-[#664de5] cursor-pointer rounded lg:p-6 p-4  lg:mr-10 lg:mb-0 mb-2'>
                        <BsFillPersonFill className='text-2xl text-[#664de5]' />
                        <h3 className='text-lg text-black font-bold mt-5'>
                            For myself
                        </h3>
                        <p className='text-gray-700 font-semibold lg:text-lg text-md mt-4'>
                            Write better. Think more clearly. Stay organized.
                        </p>
                    </div>
                    <div className='border hover:border-[#664de5] cursor-pointer rounded lg:p-6 p-4 lg:mb-0 mb-2'>
                        <GrGroup className='text-2xl text-[#664de5]' />
                        <h3 className='text-lg text-black font-bold mt-5'>
                            With my team
                        </h3>
                        <p className='text-gray-700 font-semibold lg:text-lg text-md mt-4'>
                            Wikis, docs, tasks & projects, all in one place.
                        </p>
                    </div>
                </div>
                <Button title='Create workspace' path='/launch' />
            </div>
        </div>
    )
}

export default Planning

import React from 'react'
import Button from '../components/Button'
import Headline from '../components/Headline'
import { BsFillPersonFill } from 'react-icons/bs'
import { GrGroup } from 'react-icons/gr'
const Planning = () => {
    return (
        <div className='px-10 '>
            <Headline
                mainHeading='How are you planning to use Eden? '
                subHeading={`We'll streamline your setup experience accordingly.`}
            />

            <div className='flex flex-col lg:w-[70vh] '>
                <div className='flex'>
                    <div className='border border-[#664de5] cursor-pointer rounded p-10 mr-10'>
                        <BsFillPersonFill className='text-2xl text-[#664de5]' />
                        <h3 className='text-lg text-black font-bold mt-5'>
                            For myself
                        </h3>
                        <p className='text-gray-700 font-semibold text-lg mt-4'>
                            Write better. Think more clearly. Stay organized.
                        </p>
                    </div>
                    <div className='border  cursor-pointer rounded p-10 '>
                        <GrGroup className='text-2xl text-[#664de5]' />
                        <h3 className='text-lg text-black font-bold mt-5'>
                            With my team
                        </h3>
                        <p className='text-gray-700 text-lg mt-4 font-semibold'>
                            Wikis, docs, tasks & projects, all in one place.
                        </p>
                    </div>
                </div>
                <Button title='Create workspace' path='/congratulation' />
            </div>
        </div>
    )
}

export default Planning

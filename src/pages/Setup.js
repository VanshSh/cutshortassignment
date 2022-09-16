import React from 'react'
import Button from '../components/Button'
import Headline from '../components/Headline'

const Setup = () => {
    return (
        <div className='px-10'>
            <Headline
                mainHeading={`Let's set up a home for all your work`}
                subHeading='You can always create another workspace later.'
            />

            <form action='' className='flex flex-col '>
                <label
                    htmlFor='workspaceName'
                    className='text-lg my-2 font-semibold text-gray-700'
                >
                    Workspace Name
                </label>
                <input
                    type='text'
                    className='border-2 rounded border-gray-300 p-2'
                    placeholder='Eden'
                />
                <label
                    htmlFor='workspaceUrl'
                    className='text-lg mb-2 mt-6 font-semibold text-gray-700'
                >
                    Workspace URL{' '}
                    <span className='text-gray-500'>(optional)</span>
                </label>

                <div className='flex items-center justify-center border rounded border-gray-300'>
                    <span className='bg-gray-200 text-gray-600 p-2'>
                        www.eden.com/
                    </span>

                    <input
                        type='text'
                        className=' flex flex-1 ml-2'
                        placeholder='Example'
                    />
                </div>

                <Button title='Create workspace' path='/planning' />
            </form>
        </div>
    )
}

export default Setup

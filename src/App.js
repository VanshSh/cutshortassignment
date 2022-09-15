import Button from './components/Button'
import Header from './components/Header'
import Headline from './components/Headline'

function App() {
    return (
        <div className='flex flex-col h-[40vh] justify-center items-center  '>
            <Header />
            <Headline
                mainHeading='Welcome! First thing first'
                subHeading='You can always change them later.'
            />
            <Button title='Create Workspace' />
        </div>
    )
}

export default App

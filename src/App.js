import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Setup from './pages/Setup'
import Plan from './pages/Plan'
import Launch from './pages/Launch'
import Pagination from './components/Pagination'
import { useStepCounter } from './context/context'

function App() {
    const { page } = useStepCounter()
    return (
        <div className='flex flex-col justify-center mx-10 items-center mt-20  '>
            <Header />
            <Pagination />
            <div className=' lg:w-[35vw]'>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='setup' element={<Setup />} />
                        <Route path='plan' element={<Plan />} />
                        <Route path='launch' element={<Launch />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default App

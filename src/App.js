import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Setup from './pages/Setup'
import Planning from './pages/Planning'
import Congratulation from './pages/Congratulation'
import Pagination from './components/Pagination'
import { useStepCounter } from './context/context'

function App() {
    const { page } = useStepCounter()
    return (
        <div className='flex flex-col justify-center items-center mt-20  '>
            <Header />
            <Pagination />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='setup' element={<Setup />} />
                    <Route path='planning' element={<Planning />} />
                    <Route path='congratulation' element={<Congratulation />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App

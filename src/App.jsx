import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Sucess from './pages/Sucess';

function App() {
    return (
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/sucess' element={<Sucess />}></Route>
        </Routes>
    )
}

export default App

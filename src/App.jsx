import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Sucess from './pages/Sucess';
import _401 from './pages/_401';
import _404 from './pages/_404';

function App() {
    return (
        <Routes>
            <Route index element={<Home />}></Route>
            <Route exact path='/sucess' element={<Sucess />}></Route>
            <Route exact path='/401' element={<_401 />}></Route>
            <Route exact path='*' element={<_404 />}></Route>
        </Routes>
    )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Product } from './pages/Product';
import { Login } from './pages/Login';
import { Cadastro } from './pages/Cadastro';
import { Dashboard } from './pages/Dashboard';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/product' element={<Product/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/cadastro' element={<Cadastro/>} />
                <Route path='/dashboard' element={<Dashboard/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
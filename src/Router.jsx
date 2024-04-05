import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Product } from './pages/Product';
import { Login } from './pages/Login';
import { Cadastro } from './pages/Cadastro';
import { Dashboard } from './pages/Dashboard';
import { DashboardListUser } from './pages/DashboardListUser';
import { DashboardListProduct } from './pages/DashboardListProduct';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/product/:id' element={<Product/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/cadastro' element={<Cadastro/>} />
                <Route path='/dashboard' element={<Dashboard/>} />
                <Route path='/dashboard/listuser' element={<DashboardListUser />} />
                <Route path='/dashboard/listproduct' element={<DashboardListProduct />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;